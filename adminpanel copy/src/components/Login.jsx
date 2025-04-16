import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const navigate = useNavigate();
  const isAuthenticated = Cookies.get('isAuthenticated') === 'true';

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const notify = () => toast.success('Login Successful');

  const handleLogin = async (e) => {
    e.preventDefault();

    if (isLoggingIn) {
      return;
    }

    setIsLoggingIn(true);

    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);

      const response = await axios.post(
        "http://localhost:80/react/api/login/login.php",
        formData
      );

      if (response.status === 200) {
        // console.log("mohit");
        const data = response.data;
        console.log(data);
        if (data.success) {
          Cookies.set('isAuthenticated', 'true', { expires: 7 });
          Cookies.set('encryptedApiKey',data.encryptedApiKey);
          const cookie= data.encryptedApiKey;
          
          // console.log(cookie);
          // notify("hi");
          alert("Login Successfully");
          navigate("/dashboard");
        } else {
          // console.log("hi")
          alert("Login failed. Please try again.");
        }
      } else {
        alert("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      if (error.response) {
        alert("Login failed: " + error.response.data.message);
      } else {
        alert("An error occurred while processing your request. Please try again later.");
      }
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-cyan-500 to-yellow-500">
      <form
        action="http://localhost:80/react/api/login/login.php"
        method="POST"
      >
        <div
          id="loginform"
          className="bg-white p-8 rounded-2xl shadow-lg text-center"
          style={{
            maxWidth: '500px',
            minWidth: '300px',
            maxHeight: '700px',
            width: '30%',
            height: '60%',
            margin: '100px auto'
          }}
        >
          <h1 id="headerTitle" className="text-2xl font-bold mb-8">
            Login
          </h1>
          {/* <h5>{props.cookie}</h5> */}
          <div className="row">
            <label htmlFor="username" className="text-gray-700">
              Username
            </label>
            <div className="relative">
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                id="username"
                className="w-full p-2 pl-10 mt-1 border border-gray-300 rounded focus:shadow-outline focus:border-blue-300"
                type="text"
              />
              <i className="fa fa-user absolute top-2 left-3 text-gray-400"></i>
            </div>
          </div>
          <div className="row">
            <label htmlFor="password" className="text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                className="w-full p-2 pl-10 mt-1 border border-gray-300 rounded focus:shadow-outline focus:border-blue-300"
                type="password"
              />
              <i className="fa fa-lock absolute top-2 left-3 text-gray-400"></i>
            </div>
          </div>
          <button
            onClick={handleLogin}
            type="submit"
            className="mt-8 bg-gradient-to-r from-cyan-500 to-yellow-500 text-white rounded-full py-2 px-6 font-bold hover:opacity-80"
          >
            Login
          </button>
          <div id="alternativeLogin" className="mt-6">
            {/* Add any alternative login options here */}
          </div>
        </div>
      </form>
      <div className="footer-bottom fixed bottom-0 w-full bg-lightblue-800 p-4 text-center text-black">
        <p>© 2023 Ed-Sanchar. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Login;
