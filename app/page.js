"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function HomePage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/EllaLouis/rentify-app/refs/heads/master/app/items.json")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  return (
    <main className="min-h-screen bg-white text-[#8B5E3C]">
      {/* Navbar */}
      <nav className="bg-[#8B5E3C] text-white p-4 flex justify-between items-center">
        <div className="text-xl font-bold">Rentify</div>
        <div className="space-x-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/rental-items" className="hover:underline">Rental Items</Link>
          <Link href="/about" className="hover:underline">About Us</Link>
          <Link href="/contact" className="hover:underline">Contact Us</Link>
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="rounded px-2 py-1 text-black"
        />
      </nav>

      {/* Main content */}
      <section className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Featured Rentals</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="border p-4 rounded shadow text-center">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-700">Price: ${item.price}</p>
              <input
                type="number"
                min="1"
                placeholder="Quantity"
                className="border mt-2 p-1 w-20 text-center"
              />
              <button className="block mt-3 bg-[#8B5E3C] text-white px-4 py-2 rounded hover:bg-[#7a4f30]">
                Contact Us
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 bg-[#8B5E3C] text-white p-4 text-center">
        <div className="mb-2">
          <span className="mx-2">📘</span>
          <span className="mx-2">📸</span>
          <span className="mx-2">🐦</span>
        </div>
        <p>&copy; {new Date().getFullYear()} Rentify. All rights reserved.</p>
      </footer>
    </main>
  );
}
v