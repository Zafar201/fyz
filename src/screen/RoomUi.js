import React, { useEffect, useState } from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { RadioButton, RadioGroup, ReversedRadioButton } from 'react-radio-buttons';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { checkProperties, checkProperty } from '../actions/generalAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

function RoomUi() {
  const params = useParams();
  const dispatch = useDispatch()
  const [props,setProps]=useState('')
  
  const checkPropertys= useSelector(state=>state.checkPropertys)
  const {loading, error, prop, pri}= checkPropertys
  const { adult,child,location,startingDate,endingDate,propId,roomId} = params;
  const navigate = useNavigate()
  const [prices, setPrices] = useState('');
  console.log(prices,'cs');
  useEffect(() => {

    dispatch(checkProperty( location,adult,child,startingDate,endingDate))

    console.log(roomId);
    if(!loading && !error){
      const filt = prop.find((e)=>e._id == propId ).rooms.find((e)=>e._id == roomId);
      console.log(filt.price.first,'filt');
      setProps(filt)

      setPrices(prop.find((e)=>e._id == propId ).rooms.find((e)=>e._id == roomId).price.first)

     const filterdPrice = prop.find((e)=>e._id == propId ).rooms.find((e)=>e._id == roomId).price;
     console.log(filterdPrice,'flll');
     console.log(prices,'prs');
    }
    window.scrollTo(0, 0);
}, [dispatch,props.name]);

const sal = (e) => {
  console.log(e.target.value);
  setPrices(e.target.value)
}


  return (
    <div>
        <div className="propertyui">

<Navbar collapseOnSelect expand="lg" variant="dark">
   <Container className="nav-pad">
     <Col md={8}>
       <Navbar.Brand className="logo">
       <Link to="/"> <img src="/assets/image/logo-blue.png" alt="" /></Link>
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

{loading ? <LoadingBox></LoadingBox>:
error? <MessageBox></MessageBox>:

<Container>
 <Row className='propertyui-2  roomui'>
     <Col md={2}>
     
     </Col>
     <Col md={4} className='roomuiimg'>
        <img src="/assets/image/home2.png" alt="" />
     </Col>
     <Col md={6}>
       <Row>
       <Col md={1} className='cl2 roomui2'>
              <img src="/assets/image/cl2.png" alt="" />
           </Col>
           <Col>
           <h3>{startingDate} - {endingDate}</h3>
           </Col>
        
       </Row>
       <Row style={{paddingTop:"10px"}}>
          
           <Col >
              
              <h2>{prop.find((e)=>e._id == propId ).rooms.find((e)=>e._id == roomId).name}</h2>
           </Col>
       </Row>
       
         <div className='prop-img prop-ed'>
               <div>
                  <img src="/assets/image/ppl.png" alt="" />
               </div>
               <div>
                 <p>2 people</p>
               </div>
               <div className='prop-pd'>
                 <img src="/assets/image/bed.png" alt="" />
               </div>
               <div>
               <p>2 people</p>
               </div>
             </div>



             <Container>
               <Row>
                 
               </Row>
             </Container>
    
       <Row className='roomui-img'>
           <Col  md={4}>
        
             <Row>
             {prop.find((e)=>e._id == propId ).rooms.find((e)=>e._id == roomId).amenities.map((amnt,i)=>(
               <Col md={6} style={{textAlignLast:"center"}}>
               <img src={`/assets/image/${amnt}.png`} alt="" />
                  <h5>{amnt}</h5>
               </Col>
               ))} 
             </Row>   
              
          </Col>               
       
          <Col className='price-radio' md={8}>
            <Row>
              <Col md={1}>
                <input
                type="radio"
                id="Reserve Experience"
                value={prop.find((e)=>e._id == propId ).rooms.find((e)=>e._id == roomId).price.first}
                name="price"
                required
                checked 
                onClick={sal}
                   />
              </Col>
           <Col>
              <h1>Reserve Experience</h1>
              <h6>View plans exclusive</h6>
           </Col>
           <Col md={3}>
           <p2>{prop.find((e)=>e._id == propId ).rooms.find((e)=>e._id == roomId).price.first}</p2> 
           </Col>
         
            </Row>
            <Row >
              <Col md={1}>
                <input
                type="radio"
                id="Reserve Plan Flex"
                value={prop.find((e)=>e._id == propId ).rooms.find((e)=>e._id == roomId).price.first}
                name="price"
                required
                checked
                onClick={sal}
                   />
              </Col>
              <Col>
                  <h1>Reserve Plan Flex</h1>
              </Col>
              <Col  md={3}>
                  <p2>{prop.find((e)=>e._id == propId ).rooms.find((e)=>e._id == roomId).price.second}</p2> 
              </Col>
            </Row>
            <Row>
              <Col md={1}>
                <input
                type="radio"
                id="ELENA Spa and Wellness"
                value={prop.find((e)=>e._id == propId ).rooms.find((e)=>e._id == roomId).price.third}
                name="price"
                required
                checked
                onClick={sal}
                   />
              </Col>
           <Col>
           <h1>ELENA Spa and Wellness</h1>
           </Col>
           <Col  md={3}>
           <p2>  {prop.find((e)=>e._id == propId ).rooms.find((e)=>e._id == roomId).price.third}</p2>
           </Col>
         
            </Row>
          </Col> 
       
   
       </Row>
       <Row className='roomui-2'>
           <Col>
             {/* <h6>₹ 1,20,850</h6> */}
           </Col>
           <Col>
              <button onClick={() => navigate(`/confirm/location/${location}/adult/${adult}/child/${child}/startingDate/${startingDate}/endingDate/${endingDate}/propId/${propId}/roomId/${roomId}/prices/${prices}`)}>Proceed to book</button> 
           </Col>
       </Row>
     </Col>
  </Row>
{/* 
  <RadioGroup onChange={ onChange } horizontal>
  <RadioButton value='ok'>
    Apple
  </RadioButton>
  <RadioButton value='ok'>
    Orange
  </RadioButton>
  <RadioButton value="melon">
    Melon
  </RadioButton>
  <ReversedRadioButton value={'ok'}>
    Melon
  </ReversedRadioButton>
</RadioGroup> */}
</Container>


}

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
  )
}

export default RoomUi