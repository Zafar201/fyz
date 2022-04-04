import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import {
  addRoom,
  detailsProperty,
  detailsRoom,
  getRooms,
  getRoomsDetails,
  updateRoom,
} from '../actions/generalAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

function EditRoom() {
  const params = useParams();
  const { roooms, setRoooms } = useState(false);
  const { id: propertyId } = params;
  const [name, setName] = useState('');
  const [occupancy, setOccupancy] = useState('');
  const [adult, setAdult] = useState('');
  const [child, setChild] = useState('');
  const [description, setDescription] = useState('');
  const [size, setSize] = useState('');
  const [bedType, setBedType] = useState('');
  const [amenities, setAmenities] = useState([]);
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');
  const [fourth, setFourth] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state, 'statee');

  const roomDetails = useSelector((state) => state.roomDetails);
  const { loading, error, room } = roomDetails;

  const roomUpdate = useSelector((state) => state.roomUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = roomUpdate;

  useEffect(() => {
    if (successUpdate) {
      navigate(`/property/${propertyId}`);
      console.log('heyyyyyyyy');
    }
    if (!room || successUpdate || room._id !== location.state) {
      dispatch(detailsRoom(propertyId, location.state));
    }
    if (!loading && !error) {
      setName(room.name);
      setOccupancy(room.address);
      setAdult(room.adult);
      setChild(room.child);
      setDescription(room.description);
      setSize(room.size);
      setBedType(room.bedType);
      setAmenities(room.amenities);
      setFirst(room.price.first);
      setSecond(room.price.second);
      setThird(room.price.third);
      setFourth(room.price.fourth);
    }

    console.log(room, 'room');
  }, [dispatch, propertyId, location.state, room, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateRoom({
        propId: propertyId,
        roomId: location.state,
        name,
        description,
        adult,
        child,
        size,
        bedType,
        amenities,
        price: { first, second, third, fourth },
      })
    );
  };

  const amnetiesFun = (a) => {
    if (amenities.includes(a)) {
      setAmenities(amenities.filter((item) => item !== a));
    } else {
      setAmenities([...amenities, a]);
    }
    console.log(amenities);
  };

  return (
    <div>
      <div className="admin-nav">
        <Container>
          <Row>
            <Col className="admin-logo">
              <Link to="/">
                <img src="/assets/image/logo-admin.png" alt="" />
              </Link>
            </Col>
            <Col>
              <img
                style={{ float: 'right' }}
                src="/assets/image/profile.png"
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
        <div className="addproperty">
          <Container>
            <Row>
              <h1>Edit Room:{propertyId}</h1>
              <p>{location.state}</p>
            </Row>
            <form onSubmit={submitHandler}>
              <Row>
                <Col>
                  <h2>Room name </h2>
                  <input
                    type="text"
                    id="name"
                    defaultValue={room.name}
                    placeholder="Enter name"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
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

              <Row style={{ paddingTop: '30px' }}>
                <h2>
                  Description <span>(100-140 words)</span>
                </h2>
                <textarea
                  name="description"
                  id="description"
                  defaultValue={room.description}
                  onChange={(e) => setDescription(e.target.value)}
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
                  <div style={{ backgroundColor: 'white' }}></div>
                  <div style={{ backgroundColor: ' #EBEBEB' }}></div>
                  <div style={{ backgroundColor: ' #E3E3E3;' }}></div>
                  <div style={{ backgroundColor: '#A7A6A6' }}></div>
                </Col>
              </Row>

              <Row className="addroom-4">
                <Col>
                  <h2>Adualt</h2>
                  <input
                    type="number"
                    id="adult"
                    placeholder="Enter numbers"
                    required
                    defaultValue={room.adult}
                    onChange={(e) => setAdult(e.target.value)}
                  />
                </Col>
                <Col>
                  <h2>Child</h2>
                  <input
                    type="number"
                    id="child"
                    placeholder="Enter numbers"
                    required
                    onChange={(e) => setChild(e.target.value)}
                    defaultValue={room.child}
                  />
                </Col>

                <Col>
                  {/* <h2>Name of property</h2>
                     <input type="text" /> */}
                </Col>
              </Row>
              <Row className="select">
                <Col>
                  <h2>Room Size (sq. ft)</h2>
                  <input
                    type="number"
                    id="size"
                    placeholder="Enter size"
                    defaultValue={room.size}
                    // required
                    onChange={(e) => setSize(e.target.value)}
                  />
                </Col>
                <Col>
                  <h2>Bed Type</h2>
                  <select
                    name="cars"
                    id="cars"
                    onChange={(e) => setBedType(e.target.value)}
                  >
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
                  <Col
                    onClick={() => amnetiesFun('Bathtub')}
                    className={
                      amenities.includes('Bathtub') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/icon.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Bathtub</h6>
                    </Row>
                  </Col>
                  <Col
                    onClick={() => amnetiesFun('Bathtub1')}
                    className={
                      amenities.includes('Bathtub1') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/icon2.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Bathtub1</h6>
                    </Row>
                  </Col>
                  <Col
                    onClick={() => amnetiesFun('Bathtub2')}
                    className={
                      amenities.includes('Bathtub2') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/icon.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Bathtub2</h6>
                    </Row>
                  </Col>
                  <Col
                    onClick={() => amnetiesFun('Bathtub3')}
                    className={
                      amenities.includes('Bathtub3') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/icon.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Bathtub3</h6>
                    </Row>
                  </Col>
                  <Col
                    onClick={() => amnetiesFun('Bathtub4')}
                    className={
                      amenities.includes('Bathtub4') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/icon.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Bathtub4</h6>
                    </Row>
                  </Col>
                  <Col
                    onClick={() => amnetiesFun('Bathtub5')}
                    className={
                      amenities.includes('Bathtub5') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/icon.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Bathtub5</h6>
                    </Row>
                  </Col>
                  <Col style={{ background: 'none' }}></Col>
                  <Col style={{ background: 'none' }}></Col>
                </Row>
              </div>
              <div className="addroom-5">
                <Row>
                  <Col
                    onClick={() => amnetiesFun('Bathtub6')}
                    className={
                      amenities.includes('Bathtub6') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/icon.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Bathtub</h6>
                    </Row>
                  </Col>
                  <Col
                    onClick={() => amnetiesFun('Bathtub7')}
                    className={
                      amenities.includes('Bathtub7') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/icon2.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Bathtub</h6>
                    </Row>
                  </Col>
                  <Col
                    onClick={() => amnetiesFun('Bathtub8')}
                    className={
                      amenities.includes('Bathtub8') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/icon.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Bathtub</h6>
                    </Row>
                  </Col>
                  <Col
                    onClick={() => amnetiesFun('Bathtub9')}
                    className={
                      amenities.includes('Bathtub9') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/icon.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Bathtub</h6>
                    </Row>
                  </Col>
                  <Col
                    onClick={() => amnetiesFun('Bathtub10')}
                    className={
                      amenities.includes('Bathtub10') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/icon.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Bathtub</h6>
                    </Row>
                  </Col>
                  <Col
                    onClick={() => amnetiesFun('Bathtub11')}
                    className={
                      amenities.includes('Bathtub11') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/icon.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Bathtub</h6>
                    </Row>
                  </Col>
                  <Col style={{ background: 'none' }}></Col>
                  <Col style={{ background: 'none' }}></Col>
                </Row>
              </div>
              <div className="addroom-5">
                <Row>
                  <Col
                    onClick={() => amnetiesFun('Bathtub12')}
                    className={
                      amenities.includes('Bathtub12') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/icon.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Bathtub</h6>
                    </Row>
                  </Col>
                  <Col
                    onClick={() => amnetiesFun('Bathtub13')}
                    className={
                      amenities.includes('Bathtub13') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/icon2.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Bathtub</h6>
                    </Row>
                  </Col>
                  <Col
                    onClick={() => amnetiesFun('Bathtub14')}
                    className={
                      amenities.includes('Bathtub14') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/icon.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Bathtub</h6>
                    </Row>
                  </Col>
                  <Col
                    onClick={() => amnetiesFun('Bathtub15')}
                    className={
                      amenities.includes('Bathtub15') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/icon.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Bathtub</h6>
                    </Row>
                  </Col>
                  <Col
                    onClick={() => amnetiesFun('Bathtub16')}
                    className={
                      amenities.includes('Bathtub16') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/icon.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Bathtub</h6>
                    </Row>
                  </Col>
                  <Col
                    onClick={() => amnetiesFun('Bathtub17')}
                    className={
                      amenities.includes('Bathtub17') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/icon.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Bathtub</h6>
                    </Row>
                  </Col>
                  <Col style={{ background: 'none' }}></Col>
                  <Col style={{ background: 'none' }}></Col>
                </Row>
              </div>
              <div className="addroom-5">
                <Row>
                  <Col
                    onClick={() => amnetiesFun('Bathtub18')}
                    className={
                      amenities.includes('Bathtub18') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/icon.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Bathtub</h6>
                    </Row>
                  </Col>
                  <Col
                    onClick={() => amnetiesFun('Bathtub19')}
                    className={
                      amenities.includes('Bathtub19') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/icon2.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Bathtub</h6>
                    </Row>
                  </Col>
                  <Col
                    onClick={() => amnetiesFun('Bathtub20')}
                    className={
                      amenities.includes('Bathtub20') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/icon.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Bathtub</h6>
                    </Row>
                  </Col>
                  <Col
                    onClick={() => amnetiesFun('Bathtub21')}
                    className={
                      amenities.includes('Bathtub21') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/icon.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Bathtub</h6>
                    </Row>
                  </Col>
                  <Col
                    onClick={() => amnetiesFun('Bathtub22')}
                    className={
                      amenities.includes('Bathtub22') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/icon.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Bathtub</h6>
                    </Row>
                  </Col>
                  <Col
                    onClick={() => amnetiesFun('Bathtub23')}
                    className={
                      amenities.includes('Bathtub23') ? 'amneties-active' : null
                    }
                  >
                    <Row>
                      <img src="/assets/image/icon.png" alt="" />
                    </Row>
                    <Row>
                      <h6>Bathtub</h6>
                    </Row>
                  </Col>
                  <Col style={{ background: 'none' }}></Col>
                  <Col style={{ background: 'none' }}></Col>
                </Row>
              </div>

              <Row style={{ paddingTop: '30px' }}>
                <h1>Add Price</h1>
              </Row>
              <Row className="addprice">
                <Col>
                  <h2>Reserve Experience</h2>
                  <div className="price">
                    <img src="/assets/image/dollar.png" alt="" />
                    <input
                      type="text"
                      id="price1"
                      placeholder="Enter the amount"
                      // required
                      defaultValue={room.price.first}
                      onChange={(e) => setFirst(e.target.value)}
                    />
                  </div>
                </Col>
                <Col>
                  <h2>Reserve Plan Flex</h2>
                  <div className="price">
                    <img src="/assets/image/dollar.png" alt="" />
                    <input
                      type="text"
                      id="price2"
                      placeholder="Enter the amount"
                      defaultValue={room.price.second}
                      onChange={(e) => setSecond(e.target.value)}
                    />
                  </div>
                </Col>
                <Col></Col>
              </Row>

              <Row style={{ paddingTop: '30px' }} className="addprice">
                <Col>
                  <h2>Spa & Wellness</h2>
                  <div className="price">
                    <img src="/assets/image/dollar.png" alt="" />
                    <input
                      type="text"
                      id="price3"
                      // required
                      defaultValue={room.price.third}
                      onChange={(e) => setThird(e.target.value)}
                      placeholder="Enter the amount"
                    />
                  </div>
                </Col>
                <Col>
                  <h2>Stay More Pay Less</h2>
                  <div className="price">
                    <img src="/assets/image/dollar.png" alt="" />
                    <input
                      type="text"
                      id="price4"
                      // required
                      defaultValue={room.price.fourth}
                      onChange={(e) => setFourth(e.target.value)}
                      placeholder="Enter the amount"
                    />
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
