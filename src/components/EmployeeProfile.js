import React from "react";
import "./style/EmployeeProfile.css";

const EmployeeProfile = ({ employee, onClose }) => {
  return (
    <div className="employee-profile">
      <h2>Employee Profile</h2>
      <p>ID: {employee.id}</p>
      <p>Name: {employee.name}</p>
      <p>Position: {employee.position}</p>
      <p>Email: {employee.email}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default EmployeeProfile;
