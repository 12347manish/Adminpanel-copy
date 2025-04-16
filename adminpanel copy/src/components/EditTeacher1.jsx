import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function EditTeacher1() {
  const [school_id, setSchoolId] = useState('1');
  const [teacherData, setTeacherData] = useState([]);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setSchoolId(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchTeacherData(school_id);
  }

  const fetchTeacherData = (schoolId) => {
    fetch(`http://localhost/react/api/teacher/teacher.php?school_id=${schoolId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setTeacherData(data);
        setError(null);
      })
      .catch((err) => {
        setError(err);
      });
  }

  const deleteUser = (id) => {
    fetch(`http://localhost:80/react/api/${id}/delete`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // getUsers(); 
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // Use useEffect to fetch teacher data on component mount
  useEffect(() => {
    fetchTeacherData(school_id);
  }, [school_id]);

  return (
    <div>
      <h1>Teacher Information</h1>
      <form onSubmit={handleSubmit}>
        <label>
          School ID:
          <input
            type="text"
            value={school_id}
            onChange={handleChange}
          />
        </label>
        {/* <button type="submit">Get Teacher</button> */}
      </form>
      {error && <div>Error: {error.message}</div>}
      {teacherData.length > 0 && (
        <div>
          <h2>Teacher Data</h2>
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Username</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Roll No</th>
                <th className="border p-2">Subject</th>
                <th className="border p-2">Qualification</th>
                <th className="border p-2">Contact</th>
                
                <th className="border p-2">class Teacher</th>
                <th className="border p-2">Teaching Classes</th>
                <th className="border p-2">Actions</th>

                {/* Add more table headers as needed */}
              </tr>
            </thead>
            <tbody>
              {teacherData.map((teacher, key) => (
                <tr key={key} className="bg-white">
                  {/* <td className="border p-2">{teacher.id}</td> */}
                  <td className="border p-2">{teacher.username}</td>
                  <td className="border p-2">{teacher.name}</td>
                  <td className="border p-2">{teacher.roll_no}</td>
                  <td className="border p-2">{teacher.subject}</td>
                  <td className="border p-2">{teacher.qualification}</td>
                  <td className="border p-2">{teacher.contact}</td>
                  <td className="border p-2">{teacher.class_teacher}</td>
                  <td className="border p-2">{teacher.class_id}</td>
                  <td className="border p-2">
              {/* <Link to={`${teacher.username}/edit`} className="text-blue-500 hover:underline mr-2">Edit</Link> */}
                <Link to="EditStudent2" className="text-blue-500 hover:underline mr-2">Edit</Link>
              

              <button onClick={() => deleteUser(teacher.id)} className="text-red-500 hover:underline">Delete</button>
            </td>
                  {/* Add more table cells as needed */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default EditTeacher1;
