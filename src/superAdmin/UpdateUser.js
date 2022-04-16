import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function UpdateUser() {
  return (
     <div className='superadmin updateuser'>
       
             <Row className='superadmin-top'>
                 <Col className='superadmin-bg' >
                     <Row> 
                         <Col md={3}>
                         <img src="../assets/image/logo-admin.png" alt="" />
                         </Col>
                       
                     </Row>
                 </Col>
                 <Col className='superadmin-bg2'>
                     <Row>
                       <h1>update user</h1>
                     </Row>
                 </Col>
                 <Col className='superadmin-nav-active'>
                  <h1>Update User</h1>
                 </Col>
                 <Col>
                 <h1>Mail to User</h1>
                 </Col>
                 <Col>
                 </Col>
                
             </Row>
        
             <Row className='superadmin-2'> 
              <Col md={2}>
                 <div className='superadmin-active'>
                    <h2 >User Details</h2>
                 </div>
                 <div>
                    <h2>User Details</h2>
                 </div>
                 <div>
                     <h2>Update Booking</h2>
                 </div>
              </Col>
                 
                 <Col>
                 <Row className='updateuser-body'>
                   <input type='search' placeholder='Serach User'/>
                 </Row>
                 <Row className='updateuser-body'>
                   <h1>Search results</h1>
                 </Row>
                 <Row className='updateuser-body-card'>
                   <Col >
                     <h4>username</h4>
                   </Col>
                   <Col style={{alignSelf:"center"}}>
                     <img src='../assets/image/nulluser.png' />
                   </Col>
                 </Row>
                 <Row className='updateuser-body-card'>
                   <Col >
                     <h4>username</h4>
                   </Col>
                   <Col style={{alignSelf:"center"}}>
                     <img src='../assets/image/nulluser.png' />
                   </Col>
                 </Row>
                 <Row className='updateuser-body-card'>
                   <Col >
                     <h4>username</h4>
                   </Col>
                   <Col style={{alignSelf:"center"}}>
                     <img src='../assets/image/nulluser.png' />
                   </Col>
                 </Row>
                 </Col>
               
                 
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

export default UpdateUser