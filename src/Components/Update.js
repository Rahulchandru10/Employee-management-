import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../Styles/Employee.css';

const Update = () => {
  const { id } = useParams(); 
  const [employee, setEmployee] = useState({
    id: '',
    name: '',
    age: '',
    contact: '',
    position: '',
    department: ''
  });

  useEffect(() => {
    fetch(`http://localhost:8080/employee/Get/${id}`)
      .then(res => res.json())
      .then(re => setEmployee(re))
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  function change()
  {
    fetch("http://localhost:8080/employee/update",
        {
           method:"post",
           headers:{"Content-type":"application/json"},
           body:JSON.stringify(employee)
        }
    )
  }
  return (
    <div className='inp'>
      <h3>Update Employee</h3>
      <div>
        <label>ID : </label>
        <input type="number" value={employee.id} readOnly />
      </div>
      <div>
        <label>Name : </label>
        <input type="text" value={employee.name} onChange={(e) => setEmployee({ ...employee, name: e.target.value })} />
      </div>
      <div>
        <label>Age : </label>
        <input type="number" value={employee.age} onChange={(e) => setEmployee({ ...employee, age: e.target.value })} />
      </div>
      <div>
        <label>Contact : </label>
        <input type="number" value={employee.contact} onChange={(e) => setEmployee({ ...employee, contact: e.target.value })} />
      </div>
      <div>
        <label>Position : </label>
        <input type="text" value={employee.position} onChange={(e) => setEmployee({ ...employee, position: e.target.value })} />
      </div>
      <div>
        <label>Department : </label>
        <input type="text" value={employee.department} onChange={(e) => setEmployee({ ...employee, department: e.target.value })} />
      </div>
      <Link to={"/"}><button onClick={change}>Save</button></Link>
    </div>
  );
};

export default Update;
