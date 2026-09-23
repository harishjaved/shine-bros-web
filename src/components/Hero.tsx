"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pb-32">
      {/* Clear Moving Image Background */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        {/* Subtle vignette/gradient to ensure text stands out without muddying the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-10 pointer-events-none" />
        
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1.15, x: 0 }}
          animate={{ scale: 1.0, x: "-2%" }}
          transition={{ 
            duration: 25, 
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <img
            src="/images/porsche_clean_bg.jpg"
            alt="Porsche Detailing"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading tracking-tight leading-tight uppercase mb-6 drop-shadow-2xl text-white">
            <span className="block">Your Car.</span>
            <span className="block">Our Passion.</span>
            <span className="block text-gradient-primary">Perfect Shine.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-medium"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
        >
          <a
            href="#booking"
            className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-red-700 hover:scale-105 transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] flex items-center justify-center"
          >
            Book Your Detailing
          </a>
          <a
            href="#services"
            className="glass text-gray-900 px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-gray-200 hover:scale-105 transition-all flex items-center justify-center"
          >
            Explore Services
          </a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base font-bold text-gray-100 uppercase tracking-wide drop-shadow-md"
        >
          <span className="flex items-center gap-2"><span className="text-red-500 font-black text-lg">✓</span> Professional Detailing</span>
          <span className="flex items-center gap-2"><span className="text-red-500 font-black text-lg">✓</span> Premium Products</span>
          <span className="flex items-center gap-2"><span className="text-red-500 font-black text-lg">✓</span> Experienced Team</span>
          <span className="flex items-center gap-2"><span className="text-red-500 font-black text-lg">✓</span> Customer Satisfaction</span>
        </motion.div>
      </div>

    </section>
  );
}
