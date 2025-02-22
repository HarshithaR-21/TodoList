import React, { useState } from "react";
import {ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { Link, useNavigate} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        setErrors({});

        let formValid = true;
        let newErrors = {};

        if(!email)
        {
            formValid = false;
            newErrors.email = 'Email is required';
        }
        else if(!/\S+@\S+\.\S+/.test(email)){
            formValid = false;
            newErrors.email = 'Email address is invalid'
        }
        
        
        if(!password){
            formValid = false;
            newErrors.password = 'Password is required';
        }
        else if(password.length < 6){
            formValid = false;
            newErrors.password = 'Password should be atleast 6 character'
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        validate();
        axios.post('http://localhost:8000/login', {email, password})
        .then(result => {
            console.log(result)
            if(result.data.status === "Success"){
                console.log("Storing email:", result.data.email);
                localStorage.setItem('userEmail', result.data.email)
                setEmail('')
                setPassword('')
                setTimeout(() => {
                    navigate('/todolist');
                }, 2000);
                toast.success(result.data.message);
            }
            else{
                toast.error(result.data.message);
            }
        })
        .catch(err => {
            console.log(err);
            toast.error("Something went wrong. Please try again.")
        });
    }

    return (
        <div className="h-[100vh] flex flex-col">
            <div className="bg-blue-950 p-2">
                <Sidebar />
            </div>
            <Navbar />
            <div className="h-[100vh] flex justify-center items-center bg-black bg-opacity-10 p-2">
                <ToastContainer />
                <div className="flex flex-col bg-white p-6 sm:border-2 sm:border-gray-400 rounded-lg shadow-lg w-full max-w-sm mx-auto">
                    <form onSubmit={handleSubmit}>
                        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

                        <div className="flex flex-col p-2 mb-4">
                            <label className="text-lg mb-2">Email:</label>
                            <input
                                type="text"
                                placeholder="Enter your emailId"
                                className="border-2 border-gray-300 rounded-lg p-3"
                                name="email" value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>

                        <div className="flex flex-col p-2 mb-6">
                            <label className="text-lg mb-2">Password:</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="border-2 border-gray-300 rounded-lg p-3"
                                name="password" value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                        </div>

                        <button type="submit" className="bg-blue-600 w-full p-3 text-white font-bold text-xl rounded-lg mb-4">
                            Login
                        </button>

                        <p className="text-center text-sm">
                            Don't have an account?{" "}
                            <Link to="/register" className="underline text-blue-800">
                                SignUp
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
