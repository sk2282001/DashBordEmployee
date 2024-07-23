import React from "react";
import "./style/EmployeeTable.css";

const EmployeeTable = ({ employees, onEdit, onDelete, onView }) => {
  return (
    <table className="employee-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Position</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.position}</td>
            <td>{employee.email}</td>
            <td className="actions">
              <button onClick={() => onEdit(employee)}>Edit</button>
              <button onClick={() => onDelete(employee.id)}>Delete</button>
              <button onClick={() => onView(employee)}>View</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
