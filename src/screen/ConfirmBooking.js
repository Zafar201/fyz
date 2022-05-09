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
  const [code, setCode] = useState('');
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
  console.log(code,'cod')
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
    dispatch(confirmBooking(propId,roomId,name,email,code,phone,country,startingDate,endingDate,price1))

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



        <form onSubmit={submitHandler} className='form-mob'>
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
                  <select name='code'
                  id='code' 
                  onChange={(e) => setCode(e.target.value)}
                  >
     <option value="not selected">Please Select</option>
		<option data-countryCode="IN" value="91">India (+91)</option>
		<option data-countryCode="AR" value="54">Argentina (+54)</option>
	
		<option data-countryCode="AU" value="61">Australia (+61)</option>
		<option data-countryCode="AT" value="43">Austria (+43)</option>
		<option data-countryCode="AZ" value="994">Azerbaijan (+994)</option>
		
		<option data-countryCode="BH" value="973">Bahrain (+973)</option>
		<option data-countryCode="BD" value="880">Bangladesh (+880)</option>

		<option data-countryCode="BW" value="267">Botswana (+267)</option>

		<option data-countryCode="CA" value="1">Canada (+1)</option>

		<option data-countryCode="CL" value="56">Chile (+56)</option>
		<option data-countryCode="CN" value="86">China (+86)</option>
		<option data-countryCode="CO" value="57">Colombia (+57)</option>

		<option data-countryCode="EG" value="20">Egypt (+20)</option>
	
		<option data-countryCode="FO" value="298">Faroe Islands (+298)</option>
		<option data-countryCode="FJ" value="679">Fiji (+679)</option>
		<option data-countryCode="FI" value="358">Finland (+358)</option>
		<option data-countryCode="FR" value="33">France (+33)</option>
	
		<option data-countryCode="GE" value="7880">Georgia (+7880)</option>
		<option data-countryCode="DE" value="49">Germany (+49)</option>
	
		<option data-countryCode="HK" value="852">Hong Kong (+852)</option>
		<option data-countryCode="HU" value="36">Hungary (+36)</option>
		<option data-countryCode="IS" value="354">Iceland (+354)</option>
		
		<option data-countryCode="ID" value="62">Indonesia (+62)</option>
		<option data-countryCode="IR" value="98">Iran (+98)</option>
		<option data-countryCode="IQ" value="964">Iraq (+964)</option>
		<option data-countryCode="IE" value="353">Ireland (+353)</option>
		<option data-countryCode="IL" value="972">Israel (+972)</option>
		<option data-countryCode="IT" value="39">Italy (+39)</option>
		<option data-countryCode="JM" value="1876">Jamaica (+1876)</option>
		<option data-countryCode="JP" value="81">Japan (+81)</option>
		<option data-countryCode="JO" value="962">Jordan (+962)</option>
		<option data-countryCode="KZ" value="7">Kazakhstan (+7)</option>
		<option data-countryCode="KE" value="254">Kenya (+254)</option>
		<option data-countryCode="KI" value="686">Kiribati (+686)</option>
		<option data-countryCode="KP" value="850">Korea North (+850)</option>
		<option data-countryCode="KR" value="82">Korea South (+82)</option>
		<option data-countryCode="KW" value="965">Kuwait (+965)</option>
		<option data-countryCode="MW" value="265">Malawi (+265)</option>
		<option data-countryCode="MY" value="60">Malaysia (+60)</option>
		<option data-countryCode="MV" value="960">Maldives (+960)</option>	
		<option data-countryCode="MA" value="212">Morocco (+212)</option>
		<option data-countryCode="MZ" value="258">Mozambique (+258)</option>
		<option data-countryCode="MN" value="95">Myanmar (+95)</option>
		<option data-countryCode="NP" value="977">Nepal (+977)</option>
		<option data-countryCode="NL" value="31">Netherlands (+31)</option>
		<option data-countryCode="NC" value="687">New Caledonia (+687)</option>
		<option data-countryCode="NZ" value="64">New Zealand (+64)</option>	
		<option data-countryCode="NE" value="227">Niger (+227)</option>
		<option data-countryCode="NG" value="234">Nigeria (+234)</option>
		<option data-countryCode="NO" value="47">Norway (+47)</option>
		<option data-countryCode="OM" value="968">Oman (+968)</option>		
		<option data-countryCode="PH" value="63">Philippines (+63)</option>
		<option data-countryCode="PL" value="48">Poland (+48)</option>
		<option data-countryCode="PT" value="351">Portugal (+351)</option>
		<option data-countryCode="PR" value="1787">Puerto Rico (+1787)</option>
		<option data-countryCode="QA" value="974">Qatar (+974)</option>		
		<option data-countryCode="RO" value="40">Romania (+40)</option>
		<option data-countryCode="RU" value="7">Russia (+7)</option>		
		<option data-countryCode="SA" value="966">Saudi Arabia (+966)</option>
		<option data-countryCode="CS" value="381">Serbia (+381)</option>
		<option data-countryCode="SC" value="248">Seychelles (+248)</option>
		<option data-countryCode="SL" value="232">Sierra Leone (+232)</option>
		<option data-countryCode="SG" value="65">Singapore (+65)</option>	
		<option data-countryCode="SO" value="252">Somalia (+252)</option>
		<option data-countryCode="ZA" value="27">South Africa (+27)</option>
		<option data-countryCode="ES" value="34">Spain (+34)</option>
		<option data-countryCode="LK" value="94">Sri Lanka (+94)</option>
	
		<option data-countryCode="SZ" value="268">Swaziland (+268)</option>
		<option data-countryCode="SE" value="46">Sweden (+46)</option>
		<option data-countryCode="CH" value="41">Switzerland (+41)</option>
		<option data-countryCode="SI" value="963">Syria (+963)</option>
		<option data-countryCode="TW" value="886">Taiwan (+886)</option>
		<option data-countryCode="TJ" value="7">Tajikstan (+7)</option>
		<option data-countryCode="TH" value="66">Thailand (+66)</option>

		<option data-countryCode="TN" value="216">Tunisia (+216)</option>
		<option data-countryCode="TR" value="90">Turkey (+90)</option>
		
	<option data-countryCode="GB" value="44">UK (+44)</option> 
		<option data-countryCode="UA" value="380">Ukraine (+380)</option>
		<option data-countryCode="AE" value="971">United Arab Emirates (+971)</option>
		
		
                  </select>
                </Col>
                <Col className='mob-phone'>
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
                   <h5>{selectedplan ? selectedplan : "please select a plan"} </h5> 
                  </Row>
                
                  <hr />
                  <Row style={{ paddingTop: '20px' }} className='pl-2'>
                    <Col>
                      <h3>Expected Price</h3>
                    </Col>
                    <Col>
                      <h1>{price1 ? price1 : "Please select a price"}</h1>
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
