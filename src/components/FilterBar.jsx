import React from 'react';
import { SlidersHorizontal, RotateCcw } from 'lucide-react';
import { categories } from '../data/categories';
import { formatPrice } from '../data/constants';

export default function FilterBar({
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  sortBy,
  setSortBy,
  onResetFilters,
  resultCount
}) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        
        {/* Left: Category Chips */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
              selectedCategory === 'all'
                ? 'bg-[#062B67] text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Categories
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat.slug
                  ? 'bg-[#062B67] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Right: Controls & Sort */}
        <div className="flex flex-wrap items-center gap-4 border-t lg:border-t-0 pt-4 lg:pt-0 border-gray-100">
          {/* Price Range Slider in INR */}
          <div className="flex items-center space-x-3 bg-gray-50 px-4 py-2 rounded-xl border border-gray-200">
            <span className="text-xs font-medium text-gray-600">Max Price:</span>
            <input 
              type="range"
              min="2000"
              max="25000"
              step="500"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-28 accent-[#062B67] cursor-pointer"
            />
            <span className="text-xs font-bold text-[#062B67] min-w-[60px] font-display">
              {formatPrice(priceRange)}
            </span>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-xl border border-gray-200">
            <SlidersHorizontal className="w-4 h-4 text-gray-500" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-xs font-semibold text-gray-800 focus:outline-none cursor-pointer pr-2"
            >
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {/* Reset Filters */}
          <button
            onClick={onResetFilters}
            className="p-2 text-gray-500 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors text-xs font-medium flex items-center space-x-1"
            title="Reset Filters"
          >
            <RotateCcw className="w-4 h-4" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>
      </div>

      {/* Result Count Banner */}
      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
        <span>Showing <strong className="text-[#062B67]">{resultCount}</strong> showcase items</span>
        {selectedCategory !== 'all' && (
          <span className="text-[#B28A43] font-medium">
            Category: {categories.find(c => c.slug === selectedCategory)?.name || selectedCategory}
          </span>
        )}
      </div>
    </div>
  );
}
