import React, { useEffect, useState } from 'react';
import { ArrowLeft, ShoppingCart, Star, Headphones, RotateCcw, Shield, Truck, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductPageHeader from '@/components/ProductPageHeader';

const ShoePolishers = () => {
  const [visibleProducts, setVisibleProducts] = useState(new Set<string>());
  const [carouselApi, setCarouselApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState<Record<number, number>>({});

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
      name: 'Instant Shoe Shine Sponge - Black',
      description: 'Gives an instant shine to all smooth and synthetic leathers and accessories. Not suitable for suede, nubuck or fabric. Keep out of reach of children.',
      images: [
        '/lovable-uploads/black_instant.png',
        '/lovable-uploads/black_instant2.png',
        '/lovable-uploads/black_instant3.png'
      ],
      category: 'Shoe Polish',
      rating: 4.7,
      reviews: 234
    },
    {
      id: 2,
      name: 'Express Shining Sponge - Black',
      description: 'Quick shine for busy days. Large size express shining sponge provides instant, mess-free shine without brushing or buffing. Perfect for office, travel, or emergency touch-ups.',
      images: [
        '/lovable-uploads/black.png',
        '/lovable-uploads/black2.png',
        '/lovable-uploads/black3.png'
      ],
      category: 'Shoe Polish',
      rating: 4.9,
      reviews: 278
    },
    {
      id: 3,
      name: 'Express Shining Sponge - Neutral',
      description: 'Quick shine for all colored leather shoes. Neutral formula provides clear, streak-free shine without altering shoe color. Built-in applicator sponge for easy use.',
      images: [
        '/lovable-uploads/neutral1.png',
        '/lovable-uploads/neutral2.png',
        '/lovable-uploads/neutral3.png'
      ],
      category: 'Shoe Polish',
      rating: 4.8,
      reviews: 245
    }
  ];

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

  const nextImage = (productId: number, totalImages: number) => {
    setActiveImageIndex(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (productId: number, totalImages: number) => {
    setActiveImageIndex(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const setImageIndex = (productId: number, index: number) => {
    setActiveImageIndex(prev => ({
      ...prev,
      [productId]: index
    }));
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
  }, []);

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
            {products.map((product, index) => {
              const currentImageIndex = activeImageIndex[product.id] || 0;
              return (
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
                      src={product.images[currentImageIndex]}
                      alt={`${product.name} - View ${currentImageIndex + 1}`}
                      className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Navigation Arrows */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage(product.id, product.images.length);
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 shadow-md transition-all opacity-0 group-hover:opacity-100"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5 text-progressive-dark-grey" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage(product.id, product.images.length);
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 shadow-md transition-all opacity-0 group-hover:opacity-100"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5 text-progressive-dark-grey" />
                    </button>

                    {/* Dot Indicators */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {product.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setImageIndex(product.id, idx);
                          }}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentImageIndex 
                              ? 'bg-progressive-red w-4' 
                              : 'bg-gray-300 hover:bg-gray-400'
                          }`}
                          aria-label={`View image ${idx + 1}`}
                        />
                      ))}
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
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
                      onClick={() => window.open('http://www.pakpowermart.pk', '_blank')}
                      className="w-full bg-progressive-red hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <ShoppingCart size={16} />
                      Buy Now
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShoePolishers;