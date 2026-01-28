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
    subcategories: ["עוגות יום הולדת", "עוגות פס", "עוגות אפויות/פאיים", "בחושות", "עוגות אישיות", "עוגות שמרים", "ללא גלוטן", "פרווה", "חלבי", "ללא סוכר"],
    products: [
      { id: "cake-1", name: "עוגת יום הולדת קלאסית", description: "עוגת שכבות עם קרם חמאה", priceFrom: 180, tags: ["יום הולדת", "פופולרי", "חלבי"] },
      { id: "cake-2", name: "עוגת שוקולד בלגי", description: "עוגת שוקולד עשירה עם גנאש", priceFrom: 200, tags: ["שוקולד", "חלבי"] },
      { id: "cake-3", name: "עוגת פס קלאסית", description: "עוגת פס חגיגית לאירועים", priceFrom: 250, tags: ["אירועים", "חלבי"] },
      { id: "cake-4", name: "עוגת גבינה אפויה", description: "עוגת גבינה קרמית ועשירה", price: 120, tags: ["גבינה", "פופולרי", "חלבי"] },
      { id: "cake-5", name: "עוגת תפוחים בחושה", description: "עוגה ביתית עם תפוחים טריים", price: 90, tags: ["בחושות", "פירות", "פרווה"] },
      { id: "cake-6", name: "עוגת שמרים במילוי שוקולד", description: "עוגת שמרים רכה במילוי שוקולד", price: 85, tags: ["שמרים", "פרווה"] },
      { id: "cake-7", name: "עוגת שוקולד ללא גלוטן", description: "עוגת שוקולד עשירה ללא גלוטן", price: 130, tags: ["שוקולד", "ללא גלוטן", "חלבי"] },
      { id: "cake-8", name: "עוגת גזר פרווה", description: "עוגת גזר קלאסית בגרסה פרווה", price: 95, tags: ["פרווה", "בריאות"] },
      { id: "cake-9", name: "עוגת תפוזים ללא סוכר", description: "עוגה ממותקת בתמרים וסילאן", price: 110, tags: ["ללא סוכר", "פרווה", "בריאות"] },
    ],
  },
  {
    slug: "desserts",
    name: "קינוחים",
    icon: "🍰",
    description: "קינוחים מפנקים ומתוקים",
    subcategories: ["חלבי", "פרווה", "ללא גלוטן"],
    products: [
      { id: "dessert-1", name: "טירמיסו", description: "קינוח איטלקי קלאסי", price: 35, tags: ["איטלקי", "פופולרי", "חלבי"] },
      { id: "dessert-2", name: "פנה קוטה", description: "קרם וניל עדין עם רוטב פירות", price: 30, tags: ["איטלקי", "חלבי"] },
      { id: "dessert-3", name: "מוס שוקולד", description: "מוס שוקולד אוורירי", price: 32, tags: ["שוקולד", "חלבי"] },
      { id: "dessert-4", name: "קרם ברולה", description: "קרם וניל עם שכבת קרמל פריכה", price: 35, tags: ["צרפתי", "חלבי"] },
      { id: "dessert-5", name: "פרפה פירות יער", description: "שכבות קרם ופירות יער", price: 38, tags: ["פירות", "חלבי"] },
      { id: "dessert-6", name: "פחזניות", description: "כדורי בצק קרם פטיסייר בציפוי שוקולד", price: 40, tags: ["צרפתי", "פופולרי", "חלבי"] },
      { id: "dessert-7", name: "כדורי שוקולד", description: "כדורי שוקולד בלגי עשירים", price: 8, tags: ["שוקולד", "פופולרי", "פרווה"] },
      { id: "dessert-8", name: "מוס שוקולד פרווה", description: "מוס שוקולד אוורירי בגרסה פרווה", price: 34, tags: ["שוקולד", "פרווה"] },
      { id: "dessert-9", name: "פנה קוטה ללא גלוטן", description: "קרם וניל עדין ללא גלוטן", price: 32, tags: ["איטלקי", "ללא גלוטן", "חלבי"] },
    ],
  },
  {
    slug: "pastries",
    name: "מאפים",
    icon: "🥐",
    description: "מאפים טריים מהתנור",
    subcategories: ["קרואסונים", "בורקסים", "שמרים", "חלבי", "פרווה"],
    products: [
      { id: "pastry-1", name: "קרואסון חמאה", description: "קרואסון צרפתי קלאסי", price: 14, tags: ["חמאה", "פופולרי", "חלבי"] },
      { id: "pastry-2", name: "קרואסון שוקולד", description: "קרואסון במילוי שוקולד בלגי", price: 16, tags: ["שוקולד", "חלבי"] },
      { id: "pastry-3", name: "קרואסון שקדים", description: "קרואסון עם קרם שקדים", price: 18, tags: ["שקדים", "חלבי"] },
      { id: "pastry-4", name: "בורקס גבינה", description: "בורקס פריך במילוי גבינות", price: 12, tags: ["גבינה", "פופולרי", "חלבי"] },
      { id: "pastry-5", name: "בורקס תפוחי אדמה", description: "בורקס במילוי פירה תפו\"א", price: 12, tags: ["פרווה", "פופולרי"] },
      { id: "pastry-6", name: "שושנים שמרים", description: "שושני שמרים במילוי שוקולד או חלבה", price: 10, tags: ["שמרים", "פרווה"] },
      { id: "pastry-7", name: "בורקס פטריות", description: "בורקס במילוי פטריות ובצל", price: 12, tags: ["פרווה", "פטריות"] },
      { id: "pastry-8", name: "רוגלך שוקולד", description: "רוגלך ביתי במילוי שוקולד", price: 8, tags: ["שוקולד", "פרווה"] },
    ],
  },
  {
    slug: "quiches",
    name: "קישים",
    icon: "🥧",
    description: "קישים ביתיים וטעימים",
    subcategories: ["חלבי", "צמחוני", "ללא גלוטן"],
    products: [
      { id: "quiche-1", name: "קיש לורן קלאסי", description: "קיש עם בייקון ובצל מקורמל", price: 65, tags: ["קלאסי", "פופולרי", "חלבי"] },
      { id: "quiche-2", name: "קיש ירקות", description: "קיש עם ירקות טריים ופטה", price: 60, tags: ["צמחוני", "חלבי"] },
      { id: "quiche-3", name: "קיש פטריות", description: "קיש עם פטריות יער וגבינות", price: 65, tags: ["פטריות", "צמחוני", "חלבי"] },
      { id: "quiche-4", name: "קיש כרישה", description: "קיש עם כרישה ושמנת", price: 60, tags: ["צמחוני", "חלבי"] },
      { id: "quiche-5", name: "קיש סלמון", description: "קיש עם סלמון מעושן ושמיר", price: 75, tags: ["דגים", "חלבי"] },
      { id: "quiche-6", name: "קיש ירקות ללא גלוטן", description: "קיש ירקות עם בסיס ללא גלוטן", price: 70, tags: ["צמחוני", "ללא גלוטן", "חלבי"] },
      { id: "quiche-7", name: "קיש תרד וגבינות", description: "קיש עם תרד טרי וגבינות מובחרות", price: 65, tags: ["צמחוני", "חלבי", "פופולרי"] },
    ],
  },
  {
    slug: "cookies",
    name: "עוגיות",
    icon: "🍪",
    description: "עוגיות פריכות ומתוקות",
    subcategories: ["ללא גלוטן", "פרווה", "חלבי"],
    products: [
      { id: "cookie-1", name: "עוגיות שוקולד צ'יפס", description: "עוגיות עם שברי שוקולד", price: 8, tags: ["שוקולד", "פופולרי", "חלבי"] },
      { id: "cookie-2", name: "עוגיות חמאת בוטנים", description: "עוגיות עם חמאת בוטנים אמיתית", price: 10, tags: ["בוטנים", "פרווה"] },
      { id: "cookie-3", name: "עוגיות שקדים", description: "עוגיות פריכות עם שקדים קלויים", price: 9, tags: ["שקדים", "פרווה"] },
      { id: "cookie-4", name: "מקרונים צרפתיים", description: "מקרונים במגוון טעמים", price: 12, tags: ["צרפתי", "פופולרי", "ללא גלוטן", "חלבי"] },
      { id: "cookie-5", name: "עוגיות לינזר", description: "עוגיות במילוי ריבה", price: 8, tags: ["קלאסי", "חלבי"] },
      { id: "cookie-6", name: "עוגיות שיבולת שועל", description: "עוגיות בריאות עם צימוקים", price: 7, tags: ["בריאות", "פרווה"] },
      { id: "cookie-7", name: "אלפחורס", description: "עוגיות ארגנטינאיות עם דולסה דה לצ'ה", price: 12, tags: ["פופולרי", "קרמל", "חלבי"] },
      { id: "cookie-8", name: "עוגיות שקדים ללא גלוטן", description: "עוגיות שקדים פריכות ללא גלוטן", price: 10, tags: ["ללא גלוטן", "שקדים", "פרווה"] },
      { id: "cookie-9", name: "עוגיות טחינה", description: "עוגיות טחינה פריכות", price: 8, tags: ["פרווה", "פופולרי"] },
      { id: "cookie-10", name: "ביסקוטי שקדים", description: "ביסקוטי איטלקי קלאסי", price: 9, tags: ["איטלקי", "פרווה", "שקדים"] },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return catalog.find((cat) => cat.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return catalog.map((cat) => cat.slug);
}
