import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/components/Home";
import DashboardPage from "../pages/components/DashboardPage";
import Footer from "../pages/components/Footer";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";
import About from "../pages/components/About";

const FetchedContext = createContext();

function TDLInterface() {
  const [tasks, setTasks] = useState([]);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [descriptionData, setDescriptionData] = useState({})
  const [openUserAccount, setOpenUserAccount] = useState(false);

  const setDataToLocalStorage = (data) => {
    localStorage.setItem("tasks", JSON.stringify(data));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data = await response.json();
        setTasks(data);
        setDataToLocalStorage(data);
      } catch (error) {
        notify("Error Fetching Tasks from API!", "error")
        console.log("Error Fetching Tasks!", error);
      }
    };

    const storedTasks = JSON.parse(localStorage.getItem("tasks"))
    if (storedTasks && storedTasks.length>0) {
      setTasks(storedTasks);
    } else {
      fetchData();
    }
  }, []);


  const deleteTask = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
    let updatedTask = tasks.filter((task)=>task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(updatedTask));
    setTasks(JSON.parse(localStorage.getItem('tasks')))
    notify("Task Deleted SuccessFully!","success")
    isDescriptionOpen && setIsDescriptionOpen(false);
  };

    const showDescription = (id)=>{
      setIsDescriptionOpen(!isDescriptionOpen)
      const updatedDesc = tasks.find((task) => task.id === id);
      setDescriptionData(updatedDesc)
    }

    const notify = (msg,type) => {
      if(type==="success"){
        toast.success(msg);
      }else{
        toast.error(msg);
      }
    }
  return (

    <FetchedContext.Provider
      value={{
        tasks,
        setTasks,
        deleteTask,
        isDescriptionOpen, 
        setIsDescriptionOpen,
        showDescription,
        descriptionData,
        setDescriptionData,
        notify,
        openUserAccount,
        setOpenUserAccount
      }}
    >
      <div className="App">
      <ToastContainer />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </FetchedContext.Provider>
  );
}

export default TDLInterface;
export { FetchedContext };
