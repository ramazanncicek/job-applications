import React, { useState } from 'react';
import {Button,Container,Row,Col} from 'react-bootstrap';

export default function PostCard(props) {
  const [viewDetails,setDetails] = useState(false);
  const displayDetails = () => {
    setDetails(!viewDetails);
  }
  return (
        <Container fluid style={{ marginTop: '20px' }} className="border">
            <Row>
                <Col className="d-flex align-items-end">
                  <p>{props.companyName}</p>
                </Col>
                <Col className="d-flex align-items-end">
                  <p>{props.role}</p>
                </Col>
                <Col className="d-flex align-items-end">
                  <p>{props.location}</p>
                </Col>
                <Col className="d-flex align-items-end">
                  <p>{props.date}</p>
                </Col>
                <Col>
                  <Button onClick={displayDetails}>...</Button>
                </Col>
            </Row>
            <Row className={viewDetails ? 'd-none' : ''}>
              <Col>
              <p>Min Years of Exp: {props.minYears}</p>
              </Col>
              <Col>
              <p>Related-field-diploma required: {props.licenseDegree}</p>
              </Col>
              <Col>
              <p>Hardskills you lack of: {props.hardSkills}</p>
              </Col>
              <Col>
              <p>Your Salary Expectance: {props.salaryExp}</p>
              </Col>
              <Col>
              <p>Nice-to-haves: {props.niceToHaves}</p>
              </Col>
            </Row>
            <Row className={viewDetails ? 'd-none' : ''}>
              <Col>
              <p>The CV you sent:</p>
              </Col>
              <Col>
              <p>Your notes:</p>
              </Col>
              <Col>
              <p>Pictures up to 3:</p>
              </Col>
            </Row>
        </Container>
  )
}
