import { useState } from 'react'
import '../Styles/Employee.css'
import { Link } from 'react-router-dom';
const Employee = () => {
  const [id,setId] = useState();
  const [name,setName] = useState("null");
  const [age,setAge] = useState("null");
  const [contact,setContact] = useState("null");
  const [position,setPosition] = useState("null");
  const [department,setDepartment] = useState("null");

  const handleclick=()=>
    {
        const data ={id,name,age,contact,position,department};
        fetch("http://localhost:8080/employee/add",
            {
                method:"post",
                headers:{"Content-type":"application/json"},
                body:JSON.stringify(data)
            }
        )
        .then(
            console.log("successfully added")
        )
    }
  return (
    <>
     <div className="inp">
        <h3>Add Employee</h3>
        <div>
           <label>ID : </label>
           <input type="number" onChange={(e)=>(setId(e.target.value))}/>
        </div>
        <div>
           <label>Name : </label>
           <input type="name" onChange={(e)=>(setName(e.target.value))}/>
        </div>
        <div>
           <label>Age : </label>
           <input type="number" onChange={(e)=>(setAge(e.target.value))}/>
        </div>
        <div>
           <label>Contact : </label>
           <input type="number" onChange={(e)=>(setContact(e.target.value))}/>
        </div>
        <div>
           <label>Position : </label>
           <input type="name" onChange={(e)=>(setPosition(e.target.value))}/>
        </div>
        <div>
           <label>Department : </label>
           <input type="name" onChange={(e)=>(setDepartment(e.target.value))}/>
        </div>
        <Link to={'/'}><button onClick={handleclick}>Submit</button></Link>
      </div>
    </>
  )
}

export default Employee