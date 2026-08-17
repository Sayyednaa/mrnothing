import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useOutletContext } from 'react-router-dom';
import { products as initialProducts } from '../data/products';
import SectionHeading from '../components/SectionHeading';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import ProductGrid from '../components/ProductGrid';

export default function Shop() {
  const { wishlist, toggleWishlist, triggerShowcaseModal } = useOutletContext() || {};
  const [searchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState(25000);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    const s = searchParams.get('search');
    const c = searchParams.get('category');
    if (s !== null) setSearchQuery(s);
    if (c !== null) setSelectedCategory(c);
  }, [searchParams]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setPriceRange(25000);
    setSortBy('featured');
  };

  const filteredProducts = useMemo(() => {
    return initialProducts.filter(product => {
      // Search Query Filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesDesc = product.shortDescription.toLowerCase().includes(q);
        const matchesCategory = product.category.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc && !matchesCategory) return false;
      }

      // Category Filter
      if (selectedCategory !== 'all' && product.categorySlug !== selectedCategory) {
        return false;
      }

      // Price Range Filter
      if (product.price > priceRange) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
      // 'featured'
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [searchQuery, selectedCategory, priceRange, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <SectionHeading
          badge="Product Catalogue"
          title="The Collection"
          subtitle="Explore the complete suite of Mr.Nothing clothing, electronics, home craft, and everyday upgrades."
        />
        <div className="max-w-xl mx-auto">
          <SearchBar 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
      </div>

      {/* Filter Bar */}
      <FilterBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        sortBy={sortBy}
        setSortBy={setSortBy}
        onResetFilters={handleResetFilters}
        resultCount={filteredProducts.length}
      />

      {/* Product Grid */}
      <ProductGrid
        products={filteredProducts}
        wishlist={wishlist}
        onToggleWishlist={toggleWishlist}
        onTriggerShowcaseModal={triggerShowcaseModal}
        onResetFilters={handleResetFilters}
      />
    </div>
  );
}
