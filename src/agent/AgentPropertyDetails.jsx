import React from "react";
import { useState } from "react";
import { Accordion, Col, Container, Row, Table } from "react-bootstrap";
import AgentNavbar from "../components/AgentNavbar";

function AgentPropertyDetails() {
    const [deals, setDeals] = useState(true)
    const [photos, setPhotos] = useState(false)
    const [map, setMap] = useState(false)
    const [deatails, setDeatails] = useState(false)
  return (
    <div>
      <AgentNavbar />
      <div className="agentpropdetailsreen">
        <Container>
          <Row>
            <Col className="agentpropdetails" md={8}>
              <Row
                className="agentpropdetails-header"
                style={{
                  backgroundImage: `url("../assets/image/backbanner.png")`,
                }}
              >
                <Row className="agentpropdetails-content">
                  <Col>Check in</Col>
                  <Col>Check out</Col>
                  <Col>#Restaurent</Col>
                  <Col>#Bars</Col>
                </Row>
              </Row>
              <div className="agentpropdetails-nav">
                <ul>
                  <li className={`${deals ? 'act' : ''}`}>deals</li>
                </ul>
                <ul>
                  <li>Room Details </li>
                  <li>Photos</li>
                  <li>Map </li>
                  {/* <li>About </li> */}
                </ul>
              </div>
              {deals && (

              
              <div className="agentprop-tabcontent">
                <div className="agentpropdetails-nav2">
                  <ul>
                    <li>About </li>
                    <li>About </li>
                    <li>About </li>
                    <li>About </li>
                  </ul>
                </div>
                <Row className="agentprop-tableinside">
                  <h1>
                    {" "}
                    Packages for 2 adults from 30th June 2022 to 03rd July 2022
                  </h1>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Room type</th>
                        <th>Starting from</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                      </tr>
                    </tbody>
                  </Table>

                  <Accordion  defaultActiveKey={["0"]} alwaysOpen>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>SUPERIOR BEACH</Accordion.Header>
                      <div className="default-acordian">
                      <Col>
                          heyyy
                        </Col>
                        <Col>
                          heyyy
                        </Col>
                        <Col>
                          heyyy
                        </Col>   
                        <Col style={{textAlignLast:'right'}}>
                            
                         <input type="radio" />
                        </Col>   
                      </div>
                      <Accordion.Body  >
                      <Col>
                          heyyy
                        </Col>
                        <Col>
                          heyyy
                        </Col>
                        <Col>
                          heyyy
                        </Col>   
                        <Col style={{textAlignLast:'right'}}>
                            
                         <input type="radio" />
                        </Col>       
                      </Accordion.Body>

                      <Accordion.Body>
                        <Col>
                         hoyyy
                        </Col>
                        <Col>
                         hoyyy
                        </Col>
                        <Col>
                         hoyyy
                        </Col>
                        <Col style={{textAlignLast:'right'}}>
                            
                            <input type="radio" />
                           </Col>             
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>SUPERIOR BUNGALOW</Accordion.Header>
                      <div className="default-acordian">
                      <Col>
                          heyyy
                        </Col>
                        <Col>
                          heyyy
                        </Col>
                        <Col>
                          heyyy
                        </Col>   
                        <Col style={{textAlignLast:'right'}}>
                            
                         <input type="radio" />
                        </Col>   
                      </div>
                      <Accordion.Body>
                        <Col>
                          heyyy
                        </Col>
                        <Col>
                          heyyy
                        </Col>
                        <Col>
                          heyyy
                        </Col>
                        <Col>
                          heyyy
                        </Col>    
                 
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Row>
              </div>

                )}
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AgentPropertyDetails;
