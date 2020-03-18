import React, { useState } from 'react';
import './App.css';
import EmployeeForm from "./components/EmployeeForm";
// import ReactDOM from "react-dom";
import Employees from "./components/Employees";

function App() {

  const [employeeState, setEmployeeState] = useState(
    [{
      id: 1,
      name: "John Doe",
      email: "john.doe@gmail.com",
      role: "Web Developer"
    }, 
    {
      id: 2,
      name: "Adam Doe",
      email: "adam.doe@gmail.com",
      role: "Engineer"
    }
    ]);

  const addEmployee = newEmployee => {
    setEmployeeState([...employeeState, newEmployee])
  }

  return (
    <div className="App">
      <h1> Employee List </h1>
      <EmployeeForm addEmployee={ addEmployee } />
      <Employees employees={ employeeState } />
    </div>
  );
}

export default App;
