"use client";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/EllaLouis/rentify-app/refs/heads/master/app/items.json")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-blue-600">Rentify</h1>
        <div className="flex gap-6 items-center">
          <a href="#" className="hover:text-blue-500">Home</a>
          <a href="#contact" className="hover:text-blue-500">Contact Us</a>
          <input
            type="text"
            placeholder="Search items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-3 py-1 border border-gray-300 rounded-md text-sm"
          />
        </div>
      </nav>

      <main className="px-6 py-10">
        <h2 className="text-3xl font-semibold text-center mb-8">Browse Event Rentals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-md p-4 text-center hover:shadow-lg transition"
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-600 mb-2">Price: ${item.price}</p>
              <input
                type="number"
                min="1"
                placeholder="Qty"
                className="border p-1 w-20 text-center rounded"
              />
              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
                Contact Us
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Contact Section */}
      <footer
        id="contact"
        className="bg-white mt-16 p-6 text-center border-t border-gray-200"
      >
        <h3 className="text-lg font-semibold">Contact Us</h3>
        <p className="text-sm text-gray-600">
          For bookings and inquiries, email us at{" "}
          <a href="mailto:rentify@email.com" className="text-blue-600 font-medium">
            rentify@email.com
          </a>
        </p>
      </footer>
    </div>
  );
}
