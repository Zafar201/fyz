import React, { useEffect, useState } from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { RadioButton, RadioGroup, ReversedRadioButton } from 'react-radio-buttons';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import Slider from 'react-slick/lib/slider';
import { checkProperties, checkProperty } from '../actions/generalAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

function RoomUi() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
    ]
  };
  const params = useParams();
  const dispatch = useDispatch()
  const [props,setProps]=useState('')
  
  const checkPropertys= useSelector(state=>state.checkPropertys)
  const {loading, error, prop, pri}= checkPropertys
  const { adult,child,location,startingDate,endingDate,propId,roomId} = params;
  const navigate = useNavigate()
  const [prices, setPrices] = useState('');
  const [name,setName] = useState('')
 
  useEffect(() => {

    dispatch(checkProperty( location,adult,child,startingDate,endingDate))

    // console.log(roomId);
    if(!loading && !error){
      const filt = prop.find((e)=>e._id == propId ).rooms.find((e)=>e._id == roomId);
      // console.log(filt.price.first,'filt');
      setProps(filt)

      setPrices(prop.find((e)=>e._id == propId ).rooms.find((e)=>e._id == roomId).price.first)
      setName('ELENA Spa and Wellness')

     const filterdPrice = prop.find((e)=>e._id == propId ).rooms.find((e)=>e._id == roomId).price;
     
    
    }
    window.scrollTo(0, 0);
}, [dispatch,props.name,setName,setPrices]);

const sal = (e) => {
  // console.log(prices,"pri");
  setPrices(e.target.value)
  setName(e.target.id)
  // console.log(name,prices,'ok');

}

