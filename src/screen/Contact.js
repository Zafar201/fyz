import React, { useEffect } from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <>
    <div
      className="contact"
      style={{ backgroundImage: `url("../assets/image/contactbg3.jpeg")` }}
    >
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container className="nav-pad">
          <Col md={8} className="logo">
            <Link to="/">
              {' '}
              <img src="../assets/image/logo.png" alt="" />
            </Link>
          </Col>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Col md={6}>
                <Link to="/">
                  {' '}
                  <Nav.Link href="#deets">Home</Nav.Link>{' '}
                </Link>
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

      <Container className="contact-2">
        <Row>
          <Col md={8}>
            <Container>
              <Row>
                <h1>Connect with us</h1>
                <p>
                  Fill the form and we’ll be getting in touch with you ASAP!
                </p>
              </Row>
              <Row>
                <div className="contact-2-pad">
                  <Row>
                    <input type="text" placeholder="Your name" />
                  </Row>
                  <Row className="contact-2-pd">
                    <input type="text" placeholder="Your email" />
                  </Row>
                  <Row>
                    {/* <input type="text"  text/> */}
                    <textarea
                      name=""
                      id=""
                      cols="6"
                      rows="6"
                      placeholder="what whould you like to know"
                    ></textarea>
                  </Row>
                  <Row className='submit'>
                    <button>Submit</button>
                  </Row>
                </div>
              </Row>
            </Container>
          </Col>

          <Col className="contact-right">
            <Row className="contact-right1">
              <img src="../assets/image/email.png" alt="" />
            </Row>
            <Row className="contact-right2">
              <p>tawilifestyleconcierge@gmail.com</p>
            </Row>

            <Row className="contact-right1">
              <img src="../assets/image/phone.png" alt="" />
            </Row>
            <Row className="contact-right2">
              <p>+91 94464 65516</p>
            </Row>

            <Row className="contact-right3">
              <img src="../assets/image/location2.png" alt="" />
            </Row>
            <Row className='contact-right4'>
              <p>
                SatyaSim Niwas Near Ramavarma High School Cherai P. O Pin :
                683514 Ernakulam District Kerala
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
      </div>

      <Container className='contact-map'>
        <Row className='contact-map1'>
          <img src="../assets/image/location3.png" alt="" />
          <p>Locate us in Google Map</p>
        </Row>
        <Row>
        <iframe style={{height:"450px"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.642562700067!2d76.19520311479523!3d10.128315492763246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0810bc1f9c2027%3A0xeab32e7778557666!2sRama%20Varma%20Union%20High%20School!5e0!3m2!1sen!2sin!4v1644147798803!5m2!1sen!2sin" 
        title='map' allowfullscreen="" loading="lazy"></iframe>
        </Row>
      </Container>

      <div className="about-4" style={{ marginTop: '70px' }}>
        <Container>
          <Row>
            <Col md={3}></Col>

            <Col className="about-4-fnt">
              <img src="../assets/image/wtsp.png" alt="" />
              +91 94464 65516
            </Col>
            <Col className="about-4-fnt">
              <img src="../assets/image/phone.png" alt="" />
              +91 94464 65516
            </Col>
            <Col className="about-4-fnt">
              <img src="../assets/image/email.png" alt="" />
              tawilifestyleconcierge@gmail.com
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
    
    </>
  );
}

export default Contact;
