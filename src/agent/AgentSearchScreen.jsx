import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import AgentNavbar from "../components/AgentNavbar";

function AgentSearchScreen() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDate2, setSelectedDate2] = useState(new Date());
  const navigate = useNavigate();

  console.log(selectedDate);
  return (
    <div>
      <AgentNavbar />

      <div className="agent-search">
        <Container>
          <Row>
            <Col className="agent-search-left"></Col>
            <Col className="agent-search-right">
              <Row>
                <h1>SEARCH HOTELS</h1>
                <h2>Get the best deals available in the Indian Ocean.</h2>
              </Row>
              <Row>
                <select
                  name="location"
                  id="location"
                  required
                  // onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="not selected">
                    Select destination or hotel name
                  </option>
                  <option value="kerala">Kerala</option>
                  <option value="maldives">Maldives</option>
                  <option value="jammu">Jammu</option>
                </select>
              </Row>
              <Row className="agent-search-date">
                <input
                  type="date"
                  placeholder="dd-mm-yyyy"
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
                <input
                  style={{ marginLeft: "23px" }}
                  type="date"
                  placeholder="dd-mm-yyyy"
                  onChange={(e) => setSelectedDate2(e.target.value)}
                />
                {/* <DatePicker 
                       selected={selectedDate} 
                       required
                       dateFormat="MM/dd/yyyy"  
                       onChange={date=> setSelectedDate(date)}
                       minDate={new Date()}/> */}
              </Row>
              <Row className="agent-search-destination">
                <select
                  name="location"
                  id="location"
                  required
                  // onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="not selected">Select Nationality</option>
                  <option value="kerala">Kerala</option>
                  <option value="maldives">Maldives</option>
                  <option value="jammu">Jammu</option>
                </select>

                <select
                  style={{ marginLeft: "23px" }}
                  name="location"
                  id="location"
                  required
                  // onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="not selected">Select holiday type</option>
                  <option value="kerala">Kerala</option>
                  <option value="maldives">Maldives</option>
                  <option value="jammu">Jammu</option>
                </select>
              </Row>
              <Row className="agent-search-button">
                <select
                  name="location"
                  id="location"
                  required
                  // onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="not selected">Select Nationality</option>
                  <option value="kerala">Kerala</option>
                  <option value="maldives">Maldives</option>
                  <option value="jammu">Jammu</option>
                </select>

                <button
                  onClick={() => navigate("/agentsearchlist")}
                  style={{ marginLeft: "23px" }}
                >
                  Search
                </button>
              </Row>

              <Row className="agent-search-group">
                <div className="d-flexs">
                  <Col className="agent-search-group-1">
                    <span>Solo travaller</span>
                    <span style={{ float: "right" }}>1adualt 1children</span>
                  </Col>
                  <Col
                    className="agent-search-group-1"
                    style={{ marginLeft: "16px" }}
                  >
                    <span>Solo travaller</span>
                    <span style={{ float: "right" }}>1adualt 1children</span>
                  </Col>
                </div>
                <div className="agent-search-room">
                <Col md={3} className='agent-search-room1'>
                  <ul>
                    <li><input type="checkbox" value='true' defaultChecked='true' /> Room 1</li>
                    <li ><input type="checkbox" defaultChecked='true' />Room 2</li>
                    <li><input type="checkbox" defaultChecked='true' />Room 3</li>
                    <li><input type="checkbox" defaultChecked='true' />Room 4</li>
                  </ul>
                </Col>

                <Col md={9} className='agent-search-room2'>
                   <Row style={{paddingLeft:'12px'}}>
                    <Col>
                      <h3>  adulats</h3>
                      <input type="text" name="" id="" />
                    </Col>
                    <Col>
                    <h3>  children</h3>
                    <input type="text" name="" id="" />
                    </Col>
                    
                   </Row>
                </Col>
              </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AgentSearchScreen;
