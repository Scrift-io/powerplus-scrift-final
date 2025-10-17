import React, { useEffect, useRef, useState } from 'react';
import { Building2, MapPin, Users, Award, Leaf, Zap, Shield, TrendingUp } from 'lucide-react';
const ImpactSection = () => {
  const [countersVisible, setCountersVisible] = useState(false);
  const countersRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setCountersVisible(true);
      }
    }, {
      threshold: 0.3
    });
    if (countersRef.current) {
      observer.observe(countersRef.current);
    }
    return () => observer.disconnect();
  }, []);
  const Counter = ({
    end,
    suffix = '',
    duration = 2000
  }: {
    end: number;
    suffix?: string;
    duration?: number;
  }) => {
    const [current, setCurrent] = useState(0);
    useEffect(() => {
      if (!countersVisible) return;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        setCurrent(prev => {
          const next = prev + increment;
          return next >= end ? end : next;
        });
      }, 16);
      return () => clearInterval(timer);
    }, [countersVisible, end, duration]);
    return <span>{Math.floor(current)}{suffix}</span>;
  };
  const impactStats = [{
    icon: Building2,
    value: 20,
    suffix: '+',
    label: 'Years in Business',
    description: 'Established leader in Pakistan\'s FMCG sector'
  }, {
    icon: MapPin,
    value: 200,
    suffix: '+',
    label: 'Cities & Towns',
    description: 'Nationwide distribution network coverage'
  }, {
    icon: Users,
    value: 8,
    suffix: '',
    label: 'Product Categories',
    description: 'Comprehensive FMCG portfolio serving diverse needs'
  }, {
    icon: Award,
    value: 1,
    suffix: '',
    label: 'Brand Recognition',
    description: 'Fastest Growing Brand of the Year 2024'
  }];
  const impactAreas = [{
    icon: TrendingUp,
    title: 'Market Leadership',
    description: 'Leading Pakistan\'s consumer goods transformation with innovative FMCG solutions across multiple categories.',
    highlights: ['20+ years industry experience', 'Multi-category market presence', 'Nationwide distribution network']
  }, {
    icon: Users,
    title: 'Economic Impact',
    description: 'Creating employment opportunities and contributing to Pakistan\'s economic growth through sustainable business practices.',
    highlights: ['Local job creation', 'Supply chain development', 'Community investment']
  }, {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Maintaining ISO certified manufacturing standards and ensuring 100% authentic products for consumer trust.',
    highlights: ['ISO certified processes', 'Quality control systems', 'Product authenticity guarantee']
  }, {
    icon: Leaf,
    title: 'Environmental Responsibility',
    description: 'Committed to sustainable practices and environmental stewardship in all our manufacturing and distribution processes.',
    highlights: ['Sustainable packaging', 'Environmental compliance', 'Green manufacturing initiatives']
  }];
  const milestones = [{
    year: '2002',
    title: 'Company Founded',
    description: 'Progressive Traders established in Karachi'
  }, {
    year: '2010',
    title: 'Product Diversification',
    description: 'Expanded into multiple FMCG categories'
  }, {
    year: '2015',
    title: 'Nationwide Expansion',
    description: 'Distribution network across 200+ cities'
  }, {
    year: '2020',
    title: 'PowerPlus Launch',
    description: 'Introduced flagship PowerPlus brand'
  }, {
    year: '2024',
    title: 'Industry Recognition',
    description: 'Awarded "Fastest Growing Brand of the Year"'
  }];
  return <div className="py-16 bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 text-center mb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-progressive-dark-grey mb-6">
            Our <span className="text-progressive-red">Impact</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Transforming Pakistan's consumer landscape through quality products, sustainable practices, and unwavering commitment to excellence.
          </p>
        </div>
      </div>

      {/* Impact Statistics */}
      <div ref={countersRef} className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-progressive-red/5 to-progressive-red/10 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-progressive-red rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-progressive-dark-grey mb-2">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <h3 className="text-lg font-semibold text-progressive-dark-grey mb-2">{stat.label}</h3>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </div>
              </div>;
        })}
        </div>
      </div>

      {/* Impact Areas */}
      <div className="container mx-auto px-4 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-progressive-dark-grey mb-6">Areas of Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach to business excellence creates positive change across multiple dimensions of Pakistan's economy and society.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {impactAreas.map((area, index) => {
          const IconComponent = area.icon;
          return <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-progressive-red rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-progressive-dark-grey mb-4">{area.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{area.description}</p>
                    <ul className="space-y-2">
                      {area.highlights.map((highlight, idx) => <li key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-progressive-red rounded-full mr-3"></div>
                          {highlight}
                        </li>)}
                    </ul>
                  </div>
                </div>
              </div>;
        })}
        </div>
      </div>

      {/* Company Milestones Timeline */}
      

      {/* Future Vision */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-progressive-red to-red-600 rounded-3xl p-12 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <Zap className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-4xl font-bold mb-6">Powering Pakistan's Future</h2>
            <p className="text-xl leading-relaxed mb-8 opacity-90">
              As we continue our journey, we remain committed to driving innovation, creating opportunities, and contributing to Pakistan's economic growth while maintaining our position as a trusted leader in the FMCG sector.
            </p>
            
          </div>
        </div>
      </div>
    </div>;
};
export default ImpactSection;