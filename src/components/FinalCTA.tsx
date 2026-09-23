"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

export default function FinalCTA() {
  return (
    <section className="relative py-32 bg-white overflow-hidden border-y border-gray-200">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gray-900/70 z-10" />
        <img 
          src="/images/sleek_black_car_bg_1790061528433.jpg" 
          alt="Luxury Car Detail" 
          className="w-full h-full object-cover filter brightness-50"
        />
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black font-heading tracking-tight mb-6 uppercase"
        >
          Your Car Deserves <br />
          <span className="text-[var(--color-primary)]">More Than A Wash.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-2xl text-gray-700 font-medium mb-12"
        >
          Give it the care, protection and finish it deserves.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="#booking"
            className="inline-block bg-[var(--color-primary)] text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-lg hover:bg-red-700 hover:scale-105 transition-all shadow-[0_0_30px_rgba(220,38,38,0.5)]"
          >
            Book Your Detailing
          </a>
        </motion.div>
      </div>
    </section>
  );
}
