
import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onLoadComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onLoadComplete, 500);
          }, 800);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onLoadComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center">
      {/* Logo */}
      <div className="mb-8 animate-pulse">
        <img
          src="/lovable-uploads/d67f0d1d-3187-4d42-9afc-2c5619518106.png"
          alt="PowerPlus Logo"
          className="h-16 md:h-20 object-contain"
        />
      </div>
      
      {/* Tagline */}
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-progressive-dark-grey mb-2">
          PowerPlus
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Essentials Delivered. Trust Reinforced.
        </p>
      </div>
      
      {/* Progress Bar */}
      <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-progressive-red to-blue-600 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Progress Text */}
      <div className="mt-4 text-gray-500 text-sm">
        Loading... {progress}%
      </div>
    </div>
  );
};

export default Preloader;
