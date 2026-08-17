import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { BRAND } from '../data/constants';

export default function CategoryCard({ category }) {
  const { name, slug, tagline, description, image, itemCount } = category;
  const [imgSrc, setImgSrc] = useState(image || BRAND.logoPath);

  return (
    <Link 
      to={`/category/${slug}`}
      className="group relative flex flex-col justify-end overflow-hidden rounded-2xl bg-[#031C44] min-h-[340px] p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-200/50"
    >
      {/* Background Image with Zoom & Dark Gradient Overlay */}
      <img 
        src={imgSrc} 
        alt={name}
        onError={() => setImgSrc(BRAND.logoPath)}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-60"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#031C44] via-[#031C44]/60 to-transparent" />

      {/* Top Badge */}
      <div className="relative z-10 mb-auto flex items-center justify-between">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-md text-white border border-white/20">
          {itemCount} Items
        </span>
        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-[#B28A43] group-hover:border-[#B28A43] group-hover:rotate-45">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mt-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#D2B36B] mb-1 block">
          {tagline}
        </span>
        <h3 className="text-2xl font-bold text-white font-display mb-2 group-hover:text-[#D2B36B] transition-colors">
          {name}
        </h3>
        <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed font-light mb-4">
          {description}
        </p>

        <span className="inline-flex items-center text-xs font-semibold text-white group-hover:text-[#D2B36B] transition-colors">
          Explore Category <span className="ml-1 text-[#B28A43] group-hover:translate-x-1 transition-transform">→</span>
        </span>
      </div>
    </Link>
  );
}
