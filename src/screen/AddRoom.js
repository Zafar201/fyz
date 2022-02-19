import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function AddRoom() {
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

      <div className="addproperty">
        <Container>
          <Row>
            <h1>Add Room</h1>
          </Row>
          <Row>
            <Col>
              <h2>Room name</h2>
              <input type="text" />
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
              <input type="text" />
            </Col>
            <Col>
              <h2>Room Size (sq. ft)</h2>
              <input type="text" />
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
                <input type="text" placeholder="Enter the amount" />
              </div>
            </Col>
            <Col>
              <h2>Reserve Plan Flex</h2>
              <div className="price">
                <img src="../assets/image/dollar.png" alt="" />
                <input type="text" placeholder="Enter the amount" />
              </div>
            </Col>
            <Col></Col>
          </Row>

          <Row style={{ paddingTop: "30px" }} className="addprice">
            <Col>
              <h2>Spa & Wellness</h2>
              <div className="price">
                <img src="../assets/image/dollar.png" alt="" />
                <input type="text" placeholder="Enter the amount" />
              </div>
            </Col>
            <Col>
              <h2>Stay More Pay Less</h2>
              <div className="price">
                <img src="../assets/image/dollar.png" alt="" />
                <input type="text" placeholder="Enter the amount" />
              </div>
            </Col>
            <Col></Col>
          </Row>

          <Row className="addproperty-4">
            <button>Submit</button>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AddRoom;
