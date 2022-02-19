import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function DashBoard() {
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
                  <Link to='/addproperty'><button style={{float:"right"}}  >+ Add Property </button></Link>    
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

               <Row style={{paddingTop:"20px"}} className='dashboard-3'>
                   <Col md={1}>
                   
                   </Col>
                   <Col>
                     <h3>ABC Villas</h3>
                   </Col>
                   <Col>
                     <h4>Palarivattom, IN</h4>
                   </Col>
                   <Col>
                     <img src="../assets/image/visible.png" alt="" />
                   </Col>
                   <Col>
                   <img style={{marginRight:"16px"}} src="../assets/image/edit.png" alt="" />
                   <img src="../assets/image/dlt.png" alt="" />
                   </Col>
               </Row>

               <Row style={{paddingTop:"20px"}} className='dashboard-3'>
                   <Col md={1}>
                   
                   </Col>
                   <Col>
                     <h3>ABC Villas</h3>
                   </Col>
                   <Col>
                     <h4>Palarivattom, IN</h4>
                   </Col>
                   <Col>
                     <img src="../assets/image/visible.png" alt="" />
                   </Col>
                   <Col>
                   <img style={{marginRight:"16px"}} src="../assets/image/edit.png" alt="" />
                   <img src="../assets/image/dlt.png" alt="" />
                   </Col>
               </Row>


               <Row style={{paddingTop:"20px"}} className='dashboard-3'>
                   <Col md={1}>
                   
                   </Col>
                   <Col>
                     <h3>ABC Villas</h3>
                   </Col>
                   <Col>
                     <h4>Palarivattom, IN</h4>
                   </Col>
                   <Col>
                     <img src="../assets/image/visible.png" alt="" />
                   </Col>
                   <Col>
                   <img style={{marginRight:"16px"}} src="../assets/image/edit.png" alt="" />
                   <img src="../assets/image/dlt.png" alt="" />
                   </Col>
               </Row>


               </div>
           </Container>

       </div>
  </div>;
}

export default DashBoard;
