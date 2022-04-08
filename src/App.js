import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import AllServices from './components/AllServices/AllServices';



function App() {
  return (
    <div className="App">
    <Header></Header>
   <Routes>
    
     <Route path="/Home" element={<Home></Home>}></Route>
     <Route path="/AllServices" element={<AllServices></AllServices>}></Route>
     <Route path="/Login" element={<Login></Login>}></Route>
   </Routes>
    </div>
  );
}

export default App;
