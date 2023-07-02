
import React, { useState, useEffect } from 'react';
import Resource from './Resource';
import { useParams } from 'react-router-dom';
import NewResource from './NewResource';

const Subject = ({subjects, setSubjects}) => {
  const [subject, setSubject] = useState({
    resources: []
  })

  const {id} = useParams()

  useEffect(()=> {
    const selectedSubject = subjects.find(sub => sub.id === parseInt(id));
  if (selectedSubject) {
    setSubject(selectedSubject)
  }
  }, [subjects, id])

  const allResources = subject.resources.map((resource) => (
    <div key={resource.id}>
      <Resource  resource={resource} subject={subject} subjects={subjects} setSubjects={setSubjects}   subjectID={subject.id} />
    </div>
  ))

return (
  <div>
    <div className='newResourceBox'>
      <div className='newResForm'>
          <NewResource  subjectID={subject.id}  subject={subject} subjects={subjects} setSubjects={setSubjects}  />
        </div>
    </div>

    <div className='subjectAll'>
      <div className='subTitle'>
          <h1><u>Subject:</u> </h1>
          <h1><em>{subject.name}</em></h1>
      </div>
      <div>
        <ul>{allResources}</ul>
      </div>
     
    </div>
  </div>
)}

export default Subject;

