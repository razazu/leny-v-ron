"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { SanityCategory, SanityProduct } from "@/sanity/queries";
import ProductCard from "./ProductCard";

interface CatalogViewProps {
  categories: SanityCategory[];
}

export default function CatalogView({ categories }: CatalogViewProps) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState<string | null>(categoryParam);
  const [search, setSearch] = useState("");

  const allProducts = useMemo(() => {
    return categories.flatMap((cat) =>
      cat.products.map((p) => ({ ...p, categorySlug: cat.slug, categoryName: cat.name }))
    );
  }, [categories]);

  const filteredProducts = useMemo(() => {
    let products = allProducts;

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      products = products.filter(
        (p) =>
          p.name?.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q) ||
          p.categoryName?.toLowerCase().includes(q) ||
          p.tags?.some((t) => t.toLowerCase().includes(q))
      );
    } else if (activeCategory) {
      products = products.filter((p) => p.categorySlug === activeCategory);
    }

    return products;
  }, [allProducts, activeCategory, search]);

  return (
    <div>
      {/* Search */}
      <div className="max-w-md mx-auto mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="חיפוש מוצרים..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              if (e.target.value.trim()) setActiveCategory(null);
            }}
            className="w-full px-5 py-3 pr-12 rounded-full border border-chocolate/15 bg-white text-chocolate placeholder:text-chocolate/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 text-sm"
          />
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-chocolate/30"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Category Chips */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
            activeCategory === null
              ? "bg-gold text-white shadow-md"
              : "bg-white text-chocolate/70 hover:bg-gold/10 border border-chocolate/10"
          }`}
        >
          הכל
        </button>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() =>
              setActiveCategory(activeCategory === cat.slug ? null : cat.slug)
            }
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat.slug
                ? "bg-gold text-white shadow-md"
                : "bg-white text-chocolate/70 hover:bg-gold/10 border border-chocolate/10"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Count */}
      <div className="text-center mb-8">
        <span className="text-gold text-sm font-medium">
          {filteredProducts.length} מוצרים
        </span>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* No results */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <div className="text-5xl mb-4">🔍</div>
          <p className="text-chocolate/50 mb-4">לא נמצאו מוצרים</p>
          <button
            onClick={() => {
              setActiveCategory(null);
              setSearch("");
            }}
            className="text-gold hover:underline text-sm"
          >
            נקה חיפוש
          </button>
        </div>
      )}
    </div>
  );
}
