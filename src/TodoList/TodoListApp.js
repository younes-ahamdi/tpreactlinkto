import React, { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DashboardPage from "./components/DashboardPage";
import Footer from "./components/Footer";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "react-toastify/dist/ReactToastify.min.css";
import './index.css'

const FetchedContext = createContext();

function TDLInterface() {
  const [tasks, setTasks] = useState([]);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [descriptionData, setDescriptionData] = useState({});
  const [openUserAccount, setOpenUserAccount] = useState(false);

  const setDataToLocalStorage = (data) => {
    localStorage.setItem("tasks", JSON.stringify(data));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        setTasks(data);
        setDataToLocalStorage(data);
      } catch (error) {
        notify("Error Fetching Tasks from API!", "error");
        console.error("Error Fetching Tasks!", error);
      }
    };

    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks && storedTasks.length > 0) {
      setTasks(storedTasks);
    } else {
      fetchData();
    }
  }, []);

  const deleteTask = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    });
    const updatedTask = tasks.filter((task) => task.id !== id);
    setDataToLocalStorage(updatedTask);
    setTasks(JSON.parse(localStorage.getItem("tasks")));
    notify("Task Deleted Successfully!", "success");
    if (isDescriptionOpen) setIsDescriptionOpen(false);
  };

  const showDescription = (id) => {
    setIsDescriptionOpen(!isDescriptionOpen);
    const updatedDesc = tasks.find((task) => task.id === id);
    setDescriptionData(updatedDesc);
  };

  const notify = (msg, type) => {
    if (type === "success") {
      alert(msg);
    } else {
      alert(msg);
    }
  };

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
        setOpenUserAccount,
      }}
    >
      <div className="App">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
        <Footer />
      </div>
    </FetchedContext.Provider>
  );
}

export default TDLInterface;
export { FetchedContext };
