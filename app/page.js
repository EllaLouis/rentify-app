"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function HomePage() {
  const [items, setItems] = useState([]);

  const UNSPLASH_ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

  useEffect(() => {
    Promise.all([
      fetch(`https://api.unsplash.com/search/photos?query=wedding%20chairs&per_page=4&client_id=${UNSPLASH_ACCESS_KEY}`),
      fetch(`https://api.unsplash.com/search/photos?query=event%20tables&per_page=4&client_id=${UNSPLASH_ACCESS_KEY}`),
    ])
      .then((responses) => Promise.all(responses.map((res) => res.json())))
      .then((allData) => {
        const formattedData = allData.flatMap((data, index) =>
          data.results.map((item, i) => ({
            id: `${index}-${i}`,
            name: item.alt_description || "Rental Item",
            imageUrl: item.urls.regular,
          }))
        );
        setItems(formattedData);
      })
      .catch((err) => console.error("Failed to fetch from Unsplash:", err));
  }, []);

  return (
    <div>
      <Navbar />
      <main className="p-8 text-white">
        <div className="max-w-3xl mx-auto text-left">
          <h2 className="text-2xl italic font-bold mb-5">Rent the Perfect Event Supplies!</h2>
          <p className="mb-4 text italic">
            Rentify event rentals and entertainment deals on unique rental items for any event. <br />
            We&apos;re ready to help you make your event unforgettable with our wide range of <br />
            high-quality rental items— from chairs and tables to linens, decor, and lighting.
          </p>
        </div>
        <div className="max-w-6xl mx-auto mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {items.map((item) => (
            <div key={item.id} className="flex justify-center">
              <div className="w-28 aspect-square border rounded shadow bg-white overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover object-center rounded"
                />
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
