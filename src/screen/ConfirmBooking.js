import React, { useEffect, useState } from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { checkProperty, confirmBooking } from '../actions/generalAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

function ConfirmBooking() {
  const params = useParams();
  const dispatch = useDispatch()
  const [props,setProps]=useState('')
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [amount, setAmount] = useState('1200');
  
  const checkPropertys= useSelector(state=>state.checkPropertys)
  const {loading, error, prop}= checkPropertys
  const { adult,child,location,startingDate,endingDate,propId,roomId,prices:price1,name:selectedplan} = params;
  console.log(price1,'1');
  const bookingConfirm= useSelector((state=>state.bookingConfirm))
  const {success}=bookingConfirm
  const navigate = useNavigate()
  const [price, setPrice] = useState('');
  const [prices, setPrices] = useState('');
  useEffect(() => {
    dispatch(checkProperty( location,adult,child,startingDate,endingDate))
    console.log(roomId);
    if(!loading && !error){
      const filt = prop.find((e)=>e._id == propId ).rooms.find((e)=>e._id == roomId);
      console.log(filt.price.first,'filt');
      setProps(filt)

    }
  
    window.scrollTo(0, 0);
  }, [success,dispatch]);

  if(success){
    alert("thank you for booking")
    navigate('/')
  }

  const submitHandler=(e)=>{
    e.preventDefault()
    dispatch(confirmBooking(propId,roomId,name,email,phone,country,startingDate,endingDate,price1))

  }
  return (
    <div>
      <div className="propertyui">
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container className="nav-pad">
            <Col md={8}>
              <Navbar.Brand className="logo">
                <Link to="/">
                  {' '}
                  <img src="/assets/image/logo-blue.png" alt="" />
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



        <form onSubmit={submitHandler}>
        <Container style={{ paddingTop: '50px' }}>
          <Row className="confirm">
            <Col>
              <Row>
                <h1>Your name</h1>
                <input type="text"
                 id="name"  
                 placeholder="Enter name"
                 required
                 onChange={(e) => setName(e.target.value)} />
              </Row>
              <Row>
                <h1>Email</h1>
                <input type="email"
                id="email"  
                placeholder="Enter email"
                required
                onChange={(e) => setEmail(e.target.value)}
                />
              </Row>
              <Row className="small-input">
                <Col md={3} className="small-input1">
                  <h1>Country code</h1>
                  <input type="text" />
                </Col>
                <Col>
                  <h1>Phone number</h1>
                  <input type="number"
                   id="number"  
                   placeholder="Enter number"
                   required
                   onChange={(e) => setPhone(e.target.value)} />
                </Col>
              </Row>
              <Row>
                <h1>Residence</h1>
                <select  name="country"
                    id="country"
                    onChange={(e) => setCountry(e.target.value)}>
                  <option value="not selected">Please Select</option>
                  <option value="India">India</option>
                  <option value="Uae">UAE</option>
               
                </select>
              </Row>
            </Col>

            {loading ? <LoadingBox></LoadingBox>:
            error ? <MessageBox>{error}</MessageBox>:(

         
            <Col md={{ span: 4, offset: 2 }}>
              <Row className="confirm-card">
                <Container>
                  <Row>
                    <Col md={5}>
                      <img src="/assets/image/confirm.png" alt="" />
                    </Col>
                    <Col md={6}>
                      <Row>
                        <h6>{prop.find((e)=>e._id == propId ).rooms.find((e)=>e._id == roomId).name}</h6>
                      </Row>
                      <div className='d-flex small'>
                        <div>
                          <img src="/assets/image/ppl.png" alt="" />
                        </div>
                        <div>
                          <p>{adult}</p>
                        </div>
                        <div className="prop-pd">
                          <img src="/assets/image/bed.png" alt="" />
                        </div>
                        <div>
                          <p>{child}</p>
                        </div>
                      </div>
                      <Row> 
                      <Col md={1}>
                        <img style={{height:"31px",marginTop:"-17px"}} src="/assets/image/cl2.png" alt="" />
                        </Col>
                        <Col>
                          <p5>{startingDate} - {endingDate}</p5>
                        </Col>
                       
                      </Row>
                    </Col>
                  </Row>
                  <Row style={{ paddingTop: '40px' }} className="pl">
                    <Col md={7}>
                    <h6>Selected Plan</h6>
                    </Col>
                    {/* <Col>
                      <h6>{price1}</h6>
                    </Col> */}
                    
                  </Row>
                  <Row className="pl">
                   <h5>{selectedplan} </h5> 
                  </Row>
                
                  <hr />
                  <Row style={{ paddingTop: '20px' }} className='pl-2'>
                    <Col>
                      <h3>Expected Price</h3>
                    </Col>
                    <Col>
                      <h1>{price1}</h1>
                    </Col>
                    
                  </Row>
                </Container>
              </Row>
              <Row>
                <button type='submit'>confirm booking</button>
              </Row>
            </Col>
               )}
          </Row>
        </Container>
        </form>
      
      </div>

      <div className="about-4">
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
    </div>
  );
}

export default ConfirmBooking;
