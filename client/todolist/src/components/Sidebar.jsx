import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaHouse, FaBook, FaUser, FaArrowRightToBracket } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const Sidebar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="relative">

            <FaBars className="text-white text-2xl md:hidden cursor-pointer " onClick={handleMenu} />

            {isMenuOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40" onClick={closeMenu}></div>
            )}


            <div
                className={`fixed md:hidden top-0 left-0 w-[45%] h-[100vh] bg-blue-950 transform transition-transform duration-300 z-50 
                ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
                onClick={(e) => e.stopPropagation()}
            >

                <IoMdClose className="text-white text-2xl absolute top-4 right-4 cursor-pointer" onClick={closeMenu} />


                <div className="text-2xl font-semibold text-[#69adf2] absolute left-4 top-3 border-b-4">
                    Task Stack
                </div>


                <ul className="mt-14 flex flex-col items-start font-semibold text-xl text-white p-5">
                    <li className="p-5 border-b-2 w-full flex items-center">
                        <Link to="/" onClick={closeMenu}>Home</Link><FaHouse className="ml-2" />
                    </li>
                    <li className="p-5 border-b-2 w-full flex items-center">
                        <Link to="/about" onClick={closeMenu}>About</Link><FaBook className="ml-2" />
                    </li>
                    <li className="p-5 border-b-2 w-full flex items-center">
                        <Link to="/register" onClick={closeMenu}>SignUp</Link><FaUser className="ml-2" />
                    </li>
                    <li className="p-5 border-b-2 w-full flex items-center">
                        <Link to="/login" onClick={closeMenu}>Login</Link><FaArrowRightToBracket className="ml-2" />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
