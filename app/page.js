"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function HomePage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/EllaLouis/rentify-app/refs/heads/master/app/items.json")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error fetching items:", err));
  }, []);

  return (
    <main className="bg-[#f5f5dc] text-[#171717] min-h-screen">
      <header className="bg-white shadow p-4">
        <nav className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-xl font-bold">Rentify</h1>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/">Home</Link>
            <Link href="/rental-items">Rental Items</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/contact-us">Contact Us</Link>
          </div>

          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-full px-4 py-1 focus:outline-none focus:ring"
          />
        </nav>

      </header>

      <section className="p-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Event Rentals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="border p-4 rounded shadow text-center bg-white">
              <img src={item.imageUrl} alt={item.name} className="w-full h-40 object-cover rounded mb-2" />
              <h3 className="text-lg font-semibold">{item.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white mt-10 p-4 text-center text-sm text-gray-600">
        <div className="flex justify-center space-x-4 mb-2">
          <a href="#" className="hover:text-black">Instagram</a>
          <a href="#" className="hover:text-black">Facebook</a>
          <a href="#" className="hover:text-black">Twitter</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Rentify. All rights reserved.</p>
      </footer>
    </main>
  );
}
