import  React, { useEffect } from 'react'
import { Col, Container, Row,Button } from 'react-bootstrap'
import { Link, useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getSignUpRequest,approveUser,rejectUser } from '../actions/adminAction';
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import {APPROVE_USER_RESET ,REJECT_USER_RESET} from '../constants/adminConstants';
import ReactTooltip from "react-tooltip"; 
import { adminSignout } from "../actions/adminAction";

function SignUpRequest() {
  

   const dispatch = useDispatch()
   const signupCreate = useSelector((state) => state.signupCreate);
   const { loading, error, users } = signupCreate;
   const approveUsers= useSelector((state)=>state.approveUser);
   const {success} = approveUsers
   const rejectUsers = useSelector((state)=>state.rejectUser);
   const {success: succesReject} = rejectUsers
   const adminsignin = useSelector((state) => state.adminSignin);
   const { adminInfo } = adminsignin;
   useEffect(()=>{
     
       dispatch(getSignUpRequest())
       if(success){
         alert("User accepted")
         dispatch({type:APPROVE_USER_RESET})
       }
       if(succesReject){
        alert("User rejected")
        dispatch({type:REJECT_USER_RESET})
      }
     

   },[dispatch,success,succesReject])

   
   const approveHandler=(userId)=>{
      console.log('heloo',userId)
     dispatch(approveUser(userId))
   }
   const rejectHandler=(userId)=>{
      console.log('heloo',userId)
     dispatch(rejectUser(userId))
   }
   const signoutHandler = () => {
    if (window.confirm('Are you sure you want to signout?')){
      dispatch(adminSignout());
    }
  };
  return (
<div className='superadmin updatebooking'>   
<Row className='superadmin-top'>
    <Col className='superadmin-bg' md={3}>
        <Row> 
            <Col style={{textAlign:"center"}}>
            <Link to='/superadmin'>   <img src="/assets/image/log3.png" alt="" /></Link> 
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
     
    <Col className='superadmin-nav-active'>
    <Row className='superadmin-bg2 '>
          <h1>Signup Request</h1>
          
        </Row>
    </Col>
    <Col>
    <Row className='sup-sg'>
          {adminInfo && (
                 <Button onClick={signoutHandler}>Signout</Button>
               )}
          </Row>
    </Col>
   
</Row>


<Row className='superadmin-2'> 
 <Col md={3}>
    <div  className='superadmin-active'>
     <h2 >User Details</h2>
    </div>
    {/* <div>
       <h2>User Details</h2>
    </div> */}
    <div>
    <Link to='/updatebooking'> <h2>Update Booking</h2> </Link>
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
users &&  users.map((user)=>(
<>
    <Row key={user._id} className='updatebooking-body-card'>
  
      <Col md={2}>
        <h4>{user.f_name}</h4>     
      </Col>      
         <Col md={1}>         
            {/* <img data-tip data-for="registerTip" multiline src='../assets/image/eyes.png'/> */}
          </Col>
          <Col  md={{ span: 1, offset: 2 }}>
           <button type='submit'onClick={() => approveHandler(user._id)}>accept</button>
          </Col>
          <Col style={{marginLeft:"70px"}} className='signup-body-button'>
          <button  type='submit'onClick={() => rejectHandler(user._id)}>decline</button>
          </Col>
          <Col>
          {/* <Col>
           <p>7:50pm</p>
          </Col> */}
          <ReactTooltip  id="registerTip"  place="bottom" effect="solid" type='success'>         
            <div>
                {user.email} 
           </div>
             <div>
               {user.phone}
             </div>
             <div>
               {user.address}
             </div>           
            </ReactTooltip>
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