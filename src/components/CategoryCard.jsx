import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';

export const CategoryCard = ({ category }) => {
  return (
    <Link
      to={`/category/${category.slug}`}
      className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col h-80 border border-gray-200/60"
      aria-label={`Explore ${category.name} category`}
    >
      {/* Background Image with Overlay */}
      <img
        src={category.image}
        alt={category.name}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

      {/* Top Badge */}
      <div className="relative z-10 p-6 flex justify-between items-start">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-md text-gold-soft text-xs font-bold uppercase tracking-wider rounded-full border border-white/20">
          <Layers className="w-3.5 h-3.5" />
          {category.itemCount} Showcase Items
        </span>
      </div>

      {/* Bottom Content */}
      <div className="relative z-10 mt-auto p-6 text-white">
        <h3 className="text-2xl font-bold font-display group-hover:text-gold-soft transition-colors mb-2">
          {category.name}
        </h3>
        <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed mb-4">
          {category.shortDescription}
        </p>

        <div className="inline-flex items-center gap-2 text-xs font-bold text-gold-accent group-hover:translate-x-1 transition-transform">
          Explore category
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
};
