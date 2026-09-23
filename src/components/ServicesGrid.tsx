"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 relative bg-white">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50 to-transparent opacity-80 z-0 pointer-events-none" />
      <div className="absolute -top-40 right-20 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-[var(--color-primary)] uppercase tracking-widest mb-2"
          >
            Our Services
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-heading tracking-tight text-gray-900"
          >
            PREMIUM CARE FOR YOUR VEHICLE
          </motion.h3>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={item} className="group h-full">
              <div className="glass-card rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(255,210,28,0.1)] hover:border-[var(--color-primary)]/30 relative overflow-hidden">
                
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300 border border-gray-200">
                  <service.icon size={28} className="text-[var(--color-primary)] group-hover:text-white transition-colors" />
                </div>
                
                <h4 className="text-xl font-bold font-heading mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  {service.title}
                </h4>
                
                <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200">
                  <span className="text-sm font-bold text-gray-700">
                    From <span className="text-gray-900">{service.price}</span>
                  </span>
                  
                  <a href="#booking" className="flex items-center text-sm font-bold text-[var(--color-primary)] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Learn More <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
