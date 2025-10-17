
import React, { useState, useEffect } from 'react';

const HeroBanner = () => {
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);
  const keywords = ['Trusted', 'Premium', 'Quality', 'Professional', 'Innovative', 'Reliable'];

  useEffect(() => {
    const keywordTimer = setInterval(() => {
      setCurrentKeywordIndex(prev => (prev + 1) % keywords.length);
    }, 2000);

    return () => clearInterval(keywordTimer);
  }, []);

  return (
    <section className="relative w-full py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Animated background elements - responsive */}
        <div className="absolute inset-0">
          <div className="absolute top-4 md:top-10 left-4 md:left-10 w-16 md:w-32 h-16 md:h-32 bg-yellow-400/10 rounded-full blur-xl animate-pulse"></div>
          <div 
            className="absolute bottom-4 md:bottom-10 right-4 md:right-10 w-12 md:w-24 h-12 md:h-24 bg-progressive-red/10 rounded-full blur-lg animate-pulse" 
            style={{ animationDelay: '1s' }}
          ></div>
          <div 
            className="absolute top-1/2 left-1/4 w-8 md:w-16 h-8 md:h-16 bg-blue-400/10 rounded-full blur-md animate-pulse" 
            style={{ animationDelay: '2s' }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* PowerPlus Logo - Responsive sizing */}
        <div className="mb-6 md:mb-8">
          <img 
            src="/lovable-uploads/d67f0d1d-3187-4d42-9afc-2c5619518106.png" 
            alt="PowerPlus Logo" 
            className="h-16 md:h-20 lg:h-24 mx-auto mb-3 md:mb-4" 
          />
        </div>

        {/* Animated Tagline - Improved mobile typography */}
        <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/90 mb-4 max-w-4xl mx-auto leading-relaxed px-2">
          <span 
            key={currentKeywordIndex} 
            className="inline-block font-bold text-yellow-400 animate-fade-in mr-2 md:mr-3" 
            style={{ animationDuration: '0.8s' }}
          >
            {keywords[currentKeywordIndex]}
          </span>
          <span className="break-words">fast-moving consumer goods designed for modern lifestyles</span>
        </div>

        {/* Award Badge Text - Responsive design */}
        <div className="text-sm md:text-base lg:text-lg text-gray-300 mb-6 md:mb-8">
          <span className="inline-block bg-yellow-400/20 py-2 px-3 md:px-4 rounded-full border border-yellow-400/30 text-center">
            FASTEST GROWING BRAND OF THE YEAR
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
