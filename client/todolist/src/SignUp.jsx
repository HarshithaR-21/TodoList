import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function SignUP() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setphone] = useState();
    const [password, setPass] = useState();
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        let validationErrors = {};
        if (!name) {
            validationErrors.name = 'Name is required!';
        }
        const emailRegex = /\S+@\S+\.\S+/;
        if (!email) {
            validationErrors.email = 'Email is required';
        }
        else if (!emailRegex.test(email)) {
            validationErrors.email = 'Email address is invalid';
        }

        if (!phone) {
            validationErrors.phone = 'Phone number is required'
        }
        else if (!/^\d{10}$/.test(phone)) {
            validationErrors.phone = 'Phone number is invalid'
        }
        if (!password) {
            validationErrors.password = 'Password is required';
        }
        else if (password.length < 6) {
            validationErrors.password = 'Password must be atleast 6 characters'
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validate();
        axios.post('https://task-stack.onrender.com/signUp', { name, email, phone, password })
            .then(result => {
                
                console.log(result);
                toast.success("Successfully registered!")
                setName('')
                setEmail('')
                setphone('')
                setPass('')
                setTimeout(() => navigate('/login'), 2000)

            }).catch(err => {
                if (err.response && err.response.status === 400) {
                    toast.error("User already exists!"); // Show error toast
                } else {
                    toast.error("Something went wrong. Please try again.");
                }})
            
    }

    return (
        <div className="h-[100vh] flex flex-col">
            <div className="bg-blue-950 p-2">
                <Sidebar />
            </div>
            <Navbar />
            <div className="h-[100vh] flex justify-center items-center bg-black bg-opacity-10 p-2">
                <ToastContainer />

                <div className="flex flex-col p-6 sm:border-2 sm:border-gray-400 rounded-lg shadow-lg w-full max-w-lg sm:mt-20">

                    <form onSubmit={handleSubmit}>
                        <h1 className="text-2xl font-bold text-center mb-6">Register</h1>

                        <div className="flex flex-col p-2 mb-4">
                            <label className="text-lg mb-2">Name:</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="border-2 border-gray-300 rounded-lg p-3"
                                name="name" value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>

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

                        <div className="flex flex-col p-2 mb-4">
                            <label className="text-lg mb-2">Phone:</label>
                            <input
                                type="text"
                                placeholder="Enter your Phone no."
                                className="border-2 border-gray-300 rounded-lg p-3"
                                name="phone" value={phone}
                                onChange={(e) => setphone(e.target.value)} maxLength={10}
                            />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                        </div>

                        <div className="flex flex-col p-2 mb-6">
                            <label className="text-lg mb-2">Create password:</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="border-2 border-gray-300 rounded-lg p-3"
                                name="password" value={password}
                                onChange={(e) => setPass(e.target.value)}
                            />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-600 w-full p-3 text-white font-bold text-xl rounded-lg mb-4"
                        >
                            SignUP
                        </button>

                        <p className="text-center text-sm">
                            Already have an account?{" "}
                            <Link to="/login" className="underline text-blue-800">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUP;
