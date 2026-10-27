import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import PageHeader from '../components/PageHeader';
import StudentCard from '../components/StudentCard';
import Pagination from '../components/Pagination';
import Alert from '../components/Alert';

function Students() {
  const studentsList = [
    { id: 101, name: 'Saad', major: 'BSSE', year: 2, gpa: 3.8 },
    { id: 102, name: 'Hanzala', major: 'BSCS', year: 2, gpa: 3.8 },
    { id: 103, name: 'Jane Doe', major: 'BSAI', year: 2, gpa: 3.8 },
    { id: 104, name: 'Mary Doe', major: 'BSFT', year: 2, gpa: 3.8 },
  ];

  return (
    <div className="container my-4">
      <Breadcrumb />
      <PageHeader />

      <div className="row">
        {studentsList.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>

      <Pagination />
      <Alert />
    </div>
  );
}

export default Students;