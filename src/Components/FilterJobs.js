import React,{useState} from 'react';
import {Button,Container,Row,Col,Form} from 'react-bootstrap';


export default function FilterJobs() {
  const [companyName,setCompany] = useState("");
  const [position,setPosition] = useState("");
  const [location,setLocation] = useState("");
  const [date,setDate] = useState("");
  function displayValues() {
    console.log(companyName + " " + position + " " + location + " " + date);
  }
  return (
    <div>
        <Container fluid>
            <Row>
                <Col>
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control type="text" value={companyName} onChange={(e) => setCompany(e.target.value)}></Form.Control>
                </Col>
                <Col>
                  <Form.Label>Position</Form.Label>
                  <Form.Control type="text" value={position} onChange={(e) => setPosition(e.target.value)}></Form.Control>
                </Col>
                <Col>
                  <Form.Label>Location</Form.Label>
                  <Form.Control type="Text" value={location} onChange={(e) => setLocation(e.target.value)}></Form.Control>
                </Col>
                <Col>
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)}></Form.Control>
                </Col>
                <Col className="d-flex align-items-end">
                  <Button onClick={displayValues}>Search</Button>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
