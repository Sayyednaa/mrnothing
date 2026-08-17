import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function SectionHeading({ 
  badge, 
  title, 
  subtitle, 
  linkUrl, 
  linkText = 'View All',
  centered = false 
}) {
  return (
    <div className={`mb-10 sm:mb-12 ${centered ? 'text-center' : 'flex flex-col sm:flex-row sm:items-end justify-between gap-4'}`}>
      <div className={centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}>
        {badge && (
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#B28A43] bg-[#B28A43]/10 px-3 py-1 rounded-full mb-3 border border-[#B28A43]/20">
            {badge}
          </span>
        )}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#031C44] font-heading tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {linkUrl && !centered && (
        <Link
          to={linkUrl}
          className="inline-flex items-center space-x-1.5 text-sm font-semibold text-[#062B67] hover:text-[#B28A43] transition-colors group shrink-0"
        >
          <span>{linkText}</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      )}
    </div>
  );
}
