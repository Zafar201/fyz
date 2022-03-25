import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function SuperAdmin() {
  return (
    <div className='superadmin'>
       
             <Row className='superadmin-top'>
                 <Col className='superadmin-bg'>
                     <Row>
                        <img src="../assets/image/logo-admin.png" alt="" />
                     </Row>
                 </Col>
                 <Col className='superadmin-bg2'>
                     <Row>
                       <h1>update user</h1>
                     </Row>
                 </Col>
                 <Col>
                  <h1>Update User</h1>
                 </Col>
                 <Col>
                 <h1>Mail to User</h1>
                 </Col>
                 <Col>
                 </Col>
                
             </Row>
        
             <Row className='superadmin-2'> 
              <Col >
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
                    <h3>3500 <br /> <span>Users</span> </h3>
                 </Col>
                 <Col>
                 <h3>3500 <br /> <span>Users</span></h3>
                 </Col>
                 <Col>
                 <h3>3500 <br /><span>Users</span></h3>
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
                    <h3>3500 <br /> <span>Users</span></h3>
                 </Col>
                 <Col>
                 <h3>3500 <br /> <span>Users</span></h3>
                 </Col>
                 <Col>
                 <h3>3500 <br /> <span>Users</span></h3>
                 </Col>
                 <Col md={2}>
                    
                 </Col>
                 
             </Row>
      
             
    
    </div>
  )
}

export default SuperAdmin