import React, { useEffect } from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { checkProperty } from '../actions/generalAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

function Booking() {
    const params = useParams();
    const dispatch = useDispatch()
    const checkPropertys= useSelector(state=>state.checkPropertys)
    const {loading, error, prop}= checkPropertys
    const { adult,child,location,startingDate,endingDate } = params;
    const navigate = useNavigate()


    useEffect(()=>{
      dispatch(checkProperty(location,adult,child,startingDate,endingDate))                       
    
   },[])
  return (
    <div>
     
      {loading ? <LoadingBox></LoadingBox>:
       error ? <MessageBox>{error}</MessageBox>:(
        <>
       <div
        className="home-container"
        style={{ backgroundImage: `url("/assets/image/homebg3.jpeg")`,height:"100vh" }}
      >
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container className="nav-pad">
            <Col md={8}>
              <Navbar.Brand className="logo">
              <Link to="/"> <img src="/assets/image/logo.png" alt="" /></Link>
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
            <h1>Your search result</h1>
            <p>

            </p>

          </Row>
          <Row className='booking-2'>
              <Col md={1}>
                <img src="/assets/image/calender.png" alt="" />
              </Col>
              <Col>
                <h2>29 January - 30 January</h2>
              </Col>
              
              
          </Row>
        </Container>
      </div>
      {prop.map((itm)=>(
       <div key={itm._id} className='home-card card-2'>     
        <Container className="home-3">
          <Row>
            <Col style={{ padding: '0px' }} md={3} className="home-3-img">
              <img src="/assets/image/home2.png" alt="" />
            </Col>
            <Col>
              <Container>
                <Row>
                  <h1>{itm.name}</h1>
                
                </Row> 
                <Row className='prop-img'>
                  <Col md={1}>
                     <img src="/assets/image/location.png" alt="" />
                  </Col>
                  <Col>
                   <h1>{itm.location}</h1>  
                  </Col>
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
                <Row className='prop-btm'>
                  <Col>
                    <h6>₹ 1,20,850</h6>
                  </Col>
                  <Col>
                    <button onClick={() => navigate(`/search/location/${location}/adult/${adult}/child/${child}/startingDate/${startingDate}/endingDate/${endingDate}/propId/${itm._id}`)}>Select room</button>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
        </div>
   ))}
      

        


        <div className="about-4" style={{marginTop:"80px"}}>
        <Container>
        <Row>
            <Col md={3}></Col>
            <Col className="about-4-fnt">
              <img src="/assets/image/phone.png" alt="" />
               0484-7180465
            </Col>
            <Col className="about-4-fnt">
              <img src="/assets/image/email.png" alt="" />
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
              <img src="/assets/image/instagram.png" alt="" />
              <img src="/assets/image/facebook.png" alt="" />
              <img src="/assets/image/youtube.png" alt="" />
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
    )}  
        
    </div>
  )
}

export default Booking