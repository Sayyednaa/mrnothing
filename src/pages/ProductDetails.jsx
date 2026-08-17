import React, { useState } from 'react';
import { useParams, Link, useOutletContext, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import ProductGrid from '../components/ProductGrid';
import SectionHeading from '../components/SectionHeading';
import { BRAND, formatPrice } from '../data/constants';
import { Heart, ShoppingBag, ShieldCheck, Check, Star, ArrowLeft, ChevronRight, Share2, Layers } from 'lucide-react';

export default function ProductDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { wishlist, toggleWishlist, triggerShowcaseModal } = useOutletContext() || {};

  const product = products.find(p => p.slug === slug) || products[0]; // fallback to first product
  const {
    id,
    name,
    category,
    categorySlug,
    price,
    originalPrice,
    image,
    gallery = [image],
    shortDescription,
    description,
    features = [],
    specifications = {},
    badge,
    rating,
    reviewCount
  } = product;

  const [selectedImage, setSelectedImage] = useState(gallery[0] || image || BRAND.logoPath);
  const [copiedLink, setCopiedLink] = useState(false);

  const isWishlisted = wishlist?.includes(id);
  const relatedProducts = products.filter(p => p.categorySlug === categorySlug && p.id !== id).slice(0, 4);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-xs text-gray-500">
        <Link to="/" className="hover:text-[#062B67]">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to="/shop" className="hover:text-[#062B67]">Shop</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to={`/category/${categorySlug}`} className="hover:text-[#062B67]">{category}</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-[#062B67] font-semibold truncate max-w-[200px]">{name}</span>
      </nav>

      {/* Product Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Gallery (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-white border border-gray-200/80 shadow-md flex items-center justify-center">
            <img 
              src={selectedImage} 
              alt={name}
              onError={() => setSelectedImage(BRAND.logoPath)}
              className="w-full h-full object-cover object-center transition-all duration-300"
            />
            {badge && (
              <span className="absolute top-4 left-4 px-3 py-1 bg-[#062B67] text-white text-xs font-bold uppercase rounded-md shadow-md">
                {badge}
              </span>
            )}
            <span className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-md text-[#062B67] text-xs font-bold uppercase rounded-md shadow-sm border border-gray-200">
              Showcase Only
            </span>
          </div>

          {/* Gallery Thumbnails */}
          {gallery.length > 1 && (
            <div className="flex items-center space-x-3 overflow-x-auto pb-2">
              {gallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(imgUrl)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                    selectedImage === imgUrl 
                      ? 'border-[#062B67] ring-2 ring-[#062B67]/20 scale-105' 
                      : 'border-gray-200 hover:border-gray-300 opacity-80 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={imgUrl} 
                    alt={`${name} thumb ${idx}`} 
                    onError={(e) => { e.currentTarget.src = BRAND.logoPath; }}
                    className="w-full h-full object-cover" 
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Product Details Info (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#B28A43]">
              {category}
            </span>

            <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-[#111827] mt-1 mb-2">
              {name}
            </h1>

            {/* Rating & Share */}
            <div className="flex items-center justify-between">
              {rating && (
                <div className="flex items-center space-x-2 text-amber-500 font-semibold text-sm">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-gray-900 font-bold">{rating}</span>
                  </div>
                  <span className="text-gray-400 text-xs">({reviewCount} reviews)</span>
                </div>
              )}

              <button 
                onClick={handleShare}
                className="text-xs text-gray-500 hover:text-[#062B67] flex items-center space-x-1 transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copiedLink ? 'Link Copied!' : 'Share Product'}</span>
              </button>
            </div>
          </div>

          {/* Pricing Box in INR */}
          <div className="p-4 bg-white rounded-2xl border border-gray-200/80 shadow-sm flex items-center justify-between">
            <div>
              <div className="flex items-baseline space-x-3">
                <span className="text-3xl font-black font-display text-[#062B67]">
                  {formatPrice(price)}
                </span>
                {originalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    {formatPrice(originalPrice)}
                  </span>
                )}
              </div>
              <span className="text-xs text-[#B28A43] font-semibold block">
                Sample Demo Price (INR) • No real checkout
              </span>
            </div>

            <span className="px-3 py-1 bg-amber-50 text-[#B28A43] border border-[#B28A43]/30 rounded-full text-xs font-bold uppercase">
              Showcase Item
            </span>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed font-light">
            {description || shortDescription}
          </p>

          {/* Feature Bullets */}
          {features.length > 0 && (
            <div className="space-y-2.5 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                Key Product Features
              </h4>
              <ul className="space-y-2">
                {features.map((feat, i) => (
                  <li key={i} className="flex items-start space-x-2 text-xs text-gray-700">
                    <Check className="w-4 h-4 text-[#B28A43] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Primary Action Buttons */}
          <div className="space-y-3 pt-4 border-t border-gray-200">
            <button
              onClick={() => triggerShowcaseModal && triggerShowcaseModal(name)}
              className="w-full py-4 bg-[#062B67] hover:bg-[#031C44] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <ShoppingBag className="w-4 h-4 text-[#D2B36B]" />
              <span>Showcase Action (Coming Soon)</span>
            </button>

            <button
              onClick={() => toggleWishlist && toggleWishlist(id)}
              className={`w-full py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 border ${
                isWishlisted 
                  ? 'bg-rose-50 text-rose-600 border-rose-200' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'
              }`}
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current text-rose-500' : ''}`} />
              <span>{isWishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}</span>
            </button>
          </div>

          {/* Technical Specifications Table */}
          {Object.keys(specifications).length > 0 && (
            <div className="pt-4 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 flex items-center space-x-1.5">
                <Layers className="w-4 h-4 text-[#062B67]" />
                <span>Technical Specifications</span>
              </h4>

              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden divide-y divide-gray-100 text-xs">
                {Object.entries(specifications).map(([key, val]) => (
                  <div key={key} className="flex justify-between px-4 py-2.5">
                    <span className="text-gray-500 font-medium">{key}</span>
                    <span className="text-[#111827] font-semibold">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Guarantee Note */}
          <div className="p-3 bg-navy-50/50 rounded-xl border border-blue-100 flex items-center space-x-3">
            <ShieldCheck className="w-5 h-5 text-[#062B67] shrink-0" />
            <p className="text-[11px] text-gray-600">
              Interactive product showcase presentation for {name}. No payment SDK or database connection required.
            </p>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="pt-12 border-t border-gray-200 space-y-8">
          <SectionHeading
            badge="Recommended Upgrades"
            title="Related Showcase Items"
            subtitle={`Explore other items in the ${category} collection.`}
          />
          <ProductGrid
            products={relatedProducts}
            wishlist={wishlist}
            onToggleWishlist={toggleWishlist}
            onTriggerShowcaseModal={triggerShowcaseModal}
          />
        </div>
      )}
    </div>
  );
}
