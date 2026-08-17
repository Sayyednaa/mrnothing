import React from 'react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, ShoppingBag } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-6">
      <div className="w-20 h-20 bg-navy-deep/5 dark:bg-white/10 text-navy-deep dark:text-gold-accent rounded-3xl flex items-center justify-center mx-auto border border-navy-deep/10 dark:border-white/20 shadow-sm">
        <span className="font-display font-black text-3xl text-gold-accent">404</span>
      </div>

      <h1 className="text-4xl font-extrabold font-display text-navy-dark dark:text-white">
        Page Not Found
      </h1>

      <p className="text-sm text-text-secondary dark:text-gray-300 max-w-md mx-auto leading-relaxed">
        The route or resource you requested does not exist in the Mr.Nothing showcase catalogue.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
        <Link
          to="/"
          className="w-full sm:w-auto px-6 py-3 bg-navy-deep dark:bg-gold-accent text-white dark:text-navy-dark font-bold text-sm rounded-xl transition-all shadow flex items-center justify-center gap-2"
        >
          <HomeIcon className="w-4 h-4 text-gold-accent dark:text-navy-dark" />
          Return to Home
        </Link>
        <Link
          to="/shop"
          className="w-full sm:w-auto px-6 py-3 bg-surface-offwhite dark:bg-navy-surface hover:bg-gray-200 dark:hover:bg-navy-muted text-navy-dark dark:text-white font-bold text-sm rounded-xl border border-gray-200 dark:border-navy-muted transition-all flex items-center justify-center gap-2"
        >
          <ShoppingBag className="w-4 h-4 text-navy-deep dark:text-gold-accent" />
          Explore Shop Collection
        </Link>
      </div>
    </div>
  );
};
