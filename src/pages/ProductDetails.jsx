import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Star, ShieldCheck, ChevronRight, AlertCircle, ArrowLeft, Share2 } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { SITE_CONFIG, formatPrice } from '../config/site';
import { useWishlist } from '../context/WishlistContext';
import { useShowcaseCart } from '../context/ShowcaseCartContext';
import { useToast } from '../context/ToastContext';
import { ProductCard } from '../components/ProductCard';

export const ProductDetails = () => {
  const { slug } = useParams();
  const product = PRODUCTS.find((p) => p.slug === slug);

  const [selectedImage, setSelectedImage] = useState(product?.image);
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { triggerShowcaseModal } = useShowcaseCart();
  const { addToast } = useToast();

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-extrabold text-navy-dark dark:text-white mb-4">Product Not Found</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">The product you are looking for does not exist in our showcase collection.</p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 px-6 py-3 bg-navy-deep dark:bg-gold-accent text-white dark:text-navy-dark font-bold rounded-xl"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop Collection
        </Link>
      </div>
    );
  }

  const isSaved = isInWishlist(product.id);
  const relatedProducts = PRODUCTS.filter(
    (p) => p.categorySlug === product.categorySlug && p.id !== product.id
  ).slice(0, 4);

  const handleWishlistClick = () => {
    toggleWishlist(product);
    addToast(
      isSaved ? `Removed ${product.name} from wishlist` : `Added ${product.name} to wishlist`,
      isSaved ? 'info' : 'success'
    );
  };

  const handleShareClick = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      addToast('Product link copied to clipboard!', 'success');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs font-semibold text-text-secondary dark:text-gray-400" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-navy-deep dark:hover:text-gold-accent transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <Link to="/shop" className="hover:text-navy-deep dark:hover:text-gold-accent transition-colors">Shop</Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <Link to={`/category/${product.categorySlug}`} className="hover:text-navy-deep dark:hover:text-gold-accent transition-colors uppercase">
          {product.category}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <span className="text-navy-dark dark:text-white font-bold truncate max-w-xs">{product.name}</span>
      </nav>

      {/* Main Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Gallery (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-surface-offwhite dark:bg-navy-surface border border-gray-200 dark:border-navy-muted shadow-sm">
            <img
              src={selectedImage || product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 px-3 py-1 bg-navy-dark text-gold-soft text-xs font-bold uppercase tracking-wider rounded-full shadow border border-gold-accent/30">
                {product.badge}
              </span>
            )}
            <span className="absolute top-4 right-4 px-3 py-1 bg-white/90 dark:bg-navy-dark/90 backdrop-blur-md text-navy-dark dark:text-white text-xs font-bold uppercase tracking-wider rounded-full shadow border border-gray-200 dark:border-navy-muted">
              Showcase Only
            </span>
          </div>

          {/* Thumbnails */}
          {product.gallery && product.gallery.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.gallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(imgUrl)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                    (selectedImage || product.image) === imgUrl
                      ? 'border-gold-accent scale-105 shadow-md'
                      : 'border-gray-200 dark:border-navy-muted opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={imgUrl} alt={`${product.name} thumb ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Product Details & Sticky Summary (5 cols) */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <Link
                to={`/category/${product.categorySlug}`}
                className="text-xs font-extrabold text-navy-deep dark:text-gold-accent uppercase tracking-widest bg-navy-deep/5 dark:bg-white/10 px-3 py-1 rounded-md"
              >
                {product.category}
              </Link>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                <Star className="w-4 h-4 fill-amber-400" />
                {product.rating} ({product.reviewCount} reviews)
              </div>
            </div>

            <h1 className="text-3xl font-extrabold font-display text-navy-dark dark:text-white mb-3">
              {product.name}
            </h1>

            <p className="text-sm text-text-secondary dark:text-gray-300 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Pricing Card */}
            <div className="p-4 bg-surface-offwhite dark:bg-navy-surface border border-gray-200 dark:border-navy-muted rounded-2xl flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 block">Sample Price</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-navy-deep dark:text-gold-soft">{formatPrice(product.price)}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
                  )}
                </div>
              </div>
              <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/40 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-700/50 text-xs font-bold rounded-lg">
                Demo Pricing
              </span>
            </div>

            {/* Showcase Disclaimer Notice */}
            <div className="p-4 bg-navy-deep/5 dark:bg-white/10 border border-navy-deep/10 dark:border-white/10 rounded-xl mb-6 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-navy-deep dark:text-gold-accent shrink-0 mt-0.5" />
              <p className="text-xs text-navy-dark dark:text-gray-300 leading-relaxed">
                <strong>Showcase Item Notice:</strong> This product is presented for design and discovery purposes. No checkout, payment, or order processing functionality is enabled. Support: <a href={`mailto:${SITE_CONFIG.contact.email}`} className="underline font-bold text-gold-accent">{SITE_CONFIG.contact.email}</a>.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <div className="flex gap-3">
                <button
                  onClick={() => triggerShowcaseModal(product)}
                  className="flex-1 py-4 px-6 bg-navy-deep dark:bg-gold-accent hover:bg-navy-dark dark:hover:bg-gold-dark text-white dark:text-navy-dark text-sm font-bold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 border border-gold-accent/30"
                >
                  Coming Soon (Showcase Only)
                </button>

                <button
                  onClick={handleWishlistClick}
                  className={`p-4 rounded-xl border transition-all ${
                    isSaved
                      ? 'border-red-300 bg-red-50 text-red-600'
                      : 'border-gray-200 dark:border-navy-muted text-gray-700 dark:text-gray-300 hover:border-gray-300 hover:bg-gray-50 dark:hover:bg-navy-surface'
                  }`}
                  title={isSaved ? 'Remove from Wishlist' : 'Add to Wishlist'}
                >
                  <Heart className={`w-5 h-5 ${isSaved ? 'fill-red-600' : ''}`} />
                </button>

                <button
                  onClick={handleShareClick}
                  className="p-4 rounded-xl border border-gray-200 dark:border-navy-muted text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-navy-surface transition-colors"
                  title="Share product link"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Specifications Table */}
          {product.specifications && (
            <div className="pt-6 border-t border-gray-200 dark:border-navy-muted">
              <h3 className="text-sm font-bold uppercase tracking-wider text-navy-dark dark:text-white mb-4">
                Specifications
              </h3>
              <div className="bg-white dark:bg-navy-dark border border-gray-200 dark:border-navy-muted rounded-xl overflow-hidden divide-y divide-gray-100 dark:divide-navy-muted text-xs">
                {Object.entries(product.specifications).map(([key, val]) => (
                  <div key={key} className="flex justify-between p-3">
                    <span className="font-semibold text-gray-500 dark:text-gray-400">{key}</span>
                    <span className="font-bold text-navy-dark dark:text-white">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Features Bullet List */}
          {product.features && (
            <div className="pt-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-navy-dark dark:text-white mb-3">
                Key Features
              </h3>
              <ul className="space-y-2">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="text-xs text-text-secondary dark:text-gray-300 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-gold-accent shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Related Products Grid */}
      {relatedProducts.length > 0 && (
        <section className="pt-16 border-t border-gray-200 dark:border-navy-muted">
          <h2 className="text-2xl font-bold font-display text-navy-dark dark:text-white mb-6">
            Related Showcase Items
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relProd) => (
              <ProductCard key={relProd.id} product={relProd} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
