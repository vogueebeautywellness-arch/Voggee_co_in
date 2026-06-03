export const categories = [
  {
    id: "salon-women",
    name: "Salon for Women",
    icon: "Sparkles",
    description: "Waxing, Threading, Bleach & Detan",
    tagline: "Salon-grade grooming at home"
  },
  {
    id: "facials-cleanups",
    name: "Facials & Cleanups",
    icon: "Flower2",
    description: "O3+, Lotus, & Organic facials",
    tagline: "Instant glow & skin rejuvenation"
  },
  {
    id: "massage-spa",
    name: "Massage & Spa",
    icon: "HeartHandshake",
    description: "Relaxing stress-relief therapies",
    tagline: "Therapeutic body healing"
  },
  {
    id: "mani-pedi",
    name: "Manicure & Pedicure",
    icon: "Hand",
    description: "Classic & Luxury nail spa",
    tagline: "Gentle care for hands & feet"
  },
  {
    id: "hair-care",
    name: "Hair Styling & Spa",
    icon: "Scissors",
    description: "Hair coloring, hair spa & styles",
    tagline: "Salon-like gorgeous hair"
  },
  {
    id: "men-grooming",
    name: "Men's Grooming",
    icon: "UserCheck",
    description: "Haircut, shave & men's facials",
    tagline: "Tailored grooming for gentlemen"
  }
];

