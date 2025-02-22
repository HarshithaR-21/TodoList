import { React, useState } from "react";
import { FaLightbulb, FaListCheck, FaTrophy } from "react-icons/fa6";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";


function Home() {

    return (

        <div className="sm:bg-bannerImg bg-mobileImg bg-no-repeat bg-center bg-cover min-h-screen w-full">

            <nav className="p-6 m-0">
                <Sidebar/>

                <Navbar />

            </nav>



            <div className="flex justify-center items-center h-[40vh]">
                <h1 className="sm:text-7xl text-5xl font-bold text-[#80BFFF] tracking-wider">TASK STACK</h1>
            </div>
            <div className="flex justify-center h-[30vh] items-start">
                <ul className="flex flex-col gap-5">
                    <li className="text-2xl font-bold px-14  py-4 bg-orange-400 
                    rounded-[20px] flex">Plan<span className="text-center p-1"><FaLightbulb /></span></li>
                    <li className="text-2xl font-bold px-14 py-4 bg-yellow-400 
                    rounded-[20px] flex">Execute<span className="text-center p-1"><FaListCheck /></span></li>
                    <li className="text-2xl font-bold px-14 py-4 bg-blue-600 
                    rounded-[20px] flex">Achieve<span className="text-center p-1"><FaTrophy /></span></li>
                </ul>
            </div>
            {/* <About /> */}
        </div>

    );
}

export default Home;
