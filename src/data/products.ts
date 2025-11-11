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
        image: '/lovable-uploads/4c4d6506-4f79-49c9-bfb0-0e0281361301.png',
        rating: 4.8
      },
      {
        id: 2,
        name: 'Paradise Jasmin',
        description: 'Sweet and soothing jasmine',
        image: '/lovable-uploads/85401564-fb8b-4169-bb40-b1f37d964a2a.png',
        rating: 4.7
      },
      {
        id: 3,
        name: 'Paradise Bouquet',
        description: 'A blend of fresh flowers',
        image: '/lovable-uploads/690e635a-9d1e-4a02-8dca-5a4a092e3681.png',
        rating: 4.9
      },
      {
        id: 4,
        name: 'Paradise Lavender',
        description: 'Calming lavender essence',
        image: '/lovable-uploads/a687177a-b08a-4713-a8aa-f708f2813608.png',
        rating: 4.6
      },
      {
        id: 5,
        name: 'Paradise Luxury',
        description: 'Premium fragrance experience',
        image: '/lovable-uploads/87854141-f532-46ff-a865-fca8242920bf.png',
        rating: 5
      },
      {
        id: 6,
        name: 'Paradise Xtreme',
        description: 'Bold and long-lasting scent',
        image: '/lovable-uploads/ae742c6c-57c2-4757-a0ea-a12452e44d08.png',
        rating: 4.8
      },
      {
        id: 7,
        name: 'Paradise Aroma',
        description: 'Aromatic freshness',
        image: '/lovable-uploads/2123df41-38b7-41cd-8601-8a721d87e934.png',
        rating: 4.5
      },
      {
        id: 8,
        name: 'Paradise Blue Moon',
        description: 'Fresh aquatic fragrance',
        image: '/lovable-uploads/0d7ff15e-30ad-4f11-be3f-554827988ba0.png',
        rating: 4.7
      },
      {
        id: 9,
        name: 'Paradise Artistic',
        description: 'Unique artistic blend',
        image: '/lovable-uploads/0ed9c39c-2a6c-4334-b921-62ec83961d77.png',
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
        name: 'Super Bleach',
        description: '1L - Removes stains effectively',
        image: '/lovable-uploads/a75cd7f2-6107-4afa-b889-55c4e8254818.png',
        rating: 4.7
      },
      {
        id: 2,
        name: 'Glass & Household Cleaner',
        description: '500ml Spray - Glass cleaning',
        image: '/lovable-uploads/d3996c21-3859-4977-adfd-1ddc513a23bf.png',
        rating: 4.6
      },
      {
        id: 3,
        name: 'Toilet Cleaner',
        description: '500ml - Twin pack formula',
        image: '/lovable-uploads/0ec76395-7eaf-4d60-b578-318e266b3023.png',
        rating: 4.8
      },
      {
        id: 4,
        name: 'Dishwash Liquid',
        description: '500ml - Grease cutting',
        image: '/lovable-uploads/f4d7c799-cff8-4c65-b45b-6dd5241b2358.png',
        rating: 4.5
      },
      {
        id: 5,
        name: 'Floor Cleaner - Lemon 1L',
        description: 'Kills germs, lemon scent',
        image: '/lovable-uploads/5fbaccfe-76aa-4e45-b10d-fe1016e58c53.png',
        rating: 4.7
      },
      {
        id: 6,
        name: 'Floor Cleaner - Bouquet',
        description: '500ml - Floral bouquet',
        image: '/lovable-uploads/87a80626-bd1f-40fc-9aea-95d280e762cd.png',
        rating: 4.6
      },
      {
        id: 7,
        name: 'Dish Wash Liquid - Original',
        description: '500ml - Lemon fragrance',
        image: '/lovable-uploads/e4a81fa0-9879-4589-81d3-d576c87b1c1b.png',
        rating: 4.5
      },
      {
        id: 8,
        name: 'Floor Cleaner - Jasmine',
        description: '500ml - Soothing jasmine',
        image: '/lovable-uploads/c9b6c538-2706-4631-bcec-e408d9c95da8.png',
        rating: 4.8
      },
      {
        id: 9,
        name: 'Floor Cleaner - Lavender',
        description: '500ml - Calming lavender',
        image: '/lovable-uploads/eebe67ea-0388-4bdc-92dd-cbadcc098391.png',
        rating: 4.7
      },
      {
        id: 10,
        name: 'Floor Cleaner - Lemon 500ml',
        description: 'Refreshing lemon scent',
        image: '/lovable-uploads/25ed8e74-de58-4d1d-a974-a45dea7bab4d.png',
        rating: 4.6
      },
      {
        id: 11,
        name: 'Floor Cleaner - Fresh',
        description: '500ml - Clean and fresh',
        image: '/lovable-uploads/227ae817-bd05-4ffc-a60c-9b6e66304303.png',
        rating: 4.5
      },
      {
        id: 12,
        name: 'Floor Cleaner - Lavender 1L',
        description: 'Large size lavender',
        image: '/lovable-uploads/6ea1dd6c-50c7-4790-b43e-1d1a9429de8e.png',
        rating: 4.8
      },
      {
        id: 13,
        name: 'Floor Cleaner - Jasmine 1L',
        description: 'Premium jasmine scented',
        image: '/lovable-uploads/2804e8b6-d759-4399-864c-09c35d466a02.png',
        rating: 4.7
      },
      {
        id: 14,
        name: 'Renew All - Auto',
        description: 'Revitalizes car interiors',
        image: '/lovable-uploads/ec4cbd82-53d7-45df-9683-7c77193a6be8.png',
        rating: 4.6
      },
      {
        id: 15,
        name: 'Renew All - Electronics',
        description: 'Restores appliances',
        image: '/lovable-uploads/ec4cbd82-53d7-45df-9683-7c77193a6be8.png',
        rating: 4.5
      },
      {
        id: 16,
        name: 'Renew All - Furniture',
        description: 'Revitalizes furniture',
        image: '/lovable-uploads/ec4cbd82-53d7-45df-9683-7c77193a6be8.png',
        rating: 4.7
      },
      {
        id: 17,
        name: 'Bathroom Cleaner',
        description: 'Tackles dirt and scum',
        image: '/lovable-uploads/c3cc8f9c-0c5c-47c7-a84a-54d5a41215e0.png',
        rating: 4.8
      },
      {
        id: 18,
        name: 'Blue Liquid - 75ml',
        description: 'Revive white brightness',
        image: '/lovable-uploads/e378202b-db45-494d-9eaa-8e30352c074a.png',
        rating: 4.6
      },
      {
        id: 19,
        name: 'Blue Liquid - 150ml',
        description: 'Restore whiteness',
        image: '/lovable-uploads/e378202b-db45-494d-9eaa-8e30352c074a.png',
        rating: 4.7
      },
      {
        id: 20,
        name: 'Blue Liquid - 100ml',
        description: 'Adds brilliance',
        image: '/lovable-uploads/e378202b-db45-494d-9eaa-8e30352c074a.png',
        rating: 4.5
      },
      {
        id: 21,
        name: 'Blue Liquid - 300ml',
        description: 'Large size',
        image: '/lovable-uploads/e378202b-db45-494d-9eaa-8e30352c074a.png',
        rating: 4.8
      },
      {
        id: 22,
        name: 'Floor Cleaner - Bouquet 1L',
        description: 'Large floral bouquet',
        image: '/lovable-uploads/cce9184e-4706-4015-8bbf-b0b8efdf6e2c.png',
        rating: 4.7
      },
      {
        id: 23,
        name: 'Floor Cleaner - Fresh 1L',
        description: 'Large fresh scent',
        image: '/lovable-uploads/9ba4f387-b08a-4c47-a664-4674279ed3f1.png',
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
        image: '/lovable-uploads/4ebaaabe-b935-4542-8a2d-ebcf410736dd.png',
        rating: 4.7
      },
      {
        id: 2,
        name: 'Black Jumbo Coil',
        description: 'Premium black coils',
        image: '/lovable-uploads/fb1c90ae-59c2-4a7f-b56b-c484cbf6e61f.png',
        rating: 4.8
      },
      {
        id: 3,
        name: 'Liquid Refill - 30ml',
        description: 'Compact liquid protection',
        image: '/lovable-uploads/4d6b56ae-88e2-4364-8c49-477bcc38b76d.png',
        rating: 4.6
      },
      {
        id: 4,
        name: 'Liquid Refill - 45ml',
        description: 'Extended liquid defense',
        image: '/lovable-uploads/3cea0309-4da0-499e-861e-0076f4da7a7c.png',
        rating: 4.7
      },
      {
        id: 5,
        name: 'Machine + Refill',
        description: 'Complete protection system',
        image: '/lovable-uploads/ee66cfae-72dc-41af-b7df-93677ec2f639.png',
        rating: 4.9
      },
      {
        id: 6,
        name: 'Super Aerosol',
        description: 'Fast-acting spray',
        image: '/lovable-uploads/2beea866-805e-4777-9cd8-a5117090b1ae.png',
        rating: 4.8
      },
      {
        id: 7,
        name: 'Fast Kill Green',
        description: 'Jasmine fragrance',
        image: '/lovable-uploads/ff7759c5-e031-4ae5-b43d-9a615846f369.png',
        rating: 4.7
      },
      {
        id: 8,
        name: 'Fast Kill Red',
        description: 'Citrus-powered defense',
        image: '/lovable-uploads/50ac9642-b4bb-4e1f-a925-d0515f4abc6f.png',
        rating: 4.6
      },
      {
        id: 9,
        name: 'Insect Killer Powder',
        description: 'Targeted powder treatment',
        image: '/lovable-uploads/3c22cc41-0d73-4ae0-8e9a-39b91eb40677.png',
        rating: 4.5
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
        name: 'Instant Shine Sponge',
        description: 'Neutral instant shine',
        image: '/lovable-uploads/800fd492-ce0b-4556-a6c8-7776086bb052.png',
        rating: 4.7
      },
      {
        id: 2,
        name: 'White Liquid Cleaner',
        description: 'For white shoes',
        image: '/lovable-uploads/910913fc-6065-44dd-a66c-c89e14397bbd.png',
        rating: 4.6
      },
      {
        id: 3,
        name: 'Black Polish Tin',
        description: '50ml water resistant',
        image: '/lovable-uploads/47a64181-3fa6-4ea4-8937-3429ab15adbe.png',
        rating: 4.8
      },
      {
        id: 4,
        name: 'Neutral Express Shiner',
        description: 'Quick and easy shine',
        image: '/lovable-uploads/852b60be-7f17-4070-b57a-94cace9da9a5.png',
        rating: 4.5
      },
      {
        id: 5,
        name: 'Reservoir Sponge',
        description: 'Long-lasting shine',
        image: '/lovable-uploads/42d9cba6-0b01-4b32-b20c-b63ced464bfa.png',
        rating: 4.7
      },
      {
        id: 6,
        name: 'Instant Shine Liquid',
        description: 'Black with 33% extra',
        image: '/lovable-uploads/645233b5-4c77-4deb-9708-1995ce3cc90e.png',
        rating: 4.9
      },
      {
        id: 7,
        name: 'Brown Tin Polish',
        description: 'Reliable everyday shine',
        image: '/lovable-uploads/da4299b1-2912-4a35-b5c3-bb04cb4d45d8.png',
        rating: 4.8
      },
      {
        id: 8,
        name: 'Regular Shiner - Black',
        description: 'Instant shine, no hassle',
        image: '/lovable-uploads/608f4175-b6fa-497e-9c3c-27b1570580c0.png',
        rating: 4.6
      },
      {
        id: 9,
        name: 'Regular Shiner - Neutral',
        description: 'Instant shine, no hassle',
        image: '/lovable-uploads/e341ad56-a5c3-4133-b364-cc6b46bcd737.png',
        rating: 4.6
      },
      {
        id: 10,
        name: 'Express Shiner - Black',
        description: 'Shine in seconds',
        image: '/lovable-uploads/f90fe381-8b38-4149-b53b-a0f4472cf957.png',
        rating: 4.7
      },
      {
        id: 11,
        name: 'Express Shiner - Neutral',
        description: 'Shine in seconds',
        image: '/lovable-uploads/ea559677-d73f-4035-874a-5cbaa5db2357.png',
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
        name: 'Peach Hand Wash',
        description: 'Sweet peach fragrance',
        image: '/lovable-uploads/f51d3168-0ab0-4caf-9b26-8bca3e5dfd60.png',
        rating: 4.8
      },
      {
        id: 2,
        name: 'Aloe Vera Hand Wash',
        description: 'Soothing aloe vera',
        image: '/lovable-uploads/8ffe8251-dbbd-4cf1-a793-040b9510b79d.png',
        rating: 4.7
      },
      {
        id: 3,
        name: 'Olive Hand Wash',
        description: 'Nourishing olive extract',
        image: '/lovable-uploads/9b60b708-1693-43dc-ad4b-d8424896e1de.png',
        rating: 4.6
      },
      {
        id: 4,
        name: 'Orange Hand Wash',
        description: 'Fresh citrus burst',
        image: '/lovable-uploads/3f4fb6e3-8f37-4f61-9ad4-1370d51cc3b1.png',
        rating: 4.7
      },
      {
        id: 5,
        name: 'Mix Berries Hand Wash',
        description: 'Berry blend freshness',
        image: '/lovable-uploads/12d35a55-bb40-42d3-a3db-04732ab2c87f.png',
        rating: 4.8
      },
      {
        id: 6,
        name: 'Green Apple Hand Wash',
        description: 'Crisp apple scent',
        image: '/lovable-uploads/20906f2a-f80b-4649-ae5e-46d2dfc0c552.png',
        rating: 4.7
      }
    ]
  }
];
