"use client";
import React, { useState } from "react";

const items = [
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
        <main className="p-6 bg-white min-h-screen text-black">
            <h1 className="text-3xl font-bold mb-6 text-center">Available Rental Items</h1>
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
                {items.map((item) => (
                    <div key={item.id} className="border rounded-lg p-4 shadow bg-gray-50">
                        <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                        <p className="text-gray-700 mb-2">Price: ${item.price} per unit</p>
                        <label className="block mb-2">Quantity:</label>
                        <input
                            type="number"
                            min="0"
                            value={quantities[item.id] || ""}
                            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                            className="w-full border rounded px-3 py-1"
                            placeholder="Enter quantity"
                        />
                    </div>
                ))}
            </div>
        </main>
    );
}
