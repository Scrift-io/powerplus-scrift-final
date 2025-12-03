import React from 'react';
import ProductRangeBanner from './ProductRangeBanner';

const productRanges = [
  {
    id: 'battery-cells',
    name: 'Battery Cells',
    description: 'Power solutions that keep your devices running strong',
    path: '/battery-cells',
    bannerImage: '/lovable-uploads/Battrey.png'
  },
  {
    id: 'air-fresheners',
    name: 'Air Fresheners',
    description: 'Transform your surroundings with delightful fragrances',
    path: '/air-fresheners',
    bannerImage: '/lovable-uploads/Room_Spray_Range.png'
  },
  {
    id: 'cleaning-household',
    name: 'Cleaning & Household',
    description: 'Complete solutions for a spotless home',
    path: '/cleaning-household',
    bannerImage: '/lovable-uploads/House_Hold_Range.png'
  },
  {
    id: 'insecticides',
    name: 'Insecticides',
    description: 'Effective protection against household pests',
    path: '/insecticides',
    bannerImage: '/lovable-uploads/aerosol_Range_Upd.png'
  },
  {
    id: 'shoe-polishers',
    name: 'Shoe Care Products',
    description: 'Professional shoe care for lasting impressions',
    path: '/shoe-polishers',
    bannerImage: '/lovable-uploads/Shoe_Care_Range_new.png'
  },
  {
    id: 'paradise-hand-wash',
    name: 'Paradise Hand Wash',
    description: 'Nourishing hand cleansers with delightful fragrances',
    path: '/paradise-hand-wash',
    bannerImage: '/lovable-uploads/Paradise_Liquid_Soap.png'
  }
];

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

      {/* Product Range Banners */}
      <div className="relative">
        {productRanges.map((range, index) => (
          <div
            key={range.id}
            className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
          >
            <ProductRangeBanner
              title={range.name}
              description={range.description}
              bannerImage={range.bannerImage}
              categoryPath={range.path}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCarouselsSection;
