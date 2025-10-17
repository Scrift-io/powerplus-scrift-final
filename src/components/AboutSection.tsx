
import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Zap, Globe } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Excellence",
      description: "Premium products that meet international standards"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Trusted Partnership", 
      description: "Building lasting relationships with customers and suppliers"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation Focus",
      description: "Continuously evolving to meet market demands"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Market Leadership",
      description: "Leading Pakistan's FMCG sector with proven expertise"
    }
  ];

  const carouselImages = [
    {
      src: '/lovable-uploads/30bbfb02-1255-4644-9150-00da413d34df.png',
      alt: 'PowerPlus Battery Products',
      title: 'Premium Battery Solutions'
    },
    {
      src: '/lovable-uploads/070a6284-3eff-43ab-be92-ac08f9b3ad2c.png',
      alt: 'PowerPlus Shoe Care Products',
      title: 'Complete Shoe Care Range'
    },
    {
      src: '/lovable-uploads/a0b57d9e-5290-46f6-9e2b-24034f93a4bd.png',
      alt: 'Household Cleaning Products',
      title: 'Complete Household Solutions'
    },
    {
      src: '/lovable-uploads/6a6da22e-7961-40ee-bbd7-20bf80df7af1.png',
      alt: 'PowerPlus Product Range',
      title: 'Diverse Product Portfolio'
    },
    {
      src: '/lovable-uploads/0ebe7e1f-f031-4823-8fbc-ace3a01fda31.png',
      alt: 'Toilet Bowl Cleaner',
      title: 'Advanced Cleaning Technology'
    },
    
   
  ];

  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-white"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={sectionRef} className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-progressive-dark-grey mb-6 leading-tight">
              PowerPlus — FMCG Division by <span className="text-blue-950">Progressive Group</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <img 
                src="/lovable-uploads/e7228be2-fadc-4299-894a-bd1d07d98053.png" 
                alt="Progressive Group Logo" 
                className="h-10 md:h-12 object-contain" 
              />
              <p className="text-lg md:text-xl text-gray-600">A trusted name in trade since 2002</p>
            </div>
          </div>

          {/* Split Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            {/* Left Content */}
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h3 className="text-2xl md:text-3xl font-bold text-progressive-dark-grey mb-6 leading-tight">
                Transforming Pakistan's Consumer Market
              </h3>
              <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
                <p>
                  For over two decades, PowerPlus by Progressive Traders has been at the forefront of Pakistan's FMCG sector, 
                  consistently delivering quality products that meet the evolving needs of consumers across the nation.
                </p>
                <p>
                  What started as a small trading company has now grown into a respectable group with several 
                  departments within the main entity and satellite companies, each specializing in different 
                  aspects of the consumer goods market.
                </p>
                <p>
                  Our commitment to excellence has made us a trusted partner for businesses and a reliable choice 
                  for consumers seeking quality FMCG products throughout Pakistan.
                </p>
              </div>
            </div>

            {/* Right Visual - Modern Carousel */}
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                <Carousel className="w-full max-w-lg mx-auto">
                  <CarouselContent>
                    {carouselImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative group">
                          {/* Modern glass-morphism container */}
                          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-white/20 shadow-sm hover:shadow-md transition-all duration-500">
                            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100/50 p-4 flex items-center justify-center">
                              <img 
                                src={image.src} 
                                alt={image.alt} 
                                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" 
                              />
                            </div>
                            {/* Subtle accent line */}
                            <div className="h-1 w-16 bg-gradient-to-r from-progressive-red to-red-400 rounded-full mx-auto mt-4 mb-3"></div>
                            <div className="text-center">
                              <h4 className="text-lg font-semibold text-progressive-dark-grey">
                                {image.title}
                              </h4>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white shadow-sm" />
                  <CarouselNext className="right-2 bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white shadow-sm" />
                </Carousel>
              </div>
            </div>
          </div>

          {/* Features Grid - Improved Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/80 hover:border-gray-200 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="text-progressive-red mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-progressive-dark-grey mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Commitment Section - Modern Design */}
          <div className={`relative bg-gradient-to-r from-progressive-red via-red-600 to-red-700 rounded-3xl p-8 md:p-12 text-white overflow-hidden transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-12 translate-y-12"></div>
            </div>
            <div className="relative z-10 text-center">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Our Commitment</h3>
              <p className="text-lg md:text-xl leading-relaxed opacity-95 max-w-4xl mx-auto">
                PowerPlus remains committed to transforming Pakistan's consumer segment through 
                strategic partnerships, quality products, and innovative solutions that meet the 
                diverse needs of our growing market. We continue to evolve while maintaining our 
                core values of integrity, quality, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
