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
import PropertyEdit from './screen/PropertyEdit';
import PropertyDetails from './screen/PropertyDetails';
import EditRoom from './screen/EditRoom';
import Booking from './screen/Booking';
import PropertyUi from './screen/PropertyUi';
import RoomUi from './screen/RoomUi';
import ConfirmBooking from './screen/ConfirmBooking';
import SuperAdmin from './superAdmin/SuperAdmin';
import SearchScreen from './screen/SearchScreen';
// import PropertyEdit from '/screen/PropertyEdit'
// import Row,Col,Button from 'react-bootstrap'

function App() {
  return (
    <div className="">
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}>  </Route>
        
      <Route path="/about" element={<About/>}>   </Route>  
      <Route path="/contact" element={<Contact/>}>   </Route>  
      <Route path="/admin" element={<AdminLogin/>}>   </Route>
      <Route path="/superadmin" element={<SuperAdmin/>}>   </Route>
      <Route path="/dashboard" element={<DashBoard/>}>   </Route>
      {/* <Route path="/booking" element={<Booking/>}>   </Route> */}
      {/* <Route path="/propertyui" element={<PropertyUi/>}>   </Route> */}
      {/* <Route path="/roomui" element={<RoomUi/>}>   </Route> */}
      {/* <Route path="/confirm" element={<ConfirmBooking/>}>   </Route> */}
      <Route path="/addroom/:id" element={<AddRoom/>}>   </Route>
      <Route path="/room/:id/edit" exact element={<EditRoom/>}>   </Route>
      <Route path="/property/:id/edit"  element={<PropertyEdit/>}
              exact
            ></Route>
            <Route
              path="/search/location/:location/adult/:adult/child/:child/startingDate/:startingDate/endingDate/:endingDate"
              element={<Booking />}
              exact
            ></Route>
             <Route
              path="/search/location/:location/adult/:adult/child/:child/startingDate/:startingDate/endingDate/:endingDate/propId/:propId"
              element={<PropertyUi />}
              exact
            ></Route>
            <Route
              path="/search/location/:location/adult/:adult/child/:child/startingDate/:startingDate/endingDate/:endingDate/propId/:propId/roomId/:roomId"
              element={<RoomUi />}
              exact
            ></Route>
              <Route
              path="/confirm/location/:location/adult/:adult/child/:child/startingDate/:startingDate/endingDate/:endingDate/propId/:propId/roomId/:roomId/prices/:prices"
              element={<ConfirmBooking />}
              exact
            ></Route>
     <Route path="/property/:id/"  element={<PropertyDetails/>}
              exact
            ></Route>
      <Route path="/addproperty" element={<AddProperty/>}>   </Route>


    
      
      
    </Routes>
  </BrowserRouter>
    
    </div>
  );
}

export default App;
