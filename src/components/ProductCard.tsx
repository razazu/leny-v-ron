"use client";

import { Product } from "@/data/catalog";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const formatPrice = (price: number) => {
    return `₪${price}`;
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Image placeholder */}
      <div className="aspect-square bg-gradient-to-br from-gold/10 via-caramel/20 to-rose/10 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl opacity-30">🎂</span>
        </div>

        {/* Tags */}
        {product.tags && product.tags.length > 0 && (
          <div className="absolute top-3 right-3 flex flex-wrap gap-1 justify-end">
            {product.tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-0.5 bg-white/90 backdrop-blur-sm text-chocolate/70 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-heading-he text-lg text-chocolate mb-1 group-hover:text-gold transition-colors">
          {product.name}
        </h3>
        <p className="text-chocolate/50 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="text-gold font-semibold">
            {product.price && formatPrice(product.price)}
            {product.priceFrom && (
              <span>
                החל מ-{formatPrice(product.priceFrom)}
              </span>
            )}
          </div>

          {/* Add to cart button */}
          <button
            onClick={() => addToCart(product)}
            className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all"
            title="הוסף לסל"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
