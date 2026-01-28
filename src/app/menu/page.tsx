import Link from "next/link";
import { catalog } from "@/data/catalog";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "תפריט | Leny V Ron",
  description: "הקטלוג המלא של Leny V Ron - עוגות, קינוחים, מאפים ועוד",
};

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-background-dark relative">
        <div className="hero-shape w-72 h-72 bg-gold/20 top-10 right-10" />
        <div className="hero-shape w-56 h-56 bg-rose/30 bottom-10 left-10" />

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <span className="text-gold text-sm tracking-[0.2em] mb-4 block">
            מה אנחנו מציעים
          </span>
          <h1 className="text-5xl md:text-6xl font-heading-he text-chocolate mb-4">
            התפריט שלנו
          </h1>
          <div className="decorative-line" />
          <p className="text-chocolate/60 max-w-xl mx-auto mt-6">
            מגוון רחב של עוגות, קינוחים ומאפים מעוצבים בקפידה
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {catalog.map((category) => (
              <Link
                key={category.slug}
                href={`/menu/${category.slug}`}
                className="group relative bg-white rounded-3xl p-6 md:p-8 text-center shadow-sm hover:shadow-glow transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-caramel/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-5xl md:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h2 className="text-xl md:text-2xl font-heading-he text-chocolate mb-2">
                    {category.name}
                  </h2>
                  <p className="text-chocolate/50 text-sm hidden md:block">
                    {category.description}
                  </p>

                  {/* Products count */}
                  <div className="mt-3 text-gold text-sm">
                    {category.products.length} מוצרים
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-background-dark">
        <div className="container mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-heading-he text-chocolate mb-4">
            לא מצאתם מה שחיפשתם?
          </h2>
          <p className="text-chocolate/60 text-sm mb-6">
            צרו איתנו קשר ונשמח לעזור לכם למצוא את המוצר המושלם
          </p>
          <a
            href="https://wa.me/972500000000?text=היי, אשמח לשמוע פרטים על המוצרים"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white text-sm font-medium rounded-full hover:bg-[#20BA5A] transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            דברו איתנו בוואטסאפ
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
