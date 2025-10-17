
import React, { useState, useEffect } from 'react';

interface ProductPageHeaderProps {
  title: string;
  description: string;
  keywords: string[];
}

const ProductPageHeader: React.FC<ProductPageHeaderProps> = ({
  title,
  description,
  keywords
}) => {
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);

  useEffect(() => {
    const keywordTimer = setInterval(() => {
      setCurrentKeywordIndex(prev => (prev + 1) % keywords.length);
    }, 2500);

    return () => clearInterval(keywordTimer);
  }, [keywords.length]);

  // Create a dynamic tagline based on the product category
  const getTagline = () => {
    if (title.toLowerCase().includes('air freshener')) {
      return 'scents that transform your space.';
    } else if (title.toLowerCase().includes('battery')) {
      return 'power that keeps you going.';
    } else if (title.toLowerCase().includes('shoe')) {
      return 'care that makes a difference.';
    } else if (title.toLowerCase().includes('cleaning')) {
      return 'solutions for every home.';
    } else if (title.toLowerCase().includes('insecticide')) {
      return 'protection you can trust.';
    } else if (title.toLowerCase().includes('hand wash')) {
      return 'care that feels luxurious.';
    }
    return 'quality that exceeds expectations.';
  };

  return (
    <section className="pt-36 pb-16 bg-gradient-to-r from-progressive-dark-grey/95 to-gray-800/95 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/20 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/20 rounded-full blur-md animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {title}
        </h1>
        
        {/* Redesigned tagline with integrated keyword animation */}
        <div className="text-lg md:text-xl lg:text-2xl text-white/90 mb-4 max-w-4xl mx-auto leading-relaxed">
          <div className="mb-3">
            <span 
              key={currentKeywordIndex} 
              className="inline-block font-bold text-progressive-red animate-fade-in"
              style={{ animationDuration: '0.8s' }}
            >
              {keywords[currentKeywordIndex]}
            </span>
            <span className="ml-2">{getTagline()}</span>
          </div>
          <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Premium quality products for your everyday needs.
          </p>
        </div>

        {/* Decorative divider */}
        <div className="flex justify-center mt-8">
          <div className="w-24 h-1 bg-progressive-red rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default ProductPageHeader;
