"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutUsPage() {
    const [images, setImages] = useState([]);

    const UNSPLASH_ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

    useEffect(() => {
        fetch(`https://api.unsplash.com/search/photos?query=event%20rentals&per_page=4&client_id=${UNSPLASH_ACCESS_KEY}`)
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
                <h1 className="text-3xl font-bold mb-4">About Us</h1>
                <p className="mb-6 max-w-3xl">
                    Welcome to Rentify! We specialize in providing high-quality event rental items to help you create unforgettable occasions.
                    Whether you're planning a wedding, corporate event, or birthday party, we've got you covered with tables, chairs, linens, decor, and more.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-6xl">
                    {images.map((img) => (
                        <img
                            key={img.id}
                            src={img.url}
                            alt={img.alt}
                            className="w-full h-32 object-cover rounded shadow"
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
