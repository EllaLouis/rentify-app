"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/EllaLouis/rentify-app/master/app/items.json")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  return (
    <div>
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Rentify Rentals</h1>
        <h2 className="text-2xl font-bold mb-5">Rent the Perfect Event Supplies!</h2>
        <p className="mb-4">
          Rentify event rentals and entertainment, deal on varieties of unique rental items for any event.
          We're ready to help you make your event an unforgettable one, with our wide range of high-quality rental items.
          From chairs, tables, linens, decor and even lightings, we have everything you need to make your event a success.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
      <Footer />
    </div>
  );
}

export default App;
