import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, ShoppingBag, Star } from 'lucide-react';
import { BRAND, formatPrice } from '../data/constants';

export default function ProductCard({ 
  product, 
  isWishlisted = false, 
  onToggleWishlist, 
  onTriggerShowcaseModal 
}) {
  const {
    id,
    slug,
    name,
    category,
    price,
    originalPrice,
    image,
    shortDescription,
    badge,
    rating,
    reviewCount
  } = product;

  const [imgSrc, setImgSrc] = useState(image || BRAND.logoPath);

  return (
    <div className="group relative flex flex-col bg-white rounded-2xl border border-gray-200/80 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#B28A43]/40">
      {/* Product Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 flex items-center justify-center">
        <img 
          src={imgSrc} 
          alt={name}
          onError={() => setImgSrc(BRAND.logoPath)}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {badge && (
            <span className="px-2.5 py-1 text-[11px] font-semibold tracking-wider text-white uppercase bg-[#062B67] rounded-md shadow-sm">
              {badge}
            </span>
          )}
          <span className="px-2.5 py-1 text-[11px] font-semibold tracking-wider text-[#062B67] uppercase bg-white/95 backdrop-blur-sm rounded-md shadow-sm border border-gray-200">
            Showcase Only
          </span>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (onToggleWishlist) onToggleWishlist(id);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all duration-200 z-10 ${
            isWishlisted 
              ? 'bg-rose-50 text-rose-500 border border-rose-200 shadow-md' 
              : 'bg-white/80 text-gray-600 hover:bg-white hover:text-rose-500 border border-white/40 shadow-sm'
          }`}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current text-rose-500' : ''}`} />
        </button>

        {/* Quick View Hover Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
          <Link
            to={`/product/${slug}`}
            className="p-3 bg-white text-[#062B67] rounded-xl font-medium text-xs shadow-lg hover:bg-[#062B67] hover:text-white transition-colors flex items-center space-x-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
          >
            <Eye className="w-4 h-4" />
            <span>View Details</span>
          </Link>
        </div>
      </div>

      {/* Card Details */}
      <div className="flex flex-col flex-grow p-5">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-1.5">
          <span className="font-medium text-[#B28A43] uppercase tracking-wider text-[11px]">
            {category}
          </span>
          {rating && (
            <div className="flex items-center space-x-1 text-amber-500 font-medium">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{rating}</span>
              <span className="text-gray-400 text-[10px]">({reviewCount})</span>
            </div>
          )}
        </div>

        <Link to={`/product/${slug}`} className="group-hover:text-[#062B67] transition-colors">
          <h3 className="font-display text-lg font-bold text-[#111827] line-clamp-1 mb-1">
            {name}
          </h3>
        </Link>

        <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-4 flex-grow font-light">
          {shortDescription}
        </p>

        {/* Price & Action in INR */}
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between mt-auto">
          <div>
            <div className="flex items-baseline space-x-2">
              <span className="text-lg font-bold text-[#062B67] font-display">
                {formatPrice(price)}
              </span>
              {originalPrice && (
                <span className="text-xs text-gray-400 line-through">
                  {formatPrice(originalPrice)}
                </span>
              )}
            </div>
            <span className="text-[10px] text-[#B28A43] font-medium block">
              Sample Price (INR)
            </span>
          </div>

          <button
            onClick={() => {
              if (onTriggerShowcaseModal) onTriggerShowcaseModal(name);
            }}
            className="py-2 px-3 bg-gray-100 hover:bg-[#062B67] text-gray-800 hover:text-white rounded-xl text-xs font-semibold transition-all duration-200 flex items-center space-x-1.5"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Showcase</span>
          </button>
        </div>
      </div>
    </div>
  );
}
