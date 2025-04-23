"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" }); // Clear form
    };

    return (
        <div>
            <Navbar />
            <main className="p-8 text-black bg-white min-h-screen">
                <div className="max-w-md mx-auto text-left">
                    <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
                    <p className="mb-6 text-sm italic text-gray-600">We’d love to hear from you! Send us a message.</p>

                    {submitted && (
                        <p className="mb-4 text-green-600 italic font-semibold">Your order request has been sent!</p>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-100 border border-gray-300 rounded px-3 py-2"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-100 border border-gray-300 rounded px-3 py-2"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Message</label>
                            <textarea
                                name="message"
                                rows="4"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className="w-100 border border-gray-300 rounded px-3 py-2"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}
