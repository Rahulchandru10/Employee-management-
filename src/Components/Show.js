import React, { useEffect, useState } from 'react';
import '../Styles/Show.css'
import { Link } from 'react-router-dom';
const Show = () => {
  const [res, setRes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/employee/getallemp")
      .then(resp => resp.json())
      .then(re => setRes(re));
  });

  function del(id)
  {
    fetch(`http://localhost:8080/employee/delete/${id}`,
      {
        method:"delete",
      }
    )
  }
  return (
    <>
        <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Contact</th>
            <th>Position</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {res.map(emp => (
            <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.age}</td>
                <td>{emp.contact}</td>
                <td>{emp.position}</td>
                <td>{emp.department}</td>
                <td>
                   <button onClick={()=>del(emp.id)}>Delete</button>
                   <Link to={`/Update/${emp.id}`}><button>Update</button></Link>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
        <Link to={`/Employee`} className='link'><button>Add Employee</button></Link>
    </>
  );
};

export default Show;
