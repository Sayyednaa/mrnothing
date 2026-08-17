import React from 'react';
import { Search, X } from 'lucide-react';

export default function SearchBar({ 
  value, 
  onChange, 
  searchQuery, 
  setSearchQuery, 
  placeholder = 'Search showcase products...', 
  onClear 
}) {
  const currentValue = value !== undefined ? value : (searchQuery || '');
  const handleChange = (val) => {
    if (onChange) onChange(val);
    if (setSearchQuery) setSearchQuery(val);
  };
  const handleClear = () => {
    if (onClear) onClear();
    if (onChange) onChange('');
    if (setSearchQuery) setSearchQuery('');
  };

  return (
    <div className="relative w-full">
      <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        value={currentValue}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-white border border-gray-300 rounded-xl pl-11 pr-10 py-3 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#062B67] focus:border-transparent transition-all"
      />
      {currentValue && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Clear search"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
