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

const CleaningHousehold = () => {
  const [visibleProducts, setVisibleProducts] = useState(new Set<string>());
  const [carouselApi, setCarouselApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const headerKeywords = [
    'Spotless',
    'Powerful', 
    'Effective',
    'Hygienic',
    'Fresh',
    'Complete'
  ];

  const products = [
    {
      id: 1,
      name: 'Power Plus Super Bleach',
      description: '1L - Removes stains, whitens clothes effectively',
      image: '/lovable-uploads/a75cd7f2-6107-4afa-b889-55c4e8254818.png',
      category: 'Cleaning & Household',
      rating: 4.7,
      reviews: 298
    },
    {
      id: 2,
      name: 'Power Plus Glass & Household Cleaner',
      description: '500ml Spray - Glass and household cleaning solution',
      image: '/lovable-uploads/d3996c21-3859-4977-adfd-1ddc513a23bf.png',
      category: 'Cleaning & Household',
      rating: 4.6,
      reviews: 245
    },
    {
      id: 3,
      name: 'Power Plus Active & Fresh Toilet Cleaner',
      description: '500ml - Twin pack, powerful toilet cleaning formula',
      image: '/lovable-uploads/0ec76395-7eaf-4d60-b578-318e266b3023.png',
      category: 'Cleaning & Household',
      rating: 4.8,
      reviews: 356
    },
    {
      id: 4,
      name: 'Power Plus Dishwash Liquid',
      description: '500ml - Lemon & Orange variants, grease cutting formula',
      image: '/lovable-uploads/f4d7c799-cff8-4c65-b45b-6dd5241b2358.png',
      category: 'Cleaning & Household',
      rating: 4.5,
      reviews: 412
    },
    {
      id: 5,
      name: 'Power Plus Disinfectant Floor Cleaner - Lemon',
      description: '1000ml - Removes dirt and grime while killing germs, fresh lemon fragrance',
      image: '/lovable-uploads/5fbaccfe-76aa-4e45-b10d-fe1016e58c53.png',
      category: 'Cleaning & Household',
      rating: 4.7,
      reviews: 321
    },
    {
      id: 6,
      name: 'Power Plus Disinfectant Floor Cleaner - Bouquet',
      description: '500ml - Hygienic cleaning with beautiful floral bouquet scent',
      image: '/lovable-uploads/87a80626-bd1f-40fc-9aea-95d280e762cd.png',
      category: 'Cleaning & Household',
      rating: 4.6,
      reviews: 289
    },
    {
      id: 7,
      name: 'Power Plus Dish Wash Liquid - Original',
      description: '500ml - Original formula with lemon fragrance, powerful grease cutting',
      image: '/lovable-uploads/e4a81fa0-9879-4589-81d3-d576c87b1c1b.png',
      category: 'Cleaning & Household',
      rating: 4.5,
      reviews: 367
    },
    {
      id: 8,
      name: 'Power Plus Disinfectant Floor Cleaner - Jasmine',
      description: '500ml - Daily cleaning solution with soothing jasmine fragrance',
      image: '/lovable-uploads/c9b6c538-2706-4631-bcec-e408d9c95da8.png',
      category: 'Cleaning & Household',
      rating: 4.8,
      reviews: 278
    },
    {
      id: 9,
      name: 'Power Plus Disinfectant Floor Cleaner - Lavender',
      description: '500ml - Kills germs while leaving a calming lavender scent',
      image: '/lovable-uploads/eebe67ea-0388-4bdc-92dd-cbadcc098391.png',
      category: 'Cleaning & Household',
      rating: 4.7,
      reviews: 295
    },
    {
      id: 10,
      name: 'Power Plus Disinfectant Floor Cleaner - Lemon',
      description: '500ml - Effective disinfection with refreshing lemon fragrance',
      image: '/lovable-uploads/25ed8e74-de58-4d1d-a974-a45dea7bab4d.png',
      category: 'Cleaning & Household',
      rating: 4.6,
      reviews: 312
    },
    {
      id: 11,
      name: 'Power Plus Disinfectant Floor Cleaner - Fresh',
      description: '500ml - Clean and fresh scent for all hard surfaces',
      image: '/lovable-uploads/227ae817-bd05-4ffc-a60c-9b6e66304303.png',
      category: 'Cleaning & Household',
      rating: 4.5,
      reviews: 256
    },
    {
      id: 12,
      name: 'Power Plus Disinfectant Floor Cleaner - Lavender',
      description: '1000ml - Large size with relaxing lavender fragrance for daily use',
      image: '/lovable-uploads/6ea1dd6c-50c7-4790-b43e-1d1a9429de8e.png',
      category: 'Cleaning & Household',
      rating: 4.8,
      reviews: 334
    },
    {
      id: 13,
      name: 'Power Plus Disinfectant Floor Cleaner - Jasmine',
      description: '1000ml - Premium jasmine scented floor cleaner for healthy homes',
      image: '/lovable-uploads/2804e8b6-d759-4399-864c-09c35d466a02.png',
      category: 'Cleaning & Household',
      rating: 4.7,
      reviews: 298
    },
    {
      id: 14,
      name: 'Power Plus Renew All - Auto Accessories',
      description: 'Revitalizes car interiors, bringing back the shine to automotive surfaces',
      image: '/lovable-uploads/ec4cbd82-53d7-45df-9683-7c77193a6be8.png',
      category: 'Cleaning & Household',
      rating: 4.6,
      reviews: 234
    },
    {
      id: 15,
      name: 'Power Plus Renew All - Electronic Appliances',
      description: 'Restores brightness to home appliances and electronic surfaces',
      image: '/lovable-uploads/ec4cbd82-53d7-45df-9683-7c77193a6be8.png',
      category: 'Cleaning & Household',
      rating: 4.5,
      reviews: 198
    },
    {
      id: 16,
      name: 'Power Plus Renew All - Furniture & Leather',
      description: 'Revitalizes wooden and leather furniture, bags, and leather goods',
      image: '/lovable-uploads/ec4cbd82-53d7-45df-9683-7c77193a6be8.png',
      category: 'Cleaning & Household',
      rating: 4.7,
      reviews: 267
    },
    {
      id: 17,
      name: 'Power Plus Bathroom Cleaner',
      description: '750ml, 500ml, 250ml - Tackles dirt, soap scum, and moisture-prone areas with ease',
      image: '/lovable-uploads/c3cc8f9c-0c5c-47c7-a84a-54d5a41215e0.png',
      category: 'Cleaning & Household',
      rating: 4.8,
      reviews: 342
    },
    {
      id: 18,
      name: 'Power Plus Blue Liquid - 75ml',
      description: '75ml - Revive the brightness of your whites, enhances and restores whiteness',
      image: '/lovable-uploads/e378202b-db45-494d-9eaa-8e30352c074a.png',
      category: 'Cleaning & Household',
      rating: 4.6,
      reviews: 156
    },
    {
      id: 19,
      name: 'Power Plus Blue Liquid - 150ml',
      description: '150ml - Specially formulated to restore whiteness in white fabrics',
      image: '/lovable-uploads/e378202b-db45-494d-9eaa-8e30352c074a.png',
      category: 'Cleaning & Household',
      rating: 4.7,
      reviews: 189
    },
    {
      id: 20,
      name: 'Power Plus Blue Liquid - 100ml',
      description: '100ml - Safe on clothes, adds brilliance without damaging fabric',
      image: '/lovable-uploads/e378202b-db45-494d-9eaa-8e30352c074a.png',
      category: 'Cleaning & Household',
      rating: 4.5,
      reviews: 167
    },
    {
      id: 21,
      name: 'Power Plus Blue Liquid - Jumbo Pack 300ml',
      description: '300ml - Large size for enhanced whiteness and renewed clean look',
      image: '/lovable-uploads/e378202b-db45-494d-9eaa-8e30352c074a.png',
      category: 'Cleaning & Household',
      rating: 4.8,
      reviews: 245
    },
    {
      id: 22,
      name: 'Power Plus Disinfectant Floor Cleaner - Bouquet 1000ml',
      description: '1000ml - Large size with beautiful floral bouquet fragrance for complete floor care',
      image: '/lovable-uploads/cce9184e-4706-4015-8bbf-b0b8efdf6e2c.png',
      category: 'Cleaning & Household',
      rating: 4.7,
      reviews: 198
    },
    {
      id: 23,
      name: 'Power Plus Disinfectant Floor Cleaner - Fresh 1000ml',
      description: '1000ml - Large size with clean and fresh scent for hygienic floor cleaning',
      image: '/lovable-uploads/9ba4f387-b08a-4c47-a664-4674279ed3f1.png',
      category: 'Cleaning & Household',
      rating: 4.6,
      reviews: 223
    }
  ];

  const pagination = usePagination(products, 6);

  const features = [
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Expert Support",
      description: "Professional guidance on product usage"
    },
    {
      icon: <RotateCcw className="w-6 h-6" />,
      title: "Quality Guarantee",
      description: "Tested cleaning formulations"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safe Products",
      description: "Family-safe cleaning solutions"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "Quick shipping nationwide"
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
        title="Cleaning & Household"
        description="solutions that make every home sparkle with cleanliness"
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
                    onClick={() => window.open('http://www.pakpowermart.pk', '_blank')}
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

export default CleaningHousehold;
