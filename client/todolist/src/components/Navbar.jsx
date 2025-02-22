import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="hidden md:block bg-blue-950 fixed left-0 right-0 top-0">
                    <ul className="text-white flex flex-wrap justify-center items-center text-xl gap-10">

                        <li className="hover:bg-[#80BFFF] hover:text-black hover:font-medium text-white transform transition-transform duration-300 hover:scale-100 px-12 py-3  rounded-[20px] cursor-pointer">
                            <Link to="/">Home</Link>
                        </li>

                        <li className="hover:bg-[#80BFFF] hover:text-black hover:font-medium text-white transform transition-transform duration-300 hover:scale-100 px-12 py-3 rounded-[20px] cursor-pointer">
                            <Link to="/about">About</Link>
                        </li>

                        <li className="hover:bg-[#80BFFF] hover:text-black hover:font-medium text-white transform transition-transform duration-300 hover:scale-100 px-12 py-3 rounded-[20px] cursor-pointer">
                            <Link to="/register">SignUp</Link>
                        </li>
                        <li className="hover:bg-[#80BFFF] hover:text-black hover:font-medium text-white transform transition-transform duration-300 hover:scale-100 px-12 py-3 rounded-[20px] cursor-pointer">
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
    )
}
export default Navbar