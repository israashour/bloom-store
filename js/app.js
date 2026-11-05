
/* ==========================================
   BLOOM STORE | Application logic
   HTML + CSS + Vanilla JavaScript
   ========================================== */

"use strict";

const $ = (selector) => document.querySelector(selector);

const STORAGE_KEYS = {
  cart: "bloom-store-cart-v1",
  language: "bloom-store-language-v1"
};

const translations = {
  en: {
    announcement: "Thoughtful finds, made for everyday living.",
    navHome: "Home",
    navShop: "Shop",
    navAbout: "Our story",
    cart: "Bag",

    heroEyebrow: "A LITTLE MORE INTENTIONAL",
    heroTitle: "Find beauty in the <em>everyday.</em>",
    heroDescription:
      "Thoughtfully chosen pieces to bring a little more calm, warmth and joy into your everyday rituals.",
    heroButton: "Explore the collection",
    heroNote: "Small things. Meaningful moments.",
    heroSticker: "Made for slow living",
    heroSideNote: "A softer kind of everyday.",

    benefit1: "Thoughtfully selected",
    benefit2: "Made for everyday joy",
    benefit3: "Simple, timeless style",

    shopEyebrow: "THE BLOOM EDIT",
    shopTitle: "Little things you'll love.",
    shopDescription: "Everyday essentials, chosen with care.",

    searchPlaceholder: "Search for something lovely...",
    categoryLabel: "Category",
    allCategories: "All categories",
    sortLabel: "Sort by",
    sortFeatured: "Featured",
    sortPriceAsc: "Price: low to high",
    sortPriceDesc: "Price: high to low",
    sortName: "Name: A to Z",
    maxPriceLabel: "Max price",
    anyPrice: "Any price",
    clearFilters: "Clear filters",
    loading: "Loading products...",

    emptyTitle: "Nothing here just yet.",
    emptyDescription: "Try another search or clear your filters.",

    storyEyebrow: "A NOTE FROM BLOOM",
    storyTitle: "Life doesn't need more things.<br>Just the <em>right little things.</em>",
    storyDescription:
      "Bloom is a little corner for thoughtful finds and everyday comforts. We believe that small details can make ordinary moments feel a little more special.",
    storyButton: "Find your little something",

    newsletterEyebrow: "A LITTLE NOTE",
    newsletterTitle: "A softer inbox.",
    newsletterDescription: "A demo signup form for future Bloom updates.",
    emailLabel: "Email address",
    emailPlaceholder: "Your email address",
    subscribeButton: "Join us",

    footerText: "A little more beauty in the everyday.",

    cartEyebrow: "YOUR LITTLE FINDS",
    cartTitle: "Your bag",
    cartEmptyTitle: "Your bag is taking a little rest.",
    cartEmptyDescription: "Find something lovely to bring home.",
    continueShopping: "Continue shopping",
    subtotal: "Subtotal",
    shippingNote: "Shipping and taxes are not included in this demo.",
    checkout: "Proceed to checkout",
    demoNote: "Demo store. No payment will be collected.",

    addedToCart: "Added to your bag",
    removedFromCart: "Item removed from your bag",
    cartUpdated: "Your bag has been updated",
    emptyBag: "Your bag is empty.",
    checkoutDemo: "Checkout is a demo. No payment has been taken.",
    newsletterSuccess: "Thank you! This demo does not save email addresses.",
    newsletterError: "Please enter a valid email address.",
    imageAlt: "Product photo",
    productCount: "{count} products",
    resultCount: "{count} results",
    quantityLabel: "Quantity",
    removeItem: "Remove item",
    decreaseQuantity: "Decrease quantity",
    increaseQuantity: "Increase quantity",
    priceLabel: "Price",
    currency: "USD",
    productFallback: "Product",
    searchResults: "Showing {count} products",
    filterSummary: "Filtered results",
    addToCart: "Add to bag",
    soldOut: "Unavailable",
    category_home: "Home & Living",
    category_accessories: "Accessories",
    category_stationery: "Stationery",
    category_lifestyle: "Lifestyle",
    checkoutEyebrow: "Almost yours",
    checkout: "Complete your order",
    customerDetails: "Customer details",
    fullName: "Full name",
    phoneNumber: "Phone number",
    emailOptional: "Email (optional)",
    deliveryAddress: "Delivery address",
    city: "City / Governorate",
    area: "Area / District",
    fullAddress: "Street and full address",
    orderNotes: "Order notes (optional)",
    paymentMethod: "Payment method",
    cashOnDelivery: "Cash on delivery",
    onlinePayment: "Electronic payment",
    onlinePaymentNote: "Online payment will be available once a payment provider is connected.",
    orderSummary: "Order summary",
    subtotal: "Subtotal",
    shipping: "Shipping",
    total: "Total",
    placeOrder: "Continue to WhatsApp",
    checkoutSecureNote: "Review your details before sending your order.",
    demoBadge: "Portfolio demo",
    demoSuccessTitle: "Your demo order is ready!",
    demoSuccessText: "This is a portfolio preview. No real order has been submitted.",
    demoOrderReference: "Demo order reference",
    demoMessageTitle: "WhatsApp message preview",
    demoBackToStore: "Back to store",

  },

  ar: {
    announcement: "اختيارات بعناية لتضيف جمالًا إلى تفاصيل يومك.",
    navHome: "الرئيسية",
    navShop: "المتجر",
    navAbout: "قصتنا",
    cart: "السلة",

    heroEyebrow: "تفاصيل صغيرة بمعنى كبير",
    heroTitle: "اكتشفي جمال <em>كل يوم.</em>",
    heroDescription:
      "قطع مختارة بعناية لتضيف مزيدًا من الهدوء والدفء والبهجة إلى تفاصيل يومك.",
    heroButton: "اكتشفي المجموعة",
    heroNote: "أشياء صغيرة. لحظات جميلة.",
    heroSticker: "لحياة أكثر هدوءًا",
    heroSideNote: "تفاصيل يومية بنكهة ألطف.",

    benefit1: "اختيارات مدروسة",
    benefit2: "بهجة في تفاصيل يومك",
    benefit3: "بساطة وأناقة تدوم",

    shopEyebrow: "اختيارات بلوم",
    shopTitle: "تفاصيل صغيرة ستحبينها.",
    shopDescription: "احتياجات يومية اختيرت بعناية.",

    searchPlaceholder: "ابحثي عن شيء جميل...",
    categoryLabel: "التصنيف",
    allCategories: "كل التصنيفات",
    sortLabel: "ترتيب حسب",
    sortFeatured: "المنتجات المميزة",
    sortPriceAsc: "السعر: من الأقل للأعلى",
    sortPriceDesc: "السعر: من الأعلى للأقل",
    sortName: "الاسم: أبجديًا",
    maxPriceLabel: "أعلى سعر",
    anyPrice: "كل الأسعار",
    clearFilters: "مسح التصفية",
    loading: "جارٍ تحميل المنتجات...",

    emptyTitle: "لا توجد منتجات هنا حاليًا.",
    emptyDescription: "جرّبي بحثًا آخر أو امسحي خيارات التصفية.",

    storyEyebrow: "كلمة من بلوم",
    storyTitle: "لا نحتاج إلى أشياء أكثر.<br>بل إلى <em>التفاصيل المناسبة.</em>",
    storyDescription:
      "بلوم مساحة صغيرة للاختيارات الجميلة والتفاصيل اليومية المريحة. نؤمن بأن التفاصيل البسيطة قادرة على جعل اللحظات العادية أكثر خصوصية.",
    storyButton: "اكتشفي ما يناسبك",

    newsletterEyebrow: "رسالة صغيرة",
    newsletterTitle: "رسائل ألطف لبريدك.",
    newsletterDescription: "نموذج تجريبي للاشتراك في تحديثات بلوم مستقبلًا.",
    emailLabel: "البريد الإلكتروني",
    emailPlaceholder: "أدخلي بريدك الإلكتروني",
    subscribeButton: "انضمي إلينا",

    footerText: "مزيد من الجمال في تفاصيل كل يوم.",

    cartEyebrow: "اختياراتك الجميلة",
    cartTitle: "سلة مشترياتك",
    cartEmptyTitle: "سلتك تستريح قليلًا.",
    cartEmptyDescription: "اختاري شيئًا جميلًا لتضيفيه إلى يومك.",
    continueShopping: "متابعة التسوق",
    subtotal: "المجموع الفرعي",
    shippingNote: "الشحن والضرائب غير مشمولين في هذه النسخة التجريبية.",
    checkout: "المتابعة إلى الدفع",
    demoNote: "متجر تجريبي. لن يتم تحصيل أي أموال.",

    addedToCart: "أُضيف المنتج إلى سلتك",
    removedFromCart: "تم حذف المنتج من السلة",
    cartUpdated: "تم تحديث سلة المشتريات",
    emptyBag: "سلة المشتريات فارغة.",
    checkoutDemo: "الدفع تجريبي، ولم يتم تحصيل أي مبلغ.",
    newsletterSuccess: "شكرًا لك! هذا النموذج التجريبي لا يحفظ عناوين البريد.",
    newsletterError: "يرجى إدخال بريد إلكتروني صحيح.",
    imageAlt: "صورة المنتج",
    productCount: "{count} منتجات",
    resultCount: "{count} نتائج",
    quantityLabel: "الكمية",
    removeItem: "حذف المنتج",
    decreaseQuantity: "تقليل الكمية",
    increaseQuantity: "زيادة الكمية",
    priceLabel: "السعر",
    currency: "USD",
    productFallback: "منتج",
    searchResults: "عرض {count} منتجات",
    filterSummary: "نتائج التصفية",
    addToCart: "أضيفي إلى السلة",
    soldOut: "غير متوفر",
    category_home: "المنزل والديكور",
    category_accessories: "الإكسسوارات",
    category_stationery: "القرطاسية",
    category_lifestyle: "أسلوب الحياة",
    checkoutEyebrow: "باقي خطوة صغيرة",
    checkout: "إتمام الطلب",
    customerDetails: "بيانات العميل",
    fullName: "الاسم الكامل",
    phoneNumber: "رقم الهاتف",
    emailOptional: "البريد الإلكتروني (اختياري)",
    deliveryAddress: "عنوان التوصيل",
    city: "المحافظة أو المدينة",
    area: "المنطقة",
    fullAddress: "الشارع والعنوان بالتفصيل",
    orderNotes: "ملاحظات على الطلب (اختياري)",
    paymentMethod: "طريقة الدفع",
    cashOnDelivery: "الدفع عند الاستلام",
    onlinePayment: "الدفع الإلكتروني",
    onlinePaymentNote: "سيكون الدفع الإلكتروني متاحًا بعد ربط بوابة دفع.",
    orderSummary: "ملخص الطلب",
    subtotal: "المجموع الفرعي",
    shipping: "رسوم التوصيل",
    total: "الإجمالي",
    placeOrder: "متابعة إلى واتساب",
    checkoutSecureNote: "راجعي بياناتك قبل إرسال الطلب.",
    demoBadge: "نسخة تجريبية للعرض",
    demoSuccessTitle: "طلبك التجريبي جاهز!",
    demoSuccessText: "هذه معاينة للمشروع فقط. لم يتم إرسال طلب حقيقي.",
    demoOrderReference: "رقم الطلب التجريبي",
    demoMessageTitle: "معاينة رسالة واتساب",
    demoBackToStore: "العودة إلى المتجر",
  }
};

