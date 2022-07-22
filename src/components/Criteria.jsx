import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SearchCriteria from './SearchCriteria';

function Criteria() {
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
  return (
    <div>

   <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body className='model'>
          <SearchCriteria/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


      
        <Row className='criteria'>
          <div  className="searchlist-left">
                    <Row className="searchlist-box">
                  
                          <h2>You are searching for</h2>
                     
                        <div>
                          <h1>Hotels in</h1>
                          <p>Maldives</p>
                        </div>
                        <div>
                          <h1>to Accommodate</h1>
                          <p>Maldives</p>
                        </div>
                        <div>
                          <h1>of Nationality</h1>
                          <p>Maldives</p>
                        </div>
                        <div>
                          <h1>for 7 nights stay</h1>
                          <p>Check-in: 30 Jun 2022</p>
                          <p>Check-in: 30 Jun 2022</p>
                        </div>  
                        <button onClick={handleShow}>Update Criteria</button>
                    </Row>
                </div>
                </Row>
    </div>
  )
}

export default Criteria