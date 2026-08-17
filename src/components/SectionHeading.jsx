import React from 'react';

export const SectionHeading = ({ badge, title, subtitle, centered = false, action }) => {
  return (
    <div className={`flex flex-col ${centered ? 'items-center text-center' : 'items-start text-left'} justify-between md:flex-row md:items-end gap-4 mb-10`}>
      <div className="max-w-2xl">
        {badge && (
          <span className="inline-block px-3.5 py-1 bg-navy-deep/5 dark:bg-white/10 text-navy-deep dark:text-gold-accent border border-navy-deep/10 dark:border-white/20 text-xs font-extrabold uppercase tracking-widest rounded-full mb-3">
            {badge}
          </span>
        )}
        <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-navy-dark dark:text-white tracking-tight leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-base text-text-secondary dark:text-gray-300 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {action && (
        <div className="shrink-0 mt-4 md:mt-0">
          {action}
        </div>
      )}
    </div>
  );
};