const zaf=(value)=>{
  //  console.log(value,'st')
}


  return (
    <div>
        <div className="propertyui">

        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container className="nav-pad">
            <Col md={4}>
              <Navbar.Brand className="logo">
              <Link to="/"> <img src="/assets/image/log3.png" alt="" /></Link>
              </Navbar.Brand> 
            </Col>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Col md={4}>
                  <Link to="/">
                    {' '}
                    <Nav.Link href="#deets" className='act'>Home</Nav.Link>{' '}
                  </Link>{' '}
                </Col>
                <Col md={4}>
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
                  <Link to="/luxury">
                    {' '}
                    <Nav.Link
                      href="#deets"
                      style={{ color: ' #D9B061 !important;' }}
                    >
                     Luxury Experience
                    </Nav.Link>
                  </Link>
                </Col>
                <Col md={4}>
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
     {/* <Col md={2}>
     
     </Col> */}
     <Col md={6} className='roomuiimg'>
       <Row>
        <img src={prop.find((e)=>e._id == propId ).rooms.find((e)=>e._id == roomId).images.length !==0 &&  prop.find((e)=>e._id == propId ).rooms.find((e)=>e._id == roomId).images[0].location} alt="" />
       </Row>
       <Row style={{marginTop:"20px"}}>
       <Slider {...settings}>
        {prop.find((e)=>e._id == propId ).rooms.find((e)=>e._id == roomId).images.length !== 0 && prop.find((e)=>e._id == propId ).rooms.find((e)=>e._id == roomId).images.map((img)=>(    
          <div>
        
            <img src={img.location} alt="" /> 
    
          </div>
                  )) }
        </Slider>
         
        </Row> 
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
                  <img src="/assets/image/adult.png" alt="" />
               </div>
               <div>
                 <p>{adult}</p>
               </div>
               <div>
                  <img src="/assets/image/child2.png" alt="" />
               </div>
               <div>
                 <p>{child}</p>
               </div>
               <div className='prop-pd'>
                 <img src="/assets/image/bed.png" alt="" />
               </div>
               <div>
               <p>{prop.find((e)=>e._id == propId ).rooms.find((e)=>e._id == roomId).bedType}</p>
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
               <Col md={6} className='amn-algn' >
               <img src={`/assets/image/${amnt}.png`} alt="" />
                  <h5>{amnt}</h5>
               </Col>
               ))} 
             </Row>   
              
          </Col>               
       
          <Col className='price-radio' md={8}>
            <Row className='radio-mob'>
              <Col md={1}>
                <input
                type="radio"
                id="Reserve Experience"
                value={prop.find((e)=>e._id == propId ).rooms.find((e)=>e._id == roomId).price.first}
                name="price"
                required
                checked ={true}
                onClick={sal}
                   />
              </Col>
           <Col className='rabio-mob-2'>
              <h1>Reserve Experience</h1>
              <h6>View plans exclusive</h6>
           </Col>
           <Col md={3} className='rabio-mob-3'>
           <p2>{prop.find((e)=>e._id == propId ).rooms.find((e)=>e._id == roomId).price.first}</p2> 
           </Col>
         
            </Row>
            <Row>
              <Col md={1}>
                <input
                type="radio"
                id="Reserve "
                value={prop.find((e)=>e._id == propId ).rooms.find((e)=>e._id == roomId).price.fourth}
                name="price"
                required
                checked ={true}
                onClick={sal}
                   />
              </Col>
           <Col className='rabio-mob-2'>
              <h1>Reserved</h1>
              <h6>View plans exclusive</h6>
           </Col>
           <Col md={3} className='rabio-mob-3'>
           <p2>{prop.find((e)=>e._id == propId ).rooms.find((e)=>e._id == roomId).price.fourth}</p2> 
           </Col>
         
            </Row>
            <Row >
              <Col md={1}>
                <input
                type="radio"
                id="Reserve Plan Flex"
                value={prop.find((e)=>e._id == propId ).rooms.find((e)=>e._id == roomId).price.second}
                name="price"
                required
                checked
                onClick={sal}
                
                   />
              </Col>
              <Col className='rabio-mob-2'>
                  <h1>Reserve Plan Flex</h1>
                  <h6>View plans exclusive</h6>
              </Col>
              <Col  md={3} className='rabio-mob-3'>
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
           <Col className='rabio-mob-2'>
           <h1>ELENA Spa and Wellness</h1>
           <h6>View plans exclusive</h6>
           </Col>
           <Col md={3} className='rabio-mob-3'>
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
              <button onClick={() => navigate(`/confirm/location/${location}/adult/${adult}/child/${child}/startingDate/${startingDate}/endingDate/${endingDate}/propId/${propId}/roomId/${roomId}/prices/${prices}/name/${name}`)}>Proceed to book</button> 
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
<div className='foooter' >
    <Container>
        <Row className='foooter-1'>
           <img src='/assets/image/Asset 20.png'  />

        </Row>
        
        <Row className="about-4-fnt foooter-2">
          <img src="/assets/image/phone.png" alt="" />
           0484-7180465
        </Row>
        <Row className="about-4-fnt foooter-2" style={{paddingBottom:"30px"}}>
          <img src="/assets/image/email.png" alt="" />
          info@tawifacilities.com
        </Row>
       <Row className='foooter-3' >
          <center>    <hr/></center>
          <Col md={{ span: 1, offset: 2 }}>
          <h3>Home</h3>
          </Col>
          <Col md={1}>
          <h3>About </h3>
          </Col>
          <Col md={2}>
          <h3>Luxury Experience</h3>
          </Col>
          <Col md={2}>
          <h3>Book now</h3>
          </Col>
          <Col md={2}>
          <Link to='/admin'><h3  style={{cursor:"pointer"}}>Login</h3></Link>
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
            Reserved @ <Link to='/superadminlogin'> TAWI Facilities 2015–2022. </Link></h4> 
        </Col>
        <Col>
        <a href='https://www.instagram.com/tawi_facilities/?utm_medium=copy_link' > <img src="../assets/image/instagram.png" alt="" /></a>
       <a href='https://www.facebook.com/tawifacilities/' >  <img  src="../assets/image/facebook.png" alt="" /></a>
        </Col>
      </Row>   
        
     </Container> 
</div>
        
   </div>
  )
}

export default RoomUi