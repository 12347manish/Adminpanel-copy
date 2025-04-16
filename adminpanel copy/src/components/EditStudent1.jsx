import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';

export default function EditStudent1() {
  const [users, setUsers] = useState([]);
  const getCoookie = Cookies.get('encryptedApiKey');


  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
     fetch('http://localhost:80/react/api/index.php', {
      method: 'GET',
      // credentials: 'true' // This is equivalent to withCredentials: true
      headers:{
       'Cookies': getCoookie
        }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the received data
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const deleteUser = (username) => {
    fetch(`http://localhost:80/react/api/index.php?username=${username}`, {
      method: 'DELETE',
      headers:{
        'Cookies': getCoookie
         }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Deleted Successfully");
        getUsers(); 
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="bg-gray-100 p-4">
  <div className="container mx-auto">
    <h1 className="text-2xl font-bold mb-4">List Users</h1>
    <table className="w-full border-collapse border">
      <thead>
        <tr className="bg-gray-200">
          {/* <th className="border p-2">Student Id</th> */}
          <th className="border p-2">Name</th>
          <th className="border p-2">School Id</th>
          <th className="border p-2">Roll No</th>
          <th className="border p-2">Father's Name</th>
          <th className="border p-2">Mother's Name</th>
          <th className="border p-2">Email</th>
          <th className="border p-2">Phone 1</th>
          <th className="border p-2">Phone 2</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(users) && users.map((user, key) => (
          <tr key={key} className="bg-white">
            {/* <td className="border p-2">{user.id}</td> */}
            <td className="border p-2">{user.name}</td>
            <td className="border p-2">{user.school_id}</td>
            <td className="border p-2">{user.roll_no}</td>
            <td className="border p-2">{user.father_name}</td>
            <td className="border p-2">{user.mother_name}</td>
            <td className="border p-2">{user.email}</td>
            <td className="border p-2">{user.mobile}</td>
            <td className="border p-2">{user.phone}</td>
            <td className="border p-2">
              <Link to="EditStudent2" className="text-blue-500 hover:underline mr-2">Edit</Link>
              <button onClick={() => deleteUser(user.username)} className="text-red-500 hover:underline">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


  )
}