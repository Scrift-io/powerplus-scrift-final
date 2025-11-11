import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
    if (footerRef.current) {
      observer.observe(footerRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return <footer id="contact" ref={footerRef} className="bg-progressive-dark-grey text-white py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF0000' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">PowerPlus</h3>
              <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                Delivering premium quality products that enhance daily life with innovation and excellence.
              </p>
              
              {/* Email */}
              <div className="flex items-center gap-2 group mb-4">
                <Mail size={16} className="text-progressive-red flex-shrink-0" />
                <a href="mailto:info@powerplus.com.pk" className="text-white hover:text-progressive-red transition-colors text-sm">
                  info@powerplus.com.pk
                </a>
              </div>

              {/* Business Hours */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Business Hours</h4>
                <div className="text-gray-300 text-xs space-y-1">
                  <p>Monday – Friday: 9:00am to 5:00pm</p>
                  <p>Saturday: 9:00am to 2:00pm</p>
                </div>
              </div>

              {/* Social Networks */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white">Follow Us</h4>
                <div className="flex gap-3">
                  <a href="https://www.facebook.com/PowerPlusPakistan" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-progressive-red transition-all duration-200">
                    <Facebook size={20} />
                  </a>
                  <a href="https://www.instagram.com/official.powerpluspk?igsh=MW14N2FqODBvNzkzcg" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-progressive-red transition-all duration-200">
                    <Instagram size={20} />
                  </a>
                  <a href="https://www.linkedin.com/company/progressive-group-pakistan/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-progressive-red transition-all duration-200">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
              <div className="space-y-2">
                <a href="/" className="block text-gray-300 hover:text-progressive-red transition-colors text-sm">Home</a>
                <a href="/about" className="block text-gray-300 hover:text-progressive-red transition-colors text-sm">About Us</a>
                <a href="/impact" className="block text-gray-300 hover:text-progressive-red transition-colors text-sm">Our Impact</a>
                <a href="/contact" className="block text-gray-300 hover:text-progressive-red transition-colors text-sm">Contact</a>
              </div>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Products</h3>
              <div className="space-y-2">
                <a href="/air-fresheners" className="block text-gray-300 hover:text-progressive-red transition-colors text-sm">Air Fresheners</a>
                <a href="/battery-cells" className="block text-gray-300 hover:text-progressive-red transition-colors text-sm">Battery Cells</a>
                <a href="/cleaning-household" className="block text-gray-300 hover:text-progressive-red transition-colors text-sm">Cleaning & Household</a>
                <a href="/insecticides" className="block text-gray-300 hover:text-progressive-red transition-colors text-sm">Insecticides</a>
                <a href="/shoe-polishers" className="block text-gray-300 hover:text-progressive-red transition-colors text-sm">Shoe Polishers</a>
              </div>
            </div>
          </div>

          {/* Office Addresses - Horizontal Layout */}
          <div className="border-t border-gray-700/50 pt-6 mb-8">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Karachi Head Office */}
              <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/30 hover:border-progressive-red/30 transition-colors duration-200">
                <div className="flex items-start gap-2 mb-2">
                  <MapPin size={16} className="text-progressive-red mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-progressive-red text-sm mb-1">Karachi Head Office</h4>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      LC-40, Landhi Industrial Area<br />
                      Near Opal Laboratory<br />
                      Karachi, Pakistan Post Code 71500
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2 ml-5">
                  <Phone size={14} className="text-progressive-red mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 text-xs">021-35026618-20, 35026622, 021-35026602</p>
                </div>
              </div>

              {/* Lahore Regional Office */}
              <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/30 hover:border-progressive-red/30 transition-colors duration-200">
                <div className="flex items-start gap-2 mb-2">
                  <MapPin size={16} className="text-progressive-red mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-progressive-red text-sm mb-1">Lahore Regional Office</h4>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      60th Mall Road<br />
                      Shahrah-e-Quaid-e-Azam<br />
                      Lahore, Pakistan
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2 ml-5">
                  <Phone size={14} className="text-progressive-red mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 text-xs">042-36361067-9</p>
                </div>
              </div>

              {/* Rawalpindi Regional Office */}
              <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/30 hover:border-progressive-red/30 transition-colors duration-200">
                <div className="flex items-start gap-2 mb-2">
                  <MapPin size={16} className="text-progressive-red mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-progressive-red text-sm mb-1">Rawalpindi Regional Office</h4>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      House No. 51, Street #5<br />
                      Khan Avenue Behind Shell filling Station<br />
                      Chaklala scheme III
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2 ml-5">
                  <Phone size={14} className="text-progressive-red mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 text-xs">051-5145024</p>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright and Scrift Badge */}
          <div className="border-t border-gray-700 pt-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-400">© 2025 PowerPlus. All rights reserved.</p>
              
              {/* Scrift Badge */}
              <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 rounded-full px-3 py-1.5 hover:bg-gray-700/50 transition-all duration-300 group">
                <span className="text-gray-300 text-xs font-medium">Powered by</span>
                <img src="/lovable-uploads/5c0ad8c5-3193-4426-a21e-909a8de429c0.png" alt="Scrift Logo" className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-white text-xs font-semibold">Scrift</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;