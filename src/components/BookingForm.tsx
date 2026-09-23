"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { services } from "@/data/services";
import { Calendar, Clock, Car, Phone, User, MessageSquare } from "lucide-react";

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vehicleType: "Sedan",
    vehicleModel: "",
    service: services[0].title,
    date: "",
    time: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          name: "", phone: "", vehicleType: "Sedan", vehicleModel: "", service: services[0].title, date: "", time: "", message: ""
        });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("Failed to submit booking. Please try again or contact us via WhatsApp.");
      }
    } catch (error) {
      alert("An error occurred. Please try again or contact us via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const text = `Hi Shine Bros! I would like to book an appointment.
Name: ${formData.name || "[Your Name]"}
Vehicle: ${formData.vehicleType} - ${formData.vehicleModel || "[Model]"}
Service: ${formData.service}
Date: ${formData.date || "[Date]"}
Time: ${formData.time || "[Time]"}
Message: ${formData.message || "None"}
    `.trim();
    
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="booking" className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Content */}
          <div className="w-full lg:w-5/12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold text-[var(--color-primary)] uppercase tracking-widest mb-2"
            >
              Ready For Perfection?
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black font-heading tracking-tight mb-6 text-gray-900"
            >
              BOOK YOUR DETAILING
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 mb-10 leading-relaxed"
            >
              Fill out the form to request an appointment. Our team will get back to you shortly to confirm your slot and finalize the details.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card p-8 rounded-2xl border border-gray-200"
            >
              <h4 className="text-xl font-bold font-heading mb-4">Prefer direct chat?</h4>
              <p className="text-gray-600 text-sm mb-6">Skip the form and message us directly on WhatsApp with your requirements.</p>
              <button 
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-gray-900 py-4 rounded-full font-bold uppercase tracking-wider transition-colors shadow-[0_0_20px_rgba(37,211,102,0.3)]"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                Book via WhatsApp
              </button>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-7/12"
          >
            <div className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden">
              <AnimatePresence>
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 bg-white/95 backdrop-blur-xl z-20 flex flex-col items-center justify-center text-center p-8"
                  >
                    <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <h3 className="text-3xl font-black font-heading mb-4 text-gray-900">BOOKING REQUEST RECEIVED</h3>
                    <p className="text-gray-600">We'll contact you shortly at <strong className="text-gray-900">{formData.phone}</strong> to confirm your appointment.</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-600 ml-1">Full Name *</label>
                    <div className="relative">
                      <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-gray-100 border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-gray-900 placeholder-gray-600 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all" placeholder="John Doe" />
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-600 ml-1">Phone Number *</label>
                    <div className="relative">
                      <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-gray-100 border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-gray-900 placeholder-gray-600 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all" placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>

                  {/* Vehicle Type */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-600 ml-1">Vehicle Type *</label>
                    <div className="relative">
                      <Car size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                      <select name="vehicleType" value={formData.vehicleType} onChange={handleChange} className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-gray-900 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all appearance-none cursor-pointer">
                        <option value="Hatchback">Hatchback</option>
                        <option value="Sedan">Sedan</option>
                        <option value="SUV">SUV</option>
                        <option value="Luxury">Luxury / Sports</option>
                        <option value="Motorcycle">Motorcycle</option>
                      </select>
                    </div>
                  </div>

                  {/* Vehicle Model */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-600 ml-1">Vehicle Model *</label>
                    <div className="relative">
                      <Car size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input required type="text" name="vehicleModel" value={formData.vehicleModel} onChange={handleChange} className="w-full bg-gray-100 border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-gray-900 placeholder-gray-600 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all" placeholder="e.g. BMW 3 Series" />
                    </div>
                  </div>

                  {/* Service */}
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-600 ml-1">Select Service *</label>
                    <select name="service" value={formData.service} onChange={handleChange} className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 text-gray-900 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all appearance-none cursor-pointer">
                      {services.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                    </select>
                  </div>

                  {/* Date */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-600 ml-1">Preferred Date *</label>
                    <div className="relative">
                      <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-gray-900 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all cursor-pointer" />
                    </div>
                  </div>

                  {/* Time */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-600 ml-1">Preferred Time *</label>
                    <div className="relative">
                      <Clock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                      <select required name="time" value={formData.time} onChange={handleChange} className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-gray-900 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all appearance-none cursor-pointer">
                        <option value="" disabled>Select Time</option>
                        <option value="Morning (9AM - 12PM)">Morning (9AM - 12PM)</option>
                        <option value="Afternoon (12PM - 4PM)">Afternoon (12PM - 4PM)</option>
                        <option value="Evening (4PM - 7PM)">Evening (4PM - 7PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-600 ml-1">Additional Message</label>
                    <div className="relative">
                      <MessageSquare size={18} className="absolute left-4 top-4 text-gray-500" />
                      <textarea name="message" value={formData.message} onChange={handleChange} rows={3} className="w-full bg-gray-100 border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-gray-900 placeholder-gray-600 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all resize-none" placeholder="Any specific requirements?" />
                    </div>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[var(--color-primary)] text-white py-4 rounded-full font-bold uppercase tracking-wider hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-5 h-5 border-2 border-black border-t-transparent rounded-full" />
                  ) : "Request Booking"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
