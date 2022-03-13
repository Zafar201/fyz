import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteProperty, listProperties } from '../actions/generalAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { DELETE_PROPERTIES_RESET } from '../constants/generalConstants';


function DashBoard() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  
  const propertyList=useSelector(state=>state.propertyList)
  const {loading , error , properties} = propertyList;

  const propertyDelete=useSelector(state=>state.propertyDelete)
  const {success} = propertyDelete

  useEffect(() => {
    if(success){
      dispatch({type:DELETE_PROPERTIES_RESET})
    }
    window.scrollTo(0, 0);
    dispatch(listProperties())
    // console.log(properties,"clll");
    

}, [dispatch,success,listProperties]);
const deleteHandler=(property)=>{
  if (window.confirm('Are you sure to delete?')) {
     dispatch(deleteProperty(property._id))
     console.log(property._id,'id');
  }
  
}
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
               <Link to='/addproperty'>  <button style={{float:"right"}} >+ Add Property </button>  </Link> 
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
               properties && properties.map((property)=>(
                <Row key={property._id} className='dashboard-3'>  
              
                  
                <Col md={1}>
                </Col>
              <Col>
                <h3>{property.name}</h3>
              </Col>
              <Col>
                <h4>{property.address}</h4>
              </Col>
              <Col>
                <img src="../assets/image/visible.png" alt="" />
              </Col>
              <Col>
              <img onClick={() => navigate(`/property/${property._id}/edit`)} style={{marginRight:"16px"}} src="../assets/image/edit.png" alt="" />
              <img src="../assets/image/dlt.png" alt="" onClick={() => deleteHandler(property)}/>
              </Col>                                                                                                                                          
             </Row>  
               ))}

                  
               
                          
               </div>
           </Container>

       </div>
  </div>;
}

export default DashBoard;
