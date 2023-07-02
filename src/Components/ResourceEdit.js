import React, { useState} from 'react';


const ResourceEdit = ({  subjects, resource, setSubjects, editOn, setEditOn}) => {
  const [resourceBody, setResourceBody] = useState({
    name: resource.name,
    description: resource.description,
    url: resource.url,
    subject_id: resource.subject_id
})

const {name, description, url} = resourceBody;

const handleResourceChange = (e) => {
  let name = e.target.name
  let value = e.target.value
  setResourceBody({...resourceBody, [name]:value})
}
console.log(resourceBody)

const handleUpdateRes = (updatedRes) => {
  const subjectDataToUpdate = [...subjects]
  const subject = subjectDataToUpdate.find((sub)=>sub.id === updatedRes.subject_id)
  if (resource.subject_id === updatedRes.subject_id){
      const i = subject.resources.findIndex((res)=>res.id === updatedRes.id)
      subject.resources[i] = updatedRes
      setSubjects(subjectDataToUpdate)
  } else{
      subject.resources = [...subjects.resources, updatedRes]
      setSubjects(subjectDataToUpdate)
}
}

const handleEdit = (e) => {
  e.preventDefault()
    fetch(`http://localhost:9292/resources/${resource.id}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(resourceBody)
        })
          .then((res) => res.json())
          .then((updatedRes) => handleUpdateRes(updatedRes))
          setEditOn(!editOn)
          }
    
  return (
    <form className="updateForm" onSubmit={handleEdit}>
      <input
        type="text"
        name='name'
        value={name}
        onChange={handleResourceChange}
        placeholder="Enter title"
      />
       <input
        type="text"
        name='description'
        value={description}
        onChange={handleResourceChange}
        placeholder="Enter description"
      />
       <input
        type="text"
        name='url'
        value={url}
        onChange={handleResourceChange}
        placeholder="Enter url"
      />
      <button type="submit">Submit Changes</button>
    </form>
  );
};

export default ResourceEdit;

