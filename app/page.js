"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Image from 'next/image';
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
      <main className="p-8 text-white">
        <h2 className="text-2xl font-bold mb-5">Rent the Perfect Event Supplies!</h2>
        <p className="mb-4">
          Rentify event rentals and entertainment, deal on varieties of unique rental items for any event.
          We&apos;re ready to help.
          help you make your event an unforgettable one, with our wide range of high-quality rental items.
          From chairs, tables, linens, decor and even lightings, we have everything you need to make your event a success.
        </p>

        <div className="">
          {items.map((item) => (
            <div key={item.id} className="border p-4 rounded shadow text-center">
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={400}
                height={200}
                className="rounded mb-2 object-cover"
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