let language = "en";
let cart = {};
let toastTimer;
let lastFocusedElement = null;

const state = {
  search: "",
  category: "all",
  sort: "featured",
  maxPrice: "all"
};

/* ------------------------------------------
   Storage helpers
   ------------------------------------------ */

function readStoredLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.language);
    return saved === "ar" || saved === "en" ? saved : "en";
  } catch {
    return "en";
  }
}

function readStoredCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEYS.cart) || "{}");

    if (!saved || typeof saved !== "object" || Array.isArray(saved)) {
      return {};
    }

    const validCart = {};

    for (const [id, quantity] of Object.entries(saved)) {
      const exists = PRODUCTS.some((product) => product.id === id);

      if (
        exists &&
        Number.isSafeInteger(quantity) &&
        quantity > 0 &&
        quantity <= 99
      ) {
        validCart[id] = quantity;
      }
    }

    return validCart;
  } catch {
    return {};
  }
}

function saveCart() {
  try {
    localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cart));
  } catch {
    showToast(
      language === "ar"
        ? "تعذر حفظ السلة على هذا الجهاز."
        : "The cart could not be saved on this device."
    );
  }
}

function saveLanguage() {
  try {
    localStorage.setItem(STORAGE_KEYS.language, language);
  } catch {
    // The language still works for the current session.
  }
}

