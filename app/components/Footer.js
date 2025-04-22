import React from 'react'
import {
    FaDribbbleSquare,
    FaEnvelopeSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTelegram,
    FaTelegramPlane,
    FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='max-w-[120px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div className='text-left'>
                <h1 className='w-full text-3xl italic fon-bold text-white'>Rentify</h1>
                <p className='text-sm italic py-4'>Rentify event rentals</p>
                <p className="text-sm italic">Have questions? Reach out to us at:</p>
                <div className='flex justify-between md:w-[80%] my-8'>
                    <FaFacebookSquare size={36} />
                    <FaInstagram size={36} />
                    <FaTwitterSquare size={36} />
                    <FaTelegramPlane size={36} />
                    <FaEnvelopeSquare size={36} />
                </div>
            </div>
            <div className='lg:col-span-3 flex justify-between'></div>
        </div>
    )
}

export default Footer