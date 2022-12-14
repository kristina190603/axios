import axios from "axios";
import React, { useState } from "react";
import { Button,Form } from "react-bootstrap";

const AddStudent = () => {

    const [name, setName] = useState('')

    async function addStudentsToDb(newStudent){
        let res = await axios.post('http://localhost:8000/student', newStudent)
        alert("Added succesfully!")
    }

const handleSave = () =>{
    let newObj ={
        name: name,
        created_at: Date.now()
    }
    addStudentsToDb(newObj)
}

  return <div>
    <Form.Control value={name} onChange={(e)=>setName(e.target.value)} placeholder="name"/>
    <Button onClick={handleSave}>ADD</Button>
  </div>;
};

export default AddStudent;
