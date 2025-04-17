"use client";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/EllaLouis/rentify-app/refs/heads/master/app/items.json")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="p-4">
      <nav className="bg-gray-200 p-4 mb-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div className="flex flex-wrap gap-4 font-semibold">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#rentals" className="hover:text-blue-600">Rental Items</a>
          <a href="#about" className="hover:text-blue-600">About Us</a>
          <a href="#contact" className="hover:text-blue-600">Contact Us</a>
        </div>
        <input
          type="text"
          placeholder="Search items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded w-full md:w-60"
        />
      </nav>

      <section id="rentals">
        <h1 className="text-3xl font-bold mb-6 text-center">Rental Items</h1>
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
      </section>

      <section id="about" className="mt-10 p-4 bg-gray-50 rounded">
        <h2 className="text-xl font-bold mb-2">About Us</h2>
        <p>Rentify is a simple rental service for event items like chairs, tables, lights, and more.</p>
      </section>

      <section id="contact" className="mt-10 p-4 bg-gray-100 rounded">
        <h2 className="text-xl font-bold mb-2">Contact Us</h2>
        <p>To place an order, please email us at rentify@example.com or call (123) 456-7890.</p>
      </section>
    </main>
  );
}