/* ------------------------------------------
   Translation and formatting
   ------------------------------------------ */

function t(key, values = {}) {
  let text = translations[language][key];

  if (text === undefined) {
    text = translations.en[key] ?? key;
  }

  return String(text).replace(/\{(\w+)\}/g, (_, name) => {
    return values[name] ?? "";
  });
}

function localized(value) {
  if (value && typeof value === "object") {
    return value[language] ?? value.en ?? "";
  }

  return value ?? "";
}

function formatMoney(amount) {
  return new Intl.NumberFormat(
    language === "ar" ? "ar-EG" : "en-US",
    {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }
  ).format(amount);
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entities[character];
  });
}

function safeImageURL(value) {
  try {
    const url = new URL(value);

    if (url.protocol === "https:" || url.protocol === "http:") {
      return url.href;
    }
  } catch {
    // Use the fallback below.
  }

  return "";
}

/* ------------------------------------------
   Language switching
   ------------------------------------------ */

function applyLanguage() {
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.body.dir = language === "ar" ? "rtl" : "ltr";

  $("#languageToggle").textContent = language === "en" ? "عربي" : "English";
  $("#languageToggle").setAttribute(
    "aria-label",
    language === "en" ? "Switch to Arabic" : "Switch to English"
  );

  document.title =
    language === "ar"
      ? "بلوم ستور | تفاصيل جميلة لكل يوم"
      : "Bloom Store | Thoughtful Living";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (translations[language][key] !== undefined) {
      // These translated strings are authored by us and can contain
      // intentional <em> or <br> markup for headings.
      element.innerHTML = translations[language][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    element.placeholder = t(key);
  });

  $("#menuToggle").setAttribute(
    "aria-label",
    language === "ar" ? "فتح أو إغلاق القائمة" : "Toggle navigation"
  );

  $("#openCart").setAttribute(
    "aria-label",
    language === "ar" ? "فتح سلة المشتريات" : "Open shopping cart"
  );

  $("#closeCart").setAttribute(
    "aria-label",
    language === "ar" ? "إغلاق سلة المشتريات" : "Close shopping cart"
  );

  $("#cartDrawer").setAttribute(
    "aria-label",
    t("cartTitle")
  );

  populateCategoryFilter();
  renderProducts();
  renderCart();
}

