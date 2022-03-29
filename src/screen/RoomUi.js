import React, { useEffect, useState } from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { checkProperty } from '../actions/generalAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

function RoomUi() {
  const params = useParams();
  const dispatch = useDispatch()
  const [props,setProps]=useState('')
  
  const checkPropertys= useSelector(state=>state.checkPropertys)
  const {loading, error, prop}= checkPropertys
  const { adult,child,location,startingDate,endingDate,propId,roomId} = params;
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

     
     console.log(price.first,'pr');
     const filterdPrice = prop.find((e)=>e._id == propId ).rooms.find((e)=>e._id == roomId).price;
     setPrice(filterdPrice)
     console.log(filterdPrice,'flll');
    }
    window.scrollTo(0, 0);
}, [dispatch,props.name]);
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
// prop.find((e)=>e._id == propId).rooms.find((e)=>e._id == roomId).map((itm)=>(




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
           <h3>29 January - 30 January</h3>
           </Col>
        
       </Row>
       <Row style={{paddingTop:"10px"}}>
          
           <Col >
              
              <h2>{props.name}</h2>
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
    
       <Row className='roomui-img'>
          <Col md={4}>
             <Row>
               <Col>
                  <img src="/assets/image/ac.png" alt="" />
                  <h5>Air Conditioner</h5>
               </Col>
               <Col>
                  <img src="/assets/image/ac.png" alt="" />
                  <h5>Air Conditioner</h5>
               </Col>
             </Row>
            
            
          </Col> 
          <Col className='price-radio' md={8}>
            <Row>
              <Col md={1}>
                <input
                type="radio"
                id="Reserve Experience"
                value="Reserve Experience"
                name="price"
                required
                checked
                onChange={(e) => setPrices(e.target.value)}
                   ></input>
              </Col>
           <Col>
           <h1>Reserve Experience</h1>
           </Col>
           <Col md={3}>
           <p2>${price.first}</p2> 
           </Col>
         
            </Row>
            <Row>
              <Col md={1}>
                <input
                type="radio"
                id="Reserve Plan Flex"
                value="Reserve Plan Flex"
                name="price"
                required
                checked
                onChange={(e) => setPrices(e.target.value)}
                   ></input>
              </Col>
           <Col>
           <h1>Reserve Plan Flex</h1>
           </Col>
           <Col  md={3}>
            <p2>${price.second}</p2> 
           </Col>
         
            </Row>
            <Row>
              <Col md={1}>
                <input
                type="radio"
                id="ELENA Spa and Wellness"
                value="ELENA Spa and Wellness"
                name="price"
                required
                checked
                onChange={(e) => setPrices(e.target.value)}
                   ></input>
              </Col>
           <Col>
           <h1>ELENA Spa and Wellness</h1>
           </Col>
           <Col  md={3}>
           <p2>  ${price.third}</p2>
           </Col>
         
            </Row>
          </Col> 
       
              
       </Row>
       <Row className='roomui-2'>
           <Col>
             {/* <h6>₹ 1,20,850</h6> */}
           </Col>
           <Col>
              <button onClick={() => navigate(`/confirm/location/${location}/adult/${adult}/child/${child}/startingDate/${startingDate}/endingDate/${endingDate}/propId/${propId}/roomId/${roomId}`)}>Proceed to book</button> 
           </Col>
       </Row>
     </Col>
  </Row>
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