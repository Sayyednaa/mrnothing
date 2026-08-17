import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ 
  products = [], 
  wishlist = [], 
  onToggleWishlist, 
  onTriggerShowcaseModal,
  columns = '4'
}) {
  if (!products || products.length === 0) {
    return null;
  }

  const gridCols = {
    '3': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    '4': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
  }[columns] || 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';

  return (
    <div className={`grid ${gridCols} gap-6 sm:gap-8`}>
      {products.map((product) => (
        <ProductCard
          key={product.id || product.slug}
          product={product}
          isWishlisted={wishlist.includes(product.id)}
          onToggleWishlist={onToggleWishlist}
          onTriggerShowcaseModal={onTriggerShowcaseModal}
        />
      ))}
    </div>
  );
}
