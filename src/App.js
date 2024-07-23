import React, { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeTable from "./components/EmployeeTable";
import EmployeeProfile from "./components/EmployeeProfile";
import "./App.css";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [viewingEmployee, setViewingEmployee] = useState(null);

  const handleSave = (employee) => {
    if (isEditing) {
      setEmployees((prevEmployees) =>
        prevEmployees.map((e) => (e.id === employee.id ? employee : e))
      );
      setIsEditing(false);
    } else {
      setEmployees((prevEmployees) => [...prevEmployees, employee]);
    }
    setCurrentEmployee(null);
  };

  const handleEdit = (employee) => {
    setCurrentEmployee(employee);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee.id !== id)
    );
  };

  const handleView = (employee) => {
    setViewingEmployee(employee);
  };

  const handleCancel = () => {
    setCurrentEmployee(null);
    setIsEditing(false);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Employee Dashboard</h1>
      </div>
      <div className="dashboard-content">
        <div className="form-section">
          {currentEmployee || isEditing ? (
            <EmployeeForm
              employee={currentEmployee}
              onSave={handleSave}
              onCancel={handleCancel}
            />
          ) : (
            <button
              className="add-employee-button"
              onClick={() => setCurrentEmployee({})}
            >
              Add Employee
            </button>
          )}
        </div>
        <div className="table-section">
          <EmployeeTable
            employees={employees}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onView={handleView}
          />
        </div>
      </div>
      {viewingEmployee && (
        <EmployeeProfile
          employee={viewingEmployee}
          onClose={() => setViewingEmployee(null)}
        />
      )}
    </div>
  );
};

export default App;
