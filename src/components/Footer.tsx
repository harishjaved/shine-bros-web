"use client";

import { siteConfig } from "@/data/siteConfig";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-200 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <Link href="#home" className="flex items-center gap-3 group mb-6">
              <img 
                src="/images/logo.jpg" 
                alt="Shine Bros Logo" 
                className="w-12 h-12 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform" 
              />
              <div className="flex flex-col">
                <span className="text-xl font-black font-heading tracking-wider text-gray-900 leading-none">
                  SHINE<span className="text-red-600">BROS</span>
                </span>
                <span className="text-[0.6rem] font-bold text-gray-500 uppercase tracking-[0.2em] mt-0.5">
                  Premium Detailing
                </span>
              </div>
            </Link>
            <p className="text-[var(--color-primary)] font-bold uppercase tracking-widest text-sm mb-6">
              {siteConfig.tagline}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              {siteConfig.description}
            </p>
            <div className="flex gap-4">
              <a href={siteConfig.social.instagram} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-900 hover:bg-[var(--color-primary)] hover:text-white transition-colors" target="_blank" rel="noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href={siteConfig.social.facebook} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-900 hover:bg-[var(--color-primary)] hover:text-white transition-colors" target="_blank" rel="noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href={siteConfig.social.youtube} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-900 hover:bg-[var(--color-primary)] hover:text-white transition-colors" target="_blank" rel="noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-bold font-heading text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "Services", "Packages", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-600 hover:text-[var(--color-primary)] transition-colors text-sm font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gray-900 font-bold font-heading text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              {["Car Wash", "Interior Detailing", "Exterior Detailing", "Polishing", "Ceramic Coating"].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-gray-600 hover:text-[var(--color-primary)] transition-colors text-sm font-medium">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-900 font-bold font-heading text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <span className="block text-gray-900 text-xs font-bold uppercase tracking-wider mb-1">Phone</span>
                <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`} className="text-gray-600 hover:text-[var(--color-primary)] transition-colors text-sm">{siteConfig.phone}</a>
              </li>
              <li>
                <span className="block text-gray-900 text-xs font-bold uppercase tracking-wider mb-1">WhatsApp</span>
                <a href={`https://wa.me/${siteConfig.whatsapp}`} className="text-gray-600 hover:text-[#25D366] transition-colors text-sm">{siteConfig.phone}</a>
              </li>
              <li>
                <span className="block text-gray-900 text-xs font-bold uppercase tracking-wider mb-1">Email</span>
                <a href={`mailto:${siteConfig.email}`} className="text-gray-600 hover:text-[var(--color-primary)] transition-colors text-sm">{siteConfig.email}</a>
              </li>
              <li>
                <span className="block text-gray-900 text-xs font-bold uppercase tracking-wider mb-1">Location</span>
                <span className="text-gray-600 text-sm">{siteConfig.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {siteConfig.businessName}. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
            <Link href="/admin" className="hover:text-[var(--color-primary)] font-medium transition-colors">Admin Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
