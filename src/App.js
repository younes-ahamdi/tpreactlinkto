import './App.css';
import MainPage from './MyComponents/MainPage';
import { Routes, Route } from 'react-router-dom'; 
import Calculatrice from './MyComponents/calculatrice';
import NavBar from './MyComponents/NavBar';
import FormTp from './MyComponents/FormTp';
import FlagTp from './MyComponents/FlagTp';
import TDLInterface from './TodoList/TodoListApp'; 
import NotFound from './MyComponents/NotFound';


// import ProfilApp from './MyComponents/ProfilApp';
// import FlagApp from './MyComponents/FlagApp';
// import TDLInterface from './MyComponents/TDLInterface';
// import Page404 from './MyComponents/Page404';

function App() {
  return (
    <div>
      <NavBar/>
      {/* <MainPage/> */}
      {/* <Calculator/> */}
      {/* <ProfilApp/> */}
      {/* <FlagApp/> */}
      {/* <TDLInterface/> */}
     <Routes> 
        <Route path="/" element={< MainPage/>} />  
        <Route path="*" element={<NotFound />} />
        <Route path="Calculatrice" element={<Calculatrice/>} /> 
        <Route path="FormTp" element={< FormTp/>} /> 
        <Route path="FlagTp" element={<FlagTp/>} /> 
        <Route path="/src/TodoList/*" element={<TDLInterface/>} /> 
        {/*<Route path="/src/MyComponents/TDLInterface.js/*" element={< TDLInterface/>} /> 
        <Route path='*' element={<Page404 />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;