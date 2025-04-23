"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactUsPage() {
    return (
        <div>
            <Navbar />
            <main className="p-6 bg-white min-h-screen text-black">
                <div className="max-w-xl mx-auto">
                    <h1 className="text-3xl italic font-bold mb-4 text-center">Contact Us</h1>
                    <p className="text-center mb-6">
                        Have a question or want to place an order? Send us a message!
                    </p>

                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block font-medium mb-1">
                                Name:
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full border rounded px-3 py-2"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block font-medium mb-1">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full border rounded px-3 py-2"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block font-medium mb-1">
                                Message:
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                className="w-full border rounded px-3 py-2"
                                placeholder="Type your message here..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}
