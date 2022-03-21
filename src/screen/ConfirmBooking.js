import React, { useEffect } from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ConfirmBooking() {
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
                <Link to="/">
                  {' '}
                  <img src="../assets/image/logo-blue.png" alt="" />
                </Link>
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

        <Container style={{ paddingTop: '50px' }}>
          <Row className="confirm">
            <Col>
              <Row>
                <h1>Your name</h1>
                <input type="text" />
              </Row>
              <Row>
                <h1>Email</h1>
                <input type="text" />
              </Row>
              <Row className="small-input">
                <Col md={3} className="small-input1">
                  <h1>Country code</h1>
                  <input type="text" />
                </Col>
                <Col>
                  <h1>Phone number</h1>
                  <input type="text" />
                </Col>
              </Row>
              <Row>
                <h1>Residence</h1>
                <select name="cars" id="cars">
                  <option value="not selected">Please Select</option>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </Row>
            </Col>
            <Col md={{ span: 4, offset: 2 }}>
              <Row className="confirm-card">
                <Container>
                  <Row>
                    <Col md={5}>
                      <img src="../assets/image/confirm.png" alt="" />
                    </Col>
                    <Col md={6}>
                      <Row>
                        <h6>Room Name</h6>
                      </Row>
                      <div className='d-flex small'>
                        <div>
                          <img src="../assets/image/ppl.png" alt="" />
                        </div>
                        <div>
                          <p>2 people</p>
                        </div>
                        <div className="prop-pd">
                          <img src="../assets/image/bed.png" alt="" />
                        </div>
                        <div>
                          <p>2 people</p>
                        </div>
                      </div>
                      <Row> 
                      <Col md={1}>
                        <img style={{height:"31px",marginTop:"-17px"}} src="./assets/image/cl2.png" alt="" />
                        </Col>
                        <Col>
                          <p5>29 January - 30 January</p5>
                        </Col>
                       
                      </Row>
                    </Col>
                  </Row>
                  <Row style={{ paddingTop: '40px' }} className="pl">
                    <Col>
                      <h3>Original price</h3>
                    </Col>
                    <Col>
                      <h4>₹1,45,760</h4>
                    </Col>
                  </Row>
                  <Row className="pl">
                    <Col>
                      <h3>Original price</h3>
                    </Col>
                    <Col>
                      <h4>₹1,45,760</h4>
                    </Col>
                  </Row>
                  <Row className="pl">
                    <Col>
                      <h3>Original price</h3>
                    </Col>
                    <Col>
                      <h4>₹1,45,760</h4>
                    </Col>
                  </Row>
                  <hr />
                  <Row style={{ paddingTop: '20px' }}>
                    <Col>
                      <p2>Total</p2>
                    </Col>
                    <Col>
                      <h7>₹1,20,850</h7>
                    </Col>
                  </Row>
                </Container>
              </Row>
              <Row>
                <button>confirm booking</button>
              </Row>
            </Col>
          </Row>
        </Container>

        <Container></Container>
      </div>

      <div className="about-4">
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
  );
}

export default ConfirmBooking;
