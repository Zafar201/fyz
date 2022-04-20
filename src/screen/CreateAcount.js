import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CreateAcount() {
  return (
    <div>
         <div className='admin-nav'>
       <Container>
           <Row>
               <Col className='admin-logo'>
               <Link to="/">    
                <img src="../assets/image/logo-admin.png" alt="" />
               </Link>
               </Col>
               {/* <Col md={2} className='lang d-flex'>
                 <img src="../assets/image/lang.png" alt="" />
                 <p>  English</p>
                 
                 <img style={{height:"10px",marginTop:"18px"}} src="../assets/image/down-2.png" alt="" />

               </Col> */}
           </Row>
       </Container>
       </div>

      <div className='register'>
       <Container className='register-body'>
           <Row >
              <h1>Create Account</h1>
           </Row>
           <Row className='register-body-1' style={{marginTop:"60px"}}>
               <Col md={4}>
                  <p>First name</p>
                  <input type="text" />
               </Col>
               <Col md={4}>
                    <p>First name</p>
                    <input type="text" />
               </Col>
           </Row>
           <Row className='register-body-2'>
                <p>First name</p>
               <input type="text" />
           </Row>
           <Row className='register-body-2'>
                <p>First name</p>
               <input type="text" />
           </Row>
           <Row>
               <p>Address</p>
               <textarea
                  name="description"
                  id="description" 
                  cols="4"
                  rows="5"
                ></textarea>
           </Row>
           <Row>
              <Link to='/createpass'><button>Submit</button></Link> 
           </Row>
       </Container>
       </div>
    </div>
  )
}

export default CreateAcount