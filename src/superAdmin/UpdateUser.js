import React,{useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { getAllApprovedUsers, suspendUser } from '../actions/adminAction';
import { SUSPEND_USER_RESET } from '../constants/adminConstants';

function UpdateUser() {

  const dispatch = useDispatch()
  const Users = useSelector((state) => state.allUsersApproved);
  const { loading, error, users } = Users;

  const suspendedUsers = useSelector((state) => state.userSuspend);
  const { success } = suspendedUsers;

  useEffect(()=>{
    dispatch(getAllApprovedUsers())
    if(success){
      dispatch({type:SUSPEND_USER_RESET})
    }
  },[dispatch,success])
  const suspend=(userId)=>{
    dispatch(suspendUser(userId))
  }
  return (
     <div className='superadmin updateuser'>
       
             <Row className='superadmin-top'>
                 <Col className='superadmin-bg' md={3}>
                     <Row> 
                         <Col>
                         <img src="../assets/image/logo-admin.png" alt="" />
                         </Col>
                       
                     </Row>
                 </Col>
                 <Col className='superadmin-bg2'>
                     <Row>
                     <Link to='/superadmin'>     <h1>Activity Status</h1> </Link>
                     </Row>
                 </Col>
                 <Col className='superadmin-nav-active'>
                  <h1>Update User</h1>
                 </Col>
                 <Col>
                <Link to='/signuprequest'> <h1>Signup Request</h1></Link>
                 </Col>
                 <Col>
                 </Col>
                
             </Row>
        
             <Row className='superadmin-2'> 
              <Col md={3}>
                 <div className='superadmin-active'>
                    <h2 >User Details</h2>
                 </div>
                 {/* <div>
                    <h2>User Details</h2>
                 </div> */}
                 <div>
                     <h2>Update Booking</h2>
                 </div>
              </Col>
              {loading ? <LoadingBox></LoadingBox>:
              error? <MessageBox>{error}</MessageBox>:
             

           
                 
                 <Col>
                 <Row className='updateuser-body'>
                   <input type='search' placeholder='Serach User'/>
                 </Row>
                 <Row className='updateuser-body'>
                   <h1>Search results</h1>
                 </Row>
                 {users.map((user)=>(

              
                 <Row key={user._id}   className={`updateuser-body-card ${user.adminSuspended ? "suspended" : ""}`}>
                   <Col >
                     <h4>{user.f_name}</h4>
                   </Col>
                   <Col style={{alignSelf:"center"}}>
                     {user.adminSuspended ?  <img onClick={() => suspend(user._id)} src='../assets/image/sus.png' />:(
                         <img onClick={() => suspend(user._id)} src='../assets/image/nulluser.png' />
                     )}
                    
                   </Col>
                 </Row>
               ))}
                 
                 </Col>
               
               } 
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

export default UpdateUser