function setLanguage(nextLanguage) {
  if (nextLanguage !== "ar" && nextLanguage !== "en") return;

  language = nextLanguage;
  saveLanguage();
  applyLanguage();
}

/* ------------------------------------------
   Product categories
   ------------------------------------------ */

function populateCategoryFilter() {
  const select = $("#categoryFilter");
  const currentValue = state.category;

  select.innerHTML = "";

  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = t("allCategories");
  select.appendChild(allOption);

  for (const [category, labels] of Object.entries(CATEGORY_LABELS)) {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = labels[language];
    select.appendChild(option);
  }

  select.value = currentValue;
}

/* ------------------------------------------
   Search, filtering and sorting
   ------------------------------------------ */

function getFilteredProducts() {
  const query = state.search.trim().toLocaleLowerCase(
    language === "ar" ? "ar" : "en"
  );

  let results = PRODUCTS.filter((product) => {
    const name = localized(product.name).toLocaleLowerCase(
      language === "ar" ? "ar" : "en"
    );

    const description = localized(product.description).toLocaleLowerCase(
      language === "ar" ? "ar" : "en"
    );

    const categoryName = localized(CATEGORY_LABELS[product.category])
      .toLocaleLowerCase(language === "ar" ? "ar" : "en");

    const matchesSearch =
      !query ||
      name.includes(query) ||
      description.includes(query) ||
      categoryName.includes(query);

    const matchesCategory =
      state.category === "all" ||
      product.category === state.category;

    const matchesPrice =
      state.maxPrice === "all" ||
      product.price <= Number(state.maxPrice);

    return matchesSearch && matchesCategory && matchesPrice;
  });

  switch (state.sort) {
    case "price-asc":
      results.sort((a, b) => a.price - b.price);
      break;

    case "price-desc":
      results.sort((a, b) => b.price - a.price);
      break;

    case "name":
      results.sort((a, b) =>
        localized(a.name).localeCompare(
          localized(b.name),
          language === "ar" ? "ar" : "en"
        )
      );
      break;

    default:
      results.sort((a, b) => a.featured - b.featured);
  }

  return results;
}

/* ------------------------------------------
   Product cards
   ------------------------------------------ */

