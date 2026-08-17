import React, { useState } from 'react';
import { SlidersHorizontal, X, RefreshCcw } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { formatPrice } from '../config/site';

export const FilterBar = ({
  selectedCategory,
  onSelectCategory,
  priceRange,
  onPriceChange,
  maxPriceLimit,
  sortBy,
  onSortChange,
  resultCount,
  onClearFilters,
  activeFilterCount,
}) => {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-navy-dark border border-gray-200/80 dark:border-navy-muted rounded-2xl p-4 md:p-6 mb-8 shadow-sm">
      {/* Desktop Filter Layout */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Left: Category Pills (Desktop) */}
        <div className="hidden lg:flex items-center gap-2 overflow-x-auto pb-1">
          <button
            onClick={() => onSelectCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              selectedCategory === 'all'
                ? 'bg-navy-deep dark:bg-gold-accent text-white dark:text-navy-dark shadow-md'
                : 'bg-surface-offwhite dark:bg-navy-surface text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-navy-muted'
            }`}
          >
            All Products
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => onSelectCategory(cat.slug)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === cat.slug
                  ? 'bg-navy-deep dark:bg-gold-accent text-white dark:text-navy-dark shadow-md'
                  : 'bg-surface-offwhite dark:bg-navy-surface text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-navy-muted'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Right Controls: Sort & Mobile Toggle */}
        <div className="flex items-center justify-between lg:justify-end gap-3 w-full lg:w-auto">
          {/* Result Count */}
          <span className="text-xs text-text-secondary dark:text-gray-400 font-medium">
            Showing <strong className="text-navy-dark dark:text-white">{resultCount}</strong> items
          </span>

          {/* Mobile Filter Button */}
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="lg:hidden inline-flex items-center gap-2 px-3.5 py-2 bg-surface-offwhite dark:bg-navy-surface hover:bg-gray-200 dark:hover:bg-navy-muted text-navy-dark dark:text-white text-xs font-bold rounded-xl border border-gray-200 dark:border-navy-muted transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4 text-navy-deep dark:text-gold-accent" />
            Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
          </button>

          {/* Price Slider (Desktop) */}
          <div className="hidden md:flex items-center gap-3 px-4 py-1.5 bg-surface-offwhite dark:bg-navy-surface rounded-xl border border-gray-200 dark:border-navy-muted">
            <span className="text-xs font-bold text-gray-600 dark:text-gray-300">Max Price:</span>
            <input
              type="range"
              min="500"
              max={maxPriceLimit}
              step="500"
              value={priceRange}
              onChange={(e) => onPriceChange(Number(e.target.value))}
              className="w-24 accent-navy-deep dark:accent-gold-accent cursor-pointer"
            />
            <span className="text-xs font-bold text-navy-deep dark:text-gold-soft min-w-[60px]">
              {formatPrice(priceRange)}
            </span>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <label htmlFor="sort-select" className="sr-only">Sort products</label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="px-3.5 py-2 bg-surface-offwhite dark:bg-navy-surface border border-gray-200 dark:border-navy-muted rounded-xl text-xs font-bold text-navy-dark dark:text-white focus:outline-none focus:border-navy-deep dark:focus:border-gold-accent shadow-sm cursor-pointer"
            >
              <option value="featured">Sort by: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
            </select>
          </div>

          {/* Clear Filters Button */}
          {activeFilterCount > 0 && (
            <button
              onClick={onClearFilters}
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-red-600 transition-colors"
              title="Clear all active filters"
            >
              <RefreshCcw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 bg-navy-dark/70 backdrop-blur-sm flex justify-end animate-fade-in lg:hidden">
          <div className="w-full max-w-xs bg-white dark:bg-navy-dark h-full p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
            <div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-navy-muted mb-6">
                <h3 className="text-lg font-bold font-display text-navy-dark dark:text-white">Filter Collection</h3>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="p-1 text-gray-400 hover:text-navy-deep dark:hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy-deep dark:text-gold-accent mb-3">
                  Categories
                </h4>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => {
                      onSelectCategory('all');
                    }}
                    className={`text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      selectedCategory === 'all'
                        ? 'bg-navy-deep dark:bg-gold-accent text-white dark:text-navy-dark'
                        : 'bg-surface-offwhite dark:bg-navy-surface text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    All Products
                  </button>
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.slug}
                      onClick={() => {
                        onSelectCategory(cat.slug);
                      }}
                      className={`text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        selectedCategory === cat.slug
                          ? 'bg-navy-deep dark:bg-gold-accent text-white dark:text-navy-dark'
                          : 'bg-surface-offwhite dark:bg-navy-surface text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter Slider */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-deep dark:text-gold-accent">
                    Max Price
                  </h4>
                  <span className="text-xs font-extrabold text-gold-dark dark:text-gold-soft">{formatPrice(priceRange)}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max={maxPriceLimit}
                  step="500"
                  value={priceRange}
                  onChange={(e) => onPriceChange(Number(e.target.value))}
                  className="w-full accent-navy-deep dark:accent-gold-accent cursor-pointer"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-navy-muted space-y-2">
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="w-full py-3 bg-navy-deep dark:bg-gold-accent text-white dark:text-navy-dark text-xs font-bold rounded-xl shadow"
              >
                Apply Filters
              </button>
              {activeFilterCount > 0 && (
                <button
                  onClick={() => {
                    onClearFilters();
                    setMobileFilterOpen(false);
                  }}
                  className="w-full py-2.5 text-xs text-red-600 font-bold hover:underline"
                >
                  Clear All
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
