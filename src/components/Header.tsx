import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Home, Info, Package, Phone } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if we're on the homepage
  const isHomepage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation item interface
  interface NavItem {
    name: string;
    href: string;
    icon: React.ComponentType<any>;
    hasDropdown?: boolean;
    dropdownItems?: { name: string; href: string }[];
  }

  // Left side navigation items
  const leftNavItems: NavItem[] = [
    {
      name: 'Our Products',
      href: '#products',
      icon: Package,
      hasDropdown: true,
      dropdownItems: [
        { name: 'Air Fresheners', href: '/air-fresheners' },
        { name: 'Battery Cells', href: '/battery-cells' },
        { name: 'Shoe Polishers', href: '/shoe-polishers' },
        { name: 'Cleaning & Household', href: '/cleaning-household' },
        { name: 'Insecticides', href: '/insecticides' },
        { name: 'Paradise Hand Wash', href: '/paradise-hand-wash' }
      ]
    },
    {
      name: 'Our Impact',
      href: '/impact',
      icon: Info
    }
  ];

  // Right side navigation items
  const rightNavItems: NavItem[] = [
    {
      name: 'Our Story',
      href: '/about',
      icon: Info
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: Phone
    }
  ];

  // All nav items for mobile
  const allNavItems: NavItem[] = [...leftNavItems, ...rightNavItems];

  const handleNavigation = (href: string) => {
    if (href.startsWith('#') && location.pathname === '/') {
      const element = document.getElementById(href.replace('#', ''));
      element?.scrollIntoView({ behavior: 'smooth' });
    } else if (href.startsWith('#')) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(href.replace('#', ''));
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      navigate(href);
    }
    setIsMobileMenuOpen(false);
    setIsProductsDropdownOpen(false);
  };

  // Determine text color based on homepage and scroll state
  const getTextColor = () => {
    if (isHomepage) {
      return isScrolled 
        ? 'text-progressive-dark-grey' 
        : 'text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]';
    } else {
      // For non-homepage pages, always use dark text for better visibility
      return 'text-progressive-dark-grey';
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || !isHomepage
        ? 'bg-white/90 backdrop-blur-lg shadow-lg py-2' 
        : 'bg-transparent backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto px-4">
        {/* Desktop Navigation with Centered Logo */}
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:w-full lg:max-w-6xl lg:mx-auto">
          
          {/* Left Navigation Items */}
          <nav className="flex items-center space-x-8">
            {leftNavItems.map(item => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <div 
                    className="relative" 
                    onMouseEnter={() => setIsProductsDropdownOpen(true)} 
                    onMouseLeave={() => setIsProductsDropdownOpen(false)}
                  >
                    <button className={`hover:text-progressive-red transition-colors duration-200 font-semibold relative group flex items-center gap-2 py-2 px-1 ${getTextColor()}`}>
                      {item.name}
                      <ChevronDown size={16} className={`transition-transform duration-200 ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
                      <span className="absolute -bottom-1 left-1 w-0 h-0.5 bg-progressive-red transition-all duration-300 group-hover:w-[calc(100%-8px)]"></span>
                    </button>
                    
                    {/* Enhanced Dropdown Menu */}
                    <div className={`absolute top-full left-0 mt-3 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 z-50 ${
                      isProductsDropdownOpen 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible -translate-y-2'
                    }`}>
                      <div className="py-3">
                        {item.dropdownItems?.map(dropdownItem => (
                          <button
                            key={dropdownItem.name}
                            onClick={() => handleNavigation(dropdownItem.href)}
                            className="block w-full text-left px-5 py-3 text-progressive-dark-grey hover:bg-gradient-to-r hover:from-progressive-red/5 hover:to-red-50 hover:text-progressive-red transition-all duration-200 font-medium border-l-2 border-transparent hover:border-progressive-red"
                          >
                            {dropdownItem.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavigation(item.href)}
                    className={`hover:text-progressive-red transition-colors duration-200 font-semibold relative group py-2 px-1 ${getTextColor()}`}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-1 w-0 h-0.5 bg-progressive-red transition-all duration-300 group-hover:w-[calc(100%-8px)]"></span>
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Centered PowerPlus Logo */}
          <div className="flex justify-center items-center mx-12">
            <div className="flex items-center cursor-pointer transform transition-transform duration-300 hover:scale-105" onClick={() => navigate('/')}>
              <img 
                src="/lovable-uploads/d67f0d1d-3187-4d42-9afc-2c5619518106.png" 
                alt="PowerPlus Logo" 
                className="h-14 w-auto object-contain drop-shadow-sm" 
              />
            </div>
          </div>

          {/* Right Navigation Items */}
          <nav className="flex items-center space-x-8">
            {rightNavItems.map(item => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className={`hover:text-progressive-red transition-colors duration-200 font-semibold relative group py-2 px-1 ${getTextColor()}`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-1 w-0 h-0.5 bg-progressive-red transition-all duration-300 group-hover:w-[calc(100%-8px)]"></span>
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex items-center justify-between">
          {/* Mobile Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
            <img 
              src="/lovable-uploads/d67f0d1d-3187-4d42-9afc-2c5619518106.png" 
              alt="PowerPlus Logo" 
              className="h-10 md:h-12 object-contain transition-transform duration-300 hover:scale-105" 
            />
            <div className="hidden sm:flex flex-col">
              <span className={`font-bold text-lg leading-tight ${getTextColor()}`}>PowerPlus</span>
              <span className={`font-medium text-xs leading-tight ${
                isHomepage && !isScrolled ? 'text-white/80 [text-shadow:0_1px_2px_rgba(0,0,0,0.6)]' : 'text-gray-600'
              }`}>Progressive Group</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`p-3 hover:text-progressive-red transition-colors duration-200 rounded-xl backdrop-blur-sm shadow-lg ${
              isScrolled || !isHomepage
                ? 'text-progressive-dark-grey hover:bg-gray-100/80' 
                : 'text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.8)] hover:bg-white/10'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1'
              }`}></span>
              <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 top-3 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 top-3' : 'top-5'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="mt-4 pb-6 border-t border-gray-200/50 bg-white rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-2 mt-6 px-4">
              {allNavItems.map(item => {
                const IconComponent = item.icon;
                return (
                  <div key={item.name}>
                    <button
                      onClick={() => {
                        if (item.hasDropdown) {
                          setIsProductsDropdownOpen(!isProductsDropdownOpen);
                        } else {
                          handleNavigation(item.href);
                        }
                      }}
                      className="flex items-center justify-between text-progressive-dark-grey hover:text-progressive-red transition-all duration-200 font-semibold py-4 px-4 text-left w-full rounded-xl hover:bg-gradient-to-r hover:from-progressive-red/5 hover:to-red-50 shadow-sm hover:shadow-md"
                    >
                      <div className="flex items-center space-x-3">
                        <IconComponent size={20} />
                        <span>{item.name}</span>
                      </div>
                      {item.hasDropdown && (
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform duration-200 ${isProductsDropdownOpen ? 'rotate-180' : ''}`}
                        />
                      )}
                    </button>
                    {item.hasDropdown && (
                      <div className={`overflow-hidden transition-all duration-300 ${
                        isProductsDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="ml-8 mt-2 space-y-1 pl-4 border-l-2 border-gray-100 bg-gray-50/50 rounded-lg py-2">
                          {item.dropdownItems?.map(dropdownItem => (
                            <button
                              key={dropdownItem.name}
                              onClick={() => handleNavigation(dropdownItem.href)}
                              className="block text-gray-600 hover:text-progressive-red transition-colors duration-200 py-2 px-4 text-sm rounded-lg hover:bg-white w-full text-left font-medium"
                            >
                              {dropdownItem.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
