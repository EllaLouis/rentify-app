import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitterSquare,
    FaTelegramPlane,
    FaEnvelopeSquare,
} from "react-icons/fa";

export default function Footer() {
    return (
        <div className="bg-beige text-gray-300 px-6 py-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h1 className="text-3xl italic font-bold text-white">Rentify</h1>
                    <p className="text-sm italic py-2">Rentify event rentals</p>
                    <p className="text-sm italic">Have questions? Reach out to us at:</p>

                    {/* Social Icons with links */}
                    <div className="flex space-x-8 mt-6">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookSquare size={32} style={{ color: "black" }} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={32} style={{ color: "black" }} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitterSquare size={32} style={{ color: "black" }} />
                        </a>
                        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                            <FaTelegramPlane size={32} style={{ color: "black" }} />
                        </a>
                        <a href="mailto:info@rentify.com">
                            <FaEnvelopeSquare size={32} style={{ color: "black" }} />
                        </a>
                    </div>



                    <p className="text-xs italic text-gray-400 mt-6">
                        &copy; Rentify. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}
