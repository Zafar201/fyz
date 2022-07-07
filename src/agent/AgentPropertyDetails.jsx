import React, { useEffect } from "react";
import { useState } from "react";
import { Accordion, Col, Container, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import { checkProperty } from "../actions/generalAction";
import AgentNavbar from "../components/AgentNavbar";
import Criteria from "../components/Criteria";

function AgentPropertyDetails() {
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,

  };
    const [deals, setDeals] = useState(true)
    const [photos, setPhotos] = useState(false)
    const [map, setMap] = useState(false)
    const [deatails, setDeatails] = useState(false)
    const dispatch = useDispatch()
    const checkPropertys= useSelector(state=>state.checkPropertys)
    const {loading, error, prop}= checkPropertys

    const photopage=()=>{
      setDeals(false)
      setPhotos(true)
    }
    const dealpage=()=>{
      setDeals(true)
      setPhotos(false)
    }
    useEffect(()=>{
      dispatch(checkProperty('kerala','1','2','06-29-2022','06-29-2022'))                         
    
   },[dispatch])
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
                  <li onClick={dealpage} className={`${deals ? 'act' : ''}`}>deals</li>
                </ul>
                <ul>
                  <li>Room Details </li>
                  <li className={`${photos ? 'act' : ''}`} onClick={photopage}>Photos</li>
                  <li>Map </li>
                  {/* <li>About </li> */}
                </ul>
              </div>
            

              
              <div className="agentprop-tabcontent">
              {deals && (
                <>
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
                </>
                    )}

                    {photos && (
                      <>
                      {/* <div >
                    <img src={!loading && !error && prop[0].images.length !== 0 ? prop[0].images[0].location : ""} alt="" />
                  </div> */}
                  <Slider {...settings} className="agent-prop-pic">
                    {!loading && !error && prop[0].images.length !== 0 && prop[0].images.map((img)=>(
                          <div >
                            <img src={img.location} alt="" />
                          </div>
                    ))}
                     
                    </Slider>
                    </>
                    )}
              </div>

            
            </Col>
            <Col style={{marginTop:'18px'}}>
              <Criteria/>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AgentPropertyDetails;
