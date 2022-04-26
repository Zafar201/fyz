import  React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getSignUpRequest,approveUser,rejectUser } from '../actions/adminAction';
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

function SignUpRequest() {

   const dispatch = useDispatch()
   const signupCreate = useSelector((state) => state.signupCreate);
   const { loading, error, users } = signupCreate;

   useEffect(()=>{
       dispatch(getSignUpRequest())
   },[dispatch])

   const approveHandler=(userId)=>{
      console.log('heloo',userId)
     dispatch(approveUser(userId))
   }
   const rejectHandler=(userId)=>{
      console.log('heloo',userId)
     dispatch(rejectUser(userId))
   }
  return (
<div className='superadmin updatebooking'>   
<Row className='superadmin-top'>
    <Col className='superadmin-bg' md={3}>
        <Row> 
            <Col >
            <img src="../assets/image/logo-admin.png" alt="" />
            </Col>   
        </Row>
    </Col>
    <Col className=' '>
        <Row>
        <Link to='/superadmin'>  <h1>Activity Status</h1> </Link>
        </Row>
    </Col>
    <Col className=''>
    <Row>
    <Link to='/updateuser'>   <h1>Update User</h1>   </Link>
   </Row>
    </Col>
     
    <Col>
    <Row className='superadmin-bg2 superadmin-nav-active'>
          <h1>Signup Request</h1>
          
        </Row>
    </Col>
    <Col>
    <Row>
       
          
        </Row>
    </Col>
   
</Row>


<Row className='superadmin-2'> 
 <Col md={3}>
    <div  className='superadmin-active'>
     <h2 >User Details</h2>
    </div>
    <div>
       <h2>User Details</h2>
    </div>
    <div>
        <h2>Update Booking</h2>
    </div>
 </Col>
    
    <Col className='card-left'>
    {/* <Row className='updatebooking-body'>
        <h1>Booking id</h1>
       <input type='text' placeholder='Enter here'/>
       <button>Proceed </button>
    </Row> */}

{loading? <LoadingBox></LoadingBox>:
error? <MessageBox>{error}</MessageBox>:
users && users.map((user)=>(

<>
    <Row key={user._id} className='updatebooking-body-card'>
      <Col md={2}>
        <h4>{user.f_name}</h4>
      </Col>

       
         <Col md={1}>
            
            <img src='../assets/image/eyes.png'/>
          </Col>
          <Col  md={{ span: 1, offset: 2 }}>
           <button type='submit'onClick={() => approveHandler(user._id)}>accept</button>
          </Col>
          <Col style={{marginLeft:"70px"}} className='signup-body-button'>
          <button  type='submit'onClick={() => rejectHandler(user._id)}>decline</button>
          </Col>
          <Col>
          <Col>
           <p>7:50pm</p>
          </Col>
          </Col>
     
     
    </Row>
  
   
    </>
     ))}
</Col>
  
    
</Row>

<Row className='superadmin-2'> 
 <Col >
    <div>
   
    </div>   
 </Col>
            
</Row>

</div>
  )
}

export default SignUpRequest