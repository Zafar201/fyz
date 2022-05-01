import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCountDetails } from '../actions/adminAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


function SuperAdmin() {
   const countList = useSelector((state) => state.countList);
   const { loading, error, count } = countList;
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getCountDetails())
     
  }, [dispatch]);

  return (
    <div className='superadmin'>
       
             <Row className='superadmin-top'>
                 <Col className='superadmin-bg' cd={3}>
                     <Row>
                        <img src="../assets/image/logo-admin.png" alt="" />
                     </Row>
                 </Col>
                 <Col className='superadmin-bg2'>
                     <Row className='superadmin-nav-active'>
                       <h1>Activity status</h1>
                     </Row>
                 </Col>
                 <Col>
                 <Link to='/updateuser'> <h1>Update User</h1> </Link>
                 </Col>
                 <Col>
                 <Link to='/signuprequest'>  <h1>Sign up request</h1> </Link>
                 </Col>
                 <Col>
                 </Col>
                
             </Row>
            {loading ? <LoadingBox></LoadingBox>:
            error ? <MessageBox>{error}</MessageBox>:(

          <>
             <Row className='superadmin-2'> 
              <Col cd={3}>
                 <div className='superadmin-active'>
                    <h2 >User Details</h2>
                 </div>
                 <div>
                    <h2>User Details</h2>
                 </div>
                 <div>
               <Link to='/updatebooking'> <h2>Update Booking</h2></Link>
                 </div>
              </Col>
                 
                 <Col>
                    <h3>{count.users}<br /> <span>Users</span> </h3>
                 </Col>
                 <Col>
                 <h3>{count.properties}<br /> <span>Properties</span></h3>
                 </Col>
                 <Col>
                 <h3>{count.rooms}<br /><span>Rooms</span></h3>
                 </Col>
                 <Col md={2}>
                    
                 </Col>
                 
             </Row>

             <Row className='superadmin-2'> 
              <Col >
                 <div>
                   
                 </div>   
              </Col>
                 
                 <Col>
                    <h3>{count.bookings}<br /> <span>Booking</span></h3>
                 </Col>
                 <Col>
                 <h3>{count.cBookings} <br /> <span>Completed Booking</span></h3>
                 </Col>
                 <Col>
                 <h3>{count.pBookings}<br /> <span>Pending Bookings</span></h3>
                 </Col>
                 <Col md={2}>
                    
                 </Col>
                 
             </Row>
      
             </>      
      )}
    </div>
  )
}

export default SuperAdmin