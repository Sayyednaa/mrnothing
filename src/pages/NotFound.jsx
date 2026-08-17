import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Compass, ShoppingBag, ArrowLeft, Search, Sparkles } from 'lucide-react';
import SearchBar from '../components/SearchBar';

export default function NotFound() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center space-y-8">
      
      {/* 404 Hero Visual */}
      <div className="relative inline-block">
        <div className="w-32 h-32 bg-[#031C44] rounded-3xl border-2 border-[#B28A43]/50 flex items-center justify-center mx-auto shadow-2xl">
          <Compass className="w-16 h-16 text-[#D2B36B] animate-spin-slow" />
        </div>
        <span className="absolute -top-2 -right-2 bg-[#B28A43] text-white font-mono text-xs font-black px-3 py-1 rounded-full border-2 border-white shadow">
          404 ERROR
        </span>
      </div>

      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black font-heading text-[#031C44]">
          Destination Not Found
        </h1>
        <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto leading-relaxed">
          The page or product route you are searching for does not exist or has been relocated within the showcase collection.
        </p>
      </div>

      {/* Search Bar Container */}
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSearchSubmit}>
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            onClear={() => setSearchTerm('')}
            placeholder="Search showcase collection instead..."
          />
        </form>
      </div>

      {/* Quick Action Navigation Links */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          to="/"
          className="w-full sm:w-auto px-6 py-3 bg-[#031C44] hover:bg-[#062B67] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 border border-[#B28A43]/40 shadow-md"
        >
          <ArrowLeft className="w-4 h-4 text-[#D2B36B]" />
          <span>Return Home</span>
        </Link>

        <Link
          to="/shop"
          className="w-full sm:w-auto px-6 py-3 bg-[#B28A43] hover:bg-[#D2B36B] text-white hover:text-[#031C44] rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-md"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Explore Shop Collection</span>
        </Link>
      </div>

    </div>
  );
}
