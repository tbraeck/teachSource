
import React, { useState } from 'react';

const NewSubject = ({handleAdd}) => {
  const [subjectFormData, setSubjectFormData] = useState({
    name: '',
    description: '',
    url: '',
    resources: []
  })

const {name, description, url} = subjectFormData;

const handleSubjectChange = (e) => {
  let name = e.target.name;
  let value = e.target.value;
  setSubjectFormData({...subjectFormData, [name] :value})
}

const handleSubmitSubject = (e) => {
    e.preventDefault()
    fetch( "http://localhost:9292/subjects", {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
      },
        body: JSON.stringify(subjectFormData),
      })
        .then((r) => r.json())
        .then(newSubjectData => {
            handleAdd(newSubjectData)
            setSubjectFormData({
              name: "",
              description:"",
              url:""
            })
      })
  }

return (
  <div className="newSubjectForm" >
    <div className="h2WrapperSub">
      <h2 className="newSubjectH2">  <b>A</b>dd  <b>N</b>ew  <b>S</b>ubjects  <b>H</b>ere  </h2>
    </div>
        <br/><br/>
      <form className="subjectForm" onSubmit={handleSubmitSubject}>
        <input className="formInputSubject" type="text" name="name" placeholder="Subject Name" value={name} onChange={handleSubjectChange} />
        <input className="formInputSubject" type="text" name="description" placeholder="Description" value={description} onChange={handleSubjectChange} />
        <input className="formInputSubject" type="text" name="url" placeholder="URL" value={url} onChange={handleSubjectChange} />
          <div>
            <button className="formButtonSubject" type="submit">ADD</button>
          </div>
      </form>
  </div>
  );
};

export default NewSubject;