function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";
  card.dataset.productId = product.id;

  const categoryName = localized(CATEGORY_LABELS[product.category]);
  const badgeText = product.badge
    ? localized(PRODUCT_BADGES[product.badge])
    : "";

  const imageURL = safeImageURL(product.image);
  const imageAlt = `${t("imageAlt")}: ${localized(product.name)}`;

  card.innerHTML = `
    <div class="product-image-wrap">
      ${badgeText
      ? `<span class="product-badge">${escapeHTML(badgeText)}</span>`
      : ""}
      <img
        class="product-image"
        src="${escapeHTML(imageURL)}"
        alt="${escapeHTML(imageAlt)}"
        loading="lazy"
        referrerpolicy="no-referrer">
      <button class="add-to-cart" type="button"
        data-add="${escapeHTML(product.id)}"
        aria-label="${escapeHTML(t("addToCart") + ": " + localized(product.name))}">
        <span aria-hidden="true">＋</span>
        <span>${escapeHTML(t("addToCart"))}</span>
      </button>
    </div>

    <div class="product-info">
      <span class="product-category">${escapeHTML(categoryName)}</span>
      <h3 class="product-name">${escapeHTML(localized(product.name))}</h3>

      <div class="product-price-row">
        <span class="product-price">${escapeHTML(formatMoney(product.price))}</span>
        ${product.oldPrice
      ? `<span class="product-old-price">${escapeHTML(formatMoney(product.oldPrice))}</span>`
      : ""}
      </div>

      <div class="product-rating" aria-label="${escapeHTML(String(product.rating))} out of 5 stars">
        ★★★★★ <span>${escapeHTML(String(product.rating))}</span>
      </div>
    </div>
  `;

  const image = card.querySelector(".product-image");

  image.addEventListener("error", () => {
    image.hidden = true;

    const fallback = document.createElement("div");
    fallback.className = "image-fallback";
    fallback.style.cssText =
      "width:100%;height:100%;min-height:180px;display:grid;place-items:center;background:#e9dfd0;color:#515b39;font-size:13px;text-align:center;padding:16px;";
    fallback.textContent = localized(product.name);

    image.parentElement.prepend(fallback);
  }, { once: true });

  return card;
}


function openProductDetails(product) {
  const modal = $("#productDetailsModal");
  if (!modal || !product) return;

  const name = localized(product.name);
  const description = localized(product.description);
  const category = localized(CATEGORY_LABELS[product.category]);

  const image = $("#productDetailsImage");
  image.hidden = false;
  image.src = safeImageURL(product.image);
  image.alt = name;
  image.onerror = () => {
    image.onerror = null;
    image.hidden = true;
  };

  $("#productDetailsCategory").textContent = category;
  $("#productDetailsTitle").textContent = name;
  $("#productDetailsPrice").textContent = formatMoney(product.price);
  $("#productDetailsDescription").textContent = description;

  const oldPrice = $("#productDetailsOldPrice");
  oldPrice.hidden = !product.oldPrice;
  oldPrice.textContent = product.oldPrice
    ? formatMoney(product.oldPrice)
    : "";

  $("#productDetailsRating").textContent =
    `★★★★★ ${product.rating}`;

  $("#productDetailsRating").setAttribute(
    "aria-label",
    `${product.rating} out of 5 stars`
  );

  $("#productDetailsAddToCart").dataset.productId = product.id;


  if (!modal.open) {
    modal.showModal();
  }

  $("#closeProductDetails")?.focus();

}


function renderProducts() {
  const grid = $("#productGrid");
  const results = getFilteredProducts();

  grid.replaceChildren();

  for (const product of results) {
    grid.appendChild(createProductCard(product));
  }

  $("#productTotal").textContent = t("productCount", {
    count: PRODUCTS.length
  });

  const hasFilters =
    Boolean(state.search.trim()) ||
    state.category !== "all" ||
    state.maxPrice !== "all" ||
    state.sort !== "featured";

  $("#activeFilters").hidden = !hasFilters || results.length === 0;

  $("#resultsSummary").textContent = t("searchResults", {
    count: results.length
  });

  $("#emptyState").hidden = results.length !== 0;
  grid.hidden = results.length === 0;
  $("#clearSearch").hidden = state.search.length === 0;
}

/* ------------------------------------------
   Shopping cart
   ------------------------------------------ */

function getCartItems() {
  return Object.entries(cart)
    .map(([id, quantity]) => {
      const product = PRODUCTS.find((item) => item.id === id);

      return product ? { product, quantity } : null;
    })
    .filter(Boolean);
}

function renderCheckoutSummary() {
  const container = $("#checkoutItems");
  if (!container) return;

  const items = getCartItems();
  container.replaceChildren();

  for (const { product, quantity } of items) {
    const item = document.createElement("div");
    item.className = "checkout-item";

    const details = document.createElement("span");
    details.textContent =
      `${localized(product.name)} × ${quantity}`;

    const price = document.createElement("strong");
    price.textContent = formatMoney(product.price * quantity);

    item.append(details, price);
    container.appendChild(item);
  }

  const subtotal = getCartSubtotal();

  $("#checkoutSubtotal").textContent = formatMoney(subtotal);

  // Shipping has not been configured yet.
  $("#checkoutShipping").textContent = "—";
  $("#checkoutTotal").textContent = formatMoney(subtotal);
}


function getCartQuantity() {
  return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
}

function getCartSubtotal() {
  return getCartItems().reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
}

function addToCart(productId) {
  const product = PRODUCTS.find((item) => item.id === productId);

  if (!product) return;

  if (cart[productId] >= 99) {
    showToast(
      language === "ar"
        ? "الحد الأقصى للكمية هو 99."
        : "The maximum quantity is 99."
    );
    return;
  }

  cart[productId] = (cart[productId] || 0) + 1;

  saveCart();
  renderCart();
  showToast(`${localized(product.name)} · ${t("addedToCart")}`);
}

