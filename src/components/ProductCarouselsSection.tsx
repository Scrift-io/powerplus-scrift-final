import React from 'react';
import ProductCarousel from './ProductCarousel';
import { productCategories } from '@/data/products';

const ProductCarouselsSection = () => {
  return (
    <section id="products" className="relative overflow-hidden">
      {/* Section Title */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-progressive-dark-grey mb-4">
            PowerPlus Product Range
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our complete collection of fast-moving consumer goods designed for modern lifestyles
          </p>
        </div>
      </div>

      {/* Product Carousels */}
      <div className="relative">
        {productCategories.map((category, index) => (
          <div
            key={category.id}
            className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
          >
            <ProductCarousel
              title={category.name}
              description={category.description}
              products={category.products}
              categoryPath={category.path}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCarouselsSection;
