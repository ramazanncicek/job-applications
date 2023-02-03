import React, {useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import PostCard from './PostCard';

export default function GetApplications() {
  const [jobRecords,setJobRecords] = useState([]);
  useEffect(() => {
    
  }, [])
//   useEffect(() => {
    
//   }, [jobRecords])
  
  return (
    <>
        <Container fluid>
            {jobRecords.map((item,index) => {
                <PostCard
                companyName={item.companyName}
                role={item.role}
                location={item.location}
                date={item.date}
                minYears={item.minYears}
                licenseDegree={item.licenseDegree}
                hardSkills={item.hardSkills}
                salaryExp={item.salaryExp}
                niceToHaves={item.niceToHaves}
                ></PostCard>
            })}
        </Container>
    </>
  )
}
