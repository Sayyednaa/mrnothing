import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, ArrowRight, Star } from 'lucide-react';
import { formatPrice } from '../config/site';
import { useWishlist } from '../context/WishlistContext';
import { useShowcaseCart } from '../context/ShowcaseCartContext';
import { useToast } from '../context/ToastContext';
import { QuickViewModal } from './QuickViewModal';

export const ProductCard = ({ product }) => {
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { triggerShowcaseModal } = useShowcaseCart();
  const { addToast } = useToast();

  const isSaved = isInWishlist(product.id);

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
    addToast(
      isSaved ? `Removed ${product.name} from wishlist` : `Saved ${product.name} to wishlist`,
      isSaved ? 'info' : 'success'
    );
  };

  const handleShowcaseClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    triggerShowcaseModal(product);
  };

  return (
    <>
      <div className="group relative bg-white dark:bg-navy-dark rounded-2xl border border-gray-100 dark:border-navy-muted shadow-sm hover:shadow-xl dark:hover:shadow-navy-glow transition-all duration-300 flex flex-col overflow-hidden">
        {/* Image & Badges */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-offwhite dark:bg-navy-surface img-zoom-container">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            {product.badge && (
              <span className="px-2.5 py-1 bg-navy-dark/90 backdrop-blur-md text-gold-accent text-[11px] font-extrabold uppercase tracking-wider rounded-md border border-gold-accent/30 shadow">
                {product.badge}
              </span>
            )}
            <span className="px-2.5 py-0.5 bg-white/90 dark:bg-navy-dark/90 backdrop-blur-md text-gray-700 dark:text-gray-200 text-[10px] font-bold uppercase tracking-wider rounded-md border border-gray-200 dark:border-navy-muted">
              Showcase Only
            </span>
          </div>

          {/* Top Right Wishlist Toggle */}
          <button
            onClick={handleWishlistToggle}
            className={`absolute top-3 right-3 p-2.5 rounded-full shadow-md backdrop-blur-md transition-all z-10 ${
              isSaved
                ? 'bg-red-500 text-white'
                : 'bg-white/90 dark:bg-navy-dark/90 text-gray-600 dark:text-gray-300 hover:text-red-500 hover:bg-white'
            }`}
            aria-label={isSaved ? 'Remove from wishlist' : 'Add to wishlist'}
            title={isSaved ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Heart className={`w-4 h-4 ${isSaved ? 'fill-white' : ''}`} />
          </button>

          {/* Quick View Hover Overlay Button */}
          <div className="absolute inset-x-0 bottom-3 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hidden sm:block">
            <button
              onClick={() => setQuickViewOpen(true)}
              className="w-full py-2.5 bg-navy-dark/90 hover:bg-navy-dark text-white text-xs font-semibold rounded-xl backdrop-blur-md transition-colors flex items-center justify-center gap-2 shadow-lg border border-gold-accent/20"
            >
              <Eye className="w-4 h-4 text-gold-accent" />
              Quick View
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-text-secondary dark:text-text-darksecondary mb-1">
              <span className="font-semibold text-navy-deep dark:text-gold-accent uppercase tracking-wider text-[11px]">
                {product.category}
              </span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-[11px]">
                <Star className="w-3 h-3 fill-amber-400" />
                {product.rating}
              </div>
            </div>

            <Link to={`/product/${product.slug}`}>
              <h3 className="font-display font-bold text-base text-navy-dark dark:text-white group-hover:text-gold-dark dark:group-hover:text-gold-soft transition-colors line-clamp-1 mb-1.5">
                {product.name}
              </h3>
            </Link>

            <p className="text-xs text-text-secondary dark:text-text-darksecondary line-clamp-2 leading-relaxed mb-4">
              {product.shortDescription}
            </p>
          </div>

          {/* Price & Actions */}
          <div className="pt-3 border-t border-gray-100 dark:border-navy-muted flex items-center justify-between gap-2">
            <div>
              <span className="text-xs text-gray-400 block font-medium">Sample price</span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-lg font-extrabold text-navy-deep dark:text-gold-soft">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-gray-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Link
                to={`/product/${product.slug}`}
                className="px-3.5 py-2 bg-surface-offwhite dark:bg-navy-surface hover:bg-gray-200 dark:hover:bg-navy-muted text-navy-dark dark:text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-1"
              >
                Details
                <ArrowRight className="w-3 h-3" />
              </Link>
              <button
                onClick={handleShowcaseClick}
                className="px-3.5 py-2 bg-navy-deep dark:bg-gold-accent hover:bg-navy-dark dark:hover:bg-gold-dark text-white dark:text-navy-dark text-xs font-bold rounded-xl transition-colors shadow-sm"
                title="Showcase Only"
              >
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      {quickViewOpen && (
        <QuickViewModal product={product} onClose={() => setQuickViewOpen(false)} />
      )}
    </>
  );
};