export const services = [
  // Salon for Women
  {
    id: "w-waxing-honey",
    categoryId: "salon-women",
    name: "Honey Full Waxing Package",
    rating: 4.8,
    reviewsCount: 1240,
    price: 349,
    originalPrice: 599,
    discount: "41% OFF",
    duration: 35,
    description: "Includes Full Arms, Full Legs & Underarms. Honey wax is suitable for all skin types and removes hair gently.",
    features: ["Single-use Honey Wax", "Disposable bed sheets & wipes", "Post-wax soothing gel application"],
    bestSeller: true
  },
  {
    id: "w-waxing-rica",
    categoryId: "salon-women",
    name: "Rica Liposoluble Waxing (Full Body)",
    rating: 4.9,
    reviewsCount: 852,
    price: 899,
    originalPrice: 1499,
    discount: "40% OFF",
    duration: 60,
    description: "Rica wax is colophony-free, reducing redness and slowing down hair regrowth. Includes arms, legs, underarms.",
    features: ["Authentic Rica Wax", "Pre-wax gel & Post-wax oil", "Recommended for sensitive skin"],
    bestSeller: false
  },
  {
    id: "w-threading-eyebrow",
    categoryId: "salon-women",
    name: "Eyebrow & Upper Lip Threading",
    rating: 4.7,
    reviewsCount: 3105,
    price: 59,
    originalPrice: 99,
    discount: "40% OFF",
    duration: 15,
    description: "Precise shaping and threading using organic anti-bacterial thread to minimize skin irritation.",
    features: ["Sterilized tools", "Soothing aloe vera massage post threading", "Organic cotton thread"],
    bestSeller: true
  },
  {
    id: "w-detan-face",
    categoryId: "salon-women",
    name: "O3+ D-Tan Therapy (Face & Neck)",
    rating: 4.85,
    reviewsCount: 1845,
    price: 299,
    originalPrice: 499,
    discount: "40% OFF",
    duration: 20,
    description: "Instantly removes tanning and brightens skin tone. Uses dermatologically tested O3+ formula.",
    features: ["Genuine O3+ product", "Cleansing, scrub, & cream application", "Improves skin tone and texture"],
    bestSeller: true
  },

  // Facials & Cleanups
  {
    id: "f-o3-glow",
    categoryId: "facials-cleanups",
    name: "O3+ Shine & Glow Luxury Facial",
    rating: 4.92,
    reviewsCount: 2011,
    price: 1199,
    originalPrice: 1999,
    discount: "40% OFF",
    duration: 75,
    description: "The ultimate premium facial for red-carpet glow. Deep cleanses, exfoliates, hydrates, and tightens skin.",
    features: ["Full 7-step O3+ sealed kit opened in front of you", "Includes face, neck, and shoulder massage", "Face serum & rubber mask finish"],
    bestSeller: true
  },
  {
    id: "f-lotus-facial",
    categoryId: "facials-cleanups",
    name: "Lotus Herbals Radiant Gold Facial",
    rating: 4.8,
    reviewsCount: 940,
    price: 699,
    originalPrice: 999,
    discount: "30% OFF",
    duration: 50,
    description: "Infused with gold dust and natural botanicals to give a long-lasting radiant glow. Ideal for party prep.",
    features: ["100% organic Lotus herbals kit", "Relaxing 15-min facial massage", "Gold scrub and gold peel-off mask"],
    bestSeller: false
  },
  {
    id: "f-cleanup-fruit",
    categoryId: "facials-cleanups",
    name: "Vedic Roots Fruit Skin Purifying Cleanup",
    rating: 4.75,
    reviewsCount: 712,
    price: 399,
    originalPrice: 599,
    discount: "33% OFF",
    duration: 30,
    description: "Cleanses deep pores, removes blackheads, and refreshes skin using natural fruit enzymes.",
    features: ["Fruit enzyme cream", "Gentle steam & blackhead extraction", "Hydrating fruit pack"],
    bestSeller: false
  },

  // Massage & Spa
  {
    id: "m-swedish-full",
    categoryId: "massage-spa",
    name: "Swedish Stress Relief Body Massage (Women)",
    rating: 4.9,
    reviewsCount: 1530,
    price: 999,
    originalPrice: 1699,
    discount: "41% OFF",
    duration: 60,
    description: "Classical Swedish style massage with long gliding strokes to improve blood circulation and relieve muscle tension.",
    features: ["Warm organic olive/almond oil", "Professional folding massage table brought by therapist", "Aromatherapy diffuser set up for spa ambience"],
    bestSeller: true
  },
  {
    id: "m-deep-tissue",
    categoryId: "massage-spa",
    name: "Deep Tissue Muscle Therapy (Women)",
    rating: 4.95,
    reviewsCount: 680,
    price: 1299,
    originalPrice: 1999,
    discount: "35% OFF",
    duration: 75,
    description: "Focuses on deeper layers of muscle tissue. Perfect for chronic aches, stiff neck, and lower back tightness.",
    features: ["Specialized high-pressure strokes", "Therapeutic herbal oil", "Disposable linen & undergarments provided"],
    bestSeller: false
  },
  {
    id: "m-head-shoulder",
    categoryId: "massage-spa",
    name: "Aura Relaxing Head, Neck & Shoulder Massage",
    rating: 4.85,
    reviewsCount: 2210,
    price: 299,
    originalPrice: 499,
    discount: "40% OFF",
    duration: 30,
    description: "A quick, blissful rejuvenation targeting the spots that hold the most stress. Ideal for working professionals.",
    features: ["Hot oil scalp treatment", "Acupressure points targeting", "Leaves you relaxed and focused"],
    bestSeller: true
  },

  // Manicure & Pedicure
  {
    id: "p-classic-combo",
    categoryId: "mani-pedi",
    name: "Classic Cuticle Care Mani-Pedi Combo",
    rating: 4.78,
    reviewsCount: 1450,
    price: 499,
    originalPrice: 899,
    discount: "44% OFF",
    duration: 45,
    description: "Essential nail clipping, shaping, cuticle cleaning, scrubbing, and standard massage for hands and feet.",
    features: ["Individually sterilized tools", "Skin nourishing cream", "Free standard nail paint application"],
    bestSeller: true
  },
  {
    id: "p-charcoal-spa",
    categoryId: "mani-pedi",
    name: "Luxury Charcoal Detox Mani-Pedi Spa",
    rating: 4.88,
    reviewsCount: 920,
    price: 799,
    originalPrice: 1299,
    discount: "38% OFF",
    duration: 70,
    description: "Activated charcoal formula draws out impurities, exfoliates dead skin cells, and leaves hands & feet ultra-smooth.",
    features: ["Activated Charcoal soak and scrub", "Clay mask wraps for hands and feet", "15-minute relaxing oil massage"],
    bestSeller: false
  },

  // Hair Care & Styling
  {
    id: "h-loreal-spa",
    categoryId: "hair-care",
    name: "L'Oreal Hair Spa & Deep Conditioning",
    rating: 4.82,
    reviewsCount: 1100,
    price: 699,
    originalPrice: 1199,
    discount: "42% OFF",
    duration: 50,
    description: "Intense nourishing treatment for dry, damaged, or frizzy hair. Restores moisture, bounce, and natural shine.",
    features: ["L'Oreal Hair Spa Cream + Nourishing Ampoule", "Gentle scalp massage & steam therapy", "Smooth hair serum and blow-dry finish"],
    bestSeller: true
  },
  {
    id: "h-root-touchup",
    categoryId: "hair-care",
    name: "L'Oreal Root Touchup (Ammonia-Free)",
    rating: 4.86,
    reviewsCount: 780,
    price: 599,
    originalPrice: 999,
    discount: "40% OFF",
    duration: 45,
    description: "Cover grey hair perfectly with premium ammonia-free L'Oreal color. Safe, vibrant, and long-lasting.",
    features: ["Ammonia-free gentle color", "Ear protectors and neck cape", "Post-color wash and basic blow-dry"],
    bestSeller: false
  },

  // Men's Grooming
  {
    id: "men-haircut-shave",
    categoryId: "men-grooming",
    name: "Men's Haircut + Beard Styling + Head Massage",
    rating: 4.85,
    reviewsCount: 1540,
    price: 349,
    originalPrice: 599,
    discount: "41% OFF",
    duration: 45,
    description: "Top-rated haircut, precise beard trim, and standard relaxing head massage using premium hair oil.",
    features: ["Clean disposable sheets", "Sanitized scissors, trimmers & blades", "Post-shave soothing lotion"],
    bestSeller: true
  },
  {
    id: "men-detan-facial",
    categoryId: "men-grooming",
    name: "Men's Activated Charcoal Facial & Detan",
    rating: 4.8,
    reviewsCount: 670,
    price: 549,
    originalPrice: 899,
    discount: "39% OFF",
    duration: 40,
    description: "Specially formulated for men's skin. Deeply cleanses pollution dust, oiliness, and removes sunburn tan.",
    features: ["Sealed single-use pack", "Charcoal scrub & peel-off mask", "Soothing moisturizer finish"],
    bestSeller: false
  }
];

