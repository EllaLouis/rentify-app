"use client";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/EllaLouis/rentify-app/master/app/items.json")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  return (
    <div>
      <header className="bg-[#d6bfa0] p-12 flex justify-between items-center shadow-md">
        <div className="flex space-x-6 font-medium text-lg">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Rental Items</a>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="rounded-full px-4 py-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </header>

      <main className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Rentify Rentals</h1>
        <h2 className="text-2xl font-bold mb-5">Rent the Perfect Event Supplies!</h2>
        <p className="mb-4">
          Rentify event rentals and entertainment, deal on varieties of unique rental items for any event.
          We're ready to help you make your event an unforgettable one, with our wide range of high-quality rental items.
          From chairs, tables, linens, decor and even lightings, we have everything you need to make your event a success.
        </p>
        <div className="">
          {items.map((item) => (
            <div key={item.id} className="border p-4 rounded shadow text-center">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h2 className="text-xl font-semibold">{item.name}</h2>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#d6bfa0] mt-10 p-6 text-center text-sm">
        <div className="flex justify-center space-x-6 mb-2">
          <a href="#" className="hover:text-blue-600">Facebook</a>
          <a href="#" className="hover:text-blue-400">Twitter</a>
          <a href="#" className="hover:text-pink-500">Instagram</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Rentify. All rights reserved.</p>
      </footer>
    </div>
  );
}
