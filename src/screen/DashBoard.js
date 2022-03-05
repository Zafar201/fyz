import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listProperties } from '../actions/generalAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


function DashBoard() {
  const dispatch = useDispatch()
  
  const propertyList=useSelector(state=>state.propertyList)
  const {loading , error , property} = propertyList;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(listProperties())
    console.log(property,"clll");
    

}, [dispatch]);
const ok=(()=>{
  console.log(property[0],"cl");
})
  return <div>
      <div className='admin-nav'>
       <Container>
           <Row>
           <Col className='admin-logo'>
               <Link to="/">    
                <img src="../assets/image/logo-admin.png" alt="" />
               </Link>
               </Col>
               <Col >
                 <img style={{float:"right"}} src="../assets/image/profile.png" alt="" />
               </Col>
           </Row>
       </Container>
       </div>


       <div className='dashboard'>
           <Container>
               <Row className="dashboard-1">
                   <Col>
                      <h1>Your Properties</h1>
                   </Col>
                   <Col >
                  <button style={{float:"right"}}  onClick={ok}>+ Add Property </button>  
               </Col>
               </Row>
              
              <div className="cen">
               <Row style={{paddingTop:"30px",paddingBottom:"20px"}} >
                   <Col md={1}>
                   
                   </Col>
                   <Col>
                     <h2>Name</h2>
                   </Col>
                   <Col>
                     <h2>location</h2>
                   </Col>
                   <Col>
                     <h2>booking</h2>
                   </Col>
                   <Col>
                   
                   </Col>
               </Row>
               
               {loading?<LoadingBox>{loading}</LoadingBox>:
               error?<MessageBox>{error}</MessageBox>:
               property && property.map((item)=>(
                <Row  className='dashboard-3'>  
              
                   
                <Col md={1}>
                </Col>
              <Col>
                <h3>{item.name}</h3>
              </Col>
              <Col>
                <h4>{item.address}</h4>
              </Col>
              <Col>
                <img src="../assets/image/visible.png" alt="" />
              </Col>
              <Col>
              <img style={{marginRight:"16px"}} src="../assets/image/edit.png" alt="" />
              <img src="../assets/image/dlt.png" alt="" />
              </Col>                                                                                                                                          
             </Row>  
               ))}

                  
               
                          
               </div>
           </Container>

       </div>
  </div>;
}

export default DashBoard;
