import React from 'react';

function AddTeacher() {
    return (
        <div className="flex flex-col h-screen bg-gradient-to-r from-blue-200 to-green-200">
            <div className="flex justify-center items-center flex-grow">
                <div className="bg-white p-8 rounded shadow-lg text-center w-full max-w-[475px] opacity-90%">
                    <h1 className="text-8xl font-bold text-blue-500 my-3 mx-0 absolute top-0 align-center ">Add Teacher</h1>
                    <h1 className="text-2xl font-bold mb-6">Teacher Details</h1>
                    <form>
                <p className="text-left mb-3 ">required fields are followed by *</p>
                    <div className="flex justify-between flex-wrap">
                        <div className="w-[45%] mb-15 flex flex-row  flex-wrap ">
                            <label className=" font-bold mb-1 " htmlFor="username">Username: *</label>
                            <input type="text" id="username" name="username" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Enter full name" required />
                        </div>
                        <div className="w-[45%] mb-15 flex flex-row  flex-wrap">
                            <label className="block font-bold mb-1" htmlFor="school_id">School_id: *</label>
                            <input type="text" id="school_id" name="school_id" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Enter School_id" required />
                        </div>
                        <div className="w-[45%] mb-15 flex flex-row  flex-wrap">
                            <label className="block font-bold mb-1" htmlFor="roll_no">Roll_no: *</label>
                            <input type="text" id="roll_no" name="roll_no" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Enter Roll_no" required />
                        </div>
                        <div className="w-[45%] mb-15 flex flex-row  flex-wrap">
                            <label className="block font-bold mb-1" htmlFor="class_id">Class_id: *</label>
                            <input type="text" id="class_id" name="class_id" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Enter Class_id" required />
                        </div>
                        <div className="w-[45%] mb-15 flex flex-row  flex-wrap">
                            <label className="block font-bold mb-1" htmlFor="name">Name: *</label>
                            <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Enter full name" required />
                        </div>
                       
                        <div className="w-[45%] mb-15 flex flex-row  flex-wrap">
                            <label className="block font-bold mb-1" htmlFor="qualification">Qualification</label>
                            <input type="text" id="qualification" name="qualification" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Enter full name" required />
                        </div>
                        <div className="w-[45%] mb-15 flex flex-row  flex-wrap">
                            <label className="block font-bold mb-1" htmlFor="contact">Contact: *</label>
                            <input type="text" id="contact" name="contact" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Enter full name" required />
                        </div>
                        <div className="w-[45%] mb-15 flex flex-row  flex-wrap">
                            <label className="block font-bold mb-1" htmlFor="clasteacher">Clas Teacher: *</label>
                            <input type="text" id="clasteacher" name="clasteacher" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Parent Mobile" required />
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

export default AddTeacher;