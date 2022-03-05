import * as React from 'react';
import './App.css';
import About from './screen/About';
import Contact from './screen/Contact';
import Home from './screen/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import AdminLogin from './screen/AdminLogin';
import DashBoard from './screen/DashBoard';
import AddRoom from './screen/AddRoom';
import AddProperty from './screen/AddProperty';
// import Row,Col,Button from 'react-bootstrap'

function App() {
  return (
    <div className="">
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}>  </Route>
        
      <Route path="about" element={<About/>}>   </Route>  
      <Route path="contact" element={<Contact/>}>   </Route>  
      <Route path="admin" element={<AdminLogin/>}>   </Route>
      <Route path="dashboard" element={<DashBoard/>}>   </Route>
      <Route path="addroom" element={<AddRoom/>}>   </Route>
      <Route path="addproperty" element={<AddProperty/>}>   </Route>


    
      
      
    </Routes>
  </BrowserRouter>
    
    </div>
  );
}

export default App;
