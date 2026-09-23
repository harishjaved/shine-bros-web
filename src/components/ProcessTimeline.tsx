"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "INSPECT", desc: "We understand your vehicle's condition." },
  { num: "02", title: "PREPARE", desc: "We carefully prepare every surface." },
  { num: "03", title: "DETAIL", desc: "Our team deep-cleans and restores your vehicle." },
  { num: "04", title: "PROTECT", desc: "We apply the appropriate protection." },
  { num: "05", title: "DELIVER", desc: "Your car leaves looking fresh and showroom-ready." }
];

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-gray-50 border-y border-gray-200 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[var(--color-primary)]/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-[var(--color-primary)] uppercase tracking-widest mb-2"
          >
            The Journey to Perfection
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-heading tracking-tight uppercase text-gray-900"
          >
            How We Make Your Car Shine
          </motion.h3>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2 z-0" />
          
          {/* Connecting Line (Mobile) */}
          <div className="md:hidden absolute top-0 left-[23px] w-[2px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent z-0" />

          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={step.num}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="flex md:flex-col items-start md:items-center text-left md:text-center relative group"
              >
                {/* Number Orb */}
                <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-full glass-card flex items-center justify-center text-[var(--color-primary)] font-black text-xl md:text-2xl border border-[var(--color-primary)]/30 group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(220,38,38,0.5)] transition-all duration-300 relative z-10 mb-0 md:mb-6 mr-6 md:mr-0">
                  {step.num}
                </div>
                
                {/* Content */}
                <div>
                  <h4 className="text-xl font-bold font-heading text-gray-900 mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base max-w-[200px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
