import React from 'react';
import { X, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';
import { useShowcaseCart } from '../context/ShowcaseCartContext';
import { SITE_CONFIG, formatPrice } from '../config/site';

export const ShowcaseModal = () => {
  const { isModalOpen, modalProduct, closeShowcaseModal } = useShowcaseCart();

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/70 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-white dark:bg-navy-dark rounded-2xl shadow-2xl border border-gray-100 dark:border-navy-muted overflow-hidden text-gray-900 dark:text-white">
        {/* Header decoration bar */}
        <div className="h-2 bg-gradient-to-r from-navy-deep via-gold-accent to-navy-dark" />

        <button
          onClick={closeShowcaseModal}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-navy-deep dark:hover:text-white hover:bg-gray-100 dark:hover:bg-navy-surface rounded-full transition-colors"
          aria-label="Close showcase modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 md:p-8">
          <div className="w-14 h-14 bg-navy-deep/5 dark:bg-white/10 rounded-2xl flex items-center justify-center text-navy-deep dark:text-gold-accent mb-6">
            <Sparkles className="w-7 h-7 text-gold-accent" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-accent/10 text-gold-dark dark:text-gold-soft text-xs font-semibold uppercase tracking-wider rounded-full mb-3">
            <AlertCircle className="w-3.5 h-3.5" />
            Showcase Presentation Mode
          </div>

          <h3 className="text-2xl font-bold font-display text-navy-dark dark:text-white mb-3">
            {modalProduct ? modalProduct.name : "Product Showcase Notice"}
          </h3>

          <div className="p-4 bg-surface-offwhite dark:bg-navy-surface border border-gray-200/80 dark:border-navy-muted rounded-xl mb-6 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="font-semibold text-navy-deep dark:text-gold-soft mb-1">
              "This is a showcase experience. Purchasing will be available in a future release."
            </p>
            <p className="text-xs text-text-secondary dark:text-gray-400">
              {SITE_CONFIG.name} is currently highlighting curated product designs for discovery. Real checkout, payment processing, and order shipping are disabled. Contact support at <a href={`mailto:${SITE_CONFIG.contact.email}`} className="underline text-gold-accent">{SITE_CONFIG.contact.email}</a>.
            </p>
          </div>

          {modalProduct && (
            <div className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-navy-surface rounded-lg mb-6 border border-gray-100 dark:border-navy-muted">
              <img
                src={modalProduct.image}
                alt={modalProduct.name}
                className="w-16 h-16 object-cover rounded-md border border-gray-200 dark:border-navy-muted"
              />
              <div>
                <p className="font-semibold text-sm text-navy-dark dark:text-white">{modalProduct.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{modalProduct.category}</p>
                <p className="text-xs font-bold text-gold-accent mt-0.5">Sample Price: {formatPrice(modalProduct.price)}</p>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={closeShowcaseModal}
              className="w-full py-3 px-6 bg-navy-deep dark:bg-gold-accent hover:bg-navy-dark dark:hover:bg-gold-dark text-white dark:text-navy-dark text-sm font-semibold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              Continue Exploring
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
