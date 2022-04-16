import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function SignUpRequest() {
  return (
    <div className='superadmin signuprequest'>
       
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
        <Col>
         <h1>Update User</h1>
        </Col>
        <Col className='superadmin-nav-active'>
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
        
        <Col className='signup-body'>

        <Row className='signup-body-card'>
         <Col md={2}>
            <h4>username</h4>
         </Col>
         <Col md={1}>
            <img src='../assets/image/eyes.png'/>
         </Col>
         <Col  md={{ span: 1, offset: 2 }}>
        <button>helo</button>
         </Col>
         <Col className='signup-body-button'>
         <button>helo</button>
         </Col>
         <Col>
          <p>7:50pm</p>
         </Col>
        </Row>
        <Row className='signup-body-card'>
        <Col md={2}>
            <h4>username</h4>
         </Col>
         <Col md={1}>
            <img src='../assets/image/eyes.png'/>
         </Col>
         <Col  md={{ span: 1, offset: 2 }}>
        <button>helo</button>
         </Col>
         <Col className='signup-body-button'>
         <button>helo</button>
         </Col>
         <Col>
          <p>7:50pm</p>
         </Col>
        </Row>
        <Row className='signup-body-card'>
        <Col md={2}>
            <h4>username</h4>
         </Col>
         <Col md={1}>
            <img src='../assets/image/eyes.png'/>
         </Col>
         <Col  md={{ span: 1, offset: 2 }}>
        <button>helo</button>
         </Col>
         <Col className='signup-body-button'>
         <button>helo</button>
         </Col>
         <Col>
          <p>7:50pm</p>
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

export default SignUpRequest