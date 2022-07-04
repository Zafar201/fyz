import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AgentNavbar from '../components/AgentNavbar'

function AgentPropertyDetails() {
  return (
    <div>
        <AgentNavbar/>
        <div className='agentpropdetailsreen'>
        <Container>
            <Row >
                <Col className='agentpropdetails' md={8}>
                   <Row className='agentpropdetails-header'  style={{ backgroundImage: `url("../assets/image/backbanner.png")` }}>
                       <Row className="agentpropdetails-content">
                          <Col>
                             Check in
                          </Col>
                          <Col>
                             Check out
                          </Col>
                          <Col>
                             #Restaurent
                          </Col>
                          <Col>
                            #Bars
                          </Col>
                       </Row>
                    </Row>
                    <div className='agentpropdetails-nav'>
                        <ul>
                            <li className='act'>
                                deals
                            </li>
                        </ul>
                        <ul>
                           <li >About </li>
                           <li >About </li>
                           <li >About </li>
                           <li >About </li>
                        </ul>
                    </div>
                    <div className='agentprop-tabcontent'>
                        <div className="agentpropdetails-nav2">
                            <ul>
                              <li >About </li>
                              <li >About </li>
                              <li >About </li>
                              <li >About </li>
                            </ul>
                        </div>
                        <Row>
                        Packages for 2 adults from 30th June 2022 to 03rd July 2022
                        </Row>
                    </div>
                </Col>
                <Col>
                
                </Col>
            </Row>
          
        </Container>
        </div>
    </div>
  )
}

export default AgentPropertyDetails