function changeQuantity(productId, change) {
  if (!cart[productId]) return;

  const nextQuantity = cart[productId] + change;

  if (nextQuantity <= 0) {
    delete cart[productId];
  } else {
    cart[productId] = Math.min(nextQuantity, 99);
  }

  saveCart();
  renderCart();
}

function removeFromCart(productId) {
  if (!cart[productId]) return;

  delete cart[productId];
  saveCart();
  renderCart();
  showToast(t("removedFromCart"));
}

function renderCart() {
  const container = $("#cartItems");
  const items = getCartItems();
  const isEmpty = items.length === 0;

  $("#cartCount").textContent = String(getCartQuantity());
  $("#cartEmpty").hidden = !isEmpty;
  $("#cartFooter").hidden = isEmpty;
  container.hidden = isEmpty;

  container.replaceChildren();

  for (const { product, quantity } of items) {
    const item = document.createElement("article");
    item.className = "cart-item";

    const image = document.createElement("img");
    image.className = "cart-item-image";
    image.src = safeImageURL(product.image);
    image.alt = `${t("imageAlt")}: ${localized(product.name)}`;
    image.loading = "lazy";

    image.addEventListener("error", () => {
      image.hidden = true;
    }, { once: true });

    const info = document.createElement("div");
    info.className = "cart-item-info";

    const name = document.createElement("h3");
    name.textContent = localized(product.name);

    const price = document.createElement("div");
    price.className = "cart-item-price";
    price.textContent = formatMoney(product.price * quantity);

    const quantityControl = document.createElement("div");
    quantityControl.className = "quantity-control";
    quantityControl.setAttribute("aria-label", t("quantityLabel"));

    const decrease = document.createElement("button");
    decrease.type = "button";
    decrease.textContent = "−";
    decrease.setAttribute("aria-label", t("decreaseQuantity"));
    decrease.dataset.quantityChange = `${product.id}:-1`;

    const count = document.createElement("span");
    count.textContent = String(quantity);

    const increase = document.createElement("button");
    increase.type = "button";
    increase.textContent = "+";
    increase.setAttribute("aria-label", t("increaseQuantity"));
    increase.dataset.quantityChange = `${product.id}:1`;
    increase.disabled = quantity >= 99;

    quantityControl.append(decrease, count, increase);
    info.append(name, price, quantityControl);

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "remove-item";
    remove.textContent = "×";
    remove.setAttribute("aria-label", t("removeItem"));
    remove.dataset.removeItem = product.id;

    item.append(image, info, remove);
    container.appendChild(item);
  }

  $("#cartSubtotal").textContent = formatMoney(getCartSubtotal());
  renderCheckoutSummary();
}

/* ------------------------------------------
   Cart drawer accessibility
   ------------------------------------------ */

function openCart() {
  lastFocusedElement = document.activeElement;

  $("#cartOverlay").hidden = false;

  const drawer = $("#cartDrawer");
  drawer.inert = false;
  drawer.setAttribute("aria-hidden", "false");

  document.body.classList.add("cart-open");

  requestAnimationFrame(() => {
    drawer.classList.add("is-open");
    $("#closeCart").focus();
  });
}

function closeCart() {
  const drawer = $("#cartDrawer");

  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  drawer.inert = true;

  $("#cartOverlay").hidden = true;
  document.body.classList.remove("cart-open");

  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
}


let checkoutLastFocusedElement = null;

function openCheckout() {
  const modal = $("#checkoutModal");

  if (!modal) {
    console.error("Checkout modal not found.");
    return;
  }

  if (getCartItems().length === 0) {
    return;
  }

  checkoutLastFocusedElement = document.activeElement;

  closeCart();

  renderCheckoutSummary();

  modal.hidden = false;
  document.body.classList.add("checkout-open");

  requestAnimationFrame(() => {
    $("#customerName")?.focus();
  });
  $("#checkoutForm").hidden = false;
  $("#demoConfirmation").hidden = true;
}

function closeCheckout() {
  const modal = $("#checkoutModal");

  if (!modal) return;

  modal.hidden = true;
  document.body.classList.remove("checkout-open");

  if (checkoutLastFocusedElement &&
    typeof checkoutLastFocusedElement.focus === "function") {
    checkoutLastFocusedElement.focus();
  }
}

$("#checkoutButton")?.addEventListener("click", () => {
  openCheckout();
});
// Close checkout using the close button or backdrop.
$("#closeCheckout")?.addEventListener("click", closeCheckout);
$("#checkoutBackdrop")?.addEventListener("click", closeCheckout);

