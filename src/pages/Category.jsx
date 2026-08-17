import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';
import { formatPrice } from '../config/site';
import { ProductGrid } from '../components/ProductGrid';

export const Category = () => {
  const { slug } = useParams();
  const category = CATEGORIES.find((c) => c.slug === slug);

  const maxPriceLimit = 10000;
  const [priceRange, setPriceRange] = useState(maxPriceLimit);
  const [sortBy, setSortBy] = useState('featured');

  const categoryProducts = useMemo(() => {
    if (!category) return [];
    return PRODUCTS.filter((p) => p.categorySlug === category.slug)
      .filter((p) => p.price <= priceRange)
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
        return 0;
      });
  }, [category, priceRange, sortBy]);

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-extrabold text-navy-dark dark:text-white mb-4">Category Not Found</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">The category slug "{slug}" does not exist in our showcase catalogue.</p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 px-6 py-3 bg-navy-deep dark:bg-gold-accent text-white dark:text-navy-dark font-bold rounded-xl"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>
      </div>
    );
  }

  const relatedCategories = CATEGORIES.filter((c) => c.slug !== category.slug);

  return (
    <div className="space-y-12 pb-20">
      {/* Editorial Banner */}
      <section className="relative bg-navy-dark text-white py-20 overflow-hidden border-b border-navy-muted">
        <img
          src={category.heroBanner}
          alt={category.name}
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/80 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs font-bold text-gold-soft hover:underline mb-6 uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Products
          </Link>

          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/10 text-gold-soft text-xs font-bold uppercase tracking-widest rounded-full border border-gold-accent/30">
              <Layers className="w-3.5 h-3.5" />
              Category Showcase
            </span>
            <h1 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-white">
              {category.name}
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              {category.description}
            </p>
          </div>

          {/* Key Features Pill Badges */}
          {category.features && (
            <div className="flex flex-wrap gap-3 pt-6 border-t border-white/10 mt-8">
              {category.features.map((feat, idx) => (
                <span key={idx} className="text-xs text-gray-200 flex items-center gap-1.5 px-3 py-1 bg-navy-deep/80 rounded-lg border border-gold-accent/20">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-accent" />
                  {feat}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Main Content & Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-navy-dark p-4 rounded-2xl border border-gray-200 dark:border-navy-muted mb-8">
          <span className="text-xs font-bold text-navy-dark dark:text-white">
            Showing <strong>{categoryProducts.length}</strong> items in {category.name}
          </span>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gray-500 dark:text-gray-300">Max Price:</span>
              <input
                type="range"
                min="500"
                max={maxPriceLimit}
                step="500"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-24 accent-navy-deep dark:accent-gold-accent cursor-pointer"
              />
              <span className="text-xs font-bold text-navy-deep dark:text-gold-soft">{formatPrice(priceRange)}</span>
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-1.5 bg-surface-offwhite dark:bg-navy-surface border border-gray-200 dark:border-navy-muted rounded-lg text-xs font-bold text-navy-dark dark:text-white focus:outline-none"
            >
              <option value="featured">Sort by: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <ProductGrid products={categoryProducts} />

        {/* Related Categories */}
        <div className="mt-20 pt-12 border-t border-gray-200 dark:border-navy-muted">
          <h3 className="text-2xl font-bold font-display text-navy-dark dark:text-white mb-6">
            Explore Other Categories
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedCategories.map((relCat) => (
              <Link
                key={relCat.slug}
                to={`/category/${relCat.slug}`}
                className="group p-6 bg-white dark:bg-navy-dark rounded-2xl border border-gray-200 dark:border-navy-muted hover:border-gold-accent/50 shadow-sm hover:shadow-lg transition-all flex justify-between items-center"
              >
                <div>
                  <h4 className="font-bold text-navy-dark dark:text-white group-hover:text-gold-dark dark:group-hover:text-gold-soft transition-colors">
                    {relCat.name}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{relCat.itemCount} Showcase Items</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gold-accent group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
