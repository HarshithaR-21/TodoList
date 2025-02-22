import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function About() {

    return (
        <div>
            <div className="bg-blue-950 p-2">
                <Sidebar />
            </div>
            <Navbar />
            <div className="sm:mt-16 mt-0">
                <div>
                    <h1 className="text-3xl font-semibold text-[#80BFFF] border-b-4 border-gray-300 pt-10 pl-10">
                        About Task Stack
                    </h1>
                    <p className="text-wrap p-10">Welcome to Task Stack, the ultimate to-do list app designed to help you stay organized, boost productivity, and manage tasks effortlessly. Whether you're handling personal tasks, work projects, or daily reminders, Task Stack ensures everything stays on track.</p>
                    <h1 className="text-3xl font-semibold text-[#80BFFF] border-b-4 border-gray-300 pt-10 pl-10">Why Choose Task Stack?</h1>
                    <p className="text-wrap p-10">
                        ✅ Easy Task Management – Add, edit, and delete tasks with a simple interface.<br />
                        ✅ Minimal & Intuitive UI – Designed for efficiency without unnecessary clutter.<br />
                        ✅ Sync Across Devices – Access your tasks anytime, anywhere.<br />

                    </p>
                    <h1 className="text-3xl font-semibold text-[#80BFFF]  border-b-4 border-gray-300 pt-10 pl-10">Our Vision</h1>
                    <p className="text-wrap p-10">

                        At Task Stack, we believe in simplifying productivity. Our goal is to help you focus on what matters by providing a seamless task management experience.

                        📌 Start organizing your life today with Task Stack!
                    </p>
                </div>
            </div>
        </div>
    )
}
export default About