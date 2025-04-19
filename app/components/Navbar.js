"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <header className="bg-[#f5f5dc] text-black shadow">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-3xl font-bold">Rentify</h1>

                <nav className="flex items-center gap-8">
                    <ul className="flex gap-6">
                        <li className="hover:text-blue-500 transition">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="hover:text-blue-500 transition">
                            <Link href="/rental-items">Rental Items</Link>
                        </li>
                        <li className="hover:text-blue-500 transition">
                            <Link href="/about-us">About Us</Link>
                        </li>
                        <li className="hover:text-blue-500 transition">
                            <Link href="/contact-us">Contact Us</Link>
                        </li>
                    </ul>

                    <div className="flex items-center bg-white rounded-full px-2 py-1 w-full max-w-xs shadow-md">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="flex-grow bg-transparent px-2 py-1 text-black outline-none"
                        />
                        <button className="bg-blue-600 text-white px-4 py-1 rounded-full hover:bg-blue-700 transition">
                            Search
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;

