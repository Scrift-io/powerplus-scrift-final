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

const ShoePolishers = () => {
  const [visibleProducts, setVisibleProducts] = useState(new Set<string>());
  const [carouselApi, setCarouselApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const headerKeywords = [
    'Professional',
    'Premium', 
    'Quality',
    'Shine',
    'Care',
    'Perfect'
  ];

  const products = [
    {
      id: 1,
      name: 'Instant Shoe Shine Sponge',
      description: 'Neutral instant shine sponge for quick shoe polishing',
      image: '/lovable-uploads/800fd492-ce0b-4556-a6c8-7776086bb052.png',
      category: 'Shoe Polish',
      rating: 4.7,
      reviews: 234
    },
    {
      id: 2,
      name: 'White Liquid Shoe Cleaner',
      description: 'Specialized cleaner for white shoes and accessories',
      image: '/lovable-uploads/910913fc-6065-44dd-a66c-c89e14397bbd.png',
      category: 'Shoe Polish',
      rating: 4.6,
      reviews: 189
    },
    {
      id: 3,
      name: 'Black Shoe Polish Tin',
      description: '50ml black shoe polish with water resistant formula',
      image: '/lovable-uploads/47a64181-3fa6-4ea4-8937-3429ab15adbe.png',
      category: 'Shoe Polish',
      rating: 4.8,
      reviews: 312
    },
    {
      id: 4,
      name: 'Neutral Express Shiner',
      description: 'Quick and easy shine for instant sparkle',
      image: '/lovable-uploads/852b60be-7f17-4070-b57a-94cace9da9a5.png',
      category: 'Shoe Polish',
      rating: 4.5,
      reviews: 156
    },
    {
      id: 5,
      name: 'Shoe Shine Reservoir Sponge',
      description: 'Neutral reservoir sponge for long-lasting shine',
      image: '/lovable-uploads/42d9cba6-0b01-4b32-b20c-b63ced464bfa.png',
      category: 'Shoe Polish',
      rating: 4.7,
      reviews: 201
    },
    {
      id: 6,
      name: 'Instant Shoe Shine Liquid',
      description: 'Black liquid shine with 33% extra content',
      image: '/lovable-uploads/645233b5-4c77-4deb-9708-1995ce3cc90e.png',
      category: 'Shoe Polish',
      rating: 4.9,
      reviews: 278
    },
    {
      id: 7,
      name: 'Brown Tin Shoe Polish',
      description: 'Reliable shine, everyday confidence. 44ml brown tin polish delivers rich color and brilliant shine with conditioning formula that nourishes leather while shielding from cracking and fading.',
      image: '/lovable-uploads/da4299b1-2912-4a35-b5c3-bb04cb4d45d8.png',
      category: 'Shoe Polish',
      rating: 4.8,
      reviews: 245
    },
    {
      id: 8,
      name: 'Regular Shiner - Black',
      description: 'Instant shine, no hassle. Quick solution for busy days providing instant, mess-free shine without brushing or buffing. Perfect for office, travel, or emergency touch-ups.',
      image: '/lovable-uploads/608f4175-b6fa-497e-9c3c-27b1570580c0.png',
      category: 'Shoe Polish',
      rating: 4.6,
      reviews: 189
    },
    {
      id: 9,
      name: 'Regular Shiner - Neutral',
      description: 'Instant shine, no hassle. Quick solution for busy days providing instant, mess-free shine without brushing or buffing. Just glide across shoe surface for sleek, polished look in seconds.',
      image: '/lovable-uploads/e341ad56-a5c3-4133-b364-cc6b46bcd737.png',
      category: 'Shoe Polish',
      rating: 4.6,
      reviews: 167
    },
    {
      id: 10,
      name: 'Express Shiner - Black',
      description: 'Shine in seconds, anywhere, anytime. Built-in applicator sponge provides clear, streak-free shine on leather and synthetic surfaces. Keep it in your bag, car, or office.',
      image: '/lovable-uploads/f90fe381-8b38-4149-b53b-a0f4472cf957.png',
      category: 'Shoe Polish',
      rating: 4.7,
      reviews: 203
    },
    {
      id: 11,
      name: 'Express Shiner - Neutral',
      description: 'Shine in seconds, anywhere, anytime. For instant brilliance without mess, provides clear, streak-free shine on leather and synthetic surfaces with built-in applicator sponge.',
      image: '/lovable-uploads/ea559677-d73f-4035-874a-5cbaa5db2357.png',
      category: 'Shoe Polish',
      rating: 4.7,
      reviews: 178
    }
  ];

  const pagination = usePagination(products, 6);

  const features = [
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Expert Support",
      description: "Professional shoe care consultation"
    },
    {
      icon: <RotateCcw className="w-6 h-6" />,
      title: "Quality Guarantee",
      description: "Satisfaction guaranteed or money back"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Authentic Products",
      description: "100% genuine shoe care products"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Fast Shipping",
      description: "Quick delivery nationwide"
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
        title="Shoe Care Products"
        description="solutions for professional shoe care and lasting shine"
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

export default ShoePolishers;
