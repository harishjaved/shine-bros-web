"use client";

import { siteConfig } from "@/data/siteConfig";

export default function FloatingWhatsApp() {
  const handleClick = () => {
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi Shine Bros! I would like to know more about your detailing services.")}`, "_blank");
  };

  return (
    <button 
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-gray-900 p-3 md:p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:bg-[#20bd5a] hover:scale-110 transition-all flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      {/* Mobile Text */}
      <span className="max-w-0 overflow-hidden md:max-w-xs ml-0 md:ml-0 md:group-hover:ml-3 md:group-hover:max-w-xs transition-all duration-300 font-bold tracking-wide whitespace-nowrap block md:hidden">
        <span className="ml-2 block">Chat with us</span>
      </span>
      {/* Hover Text Desktop */}
      <span className="max-w-0 overflow-hidden ml-0 group-hover:ml-2 group-hover:max-w-[150px] transition-all duration-300 font-bold whitespace-nowrap hidden md:block">
        Chat with us
      </span>
    </button>
  );
}
