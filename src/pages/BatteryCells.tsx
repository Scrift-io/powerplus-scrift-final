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

const BatteryCells = () => {
  const [visibleProducts, setVisibleProducts] = useState(new Set<string>());
  const [carouselApi, setCarouselApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const headerKeywords = ['Powerful', 'Reliable', 'Long-lasting', 'High-performance', 'Durable', 'Professional'];
  const products = [{
    id: 1,
    name: 'Heavy Duty AA Batteries',
    description: 'Reliable Power. Everyday Performance. Power Plus Heavy Duty AA batteries are engineered with POWER BOOST ingredients to deliver long-lasting energy to your most-used devices.',
    image: '/lovable-uploads/Heavy_Duty_AA_Batteries.jpg',
    category: 'Battery Cell',
    rating: 4.8,
    reviews: 342
  }, {
    id: 2,
    name: 'Heavy Duty AAA Batteries',
    description: 'Compact Power for Daily Essentials. Trust Power Plus Heavy Duty AAA batteries for dependable performance in compact devices.',
    image: '/lovable-uploads/Heavy_Duty_AAA_Batteries.jpg',
    category: 'Battery Cell',
    rating: 4.6,
    reviews: 268
  }, {
    id: 3,
    name: 'Heavy Duty 9V Batteries',
    description: 'Trusted Power You Can Count On. Designed for reliability, Power Plus Heavy Duty 9V batteries deliver consistent energy for your essential home and portable electronics.',
    image: '/lovable-uploads/Heavy_Duty_9V_Batteries.jpg',
    category: 'Battery Cell',
    rating: 4.7,
    reviews: 298
  }, {
    id: 4,
    name: 'Super Heavy Duty AA – 2/Card',
    description: 'Optimized for Everyday Reliability. Power Plus SHD AA batteries offer extended performance to keep your professional and household devices running longer.',
    image: '/lovable-uploads/Super_Heavy_Duty_AA_2Card.jpg',
    category: 'Battery Cell',
    rating: 4.8,
    reviews: 389
  }, {
    id: 5,
    name: 'Super Heavy Duty AAA – 2/Card',
    description: 'Consistent Power for Compact Devices. Stay charged with Power Plus SHD AAA batteries—ideal for gaming controllers, flashlights, toys, and more.',
    image: '/lovable-uploads/Super_Heavy_Duty_AAA_2Card.jpg',
    category: 'Battery Cell',
    rating: 4.7,
    reviews: 312
  }, {
    id: 6,
    name: 'Original Equipment AA',
    description: 'Everyday Energy You Can Rely On. The OE Series AA batteries deliver optimal power for your everyday electronics with performance and longevity.',
    image: '/lovable-uploads/Original_Equipment_AA.jpg',
    category: 'Battery Cell',
    rating: 4.6,
    reviews: 523
  }, {
    id: 7,
    name: 'Original Equipment AAA',
    description: 'Power That Fits Your Lifestyle. Designed for reliability, OE Series AAA batteries offer consistent power for daily-use electronics.',
    image: '/lovable-uploads/Original_Equipment_AAA.jpg',
    category: 'Battery Cell',
    rating: 4.5,
    reviews: 456
  }, {
    id: 8,
    name: 'Premium Gold AA Batteries',
    description: 'Superior Power. Premium Performance. Premium Gold AA batteries are built to deliver unmatched performance across a wide range of household and tech devices.',
    image: '/lovable-uploads/Premium_Gold_AA_Batteries.jpg',
    category: 'Battery Cell',
    rating: 4.9,
    reviews: 678
  }, {
    id: 9,
    name: 'Premium Gold AAA Batteries',
    description: 'Precision Energy for High-Performance Devices. Keep your devices running stronger, longer with Premium Gold AAA batteries.',
    image: '/lovable-uploads/Premium_Gold_AAA_Batteries.jpg',
    category: 'Battery Cell',
    rating: 4.9,
    reviews: 543
  }, {
    id: 10,
    name: 'Premium Gold D-Size Batteries',
    description: 'Maximum Power. Maximum Endurance. Power Plus Premium Gold D batteries are built for high-drain devices requiring consistent, extended power.',
    image: '/lovable-uploads/Premium_Gold_D_Size_Batteries.jpg',
    category: 'Battery Cell',
    rating: 4.8,
    reviews: 234
  }];

  const pagination = usePagination(products, 6);
  
  const features = [{
    icon: <Headphones className="w-6 h-6" />,
    title: "Technical Support",
    description: "Expert guidance on battery selection"
  }, {
    icon: <RotateCcw className="w-6 h-6" />,
    title: "Quality Guarantee",
    description: "Tested for reliability and performance"
  }, {
    icon: <Shield className="w-6 h-6" />,
    title: "Authentic Products",
    description: "100% genuine battery cells"
  }, {
    icon: <Truck className="w-6 h-6" />,
    title: "Safe Delivery",
    description: "Secure packaging for all orders"
  }];

  const renderStars = (rating: number) => {
    return Array.from({
      length: 5
    }, (_, index) => <Star key={index} className={`w-4 h-4 ${index < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : index < rating ? 'fill-yellow-400/50 text-yellow-400' : 'text-gray-300'}`} />);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const productId = (entry.target as HTMLElement).dataset.productId;
          if (productId) {
            setVisibleProducts(prev => new Set(prev).add(productId));
          }
        }
      });
    }, {
      threshold: 0.2
    });
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

  return <div className="min-h-screen bg-white">
      <Header />
      
      {/* Updated brand-consistent header */}
      <ProductPageHeader title="Battery Cells" description="power solutions that keep your devices running strong" keywords={headerKeywords} />

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Button onClick={goBack} variant="outline" className="flex items-center gap-2 hover:bg-progressive-light-grey">
          <ArrowLeft size={20} />
          Back to Categories
        </Button>
      </div>

      {/* Features Carousel */}
      <section className="py-8 bg-gray-50 my-[40px]">
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
              {features.map((feature, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                  <Card className="h-full">
                    <CardContent className="flex flex-col items-center text-center p-6">
                      <div className="text-progressive-red mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>)}
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
            {pagination.currentItems.map((product, index) => <div key={product.id} data-product-id={product.id.toString()} className={`product-card group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform ${visibleProducts.has(product.id.toString()) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{
            transitionDelay: `${index * 100}ms`
          }}>
                <div className="relative h-64 overflow-hidden bg-gradient-to-b from-gray-50 to-white p-4 flex items-center justify-center">
                  <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-110" loading="lazy" />
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
                  <Button className="w-full bg-progressive-red hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2">
                    <ShoppingCart size={16} />
                    Buy Now
                  </Button>
                </div>
              </div>)}
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
    </div>;
};
export default BatteryCells;
