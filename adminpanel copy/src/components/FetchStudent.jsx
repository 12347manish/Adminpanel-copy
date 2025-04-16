import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'remixicon/fonts/remixicon.css';
import Cookies from 'js-cookie';


export default function FetchStudent() {
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

  const deleteUser = (id) => {
    fetch(`http://localhost:80/react/api/${id}/delete`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        getUsers(); 
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
//     <div className="bg-gray-100 p-4">
//   <div className="container mx-auto">
//     <h1 className="text-2xl font-bold mb-4">List Users</h1>
//     <table className="w-full border-collapse border">
//       <thead>
//         <tr className="bg-gray-200">
//           <th className="border p-2 mr-6"><i class="ri-hashtag pr-2"></i>Student Id</th>
//           <th className="border p-2"><i class="ri-user-line pr-2"></i>Name</th>
//           <th className="border p-2"><i class="ri-school-fill pr-2"></i>School Id</th>
//           <th className="border p-2"><i class="ri-list-ordered pr-2"></i>Roll No</th>
//           <th className="border p-2"><i class="ri-user-4-line pr-2"></i>Father's Name</th>
//           <th className="border p-2"><i class="ri-user-6-line pr-2"></i>Mother's Name</th>
//           <th className="border p-2"><i class="ri-mail-line pr-2"></i>Email</th>
//           <th className="border p-2"><i class="ri-phone-fill pr-2"></i>Phone 1</th>
//           <th className="border p-2"><i class="ri-phone-fill pr-2"></i>Phone 2</th>
//           {/* <th className="border p-2">Actions</th> */}
//         </tr>
//       </thead>
//       <tbody>
//         {/* {Array.isArray(users) && users.map((user, key) => ( */}
//           {/* <tr key={key} className="bg-white"> */}
//           <tr className="bg-white">
//             {/* <td className="border p-2">{user.id}</td>
//             <td className="border p-2">{user.name}</td>
//             <td className="border p-2">{user.school_id}</td>
//             <td className="border p-2">{user.roll_no}</td>
//             <td className="border p-2">{user.father_name}</td>
//             <td className="border p-2">{user.mother_name}</td>
//             <td className="border p-2">{user.email}</td>
//             <td className="border p-2">{user.mobile}</td>
//             <td className="border p-2">{user.phone}</td> */}
//             <td className="border p-2">2</td>
//             <td className="border p-2">Raju Naan</td>
//             <td className="border p-2">12</td>
//             <td className="border p-2">34</td>
//             <td className="border p-2">Rishi Raju</td>
//             <td className="border p-2">Raju ki mammi</td>
//             <td className="border p-2">raju@gmail.com</td>
//             <td className="border p-2">1312312</td>
//             <td className="border p-2">8675643r</td>
//             {/* <td className="border p-2">
//               <Link to={`${user.username}/edit`} className="text-blue-500 hover:underline mr-2">Edit</Link>
//               <button onClick={() => deleteUser(user.id)} className="text-red-500 hover:underline">Delete</button>
//             </td> */}
//           </tr>
//         {/* ))} */}
//       </tbody>
//     </table>
//   </div>
// </div>

<div className="bg-gray-100 h-screen	 p-4 bg-gradient-to-br  from-blue-300 to-cyan-100">
<div style={{ 
        width:'100px',
        height:'110px',
        backgroundSize:'cover',
        backgroundImage:`url(${require('.././Images/ed-sanchar-logo.png')})`
        
      }}></div>
      {/* <h1 className="text-4xl font-bold mb-4 items-center">List Users</h1> */}
  <div className="container mx-auto">
    <h1 className="text-4xl font-bold mb-4 text-center">List Users</h1>
    <table className="w-full border-collapse border">
      <thead>
        <tr className="bg-gray-200">
          {/* <th className="border-2 border-gray-600 p-2 bg-blue-200"><i class="ri-hashtag pr-2"></i>Student Id</th> */}
          <th className="border-2 border-gray-600 p-2 bg-blue-300"><i class="ri-user-line pr-2"></i>Name</th>
          <th className="border-2 border-gray-600 p-2 bg-blue-200"><i class="ri-school-fill pr-2"></i>School Id</th>
          <th className="border-2 border-gray-600 p-2 bg-blue-300"><i class="ri-list-ordered pr-2"></i>Roll No</th>
          <th className="border-2 border-gray-600 p-2 bg-blue-200"><i class="ri-user-4-line pr-2"></i>Father's Name</th>
          <th className="border-2 border-gray-600 p-2 bg-blue-300"><i class="ri-user-6-line pr-2"></i>Mother's Name</th>
          <th className="border-2 border-gray-600 p-2 bg-blue-200"><i class="ri-mail-line pr-2"></i>Email</th>
          <th className="border-2 border-gray-600 p-2 bg-blue-300"><i class="ri-phone-fill pr-2"></i>Phone 1</th>
          <th className="border-2 border-gray-600 p-2 bg-blue-200"><i class="ri-phone-fill pr-2"></i>Phone 2</th>
          {/* <th className="border-2 border-gray-600 p-2 bg-blue-200"><i ></i>Actions</th> */}
          {/* <th className="border p-2">Actions</th> */}
        </tr>
      </thead>
      <tbody>
  {Array.isArray(users) && users.map((user, key) => (
    <tr key={key} className="bg-white">
      {/* <td className="border-2 border-gray-600 p-2 bg-blue-100">{user.id}</td> */}
      <td className="border-2 border-gray-600 p-2 bg-blue-200">{user.name}</td>
      <td className="border-2 border-gray-600 p-2 bg-blue-100">{user.school_id}</td>
      <td className="border-2 border-gray-600 p-2 bg-blue-200">{user.roll_no}</td>
      <td className="border-2 border-gray-600 p-2 bg-blue-100">{user.father_name}</td>
      <td className="border-2 border-gray-600 p-2 bg-blue-200">{user.mother_name}</td>
      <td className="border-2 border-gray-600 p-2 bg-blue-100">{user.email}</td>
      <td className="border-2 border-gray-600 p-2 bg-blue-200">{user.mobile}</td>
      <td className="border-2 border-gray-600 p-2 bg-blue-100">{user.phone}</td>
      {/* <td className="border-2 border-gray-600 p-2 bg-gray-50">
        <Link to={`/${user.username}/edit`} className="text-blue-500 hover:underline mr-2">Edit</Link>
        <button onClick={() => deleteUser(user.id)} className="text-red-500 hover:underline">Delete</button>
      </td> */}
    </tr>
  ))}
</tbody>

    </table>
  </div>
</div>



  )
        }
       