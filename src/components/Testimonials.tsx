"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-[var(--color-primary)]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-[var(--color-primary)] uppercase tracking-widest mb-2"
          >
            Client Success
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-heading tracking-tight text-gray-900"
          >
            WHAT THEY SAY
          </motion.h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-12 z-20">
            <button onClick={prev} className="w-10 h-10 md:w-12 md:h-12 rounded-full glass flex items-center justify-center text-gray-900 hover:bg-[var(--color-primary)] hover:text-white transition-colors focus:outline-none hidden sm:flex">
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-12 z-20">
            <button onClick={next} className="w-10 h-10 md:w-12 md:h-12 rounded-full glass flex items-center justify-center text-gray-900 hover:bg-[var(--color-primary)] hover:text-white transition-colors focus:outline-none hidden sm:flex">
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="relative h-[300px] md:h-[250px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 glass-card rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center text-center"
              >
                <Quote size={40} className="text-[var(--color-primary)]/20 absolute top-8 left-8" />
                
                <div className="flex gap-1 justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-[var(--color-primary)] text-[var(--color-primary)]" />
                  ))}
                </div>
                
                <p className="text-lg md:text-2xl font-medium text-gray-900 mb-8 leading-relaxed max-w-2xl">
                  "{testimonials[currentIndex].review}"
                </p>
                
                <div>
                  <h4 className="font-bold text-[var(--color-primary)] uppercase tracking-wider">{testimonials[currentIndex].name}</h4>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === idx ? "w-8 bg-[var(--color-primary)]" : "bg-gray-300 hover:bg-gray-1000"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
