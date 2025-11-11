export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  rating?: number;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  path: string;
  products: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    id: 'battery-cells',
    name: 'Battery Cells',
    description: 'Power solutions that keep your devices running',
    path: '/battery-cells',
    products: [
      {
        id: 1,
        name: 'Heavy Duty AA Batteries',
        description: 'Reliable power for everyday devices',
        image: '/lovable-uploads/Heavy_Duty_AA_Batteries.jpg',
        rating: 4.5
      },
      {
        id: 2,
        name: 'Heavy Duty AAA Batteries',
        description: 'Compact power for small electronics',
        image: '/lovable-uploads/Heavy_Duty_AAA_Batteries.jpg',
        rating: 4.5
      },
      {
        id: 3,
        name: 'Heavy Duty 9V Batteries',
        description: 'High voltage power for specialized devices',
        image: '/lovable-uploads/Heavy_Duty_9V_Batteries.jpg',
        rating: 4.5
      },
      {
        id: 4,
        name: 'Super Heavy Duty AA (2 Card)',
        description: 'Extra long-lasting power',
        image: '/lovable-uploads/Super_Heavy_Duty_AA_2Card.jpg',
        rating: 5
      },
      {
        id: 5,
        name: 'Super Heavy Duty AAA (2 Card)',
        description: 'Maximum performance in compact size',
        image: '/lovable-uploads/Super_Heavy_Duty_AAA_2Card.jpg',
        rating: 5
      },
      {
        id: 6,
        name: 'Original Equipment AA',
        description: 'OEM quality performance',
        image: '/lovable-uploads/Original_Equipment_AA.jpg',
        rating: 4
      },
      {
        id: 7,
        name: 'Original Equipment AAA',
        description: 'Trusted quality for everyday use',
        image: '/lovable-uploads/Original_Equipment_AAA.jpg',
        rating: 4
      },
      {
        id: 8,
        name: 'Premium Gold AA Batteries',
        description: 'Premium power for high-drain devices',
        image: '/lovable-uploads/Premium_Gold_AA_Batteries.jpg',
        rating: 5
      },
      {
        id: 9,
        name: 'Premium Gold AAA Batteries',
        description: 'Superior performance guaranteed',
        image: '/lovable-uploads/Premium_Gold_AAA_Batteries.jpg',
        rating: 5
      },
      {
        id: 10,
        name: 'Premium Gold D Size Batteries',
        description: 'Heavy-duty power for large devices',
        image: '/lovable-uploads/Premium_Gold_D_Size_Batteries.jpg',
        rating: 5
      }
    ]
  },
  {
    id: 'air-fresheners',
    name: 'Air Fresheners',
    description: 'Transform your surroundings with delightful fragrances',
    path: '/air-fresheners',
    products: [
      {
        id: 1,
        name: 'Paradise Rose',
        description: 'Elegant floral fragrance',
        image: '/lovable-uploads/690e635a-9d1e-4a02-8dca-5a4a092e3681.png',
        rating: 4.8
      },
      {
        id: 2,
        name: 'Paradise Jasmin',
        description: 'Sweet and soothing jasmine',
        image: '/lovable-uploads/2849f39e-5102-4eb1-bdc7-1cdd9233a577.png',
        rating: 4.7
      },
      {
        id: 3,
        name: 'Paradise Bouquet',
        description: 'A blend of fresh flowers',
        image: '/lovable-uploads/24dab3bb-d9e9-45da-8cf9-c2a47c13f86d.png',
        rating: 4.9
      },
      {
        id: 4,
        name: 'Paradise Lavender',
        description: 'Calming lavender essence',
        image: '/lovable-uploads/0219b92e-01d0-4af5-9252-ddfab7f9f3f8.png',
        rating: 4.6
      },
      {
        id: 5,
        name: 'Paradise Luxury',
        description: 'Premium fragrance experience',
        image: '/lovable-uploads/0d7ff15e-30ad-4f11-be3f-554827988ba0.png',
        rating: 5
      },
      {
        id: 6,
        name: 'Paradise Xtreme',
        description: 'Bold and long-lasting scent',
        image: '/lovable-uploads/f102405a-0aea-4f87-b41c-67aa702a4110.png',
        rating: 4.8
      },
      {
        id: 7,
        name: 'Paradise Aroma',
        description: 'Aromatic freshness',
        image: '/lovable-uploads/2d70e6ae-6aff-4dea-82d3-2163b8eb9bf1.png',
        rating: 4.5
      },
      {
        id: 8,
        name: 'Paradise Blue Moon',
        description: 'Fresh aquatic fragrance',
        image: '/lovable-uploads/2123df41-38b7-41cd-8601-8a721d87e934.png',
        rating: 4.7
      },
      {
        id: 9,
        name: 'Paradise Artistic',
        description: 'Unique artistic blend',
        image: '/lovable-uploads/5404869b-670f-4f45-85e7-834d76e697dd.png',
        rating: 4.6
      }
    ]
  },
  {
    id: 'cleaning-household',
    name: 'Cleaning & Household',
    description: 'Complete solutions for a spotless home',
    path: '/cleaning-household',
    products: [
      {
        id: 1,
        name: 'Washroom Cleaner',
        description: 'Powerful bathroom cleaning',
        image: '/lovable-uploads/852b60be-7f17-4070-b57a-94cace9da9a5.png',
        rating: 4.7
      },
      {
        id: 2,
        name: 'Bleach',
        description: 'Strong whitening power',
        image: '/lovable-uploads/0ec76395-7eaf-4d60-b578-318e266b3023.png',
        rating: 4.5
      },
      {
        id: 3,
        name: 'Glass Cleaner',
        description: 'Streak-free shine',
        image: '/lovable-uploads/a8af77ec-411c-4845-92a0-1b690137c9fe.png',
        rating: 4.6
      },
      {
        id: 4,
        name: 'Toilet Cleaner',
        description: 'Deep cleaning formula',
        image: '/lovable-uploads/eeac2e71-54c3-458f-9681-c0fe5d9b0731.png',
        rating: 4.8
      },
      {
        id: 5,
        name: 'Dishwash Liquid',
        description: 'Tough on grease',
        image: '/lovable-uploads/6a6da22e-7961-40ee-bbd7-20bf80df7af1.png',
        rating: 4.7
      },
      {
        id: 6,
        name: 'Floor Cleaner - Rose',
        description: 'Fresh floral scent',
        image: '/lovable-uploads/9108e5b5-16cc-4fe4-97c8-a94aca46495e.png',
        rating: 4.6
      },
      {
        id: 7,
        name: 'Floor Cleaner - Jasmine',
        description: 'Sweet jasmine fragrance',
        image: '/lovable-uploads/68b63331-6a10-4736-88aa-32d0674d3771.png',
        rating: 4.6
      },
      {
        id: 8,
        name: 'Floor Cleaner - Lavender',
        description: 'Calming lavender',
        image: '/lovable-uploads/53ed501b-93a9-4108-bb20-712a6e277719.png',
        rating: 4.5
      },
      {
        id: 9,
        name: 'Floor Cleaner - Lemon',
        description: 'Refreshing citrus clean',
        image: '/lovable-uploads/20dd07ad-83f2-4a0f-8220-1efead871d54.png',
        rating: 4.7
      },
      {
        id: 10,
        name: 'Floor Cleaner - Pine',
        description: 'Forest fresh scent',
        image: '/lovable-uploads/f90fe381-8b38-4149-b53b-a0f4472cf957.png',
        rating: 4.6
      },
      {
        id: 11,
        name: 'Bathroom Cleaner',
        description: 'Complete bathroom care',
        image: '/lovable-uploads/e7228be2-fadc-4299-894a-bd1d07d98053.png',
        rating: 4.7
      },
      {
        id: 12,
        name: 'Blue Liquid',
        description: 'Multi-purpose cleaner',
        image: '/lovable-uploads/64c304bb-e073-47d3-a2a4-f7098c5406ec.png',
        rating: 4.5
      },
      {
        id: 13,
        name: 'Renew All - Rose',
        description: 'All-in-one rose freshness',
        image: '/lovable-uploads/6387d7b6-937c-4619-bcc6-4b973742f9a6.png',
        rating: 4.8
      },
      {
        id: 14,
        name: 'Renew All - Jasmine',
        description: 'Complete jasmine solution',
        image: '/lovable-uploads/e341ad56-a5c3-4133-b364-cc6b46bcd737.png',
        rating: 4.7
      },
      {
        id: 15,
        name: 'Renew All - Lavender',
        description: 'Total lavender care',
        image: '/lovable-uploads/e2c5a68b-18b0-425d-bd66-2ac27a8998d2.png',
        rating: 4.7
      },
      {
        id: 16,
        name: 'Renew All - Lemon',
        description: 'Complete lemon clean',
        image: '/lovable-uploads/335f5d1c-9396-4d75-995c-acf07c6cf6ab.png',
        rating: 4.8
      },
      {
        id: 17,
        name: 'Renew All - Pine',
        description: 'All-purpose pine fresh',
        image: '/lovable-uploads/42d9cba6-0b01-4b32-b20c-b63ced464bfa.png',
        rating: 4.6
      },
      {
        id: 18,
        name: 'Liquid Detergent - Rose',
        description: 'Gentle rose formula',
        image: '/lovable-uploads/71d013c5-e57d-4153-a6c2-cc648722d1d6.png',
        rating: 4.7
      },
      {
        id: 19,
        name: 'Liquid Detergent - Lavender',
        description: 'Soothing lavender wash',
        image: '/lovable-uploads/f4d7c799-cff8-4c65-b45b-6dd5241b2358.png',
        rating: 4.6
      },
      {
        id: 20,
        name: 'Liquid Detergent - Jasmine',
        description: 'Fresh jasmine clean',
        image: '/lovable-uploads/227ae817-bd05-4ffc-a60c-9b6e66304303.png',
        rating: 4.7
      },
      {
        id: 21,
        name: 'Liquid Detergent - Lemon',
        description: 'Bright lemon freshness',
        image: '/lovable-uploads/9ba4f387-b08a-4c47-a664-4674279ed3f1.png',
        rating: 4.8
      },
      {
        id: 22,
        name: 'Fabric Softener',
        description: 'Ultra-soft fabric care',
        image: '/lovable-uploads/ea559677-d73f-4035-874a-5cbaa5db2357.png',
        rating: 4.7
      },
      {
        id: 23,
        name: 'Detergent Powder',
        description: 'Powerful cleaning action',
        image: '/lovable-uploads/9e12137d-c1df-49be-a9a3-41ee96268ec6.png',
        rating: 4.6
      }
    ]
  },
  {
    id: 'insecticides',
    name: 'Insecticides',
    description: 'Effective protection against household pests',
    path: '/insecticides',
    products: [
      {
        id: 1,
        name: 'Jumbo X Coil',
        description: 'Extra-large mosquito coils',
        image: '/lovable-uploads/a687177a-b08a-4713-a8aa-f708f2813608.png',
        rating: 4.7
      },
      {
        id: 2,
        name: 'Black Jumbo Coil',
        description: 'Premium black coils',
        image: '/lovable-uploads/f51d3168-0ab0-4caf-9b26-8bca3e5dfd60.png',
        rating: 4.8
      },
      {
        id: 3,
        name: 'Liquid Repellent - 45ml',
        description: 'Compact liquid protection',
        image: '/lovable-uploads/f5218458-5140-4d61-ade3-17c882fa0a95.png',
        rating: 4.6
      },
      {
        id: 4,
        name: 'Liquid Repellent - 60ml',
        description: 'Extended liquid defense',
        image: '/lovable-uploads/cce9184e-4706-4015-8bbf-b0b8efdf6e2c.png',
        rating: 4.7
      },
      {
        id: 5,
        name: 'Super Aerosol',
        description: 'Fast-acting spray',
        image: '/lovable-uploads/c224c5eb-346a-4670-bc84-3364fc1add8a.png',
        rating: 4.8
      },
      {
        id: 6,
        name: 'Fast Kill Aerosol',
        description: 'Instant pest elimination',
        image: '/lovable-uploads/b4f2e290-8f14-4040-b11e-1c4e5ab79717.png',
        rating: 4.9
      },
      {
        id: 7,
        name: 'Super Fast Kill',
        description: 'Maximum strength formula',
        image: '/lovable-uploads/5fbaccfe-76aa-4e45-b10d-fe1016e58c53.png',
        rating: 5
      },
      {
        id: 8,
        name: 'Insect Killer Chalk',
        description: 'Long-lasting barrier',
        image: '/lovable-uploads/79a95d7b-9949-45a1-b0b6-e15461690114.png',
        rating: 4.5
      },
      {
        id: 9,
        name: 'Insecticide Powder',
        description: 'Targeted powder treatment',
        image: '/lovable-uploads/30bbfb02-1255-4644-9150-00da413d34df.png',
        rating: 4.6
      }
    ]
  },
  {
    id: 'shoe-polishers',
    name: 'Shoe Care Products',
    description: 'Professional shoe care for lasting impressions',
    path: '/shoe-polishers',
    products: [
      {
        id: 1,
        name: 'Shoe Polish - Black',
        description: 'Classic black shine',
        image: '/lovable-uploads/b8d5d4de-578b-474a-9975-860f72da62a4.png',
        rating: 4.7
      },
      {
        id: 2,
        name: 'Shoe Polish - Brown',
        description: 'Rich brown polish',
        image: '/lovable-uploads/d79ba1a5-a338-433a-bf60-f3701149387e.png',
        rating: 4.6
      },
      {
        id: 3,
        name: 'Shoe Polish - Neutral',
        description: 'Universal clear polish',
        image: '/lovable-uploads/79bde4f0-fab4-4f9c-a763-2494823f18be.png',
        rating: 4.5
      },
      {
        id: 4,
        name: 'Shoe Polish - Tan',
        description: 'Natural tan finish',
        image: '/lovable-uploads/12a0a29a-a7f6-44df-a794-9077a8af38c4.png',
        rating: 4.6
      },
      {
        id: 5,
        name: 'Express Shiner - Black',
        description: 'Quick black shine',
        image: '/lovable-uploads/d67f0d1d-3187-4d42-9afc-2c5619518106.png',
        rating: 4.8
      },
      {
        id: 6,
        name: 'Express Shiner - Brown',
        description: 'Fast brown polish',
        image: '/lovable-uploads/a024c623-a830-416e-9082-242d24c35522.png',
        rating: 4.7
      },
      {
        id: 7,
        name: 'Regular Shiner - Black',
        description: 'Daily black care',
        image: '/lovable-uploads/d78c2b7f-16a5-493f-870b-749552da1306.png',
        rating: 4.6
      },
      {
        id: 8,
        name: 'Regular Shiner - Brown',
        description: 'Everyday brown shine',
        image: '/lovable-uploads/7bc3d217-fd58-4ebc-8c7e-0f9ca54160b1.png',
        rating: 4.6
      },
      {
        id: 9,
        name: 'Instant Shine - Black',
        description: 'Immediate black gloss',
        image: '/lovable-uploads/0ebe7e1f-f031-4823-8fbc-ace3a01fda31.png',
        rating: 4.9
      },
      {
        id: 10,
        name: 'Instant Shine - Brown',
        description: 'Quick brown brilliance',
        image: '/lovable-uploads/a0b57d9e-5290-46f6-9e2b-24034f93a4bd.png',
        rating: 4.8
      },
      {
        id: 11,
        name: 'Instant Shine - Neutral',
        description: 'Universal instant shine',
        image: '/lovable-uploads/f52733e0-ced4-473e-8628-0b81bb55042c.png',
        rating: 4.7
      }
    ]
  },
  {
    id: 'paradise-hand-wash',
    name: 'Paradise Hand Wash',
    description: 'Nourishing hand cleansers with delightful fragrances',
    path: '/paradise-hand-wash',
    products: [
      {
        id: 1,
        name: 'Paradise Peach',
        description: 'Sweet peach fragrance',
        image: '/lovable-uploads/12d35a55-bb40-42d3-a3db-04732ab2c87f.png',
        rating: 4.8
      },
      {
        id: 2,
        name: 'Paradise Aloe Vera',
        description: 'Soothing aloe vera',
        image: '/lovable-uploads/25ed8e74-de58-4d1d-a974-a45dea7bab4d.png',
        rating: 4.7
      },
      {
        id: 3,
        name: 'Paradise Olive',
        description: 'Nourishing olive extract',
        image: '/lovable-uploads/2a72c255-0ca6-476a-b0d2-42a92226bad0.png',
        rating: 4.6
      },
      {
        id: 4,
        name: 'Paradise Orange',
        description: 'Fresh citrus burst',
        image: '/lovable-uploads/2a7844f0-fe61-439a-b38f-032773220814.png',
        rating: 4.7
      },
      {
        id: 5,
        name: 'Paradise Mix Berries',
        description: 'Berry blend freshness',
        image: '/lovable-uploads/036ed043-3cbc-4b80-8754-b85e58ffe5ba.png',
        rating: 4.8
      },
      {
        id: 6,
        name: 'Paradise Green Apple',
        description: 'Crisp apple scent',
        image: '/lovable-uploads/2b86ee6f-f2c9-4a06-9503-b171d070bb61.png',
        rating: 4.7
      }
    ]
  }
];
