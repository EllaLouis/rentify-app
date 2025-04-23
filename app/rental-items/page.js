"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const rentalItems = [
    { id: 1, name: "Round Table", price: 12 },
    { id: 2, name: "Long Table", price: 15 },
    { id: 3, name: "Foldable Table", price: 10 },
    { id: 4, name: "Foldable Chair", price: 5 },
    { id: 5, name: "White Wooden Chair", price: 7 },
    { id: 6, name: "Couples Wedding Chair", price: 25 },
    { id: 7, name: "Bamboo Chair", price: 6 },
    { id: 8, name: "Chair Cover Linens", price: 3 },
    { id: 9, name: "Table Cover Linens", price: 4 },
    { id: 10, name: "Table Linens", price: 4 },
];

export default function RentalItemsPage() {
    const [quantities, setQuantities] = useState({});

    const handleQuantityChange = (id, value) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    return (
        <div>
            <Navbar />
            <main className="p-6 bg-white min-h-screen text-black">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-3xl font-bold mb-6 text-left">Available Rental Items</h1>

                    <div className="space-y-4">
                        {rentalItems.map((item) => (
                            <div
                                key={item.id}
                                className="border rounded-lg p-4 shadow bg-gray-50 flex flex-col sm:flex-row sm:justify-between sm:items-center"
                            >
                                <div>
                                    <h2 className="text-xl font-semibold">{item.name}</h2>
                                    <p className="text-gray-700 mt-1">Price: ${item.price} per unit</p>
                                </div>
                                <div className="mt-2 sm:mt-0">
                                    <label className="block text-sm mb-1">Quantity:</label>
                                    <input
                                        type="number"
                                        min="0"
                                        value={quantities[item.id] || ""}
                                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                        className="w-24 border rounded px-2 py-1"
                                        placeholder="Qty"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <p className="text-lg italic font-semibold">Ready to place an order?</p>
                        <Link href="/contact-us">
                            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
