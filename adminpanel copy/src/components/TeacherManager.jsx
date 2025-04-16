import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';

function TeacherManager() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-200 to-green-200">
 <h1 className="text-8xl font-bold text-blue-500 my-8 absolute top-0">Teacher Manager</h1>
<div className="mx-4 p-6 bg-white rounded-lg shadow-lg">
   Teacher Fetch
   <div className="mt-4 flex justify-center">
     <Link to="FetchTeacher" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center">
      Click Me 
     </Link>
   </div>
 </div>
 <div className="mx-4 p-6 bg-white rounded-lg shadow-lg">
   Teacher Add
  <div className="mt-4 flex justify-center">
     <Link to="Addteacher" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full flex items-center">
       Click Me 
     </Link>
   </div>
   </div>

<div className="mx-4 p-6 bg-white rounded-lg shadow-lg">
   Teacher Edit
   <div className="mt-4 flex justify-center">
     <Link to="EditTeacher1" className="bg-orange-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full flex items-center">
       Click Me 
    </Link>
   </div>
 </div>
 <div className="footer-bottom fixed bottom-0 w-full bg-lightblue-800 p-4 text-center text-black">
         <p>© 2023 Ed-Sanchar. All rights reserved.</p>
       </div>
 </div>


  );
}

export default TeacherManager;