"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CartButton } from "@/components/Cart";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "בית" },
    { href: "/menu", label: "תפריט" },
    { href: "/#about", label: "אודות" },
    { href: "/#contact", label: "צור קשר" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-heading text-chocolate hover:text-gold transition-colors"
          >
            Leny V Ron
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-chocolate/80 hover:text-gold transition-colors font-medium group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <CartButton />
            <Link
              href="/#contact"
              className="btn-primary text-sm py-2 px-6"
            >
              הזמינו עכשיו
            </Link>
          </div>

          {/* Mobile: Cart + Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <CartButton />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-chocolate"
              aria-label="תפריט"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? "max-h-96 opacity-100 pt-6" : "max-h-0 opacity-0"
            }`}
        >
          <div className="flex flex-col gap-4 pb-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-chocolate/80 hover:text-gold transition-colors font-medium text-lg text-center py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary text-center mt-2"
            >
              הזמינו עכשיו
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
