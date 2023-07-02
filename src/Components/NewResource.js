import React, { useState } from 'react';

const NewResource = ({subject, subjects, setSubjects}) => {
  const [resourceFormData, setResourceFormData] = useState({
    name: '',
    description: '',
    url: '',
    subject_id: subject.id
    })

  const {name, description, url} = resourceFormData;

  const handleResourceChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setResourceFormData({...resourceFormData, [name] :value})
  }

  const handleUpdateNew = (newResourceData) => {
    const subjectDataToUpdate = [...subjects];
    const i = subjectDataToUpdate.findIndex((sub) => (
      sub.id === newResourceData.subject_id
    ))
    const newResourceArray = ([...subjects[i].resources, newResourceData])
      subjectDataToUpdate[i].resources = newResourceArray;
      setSubjects(subjectDataToUpdate)
  }

  const handleSubmitResource = (e) =>{
      e.preventDefault()
      fetch( "http://localhost:9292/resources", {
        method: "POST",
        headers: {
          "Content-Type": 'application/json',
        },
          body: JSON.stringify({
            name: name,
            description: description,
            url: url,
            subject_id: subject.id
            }),
      })
          .then((r) => r.json())
          .then((newResourceData) => {
          handleUpdateNew(newResourceData)
              setResourceFormData({
                name: "",
                description: "",
                url:"",
                subject_id: subject.id
              })
          })
    }

return (
  <div className="newResourceForm" >
    <div className="h2Wrapper">
      <h2 className="newResourceH2">  <b>A</b>dd  <b>N</b>ew  <b>R</b>esources  <b>H</b>ere  </h2>
    </div>
        <br/><br/>
            <form className="form" onSubmit={handleSubmitResource}>
                  <input className="formInput" type="text" name="name" placeholder="Resource Name" value={resourceFormData.name} onChange={handleResourceChange} />
                  <input className="formInput" type="text" name="description" placeholder="Description" value={resourceFormData.description} onChange={handleResourceChange} />
                  <input className="formInput" type="text" name="url" placeholder="URL" value={resourceFormData.url} onChange={handleResourceChange} /> 
                    <button className="formButton" type="submit">ADD</button>
            </form>
      </div>
  );
};

export default NewResource;

