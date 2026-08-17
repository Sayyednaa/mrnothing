import React from 'react';
import { SearchX, RefreshCcw } from 'lucide-react';

export const EmptyState = ({ onClearFilters, title = "No products found", message = "We couldn't find any products matching your current criteria. Try adjusting your search query or clear active filters." }) => {
  return (
    <div className="bg-white dark:bg-navy-dark rounded-2xl border border-gray-100 dark:border-navy-muted p-12 text-center max-w-lg mx-auto shadow-sm my-8">
      <div className="w-16 h-16 bg-navy-deep/5 dark:bg-white/10 rounded-full flex items-center justify-center text-navy-deep dark:text-gold-accent mx-auto mb-4">
        <SearchX className="w-8 h-8 stroke-[1.5]" />
      </div>
      <h3 className="text-xl font-bold font-display text-navy-dark dark:text-white mb-2">{title}</h3>
      <p className="text-sm text-text-secondary dark:text-gray-300 mb-6 leading-relaxed">{message}</p>
      {onClearFilters && (
        <button
          onClick={onClearFilters}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy-deep dark:bg-gold-accent text-white dark:text-navy-dark text-xs font-semibold rounded-xl transition-colors shadow"
        >
          <RefreshCcw className="w-3.5 h-3.5" />
          Reset All Filters
        </button>
      )}
    </div>
  );
};
