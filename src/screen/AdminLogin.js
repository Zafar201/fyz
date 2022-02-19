import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function AdminLogin() {
  return <div >
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

       <div className='login'>
          <Container>
              <Row>
                  <h1>Login</h1>
                  <p>Manage your properties</p>
              </Row>
              <Row style={{justifyContent:"center",paddingTop:"48px"}} >
                  <div className='login-user'>
                      <img src="../assets/image/user.png" alt="" />
                      <input type="text" placeholder='Username'/>
                  </div>
              </Row>
              <Row style={{justifyContent:"center",paddingTop:"27px"}}>
                  <div className='login-user'>
                      <img src="../assets/image/pass.png" alt="" />
                      <input type="text" placeholder='Password'/>
                  </div>
                 
              </Row>
              <Row className='login-rem'>
                  <Col  md={{ span: 3, offset: 3 }}>
                 
                      <input type="checkbox" /> <span>Remember me</span> 
                  
                  </Col>
                  <Col>
                    <p>Forgot credential?</p>
                  </Col>
                  <Col>
                  </Col>
              </Row>
              <Row style={{justifyContent:"center",paddingTop:"32px"}}>
                 <Link to='/dashboard'><button>Sign in</button></Link> 
              </Row>
              <Row>
                  <h3>Not registered yet? <span>Create an Account</span> </h3>
              </Row>
          </Container>
       </div>
  </div>;
}

export default AdminLogin;
