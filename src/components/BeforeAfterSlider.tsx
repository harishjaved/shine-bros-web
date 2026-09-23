"use client";

import { useState, useRef, useEffect, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from "react";
import { motion } from "framer-motion";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: ReactMouseEvent | MouseEvent) => {
    handleMove((e as MouseEvent).clientX ?? (e as ReactMouseEvent).clientX);
  };

  const handleTouchMove = (e: ReactTouchEvent | TouchEvent) => {
    handleMove((e as TouchEvent).touches[0].clientX ?? (e as ReactTouchEvent).touches[0].clientX);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", () => setIsDragging(false));
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", () => setIsDragging(false));
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", () => setIsDragging(false));
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", () => setIsDragging(false));
    };
  }, [isDragging]);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-[var(--color-primary)] uppercase tracking-widest mb-2"
          >
            See The Difference
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-heading tracking-tight text-gray-900"
          >
            REAL TRANSFORMATION. REAL DETAILING.
          </motion.h3>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200 select-none touch-none"
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
        >
          {/* After Image (Background) */}
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
            <img 
              src="/images/service_exterior_1790053299926.jpg" 
              alt="After Detailing" 
              className="absolute inset-0 w-full h-full object-cover"
              draggable="false"
            />
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-gray-900 font-bold text-sm tracking-widest uppercase border border-gray-200">
              After
            </div>
          </div>

          {/* Before Image (Foreground/Clipped) */}
          <div 
            className="absolute inset-0 w-full h-full aspect-[16/9] md:aspect-[21/9] overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img 
              src="/images/service_interior_1790053463647.jpg" 
              alt="Before Detailing" 
              className="absolute inset-0 w-full h-full object-cover filter grayscale sepia-[0.3]"
              draggable="false"
            />
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-gray-900 font-bold text-sm tracking-widest uppercase border border-gray-200">
              Before
            </div>
          </div>

          {/* Slider Line & Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10"
            style={{ left: `calc(${sliderPosition}% - 2px)` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.5)] cursor-ew-resize">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 18L2 12L8 6" stroke="#0B0F14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 6L22 12L16 18" stroke="#0B0F14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
