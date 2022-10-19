import React, { useState } from 'react'
import { Button,Form } from 'react-bootstrap'

export default function Addemployee() {

  const [inpval, setInpval] = useState({
    name:"",
    techskills:"",
    experience:"",
    communication:"",
    technicalrating:"",
    company:""
  })

const setVal = (e) =>{
  const {name,techskills,experience,communication,technicalrating,company} =e.target;
}

// setInpval(()=>{
//   return {
//     ...inpval,
//     [name]: value
//   }
// })

const addUserdata = async (e) =>{
  e.preventDefault();

  const {name,techskills,experience,communication,Technicalrating,company} = inpval
}

// name="name" value={inpval.name} onChange={setVal}
  return (
    <div>
<Form className='m-5'>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter email" name="name" value={inpval.name} onChange={setVal}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Technical Skills</Form.Label>
        <Form.Control type="text" placeholder="" name="techskills" value={inpval.techskills} onChange={setVal}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Experience</Form.Label>
        <Form.Control type="text" placeholder="" name="experience" value={inpval.experience} onChange={setVal}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Communication</Form.Label>
        <Form.Control type="text" placeholder="" name="communication" value={inpval.communication} onChange={setVal} />
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Technical Rating</Form.Label>
        <Form.Control type="text" placeholder="" name="technicalrating" value={inpval.technicalrating} onChange={setVal}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Company</Form.Label>
        <Form.Control type="text" placeholder="" name="company" value={inpval.company} onChange={setVal}/>
      </Form.Group>
     
      <Button variant="primary" type="submit" style={{ width:"100px"}}>
        Submit
      </Button>
      <Button variant="primary" type="submit" style={{width:"100px"}}>
        Go back
      </Button>
    </Form>


    </div>
  )
}
