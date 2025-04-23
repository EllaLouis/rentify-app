"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutUsPage() {
    const [images, setImages] = useState([]);

    const UNSPLASH_ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

    useEffect(() => {
        fetch(`https://api.unsplash.com/search/photos?query=wedding%20decor&per_page=4&client_id=${UNSPLASH_ACCESS_KEY}`)
            .then((res) => res.json())
            .then((data) => {
                const formatted = data.results.map((item, index) => ({
                    id: index,
                    url: item.urls.small,
                    alt: item.alt_description || "About Us Image",
                }));
                setImages(formatted);
            })
            .catch((err) => console.error("Unsplash fetch failed:", err));
    }, []);

    return (
        <div>
            <Navbar />
            <main className="p-8 text-white">
                <h1 className="text-3xl italic font-bold mb-4">About Us</h1>
                <p className="mb-6 max-w-3xl italic">
                    Welcome to Rentify! We specialize in providing high-quality event rental items to help you create unforgettable occasions.<br />
                    Our mission is to make your event planning process as seamless and enjoyable as possible. <br />
                    Whether you're planning a wedding, corporate event, or birthday party, we've got you covered with tables, chairs, linens, decor, and more.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    {images.map((img) => (
                        <div
                            key={img.id}
                            className="aspect-square border-4 border-white rounded-lg overflow-hidden shadow-lg"
                        >
                            <img
                                src={img.url}
                                alt={img.alt_description || "About Us"}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>

            </main>
            <Footer />
        </div>
    );
}
