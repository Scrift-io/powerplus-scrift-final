
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import HeroBanner from '@/components/HeroBanner';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  const handleLoadComplete = () => {
    setShowPreloader(false);
    setIsLoaded(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {showPreloader && <Preloader onLoadComplete={handleLoadComplete} />}
      
      <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Header />
        <Hero />
        <ProductGrid />
        <HeroBanner />
        <AboutSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
