"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { faq } from "@/data/faq";
import { Phone, Mail, MapPin, Clock, Plus, Minus, MessageSquare } from "lucide-react";

export default function ContactFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-[var(--color-primary)] uppercase tracking-widest mb-2"
          >
            Get In Touch
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-heading tracking-tight text-gray-900"
          >
            READY TO MAKE YOUR CAR SHINE?
          </motion.h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {/* Phone */}
              <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-[var(--color-primary)] mb-4">
                  <Phone size={24} />
                </div>
                <h4 className="text-gray-900 font-bold font-heading mb-1">Phone</h4>
                <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`} className="text-gray-600 hover:text-[var(--color-primary)] transition-colors">{siteConfig.phone}</a>
              </div>
              
              {/* WhatsApp */}
              <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center text-[#25D366] mb-4">
                  <MessageSquare size={24} />
                </div>
                <h4 className="text-gray-900 font-bold font-heading mb-1">WhatsApp</h4>
                <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-[#25D366] transition-colors">{siteConfig.phone}</a>
              </div>
              
              {/* Email */}
              <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-[var(--color-primary)] mb-4">
                  <Mail size={24} />
                </div>
                <h4 className="text-gray-900 font-bold font-heading mb-1">Email</h4>
                <a href={`mailto:${siteConfig.email}`} className="text-gray-600 hover:text-[var(--color-primary)] transition-colors">{siteConfig.email}</a>
              </div>
              
              {/* Hours */}
              <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-[var(--color-primary)] mb-4">
                  <Clock size={24} />
                </div>
                <h4 className="text-gray-900 font-bold font-heading mb-1">Hours</h4>
                <span className="text-gray-600 text-sm whitespace-pre-line">{siteConfig.openingHours.replace(" | ", "\n")}</span>
              </div>
            </div>

            <div className="glass-card p-4 rounded-2xl overflow-hidden h-[300px] border border-gray-200 relative group">
              <div className="absolute inset-0 z-10 pointer-events-none group-hover:bg-black/0 bg-black/30 transition-colors duration-500" />
              <iframe 
                src={siteConfig.googleMapsUrl} 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(20%) contrast(110%)" }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col sm:flex-row justify-between items-center bg-white/90 backdrop-blur-md p-4 rounded-xl border border-gray-200 gap-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-[var(--color-primary)] shrink-0 mt-0.5" size={20} />
                  <span className="text-sm text-gray-700 font-medium">{siteConfig.address}</span>
                </div>
                <a 
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(siteConfig.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center px-5 py-2.5 bg-[var(--color-primary)] hover:bg-red-700 text-white text-sm font-bold rounded-lg transition-colors shrink-0"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h3 className="text-3xl font-black font-heading mb-8">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faq.map((item, index) => (
                <div 
                  key={index} 
                  className={`glass-card rounded-2xl border transition-colors duration-300 ${openFaq === index ? "border-[var(--color-primary)]/50" : "border-gray-200"}`}
                >
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className={`font-bold font-heading pr-8 ${openFaq === index ? "text-[var(--color-primary)]" : "text-gray-900"}`}>
                      {item.question}
                    </span>
                    <span className="text-gray-600 shrink-0">
                      {openFaq === index ? <Minus size={20} className="text-[var(--color-primary)]" /> : <Plus size={20} />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-200 pt-4">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