export const packages = [
  {
    id: "pkg-bride-glow",
    name: "voguee Pre-Bridal Radiance Express",
    price: 2499,
    originalPrice: 4299,
    discount: "42% OFF",
    duration: 180,
    rating: 4.95,
    reviewsCount: 340,
    servicesCount: 5,
    servicesList: ["O3+ Shine & Glow Facial", "Rica Full Waxing", "Charcoal Mani-Pedi Spa", "Thread Eyebrows", "L'Oreal Hair Spa"],
    description: "Complete beauty package for brides-to-be, designed to give glowing skin, clean hands, feet, and silkier hair."
  },
  {
    id: "pkg-party-ready",
    name: "Women's Instant Party Prep Combo",
    price: 999,
    originalPrice: 1799,
    discount: "44% OFF",
    duration: 90,
    rating: 4.84,
    reviewsCount: 1120,
    servicesCount: 3,
    servicesList: ["Lotus Radiant Gold Facial", "Honey Full Wax (Arms/Legs)", "Thread Eyebrows"],
    description: "Be party-ready in 90 minutes. Cleanses your face, shapes eyebrows, and waxes hands and legs."
  },
  {
    id: "pkg-men-executive",
    name: "Men's Premium Grooming Package",
    price: 699,
    originalPrice: 1199,
    discount: "41% OFF",
    duration: 80,
    rating: 4.88,
    reviewsCount: 520,
    servicesCount: 4,
    servicesList: ["Premium Haircut", "Beard Detailing & Trim", "Head Massage (15-min)", "Charcoal Detan Face Mask"],
    description: "A complete refresh and haircut package designed for gentlemen to look sharp and feel relaxed."
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Aishwarya Sen",
    city: "Mumbai",
    rating: 5,
    text: "voguee has completely changed how I salon! The beautician arrived exactly on time, set up her folding table, and was extremely professional. The O3+ facial was wonderful, and the fact that everything was disposable and in sealed single-use kits made me feel very safe.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 2,
    name: "Rohan Malhotra",
    city: "Delhi NCR",
    rating: 5,
    text: "Got their Men's Grooming package at home. Honestly, I was skeptical about haircuts at home, but the therapist cleaned up the hair clippings perfectly and the styling was top notch. Recommended!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 3,
    name: "Priyanka Nair",
    city: "Bangalore",
    rating: 5,
    text: "The Rica waxing and spa pedicure was exceptional. They charge transparently per minute, and you can see exactly where your money goes. Plus, their mobile app is very easy to book from, but the website checkout is also super smooth. 5 stars!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export const faqs = [
  {
    question: "How does voguee work?",
    answer: "voguee is an at-home salon booking service. You choose the services you want on our website or Play Store app, select a convenient date and time slot, enter your address, and our certified beauty professional will come to your home with all the necessary tools and products to pamper you!"
  },
  {
    question: "Do I need to arrange anything at home?",
    answer: "No! Our beauty professionals come fully equipped with everything required, including disposable sheets, towels, single-use product kits, and even folding massage tables for body treatments. All you need to provide is warm water (if required) and a space for the therapist to work."
  },
  {
    question: "Is it safe and hygienic?",
    answer: "Absolutely. Safety is our number one priority. Our therapists are background-verified and certified. We use 100% single-use (mono-dosage) product kits opened in front of you, along with single-use disposable sheets, towels, and aprons to ensure zero cross-contamination."
  },
  {
    question: "How is the pricing calculated?",
    answer: "We practice complete price transparency. The total price is broken down into the raw material cost and the service time charge (e.g. ₹1/minute). There are no hidden fees. You get premium services at a fraction of standard salon costs!"
  },
  {
    question: "Can I cancel or reschedule my booking?",
    answer: "Yes, you can easily cancel or reschedule your booking up to 4 hours before the scheduled time slot free of charge through the app or by contacting our customer support."
  }
];
