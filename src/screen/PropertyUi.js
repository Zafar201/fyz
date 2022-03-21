import React, { useEffect } from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function PropertyUi() {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div>

        <div className="propertyui">

       <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container className="nav-pad">
            <Col md={8}>
              <Navbar.Brand className="logo">
              <Link to="/"> <img src="../assets/image/logo-blue.png" alt="" /></Link>
              </Navbar.Brand> 
            </Col>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Col md={6} >
                  <Link to="/">
                    {' '}
                    <Nav.Link href="#deets" >Home</Nav.Link>{' '}
                  </Link>{' '}
                </Col>
                <Col md={6}>
                  <Link to="/about">
                    {' '}
                    <Nav.Link
                      href="#deets"
                      style={{ color: ' #D9B061 !important;' }}
                    >
                      About Us
                    </Nav.Link>
                  </Link>
                </Col>
                <Col md={6}>
                  <Link to="/contact">
                    {' '}
                    <Nav.Link href="#deets">Contact Us</Nav.Link>
                  </Link>
                </Col>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    
     <Container>
        <Row className='propertyui-2'>
            <Col md={2} className='bg'>
               {/* <div style={{background:"#B7B7B7"}}>

               </div>
               <div style={{background:"#C6C6C6"}} >
                 
               </div>
               <div style={{background:"#C6C6C6"}}>
                 
               </div>
               <div style={{background:"#B7B7B7"}}>
                 
               </div>
               <div>
                 
               </div> */}
            </Col>
            <Col md={4}>
               <img src="../assets/image/home2.png" alt="" />
            </Col>
            <Col md={5}>
              <Row>
                <h2>Hurawalhi Island Resort</h2>
              </Row>
              <Row style={{paddingTop:"20px"}}>
                  <Col md={1} className='cl2'>
                     <img src="../assets/image/cl2.png" alt="" />
                  </Col>
                  <Col >
                     <h3>29 January - 30 January</h3>
                  </Col>
              </Row>
              <Row>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                  dolore magna aliqua. Ut enim ad minim veniam,</p>
              </Row>
              <Row>
                  
              </Row>
            </Col>
         </Row>
      </Container>

      <Container style={{paddingTop:"100px"}}>
        <Row className='prop-card'>
          <Col md={4} style={{paddingLeft:"0"}}>
            <img src="../assets/image/hurawalhi2.png" alt="" />
          </Col>

          <Col>
             <Row style={{paddingTop:"38px"}}>
                <Col>
                   <h2>Room Name</h2>
                </Col>
                <Col>
                
                </Col>
             </Row>
             <div className='prop-img'>
               <div>
                  <img src="../assets/image/ppl.png" alt="" />
               </div>
               <div>
                 <p>2 people</p>
               </div>
               <div className='prop-pd'>
                 <img src="../assets/image/bed.png" alt="" />
               </div>
               <div>
               <p>2 people</p>
               </div>
             </div>
              <Row>
                 <h3>Forest View, Biking Activities, Private Pool</h3>
              </Row>
               <Row style={{paddingTop:"35px"}}>
                  <Col>
                    <h4>₹ 1,20,850</h4>
                  </Col>

                  <Col>
                  <Link to='/roomui'>  <button>Book now</button> </Link>
                  </Col>
               </Row>
          </Col>
        </Row>
      </Container>
      
      <Container style={{paddingTop:"100px"}}>
        <Row className='prop-card'>
          <Col md={4} style={{paddingLeft:"0"}}>
            <img src="../assets/image/hurawalhi2.png" alt="" />
          </Col>

          <Col>
             <Row style={{paddingTop:"38px"}}>
                <Col>
                   <h2>Room Name</h2>
                </Col>
                <Col>
                
                </Col>
             </Row>
             <div className='prop-img'>
               <div>
                  <img src="../assets/image/ppl.png" alt="" />
               </div>
               <div>
                 <p>2 people</p>
               </div>
               <div className='prop-pd'>
                 <img src="../assets/image/bed.png" alt="" />
               </div>
               <div>
               <p>2 people</p>
               </div>
             </div>
              <Row>
                 <h3>Forest View, Biking Activities, Private Pool</h3>
              </Row>
               <Row style={{paddingTop:"35px"}}>
                  <Col>
                    <h4>₹ 1,20,850</h4>
                  </Col>

                  <Col>
                  <Link to='/roomui'>  <button>Book now</button> </Link>
                  </Col>
               </Row>
          </Col>
        </Row>
      </Container>
        
     </div>    

     <div className="about-4" >
        <Container>
        <Row>
            <Col md={3}></Col>
            <Col className="about-4-fnt">
              <img src="../assets/image/phone.png" alt="" />
               0484-7180465
            </Col>
            <Col className="about-4-fnt">
              <img src="../assets/image/email.png" alt="" />
              info@tawifacilities.com
            </Col>
            <Col md={2}></Col>
          </Row>

          <Row className="about-4-2">
            <Col md={1}>
              <p>About Us</p>
            </Col>
            <Col md={1}>
              <p>Support</p>
            </Col>
            <Col md={1} className="about-4-2-pad">
              <p>Follow us on</p>
            </Col>
            <Col>
              <img src="../assets/image/instagram.png" alt="" />
              <img src="../assets/image/facebook.png" alt="" />
              <img src="../assets/image/youtube.png" alt="" />
            </Col>
            <Col md={7} className="copyright">
              <p>
              All material herein © 2005–2022 TAWI Facilities All Rights
                Reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
   </div>
  )
}

export default PropertyUi