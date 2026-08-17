import React from 'react';
import { Search, X } from 'lucide-react';

export const SearchBar = ({ value, onChange, onClear, placeholder = "Search collection by name or description..." }) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
        <Search className="w-5 h-5" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-11 pr-10 py-3 bg-white dark:bg-navy-dark border border-gray-200 dark:border-navy-muted rounded-xl text-sm text-navy-dark dark:text-white placeholder-gray-400 focus:outline-none focus:border-navy-deep dark:focus:border-gold-accent focus:ring-2 focus:ring-navy-deep/20 transition-all shadow-sm"
      />
      {value && (
        <button
          onClick={onClear}
          className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-navy-deep dark:hover:text-gold-accent transition-colors"
          aria-label="Clear search query"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
