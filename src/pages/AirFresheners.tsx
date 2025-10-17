import React, { useEffect, useState } from 'react';
import { ArrowLeft, ShoppingCart, Star, Headphones, RotateCcw, Shield, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis } from '@/components/ui/pagination';
import { usePagination } from '@/hooks/usePagination';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductPageHeader from '@/components/ProductPageHeader';

const AirFresheners = () => {
  const [visibleProducts, setVisibleProducts] = useState(new Set<string>());
  const [carouselApi, setCarouselApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const headerKeywords = [
    'Fresh',
    'Aromatic', 
    'Long-lasting',
    'Premium',
    'Natural',
    'Refreshing'
  ];

  const products = [
    {
      id: 1,
      name: 'Paradise Rose Air Freshener',
      description: 'A timeless, romantic floral scent that brings a soft and soothing ambiance.',
      image: '/lovable-uploads/4c4d6506-4f79-49c9-bfb0-0e0281361301.png',
      category: 'Air Freshener',
      rating: 4.6,
      reviews: 276
    },
    {
      id: 2,
      name: 'Paradise Jasmin Air Freshener',
      description: 'Delicate yet rich, this scent adds an elegant, calming aroma to your environment.',
      image: '/lovable-uploads/85401564-fb8b-4169-bb40-b1f37d964a2a.png',
      category: 'Air Freshener',
      rating: 4.5,
      reviews: 167
    },
    {
      id: 3,
      name: 'Paradise Bouquet Air Freshener',
      description: 'A vibrant mix of blooming flowers that fills your space with natural beauty.',
      image: '/lovable-uploads/690e635a-9d1e-4a02-8dca-5a4a092e3681.png',
      category: 'Air Freshener',
      rating: 4.8,
      reviews: 245
    },
    {
      id: 4,
      name: 'Paradise Lavender Air Freshener',
      description: 'Classic relaxation in a bottle; perfect for peace and stress relief.',
      image: '/lovable-uploads/a687177a-b08a-4713-a8aa-f708f2813608.png',
      category: 'Air Freshener',
      rating: 4.7,
      reviews: 198
    },
    {
      id: 5,
      name: 'Paradise Luxury Air Freshener',
      description: 'A sophisticated fragrance that brings a touch of class to any room.',
      image: '/lovable-uploads/87854141-f532-46ff-a865-fca8242920bf.png',
      category: 'Air Freshener',
      rating: 4.9,
      reviews: 289
    },
    {
      id: 6,
      name: 'Paradise Xtreme Air Freshener',
      description: 'Bold and invigorating, for those who love a powerful burst of freshness.',
      image: '/lovable-uploads/ae742c6c-57c2-4757-a0ea-a12452e44d08.png',
      category: 'Air Freshener',
      rating: 4.7,
      reviews: 223
    },
    {
      id: 7,
      name: 'Paradise Aroma Air Freshener',
      description: 'A well-balanced blend of comforting notes that lingers with subtle charm.',
      image: '/lovable-uploads/2123df41-38b7-41cd-8601-8a721d87e934.png',
      category: 'Air Freshener',
      rating: 4.6,
      reviews: 198
    },
    {
      id: 8,
      name: 'Paradise Blue Moon Air Freshener',
      description: 'Cool, clean, and mysterious – ideal for creating a serene vibe.',
      image: '/lovable-uploads/0d7ff15e-30ad-4f11-be3f-554827988ba0.png',
      category: 'Air Freshener',
      rating: 4.7,
      reviews: 234
    },
    {
      id: 9,
      name: 'Paradise Artistic Air Freshener',
      description: 'Unique and expressive, a scent that adds character and creativity to your space.',
      image: '/lovable-uploads/0ed9c39c-2a6c-4334-b921-62ec83961d77.png',
      category: 'Air Freshener',
      rating: 4.5,
      reviews: 189
    }
  ];

  const pagination = usePagination(products, 6);

  const features = [
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Expert Support",
      description: "Professional guidance on fragrance selection"
    },
    {
      icon: <RotateCcw className="w-6 h-6" />,
      title: "Long Lasting",
      description: "Extended fragrance duration"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safe Formula",
      description: "Non-toxic, family-safe ingredients"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "Quick shipping to your doorstep"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating) 
            ? 'fill-yellow-400 text-yellow-400' 
            : index < rating 
            ? 'fill-yellow-400/50 text-yellow-400' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const productId = (entry.target as HTMLElement).dataset.productId;
            if (productId) {
              setVisibleProducts(prev => new Set(prev).add(productId));
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [pagination.currentPage]);

  useEffect(() => {
    if (!carouselApi) return;

    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap());

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Updated brand-consistent header */}
      <ProductPageHeader
        title="Air Fresheners"
        description="Transform your surroundings with the captivating scents of Paradise Air Fresheners. Designed to uplift your mood and refresh any space, our air fresheners bring long-lasting fragrances that inspire calm, energy, and elegance. Whether you prefer floral, luxurious, or exotic notes, each variant is crafted to suit your style and setting."
        keywords={headerKeywords}
      />

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Button 
          onClick={goBack}
          variant="outline"
          className="flex items-center gap-2 hover:bg-progressive-light-grey"
        >
          <ArrowLeft size={20} />
          Back to Categories
        </Button>
      </div>

      {/* Features Carousel */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <Carousel 
            className="w-full max-w-5xl mx-auto"
            setApi={setCarouselApi}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {features.map((feature, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                  <Card className="h-full">
                    <CardContent className="flex flex-col items-center text-center p-6">
                      <div className="text-progressive-red mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Hide arrows on desktop and tablet */}
            <div className="hidden">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
          
          {/* Mobile dot indicators */}
          <div className="flex justify-center mt-4 md:hidden">
            <div className="flex space-x-2">
              {Array.from({ length: count }, (_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === current ? 'bg-progressive-red' : 'bg-gray-300'
                  }`}
                  onClick={() => carouselApi?.scrollTo(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pagination.currentItems.map((product, index) => (
              <div
                key={product.id}
                data-product-id={product.id.toString()}
                className={`product-card group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform ${
                  visibleProducts.has(product.id.toString()) 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-b from-gray-50 to-white p-4 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-progressive-dark-grey mb-3 group-hover:text-progressive-red transition-colors duration-200">
                    {product.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-sm text-gray-600">({product.reviews})</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <Button 
                    className="w-full bg-progressive-red hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={16} />
                    Buy Now
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {pagination.totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={pagination.previousPage}
                      className={!pagination.hasPreviousPage ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                    />
                  </PaginationItem>
                  
                  {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        onClick={() => pagination.goToPage(page)}
                        isActive={page === pagination.currentPage}
                        className="cursor-pointer"
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={pagination.nextPage}
                      className={!pagination.hasNextPage ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AirFresheners;
