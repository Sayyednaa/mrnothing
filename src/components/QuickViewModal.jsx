import React, { useState } from 'react';
import { X, Heart, Star, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../config/site';
import { useWishlist } from '../context/WishlistContext';
import { useShowcaseCart } from '../context/ShowcaseCartContext';
import { useToast } from '../context/ToastContext';

export const QuickViewModal = ({ product, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(product?.image);
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { triggerShowcaseModal } = useShowcaseCart();
  const { addToast } = useToast();

  if (!product) return null;

  const isSaved = isInWishlist(product.id);

  const handleWishlistClick = () => {
    toggleWishlist(product);
    addToast(
      isSaved ? `Removed ${product.name} from wishlist` : `Added ${product.name} to wishlist`,
      isSaved ? 'info' : 'success'
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/70 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-white dark:bg-navy-dark rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-navy-muted flex flex-col md:flex-row max-h-[90vh]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-navy-deep dark:hover:text-white hover:bg-gray-100 dark:hover:bg-navy-surface rounded-full transition-colors bg-white/80 dark:bg-navy-dark/80 backdrop-blur-sm"
          aria-label="Close quick view"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gallery column */}
        <div className="w-full md:w-1/2 p-6 bg-surface-offwhite dark:bg-navy-surface flex flex-col justify-between border-b md:border-b-0 md:border-r border-gray-200 dark:border-navy-muted">
          <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-4 border border-gray-200/80 dark:border-navy-muted bg-white dark:bg-navy-dark">
            <img
              src={selectedImage || product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <span className="absolute top-3 left-3 px-3 py-1 bg-navy-deep text-gold-soft text-xs font-bold uppercase tracking-wider rounded-full shadow-md">
                {product.badge}
              </span>
            )}
          </div>

          {/* Thumbnails */}
          {product.gallery && product.gallery.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1">
              {product.gallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(imgUrl)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                    (selectedImage || product.image) === imgUrl
                      ? 'border-gold-accent scale-105 shadow'
                      : 'border-gray-200 dark:border-navy-muted opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={imgUrl} alt={`${product.name} thumb ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details column */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-navy-deep dark:text-gold-accent uppercase tracking-wider bg-navy-deep/5 dark:bg-white/10 px-2.5 py-1 rounded-md">
                {product.category}
              </span>
              <span className="text-xs text-amber-500 font-semibold flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <h2 className="text-2xl font-bold font-display text-navy-dark dark:text-white mb-2">
              {product.name}
            </h2>

            <p className="text-sm text-text-secondary dark:text-gray-300 mb-4 leading-relaxed">
              {product.shortDescription}
            </p>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-2xl font-extrabold text-navy-deep dark:text-gold-soft">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through font-medium">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              <span className="ml-auto text-xs font-bold px-2.5 py-1 bg-amber-50 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-700/50 rounded-md">
                Demo Price
              </span>
            </div>

            {/* Key Features Bullet list */}
            {product.features && (
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy-dark dark:text-white mb-2">
                  Key Highlights
                </h4>
                <ul className="space-y-1.5">
                  {product.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="text-xs text-gray-600 dark:text-gray-300 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-gold-accent shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="space-y-3 pt-4 border-t border-gray-100 dark:border-navy-muted">
            <div className="flex gap-3">
              <button
                onClick={() => {
                  onClose();
                  triggerShowcaseModal(product);
                }}
                className="flex-1 py-3 px-4 bg-navy-deep dark:bg-gold-accent hover:bg-navy-dark dark:hover:bg-gold-dark text-white dark:text-navy-dark text-sm font-semibold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                Showcase Only
              </button>

              <button
                onClick={handleWishlistClick}
                className={`p-3 rounded-xl border transition-all ${
                  isSaved
                    ? 'border-red-200 bg-red-50 text-red-600'
                    : 'border-gray-200 dark:border-navy-muted text-gray-600 dark:text-gray-300 hover:border-gray-300 hover:bg-gray-50 dark:hover:bg-navy-surface'
                }`}
                title={isSaved ? 'Remove from Wishlist' : 'Add to Wishlist'}
              >
                <Heart className={`w-5 h-5 ${isSaved ? 'fill-red-600' : ''}`} />
              </button>
            </div>

            <Link
              to={`/product/${product.slug}`}
              onClick={onClose}
              className="w-full py-2.5 px-4 bg-surface-offwhite dark:bg-navy-surface hover:bg-gray-200 dark:hover:bg-navy-muted text-navy-dark dark:text-white text-xs font-bold rounded-xl transition-colors text-center flex items-center justify-center gap-2"
            >
              View Full Product Specifications
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
