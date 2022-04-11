import React, { useEffect, useState } from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { checkProperty } from '../actions/generalAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
function PropertyUi() {
  const params = useParams();
    const dispatch = useDispatch()
    const [props,setProps]=useState('')
    const checkPropertys= useSelector(state=>state.checkPropertys)
    const {loading, error, prop}= checkPropertys
    const { adult,child,location,startingDate,endingDate,propId } = params;
    const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(checkProperty( location,adult,child,startingDate,endingDate))
   
      console.log(prop,'prop');
  
      // localStorage.setItem('props', String(props));
    // if(!loading){
    //      const sc = prop.filter((e) => e._id == propId);
    //       console.log(sc,'sc');
    //       setProps(sc[0])            
    //       console.log(props,'prps');                 
    // }
    if(!loading){
      const filt = prop.find((e)=>e._id == propId);
      console.log(filt,'filt');
      setProps(filt)
    }
    // const filterd= prop.find((e=>{
    //   return e._id == propId
    // }))
    // console.log(filterd,'fl');

}, [dispatch,props]);
const truncate=(str,n)=>{
  return str.length>n?str.substr(0,n-1)+ "...." :str
}


  return (
    <div>
       {loading? <LoadingBox></LoadingBox>:
       error? <MessageBox>{error}</MessageBox>:(
        <>
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
                <Col md={6} >
                  <Link to="/">
                    {' '}
                    <Nav.Link href="#deets" >Home</Nav.Link>{' '}
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
     

        {/* {prop.find((e)=>e._id==propId).map((property)=>( */}
     <>
     <Container>
        <Row className='propertyui-2'>
       

           
            <Col md={4}>
               <img src="/assets/image/home2.png" alt="" />
            </Col>
            <Col md={8}>
              <Row>
                <h2>{prop.find((e)=>e._id== propId).name ? prop.find((e)=>e._id== propId).name : ""}</h2>
              </Row>
              <Row style={{paddingTop:"20px"}}>
                  <Col md={1} className='cl2'>
                     <img src="/assets/image/cl2.png" alt="" />
                  </Col>
                  <Col >
                     <h3>{startingDate} - {endingDate}</h3>
                  </Col>
              </Row>
              <Row>
                <p>{prop.find((e)=>e._id== propId).description}</p>
              </Row>
              <Row>
                  
              </Row>
            </Col>
           
         </Row>
      </Container>

      
      {prop.find((e)=>e._id==propId).rooms.map((sRoom)=>(
      <Container key={sRoom._id} style={{paddingTop:"100px"}}>
        <Row className='prop-card'>
          <Col md={4} style={{paddingLeft:"0"}} className='props-card'>
            <img src="/assets/image/hurawalhi2.png" alt="" />
          </Col>

          <Col>
          
             <Row style={{paddingTop:"38px"}}>
                <Col>
                   <h2>{sRoom.name}</h2>
                </Col>
                <Col md={3} className='prop-room-vect'> 
                <Row className='prop-img'>
                    <Col md={2}>
                    <img src="/assets/image/child2.png" alt="" />
                    </Col>
                    <Col>
                    <p>{child}</p>
                    </Col>
                   
                  </Row>
                  <Row className='prop-img'>
                    <Col md={2}>
                    <img src="/assets/image/adult.png" alt="" />
                    </Col>
                    <Col>
                    <p>{adult}</p>
                    </Col>
                   
                  </Row>
                  <Row className='prop-img'>
                    <Col md={2}>
                    <img src="/assets/image/bed.png" alt="" />
                    </Col>
                    <Col>
                    <p>{sRoom.bedType}</p>
                    </Col>
                   
                  </Row>
                </Col>           
             </Row>
           
              <Row>
                 <h3>{truncate(sRoom.description,250)}</h3>
              </Row>
           
               <Row style={{paddingTop:"35px"}}>
                  <Col>
              
                  </Col>

                  <Col>
                    <button onClick={() => navigate(`/search/location/${location}/adult/${adult}/child/${child}/startingDate/${startingDate}/endingDate/${endingDate}/propId/${propId}/roomId/${sRoom._id}`)}>Book now</button>
              
                  </Col>
               </Row>
          </Col>
        </Row>
      </Container>
       ))}   
      </>
       
         {/* ))}    */}
       
     </div>    

     <div className="about-4" >
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

export default PropertyUi