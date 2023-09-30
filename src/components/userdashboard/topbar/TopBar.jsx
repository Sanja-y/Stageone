import React, { useState } from "react";
import logo from '../../../assets/opnturf-logo.png';

const TopBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="bg-white text-black h-16 flex items-center justify-between px-4 sticky top-0 z-50">
            {/* Left Side (Logo) */}
            <div className="flex items-center">
                {/* <img
                    src={logo}
                    alt="Logo"
                    className="w-10 h-10 mr-2"
                /> */}
                <span className="text-xl font-semibold text-black">Stage One</span>
            </div>

            {/* Right Side (Icons) */}
            <div className="flex items-center">
                {/* Bell Icon */}
                <i className="fas fa-bell mr-4 text-xl cursor-pointer"></i>

                {/* Profile Image */}
                <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Profile"
                    className="w-10 h-10 rounded-full cursor-pointer"
                />
                <p className="ml-4">John Trancedi</p>
                {/* Dropdown */}
                <div className="relative ml-4">
                    <button onClick={toggleDropdown} className="focus:outline-none">
                        <i className="fas fa-caret-down text-xl cursor-pointer"></i>
                    </button>

                    {/* Dropdown Content */}
                    <div className={`absolute right-0 mt-2 bg-white rounded shadow-lg p-2 ${isDropdownOpen ? '' : 'hidden'}`}>
                        {/* Add your dropdown menu items here */}
                        <a href="#" className="block px-4 py-2 text-black">
                            Profile
                        </a>
                        <a href="#" className="block px-4 py-2 text-black">
                            Settings
                        </a>
                        <a href="#" className="block px-4 py-2 text-black">
                            Logout
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
