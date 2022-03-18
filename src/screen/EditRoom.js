import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { addRoom, detailsProperty, detailsRoom, getRooms, getRoomsDetails } from "../actions/generalAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

function EditRoom() {
  const params = useParams();
  const { id: roomId } = params;
  const [name, setName] = useState('');
  const [occupancy, setOccupency] = useState('');
  const [description,setDescription] = useState('')
  const [size, setSize] = useState('');
  const [price1, setPrice1] = useState('');
  const [price2, setPrice2] = useState('');
  const [price3, setPrice3] = useState('');
  const [price4, setPrice4] = useState('');
  const dispatch = useDispatch()
  const navigate =useNavigate()

  const roomDetails = useSelector(state=>state.roomDetails)
  const {loading,error,room} = roomDetails;

  const getRooms = useSelector(state=>state.getRooms)
  const {loading:loadingRooms,error:errorRooms,rooms}= getRooms;

//   const propertyDetails = useSelector(state=>state.propertyDetails)
//   const {loading:loadingProperty,error:errorProperty,property} = propertyDetails;


  useEffect(() => {
    // dispatch(getRoomsDetails(propertyId))
    dispatch(detailsRoom(roomId))
    // console.log('heyyyy',property.rooms[0]._id);
    // if ( property._id == propertyId  ) {
    //     dispatch(detailsProperty(propertyId));
    //   console.log(property.rooms, "prop");
    // }
  }, [dispatch]);

 
  
  const submitHandler=(e)=>{
    e.preventDefault()
    // dispatch(addRoom(name,description,occupancy,size,price1,price2,price3,price4,propertyId))
    // navigate(`/property/${propertyId}`)
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
      {loadingRooms? <LoadingBox></LoadingBox>:
      errorRooms?<MessageBox>{errorRooms}</MessageBox>:(

      
      <div className="addproperty">
        <Container>
          <Row>
            <h1>Edit Room</h1>
          </Row>
          <form onSubmit={submitHandler}>
          <Row>
            <Col>
              <h2>Room name</h2>
              <input type="text"
              id="name"
              placeholder="Enter name"
              required
              onChange={(e) => setName(e.target.value)} />
            </Col>
            <Col>
              {/* <h2>Name of property</h2>
                     <input type="text" /> */}
            </Col>
            <Col>
              {/* <h2>Name of property</h2>
                     <input type="text" /> */}
            </Col>
          </Row>

          <Row style={{ paddingTop: "30px" }}>
            <h2>
              Description <span>(100-140 words)</span>
            </h2>
            <textarea
              name="description"
              id="description"
              onChange={(e)=>setDescription(e.target.value)}
              cols="25"
              rows="10"
            ></textarea>
          </Row>

          <Row>
            <Col className="addproperty-2" md={4}>
              <button>
                <img src="../assets/image/cam.png" alt="" />
                Add images <span>(upto 15 images)</span>
              </button>
              <h3>delete image</h3>
            </Col>

            <Col className="addproperty-3" md={{ span: 6, offset: 1 }}>
              <div style={{ backgroundColor: "white" }}></div>
              <div style={{ backgroundColor: " #EBEBEB" }}></div>
              <div style={{ backgroundColor: " #E3E3E3;" }}></div>
              <div style={{ backgroundColor: "#A7A6A6" }}></div>
            </Col>
          </Row>

          <Row className="addroom-4">
            <Col>
              <h2>Occupancy</h2>
              <input type="text" 
              id="occupency"
              placeholder="Enter occupency"
              required
              onChange={(e) => setOccupency(e.target.value)}/>
            </Col>
            <Col>
              <h2>Room Size (sq. ft)</h2>
              <input type="text" 
              id="size"
              placeholder="Enter size"
              required
              onChange={(e) => setSize(e.target.value)}/>
            </Col>
            <Col>
              {/* <h2>Name of property</h2>
                     <input type="text" /> */}
            </Col>
          </Row>
          <Row className="select">
            <Col>
              <h2>Bed Type</h2>
              <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>

          <div className="addroom-5">
            <Row>
              <h5>Amneties</h5>
            </Row>
            <Row>
              <Col>
                <Row>
                  <img src="../assets/image/icon.png" alt="" />
                </Row>
                <Row>
                  <h6>Bathtub</h6>
                </Row>
              </Col>
              <Col>
                <Row>
                  <img src="../assets/image/icon2.png" alt="" />
                </Row>
                <Row>
                  <h6>Bathtub</h6>
                </Row>
              </Col>
              <Col>
                <Row>
                  <img src="../assets/image/icon.png" alt="" />
                </Row>
                <Row>
                  <h6>Bathtub</h6>
                </Row>
              </Col>
              <Col>
                <Row>
                  <img src="../assets/image/icon.png" alt="" />
                </Row>
                <Row>
                  <h6>Bathtub</h6>
                </Row>
              </Col>
              <Col>
                <Row>
                  <img src="../assets/image/icon.png" alt="" />
                </Row>
                <Row>
                  <h6>Bathtub</h6>
                </Row>
              </Col>
              <Col>
                <Row>
                  <img src="../assets/image/icon.png" alt="" />
                </Row>
                <Row>
                  <h6>Bathtub</h6>
                </Row>
              </Col>
              <Col style={{ background: "none" }}></Col>
              <Col style={{ background: "none" }}></Col>
            </Row>
          </div>
          <div className="addroom-5">
            <Row>
              <Col>
                <Row>
                  <img src="../assets/image/icon.png" alt="" />
                </Row>
                <Row>
                  <h6>Bathtub</h6>
                </Row>
              </Col>
              <Col>
                <Row>
                  <img src="../assets/image/icon2.png" alt="" />
                </Row>
                <Row>
                  <h6>Bathtub</h6>
                </Row>
              </Col>
              <Col>
                <Row>
                  <img src="../assets/image/icon.png" alt="" />
                </Row>
                <Row>
                  <h6>Bathtub</h6>
                </Row>
              </Col>
              <Col>
                <Row>
                  <img src="../assets/image/icon.png" alt="" />
                </Row>
                <Row>
                  <h6>Bathtub</h6>
                </Row>
              </Col>
              <Col>
                <Row>
                  <img src="../assets/image/icon.png" alt="" />
                </Row>
                <Row>
                  <h6>Bathtub</h6>
                </Row>
              </Col>
              <Col>
                <Row>
                  <img src="../assets/image/icon.png" alt="" />
                </Row>
                <Row>
                  <h6>Bathtub</h6>
                </Row>
              </Col>
              <Col style={{ background: "none" }}></Col>
              <Col style={{ background: "none" }}></Col>
            </Row>
          </div>
          <div className="addroom-5">
            <Row>
              <Col>
                <Row>
                  <img src="../assets/image/icon.png" alt="" />
                </Row>
                <Row>
                  <h6>Bathtub</h6>
                </Row>
              </Col>
              <Col>
                <Row>
                  <img src="../assets/image/icon2.png" alt="" />
                </Row>
                <Row>
                  <h6>Bathtub</h6>
                </Row>
              </Col>
              <Col>
                <Row>
                  <img src="../assets/image/icon.png" alt="" />
                </Row>
                <Row>
                  <h6>Bathtub</h6>
                </Row>
              </Col>
              <Col>
                <Row>
                  <img src="../assets/image/icon.png" alt="" />
                </Row>
                <Row>
                  <h6>Bathtub</h6>
                </Row>
              </Col>
              <Col>
                <Row>
                  <img src="../assets/image/icon.png" alt="" />
                </Row>
                <Row>
                  <h6>Bathtub</h6>
                </Row>
              </Col>
              <Col>
                <Row>
                  <img src="../assets/image/icon.png" alt="" />
                </Row>
                <Row>
                  <h6>Bathtub</h6>
                </Row>
              </Col>
              <Col style={{ background: "none" }}></Col>
              <Col style={{ background: "none" }}></Col>
            </Row>
          </div>
          <div className="addroom-5">
            <Row>
              <Col>
                <Row>
                  <img src="../assets/image/icon.png" alt="" />
                </Row>
                <Row>
                  <h6>Bathtub</h6>
                </Row>
              </Col>
              <Col>
                <Row>
                  <img src="../assets/image/icon2.png" alt="" />
                </Row>
                <Row>
                  <h6>Bathtub</h6>
                </Row>
              </Col>
              <Col>
                <Row>
                  <img src="../assets/image/icon.png" alt="" />
                </Row>
                <Row>
                  <h6>Bathtub</h6>
                </Row>
              </Col>
              <Col>
                <Row>
                  <img src="../assets/image/icon.png" alt="" />
                </Row>
                <Row>
                  <h6>Bathtub</h6>
                </Row>
              </Col>
              <Col>
                <Row>
                  <img src="../assets/image/icon.png" alt="" />
                </Row>
                <Row>
                  <h6>Bathtub</h6>
                </Row>
              </Col>
              <Col>
                <Row>
                  <img src="../assets/image/icon.png" alt="" />
                </Row>
                <Row>
                  <h6>Bathtub</h6>
                </Row>
              </Col>
              <Col style={{ background: "none" }}></Col>
              <Col style={{ background: "none" }}></Col>
            </Row>
          </div>

          <Row style={{ paddingTop: "30px" }}>
            <h1>Add Price</h1>
          </Row>
          <Row className="addprice">
            <Col>
              <h2>Reserve Experience</h2>
              <div className="price">
                <img src="../assets/image/dollar.png" alt="" />
                <input type="text"
                id="price1"
                placeholder="Enter the amount"
                required
                onChange={(e) => setPrice1(e.target.value)}  />
              </div>
            </Col>
            <Col>
              <h2>Reserve Plan Flex</h2>
              <div className="price">
                <img src="../assets/image/dollar.png" alt="" />
                <input type="text"
                id="price2"
                placeholder="Enter the amount"
                required
                onChange={(e) => setPrice2(e.target.value)} />
              </div>
            </Col>
            <Col></Col>
          </Row>

          <Row style={{ paddingTop: "30px" }} className="addprice">
            <Col>
              <h2>Spa & Wellness</h2>
              <div className="price">
                <img src="../assets/image/dollar.png" alt="" />
                <input type="text"
                id="price3"
              
                required
                onChange={(e) => setPrice3(e.target.value)} placeholder="Enter the amount" />
              </div>
            </Col>
            <Col>
              <h2>Stay More Pay Less</h2>
              <div className="price">
                <img src="../assets/image/dollar.png" alt="" />
                <input type="text" 
                id="price4"
               
                required
                onChange={(e) => setPrice4(e.target.value)} placeholder="Enter the amount" />
              </div>
            </Col>
            <Col></Col>
          </Row>

          <Row className="addproperty-4">
            <button type="submit">Submit</button>
          </Row>
          </form>
        </Container>
      </div>
      )}
    </div>
  );
}

export default EditRoom;
