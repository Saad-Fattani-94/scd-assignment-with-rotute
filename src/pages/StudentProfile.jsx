import React from 'react';
import { useParams, Link } from 'react-router-dom';

function StudentProfile() {
  const { id } = useParams();

  return (
    <div className="container mt-5">
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <h1 className="h3 fw-bold text-primary">Student Profile</h1>
          <hr />

          <p><strong>Student ID:</strong> {id}</p>
          <p><strong>Name:</strong> Saad</p>
          <p><strong>Program:</strong> BSSE</p>
          <p><strong>Semester / Year:</strong> 2</p>
          <p><strong>Email:</strong> student@example.com</p>

          <Link to="/students" className="btn btn-secondary mt-3">
            Back to Students
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;