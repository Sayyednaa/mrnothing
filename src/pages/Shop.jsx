import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { SectionHeading } from '../components/SectionHeading';
import { SearchBar } from '../components/SearchBar';
import { FilterBar } from '../components/FilterBar';
import { ProductGrid } from '../components/ProductGrid';

export const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const initialSearch = searchParams.get('search') || '';
  const initialCategory = searchParams.get('category') || 'all';

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  
  const maxPriceLimit = 10000;
  const [priceRange, setPriceRange] = useState(maxPriceLimit);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    const q = searchParams.get('search');
    if (q !== null) setSearchQuery(q);

    const cat = searchParams.get('category');
    if (cat !== null) setSelectedCategory(cat);
  }, [searchParams]);

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (selectedCategory !== 'all') count++;
    if (priceRange < maxPriceLimit) count++;
    if (searchQuery.trim() !== '') count++;
    return count;
  }, [selectedCategory, priceRange, searchQuery]);

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setPriceRange(maxPriceLimit);
    setSearchQuery('');
    setSortBy('featured');
    setSearchParams({});
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      if (selectedCategory !== 'all' && product.categorySlug !== selectedCategory) {
        return false;
      }
      if (product.price > priceRange) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchName = product.name.toLowerCase().includes(query);
        const matchDesc = product.shortDescription.toLowerCase().includes(query) || product.description.toLowerCase().includes(query);
        const matchCat = product.category.toLowerCase().includes(query);
        if (!matchName && !matchDesc && !matchCat) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      return 0;
    });
  }, [selectedCategory, priceRange, searchQuery, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionHeading
        badge="Catalogue 2026"
        title="The Collection"
        subtitle="Explore our complete showcase of action-ready apparel, hardware, and lifestyle essentials."
      />

      {/* Top Search Bar */}
      <div className="mb-6 max-w-2xl">
        <SearchBar
          value={searchQuery}
          onChange={(val) => {
            setSearchQuery(val);
            if (val) setSearchParams({ search: val });
            else setSearchParams({});
          }}
          onClear={() => {
            setSearchQuery('');
            setSearchParams({});
          }}
        />
      </div>

      {/* Filter and Sort Control Bar */}
      <FilterBar
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          if (cat !== 'all') setSearchParams({ category: cat });
          else setSearchParams({});
        }}
        priceRange={priceRange}
        onPriceChange={setPriceRange}
        maxPriceLimit={maxPriceLimit}
        sortBy={sortBy}
        onSortChange={setSortBy}
        resultCount={filteredProducts.length}
        onClearFilters={handleClearFilters}
        activeFilterCount={activeFilterCount}
      />

      {/* Product Grid */}
      <ProductGrid
        products={filteredProducts}
        onClearFilters={handleClearFilters}
      />
    </div>
  );
};
