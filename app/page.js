"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";

export default function HomePage() {
  const [items, setItems] = useState([]);

  const UNSPLASH_ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?query=event%20decor&client_id=${UNSPLASH_ACCESS_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        const formattedData = data.results.map((item, index) => ({
          id: index,
          name: item.alt_description || "Rental Item",
          imageUrl: item.urls.regular,
        }));
        setItems(formattedData);
      })
      .catch((err) => console.error("Failed to fetch from Unsplash:", err));
  }, []);

  return (
    <div>
      <Navbar />
      <main className="p-8 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-5">Rent the Perfect Event Supplies!</h2>
          <p className="mb-4">
            Rentify event rentals and entertainment deals on unique rental items for any event. <br />
            We&apos;re ready to help you make your event unforgettable with our wide range of <br />
            high-quality rental items— from chairs and tables to linens, decor, and lighting.
          </p>
        </div>

        <div className="max-w-7xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item) => (
            <div key={item.id} className="w-60 border rounded shadow bg-white p-2">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-32 object-cover rounded"
              />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
