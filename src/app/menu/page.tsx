import { Suspense } from "react";
import { getCategories } from "@/sanity/queries";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CatalogView from "@/components/CatalogView";

export const revalidate = 60;

export const metadata = {
  title: "תפריט | Leny V Ron",
  description: "הקטלוג המלא של Leny V Ron - עוגות, קינוחים, מאפים ועוד",
};

export default async function MenuPage() {
  const categories = await getCategories();

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-heading-he text-chocolate mb-3">
            הקטלוג שלנו
          </h1>
          <p className="text-chocolate/60">
            מגוון רחב של מאפים איכותיים
          </p>
        </div>
      </section>

      {/* Catalog */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <Suspense>
            <CatalogView categories={categories} />
          </Suspense>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
