
    import React from 'react';

function Contact() {
    return (
        <div className="flex flex-col h-screen bg-gradient-to-r from-blue-200 to-green-200">
            <div className="flex justify-center items-center flex-grow">
                <div className="bg-white p-8 rounded shadow-lg text-center w-full max-w-[475px] opacity-90%">
                    <h1 className="text-8xl font-bold text-blue-500 my-3 mx-0 absolute top-0 align-center ">Contact</h1>
                    <h1 className="text-2xl font-bold mb-6">Contact us</h1>
                    <form>
                <p className="text-left mb-3 ">required fields are followed by *</p>
                    <div className="flex justify-between flex-wrap">
                        <div className="w-[45%] mb-15 flex flex-row  flex-wrap ">
                            <label className=" font-bold mb-1 " htmlFor="name">Name: *</label>
                            <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Enter name" required />
                        </div>
                        <div className="w-[45%] mb-15 flex flex-row  flex-wrap">
                            <label className="block font-bold mb-1" htmlFor="email">Email: *</label>
                            <input type="text" id="email" name="email" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Enter email" required />
                        </div>
                        <div className="w-[45%] mb-15 flex flex-row  flex-wrap">
                            <label className="block font-bold mb-1" htmlFor="message">Message: *</label>
                            <input type="text" id="message" name="message" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Enter message" required />
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

export default Contact;

