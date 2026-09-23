"use client";

import { useState, useRef, useEffect } from "react";
import { siteConfig } from "@/data/siteConfig";
import { MessageSquare, X, Send } from "lucide-react";

type Message = {
  id: string;
  text: string;
  sender: "bot" | "user";
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "👋 Hi there! Welcome to **Shine Bros Car Wash**! How can I help you today? You can ask me about our services, pricing, location, or anything else! ✨",
      sender: "bot",
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleOptionClick = (option: string) => {
    // Add user message
    const userMsgId = Date.now().toString();
    setMessages((prev) => [...prev, { id: userMsgId, text: option, sender: "user" }]);

    // Simulate bot typing delay
    setTimeout(() => {
      let botReply = "";
      
      switch (option) {
        case "💰 Pricing":
          botReply = "Our pricing varies by vehicle type and package. Our Basic Exterior wash starts at just ₹499! We also offer full detailing and ceramic coating. Check out our Packages section on the website, or click 'Book Now' to see exact rates.";
          break;
        case "🚗 Services":
          botReply = "We offer a wide range of services including Exterior & Interior Detailing, Ceramic Coating, Paint Correction, and standard Car Washes. We treat every car like it's our own!";
          break;
        case "📍 Location":
          botReply = `We are located at ${siteConfig.address}. You can find us on Google Maps here: ${siteConfig.googleMapsUrl}`;
          break;
        case "📞 Contact":
          botReply = `You can call us directly at ${siteConfig.phone} or chat with us on WhatsApp!`;
          break;
        case "🕤 Hours":
          botReply = "We are open Monday to Saturday from 9:00 AM to 7:00 PM. We are closed on Sundays.";
          break;
        case "📅 Book Now":
          botReply = "Awesome! You can fill out the booking form on our website to schedule an appointment. We'll confirm it via WhatsApp!";
          break;
        default:
          botReply = "I can definitely help with that. If you need immediate assistance, please call us or message us on WhatsApp!";
      }

      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), text: botReply, sender: "bot" },
      ]);
    }, 600);
  };

  // Format bold text
  const formatText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={index} className="font-bold">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-[100] bg-[var(--color-primary)] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(230,57,70,0.4)] hover:scale-110 transition-transform flex items-center justify-center ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        aria-label="Open Chat"
      >
        <MessageSquare size={28} />
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-6 right-6 z-[110] w-[350px] max-w-[calc(100vw-3rem)] bg-[#1a1a1a] border border-[#333] rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-0 opacity-0 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="bg-[#1a1a1a] p-4 flex items-center justify-between border-b border-[#333]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FFC107] rounded-full flex-shrink-0"></div>
            <div>
              <h3 className="text-white font-bold text-lg leading-none">Shine Bros</h3>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-2 h-2 bg-[#25D366] rounded-full"></span>
                <span className="text-[#25D366] text-xs font-medium">Online</span>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white transition-colors p-1"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 bg-[#1a1a1a] p-4 overflow-y-auto max-h-[350px] min-h-[250px] flex flex-col gap-4">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`max-w-[85%] rounded-xl p-3 text-sm leading-relaxed ${
                msg.sender === "bot" 
                  ? "bg-[#252525] text-gray-100 self-start rounded-tl-none border border-[#333]" 
                  : "bg-[var(--color-primary)] text-white self-end rounded-tr-none"
              }`}
            >
              {formatText(msg.text)}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Options / Footer */}
        <div className="p-4 bg-[#1a1a1a] border-t border-[#333]">
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              "💰 Pricing", 
              "🚗 Services", 
              "📍 Location", 
              "📞 Contact", 
              "🕤 Hours", 
              "📅 Book Now"
            ].map((option) => (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className="px-3 py-1.5 bg-[#252525] border border-[#333] hover:bg-[#333] hover:border-[#444] text-gray-200 text-xs font-medium rounded-full transition-colors flex items-center gap-1.5"
              >
                {option}
              </button>
            ))}
          </div>
          <div className="mt-4 text-center">
            <a 
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi Shine Bros! I need some help.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] text-xs font-medium hover:underline flex items-center justify-center gap-1"
            >
              <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" className="shrink-0"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              Chat on WhatsApp instead
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
