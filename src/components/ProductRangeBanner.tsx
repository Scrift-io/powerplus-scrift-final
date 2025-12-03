import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductRangeBannerProps {
  title: string;
  description: string;
  bannerImage: string;
  categoryPath: string;
}

const ProductRangeBanner = ({ title, description, bannerImage, categoryPath }: ProductRangeBannerProps) => {
  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Banner Image */}
        <div className="relative w-full h-64 md:h-80 lg:h-96 bg-gradient-to-b from-gray-50 to-white rounded-2xl overflow-hidden flex items-center justify-center p-4 md:p-8">
          <img
            src={bannerImage}
            alt={title}
            className="max-w-full max-h-full object-contain"
            loading="lazy"
          />
        </div>

        {/* Content Below Image */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-progressive-dark-grey mb-3">
            {title}
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-6">
            {description}
          </p>
          <Link to={categoryPath}>
            <Button className="bg-gradient-to-r from-progressive-red to-red-600 hover:from-red-600 hover:to-progressive-red text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
              View Full Range
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductRangeBanner;
