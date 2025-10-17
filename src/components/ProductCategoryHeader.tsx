import React, { useState, useEffect } from 'react';
interface ProductCategoryHeaderProps {
  title: string;
  description: string;
  keywords: string[];
}
const ProductCategoryHeader: React.FC<ProductCategoryHeaderProps> = ({
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
  return <div className="relative w-full py-16 bg-gradient-to-r from-gray-50 to-white mb-8">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-progressive-dark-grey mb-6 leading-tight">
          {title}
        </h1>
        <div className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          
          
        </div>
      </div>
    </div>;
};
export default ProductCategoryHeader;