import React, { useEffect } from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function RoomUi() {
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
         <Col md={6}>
           <Link to="/">
             {' '}
             <Nav.Link href="#deets">Home</Nav.Link>{' '}
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
 <Row className='propertyui-2  roomui'>
     <Col md={2}>
     
     </Col>
     <Col md={5} className='roomuiimg'>
        <img src="../assets/image/home2.png" alt="" />
     </Col>
     <Col md={5}>
       <Row>
       <Col md={1} className='cl2 roomui2'>
              <img src="../assets/image/cl2.png" alt="" />
           </Col>
           <Col>
           <h3>29 January - 30 January</h3>
           </Col>
        
       </Row>
       <Row style={{paddingTop:"10px"}}>
          
           <Col >
              
              <h2>Hurawalhi Island Resort</h2>
           </Col>
       </Row>
       
         <div className='prop-img prop-ed'>
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
    
       <Row className='roomui-img'>
          <Col md={3}>
            <img src="../assets/image/ac.png" alt="" />
            <h5>Air Conditioner</h5>
          </Col> 
          <Col  md={3}>
          <img src="../assets/image/water.png" alt="" />
          <h5>Bathrobe</h5>
          </Col> 
          <Col  md={3}>
          <img src="../assets/image/bathrobe.png" alt="" />
          <h5>High Definition (HD)
                 Flat panel Television</h5>
          </Col> 
          <Col  md={3}>
          <img src="../assets/image/ac.png" alt="" />
          <h5>Instant Hot Water</h5>
          </Col> 
          <Col  md={3}>
          <img src="../assets/image/ac.png" alt="" />
          <h5>Instant Hot Water</h5>
          </Col> 
          <Col md={3}>
          <img src="../assets/image/ac.png" alt="" />
          <h5>Instant Hot Water</h5>
          </Col> 
          
       </Row>
       <Row className='roomui-2'>
           <Col>
             <h6>₹ 1,20,850</h6>
           </Col>
           <Col>
           <Link to='/confirm'>  <button>Proceed to book</button> </Link>
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

export default RoomUi