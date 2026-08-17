export const PRODUCTS = [
  // --- CLOTHING ---
  {
    id: "prod-1",
    slug: "action-overshirt",
    name: "Action Overshirt",
    category: "Clothing",
    categorySlug: "clothing",
    price: 2999,
    originalPrice: 3499,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80"
    ],
    shortDescription: "A durable hybrid shirt jacket engineered with water-repellent stretch cotton canvas and tactile matte hardware.",
    description: "Built for seamless transitions between urban environments and outdoor movement. The Action Overshirt features reinforced elbow panels, a dual-zip front closure, and hidden chest zip pockets for everyday essential security.",
    features: [
      "Water-resistant DWR coating",
      "Reinforced articulated elbows",
      "Dual YKK matte black zippers",
      "Concealed passport & phone pockets",
      "Breathable mesh lining"
    ],
    specifications: {
      "Material": "68% Organic Cotton, 28% Recycled Nylon, 4% Elastane",
      "Weight": "420g",
      "Fit": "Relaxed Tailored",
      "Care": "Machine wash cold, lay flat to dry"
    },
    featured: true,
    badge: "Flagship",
    rating: 4.9,
    reviewCount: 42,
    isShowcaseOnly: true
  },
  {
    id: "prod-2",
    slug: "everyday-utility-tee",
    name: "Everyday Utility Tee",
    category: "Clothing",
    categorySlug: "clothing",
    price: 1299,
    originalPrice: 1599,
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80"
    ],
    shortDescription: "Heavyweight 240 GSM organic cotton crewneck with reinforced collar stitching and subtle brand detailing.",
    description: "The core foundation of your wardrobe. Made from ultra-soft yet structural long-staple organic cotton, the Everyday Utility Tee retains its shape wash after wash while offering natural thermoregulation.",
    features: [
      "Heavyweight 240 GSM organic cotton",
      "Pre-shrunk structural knit",
      "Bound rib collar that will not stretch out",
      "Minimal tonal logo embroider on hem"
    ],
    specifications: {
      "Material": "100% Organic Pima Cotton",
      "Weight": "240 GSM",
      "Fit": "Regular Modern Fit",
      "Care": "Cold wash with like colors"
    },
    featured: true,
    badge: "Best Seller",
    rating: 4.8,
    reviewCount: 88,
    isShowcaseOnly: true
  },
  {
    id: "prod-3",
    slug: "motion-cargo-pants",
    name: "Motion Cargo Pants",
    category: "Clothing",
    categorySlug: "clothing",
    price: 3499,
    originalPrice: 3999,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
    ],
    shortDescription: "Tapered technical cargo pants constructed from four-way stretch ripstop fabric with magnetic pocket flaps.",
    description: "Designed for active mobility without sacrificing tailored aesthetics. Features an elasticated drawstring waistband, knee gussets for unrestricted bending, and flush-fit cargo pockets equipped with silent German magnetic closures.",
    features: [
      "4-way stretch abrasion-resistant ripstop",
      "Fidlock® magnetic cargo closures",
      "Articulated knee construction",
      "Adjustable cinch cuffs at ankle"
    ],
    specifications: {
      "Material": "90% Nylon, 10% Spandex Ripstop",
      "Weight": "380g",
      "Fit": "Tapered Active Fit",
      "Care": "Machine wash cool"
    },
    featured: false,
    badge: "New Arrival",
    rating: 4.7,
    reviewCount: 31,
    isShowcaseOnly: true
  },
  {
    id: "prod-4",
    slug: "essential-street-jacket",
    name: "Essential Street Jacket",
    category: "Clothing",
    categorySlug: "clothing",
    price: 4999,
    originalPrice: 5999,
    image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&w=800&q=80"
    ],
    shortDescription: "Windproof and water-resistant shell jacket featuring minimalist lines, high collar protection, and thermal lining.",
    description: "The ultimate armor for chilly mornings and overcast days. The Essential Street Jacket incorporates a sleek matte outer shell, waterproof sealed seam zips, and an integrated microfiber key lanyard.",
    features: [
      "3-layer breathable windproof membrane",
      "Seam-sealed stormproof zippers",
      "Ergonomic hood with dual tension locks",
      "Internal thermal regulation layer"
    ],
    specifications: {
      "Material": "100% Recycled Polyester Shell",
      "Waterproofing": "15,000mm Rating",
      "Fit": "Standard Outer Shell",
      "Care": "Wipe clean or cold delicate cycle"
    },
    featured: true,
    badge: "Top Rated",
    rating: 5.0,
    reviewCount: 64,
    isShowcaseOnly: true
  },

  // --- ELECTRONICS ---
  {
    id: "prod-17",
    slug: "wireless-earbuds-pro",
    name: "Wireless Earbuds Pro",
    category: "Electronics",
    categorySlug: "electronics",
    price: 5999,
    originalPrice: 6999,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=800&q=80"
    ],
    shortDescription: "Active noise-cancelling true wireless earbuds featuring spatial audio drivers and aluminum wireless charging case.",
    description: "Immerse yourself in acoustic perfection. Wireless Earbuds Pro pack custom 11mm graphene drivers, hybrid active noise cancellation, transparency audio mode, and IPX5 water resistance inside a sleek matte navy aluminum charging case.",
    features: [
      "Adaptive Active Noise Cancellation (ANC)",
      "Custom 11mm Graphene acoustic drivers",
      "32-hour total battery life with case",
      "Triple beamforming microphones per earbud",
      "Qi-certified wireless charging case"
    ],
    specifications: {
      "Driver Size": "11mm Graphene Dynamic",
      "Noise Cancellation": "Up to -42dB ANC",
      "Battery Life": "8h (earbuds) + 24h (charging case)",
      "Water Resistance": "IPX5 Sweatproof"
    },
    featured: true,
    badge: "Stitch Pro",
    rating: 4.9,
    reviewCount: 145,
    isShowcaseOnly: true
  },
  {
    id: "prod-5",
    slug: "focus-wireless-headphones",
    name: "Focus Wireless Headphones",
    category: "Electronics",
    categorySlug: "electronics",
    price: 6999,
    originalPrice: 7999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80"
    ],
    shortDescription: "Active noise-cancelling over-ear headphones with custom 40mm titanium drivers and 40-hour playback.",
    description: "Engineered for deep concentration and studio-grade sound. Focus Headphones feature hybrid active noise cancellation, memory foam ear cushions wrapped in soft protein leather, and intuitive physical control dials.",
    features: [
      "Hybrid Active Noise Cancellation (ANC)",
      "40mm custom titanium dynamic drivers",
      "40-hour continuous battery life",
      "Multipoint Bluetooth 5.3 connection",
      "Ultra-low latency game/media mode"
    ],
    specifications: {
      "Driver": "40mm Titanium",
      "Frequency Response": "20Hz - 40kHz",
      "Battery": "800mAh (40h playback)",
      "Weight": "260g"
    },
    featured: true,
    badge: "Flagship",
    rating: 4.9,
    reviewCount: 112,
    isShowcaseOnly: true
  },
  {
    id: "prod-6",
    slug: "compact-smart-lamp",
    name: "Compact Smart Lamp",
    category: "Electronics",
    categorySlug: "electronics",
    price: 2499,
    originalPrice: 2999,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80"
    ],
    shortDescription: "Anodized aluminum LED desk luminaire with touch-dimmable color temp and integrated wireless pad.",
    description: "Illuminate your desk with surgical clarity. The Compact Smart Lamp features flicker-free warm-to-cool LED lighting, a 360-degree swivel hinge, and a 15W Qi fast wireless charger embedded in its matte navy base.",
    features: [
      "Flicker-free eye protection LEDs",
      "Stepless touch brightness & color temp",
      "Built-in 15W wireless charging base",
      "Precision CNC anodized aluminum arm"
    ],
    specifications: {
      "Illuminance": "1200 Lux @ 40cm",
      "Power": "24W Max",
      "Wireless Output": "15W Qi",
      "Color Temp": "2700K - 6500K"
    },
    featured: false,
    badge: "Popular",
    rating: 4.8,
    reviewCount: 47,
    isShowcaseOnly: true
  },
  {
    id: "prod-7",
    slug: "pocket-power-bank",
    name: "Pocket Power Bank",
    category: "Electronics",
    categorySlug: "electronics",
    price: 1899,
    originalPrice: 2299,
    image: "https://images.unsplash.com/photo-1609592424074-1ef53d8650e4?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1609592424074-1ef53d8650e4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80"
    ],
    shortDescription: "10,000mAh magnetic MagSafe-compatible power cell housed in a slim sandblasted aluminum shell.",
    description: "Power that snaps directly to your device. The Pocket Power Bank delivers 20W USB-C Power Delivery charging and strong magnetic alignment, keeping your smartphones and accessories charged during intense schedules.",
    features: [
      "Strong 12N magnetic snap alignment",
      "20W USB-C PD fast bidirectional charging",
      "Smart LED power reserve matrix",
      "Fire-retardant thermal alloy body"
    ],
    specifications: {
      "Capacity": "10,000 mAh / 37Wh",
      "Input/Output": "USB-C 20W PD",
      "Wireless Speed": "15W Max",
      "Dimensions": "102 x 65 x 14 mm"
    },
    featured: true,
    badge: "Essential",
    rating: 4.7,
    reviewCount: 79,
    isShowcaseOnly: true
  },
  {
    id: "prod-8",
    slug: "minimal-bluetooth-speaker",
    name: "Minimal Bluetooth Speaker",
    category: "Electronics",
    categorySlug: "electronics",
    price: 3299,
    originalPrice: 3999,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80"
    ],
    shortDescription: "IPX7 waterproof portable speaker with 360-degree room-filling acoustic radiator and gold tactile knobs.",
    description: "Compact size, immense acoustic depth. Featuring passive radiators and dual neodymium transducers, this speaker fills any room or outdoor gathering with rich, distortion-free sound for up to 18 hours.",
    features: [
      "IPX7 fully submersible waterproof rating",
      "Dual passive bass radiators",
      "18-hour continuous battery life",
      "Tactile gold-plated aluminum volume dial"
    ],
    specifications: {
      "Output": "20W RMS",
      "Waterproofing": "IPX7",
      "Bluetooth": "v5.3 AAC / SBC",
      "Battery": "3600mAh"
    },
    featured: false,
    badge: "Outdoor Ready",
    rating: 4.9,
    reviewCount: 53,
    isShowcaseOnly: true
  },

  // --- HOME & KITCHEN ---
  {
    id: "prod-9",
    slug: "stoneware-mug-set",
    name: "Stoneware Mug Set",
    category: "Home & Kitchen",
    categorySlug: "home-kitchen",
    price: 1299,
    originalPrice: 1599,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=800&q=80"
    ],
    shortDescription: "Set of 2 hand-thrown ceramic mugs with matte midnight blue exterior and ergonomic unglazed grip base.",
    description: "Crafted for quiet mornings and deep thoughts. Each set of two 350ml mugs is ceramic kiln-fired at 1280°C for exceptional heat retention and durability, coated in a subtle satin glaze.",
    features: [
      "High-fire durable ceramic stoneware",
      "Ergonomic thumb-rest handle design",
      "Microwave & dishwasher safe",
      "Satin non-slip matte finish"
    ],
    specifications: {
      "Capacity": "350 ml / 12 oz each",
      "Quantity": "Set of 2",
      "Material": "Kiln-fired Stoneware Ceramic",
      "Dimensions": "8.5 cm x 10 cm"
    },
    featured: true,
    badge: "Handcrafted",
    rating: 4.9,
    reviewCount: 95,
    isShowcaseOnly: true
  },
  {
    id: "prod-10",
    slug: "modular-storage-tray",
    name: "Modular Storage Tray",
    category: "Home & Kitchen",
    categorySlug: "home-kitchen",
    price: 1699,
    originalPrice: 1999,
    image: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1532372576444-dda954194ad0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80"
    ],
    shortDescription: "Stackable walnut and powder-coated steel catchall tray system for desk essentials and everyday carry items.",
    description: "Eliminate surface clutter with refined order. The Modular Storage Tray pairs a dark American walnut magnetic partition with a solid matte navy steel tray base to secure keys, watch, glasses, and pens.",
    features: [
      "Solid American Walnut timber insert",
      "Heavyweight powder-coated steel base",
      "Microfiber felt anti-scratch feet",
      "Modular magnetic divider positioning"
    ],
    specifications: {
      "Dimensions": "28 x 18 x 2.5 cm",
      "Weight": "650g",
      "Materials": "Walnut Wood & Carbon Steel",
      "Finish": "Matte Navy Powdercoat"
    },
    featured: false,
    badge: "Organization",
    rating: 4.8,
    reviewCount: 38,
    isShowcaseOnly: true
  },
  {
    id: "prod-11",
    slug: "precision-kitchen-scale",
    name: "Precision Kitchen Scale",
    category: "Home & Kitchen",
    categorySlug: "home-kitchen",
    price: 1499,
    originalPrice: 1799,
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80"
    ],
    shortDescription: "Ultra-accurate 0.1g digital scale with concealed OLED display and built-in pour-over timer.",
    description: "Master your coffee extraction and culinary accuracy. Features 0.1 gram precision sensing, a seamless tempered glass top that wipes clean effortlessly, and an invisible LED display that lights up upon touch.",
    features: [
      "0.1g high-precision strain gauge sensors",
      "Integrated pour-over barista timer",
      "Concealed high-contrast OLED screen",
      "Water-resistant silicone heat pad included"
    ],
    specifications: {
      "Max Capacity": "3000g / 0.1g accuracy",
      "Battery": "USB-C Rechargeable 1000mAh",
      "Units": "g, oz, ml",
      "Dimensions": "15 x 13 x 2.5 cm"
    },
    featured: true,
    badge: "Coffee Series",
    rating: 4.9,
    reviewCount: 71,
    isShowcaseOnly: true
  },
  {
    id: "prod-12",
    slug: "everyday-pour-over-set",
    name: "Everyday Pour-Over Set",
    category: "Home & Kitchen",
    categorySlug: "home-kitchen",
    price: 2199,
    originalPrice: 2599,
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
    ],
    shortDescription: "Borosilicate glass carafe with double-mesh stainless steel dripper filter and heat-resistant silicone collar.",
    description: "Clean coffee brewing engineered without paper filters. The ultra-fine double stainless mesh dripper preserves coffee oils for a full-bodied cup inside a thermal shock resistant 600ml glass carafe.",
    features: [
      "Reusable 304 stainless ultra-fine micro-filter",
      "600ml heat-resistant borosilicate glass",
      "Ergonomic gold-trimmed heat collar",
      "Precision spout for drip-free pouring"
    ],
    specifications: {
      "Volume": "600 ml (4 cups)",
      "Glass Type": "Borosilicate Temp (-20 to 150°C)",
      "Filter": "Dual-layer 304 Stainless Steel",
      "Care": "Dishwasher safe"
    },
    featured: false,
    badge: "Eco-Friendly",
    rating: 4.8,
    reviewCount: 44,
    isShowcaseOnly: true
  },

  // --- EVERYDAY ESSENTIALS ---
  {
    id: "prod-13",
    slug: "daily-carry-organizer",
    name: "Daily Carry Organizer",
    category: "Everyday Essentials",
    categorySlug: "everyday-essentials",
    price: 1999,
    originalPrice: 2499,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80"
    ],
    shortDescription: "Weatherproof 1680D ballistic nylon folio with accordion pocket layout and YKK aqua-guard zips.",
    description: "Your mobile office command center. Designed to hold an iPad Pro 11\", notebooks, power banks, cables, passports, and pens inside a shock-absorbent padded structure.",
    features: [
      "1680D Recycled Ballistic Nylon construction",
      "Padded soft-fleece tablet sleeve (up to 11\")",
      "Elastic loops for cable & pen management",
      "Exterior quick-access magnetic pocket"
    ],
    specifications: {
      "Dimensions": "27 x 20 x 4.5 cm",
      "Weight": "310g",
      "Zippers": "YKK AquaGuard® Waterproof",
      "Compatibility": "iPad 11\", Kindle, Mini Notebooks"
    },
    featured: true,
    badge: "Best Seller",
    rating: 4.9,
    reviewCount: 120,
    isShowcaseOnly: true
  },
  {
    id: "prod-14",
    slug: "aluminum-water-bottle",
    name: "Aluminum Water Bottle",
    category: "Everyday Essentials",
    categorySlug: "everyday-essentials",
    price: 999,
    originalPrice: 1299,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=800&q=80"
    ],
    shortDescription: "750ml vacuum insulated stainless steel bottle with matte navy powder coating and leakproof loop cap.",
    description: "Keeps liquids cold for 24 hours or hot for 12 hours. Constructed from food-grade 18/8 stainless steel with a tough matte navy powder finish and an integrated gold finger loop for smooth carry.",
    features: [
      "Double-wall copper-shielded vacuum insulation",
      "Cold for 24h / Hot for 12h performance",
      "BPA-free & toxin-free food-grade steel",
      "Sweat-proof tactile powdercoat exterior"
    ],
    specifications: {
      "Capacity": "750 ml / 25 oz",
      "Material": "18/8 Food Grade Stainless Steel",
      "Cap": "Threaded Leakproof Loop Cap",
      "Weight": "340g empty"
    },
    featured: true,
    badge: "Hydration",
    rating: 4.8,
    reviewCount: 86,
    isShowcaseOnly: true
  },
  {
    id: "prod-15",
    slug: "travel-tech-pouch",
    name: "Travel Tech Pouch",
    category: "Everyday Essentials",
    categorySlug: "everyday-essentials",
    price: 1599,
    originalPrice: 1899,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
    ],
    shortDescription: "Origami-style self-standing tech kit with intuitive mesh pocket dividers and splashproof zip shell.",
    description: "Opens wide so you can instantly view and access every cable, wall brick, SD card, and adapter without fishing around in a dark bag.",
    features: [
      "Self-standing origami opening design",
      "Stretch mesh internal pockets for visibility",
      "Dual pen / stylus elastic holder",
      "Padded outer shell protects against drops"
    ],
    specifications: {
      "Dimensions": "24 x 15 x 10 cm",
      "Capacity": "2 Liters",
      "Weight": "250g",
      "Outer Shell": "420D Weatherproof Ripstop"
    },
    featured: false,
    badge: "Travel Gear",
    rating: 4.7,
    reviewCount: 49,
    isShowcaseOnly: true
  },
  {
    id: "prod-16",
    slug: "minimal-desk-mat",
    name: "Minimal Desk Mat",
    category: "Everyday Essentials",
    categorySlug: "everyday-essentials",
    price: 1199,
    originalPrice: 1499,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80"
    ],
    shortDescription: "Dual-sided vegan leather and merino wool felt desk pad (900x400mm) with anti-slip backing.",
    description: "Anchor your desktop setup with tactile luxury. Features smooth water-resistant vegan navy leather on one side and cozy felt on the reverse, complete with a debossed gold accent mark.",
    features: [
      "Extra-large 900 x 400 mm surface area",
      "Dual-sided: Vegan Leather + Natural Wool Felt",
      "Waterproof & scratch-resistant top surface",
      "Smooth mouse tracking response"
    ],
    specifications: {
      "Dimensions": "900 mm x 400 mm x 3 mm",
      "Weight": "480g",
      "Materials": "Premium PU Leather & Felt Blend",
      "Care": "Wipe with damp cloth"
    },
    featured: true,
    badge: "Workspace",
    rating: 4.9,
    reviewCount: 103,
    isShowcaseOnly: true
  }
];
