import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const rotatingTexts = ["FMCG Excellence", "Quality Products", "Trusted Solutions", "Market Leaders"];
  
  const heroImages = [
    {
      src: "/lovable-uploads/f102405a-0aea-4f87-b41c-67aa702a4110.png", 
      alt: "Kids Playing with PowerPlus Products"
    },
    {
      src: "/lovable-uploads/f516d6c3-f77c-4b33-baa2-9e91dd72f1cd.png",
      alt: "PowerPlus Product Collection"
    },
    {
      src: "/lovable-uploads/c224c5eb-346a-4670-bc84-3364fc1add8a.png",
      alt: "PowerPlus Shoe Care Products"
    }
  ];
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const textRotationTimer = setInterval(() => {
      setCurrentTextIndex(prev => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(textRotationTimer);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Carousel */}
      <div className="absolute inset-0 w-full h-full">
        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: false,
              stopOnMouseEnter: false,
            }) as any,
          ]}
          className="w-full h-full"
        >
          <CarouselContent className="w-full h-full ml-0">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="w-full h-full pl-0 min-h-0">
                <div className="w-full h-full">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto pt-16 md:pt-20">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          
          {/* Animated Main Tagline with Enhanced Readability */}
          <h1 className="font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-lg">
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-2">
              <span key={currentTextIndex} className="inline-block animate-fade-in text-shadow-lg" style={{
              animationDuration: '1s',
              textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5)'
            }}>
                {rotatingTexts[currentTextIndex]}
              </span>
            </span>
          </h1>
          
          {/* Enhanced Subtext with Better Contrast */}
          <div className={`transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-100 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-2 drop-shadow-md" style={{
            textShadow: '1px 1px 3px rgba(0,0,0,0.8)'
          }}>
              Transforming Pakistan's Consumer Market for 20+ Years
            </p>
          </div>

          {/* Action Buttons with Enhanced Styling */}
          <div className={`flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button onClick={() => scrollToSection('products')} className="w-full sm:w-auto bg-gradient-to-r from-progressive-red to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 font-semibold text-base md:text-lg shadow-2xl hover:shadow-red-500/25 min-w-[200px] border border-red-500/20">
              Explore Products
            </button>
            <button onClick={() => scrollToSection('about')} className="w-full sm:w-auto border-2 border-white/80 hover:border-white text-white hover:text-black hover:bg-white px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all duration-300 font-semibold text-base md:text-lg min-w-[200px] bg-white/10 backdrop-blur-sm shadow-2xl hover:shadow-white/25">
              Learn More
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${isVisible ? 'animate-bounce-slow opacity-60' : 'opacity-0'}`}>
          
        </div>
      </div>
    </section>;
};

export default Hero;
