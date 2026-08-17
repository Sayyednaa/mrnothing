import React from 'react';
import { SearchX, RefreshCw } from 'lucide-react';

export default function EmptyState({ 
  title = "No products found", 
  description = "Try adjusting your search criteria, price range, or category filter to discover items.", 
  onReset 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center max-w-md mx-auto my-8 shadow-sm">
      <div className="w-16 h-16 bg-[#062B67]/10 text-[#062B67] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#B28A43]/20">
        <SearchX className="w-8 h-8 text-[#B28A43]" />
      </div>
      <h3 className="text-xl font-bold text-[#031C44] font-heading mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>
      {onReset && (
        <button
          onClick={onReset}
          className="inline-flex items-center space-x-2 bg-[#031C44] hover:bg-[#062B67] text-white px-5 py-2.5 rounded-xl text-xs font-semibold shadow-md transition-all border border-[#B28A43]/30"
        >
          <RefreshCw className="w-3.5 h-3.5 text-[#D2B36B]" />
          <span>Clear All Filters</span>
        </button>
      )}
    </div>
  );
}
