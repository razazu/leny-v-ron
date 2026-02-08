import { createClient } from "@sanity/client";
import { catalog } from "../src/data/catalog";

const client = createClient({
  projectId: "67uiwix7",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

async function seed() {
  console.log("Seeding Sanity with catalog data...\n");

  // 1. Seed site settings
  console.log("Creating site settings...");
  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    heroTitle: "Leny V Ron",
    heroSubtitle: "עוגות קונטידור מעוצבות",
    heroDescription: "קו חלוקה ארצי | מחירי סיטונאות | שירות מקצועי לעסקים",
    aboutText:
      "Leny V Ron - משווק סיטונאי בלעדי של מוצרי קונדיטוריה איכותיים.",
    aboutDescription:
      "אנחנו מפיצים מגוון רחב של עוגות, קינוחים ומאפים מעוצבים מהקונדיטוריות המובילות בארץ. קו חלוקה ארצי, מלאי זמין ומחירי סיטונאות מיוחדים לבתי קפה, מסעדות, קייטרינג ועסקים.",
    stat1Number: "100+",
    stat1Label: "מוצרים בקטלוג",
    stat2Number: "10+",
    stat2Label: "שנות ניסיון",
    phone: "050-000-0000",
    email: "info@lenyvron.com",
    whatsappLink:
      "https://wa.me/972500000000?text=היי, אשמח לשמוע פרטים על עוגות",
    instagramLink: "https://instagram.com/lenyvron",
  });
  console.log("  ✓ Site settings created\n");

  // 2. Seed categories
  console.log("Creating categories...");
  const categoryRefs: Record<string, string> = {};

  for (let i = 0; i < catalog.length; i++) {
    const cat = catalog[i];
    const catId = `category-${cat.slug}`;
    categoryRefs[cat.slug] = catId;

    await client.createOrReplace({
      _id: catId,
      _type: "category",
      name: cat.name,
      slug: { _type: "slug", current: cat.slug },
      icon: cat.icon,
      description: cat.description,
      order: i + 1,
    });
    console.log(`  ✓ ${cat.name}`);
  }
  console.log("");

  // 3. Seed products
  console.log("Creating products...");
  for (const cat of catalog) {
    for (const product of cat.products) {
      await client.createOrReplace({
        _id: `product-${product.id}`,
        _type: "product",
        name: product.name,
        slug: { _type: "slug", current: product.id },
        description: product.description,
        category: {
          _type: "reference",
          _ref: categoryRefs[cat.slug],
        },
        price: product.price,
        priceFrom: product.priceFrom,
        tags: product.tags || [],
      });
      console.log(`  ✓ ${product.name}`);
    }
  }

  console.log("\n✅ Done! All data seeded successfully.");
}

seed().catch(console.error);
