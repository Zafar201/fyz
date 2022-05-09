import * as React from "react";
import "./App.css";
import About from "./screen/About";
import Contact from "./screen/Contact";
import Home from "./screen/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./screen/AdminLogin";
import DashBoard from "./screen/DashBoard";
import AddRoom from "./screen/AddRoom";
import AddProperty from "./screen/AddProperty";
import PropertyEdit from "./screen/PropertyEdit";
import PropertyDetails from "./screen/PropertyDetails";
import EditRoom from "./screen/EditRoom";
import Booking from "./screen/Booking";
import PropertyUi from "./screen/PropertyUi";
import RoomUi from "./screen/RoomUi";
import ConfirmBooking from "./screen/ConfirmBooking";
import SuperAdmin from "./superAdmin/SuperAdmin";
import SuperAdminLogin from "./superAdmin/SuperAdminLogin";
import UpdateUser from "./superAdmin/UpdateUser";
import SignUpRequest from "./superAdmin/SignUpRequest";
import UpdateBooking from "./superAdmin/UpdateBooking";
import AcceptBooking from "./superAdmin/AcceptBooking";
import CreateAcount from "./screen/CreateAcount";
import CreatePassword from "./screen/CreatePassword";
import View from "./components/View";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
          </Route>

          <Route path="/about" element={<About />}>
            {" "}
          </Route>
          <Route path="/contact" element={<Contact />}>
            {" "}
          </Route>
          <Route path="/admin" element={<AdminLogin />}>
            {" "}
          </Route>
          <Route path="/register" element={<CreateAcount />}>
            {" "}
          </Route>
          <Route path="/createpass/:id" element={<CreatePassword />}>
            {" "}
          </Route>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashBoard />
              </PrivateRoute>
            }
          ></Route>
           <Route path="/superadminlogin" element={<SuperAdminLogin />}>
            {" "}
          </Route>
          <Route path="/superadmin" 
           element={
            <AdminRoute>
              <SuperAdmin />
            </AdminRoute>
          }>
            {" "}
          </Route>
          <Route path="/updateuser" 
          element={
            <AdminRoute>
              <UpdateUser />
            </AdminRoute>
          }>
            {" "}
          </Route>
          <Route path="/view" element={<View />}>
            {" "}
          </Route>
         
          <Route path="/signuprequest" 
           element={
            <AdminRoute>
              <SignUpRequest />
            </AdminRoute>
          }>
            {" "}
          </Route>
          <Route path="/updatebooking" 
          element={
            <AdminRoute>
              <UpdateBooking/>
            </AdminRoute>
          }>
            {" "}
          </Route>
          <Route
            path="/acceptbooking/propId/:propId/bookId/:bookId"
            
            element={
              <AdminRoute>
                <AcceptBooking/>
              </AdminRoute>
            }>
            {" "}
          </Route>
          <Route
            path="/addroom/:id"
            element={
              <PrivateRoute>
                <AddRoom />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/room/:id/edit" 
          exact 
          element={
            <PrivateRoute>
              <EditRoom/>
            </PrivateRoute>
          }>
            {" "}
          </Route>
          <Route
            path="/property/:id/edit"
            
            element={
              <PrivateRoute>
                <PropertyEdit />
              </PrivateRoute>
            }
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
            path="/confirm/location/:location/adult/:adult/child/:child/startingDate/:startingDate/endingDate/:endingDate/propId/:propId/roomId/:roomId/prices/:prices/name/:name"
            element={<ConfirmBooking />}
            exact
          ></Route>
          <Route
            path="/confirm/location/:location/adult/:adult/child/:child/startingDate/:startingDate/endingDate/:endingDate/propId/:propId/roomId/:roomId/prices//name//"
            element={<ConfirmBooking />}
          ></Route>
          <Route
            path="/property/:id/"
            element={
              <PrivateRoute>
                <PropertyDetails />
              </PrivateRoute>
            }
            exact
          ></Route>

          <Route
            path="/addproperty"
            element={
              <PrivateRoute>
                <AddProperty />
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
