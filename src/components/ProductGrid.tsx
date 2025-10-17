import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCategoryHeader from './ProductCategoryHeader';

const ProductGrid = () => {
  const [visibleCards, setVisibleCards] = useState(new Set<string>());
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      name: 'Air Fresheners',
      description: 'Premium quality air fresheners for homes and offices',
      image: '/lovable-uploads/4c4d6506-4f79-49c9-bfb0-0e0281361301.png',
      path: '/air-fresheners',
      keywords: ['Premium', 'Long-lasting', 'Fresh', 'Natural']
    },
    {
      id: 2,
      name: 'Battery Cells',
      description: 'High-performance battery cells for all devices',
      image: '/lovable-uploads/9volt.jpg',
      path: '/battery-cells',
      keywords: ['High-performance', 'Durable', 'Reliable', 'Professional']
    },
    {
      id: 3,
      name: 'Shoe Polishers',
      description: 'Professional shoe care and polishing products',
      image: '/lovable-uploads/47a64181-3fa6-4ea4-8937-3429ab15adbe.png',
      path: '/shoe-polishers',
      keywords: ['Professional', 'Premium', 'Quality', 'Expert']
    },
    {
      id: 4,
      name: 'Cleaning & Household',
      description: 'Complete household cleaning solutions',
      image: '/lovable-uploads/household-cleaner.jpg',
      path: '/cleaning-household',
      keywords: ['Complete', 'Effective', 'Professional', 'Trusted']
    },
    {
      id: 5,
      name: 'Insecticides',
      description: 'Effective pest control solutions',
      image: '/lovable-uploads/feae0d8d-5edb-4245-8ce7-2741ec9a9859.png',
      path: '/insecticides',
      keywords: ['Effective', 'Safe', 'Professional', 'Powerful']
    },
    {
      id: 6,
      name: 'Paradise Hand Wash',
      description: 'Nourishing hand cleansers with delightful fragrances',
      image: '/lovable-uploads/8ffe8251-dbbd-4cf1-a793-040b9510b79d.png',
      path: '/paradise-hand-wash',
      keywords: ['Nourishing', 'Fragrant', 'Gentle', 'Natural']
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = (entry.target as HTMLElement).dataset.cardId;
            if (cardId) {
              setVisibleCards(prev => new Set(prev).add(cardId));
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const handleCategoryClick = (path: string) => {
    navigate(path);
  };

  return (
    <section id="products" className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ProductCategoryHeader
          title="PowerPlus Product Range"
          description="fast-moving consumer goods designed for modern lifestyles"
          keywords={['Premium', 'Quality', 'Trusted', 'Professional', 'Innovative']}
        />

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              data-card-id={category.id.toString()}
              className={`product-card group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform cursor-pointer ${
                visibleCards.has(category.id.toString()) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => handleCategoryClick(category.path)}
            >
              <div className="relative h-64 overflow-hidden bg-gradient-to-b from-gray-50 to-white p-4 flex items-center justify-center">
                <img
                  src={category.image}
                  alt={category.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">Click to explore</p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-progressive-dark-grey mb-3 group-hover:text-progressive-red transition-colors duration-200">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>
                <button className="w-full bg-gradient-to-r from-progressive-red to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
                  Explore Range
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
