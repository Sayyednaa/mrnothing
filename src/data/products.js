export const products = [
  // --- CLOTHING ---
  {
    id: "prod-1",
    slug: "action-overshirt",
    name: "Action Overshirt",
    category: "Clothing",
    categorySlug: "clothing",
    price: 9999,
    originalPrice: 11999,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Heavyweight weather-resistant cotton twill shirt designed for urban transitions and layered movement.",
    description: "Engineered from a custom 340gsm structured cotton weave, the Action Overshirt combines utility workwear aesthetics with modern ergonomic patterning. Features deep concealed chest pockets, reinforced elbow paneling, and matte metallic snap closures.",
    features: [
      "340 GSM Heavyweight Organic Cotton Twill",
      "Water-repellent DWR coating",
      "Dual hidden zip chest pockets for tech storage",
      "Reinforced articulated elbow patches",
      "Custom anodized matte metal snap buttons"
    ],
    specifications: {
      "Material": "100% Organic Cotton Twill (340 GSM)",
      "Fit": "Relaxed Utility Cut",
      "Care": "Machine wash cold, lay flat to dry",
      "Origin": "Designed in India"
    },
    featured: true,
    badge: "Bestseller",
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
    price: 3999,
    originalPrice: 4999,
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Ultra-dense Supima cotton tee with anti-twist collar construction and drop-shoulder silhouette.",
    description: "The core foundation of the Mr.Nothing apparel system. Built from premium extra-long staple Supima cotton, treated with silver-ion antimicrobial finish for scent resistance during intense active days.",
    features: [
      "260 GSM Supima Cotton",
      "Double-stitched anti-bunch collar",
      "Silver-ion antimicrobial thread weave",
      "Pre-shrunk custom drop-shoulder fit"
    ],
    specifications: {
      "Material": "100% Supima Cotton",
      "Fit": "Boxy Athletic",
      "Care": "Machine wash warm"
    },
    featured: false,
    badge: "Core Essential",
    rating: 4.8,
    reviewCount: 28,
    isShowcaseOnly: true
  },
  {
    id: "prod-3",
    slug: "motion-cargo-pants",
    name: "Motion Cargo Pants",
    category: "Clothing",
    categorySlug: "clothing",
    price: 11499,
    originalPrice: 13999,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Four-way stretch technical ripstop trousers with magnetic Fidlock cargo closures.",
    description: "Designed for seamless motion. Constructed from hydrophobic stretch cordura nylon, offering abrasion resistance without sacrificing flexibility. Features magnetic cargo pockets for rapid single-hand access.",
    features: [
      "4-Way Stretch Cordura Ripstop",
      "Fidlock magnetic pocket fasteners",
      "Internal cinch drawstring hem",
      "Ergonomic diamond gusset crotch"
    ],
    specifications: {
      "Material": "88% Cordura Nylon, 12% Elastane",
      "Fit": "Tapered Technical",
      "Weight": "420g"
    },
    featured: true,
    badge: "New Release",
    rating: 4.95,
    reviewCount: 35,
    isShowcaseOnly: true
  },
  {
    id: "prod-4",
    slug: "essential-street-jacket",
    name: "Essential Street Jacket",
    category: "Clothing",
    categorySlug: "clothing",
    price: 16999,
    originalPrice: 19999,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "3-Layer windproof shell jacket featuring laser-cut ventilation and stealth reflective accents.",
    description: "Minimalist outerwear engineered to withstand urban elements. Features waterproof seam-taping, internal tablet sling harness, and stealth 3M reflective typography.",
    features: [
      "20,000mm Waterproof / 15,000g Breathability Rating",
      "Integrated sling harness for indoor carrying",
      "Laser-perforated underarm thermal zones",
      "YKK Aquaguard waterproof zippers"
    ],
    specifications: {
      "Shell": "3-Layer Laminated Nylon",
      "Zippers": "YKK Aquaguard",
      "Weight": "510g"
    },
    featured: false,
    badge: "Premium Shell",
    rating: 4.87,
    reviewCount: 19,
    isShowcaseOnly: true
  },

  // --- ELECTRONICS ---
  {
    id: "prod-5",
    slug: "wireless-earbuds-pro",
    name: "Wireless Earbuds Pro / Focus Headphones",
    category: "Electronics",
    categorySlug: "electronics",
    price: 15999,
    originalPrice: 18999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Active Noise-Cancelling hybrid earbuds with titanium drivers and 36-hour total battery playback.",
    description: "Engineered for uncompromised acoustic clarity. The Wireless Earbuds Pro isolate unwanted ambient noise through real-time phase cancelation algorithms while custom 11mm titanium dynamic drivers deliver punchy sub-bass and crisp high-frequency detail.",
    features: [
      "-45dB Active Hybrid Noise Cancellation",
      "11mm Custom Titanium Dynamic Drivers",
      "Bluetooth 5.4 with LDAC Lossless Audio Support",
      "IPX5 Sweat & Dust Resistance",
      "Fast charging: 10 mins gives 4 hours playback"
    ],
    specifications: {
      "Frequency Response": "15Hz - 40,000Hz",
      "Battery Life": "9h (Earbuds) + 27h (Charging Case)",
      "Connectivity": "Bluetooth 5.4, Multipoint",
      "Weight": "4.8g per earbud"
    },
    featured: true,
    badge: "Flagship Audio",
    rating: 4.96,
    reviewCount: 88,
    isShowcaseOnly: true
  },
  {
    id: "prod-6",
    slug: "compact-smart-lamp",
    name: "Compact Smart Lamp",
    category: "Electronics",
    categorySlug: "electronics",
    price: 6999,
    originalPrice: 8499,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Anodized aluminum ambient desk light with touch-knob brightness ring and circadian rhythm warm spectrum.",
    description: "A precision light sculpture crafted from a single billet of aircraft-grade aluminum. Offers stepped warmth control from 2200K amber evening light to 5000K daylight concentration mode.",
    features: [
      "Machined Anodized Aluminum Body",
      "Stepless Rotary Dimming Ring",
      "High CRI (>97) Flicker-free LED Array",
      "USB-C Pass-through Power Hub"
    ],
    specifications: {
      "Lumens": "650 lm Peak",
      "Color Temp": "2200K - 5000K",
      "Power": "12W USB-C PD"
    },
    featured: false,
    badge: "Design Award",
    rating: 4.82,
    reviewCount: 31,
    isShowcaseOnly: true
  },
  {
    id: "prod-7",
    slug: "pocket-power-bank",
    name: "Pocket Power Bank 10,000mAh",
    category: "Electronics",
    categorySlug: "electronics",
    price: 5499,
    originalPrice: 6499,
    image: "https://images.unsplash.com/photo-1609592424074-9fdfc4f0eb21?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1609592424074-9fdfc4f0eb21?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Magnetic wireless 65W GaN fast-charge battery bank encased in matte translucent polycarbonate.",
    description: "Ultra-compact energy reserve for high-demand gear. Supports 65W Power Delivery to charge laptops on the go, plus MagSafe magnetic snap alignment for smartphones.",
    features: [
      "10,000mAh High-Density Graphene Battery Cell",
      "65W USB-C PD Bi-directional Output",
      "MagSafe Wireless 15W Charging Pad",
      "OLED Battery Percentage & Voltage Status Screen"
    ],
    specifications: {
      "Capacity": "10,000mAh / 38.5Wh",
      "Output": "USB-C PD 65W Max, MagSafe 15W",
      "Weight": "195g"
    },
    featured: true,
    badge: "Power Upgrade",
    rating: 4.9,
    reviewCount: 56,
    isShowcaseOnly: true
  },
  {
    id: "prod-8",
    slug: "minimal-bluetooth-speaker",
    name: "Minimal Bluetooth Speaker",
    category: "Electronics",
    categorySlug: "electronics",
    price: 9499,
    originalPrice: 10999,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Architectural 360-degree acoustic speaker with capacitive brass control dial and IP67 rating.",
    description: "Delivering room-filling clarity from a cylindrical matte navy frame. Tuned with dual passive radiators for deep low-end response without structural distortion.",
    features: [
      "360° Omnidirectional Acoustic Mesh",
      "Dual Passive Bass Radiators",
      "IP67 Dust & Waterproof",
      "20 Hours Continuous Playback"
    ],
    specifications: {
      "Power": "25W RMS",
      "Battery": "5,000mAh",
      "Weight": "540g"
    },
    featured: false,
    badge: "Acoustic Craft",
    rating: 4.78,
    reviewCount: 22,
    isShowcaseOnly: true
  },

  // --- HOME & KITCHEN ---
  {
    id: "prod-9",
    slug: "stoneware-mug-set",
    name: "Stoneware Mug Set (Pair)",
    category: "Home & Kitchen",
    categorySlug: "home-kitchen",
    price: 3499,
    originalPrice: 4299,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Hand-finished matte navy ceramic mugs with dual thermal wall retention and tactile textured base.",
    description: "Crafted from raw stoneware clay and dipped in custom matte cobalt glaze. Designed to sit comfortably in hand with superior heat insulation for specialty pour-over coffee or tea.",
    features: [
      "Double-walled insulating stoneware",
      "12oz / 350ml capacity per mug",
      "Microwave and dishwasher safe",
      "Non-slip unglazed terracotta base ring"
    ],
    specifications: {
      "Volume": "350ml (12 fl oz)",
      "Set": "2 Mugs Included",
      "Finish": "Matte Satin Glaze"
    },
    featured: false,
    badge: "Handcrafted",
    rating: 4.88,
    reviewCount: 39,
    isShowcaseOnly: true
  },
  {
    id: "prod-10",
    slug: "modular-storage-tray",
    name: "Modular Storage Tray",
    category: "Home & Kitchen",
    categorySlug: "home-kitchen",
    price: 4999,
    originalPrice: 5999,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Precision milled solid walnut tray with magnetic aluminum divider inserts.",
    description: "Organize your entry table or desk workspace with clean architectural geometry. Features recessed silicone feet and soft microfiber lining inside compartments.",
    features: [
      "Sustainably Sourced American Walnut",
      "Anodized Gold Aluminum Dividers",
      "Scratch-proof Microfiber Base Inlay"
    ],
    specifications: {
      "Dimensions": "320mm x 210mm x 25mm",
      "Wood": "American Black Walnut"
    },
    featured: true,
    badge: "Workspace Highlight",
    rating: 4.91,
    reviewCount: 27,
    isShowcaseOnly: true
  },
  {
    id: "prod-11",
    slug: "precision-kitchen-scale",
    name: "Precision Kitchen Scale",
    category: "Home & Kitchen",
    categorySlug: "home-kitchen",
    price: 5999,
    originalPrice: 6999,
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "0.1g accuracy digital scale with integrated brew timer and hidden LED glass display.",
    description: "Designed for coffee perfectionists and culinary precision. Features high-response load cell sensors, auto-tare mode, and a seamless tempered glass top.",
    features: [
      "0.1g Sensitivity Load Sensor",
      "Integrated Automatic Pour-Over Timer",
      "Stealth Under-glass White LED Matrix Display",
      "Rechargeable 1200mAh Lithium Ion Battery"
    ],
    specifications: {
      "Max Capacity": "3000g / 6.6 lbs",
      "Precision": "0.1g",
      "Charging": "USB-C"
    },
    featured: false,
    badge: "Precision Gear",
    rating: 4.85,
    reviewCount: 44,
    isShowcaseOnly: true
  },
  {
    id: "prod-12",
    slug: "everyday-pour-over-set",
    name: "Everyday Pour-Over Coffee Set",
    category: "Home & Kitchen",
    categorySlug: "home-kitchen",
    price: 7499,
    originalPrice: 8999,
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Borosilicate glass carafe with double-mesh stainless steel cone filter and silicone collar grip.",
    description: "Eliminate paper filters forever. The Everyday Pour-Over Set maximizes essential oil extraction for a full-bodied coffee experience every morning.",
    features: [
      "Heat-resistant Borosilicate Glass Carafe (800ml)",
      "Ultra-fine 316 Stainless Steel Laser Mesh Filter",
      "Heat-insulated Textured Silicone Collar Grip",
      "Includes Bamboo Measuring Scoop"
    ],
    specifications: {
      "Capacity": "800ml (4 Cups)",
      "Filter": "Reusable Stainless Steel"
    },
    featured: true,
    badge: "Morning Ritual",
    rating: 4.93,
    reviewCount: 61,
    isShowcaseOnly: true
  },

  // --- EVERYDAY ESSENTIALS ---
  {
    id: "prod-13",
    slug: "daily-carry-organizer",
    name: "Daily Carry Organizer",
    category: "Everyday Essentials",
    categorySlug: "everyday-essentials",
    price: 5999,
    originalPrice: 6999,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Structured waterproof folios for passport, notebook, pens, cables, and key fobs.",
    description: "Consolidate your pocket carry into one streamlined wallet-pouch. Built with RFID-blocking aluminum foil lining and weather-sealed zip closures.",
    features: [
      "Balistic Nylon 1680D Shell",
      "RFID Shielded Pocket Compartment",
      "Internal Stretch Mesh Cable Holders",
      "Detachable Magnetic Key Lanyard"
    ],
    specifications: {
      "Dimensions": "240mm x 140mm x 35mm",
      "Weight": "165g"
    },
    featured: true,
    badge: "EDC Essential",
    rating: 4.89,
    reviewCount: 50,
    isShowcaseOnly: true
  },
  {
    id: "prod-14",
    slug: "aluminum-water-bottle",
    name: "Aluminum Water Bottle 750ml",
    category: "Everyday Essentials",
    categorySlug: "everyday-essentials",
    price: 3199,
    originalPrice: 3899,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Vacuum-insulated double-wall thermal flask keeping drinks cold for 24h or hot for 12h.",
    description: "Crafted with food-grade 18/8 stainless steel and a powder-coated non-slip exterior. Features an ergonomic wide mouth opening for easy ice loading.",
    features: [
      "TempControl Double Wall Vacuum Insulation",
      "Powder-Coated Matte Navy Exterior",
      "Leakproof Magnetic Loop Cap",
      "BPA-free & Phthalate-free"
    ],
    specifications: {
      "Capacity": "750ml / 25 oz",
      "Thermal Rating": "24h Cold / 12h Hot",
      "Weight": "310g"
    },
    featured: false,
    badge: "Hydration Upgrade",
    rating: 4.84,
    reviewCount: 36,
    isShowcaseOnly: true
  },
  {
    id: "prod-15",
    slug: "travel-tech-pouch",
    name: "Travel Tech Pouch",
    category: "Everyday Essentials",
    categorySlug: "everyday-essentials",
    price: 4999,
    originalPrice: 5999,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Origami-style expandable pouch with 12 custom storage slots for chargers, drives, and pens.",
    description: "Opens flat on your desk like an accordion organizer. Keeps your chargers, dongles, power banks, and memory cards neatly separated and instantly accessible.",
    features: [
      "Origami-style internal divider flex structure",
      "Pass-through cable port for charging inside pouch",
      "Weather-resistant TPU coated shell",
      "Dual grab handles"
    ],
    specifications: {
      "Volume": "2.5 Liters",
      "Dimensions": "260mm x 150mm x 100mm"
    },
    featured: false,
    badge: "Travel Ready",
    rating: 4.9,
    reviewCount: 33,
    isShowcaseOnly: true
  },
  {
    id: "prod-16",
    slug: "minimal-desk-mat",
    name: "Minimal Desk Mat (XL)",
    category: "Everyday Essentials",
    categorySlug: "everyday-essentials",
    price: 4499,
    originalPrice: 5499,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Premium vegan leather desk pad with hydrophobic top coat and non-slip felt backing.",
    description: "Define your workspace area with clean lines. Provides an ultra-smooth tracking surface for mice while protecting desk surfaces from scratches and spills.",
    features: [
      "Micro-textured Vegan Leather Surface",
      "Waterproof & Stain-resistant coating",
      "Dense 3mm Natural Cork Cushioning",
      "Precision-stitched edge borders"
    ],
    specifications: {
      "Size": "900mm x 400mm (XL)",
      "Thickness": "3.5mm",
      "Color": "Deep Navy / Gold Accent Stitch"
    },
    featured: true,
    badge: "Workspace Essential",
    rating: 4.94,
    reviewCount: 47,
    isShowcaseOnly: true
  }
];
