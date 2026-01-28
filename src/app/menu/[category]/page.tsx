import { notFound } from "next/navigation";
import Link from "next/link";
import { catalog, getCategoryBySlug, getAllCategorySlugs } from "@/data/catalog";
import CategoryFilter from "@/components/CategoryFilter";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({
    category: slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryData = getCategoryBySlug(category);

  if (!categoryData) {
    return { title: "קטגוריה לא נמצאה" };
  }

  return {
    title: `${categoryData.name} | Leny V Ron`,
    description: categoryData.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryData = getCategoryBySlug(category);

  if (!categoryData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-background-dark relative">
        <div className="hero-shape w-64 h-64 bg-gold/20 top-20 right-10" />

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-chocolate/50">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  בית
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/menu" className="hover:text-gold transition-colors">
                  תפריט
                </Link>
              </li>
              <li>/</li>
              <li className="text-chocolate">{categoryData.name}</li>
            </ol>
          </nav>

          {/* Title */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{categoryData.icon}</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-heading-he text-chocolate">
                {categoryData.name}
              </h1>
              <p className="text-chocolate/60 mt-1">{categoryData.description}</p>
            </div>
          </div>

        </div>
      </section>

      {/* Products Grid with Filters */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <CategoryFilter
            products={categoryData.products}
            subcategories={categoryData.subcategories}
          />

          {/* Order CTA */}
          <div className="mt-16 text-center">
            <div className="glass-card rounded-2xl p-8 max-w-xl mx-auto">
              <h3 className="text-2xl font-heading-he text-chocolate mb-2">
                רוצים להזמין?
              </h3>
              <p className="text-chocolate/60 text-sm mb-6">
                צרו איתנו קשר לפרטים נוספים והזמנות
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:0500000000"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gold to-caramel text-white text-sm font-medium rounded-full hover:shadow-lg transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  התקשרו עכשיו
                </a>
                <a
                  href={`https://wa.me/972500000000?text=היי, אשמח להזמין מהקטגוריה: ${categoryData.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-[#25D366] text-[#25D366] text-sm font-medium rounded-full hover:bg-[#25D366] hover:text-white transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  וואטסאפ
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Categories */}
      <section className="py-16 px-4 bg-background-dark">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl font-heading-he text-chocolate text-center mb-8">
            קטגוריות נוספות
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {catalog
              .filter((cat) => cat.slug !== category)
              .map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/menu/${cat.slug}`}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-chocolate hover:bg-gold hover:text-white transition-all"
                >
                  <span>{cat.icon}</span>
                  <span className="text-sm font-medium">{cat.name}</span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
