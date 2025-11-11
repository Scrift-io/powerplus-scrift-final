import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Product } from '@/data/products';

interface ProductCarouselProps {
  title: string;
  description: string;
  products: Product[];
  categoryPath: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  title,
  description,
  products,
  categoryPath,
}) => {
  const navigate = useNavigate();

  const renderStars = (rating: number = 0) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={14}
            className={
              star <= rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-12 md:py-16 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-progressive-dark-grey mb-2">
              {title}
            </h2>
            <p className="text-gray-600 text-lg">{description}</p>
          </div>
          <button
            onClick={() => navigate(categoryPath)}
            className="flex items-center gap-2 text-progressive-red hover:text-red-700 font-semibold transition-colors duration-200 group"
          >
            <span className="hidden sm:inline">View All</span>
            <ChevronRight
              size={20}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </button>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: 'start',
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-4 pb-6 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                  {/* Product Image */}
                  <div className="relative h-56 bg-gradient-to-b from-gray-50 to-white p-0 flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Product Info */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-progressive-dark-grey mb-2 line-clamp-2 group-hover:text-progressive-red transition-colors duration-200">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-grow">
                      {product.description}
                    </p>
                    
                    {/* Rating */}
                    {product.rating && (
                      <div className="flex items-center gap-2 mb-4">
                        {renderStars(product.rating)}
                        <span className="text-sm text-gray-600">
                          {product.rating}
                        </span>
                      </div>
                    )}

                    {/* Action Button */}
                    <button
                      onClick={() => navigate(categoryPath)}
                      className="w-full bg-gradient-to-r from-progressive-red to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md text-sm"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4" />
          <CarouselNext className="hidden md:flex -right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProductCarousel;
