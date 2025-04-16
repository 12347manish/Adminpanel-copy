import React from 'react';

function AddStudent() {
    return (
        <div className="flex flex-col h-screen bg-gradient-to-r from-blue-200 to-green-200">
            <div className="flex justify-center items-center flex-grow">
                <div className="bg-white p-8 rounded shadow-lg text-center w-full max-w-[475px] opacity-90%">
                    <h1 className="text-6xl font-bold text-blue-500 my-4 mx-0 absolute top-0 align-center ">Add Student</h1>
                    <h1 className="text-2xl font-bold mb-6">Student Details</h1>
                    <form>
                <p className="text-left mb-3 ">required fields are followed by *</p>
                    <div className="flex justify-between flex-wrap">
                        <div className="w-[45%] mb-15 flex flex-row flex-wrap ">
                            <label className=" font-bold mb-1 " htmlFor="username">Username: *</label>
                            <input type="text" id="username" name="username" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Enter full name" required />
                        </div>
                        <div className="w-[45%] mb-15 flex flex-row flex-wrap">
                            <label className="block font-bold mb-1" htmlFor="school_id">School_id: *</label>
                            <input type="text" id="school_id" name="school_id" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Enter School_id" required />
                        </div>
                        <div className="w-[45%] mb-15 flex flex-row flex-wrap">
                            <label className="block font-bold mb-1" htmlFor="roll_no">Roll_no: *</label>
                            <input type="text" id="roll_no" name="roll_no" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Enter Roll_no" required />
                        </div>
                        <div className="w-[45%] mb-15 flex flex-row flex-wrap">
                            <label className="block font-bold mb-1" htmlFor="class_id">Class_id: *</label>
                            <input type="text" id="class_id" name="class_id" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Enter Class_id" required />
                        </div>
                        <div className="w-[45%] mb-15 flex flex-row flex-wrap">
                            <label className="block font-bold mb-1" htmlFor="name">Name: *</label>
                            <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Enter full name" required />
                        </div>
                        <div className="w-[45%] mb-15 flex flex-row flex-wrap">
                            <label className="block font-bold mb-1" htmlFor="gender">Gender: *</label>
                            <select name="gender" id="gender" className="w-full border border-gray-300 rounded px-3 py-2" required>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className="w-[45%] mb-15 flex flex-row flex-wrap">
                            <label className="block font-bold mb-1" htmlFor="father_name">Father_name: *</label>
                            <input type="text" id="father_name" name="father_name" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Enter full name" required />
                        </div>
                        <div className="w-[45%] mb-15 flex flex-row flex-wrap">
                            <label className="block font-bold mb-1" htmlFor="mother_name">Mother_name: *</label>
                            <input type="text" id="mother_name" name="mother_name" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Enter full name" required />
                        </div>
                        <div className="w-[45%] mb-15 flex flex-row flex-wrap">
                            <label className="block font-bold mb-1" htmlFor="phone1">Phone1: *</label>
                            <input type="text" id="phone1" name="phone1" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Parent Mobile" required />
                        </div>
                        <div className="w-[45%] mb-15 flex flex-row flex-wrap">
                            <label className="block font-bold mb-1" htmlFor="email">Email: *</label>
                            <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Enter Email Address" required />
                        </div>
                    </div>
                    <div className="flex justify-center my-3">
                        
                        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded " >Submit</button>
                    </div>
                  
         </form>
                    
                </div>
            </div>
            <div className="footer-bottom w-full bg-lightblue-800 p-4 text-center text-black">
                <p>© 2023 Ed-Sanchar. All rights reserved.</p>
            </div>
        </div>
    );
}

export default AddStudent;