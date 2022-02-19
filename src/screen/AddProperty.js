import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AddProperty() {
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
           <Container>
               <Row>
                   <h1>Add Property</h1>
               </Row>
               <Row>
                   <Col>
                     <h2>Name of property</h2>
                     <input type="text" />
                   </Col>
                   <Col>
                   <h2>Name of property</h2>
                     <input type="text" />
                   </Col>
                   <Col>
                     <h2>Name of property</h2>
                     <input type="text" />
                   </Col>
               </Row>

               <Row style={{paddingTop:"30px"}}>
                   <h2>Description <span>(100-140 words)</span></h2>
                   <textarea name="description" id="description" cols="25" rows="10"></textarea>
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
                   <button>Submit</button>
               </Row>
           </Container>
           
       </div>
    </div>
  )
}

export default AddProperty