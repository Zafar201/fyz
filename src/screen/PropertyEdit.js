import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { addproperty, addProperty, detailsProperty, updateProperty } from '../actions/generalAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { UPDATE_PROPERTIES_RESET } from '../constants/generalConstants';

function PropertyEdit() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const params = useParams();
  const { id: propertyId} = params;
  const [address, setAddress] = useState('');
  const [map, setMap] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch()

  const propertyDetails = useSelector(state=>state.propertyDetails)
  const {loading,error,property} = propertyDetails;

  const propertyUpdate= useSelector(state=>state.propertyUpdate)
  const {loading:loadingUpdate,error:errorUpdate,success:successUpdate}=propertyUpdate;
  useEffect(()=>{
    if (successUpdate) {
      navigate('/dashboard');
    }
    if(!property || property._id !== propertyId || successUpdate){
      dispatch({type:UPDATE_PROPERTIES_RESET})
        dispatch(detailsProperty(propertyId))
        console.log(property,'edit');
        
    }
    else{
        setName(property.name);
        setAddress(property.address);
        setMap(property.map);
        setDescription(property.description);
        console.log(property,'edits');
    }   
  },[dispatch,property,propertyId,navigate])
  const submitHandler=(e)=>{
    e.preventDefault()
    dispatch(updateProperty({
      _id:propertyId,
      name,
      address,
      map,
      description
    }))
   console.log(name,address,map,'helooo');
    
  }
  
  return (
    <div>
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

       <div className="addproperty">
         {loading? <LoadingBox></LoadingBox>:
         error? <MessageBox>{error}</MessageBox>:(
          <Container>
          <Row>
              <h1>Property edit:{property.name}</h1>
          </Row>
          {loadingUpdate && <LoadingBox></LoadingBox>}
           {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>} 
          

        <form onSubmit={submitHandler}>
          <Row>
              <Col>
               
              <h2>Name of property</h2>
                <input type="text"
                   id="name"
                   placeholder="Enter name"
                   required
                   value={name}
                   onChange={(e) => setName(e.target.value)}/>
              </Col>
              <Col>
              <h2>Address</h2>
                <input type="text"
                id="address"
                placeholder="Enter Address"
                required
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                />
              </Col>
              <Col>
              <h2>Map</h2>
                <input type="text" 
                id="map"
                placeholder="Enter map"
                required
                onChange={(e) => setMap(e.target.value)}
                value={map}/>
                
              </Col>
          </Row>

          <Row style={{paddingTop:"30px"}}>
              <h2>Description <span>(100-140 words)</span></h2>
              <textarea 
               name="description" 
               id="description"
               placeholder="Enter name"
               value={description}
               onChange={(e) => setDescription(e.target.value)}
              cols="25" rows="10"></textarea>
          </Row>
       

          <Row>
              <Col className='addproperty-2' md={4}>
                  <button><img src="../assets/image/cam.png" alt="" />Add images <span>(upto 15 images)</span></button>
                   <h3>delete image</h3>
              </Col>

              <Col className='addproperty-3' md={{span: 6, offset: 1}}>
                  <div style={{backgroundColor:"white"}}>

                  </div>
                  <div style={{backgroundColor:" #EBEBEB"}}>
                      
                  </div>
                  <div style={{backgroundColor:" #E3E3E3;"}}>
                      
                  </div>
                  <div style={{backgroundColor:"#A7A6A6"}}>
                      
                  </div>
              </Col>

              
          </Row>

          <Row className='addproperty-4'>
              <button type='submit'>Submit</button>
          </Row>
          </form>
           
          
      </Container>
         )}
           
           
       </div>
    </div>
  )
}

export default PropertyEdit