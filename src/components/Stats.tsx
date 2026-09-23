"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { label: "Cars Detailed", value: 500, suffix: "+" },
  { label: "Customer Rating", value: 4.9, suffix: "/5", isFloat: true },
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Care & Attention", value: 100, suffix: "%" },
];

function Counter({ value, suffix, isFloat }: { value: number; suffix: string; isFloat?: boolean }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-black font-heading text-gray-900">
      {isFloat ? count.toFixed(1) : Math.floor(count)}
      <span className="text-[var(--color-primary)]">{suffix}</span>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-gray-50 border-y border-gray-200 py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center justify-center space-y-2"
            >
              <Counter value={stat.value} suffix={stat.suffix} isFloat={stat.isFloat} />
              <div className="text-sm md:text-base text-gray-600 uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
