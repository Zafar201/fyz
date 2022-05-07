import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { approveBooking, getBookings, rejectBooking } from '../actions/adminAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

function AcceptBooking() {
   const bookingList = useSelector((state) => state.bookingList);
   const { loading, error, property } = bookingList;

   const approveBookings = useSelector((state) => state.approveBooking);
   const { success:succesBooking } = approveBookings;
   const rejectBookings = useSelector((state) => state.rejectBooking);
   const { success:rejectSuccess } = rejectBookings;
   const params = useParams();
   const {propId,bookId} = params;
   const navigate = useNavigate()
   const dispatch = useDispatch()
   console.log(propId,'pr')


   useEffect(() => {
      dispatch(getBookings())    
  }, [dispatch,succesBooking,rejectSuccess]);
  if(succesBooking){
     navigate('/updatebooking')
  }
  if(rejectSuccess){
   navigate('/updatebooking')
}

  const approve=()=>{
     dispatch(approveBooking(bookId))
  }

  const reject=()=>{
     dispatch(rejectBooking(bookId))
  }
  return (
    <div className='superadmin updatebooking'>
       
             <Row className='superadmin-top'>
                 <Col className='superadmin-bg' >
                     <Row> 
                         <Col md={2}>
                         <img src="/assets/image/logo-admin.png" alt="" />
                         </Col>
                       
                     </Row>
                 </Col>
                 <Col className='superadmin-bg2 superadmin-nav-active'>
                     <Row>
                       <h1>Access Bookings</h1>
                     </Row>
                 </Col>
                 <Col className=''>
               
                 </Col>
                
                 <Col>
                 </Col>
                
             </Row>
        
             <Row className='superadmin-2'> 
              <Col md={3}>
                 <div >
                  <Link to='/superadmin'> <h2 >User Details</h2></Link> 
                 </div>
                 {/* <div>
                    <h2>Property Status</h2>
                 </div> */}
                 <div className='superadmin-active'>
                     <h2>Update Booking</h2>
                 </div>
              </Col>
                 
                 {loading ? <LoadingBox></LoadingBox>:
                 error? <MessageBox>{error}</MessageBox>:(
            

                 
                 <Col className='acceptbooking'>
                 <Row className='acceptbooking-body'>
                     <h1>Booking id</h1>
                 </Row>
                 <Row className='acceptbooking-body-2'>
                     <Col>
                        <h1> Property Name</h1>
                        <h4>{property.bookings.find((e)=>e._id == bookId).propName}</h4>
                     </Col>
                     <Col>
                     <h1> helooo</h1>
                        <h4>heloooo</h4>
                     </Col>
                     <Col>
                        <h1> Customer detail</h1>
                        <h4>{property.bookings.find((e)=>e._id == bookId).name}</h4>
                        <h4>{property.bookings.find((e)=>e._id == bookId).phone}</h4>
                        <h4>{property.bookings.find((e)=>e._id == bookId).email}</h4>
                        <h4>{property.bookings.find((e)=>e._id == bookId).country}</h4>
                     </Col>
                 </Row>

                 <Row className='acceptbooking-body-2'>
                     <Col>
                        <h1> helooo</h1>
                        <h4>heloooo</h4>
                     </Col>
                     <Col>
                     <h1> helooo</h1>
                        <h4>heloooo</h4>
                     </Col>
                   <Col>
                   
                   </Col>
                 </Row>

                 <Row className='acceptbooking-body-2'>
                     <Col>
                        <h1> plan selected</h1>
                        <h4>{property.bookings.find((e)=>e._id == bookId).propId}</h4>
                     </Col>
                     <Col>
                     
                     </Col>
                   <Col>
                   
                   </Col>
                 </Row>
                 
                 <Row className='acceptbooking-body-3'>
                     <Col>
                        {/* <h1> helooo</h1> */}
                        
                     </Col>

                   
                     {property.bookings.find((e)=>e._id == bookId).adminApproved?
                        <MessageBox>approved</MessageBox>:(
                           <>
                        <Col className='acceptbooking-body-btn'>
                       
                               <button onClick={approve} type='submit'>Accept</button> 
                       </Col>
                      
                             <Col className='acceptbooking-body-btn2'>
                                  <button onClick={reject} type='submit'>Decline</button>
                             </Col>
                        
                     
                   
                       </>
                        )
                           
                        }
            
                   <Col>
                 <Link to='/updatebooking'><h4 >   Go Back  </h4></Link>     
                   </Col>
                 </Row>
             
                
          
           </Col>
               )}
                 
             </Row>

             <Row className='superadmin-2'> 
              <Col >
                 <div>
                
                 </div>   
              </Col>
                         
             </Row>
    </div>
  )
}

export default AcceptBooking