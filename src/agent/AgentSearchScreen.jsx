import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import AgentNavbar from "../components/AgentNavbar";
import SearchCriteria from "../components/SearchCriteria";

function AgentSearchScreen() {
  return (
    <div>
      <AgentNavbar />
      <div className="agent-search">
        <Container>
          <Row>
            <Col className="agent-search-left"></Col>
            <Col >
              <SearchCriteria />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AgentSearchScreen;
