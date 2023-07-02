import React from 'react';
import { useState } from 'react';
import ResourceEdit from './ResourceEdit';

const Resource = ({ subject, subjects, setSubjects, resource, handleUpdate }) => {
  const [editOn, setEditOn] = useState(false);

  const {name, description, url, id} = resource;

  const deleteResource = (id) => {
    const updatedResources = subject.resources.filter(res => res.id !== parseInt(id))
    const updatedSubjects = subjects.map( s => s.id === subject.id ? {...s, resources: updatedResources} : s)
    setSubjects(updatedSubjects)
  }

  const handleDeleteClick = () => {
    fetch(`http://localhost:9292/resources/${id}`, {
                method: "DELETE",
                headers: {
                  "Content-Type": 'application/json'
                }
              })
              .then(deleteResource(id))        
              }
              
return (
    <div className='resourceEdit' onDoubleClick={()=> setEditOn((editOn)=>!editOn)}>
           {editOn? <ResourceEdit editOn={editOn} setEditOn={setEditOn} resource={resource} subject={subject} subjects={subjects} setSubjects={setSubjects} handleUpdate={handleUpdate}/> :
           (<div>
             <div className='resourceBox'>
              <h1>Name: </h1>
                <h2>
                  {name}
                </h2>
                  <br/>
                  <hr></hr>
           
              <h1>Resource #: </h1>
                    {id}
            <h1>Description: </h1>
              <h2>{description}</h2>
                <br/>
                <hr></hr>
              <h1>Resource URL: </h1>
              <h2>{url}</h2>
                <br/>
                <hr></hr>
                </div>

              <div className='editDelBut'>
                <div>
                  <button className="delResBtn" onClick={handleDeleteClick}>Delete</button>
                </div>
                <div>
                  <button className="editBtn" onClick={handleUpdate}>Edit</button>
                </div>
              </div>
          </div>)}
    </div>
  )}


export default Resource;
