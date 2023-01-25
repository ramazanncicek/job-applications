import React, {useState} from 'react'
import {Container,Row,Col,Form} from 'react-bootstrap';

export default function AddJobApply() {
  const [companyName,setCompanyName] = useState('');
  const [position,setPosition] = useState('');
  const [location,setLocation] = useState('');
  const [dateApplied,setDateApplied] = useState('');
  const [minYears,setMinYears] = useState('');
  const [relatedDiploma,setRelatedDiploma] = useState('');
  const [hardSkillsArray,setHardSkillArray] = useState([]);
  const [niceHaveSkillArray,setNiceHaveSkillArray] = useState([]);
  const [salaryExpectance,setSalaryExpectance] = useState(0);
  const [salaryCurrency,setSalaryCurrency] = useState('');
  const [hardSkill,setHardSkill] = useState('');
  const [niceHaveSkill,setNiceHaveSkill] = useState('');
  const [selectedResume,setSelectedResume] = useState(null);
  const [takenNotes,setTakenNotes] = useState('');
  const [threeImages,setThreeImages] = useState([]);
  const [imageLimit,setImageLimit] = useState(false);

  const handleHardSkill = (event) => {
    if (event.key === 'Enter') {
      setHardSkillArray([...hardSkillsArray,hardSkill]);
      setHardSkill("");
      console.log(hardSkillsArray);
    }
  };

  const handleNiceHaveSkill = (event) => {
    if (event.key === 'Enter') {
      setNiceHaveSkillArray([...niceHaveSkillArray,niceHaveSkill]);
      console.log(niceHaveSkillArray);
      setNiceHaveSkill("");
    };  
  };

  const handleResume = (e) => {
    setSelectedResume(e.target.files[0]);
  }

  return (
    <Container fluid>
        <Row style={{ marginTop: '20px'}}>
            <Col>
              <Form.Label>Company Name</Form.Label>
              <Form.Control type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)}></Form.Control>
            </Col>
            <Col>
              <Form.Label>Position</Form.Label>
              <Form.Control as="select" value={position} onChange={(e) => setPosition(e.target.value)}>
                <option>Front-end Developer</option>
                <option>Back-end Developer</option>
                <option>DevOps Engineer</option>
                <option>Fullstack Developer</option>
                <option>UI/UX Designer</option>
              </Form.Control>
            </Col>
            <Col>
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" value={location} onChange={(e) => setLocation(e.target.value)}></Form.Control>
              {/* Find a free api if possible */}
            </Col>
            <Col>
              <Form.Label>Date Applied</Form.Label>
              <Form.Control type="date" value={dateApplied} onChange={(e) => setDateApplied(e.target.value)}></Form.Control>
            </Col>
        </Row>
        <Row style={{ marginTop: '20px'}}>
            <Col>
              <Form.Label>Min Years of Exp </Form.Label>
              <Form.Control as="select" value={minYears} onChange={(e) => setMinYears(e.target.value)}>
                <option>Not Specified</option>
                <option>0-1</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
              </Form.Control>
            </Col>
            <Col>
              <Form.Label>Related-field-diploma required</Form.Label>
              <Form.Control as="select" value={relatedDiploma} onChange={(e) => setRelatedDiploma(e.target.value)}>
                <option>Not Specified</option>
                <option>Yes</option>
                <option>No</option>
              </Form.Control>
            </Col>
            <Col>
              <Form.Label>Your Salary Expectance</Form.Label>
              <Col className='d-flex flew-row'>
                <Form.Control type="number" value={salaryExpectance} onChange={(e) => setSalaryExpectance(e.target.value)}></Form.Control>
                <Form.Control as="select" style={{width: "40px"}} value={salaryCurrency} onChange={(e) => setSalaryCurrency(e.target.value)}>
                  <option>$</option>
                  <option>€</option>
                  <option>₺</option>
                </Form.Control>
              </Col>
            </Col>
        </Row>
        <Row style={{ marginTop: '20px'}}>
            <Col>
              <Form.Label>The CV you sent </Form.Label>
              <Form.Control type="file" accept=".pdf" onChange={handleResume}></Form.Control>
            </Col>
            <Col>
              <Form.Label>Your notes </Form.Label>
              <Form.Control as="textarea"  rows="1" value={takenNotes} onChange={(e) => setTakenNotes(e.target.value)}></Form.Control>
            </Col>
            <Col>
              <Form.Label>Images up to 3 </Form.Label>
              <Form.Control type="file" accept="image/*" multiple={true} onChange={(e) => {
                if(e.target.files.length>3) setImageLimit(true);
                else {
                  setImageLimit(false);
                  setThreeImages(e.target.files);
                }
              }}>
              </Form.Control>
              {imageLimit ? <small style={{color: 'red'}}>*You can only select up to 3</small> : null}
            </Col>
        </Row>
        <Row style={{ marginTop: '20px'}}>
            <Col className="d-flex flex-column align-items-center">
              <Form.Label>Hardskills you lack of</Form.Label>
              <Form.Control type="text" value={hardSkill} style={{width: '75%'}} onChange={(e) => setHardSkill(e.target.value)} onKeyDown={handleHardSkill}></Form.Control>
                  {hardSkillsArray.length > 0 ? (
                      <ul>
                        {hardSkillsArray.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                      </ul>
                                                ) : null}
            </Col>
            <Col className="d-flex flex-column align-items-center">
              <Form.Label>Nice-to-haves</Form.Label>
              <Form.Control type="text" value={niceHaveSkill} style={{width: '75%'}}  onChange={(e) => setNiceHaveSkill(e.target.value)} onKeyDown={handleNiceHaveSkill}></Form.Control>
                {niceHaveSkillArray.length > 0 ? (
                  <ul>
                    {niceHaveSkillArray.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                  </ul>
                  ) : null}
            </Col>
        </Row>
    </Container>
  )
}
