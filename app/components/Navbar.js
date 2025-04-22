"use client";
import React from "react";
import Link from "next/link";
import SearchBar from "./SearchBar";

const Navbar = () => {
    return (
        <header className="bg-[#f5f5dc] text-black shadow ">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

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

                <SearchBar />

            </div>
        </header>
    );
};

export default Navbar;
