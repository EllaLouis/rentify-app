import React from 'react';

const Navbar = () => {
    return (
        <header className="bg-beige text-black shadow">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-3xl font-bold">Rentify</h1>

                <nav className="flex items-center space-x-6">
                    <ul className="flex space-x-6">
                        <li className='p-4 hover:underline cursor-pointer'>Home</li>
                        <li className='p-4 hover:underline cursor-pointer'>Rental Items</li>
                        <li className='p-4 hover:underline cursor-pointer'>About Us</li>
                        <li className='p-4 hover:underline cursor-pointer'>Contact Us</li>
                    </ul>

                    <div className="flex items-center border border-gray-400 rounded-full px-3 py-1">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="outline-none bg-transparent px-2"
                        />
                        <button className="bg-gray-700 text-white px-4 py-1 rounded-full hover:bg-black">
                            Search
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
