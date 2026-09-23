"use client";

import { motion } from "framer-motion";
import { packages } from "@/data/packages";
import { Check } from "lucide-react";

export default function Packages() {
  return (
    <section id="packages" className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-[url('/images/hero_bg_1790053272391.jpg')] bg-cover bg-fixed bg-center opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-[var(--color-primary)] uppercase tracking-widest mb-2"
          >
            Transparent Pricing
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-heading tracking-tight text-gray-900"
          >
            CHOOSE YOUR PACKAGE
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className={`relative glass-card rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                pkg.isPopular 
                  ? "border-[var(--color-primary)] border-2 shadow-[0_15px_40px_rgba(220,38,38,0.15)] md:scale-105 z-10" 
                  : "border-gray-200 opacity-90 hover:opacity-100"
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 left-0 w-full bg-[var(--color-primary)] text-white text-center py-2 text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className={`p-8 md:p-10 ${pkg.isPopular ? "pt-12" : ""}`}>
                <h4 className="text-2xl font-black font-heading text-gray-900 mb-2">{pkg.name}</h4>
                <p className="text-gray-600 text-sm mb-6 h-10">{pkg.description}</p>
                <div className="flex items-baseline gap-2 mb-8 border-b border-gray-200 pb-8">
                  <span className="text-4xl font-black text-gray-900">{pkg.price}</span>
                </div>
                
                <ul className="space-y-4 mb-10">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={20} className="text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#booking"
                  className={`block w-full text-center py-4 rounded-full font-bold uppercase tracking-wider transition-all ${
                    pkg.isPopular 
                      ? "bg-[var(--color-primary)] text-white hover:bg-red-700 hover:shadow-[0_0_20px_rgba(255,210,28,0.5)]" 
                      : "bg-gray-200 text-gray-900 hover:bg-gray-300"
                  }`}
                >
                  {pkg.buttonText}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
