import React from 'react';

const Navbar = () => {
    return (
        <header className="text-white shadow">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-3xl font-bold">Rentify</h1>

                <nav className="flex items-center space-x-6">
                    <ul className="flex space-x-6">
                        <li className='p-2 hover:text-blue-500'>Home</li>
                        <li className='p-2 hover:text-blue-500'>Rental Items</li>
                        <li className='p-2 hover:text-blue-500'>About Us</li>
                        <li className='p-2 hover:text-blue-500'>Contact Us</li>
                    </ul>

                    <div className="flex items-center border border-black-400 rounded-full px-3 py-1">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="outline-none bg-transparent px-2"
                        />
                        <button className="bg-white text-black rounded-full px-4 py-2 ml-2 hover:bg-blue-600 hover:text-white transition duration-200">
                            Search
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
