
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductPageHeader from '@/components/ProductPageHeader';

const ParadiseHandWash = () => {
  const products = [
    {
      id: 1,
      name: 'Peach Hand Wash',
      description: 'Enriched with the sweet, fruity essence of ripe peaches for a fresh and uplifting wash.',
      image: '/lovable-uploads/f51d3168-0ab0-4caf-9b26-8bca3e5dfd60.png',
      features: ['Sweet peach fragrance', 'Moisturizing formula', 'Gentle cleansing', '500ml bottle']
    },
    {
      id: 2,
      name: 'Aloe Vera Hand Wash',
      description: 'Infused with soothing aloe vera to gently hydrate and calm your skin with every use.',
      image: '/lovable-uploads/8ffe8251-dbbd-4cf1-a793-040b9510b79d.png',
      features: ['Soothing aloe vera', 'Hydrating properties', 'Skin calming', '500ml bottle']
    },
    {
      id: 3,
      name: 'Olive Hand Wash',
      description: 'Packed with the goodness of olive extracts for a nourishing and antioxidant-rich cleanse.',
      image: '/lovable-uploads/9b60b708-1693-43dc-ad4b-d8424896e1de.png',
      features: ['Olive extract enriched', 'Antioxidant properties', 'Nourishing formula', '500ml bottle']
    },
    {
      id: 4,
      name: 'Orange Hand Wash',
      description: 'Bursting with zesty citrus freshness that energizes your senses and keeps hands clean and vibrant.',
      image: '/lovable-uploads/3f4fb6e3-8f37-4f61-9ad4-1370d51cc3b1.png',
      features: ['Zesty citrus fragrance', 'Energizing scent', 'Deep cleansing', '500ml bottle']
    },
    {
      id: 5,
      name: 'Mix Berries Hand Wash',
      description: 'A fruity fusion of berries offering a rich, sweet aroma and gentle cleansing care.',
      image: '/lovable-uploads/12d35a55-bb40-42d3-a3db-04732ab2c87f.png',
      features: ['Mixed berry fragrance', 'Sweet aroma', 'Gentle formula', '500ml bottle']
    },
    {
      id: 6,
      name: 'Green Apple Hand Wash',
      description: 'Crisp and refreshing green apple fragrance that awakens your hands with every wash.',
      image: '/lovable-uploads/20906f2a-f80b-4649-ae5e-46d2dfc0c552.png',
      features: ['Green apple scent', 'Refreshing formula', 'Awakening fragrance', '500ml bottle']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <ProductPageHeader
        title="Paradise Hand Wash Collection"
        description="nourishing hand cleansers infused with delightful fragrances and natural extracts"
        keywords={['Nourishing', 'Fragrant', 'Gentle', 'Natural', 'Moisturizing']}
      />

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Description */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Experience the essence of freshness and care with Paradise Hand wash – a vibrant 
              collection of nourishing hand cleansers infused with delightful fragrances and natural 
              extracts. Specially formulated to gently cleanse while preserving your skin's natural 
              moisture, each variant leaves your hands feeling soft, smooth, and refreshingly scented.
            </p>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-progressive-red rounded-full"></div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-80 bg-gradient-to-b from-gray-50 to-white p-6 flex items-center justify-center overflow-hidden">
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
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {product.description}
                  </p>
                  
                  {/* Product Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-1 text-xs text-gray-600">
                      {product.features?.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-progressive-red rounded-full mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-progressive-red to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Quality Assurance Section */}
          <div className="mt-20 bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-progressive-dark-grey mb-6">
                99.9% Germs Protection
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                All Paradise Hand Wash products are formulated to provide effective germ protection 
                while maintaining the natural moisture balance of your skin. Each variant combines 
                powerful cleansing action with gentle, skin-friendly ingredients.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
                <span className="bg-gray-100 px-4 py-2 rounded-full font-medium">Dermatologically Tested</span>
                <span className="bg-gray-100 px-4 py-2 rounded-full font-medium">pH Balanced</span>
                <span className="bg-gray-100 px-4 py-2 rounded-full font-medium">Natural Extracts</span>
                <span className="bg-gray-100 px-4 py-2 rounded-full font-medium">Gentle Formula</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ParadiseHandWash;
