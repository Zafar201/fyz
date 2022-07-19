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
  const [groups, setGroups] = useState(false)
  const [room1, setRoom1] = useState(true)
  const [room2, setRoom2] = useState(false)
  const [room3, setRoom3] = useState(false)
  const [room4, setRoom4] = useState(false)
  const [group1, setGroup1] = useState(true)
  const [group2, setGroup2] = useState(false)
  const [group3, setGroup3] = useState(false)

  const [group4, setGroup4] = useState(false)

  const navigate = useNavigate();
 const addRoom=()=>{
  console.log('clicked');
  if(!room2){
    setRoom2(true)
    setGroup2(true)
    setGroup1(false)
    setGroup3(false)
    setGroup4(false)
  }
  if(room2){
    setRoom3(true)
    setGroup3(true)
    setGroup1(false)
    setGroup2(false)
    setGroup4(false)
  }
  if(room3){
    setRoom4(true)
    setGroup4(true)
    setGroup1(false)
    setGroup3(false)
    setGroup3(false)
  }
 }


 const groups1=()=>{
  setGroup2(false)
  setGroup1(true)
  setGroup3(false)
  setGroup4(false)
 }

 const groups2=()=>{
  setGroup2(true)
  setGroup1(false)
  setGroup3(false)
  setGroup4(false)
 }
 
 const groups3=()=>{
  setGroup3(true)
  setGroup1(false)
  setGroup2(false)
  setGroup4(false)
 }
 
 const groups4=()=>{
  setGroup4(true)
  setGroup1(false)
  setGroup3(false)
  setGroup3(false)
 }


 const close2=()=>{
  setRoom1(true)
  setGroup1(true)
  setRoom2(false)
  setGroup2(false)
 }
const close3=()=>{
  setRoom2(true)
  setGroup2(true)
  setRoom3(false)
  setGroup3(false)
 }
 const close4=()=>{
  setRoom3(true)
  setGroup3(true)
  setRoom4(false)
  setGroup4(false)
 }
 
 
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
                  onClick={()=>setGroups(!groups)}
                >
                  {/* <option value="not selected">Select Nationality</option>
                  <option value="kerala">Kerala</option>
                  <option value="maldives">Maldives</option>
                  <option value="jammu">Jammu</option> */}
                </select>

                <button
                  onClick={() => navigate("/agentsearchlist")}
                  style={{ marginLeft: "23px" }}
                >
                  Search
                </button>
              </Row>
              

              {groups && (
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
                   {room1 &&( <li className={`${group1 ? "act" : ""}`} onClick={groups1}><input type="checkbox"  value='true' defaultChecked='true' /> Room 1</li>)}
                   {room2 && (<li className={`${group2 ? "act" : ""}`} onClick={groups2}><input type="checkbox" defaultChecked='true' />Room 2</li>)} 
                   {room3 && (<li className={`${group3 ? "act" : ""}`} onClick={groups3}><input type="checkbox" defaultChecked='true' />Room 3</li>)}   
                   {room4 && (<li className={`${group4 ? "act" : ""}`} onClick={groups4}><input type="checkbox" defaultChecked='true' />Room 4</li>)} 
                    <li style={{background:'red',cursor:'pointer'}} onClick={addRoom}>+Add room</li>
                  </ul>
                </Col>

              {group1 && (<Col md={9} className='agent-search-room2'>
                   <Row style={{paddingLeft:'12px'}}>
                    <Col>
                      <h3>  adulats</h3>
                      <input type="text" name="" id="" />
                    </Col>
                    <Col>
                    <h3>  children1</h3>
                    <input type="text" name="" id="" />
                    </Col>       
                  
                   </Row>
                </Col>
              )}


            {group2 && (<Col md={9} className='agent-search-room2'>
                   <Row style={{paddingLeft:'12px'}}>
                    <Col>
                      <h3>  adulats</h3>
                      <input type="text" name="" id="" />
                    </Col>
                    <Col>
                    <h3>  children2</h3>
                    <input type="text" name="" id="" />
                    </Col>      
                    <Col md={1} onClick={close2}>
                      X
                    </Col> 
                   </Row>
                </Col>
              )}

              {group3 && (<Col md={9} className='agent-search-room2'>
                   <Row style={{paddingLeft:'12px'}}>
                    <Col>
                      <h3>  adulats</h3>
                      <input type="text" name="" id="" />
                    </Col>
                    <Col>
                    <h3>  children3</h3>
                    <input type="text" name="" id="" />
                    </Col>    
                    <Col md={1} onClick={close3}>
                      X
                    </Col>   
                   </Row>
                </Col>
              )}

              {group4 && (<Col md={9} className='agent-search-room2'>
                   <Row style={{paddingLeft:'12px'}}>
                    <Col>
                      <h3>  adulats</h3>
                      <input type="text" name="" id="" />
                    </Col>
                    <Col>
                    <h3>  children4</h3>
                    <input type="text" name="" id="" />
                    </Col>    
                    <Col md={1} onClick={close4}>
                      X
                    </Col>   
                   </Row>
                </Col>
              )}
                

              </div>
              </Row>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AgentSearchScreen;
