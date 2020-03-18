import React from "react";

const Employees = props => {
  return (
    <div className="employee-list">
      {props.employees.map(employee => (
        <div className="employee" key={employee.id}>
          <h3>{employee.name}</h3>
          <p><b>Email:</b> {employee.email}</p>
          <p><b>Role:</b> {employee.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Employees;