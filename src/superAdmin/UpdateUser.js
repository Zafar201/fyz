import React, { useEffect } from "react";
import { Col, Container, Row ,Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import {
  getAllApprovedUsers,
  suspendUser,
  unSuspendUser,
} from "../actions/adminAction";
import { SUSPEND_USER_RESET,UN_SUSPEND_USER_RESET } from "../constants/adminConstants";
import ReactTooltip from "react-tooltip";
import { adminSignout } from "../actions/adminAction";

function UpdateUser() {
  const dispatch = useDispatch();
  const Users = useSelector((state) => state.allUsersApproved);
  const { loading, error, users } = Users;

  const suspendedUsers = useSelector((state) => state.userSuspend);
  const { success } = suspendedUsers;
  const unSuspendedUsers = useSelector((state) => state.unSuspend);
  const { success:UnsuspendSuccess } = unSuspendedUsers;
  const adminsignin = useSelector((state) => state.adminSignin);
  const { adminInfo } = adminsignin;
  useEffect(() => {
    dispatch(getAllApprovedUsers());
    if (success) {
      dispatch({ type: SUSPEND_USER_RESET });
    }
    if(UnsuspendSuccess){
      dispatch({type:UN_SUSPEND_USER_RESET})
    }
  }, [dispatch, success,UnsuspendSuccess]);
  const suspend = (userId) => {
    if (window.confirm('Are you sure you want to suspend?')){
      dispatch(suspendUser(userId));
    }
    
  };
  const unsuspend = (userId) => {
    if (window.confirm('Are you sure you want to unsuspend?')){
    dispatch(unSuspendUser(userId));
    }
  };
  const signoutHandler = () => {
    if (window.confirm('Are you sure you want to signout?')){
      dispatch(adminSignout());
    }
  };
  return (
    <div className="superadmin updateuser">
      <Row className="superadmin-top">
        <Col className="superadmin-bg" md={3}>
          <Row>
            <Col style={{textAlign:"center"}}>
            <Link to='/superadmin'>   <img src="/assets/image/log3.png" alt="" /></Link> 
            </Col>
          </Row>
        </Col>
        <Col className="superadmin-bg2">
          <Row>
            <Link to="/superadmin">
              {" "}
              <h1>Activity Status</h1>{" "}
            </Link>
          </Row>
        </Col>
        <Col className="superadmin-nav-active">
          <h1>Update User</h1>
        </Col>
        <Col>
          <Link to="/signuprequest">
            {" "}
            <h1>Signup Request</h1>
          </Link>
        </Col>
        <Col>
        <Row className='sup-sg'>
          {adminInfo && (
                 <Button onClick={signoutHandler}>Signout</Button>
               )}
          </Row>
          </Col>
      </Row>

      <Row className="superadmin-2">
        <Col md={3}>
          <div className="superadmin-active">
            <h2>User Details</h2>
          </div>
          {/* <div>
                    <h2>User Details</h2>
                 </div> */}
          <div>
          <Link to='/updatebooking'> <h2>Update Booking</h2> </Link>
          </div>
        </Col>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox>{error}</MessageBox>
        ) : (
          <Col>
            {/* <Row className='updateuser-body'>
                   <input type='search' placeholder='Serach User'/>
                 </Row> */}
            <Row className="updateuser-body">
              <Col><h1>Users</h1></Col>
              <Col className='updt-left'><h1>Activate/Deactivate</h1></Col>
              
            </Row>
            {users.map((user) => (
              <Row
                key={user._id}
                className={`updateuser-body-card ${
                  user.adminSuspended ? "suspended" : ""
                }`}
              >
                <Col>
                  <h4>{user.f_name}</h4>
                </Col>
                {/* {!user.adminSuspended && (
                  <Col md={1}>
                    <img
                      data-tip
                      data-for="registerTip"
                      multiline
                      src="../assets/image/eyes.png"
                    />
                  </Col>
                )} */}
                  <Col>
                <ReactTooltip
                  id="registerTip"
                  multiline
                  place="bottom"
                  effect="solid"
                  type="success"
                >
                  <div>{user.email}</div>
                  <div>{user.phone}</div>
                  <div>{user.address}</div>
                </ReactTooltip>
                </Col>

                <Col style={{ alignSelf: "center" }}>
                  {user.adminSuspended ? (
                    <img
                      onClick={() => unsuspend(user._id)}
                      src="../assets/image/sus.png"
                    />
                  ) : (
                    <img
                      onClick={() => suspend(user._id)}
                      src="../assets/image/nulluser.png"
                    />
                  )}
                </Col>
              
              </Row>
            ))}
          </Col>
        )}
      </Row>

      <Row className="superadmin-2">
        <Col>
          <div></div>
        </Col>
      </Row>
    </div>
  );
}

export default UpdateUser;
