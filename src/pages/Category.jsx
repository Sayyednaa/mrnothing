import React, { useState, useMemo } from 'react';
import { useParams, Link, useOutletContext, useNavigate } from 'react-router-dom';
import { categories } from '../data/categories';
import { products } from '../data/products';
import SectionHeading from '../components/SectionHeading';
import FilterBar from '../components/FilterBar';
import ProductGrid from '../components/ProductGrid';
import CategoryCard from '../components/CategoryCard';
import SearchBar from '../components/SearchBar';
import { ArrowLeft, Sparkles } from 'lucide-react';

export default function Category() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { wishlist, toggleWishlist, triggerShowcaseModal } = useOutletContext() || {};

  const currentCategory = categories.find(c => c.slug === slug);

  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState(25000);
  const [sortBy, setSortBy] = useState('featured');

  const categoryProducts = useMemo(() => {
    if (!currentCategory) return [];
    return products.filter(p => p.categorySlug === slug && p.price <= priceRange && (
      !searchQuery.trim() || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
    )).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [slug, priceRange, searchQuery, sortBy, currentCategory]);

  if (!currentCategory) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <h2 className="text-3xl font-bold font-display text-[#111827]">
          Category Not Found
        </h2>
        <p className="text-sm text-gray-600">
          The requested category slug <code className="text-[#062B67]">{slug}</code> does not exist in our showcase database.
        </p>
        <Link 
          to="/shop"
          className="inline-flex items-center space-x-2 py-3 px-6 bg-[#062B67] text-white rounded-xl text-xs font-bold uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Full Shop</span>
        </Link>
      </div>
    );
  }

  const relatedCategories = categories.filter(c => c.slug !== slug);

  return (
    <div className="space-y-12 pb-20">
      
      {/* Editorial Banner Header */}
      <section className="relative bg-[#031C44] text-white py-16 overflow-hidden border-b border-[#B28A43]/30">
        <img 
          src={currentCategory.bannerImage || currentCategory.image} 
          alt={currentCategory.name} 
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031C44] via-[#031C44]/80 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link 
            to="/shop" 
            className="inline-flex items-center space-x-2 text-xs font-semibold text-[#D2B36B] hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Categories</span>
          </Link>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold text-[#D2B36B] border border-white/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{currentCategory.tagline}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-white">
              {currentCategory.name}
            </h1>

            <p className="text-base sm:text-lg text-gray-200 font-light leading-relaxed">
              {currentCategory.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Search & Filter Bar */}
        <div className="space-y-4">
          <div className="max-w-md">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} placeholder={`Search in ${currentCategory.name}...`} />
          </div>

          <FilterBar
            selectedCategory={slug}
            setSelectedCategory={(cSlug) => {
              if (cSlug === 'all') navigate('/shop');
              else navigate(`/category/${cSlug}`);
            }}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            sortBy={sortBy}
            setSortBy={setSortBy}
            onResetFilters={() => {
              setSearchQuery('');
              setPriceRange(25000);
              setSortBy('featured');
            }}
            resultCount={categoryProducts.length}
          />
        </div>

        {/* Product Grid */}
        <ProductGrid
          products={categoryProducts}
          wishlist={wishlist}
          onToggleWishlist={toggleWishlist}
          onTriggerShowcaseModal={triggerShowcaseModal}
          onResetFilters={() => {
            setSearchQuery('');
            setPriceRange(25000);
          }}
        />
      </section>

      {/* Related Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-gray-200">
        <SectionHeading
          badge="Other Collections"
          title="Explore Related Systems"
          subtitle="Discover complementary product lines designed with the same Mr.Nothing standards."
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {relatedCategories.slice(0, 3).map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </section>
    </div>
  );
}
