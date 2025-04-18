import React from 'react'

const Navbar = () => {
    return (
        <div className="text-black">
            <h1 className='w-full text-3xl font-bold text-black'>Rentify</h1>
            <ul className='flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Rental Items</li>
                <li className='p-4'>About Us</li>
                <li className='p-4'>Contact Us</li>
            </ul>
        </div>
    )
}

export default Navbar