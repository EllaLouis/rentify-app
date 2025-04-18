import React from 'react';

const Navbar = () => {
    return (
        <header className="bg-beige text-white shadow">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-3xl font-bold">Rentify</h1>

                <nav className="flex items-center space-x-6">
                    <ul className="flex space-x-6">
                        <li className='p-3 hover: '>Home</li>
                        <li className='p-3 hover: '>Rental Items</li>
                        <li className='p-3 hover: '>About Us</li>
                        <li className='p-3 hover: '>Contact Us</li>
                    </ul>

                    <div className="flex items-center border border-gray-400 rounded-full px-3 py-1">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="outline-none bg-transparent px-2"
                        />
                        <button className="bg-gray-700 text-white px-4 py-1 rounded-full hover:bg-blue-600 transition duration-300">
                            Search
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
