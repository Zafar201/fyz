import React from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Booking() {
  return (
    <div>
       <div
        className="home-container"
        style={{ backgroundImage: `url("../assets/image/homebg3.jpeg")`,height:"100vh" }}
      >
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container className="nav-pad">
            <Col md={8}>
              <Navbar.Brand className="logo">
              <Link to="/"> <img src="../assets/image/logo.png" alt="" /></Link>
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
          <Row className="booking-1">
            <h1>Book your stay</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
            </p>

          </Row>
          <Row className='booking-2'>
              <Col md={1}>
                <img src="../assets/image/calender.png" alt="" />
              </Col>
              <Col>
                <h2>29 January - 30 January</h2>
              </Col>
              
              
          </Row>
        </Container>
      </div>
      <div className='home-card card-2'>     
        <Container className="home-3">
          <Row>
            <Col style={{ padding: '0px' }} md={3} className="home-3-img">
              <img src="../assets/image/home2.png" alt="" />
            </Col>
            <Col>
              <Container>
                <Row>
                  <h1>A Romantic experience.</h1>
                </Row>         
                <Row>
                  <p>
                    Wake up to the rhythm of waves washing ashore in the
                    Maldives. Your loved one is by your side. It’s 14th February
                    - a very special day indeed. You wonder if you made the
                    right decision to come to the Maldives for Valentine’s day.
                    You open the windows to let in the sunshine and the salty
                    tang of the balmy air. Romance, tranquillity and the sweet
                    scent of possibilities is in the air. You know you’ve made
                    the right choice; neither of you would rather be elsewhere.
                    A day of romance, thrills, and adventure awaits you in the
                    sunny isles of the Maldives.
                  </p>
                </Row>
                <Row>
                <Link to="/contact">   <h6>Explore</h6> </Link>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
        </div>

        <div className='home-card'>  
        <Container className="home-3">
          <Row>
            <Col style={{ padding: '0px' }} md={3} className="home-3-img">
              <img src="../assets/image/home3.png" alt="" />
            </Col>
            <Col>
              <Container>
                <Row>
                  <h1>Explore the culture!</h1>
                </Row>
                <Row>
                  {/* <Col md={5} className="home-3-1">
                    <img src="../assets/image/location.png" alt="" /> Maldives
                  </Col> */}
                </Row>
                <Row>
                  <p>
                    Although home to just over half a million people the
                    Maldives has its own unique culture and traditions. While
                    heavily influenced by various cultures around the rim of the
                    Indian Ocean, the Maldivian culture, craft and traditions
                    have been shaped by the island environment and the seas that
                    surround us. Maldives, is blessed with picture perfect palm
                    trees, white sandy beaches, and skies which put on
                    jaw-dropping displays anytime of the day. There are golden
                    sunrises, afternoons filled with clear blue skies, cotton
                    candy sunsets and night skies adorned with billions of
                    stars. All in all, it’s a veritable heaven for those seeking
                    to take some pictures for the ‘gram’.
                  </p>
                </Row>

                <Row>
                <Link to="/contact">   <h6>Explore</h6> </Link>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
        </div>

        <div className='home-card'>  
        <Container className="home-3">
          <Row>
            <Col style={{ padding: '0px' }} md={3} className="home-3-img">
              <img src="../assets/image/home4.png" alt="" />
            </Col>
            <Col>
              <Container>
                <Row>
                  <h1>Explore the landscape!</h1>
                </Row>
                {/* <Row>
                  <Col md={5} className="home-3-1">
                    <img src="../assets/image/location.png" alt="" /> Maldives
                  </Col>
                </Row> */}
                <Row>
                  <p>
                    The country’s unique geography mesmerizes the visitor. Reefs
                    that offer bands of color, tiny jewel-like islands rimmed
                    with the whitest of soft sand surrounded by the clearest
                    shallow waters that one can imagine. Only 200 of the islands
                    are inhabited, and a select few on each of the atolls are
                    resorts and some of the islands are used for industry and
                    agriculture. The beauty of the Maldives is not only above
                    the water. The Maldives is home to about five percent of the
                    planet’s reefs that comes with an explosion of color
                    contributed by soft and hard corals that form them. The
                    reefs are home to a thousand species of fish. Lured by the
                    rich nutrients that flow in with the currents, large pelagic
                    fishes such as manta rays and whale sharks also make the
                    Maldives their home.
                  </p>
                </Row>

                <Link to="/contact">   <h6>Explore</h6> </Link>
                <Row></Row>
              </Container>
            </Col>
          </Row>
        </Container>
        </div>


        <div className="about-4" style={{marginTop:"80px"}}>
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

export default Booking