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

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Navigation Bar */}
      <nav className="bg-white shadow p-4 flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-600 mb-2 sm:mb-0">Rentify</h1>
        <div className="flex gap-4 items-center">
          <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact Us</a>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded px-2 py-1"
          />
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="border p-4 rounded shadow text-center">
              <img src={item.imageUrl} alt={item.name} className="w-full h-40 object-cover rounded mb-2" />
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600">Price: ${item.price}</p>
              <input
                type="number"
                min="1"
                placeholder="Quantity"
                className="border mt-2 p-1 w-20 text-center"
              />
              <button className="block mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Contact Us
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Contact Section */}
      <div id="contact" className="mt-16 p-6 bg-gray-100 rounded text-center">
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p className="text-gray-700">
          For bookings, please email us at{" "}
          <a href="mailto:rentify@email.com" className="text-blue-600">rentify@email.com</a>
        </p>
      </div>
    </>
  );
}
