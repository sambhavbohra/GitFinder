import React from 'react'
import { useState } from "react";
import { useGitHub } from '../context/GithubContext';

const SearchBar = () => {
    const [username, setUsername] = useState("");
    const { fetchGitHubData,error, loading }= useGitHub();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(username.trim()){
            fetchGitHubData(username);
        }
    };

    return (
        <div className="animate-fade-in-down w-full max-w-md mx-auto p-6">
            <form 
                onSubmit={handleSubmit}
                className="space-y-4 bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105"
            >
                <div className="relative">
                    <input 
                        type="text"
                        placeholder="Enter Github username..."
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-300"
                    />
                </div>
                <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white py-2 px-4 rounded-lg hover:from-orange-500 hover:to-orange-700 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
                >
                    {loading ? "Searching..." : "Search"}
                </button>
                {error && (
                    <p className="text-red-500 text-sm mt-2 animate-pulse">
                        {error}
                    </p>
                )}
            </form>
        </div>
    );
}

export default SearchBar