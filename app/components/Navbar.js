"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <header className="bg-[#f5f5dc] text-black shadow ">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Left: Logo */}

                <h1 className=" text-[52px] font-bold ">Rentify</h1>


                {/* Center: Nav Links */}
                <nav className="flex-1">
                    <ul className="flex justify-evenly w-full max-w-lg mx-auto">
                        <li className="px-2 py-1 hover:text-blue-500 transition">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="px-2 py-1 hover:text-blue-500 transition">
                            <Link href="/rental-items">Rental Items</Link>
                        </li>
                        <li className="px-2 py-1 hover:text-blue-500 transition">
                            <Link href="/about-us">About Us</Link>
                        </li>
                        <li className="px-2 py-1 hover:text-blue-500 transition mr-4">
                            <Link href="/contact-us">Contact Us</Link>
                        </li>
                        <li className="px-2 py-1 hover:text-blue-500 transition mr-4 list-none">
                            <Link href="/contact-us"> </Link>
                        </li>
                    </ul>

                </nav>

                {/* Right: Search Bar */}
                <div className="flex-1 flex justify-end pr-4">
                    <div className="flex items-center bg-white rounded-full px-2 py-1 w-full max-w-xs shadow-md">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="flex-grow bg-transparent px-2 py-1 text-black outline-none"
                        />
                        <button className="bg-blue-600 text-white px-4 py-1 rounded-full hover:bg-blue-700 transition mr-2">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
