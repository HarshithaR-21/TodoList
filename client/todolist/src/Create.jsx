import React, { useEffect, useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function Create() {
    const [todos, setTodos] = useState([])
    const [task, setTask] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        const userEmail = localStorage.getItem('userEmail');
        if (userEmail) {
            axios.get(`https://task-stack.onrender.com/todos/${userEmail}`)
                .then(result => setTodos(result.data))
                .catch(err => console.log(err))
        }
        else {
            toast.error('User not logged in');
            navigate('/login');
        }

    }, [])

    const handleAdd = () => {
        const userEmail = localStorage.getItem('userEmail');
        console.log("Retrieved email:", userEmail);
        if (task == '' || task == null) {
            toast.error('Please enter the task!');
            return;
        }
        axios.post('https://task-stack.onrender.com/add', { email: userEmail, task: task }).then(result => {
            console.log(result);
            toast.success('Task added successfully!')
            setTodos([...todos, { email: userEmail, task }])
            setTask('');
        }).catch(err => {
            console.log(err)
            toast.error('Error while adding the task')
        });
    }

    const handleDone = (taskDone, index) => {
        const userEmail = localStorage.getItem('userEmail');
        axios.post('https://task-stack.onrender.com/delete', { email: userEmail, taskDone }).then(result => {
            console.log(result);
            toast.success('Task Done successfully!');
            setTodos(todos.filter((_, ind) => ind != index));
        }).catch(err => console.log(err));

    }

    const handleLogout = () => {
        localStorage.removeItem('userEmail');
        navigate('/login')
    }

    return (
        <div className="h-[100vh] flex flex-col">
            <div className="bg-blue-950 p-2">
                <Sidebar />
            </div>
            <Navbar />
            <div>
                <div className="pb-20">
                    <button className="bg-red-500 text-white font-bold p-3 m-4 text-xl rounded-lg fixed right-0 sm:mt-14 mt-8" onClick={handleLogout}>Logout</button>
                </div>
                <ToastContainer />
                <div className="flex flex-col items-center bg-gray-200 p-[20px] md:p-[30px] rounded-[20px] m-[20px] max-w-2xl mx-auto shadow-lg">

                    <h1 className="text-3xl md:text-4xl font-bold text-center">
                        To-Do List App
                    </h1>
                    <input
                        type="text"
                        placeholder="Enter the task..."
                        className="border-2 border-gray-500 p-3 mt-[20px] w-full md:w-[300px] rounded-[10px] text-lg"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    /><br></br>
                    <button
                        className="bg-blue-700 text-white font-bold text-lg md:text-2xl p-[10px] rounded-[10px] mt-[15px] w-full md:w-auto"
                        onClick={handleAdd}
                    >
                        ADD TASK
                    </button>

                    <div className="mt-[20px] text-xl bg-white m-2 rounded-[5px] w-full p-0 shadow-md">
                        {
                            todos.length === 0 ? (
                                <div className="mt-[20px] p-[20px] text-2xl text-center">No Record</div>
                            ) : (
                                todos.map((todo, index) => (
                                    <div key={index} className="flex flex-wrap items-center justify-between p-[10px] bg-gray-100 rounded-md mt-2">
                                        <span className="flex-1 break-words">{todo.task}</span>
                                        <button
                                            className="bg-green-700 text-white font-bold rounded-[5px] p-[5px] ml-[10px] text-sm md:text-base"
                                            onClick={() => handleDone(todo.task, index)}
                                        >
                                            Done
                                        </button>
                                    </div>
                                ))
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create;