// Show a note when electronic payment is selected.
document.querySelectorAll('input[name="paymentMethod"]').forEach(input => {
  input.addEventListener("change", () => {
    const selectedPayment = document.querySelector(
      'input[name="paymentMethod"]:checked'
    )?.value;

    $("#onlinePaymentNote").hidden = selectedPayment !== "online";
  });
  $("#checkoutForm").hidden = false;
  $("#demoConfirmation").hidden = true;
});


function getCheckoutText(en, ar) {
  return language === "ar" ? ar : en;
}

function formatDemoOrderMessage(formData, reference, paymentMethod) {
  const items = getCartItems();
  const isArabic = language === "ar";

  const lines = [
    isArabic ? "🌿 طلب جديد من Bloom Store" : "🌿 Bloom Store Order",
    "",
    `${isArabic ? "رقم الطلب التجريبي" : "Demo reference"}: ${reference}`,
    `${isArabic ? "الاسم" : "Name"}: ${formData.get("customerName")}`,
    `${isArabic ? "الهاتف" : "Phone"}: ${formData.get("customerPhone")}`,
    `${isArabic ? "البريد الإلكتروني" : "Email"}: ${formData.get("customerEmail") || "-"}`,
    `${isArabic ? "المحافظة" : "City / Governorate"}: ${formData.get("customerCity")}`,
    `${isArabic ? "المنطقة" : "Area"}: ${formData.get("customerArea")}`,
    `${isArabic ? "العنوان" : "Address"}: ${formData.get("customerAddress")}`,
    `${isArabic ? "ملاحظات" : "Notes"}: ${formData.get("orderNotes") || "-"}`,
    "",
    isArabic ? "المنتجات:" : "Items:"
  ];

  for (const { product, quantity } of items) {
    lines.push(
      `• ${localized(product.name)} × ${quantity} = ${formatMoney(product.price * quantity)}`
    );
  }

  lines.push(
    "",
    `${isArabic ? "المجموع الفرعي" : "Subtotal"}: ${formatMoney(getCartSubtotal())}`,
    `${isArabic ? "التوصيل" : "Shipping"}: ${isArabic ? "يحدد لاحقًا" : "To be confirmed"}`,
    `${isArabic ? "الإجمالي قبل التوصيل" : "Total before shipping"}: ${formatMoney(getCartSubtotal())}`,
    `${isArabic ? "طريقة الدفع" : "Payment method"}: ${paymentMethod === "cod"
      ? (isArabic ? "الدفع عند الاستلام" : "Cash on delivery")
      : (isArabic ? "الدفع الإلكتروني (محاكاة)" : "Electronic payment (demo only)")
    }`,
    "",
    isArabic
      ? "هذه رسالة تجريبية لمشروع Portfolio. لم يتم إرسال الطلب أو تحصيل أي مبلغ."
      : "Portfolio demo only. No order was sent and no payment was collected."
  );

  return lines.join("\n");
}

$("#checkoutForm")?.addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.currentTarget;

  if (!form.reportValidity()) return;

  if (getCartItems().length === 0) {
    alert(getCheckoutText(
      "Your cart is empty. Add a product first.",
      "سلتك فارغة. أضيفي منتجًا أولًا."
    ));
    return;
  }

  const formData = new FormData(form);
  const paymentMethod = formData.get("paymentMethod");

  // Clearly identify this as a simulated portfolio order.
  const reference = `DEMO-${Date.now().toString().slice(-8)}`;

  $("#demoOrderReference").textContent = reference;
  $("#demoOrderMessage").textContent = formatDemoOrderMessage(
    formData,
    reference,
    paymentMethod
  );

  $("#demoPaymentNotice").textContent =
    paymentMethod === "online"
      ? getCheckoutText(
        "Demo only: no payment gateway was opened and no payment was processed.",
        "للعرض فقط: لم يتم فتح بوابة دفع ولم تتم معالجة أي دفعة."
      )
      : getCheckoutText(
        "Demo only: cash on delivery was selected, but no real order was placed.",
        "للعرض فقط: تم اختيار الدفع عند الاستلام، لكن لم يتم إنشاء طلب حقيقي."
      );

  form.hidden = true;
  $("#demoConfirmation").hidden = false;
  $("#demoConfirmation").scrollIntoView({ behavior: "smooth", block: "start" });
});

