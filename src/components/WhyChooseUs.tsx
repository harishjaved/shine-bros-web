"use client";

import { motion } from "framer-motion";

const features = [
  { number: "01", title: "Professional Expertise" },
  { number: "02", title: "Premium Products" },
  { number: "03", title: "Attention to Detail" },
  { number: "04", title: "Transparent Pricing" },
  { number: "05", title: "Customer First Approach" },
  { number: "06", title: "Quality You Can See" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-[var(--color-primary)]/20 blur-[100px] rounded-full z-0" />
            <div className="relative z-10 rounded-2xl overflow-hidden border border-gray-200 shadow-2xl">
              <img 
                src="/images/gallery_1_1790054586449.jpg" 
                alt="Professional Detailing" 
                className="w-full h-auto object-cover aspect-[4/5] lg:aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-80" />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-8 -right-8 glass-card p-6 rounded-2xl z-20 flex items-center gap-4 hidden md:flex"
            >
              <div className="text-4xl font-black text-[var(--color-primary)]">100%</div>
              <div className="text-sm font-bold uppercase tracking-widest text-gray-700 max-w-[120px]">
                Satisfaction Guaranteed
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold text-[var(--color-primary)] uppercase tracking-widest mb-2"
            >
              The Shine Bros Difference
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black font-heading tracking-tight mb-10 text-gray-900"
            >
              WHY CHOOSE US?
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {features.map((feature, idx) => (
                <motion.div 
                  key={feature.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <span className="text-2xl font-black font-heading text-gray-700 group-hover:text-[var(--color-primary)] transition-colors duration-300 mt-1">
                    {feature.number}
                  </span>
                  <div>
                    <h4 className="text-lg font-bold font-heading text-gray-900 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <div className="h-[2px] w-0 bg-[var(--color-primary)] mt-2 group-hover:w-full transition-all duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-12"
            >
              <a 
                href="#booking"
                className="inline-flex items-center text-sm font-bold uppercase tracking-widest hover:text-[var(--color-primary)] transition-colors"
              >
                WHY SETTLE FOR ORDINARY? <span className="ml-2 text-[var(--color-primary)]">→</span>
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
