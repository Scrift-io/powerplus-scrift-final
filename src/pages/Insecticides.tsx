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

const Insecticides = () => {
  const [visibleProducts, setVisibleProducts] = useState(new Set<string>());
  const [carouselApi, setCarouselApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const headerKeywords = [
    'Effective',
    'Safe', 
    'Powerful',
    'Reliable',
    'Protection',
    'Quality'
  ];

  const products = [
    {
      id: 1,
      name: 'Jumbo X Coil',
      description: 'Long-Lasting Protection, Smokeless Comfort. Experience unmatched mosquito protection with Jumbo X Coil – designed for extended use with minimal smoke and a pleasant fragrance. Effectively combats mosquitoes and dengue-carrying insects.',
      image: '/lovable-uploads/4ebaaabe-b935-4542-8a2d-ebcf410736dd.png',
      category: 'Insecticides',
      rating: 4.8,
      reviews: 267
    },
    {
      id: 2,
      name: 'Black Jumbo Coil',
      description: 'Smoke Less. Worry Less. The Coil offers powerful mosquito defense with reduced smoke and a soothing scent. Ideal for everyday protection, it effectively repels mosquitoes and dengue carriers while keeping your environment pleasant.',
      image: '/lovable-uploads/fb1c90ae-59c2-4a7f-b56b-c484cbf6e61f.png',
      category: 'Insecticides',
      rating: 4.7,
      reviews: 234
    },
    {
      id: 3,
      name: 'Liquid Mosquito Repellent Refill (30ml)',
      description: 'Powerful Liquid Defense for Your Family. Protect your loved ones with our Liquid Mosquito Repellent, engineered for enhanced strength and long-lasting coverage. Perfect solution for day and night protection against mosquitoes and dengue threats.',
      image: '/lovable-uploads/4d6b56ae-88e2-4364-8c49-477bcc38b76d.png',
      category: 'Insecticides',
      rating: 4.6,
      reviews: 189
    },
    {
      id: 4,
      name: 'Liquid Mosquito Repellent Refill (45ml)',
      description: 'Powerful Liquid Defense for Your Family. Enhanced strength formula with long-lasting coverage for comprehensive protection. Safe, effective, and dependable mosquito and dengue protection for your home.',
      image: '/lovable-uploads/3cea0309-4da0-499e-861e-0076f4da7a7c.png',
      category: 'Insecticides',
      rating: 4.7,
      reviews: 201
    },
    {
      id: 5,
      name: 'Liquid Mosquito Repellent Machine + Refill',
      description: 'Complete mosquito protection system with machine and refill. More power protection that fits in all machines. Engineered for enhanced strength and long-lasting coverage against mosquitoes and dengue threats.',
      image: '/lovable-uploads/ee66cfae-72dc-41af-b7df-93677ec2f639.png',
      category: 'Insecticides',
      rating: 4.9,
      reviews: 312
    },
    {
      id: 6,
      name: 'Super Aerosol Insecticide',
      description: 'Extra Power. Instant Results. Meet the all-new Super Aerosol – your all-in-one solution against flying and crawling insects. With its upgraded extra power formula, it quickly eliminates pests like flies, mosquitoes, and cockroaches.',
      image: '/lovable-uploads/2beea866-805e-4777-9cd8-a5117090b1ae.png',
      category: 'Insecticides',
      rating: 4.8,
      reviews: 278
    },
    {
      id: 7,
      name: 'Fast Kill Green Insecticide Aerosol',
      description: 'Fresh Jasmine. Stronger Kill. Fast kill Green is a dual-action insect killer crafted to tackle both flying and crawling pests – including lizards. Infused with a calming jasmine fragrance for a pleasant experience.',
      image: '/lovable-uploads/ff7759c5-e031-4ae5-b43d-9a615846f369.png',
      category: 'Insecticides',
      rating: 4.7,
      reviews: 245
    },
    {
      id: 8,
      name: 'Fast Kill Red Insecticide Aerosol',
      description: 'Citrus-Powered Insect Defense. Fastkill Red fights off flies, mosquitoes, and crawling insects with the energizing scent of lemon. Quick, effective, and easy to use – perfect for everyday household defense.',
      image: '/lovable-uploads/50ac9642-b4bb-4e1f-a925-d0515f4abc6f.png',
      category: 'Insecticides',
      rating: 4.6,
      reviews: 198
    },
    {
      id: 9,
      name: 'Crawling Insect Killer Powder',
      description: 'Protects against Cockroaches, Moths, Bed-bugs, Fleas, Lice, Ants, Book-lice, Silver-fish, Fowl-mite, Wood-lice, etc. Professional powder formula for comprehensive crawling insect protection.',
      image: '/lovable-uploads/3c22cc41-0d73-4ae0-8e9a-39b91eb40677.png',
      category: 'Insecticides',
      rating: 4.5,
      reviews: 156
    }
  ];

  const pagination = usePagination(products, 6);

  const features = [
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Expert pest control advice available"
    },
    {
      icon: <RotateCcw className="w-6 h-6" />,
      title: "Easy Returns",
      description: "Hassle-free returns within 7 days"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safe Products",
      description: "Tested and approved pest control solutions"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "Quick delivery across Pakistan"
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
        title="Insecticides"
        description="pest control solutions for a safe and protected environment"
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

export default Insecticides;