$("#demoDone")?.addEventListener("click", () => {
  // Clear the cart and save the empty cart using the existing helper.
  cart = {};
  saveCart();

  // Update the cart badge, cart drawer, and checkout summary.
  renderCart();

  // Reset the checkout form for the next demo order.
  $("#checkoutForm").reset();
  $("#checkoutForm").hidden = false;
  $("#demoConfirmation").hidden = true;

  // Return to the store.
  closeCheckout();
});

/* ------------------------------------------
   Toasts
   ------------------------------------------ */

function showToast(message) {
  const toast = $("#toast");

  window.clearTimeout(toastTimer);

  toast.textContent = message;
  toast.classList.add("is-visible");

  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2600);
}

/* ------------------------------------------
   Filter reset
   ------------------------------------------ */

function resetFilters() {
  state.search = "";
  state.category = "all";
  state.sort = "featured";
  state.maxPrice = "all";

  $("#searchInput").value = "";
  $("#categoryFilter").value = "all";
  $("#sortFilter").value = "featured";
  $("#priceFilter").value = "all";

  renderProducts();
}

/* ------------------------------------------
   Event listeners
   ------------------------------------------ */

function bindEvents() {
  $("#languageToggle").addEventListener("click", () => {
    setLanguage(language === "en" ? "ar" : "en");
  });

  $("#searchInput").addEventListener("input", (event) => {
    state.search = event.target.value;
    renderProducts();
  });

  $("#categoryFilter").addEventListener("change", (event) => {
    state.category = event.target.value;
    renderProducts();
  });

  $("#sortFilter").addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderProducts();
  });

  $("#priceFilter").addEventListener("change", (event) => {
    state.maxPrice = event.target.value;
    renderProducts();
  });

  $("#clearSearch").addEventListener("click", () => {
    $("#searchInput").value = "";
    state.search = "";
    renderProducts();
    $("#searchInput").focus();
  });

  $("#resetFilters").addEventListener("click", resetFilters);
  $("#emptyReset").addEventListener("click", resetFilters);



  $("#productGrid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-add]");

    // Add to cart without opening the details modal.
    if (button) {
      addToCart(button.dataset.add);
      return;
    }

    // Open details for the clicked product card.
    const card = event.target.closest(".product-card");

    if (card?.dataset.productId) {
      const product = PRODUCTS.find(
        (item) => item.id === card.dataset.productId
      );

      if (product) {
        openProductDetails(product);
      }
    }
  });


  $("#closeProductDetails")?.addEventListener("click", () => {
    $("#productDetailsModal")?.close();
  });


  $("#productDetailsModal")?.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;

    const modal = event.currentTarget;

    const focusable = Array.from(
      modal.querySelectorAll(
        'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    ).filter((element) => !element.hidden);

    if (focusable.length === 0) {
      event.preventDefault();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });



  $("#productDetailsAddToCart")?.addEventListener("click", (event) => {
    const productId = event.currentTarget.dataset.productId;

    if (!productId) return;

    addToCart(productId);
    $("#productDetailsModal")?.close();
  });


  $("#cartItems").addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-remove-item]");

    if (removeButton) {
      removeFromCart(removeButton.dataset.removeItem);
      return;
    }

    const quantityButton = event.target.closest("[data-quantity-change]");

    if (quantityButton) {
      const [productId, change] =
        quantityButton.dataset.quantityChange.split(":");

      changeQuantity(productId, Number(change));
    }
  });

  $("#openCart").addEventListener("click", openCart);
  $("#closeCart").addEventListener("click", closeCart);
  $("#cartOverlay").addEventListener("click", closeCart);
  $("#continueShopping").addEventListener("click", closeCart);

  $("#checkoutButton").addEventListener("click", () => {
    showToast(t("checkoutDemo"));
  });

  $("#newsletterForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const email = $("#newsletterEmail");

    if (!email.checkValidity()) {
      email.reportValidity();
      showToast(t("newsletterError"));
      return;
    }

    showToast(t("newsletterSuccess"));
    email.value = "";
  });

  $("#menuToggle").addEventListener("click", () => {
    const nav = document.querySelector(".main-nav");
    const isOpen = nav.classList.toggle("is-open");

    $("#menuToggle").setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelector(".main-nav").classList.remove("is-open");
      $("#menuToggle").setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if ($("#cartDrawer").classList.contains("is-open")) {
        closeCart();
      }

      document.querySelector(".main-nav").classList.remove("is-open");
      $("#menuToggle").setAttribute("aria-expanded", "false");
    }
  });
}

/* ------------------------------------------
   Start the application
   ------------------------------------------ */

function init() {
  language = readStoredLanguage();
  cart = readStoredCart();

  $("#currentYear").textContent = String(new Date().getFullYear());

  bindEvents();
  applyLanguage();
}

init();
