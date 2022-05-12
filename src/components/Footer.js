import React from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

function Footer() {
  return (
    <div className='foooter'>
    <Container>
        <Row className='foooter-1'>
           <img src='../assets/image/Asset 20.png'  />

        </Row>
        
        <Row className="about-4-fnt foooter-2">
          <img src="../assets/image/phone.png" alt="" />
           0484-7180465
        </Row>
        <Row className="about-4-fnt foooter-2" style={{paddingBottom:"30px"}}>
          <img src="../assets/image/email.png" alt="" />
          info@tawifacilities.com
        </Row>
       <Row className='foooter-3' >
          <center>    <hr/></center>
          <Col md={{ span: 1, offset: 3 }}>
          <h3>Home</h3>
          </Col>
          <Col md={1}>
          <h3>About</h3>
          </Col>
          <Col md={2}>
          <h3>Luxury experience</h3>
          </Col>
          <Col md={2}>
          <h3>Book now</h3>
          </Col>
          <center>    <hr/></center>
       </Row>  
       <Row>
          <p> SatyaSim Niwas Near Ramavarma <br/>
             High School Cherai Kerala-683514 (India)</p>
       </Row>  
      <Row className='rights'>
        <Col>
           <h4> All Rights
            Reserved @ TAWI Facilities 2015–2022 .</h4> 
        </Col>
        <Col>
        <img src="../assets/image/instagram.png" alt="" />
          <img src="../assets/image/facebook.png" alt="" />
          <img src="../assets/image/youtube.png" alt="" />
        </Col>
      </Row>   
        
     </Container> 
</div>
  )
}

export default Footer