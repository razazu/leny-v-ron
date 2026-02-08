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
    slug: 'buhush',
    name: 'בחושות',
    icon: '🥧',
    description: 'עוגות בחושות בטעמים מגוונים',
    subcategories: ['קראמבל תפוחים', 'מייפל פקאן', 'וניל', 'שוקולד', 'תפוז', 'פרג & שוקולד לבן'],
    products: [
      {
        id: 'buhush-1',
        name: 'בחושה קראמבל תפוחים',
        description: 'בחושה קלאסית עם קראמבל תפוחים',
        priceFrom: 90,
        tags: ['בחושות', 'תפוחים', 'חלבי'],
      },
      {
        id: 'buhush-2',
        name: 'בחושה מייפל פקאן',
        description: 'בחושה בטעם מייפל ופקאן',
        priceFrom: 95,
        tags: ['בחושות', 'מייפל', 'חלבי'],
      },
      {
        id: 'buhush-3',
        name: 'בחושה וניל',
        description: 'בחושה קלאסית בטעם וניל',
        priceFrom: 85,
        tags: ['בחושות', 'וניל', 'חלבי'],
      },
      {
        id: 'buhush-4',
        name: 'בחושה שוקולד',
        description: 'בחושה עשירה בטעם שוקולד',
        priceFrom: 95,
        tags: ['בחושות', 'שוקולד', 'חלבי'],
      },
      {
        id: 'buhush-5',
        name: 'בחושה תפוז',
        description: 'בחושה טרייה בטעם תפוז',
        priceFrom: 85,
        tags: ['בחושות', 'תפוז', 'חלבי'],
      },
      {
        id: 'buhush-6',
        name: 'בחושה פרג & שוקולד לבן',
        description: 'בחושה מיוחדת בטעם פרג ושוקולד לבן',
        priceFrom: 100,
        tags: ['בחושות', 'פרג', 'חלבי'],
      },
    ],
  },
  {
    slug: 'cheese',
    name: 'עוגות גבינה',
    icon: '🧀',
    description: 'עוגות גבינה עשירות וקרמיות',
    subcategories: ['גבינה אפויה', 'גבינה אפויה פירורים', 'טארט גבינה ופירות יער'],
    products: [
      {
        id: 'cheese-1',
        name: 'גבינה אפויה',
        description: 'עוגת גבינה קרמית אפויה',
        priceFrom: 120,
        tags: ['גבינה', 'אפויה', 'חלבי'],
      },
      {
        id: 'cheese-2',
        name: 'גבינה אפויה פירורים',
        description: 'עוגת גבינה עם פירורים',
        priceFrom: 130,
        tags: ['גבינה', 'פירורים', 'חלבי'],
      },
      {
        id: 'cheese-3',
        name: 'טארט גבינה ופירות יער',
        description: 'טארט גבינה עם פירות יער טריים',
        priceFrom: 140,
        tags: ['גבינה', 'פירות יער', 'טארט', 'חלבי'],
      },
    ],
  },
  {
    slug: 'chocolate',
    name: 'עוגות שוקולד',
    icon: '🍫',
    description: 'עוגות שוקולד עשירות ומפנקות',
    subcategories: ['היער השחור', 'נמסיס שוקולד', 'רד וולט', 'שיש', 'פסק זמן'],
    products: [
      {
        id: 'chocolate-1',
        name: 'היער השחור',
        description: 'עוגת שוקולד קלאסית עם דובדבנים',
        priceFrom: 180,
        tags: ['שוקולד', 'דובדבנים', 'חלבי'],
      },
      {
        id: 'chocolate-2',
        name: 'נמסיס שוקולד',
        description: 'עוגת שוקולד נמסיס עשירה',
        priceFrom: 190,
        tags: ['שוקולד', 'נמסיס', 'חלבי'],
      },
      {
        id: 'chocolate-3',
        name: 'רד וולט',
        description: 'עוגת רד וולט אדומה ומיוחדת',
        priceFrom: 170,
        tags: ['רד וולט', 'שוקולד לבן', 'חלבי'],
      },
      {
        id: 'chocolate-4',
        name: 'שיש',
        description: 'עוגת שוקולד שיש קלאסית',
        priceFrom: 160,
        tags: ['שוקולד', 'שיש', 'חלבי'],
      },
      {
        id: 'chocolate-5',
        name: 'פסק זמן',
        description: 'עוגת פסק זמן מפנקת',
        priceFrom: 175,
        tags: ['שוקולד', 'פסק זמן', 'חלבי'],
      },
    ],
  },
  {
    slug: 'tarts',
    name: 'טארטים',
    icon: '🥧',
    description: 'טארטים פריכים במילוי מגוון',
    subcategories: ['לימון', 'פיסטוק פירות יער', 'שוקולד קרמל מלוח'],
    products: [
      {
        id: 'tart-1',
        name: 'טארט לימון',
        description: 'טארט לימון טרי ומרענן',
        priceFrom: 110,
        tags: ['לימון', 'טרי', 'חלבי'],
      },
      {
        id: 'tart-2',
        name: 'טארט פיסטוק פירות יער',
        description: 'טארט פיסטוק עם פירות יער',
        priceFrom: 135,
        tags: ['פיסטוק', 'פירות יער', 'חלבי'],
      },
      {
        id: 'tart-3',
        name: 'טארט שוקולד קרמל מלוח',
        description: 'טארט שוקולד עם קרמל מלוח',
        priceFrom: 140,
        tags: ['שוקולד', 'קרמל מלוח', 'חלבי'],
      },
    ],
  },
  {
    slug: 'mousse',
    name: 'מוסים',
    icon: '🍮',
    description: 'מוסים אווריריים וקלילים',
    subcategories: [
      'אוראו',
      'אלפחורס',
      'גבינה פירורים',
      'גבינה וריבת חלב',
      'טריקולד',
      'נוגט',
      'שוקולד פרווה',
    ],
    products: [
      {
        id: 'mousse-1',
        name: 'מוס אוראו',
        description: 'מוס אוראו קרמי',
        priceFrom: 95,
        tags: ['אוראו', 'מוס', 'חלבי'],
      },
      {
        id: 'mousse-2',
        name: 'מוס אלפחורס',
        description: 'מוס אלפחורס ארגנטינאי',
        priceFrom: 100,
        tags: ['אלפחורס', 'מוס', 'חלבי'],
      },
      {
        id: 'mousse-3',
        name: 'מוס גבינה פירורים',
        description: 'מוס גבינה עם פירורים',
        priceFrom: 95,
        tags: ['גבינה', 'פירורים', 'מוס', 'חלבי'],
      },
      {
        id: 'mousse-4',
        name: 'מוס גבינה וריבת חלב',
        description: 'מוס גבינה עם ריבת חלב',
        priceFrom: 100,
        tags: ['גבינה', 'ריבת חלב', 'מוס', 'חלבי'],
      },
      {
        id: 'mousse-5',
        name: 'מוס טריקולד',
        description: 'מוס שלושה שכבות שוקולד',
        priceFrom: 110,
        tags: ['טריקולד', 'שוקולד', 'מוס', 'חלבי'],
      },
      {
        id: 'mousse-6',
        name: 'מוס נוגט',
        description: 'מוס נוגט עשיר',
        priceFrom: 105,
        tags: ['נוגט', 'מוס', 'חלבי'],
      },
      {
        id: 'mousse-7',
        name: 'מוס שוקולד פרווה',
        description: 'מוס שוקולד בגרסה פרווה',
        priceFrom: 105,
        tags: ['שוקולד', 'מוס', 'פרווה'],
      },
    ],
  },
  {
    slug: 'millefeuille',
    name: 'מילפיי',
    icon: '🍰',
    description: 'מילפיי בצק עלים במילוי שמנת',
    subcategories: ['שמנת', 'פטיסייר', 'פרווה', 'אישיות שמנת', 'אישיות פטיסייר'],
    products: [
      {
        id: 'mille-1',
        name: 'מילפיי שמנת',
        description: 'מילפיי קלאסי במילוי שמנת',
        priceFrom: 120,
        tags: ['שמנת', 'מילפיי', 'חלבי'],
      },
      {
        id: 'mille-2',
        name: 'מילפיי פטיסייר',
        description: 'מילפיי במילוי קרם פטיסייר',
        priceFrom: 125,
        tags: ['פטיסייר', 'מילפיי', 'חלבי'],
      },
      {
        id: 'mille-3',
        name: 'מילפיי פרווה',
        description: 'מילפיי בגרסה פרווה',
        priceFrom: 115,
        tags: ['מילפיי', 'פרווה'],
      },
      {
        id: 'mille-4',
        name: 'מילפיי אישיות שמנת',
        description: 'מילפיי אישי במילוי שמנת',
        priceFrom: 25,
        tags: ['שמנת', 'מילפיי', 'אישי', 'חלבי'],
      },
      {
        id: 'mille-5',
        name: 'מילפיי אישיות פטיסייר',
        description: 'מילפיי אישי במילוי פטיסייר',
        priceFrom: 28,
        tags: ['פטיסייר', 'מילפיי', 'אישי', 'חלבי'],
      },
    ],
  },
  {
    slug: 'roll',
    name: 'רולדות / שמרים',
    icon: '🌀',
    description: 'רולדות ושמרים טריים',
    subcategories: [
      'פרווה קרמל',
      'פרווה שוקולד',
      'פרווה ריבה וקוקוס',
      'ריבת חלב',
      'שטורדל תפוחים',
      'פרסבורגר פרג',
    ],
    products: [
      {
        id: 'roll-1',
        name: 'רולדה פרווה קרמל',
        description: 'רולדת שמרים במילוי קרמל',
        priceFrom: 85,
        tags: ['קרמל', 'רולדה', 'פרווה'],
      },
      {
        id: 'roll-2',
        name: 'רולדה פרווה שוקולד',
        description: 'רולדת שמרים במילוי שוקולד',
        priceFrom: 90,
        tags: ['שוקולד', 'רולדה', 'פרווה'],
      },
      {
        id: 'roll-3',
        name: 'רולדה פרווה ריבה וקוקוס',
        description: 'רולדת שמרים עם ריבה וקוקוס',
        priceFrom: 85,
        tags: ['ריבה', 'קוקוס', 'רולדה', 'פרווה'],
      },
      {
        id: 'roll-4',
        name: 'רולדת ריבת חלב',
        description: 'רולדת שמרים במילוי ריבת חלב',
        priceFrom: 95,
        tags: ['ריבת חלב', 'רולדה', 'חלבי'],
      },
      {
        id: 'roll-5',
        name: 'שטורדל תפוחים',
        description: 'שטורדל קלאסי עם תפוחים',
        priceFrom: 90,
        tags: ['תפוחים', 'שטורדל', 'חלבי'],
      },
      {
        id: 'roll-6',
        name: 'פרסבורגר פרג',
        description: 'פרסבורגר בטעם פרג',
        priceFrom: 80,
        tags: ['פרג', 'פרסבורגר', 'פרווה'],
      },
    ],
  },
  {
    slug: 'krantz',
    name: 'קראנץ / עוגיות',
    icon: '🍪',
    description: 'קראנץ ועוגיות פריכות',
    subcategories: [
      'קראנץ חלבה',
      'קראנץ שוקולד',
      'קראנץ פרווה נוגט',
      'קראנץ פרווה שוקולד',
      'גליליות',
      'כדורי שוקולד',
    ],
    products: [
      {
        id: 'krantz-1',
        name: 'קראנץ חלבה',
        description: 'קראנץ בטעם חלבה קלאסי',
        priceFrom: 95,
        tags: ['חלבה', 'קראנץ', 'פרווה'],
      },
      {
        id: 'krantz-2',
        name: 'קראנץ שוקולד',
        description: 'קראנץ במילוי שוקולד',
        priceFrom: 100,
        tags: ['שוקולד', 'קראנץ', 'חלבי'],
      },
      {
        id: 'krantz-3',
        name: 'קראנץ פרווה נוגט',
        description: 'קראנץ בטעם נוגט פרווה',
        priceFrom: 95,
        tags: ['נוגט', 'קראנץ', 'פרווה'],
      },
      {
        id: 'krantz-4',
        name: 'קראנץ פרווה שוקולד',
        description: 'קראנץ שוקולד בגרסה פרווה',
        priceFrom: 95,
        tags: ['שוקולד', 'קראנץ', 'פרווה'],
      },
      {
        id: 'krantz-5',
        name: 'גליליות',
        description: 'גליליות פריכות',
        priceFrom: 8,
        tags: ['גליליות', 'פרווה'],
      },
      {
        id: 'krantz-6',
        name: 'כדורי שוקולד',
        description: 'כדורי שוקולד בלגי עשירים',
        priceFrom: 8,
        tags: ['שוקולד', 'פרווה'],
      },
    ],
  },
  {
    slug: 'parve',
    name: 'פרווה',
    icon: '🌱',
    description: 'מוצרים פרווה - ללא חלב',
    subcategories: ['מוס שוקולד פרווה', 'רולדות פרווה', 'קראנץ פרווה', 'מילפיי פרווה'],
    products: [
      {
        id: 'parve-1',
        name: 'מוס שוקולד פרווה',
        description: 'מוס שוקולד בגרסה פרווה',
        priceFrom: 34,
        tags: ['שוקולד', 'מוס', 'פרווה'],
      },
      {
        id: 'parve-2',
        name: 'רולדת שמרים פרווה',
        description: 'רולדת שמרים בגרסה פרווה',
        priceFrom: 85,
        tags: ['רולדה', 'פרווה'],
      },
      {
        id: 'parve-3',
        name: 'קראנץ פרווה',
        description: 'קראנץ בגרסה פרווה',
        priceFrom: 95,
        tags: ['קראנץ', 'פרווה'],
      },
      {
        id: 'parve-4',
        name: 'מילפיי פרווה',
        description: 'מילפיי בגרסה פרווה',
        priceFrom: 115,
        tags: ['מילפיי', 'פרווה'],
      },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return catalog.find(cat => cat.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return catalog.map(cat => cat.slug);
}
