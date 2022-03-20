import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  deleteProperty,
  detailsProperty,
  listProperties,
  deleteRooms,
} from "../actions/generalAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { DELETE_PROPERTIES_RESET } from "../constants/generalConstants";

function PropertyDetails() {
  const params = useParams();
  const { id: propertyId } = params;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const propertyDetails = useSelector((state) => state.propertyDetails);
  const { loading, error, property } = propertyDetails;

  //   const propertyDelete=useSelector(state=>state.propertyDelete)
  //   const {success} = propertyDelete

  useEffect(() => {
    dispatch(detailsProperty(propertyId));

    if (!loading && !error) {
      console.log(property.rooms, "prop");
    }
  }, [dispatch, detailsProperty]);

  const toComponentB=(roomId)=>{
    navigate(`/room/${propertyId}/edit`,{state:roomId});
      }

      const deleteHandler=(room)=>{
        dispatch(deleteRooms(propertyId,room._id))
      }
  return (
    <div>
      <div className="admin-nav">
        <Container>
          <Row>
            <Col className="admin-logo">
              <Link to="/">
                <img src="../assets/image/logo-admin.png" alt="" />
              </Link>
            </Col>
            <Col>
              <img
                style={{ float: "right" }}
                src="../assets/image/profile.png"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </div>

      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : (
        <div className="dashboard">
          <Container>
            <Row className="dashboard-1">
              <Col>
                <h1>Your Properties:{property.name}</h1>
              </Col>
              <Col>
                
                  {" "}
                  <button onClick={() => navigate(`/addroom/${propertyId}`)} style={{ float: "right" }}>
                    + Add Room{" "}
                  </button>{" "}
            
              </Col>
            </Row>

            <div className="cen">
              <Row style={{ paddingTop: "30px", paddingBottom: "20px" }}>
                <Col md={1}></Col>
                <Col>
                  <h2>Room name</h2>
                </Col>
                <Col>
                  <h2>Occupancy</h2>
                </Col>
                <Col>
                  <h2>booking</h2>
                </Col>
                <Col></Col>
              </Row>

              {property.rooms &&
                property.rooms.map((room) => (
                  <Row className="dashboard-3">
                    <Col md={1}></Col>
                    <Col>
                      <h3>{room.name}</h3>
                    </Col>
                    <Col>
                      <h4>{room._id}</h4>
                    </Col>
                    <Col>
                 
                      <img src="../assets/image/visible.png" alt="" />
                    </Col>
                    <Col>
                      <img  
                        onClick={()=>{toComponentB(room._id)}}    
                        style={{ marginRight: "16px" }}
                        src="../assets/image/edit.png"
                        alt=""
                      />
                      <img src="../assets/image/dlt.png" onClick={() => deleteHandler(room)}alt="" />
                    </Col>
                  </Row>
                ))}
            </div>
          </Container>
        </div>
      )}
    </div>
  );
}

export default PropertyDetails;
