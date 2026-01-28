export interface Product {
  id: string;
  name: string;
  description: string;
  price?: number;
  priceFrom?: number;
  image?: string;
  tags?: string[];
}

export interface Category {
  slug: string;
  name: string;
  icon: string;
  description: string;
  subcategories: string[];
  products: Product[];
}

export const catalog: Category[] = [
  {
    slug: "cakes",
    name: "עוגות",
    icon: "🎂",
    description: "עוגות מעוצבות לכל אירוע",
    subcategories: ["עוגות יום הולדת", "עוגות פס", "עוגות אפויות/פאיים", "בחושות", "עוגות אישיות", "עוגות שמרים"],
    products: [
      { id: "cake-1", name: "עוגת יום הולדת קלאסית", description: "עוגת שכבות עם קרם חמאה", priceFrom: 180, tags: ["יום הולדת", "פופולרי"] },
      { id: "cake-2", name: "עוגת שוקולד בלגי", description: "עוגת שוקולד עשירה עם גנאש", priceFrom: 200, tags: ["שוקולד"] },
      { id: "cake-3", name: "עוגת פס קלאסית", description: "עוגת פס חגיגית לאירועים", priceFrom: 250, tags: ["אירועים"] },
      { id: "cake-4", name: "עוגת גבינה אפויה", description: "עוגת גבינה קרמית ועשירה", price: 120, tags: ["גבינה", "פופולרי"] },
      { id: "cake-5", name: "עוגת תפוחים בחושה", description: "עוגה ביתית עם תפוחים טריים", price: 90, tags: ["בחושות", "פירות"] },
      { id: "cake-6", name: "עוגת שמרים במילוי שוקולד", description: "עוגת שמרים רכה במילוי שוקולד", price: 85, tags: ["שמרים"] },
    ],
  },
  {
    slug: "desserts",
    name: "קינוחים",
    icon: "🍰",
    description: "קינוחים מפנקים ומתוקים",
    subcategories: [],
    products: [
      { id: "dessert-1", name: "טירמיסו", description: "קינוח איטלקי קלאסי", price: 35, tags: ["איטלקי", "פופולרי"] },
      { id: "dessert-2", name: "פנה קוטה", description: "קרם וניל עדין עם רוטב פירות", price: 30, tags: ["איטלקי"] },
      { id: "dessert-3", name: "מוס שוקולד", description: "מוס שוקולד אוורירי", price: 32, tags: ["שוקולד"] },
      { id: "dessert-4", name: "קרם ברולה", description: "קרם וניל עם שכבת קרמל פריכה", price: 35, tags: ["צרפתי"] },
      { id: "dessert-5", name: "פרפה פירות יער", description: "שכבות קרם ופירות יער", price: 38, tags: ["פירות"] },
    ],
  },
  {
    slug: "pastries",
    name: "מאפים",
    icon: "🥐",
    description: "מאפים טריים מהתנור",
    subcategories: ["עוגות שמרים", "מאפי חמאה", "קרואסונים ובורקסים"],
    products: [
      { id: "pastry-1", name: "קרואסון חמאה", description: "קרואסון צרפתי קלאסי", price: 14, tags: ["חמאה", "פופולרי"] },
      { id: "pastry-2", name: "קרואסון שוקולד", description: "קרואסון במילוי שוקולד בלגי", price: 16, tags: ["שוקולד"] },
      { id: "pastry-3", name: "קרואסון שקדים", description: "קרואסון עם קרם שקדים", price: 18, tags: ["שקדים"] },
      { id: "pastry-4", name: "בורקס גבינה", description: "בורקס פריך במילוי גבינות", price: 12, tags: ["גבינה", "פופולרי"] },
      { id: "pastry-5", name: "בורקס תפוחי אדמה", description: "בורקס במילוי פירה תפו\"א", price: 12, tags: ["פרווה"] },
      { id: "pastry-6", name: "שושנים שמרים", description: "שושני שמרים במילוי שוקולד או חלבה", price: 10, tags: ["שמרים"] },
    ],
  },
  {
    slug: "quiches",
    name: "קישים",
    icon: "🥧",
    description: "קישים ביתיים וטעימים",
    subcategories: [],
    products: [
      { id: "quiche-1", name: "קיש לורן קלאסי", description: "קיש עם בייקון ובצל מקורמל", price: 65, tags: ["קלאסי", "פופולרי"] },
      { id: "quiche-2", name: "קיש ירקות", description: "קיש עם ירקות טריים ופטה", price: 60, tags: ["צמחוני"] },
      { id: "quiche-3", name: "קיש פטריות", description: "קיש עם פטריות יער וגבינות", price: 65, tags: ["פטריות"] },
      { id: "quiche-4", name: "קיש כרישה", description: "קיש עם כרישה ושמנת", price: 60, tags: ["צמחוני"] },
      { id: "quiche-5", name: "קיש סלמון", description: "קיש עם סלמון מעושן ושמיר", price: 75, tags: ["דגים"] },
    ],
  },
  {
    slug: "cookies",
    name: "עוגיות",
    icon: "🍪",
    description: "עוגיות פריכות ומתוקות",
    subcategories: [],
    products: [
      { id: "cookie-1", name: "עוגיות שוקולד צ'יפס", description: "עוגיות עם שברי שוקולד", price: 8, tags: ["שוקולד", "פופולרי"] },
      { id: "cookie-2", name: "עוגיות חמאת בוטנים", description: "עוגיות עם חמאת בוטנים אמיתית", price: 10, tags: ["בוטנים"] },
      { id: "cookie-3", name: "עוגיות שקדים", description: "עוגיות פריכות עם שקדים קלויים", price: 9, tags: ["שקדים"] },
      { id: "cookie-4", name: "מקרונים צרפתיים", description: "מקרונים במגוון טעמים", price: 12, tags: ["צרפתי", "פופולרי"] },
      { id: "cookie-5", name: "עוגיות לינזר", description: "עוגיות במילוי ריבה", price: 8, tags: ["קלאסי"] },
      { id: "cookie-6", name: "עוגיות שיבולת שועל", description: "עוגיות בריאות עם צימוקים", price: 7, tags: ["בריאות"] },
    ],
  },
  {
    slug: "breads",
    name: "לחמים",
    icon: "🍞",
    description: "לחמים טריים ואיכותיים",
    subcategories: [],
    products: [
      { id: "bread-1", name: "חלה מתוקה", description: "חלה רכה ומתוקה לשבת", price: 28, tags: ["שבת", "פופולרי"] },
      { id: "bread-2", name: "לחם מחמצת", description: "לחם מחמצת אותנטי", price: 35, tags: ["מחמצת"] },
      { id: "bread-3", name: "פוקצ'ה", description: "פוקצ'ה איטלקית עם זיתים ורוזמרין", price: 32, tags: ["איטלקי"] },
      { id: "bread-4", name: "באגט צרפתי", description: "באגט פריך בסגנון צרפתי", price: 15, tags: ["צרפתי"] },
      { id: "bread-5", name: "לחם כפרי", description: "לחם כפרי עם קרום פריך", price: 25, tags: ["קלאסי"] },
    ],
  },
  {
    slug: "catering",
    name: "מגשי אירוח",
    icon: "🍽️",
    description: "מגשים מושלמים לאירועים",
    subcategories: [],
    products: [
      { id: "catering-1", name: "מגש מאפים מתוקים", description: "מבחר מאפים מתוקים - 20 יח'", priceFrom: 180, tags: ["מתוק", "פופולרי"] },
      { id: "catering-2", name: "מגש קינוחים אישיים", description: "קינוחים במגוון טעמים - 15 יח'", priceFrom: 220, tags: ["קינוחים"] },
      { id: "catering-3", name: "מגש מיני סנדוויצ'ים", description: "סנדוויצ'ים במגוון מילויים - 30 יח'", priceFrom: 150, tags: ["מלוח"] },
      { id: "catering-4", name: "מגש קיש מגוון", description: "קישים חתוכים במגוון טעמים", priceFrom: 200, tags: ["קיש", "מלוח"] },
      { id: "catering-5", name: "מגש עוגיות מעורב", description: "עוגיות במגוון סוגים - 40 יח'", priceFrom: 120, tags: ["עוגיות"] },
      { id: "catering-6", name: "מגש VIP", description: "מבחר פרימיום של מאפים וקינוחים", priceFrom: 350, tags: ["פרימיום", "פופולרי"] },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return catalog.find((cat) => cat.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return catalog.map((cat) => cat.slug);
}
