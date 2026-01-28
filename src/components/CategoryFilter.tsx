"use client";

import { useState, useMemo } from "react";
import { Product } from "@/data/catalog";
import ProductCard from "./ProductCard";

interface CategoryFilterProps {
  products: Product[];
  subcategories: string[];
}

export default function CategoryFilter({ products, subcategories }: CategoryFilterProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Get all unique tags from products
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    products.forEach((product) => {
      product.tags?.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [products]);

  // Filter products by selected tags
  const filteredProducts = useMemo(() => {
    if (selectedTags.length === 0) return products;
    return products.filter((product) =>
      selectedTags.every((tag) => product.tags?.includes(tag))
    );
  }, [products, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
  };

  // Special filter tags (dietary restrictions)
  const specialTags = ["ללא גלוטן", "פרווה", "חלבי", "ללא סוכר", "צמחוני"];
  const availableSpecialTags = allTags.filter((tag) => specialTags.includes(tag));
  const regularTags = allTags.filter((tag) => !specialTags.includes(tag));

  return (
    <div>
      {/* Filters */}
      {(availableSpecialTags.length > 0 || subcategories.length > 0) && (
        <div className="mb-8">
          {/* Special dietary filters */}
          {availableSpecialTags.length > 0 && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-2 justify-center">
                {availableSpecialTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedTags.includes(tag)
                        ? "bg-gold text-white shadow-md"
                        : "bg-white text-chocolate/70 hover:bg-gold/10 border border-chocolate/10"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Other tag filters */}
          {regularTags.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center">
              {regularTags.slice(0, 8).map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    selectedTags.includes(tag)
                      ? "bg-chocolate text-white"
                      : "bg-chocolate/5 text-chocolate/60 hover:bg-chocolate/10"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}

          {/* Clear filters */}
          {selectedTags.length > 0 && (
            <div className="text-center mt-4">
              <button
                onClick={clearFilters}
                className="text-sm text-chocolate/50 hover:text-gold transition-colors underline"
              >
                נקה סינון ({selectedTags.length})
              </button>
            </div>
          )}
        </div>
      )}

      {/* Results count */}
      {selectedTags.length > 0 && (
        <div className="text-center mb-6">
          <span className="text-chocolate/50 text-sm">
            {filteredProducts.length} מוצרים נמצאו
          </span>
        </div>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* No results message */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-5xl mb-4">🔍</div>
          <p className="text-chocolate/50">לא נמצאו מוצרים מתאימים</p>
          <button
            onClick={clearFilters}
            className="mt-4 text-gold hover:underline"
          >
            נקה סינון
          </button>
        </div>
      )}
    </div>
  );
}
