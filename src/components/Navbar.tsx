"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/data/siteConfig";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Packages", href: "#packages" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
  { name: "Admin", href: "/admin" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="#home" className="flex items-center gap-3 group">
              <img 
                src="/images/logo.jpg" 
                alt="Shine Bros Logo" 
                className="w-12 h-12 rounded-full object-cover shadow-[0_0_15px_rgba(255,210,28,0.3)] group-hover:scale-105 transition-transform" 
              />
              <div className="flex flex-col">
                <span className={`text-xl font-black font-heading tracking-wider leading-none transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                  SHINE<span className="text-red-600">BROS</span>
                </span>
                <span className="text-[0.6rem] font-bold text-gray-500 uppercase tracking-[0.2em] mt-0.5">
                  Premium Detailing
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm hover:text-red-600 transition-colors uppercase tracking-wider font-medium ${scrolled ? 'text-gray-700' : 'text-gray-200'}`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#booking"
              className="bg-[var(--color-primary)] text-white px-6 py-2.5 rounded-full font-bold uppercase tracking-wide hover:bg-red-700 hover:scale-105 transition-all shadow-[0_0_15px_rgba(220,38,38,0.4)]"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`hover:text-red-600 focus:outline-none transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-200 flex flex-col items-center pt-10 space-y-8 h-screen"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl text-gray-700 hover:text-gray-900 uppercase tracking-widest font-heading"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 bg-[var(--color-primary)] text-white px-10 py-4 rounded-full font-bold uppercase tracking-wide shadow-[0_0_20px_rgba(255,210,28,0.4)]"
            >
              Book Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
