
import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Award, CheckCircle, Users, Zap, Crown, ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';

const QualityCarousel = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  const qualityFeatures = [
    {
      title: "Premium Quality",
      description: "ISO certified manufacturing standards ensuring excellence",
      icon: Award,
      color: "bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500",
      textColor: "text-white"
    },
    {
      title: "Authentic Products",
      description: "100% genuine FMCG solutions you can trust",
      icon: CheckCircle,
      color: "bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600",
      textColor: "text-white"
    },
    {
      title: "Expert Support",
      description: "24/7 customer service excellence nationwide",
      icon: Users,
      color: "bg-gradient-to-br from-purple-400 via-violet-500 to-purple-600",
      textColor: "text-white"
    },
    {
      title: "Fast Delivery",
      description: "Quick nationwide distribution network",
      icon: Zap,
      color: "bg-gradient-to-br from-blue-400 via-cyan-500 to-blue-600",
      textColor: "text-white"
    },
    {
      title: "Market Leadership",
      description: "20+ years industry experience and innovation",
      icon: Crown,
      color: "bg-gradient-to-br from-red-500 via-pink-500 to-purple-600",
      textColor: "text-white"
    }
  ];

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Auto-scroll every 4 seconds for infinite loop
    const autoScroll = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 4000);

    return () => clearInterval(autoScroll);
  }, [api]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 md:py-12">
      {/* Enhanced Mobile Scroll Indicator */}
      <div className="lg:hidden mb-6 flex flex-col items-center space-y-3">
        <div className="flex items-center justify-center space-x-3 text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-full">
          <ArrowLeft size={16} className="animate-pulse text-progressive-red" />
          <span className="font-medium">Swipe to explore features</span>
          <ArrowRight size={16} className="animate-pulse text-progressive-red" />
        </div>
        {/* Visual swipe indicator */}
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-progressive-red rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-progressive-red rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-progressive-red rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>

      <Carousel 
        setApi={setApi} 
        className="w-full" 
        opts={{ 
          align: "start", 
          loop: true,
          dragFree: true,
          containScroll: "trimSnaps"
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {qualityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-[280px] sm:basis-[320px] md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden">
                  <CardContent className="p-0 h-full">
                    <div className={`${feature.color} ${feature.textColor} p-6 h-full rounded-lg flex flex-col items-center text-center relative min-h-[240px] justify-center`}>
                      {/* Enhanced Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-white rounded-full transform translate-x-8 -translate-y-8"></div>
                        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white rounded-full transform -translate-x-6 translate-y-6"></div>
                        <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
                        <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-white rounded-full transform translate-x-4 -translate-y-4 opacity-30"></div>
                      </div>
                      
                      <div className="relative z-10 flex flex-col items-center space-y-4">
                        <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <IconComponent size={32} className="drop-shadow-lg" />
                        </div>
                        <h3 className="text-xl font-bold leading-tight">{feature.title}</h3>
                        <p className="text-sm opacity-90 leading-relaxed font-medium px-2">{feature.description}</p>
                      </div>
                      
                      {/* Enhanced shine effect on hover */}
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        
        {/* Enhanced Navigation for larger screens */}
        <div className="hidden lg:block">
          <CarouselPrevious className="text-progressive-red border-2 border-progressive-red bg-white hover:bg-progressive-red hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 -left-12" />
          <CarouselNext className="text-progressive-red border-2 border-progressive-red bg-white hover:bg-progressive-red hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 -right-12" />
        </div>
      </Carousel>

      {/* Enhanced Progress Indicators */}
      <div className="flex flex-col items-center mt-8 space-y-4">
        {/* Enhanced progress bar for mobile */}
        <div className="lg:hidden w-40 h-2 bg-gray-200 rounded-full overflow-hidden shadow-inner">
          <div 
            className="h-full bg-gradient-to-r from-progressive-red to-red-400 transition-all duration-500 rounded-full shadow-sm"
            style={{ width: `${((current + 1) / qualityFeatures.length) * 100}%` }}
          ></div>
        </div>

        {/* Enhanced dots for all devices */}
        <div className="flex justify-center space-x-3">
          {qualityFeatures.map((_, index) => (
            <button
              key={index}
              className={`transition-all duration-300 rounded-full border-2 ${
                index === current 
                  ? 'w-8 h-4 bg-progressive-red border-progressive-red shadow-lg scale-110' 
                  : 'w-4 h-4 bg-transparent border-gray-300 hover:border-progressive-red hover:scale-125'
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Enhanced current indicator text */}
        <div className="text-sm text-gray-500 font-medium bg-gray-50 px-3 py-1 rounded-full">
          {current + 1} of {qualityFeatures.length}
        </div>
      </div>
    </div>
  );
};

export default QualityCarousel;
