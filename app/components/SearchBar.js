"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [message, setMessage] = useState("");
    const router = useRouter();

    const handleSearch = () => {
        const trimmedQuery = searchQuery.trim().toLowerCase();
        const availableItems = ["tables", "chairs", "lights", "linens"];

        if (!trimmedQuery) {
            setMessage("search...");
        } else if (availableItems.includes(trimmedQuery)) {
            router.push(`/rental-items?search=${trimmedQuery}`);
        } else {
            setMessage(`No results found for "${searchQuery}"`);
        }
    };

    return (
        <div className="flex flex-col items-end w-full max-w-[250px]">
            <div className="flex items-center bg-white rounded-full px-2 py-1 w-full shadow-md">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-grow bg-transparent px-2 py-1 text-black outline-none rounded-full"
                />
                <button
                    onClick={handleSearch}
                    className="bg-blue-600 text-white px-4 py-1 rounded-full hover:bg-blue-700 transition"
                >
                    Go
                </button>
            </div>
            {message && (
                <p className="text-xs text-red-200 mt-1 italic">{message}</p>
            )}
        </div>
    );
};

export default SearchBar;
