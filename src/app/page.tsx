import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { catalog } from "@/data/catalog";

const features = [
  {
    icon: "🚚",
    title: "קו חלוקה ארצי",
    desc: "משלוחים לכל רחבי הארץ ישירות לעסק שלך",
  },
  {
    icon: "📦",
    title: "מלאי זמין",
    desc: "מגוון רחב של מוצרים במלאי קבוע",
  },
  {
    icon: "🤝",
    title: "שירות אישי",
    desc: "ליווי צמוד ומחירים מיוחדים ללקוחות קבועים",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-pattern"
      >
        {/* Decorative shapes */}
        <div className="hero-shape w-96 h-96 bg-gold/30 top-20 -right-20" />
        <div className="hero-shape w-72 h-72 bg-rose/40 bottom-20 -left-20" />
        <div className="hero-shape w-48 h-48 bg-caramel/30 top-1/2 left-1/4" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-4 mb-6 animate-fade-in">
            <span className="w-12 h-[1px] bg-gold" />
            <span className="text-gold text-sm tracking-[0.3em]">משווק סיטונאי בלעדי</span>
            <span className="w-12 h-[1px] bg-gold" />
          </div>

          <h1 className="hero-title text-7xl md:text-8xl lg:text-9xl font-heading mb-6 text-chocolate animate-fade-in-up">
            Leny V Ron
          </h1>

          <div className="decorative-line animate-fade-in" />

          <p className="text-3xl md:text-4xl font-heading-he text-chocolate/80 mb-4 animate-fade-in-up animate-delay-100">
            עוגות קונטידור מעוצבות
          </p>

          <p className="text-lg md:text-xl text-chocolate/60 max-w-2xl mx-auto mb-6 animate-fade-in-up animate-delay-200">
            קו חלוקה ארצי | מחירי סיטונאות | שירות מקצועי לעסקים
          </p>

          <div className="inline-block px-4 py-2 bg-gold/20 rounded-full mb-8 animate-fade-in-up animate-delay-200">
            <span className="text-chocolate/80 text-sm font-medium">לקוחות עסקיים בלבד</span>
          </div>

          <div className="flex gap-4 justify-center flex-wrap animate-fade-in-up animate-delay-300">
            <a href="#gallery" className="btn-primary">
              לגלריה
            </a>
            <a href="#contact" className="btn-outline">
              צור קשר
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-gold rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-background-dark">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card rounded-3xl p-8 text-center hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-heading-he text-chocolate mb-3">
                  {feature.title}
                </h3>
                <p className="text-chocolate/60">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-4 relative">
        <div className="hero-shape w-64 h-64 bg-rose/30 top-10 right-10" />

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <span className="text-gold text-sm tracking-[0.2em] mb-4 block">
              הסיפור שלנו
            </span>
            <h2 className="text-5xl md:text-6xl font-heading-he text-chocolate mb-4">
              אודותינו
            </h2>
            <div className="decorative-line" />
          </div>

          <div className="glass-card rounded-[2.5rem] p-12 md:p-16 text-center">
            <p className="text-xl md:text-2xl text-chocolate/80 leading-relaxed mb-8">
              Leny V Ron - משווק סיטונאי בלעדי של מוצרי קונדיטוריה איכותיים.
            </p>
            <p className="text-lg text-chocolate/60 leading-relaxed mb-8">
              אנחנו מפיצים מגוון רחב של עוגות, קינוחים ומאפים מעוצבים מהקונדיטוריות
              המובילות בארץ. קו חלוקה ארצי, מלאי זמין ומחירי סיטונאות מיוחדים
              לבתי קפה, מסעדות, קייטרינג ועסקים.
            </p>
            <div className="flex items-center justify-center gap-8 text-gold flex-wrap">
              <div className="text-center">
                <div className="text-4xl font-heading mb-1">100+</div>
                <div className="text-sm text-chocolate/50">מוצרים בקטלוג</div>
              </div>
              <div className="w-[1px] h-12 bg-gold/30 hidden sm:block" />
              <div className="text-center">
                <div className="text-4xl font-heading mb-1">10+</div>
                <div className="text-sm text-chocolate/50">שנות ניסיון</div>
              </div>
              <div className="w-[1px] h-12 bg-gold/30 hidden sm:block" />
              <div className="text-center">
                <div className="text-4xl font-heading mb-1">🚚</div>
                <div className="text-sm text-chocolate/50">משלוח ארצי</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="gallery" className="py-32 px-4 bg-background-dark relative">
        <div className="hero-shape w-80 h-80 bg-caramel/20 bottom-20 left-10" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <span className="text-gold text-sm tracking-[0.2em] mb-4 block">
              מה אנחנו מציעים
            </span>
            <h2 className="text-5xl md:text-6xl font-heading-he text-chocolate mb-4">
              הקטגוריות שלנו
            </h2>
            <div className="decorative-line" />
          </div>

          {/* Main Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
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
                  <h3 className="text-xl md:text-2xl font-heading-he text-chocolate mb-2">
                    {category.name}
                  </h3>
                  <p className="text-chocolate/50 text-sm hidden md:block">
                    {category.description}
                  </p>

                  {/* Products count */}
                  <div className="mt-3 flex items-center justify-center gap-1 text-gold text-sm">
                    <span>{category.products.length} מוצרים</span>
                    <svg className="w-4 h-4 group-hover:translate-x-[-4px] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Featured subcategories */}
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-heading-he text-chocolate text-center mb-8">
              עוגות מעוצבות לכל אירוע
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {catalog[0].subcategories.map((sub, index) => (
                <Link
                  key={index}
                  href={`/menu/${catalog[0].slug}`}
                  className="bg-chocolate/5 hover:bg-gold/20 rounded-2xl p-4 text-center transition-all duration-300 group"
                >
                  <span className="text-chocolate/70 group-hover:text-chocolate font-medium text-sm md:text-base">
                    {sub}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-chocolate/60 hover:text-[#E4405F] text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @lenyvron
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 px-4 relative">
        <div className="hero-shape w-72 h-72 bg-gold/20 top-20 left-20" />
        <div className="hero-shape w-56 h-56 bg-rose/30 bottom-20 right-20" />

        <div className="container mx-auto max-w-2xl relative z-10">
          <div className="text-center mb-10">
            <span className="text-gold text-xs tracking-[0.2em] mb-3 block">
              נשמח לשמוע מכם
            </span>
            <h2 className="text-4xl md:text-5xl font-heading-he text-chocolate mb-3">
              צור קשר
            </h2>
            <div className="decorative-line" />
          </div>

          <div className="glass-card rounded-2xl p-6 md:p-10">
            <p className="text-center text-chocolate/60 text-sm mb-8">
              מעוניינים לפתוח חשבון לקוח? צרו איתנו קשר לפרטים ומחירון
            </p>

            {/* Contact info - compact */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href="tel:0500000000"
                className="flex-1 flex items-center gap-3 p-3 rounded-xl bg-chocolate/5 hover:bg-gold/10 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-chocolate/50">טלפון</div>
                  <div className="text-sm font-semibold text-chocolate truncate">050-000-0000</div>
                </div>
              </a>

              <a
                href="mailto:info@lenyvron.com"
                className="flex-1 flex items-center gap-3 p-3 rounded-xl bg-chocolate/5 hover:bg-gold/10 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-chocolate/50">אימייל</div>
                  <div className="text-sm font-semibold text-chocolate truncate">info@lenyvron.com</div>
                </div>
              </a>
            </div>

            {/* CTA Buttons - compact */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:0500000000"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gold to-caramel text-white text-sm font-medium rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                התקשרו עכשיו
              </a>
              <a
                href="https://wa.me/972500000000?text=היי, אשמח לשמוע פרטים על עוגות"
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
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
