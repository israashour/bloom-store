
/* ==========================================
   BLOOM STORE | Product catalogue
   Prices are demo prices in USD.
   ========================================== */

const PRODUCTS = [
  {
    id: "bloom-001",
    name: {
      en: "The Everyday Ceramic Mug",
      ar: "كوب السيراميك اليومي"
    },
    description: {
      en: "A simple ceramic mug for slow mornings and warm drinks.",
      ar: "كوب سيراميك بسيط لصباح هادئ ومشروبات دافئة."
    },
    category: "home",
    price: 18,
    oldPrice: null,
    rating: 4.9,
    badge: "bestseller",
    featured: 1,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "bloom-002",
    name: {
      en: "Olive Branch Vase",
      ar: "مزهرية غصن الزيتون"
    },
    description: {
      en: "A timeless decorative vase inspired by natural textures.",
      ar: "مزهرية أنيقة بلمسات طبيعية تناسب كل الزوايا."
    },
    category: "home",
    price: 32,
    oldPrice: 38,
    rating: 4.8,
    badge: "new",
    featured: 2,
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "bloom-003",
    name: {
      en: "Soft Linen Tote",
      ar: "حقيبة قماشية ناعمة"
    },
    description: {
      en: "A lightweight everyday bag in a lovely natural shade.",
      ar: "حقيبة خفيفة وعملية بلون طبيعي جميل."
    },
    category: "accessories",
    price: 24,
    oldPrice: null,
    rating: 4.7,
    badge: "",
    featured: 3,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "bloom-004",
    name: {
      en: "Botanical Journal",
      ar: "دفتر يوميات نباتي"
    },
    description: {
      en: "A quiet space for notes, lists, thoughts and little plans.",
      ar: "مساحة هادئة للأفكار والقوائم والخطط الصغيرة."
    },
    category: "stationery",
    price: 14,
    oldPrice: null,
    rating: 4.9,
    badge: "bestseller",
    featured: 4,
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "bloom-005",
    name: {
      en: "The Cozy Candle",
      ar: "شمعة الأجواء الدافئة"
    },
    description: {
      en: "A simple candle for peaceful evenings and cosy corners.",
      ar: "شمعة لأمسيات هادئة وزوايا منزلية مريحة."
    },
    category: "lifestyle",
    price: 22,
    oldPrice: 27,
    rating: 4.8,
    badge: "sale",
    featured: 5,
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "bloom-006",
    name: {
      en: "Minimal Gold Earrings",
      ar: "أقراط ذهبية ناعمة"
    },
    description: {
      en: "Delicate everyday earrings with a minimal golden finish.",
      ar: "أقراط رقيقة بتصميم ذهبي بسيط للاستخدام اليومي."
    },
    category: "accessories",
    price: 29,
    oldPrice: null,
    rating: 4.6,
    badge: "",
    featured: 6,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "bloom-007",
    name: {
      en: "Little Green Planter",
      ar: "أصيص أخضر صغير"
    },
    description: {
      en: "A charming planter for a favourite little plant.",
      ar: "أصيص لطيف لنبتتك الصغيرة المفضلة."
    },
    category: "home",
    price: 16,
    oldPrice: null,
    rating: 4.7,
    badge: "new",
    featured: 7,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "bloom-008",
    name: {
      en: "Daily Ritual Notebook",
      ar: "دفتر الطقوس اليومية"
    },
    description: {
      en: "A little notebook for mindful moments and everyday goals.",
      ar: "دفتر صغير للحظات الهادئة والأهداف اليومية."
    },
    category: "stationery",
    price: 12,
    oldPrice: null,
    rating: 4.8,
    badge: "",
    featured: 8,
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=700&q=80"
  }
];

const CATEGORY_LABELS = {
  home: {
    en: "Home & Living",
    ar: "المنزل والديكور"
  },
  accessories: {
    en: "Accessories",
    ar: "الإكسسوارات"
  },
  stationery: {
    en: "Stationery",
    ar: "القرطاسية"
  },
  lifestyle: {
    en: "Lifestyle",
    ar: "أسلوب الحياة"
  }
};

const PRODUCT_BADGES = {
  bestseller: {
    en: "Bestseller",
    ar: "الأكثر مبيعًا"
  },
  new: {
    en: "New",
    ar: "جديد"
  },
  sale: {
    en: "Sale",
    ar: "تخفيض"
  }
};
