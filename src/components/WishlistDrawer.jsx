import React from 'react';
import { X, Heart, Trash2, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../config/site';
import { useWishlist } from '../context/WishlistContext';
import { useShowcaseCart } from '../context/ShowcaseCartContext';

export const WishlistDrawer = ({ isOpen, onClose }) => {
  const { wishlist, toggleWishlist, clearWishlist } = useWishlist();
  const { triggerShowcaseModal } = useShowcaseCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-navy-dark/60 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white dark:bg-navy-dark shadow-2xl flex flex-col">
          {/* Drawer Header */}
          <div className="px-6 py-5 bg-navy-dark text-white flex items-center justify-between border-b border-navy-muted">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-gold-accent fill-gold-accent" />
              <h2 className="text-lg font-bold font-display">Saved Wishlist</h2>
              <span className="ml-2 text-xs font-semibold px-2.5 py-0.5 bg-navy-deep rounded-full border border-gold-accent/30 text-gold-soft">
                {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-300 hover:text-white rounded-lg hover:bg-navy-muted transition-colors"
              aria-label="Close wishlist"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-6">
            {wishlist.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-gray-100 dark:bg-navy-surface rounded-full flex items-center justify-center text-gray-400 mb-4">
                  <Heart className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h3 className="text-lg font-bold text-navy-dark dark:text-white mb-1">Your wishlist is empty</h3>
                <p className="text-sm text-text-secondary dark:text-gray-400 max-w-xs mb-6">
                  Save products you like to view them later in your personal collection.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-navy-deep text-white text-sm font-semibold rounded-lg hover:bg-navy-dark transition-colors"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {wishlist.map((product) => (
                  <div
                    key={product.id}
                    className="flex gap-4 p-3 border border-gray-100 dark:border-navy-muted rounded-xl hover:border-gray-200 bg-surface-offwhite/50 dark:bg-navy-surface/50 transition-all group"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded-lg border border-gray-200 dark:border-navy-muted shrink-0"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <span className="text-[10px] font-bold tracking-wider uppercase text-navy-deep dark:text-gold-accent">
                            {product.category}
                          </span>
                          <button
                            onClick={() => toggleWishlist(product)}
                            className="text-gray-400 hover:text-red-500 transition-colors p-1"
                            title="Remove from wishlist"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <h4 className="font-semibold text-sm text-navy-dark dark:text-white group-hover:text-gold-dark dark:group-hover:text-gold-soft transition-colors line-clamp-1">
                          {product.name}
                        </h4>
                        <p className="text-xs font-bold text-gold-accent mt-0.5">
                          Sample Price: {formatPrice(product.price)}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 mt-2">
                        <Link
                          to={`/product/${product.slug}`}
                          onClick={onClose}
                          className="text-xs font-semibold text-navy-deep dark:text-gold-soft hover:underline flex items-center gap-1"
                        >
                          View details
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                        <button
                          onClick={() => triggerShowcaseModal(product)}
                          className="ml-auto text-[11px] font-semibold px-2.5 py-1 bg-navy-deep dark:bg-gold-accent text-white dark:text-navy-dark rounded hover:bg-navy-dark transition-colors"
                        >
                          Showcase Only
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Drawer Footer */}
          {wishlist.length > 0 && (
            <div className="p-4 border-t border-gray-100 dark:border-navy-muted bg-surface-offwhite dark:bg-navy-surface flex justify-between items-center">
              <button
                onClick={clearWishlist}
                className="text-xs text-text-secondary dark:text-gray-400 hover:text-red-600 font-medium transition-colors"
              >
                Clear all saved items
              </button>
              <Link
                to="/shop"
                onClick={onClose}
                className="px-4 py-2 bg-navy-deep dark:bg-gold-accent text-white dark:text-navy-dark text-xs font-semibold rounded-lg transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
