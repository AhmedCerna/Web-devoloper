import { useEffect, useState } from "react";
import { MessageSquare, Phone, Send, Briefcase } from "lucide-react";

export default function FloatingCTAs() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {/* Floating WhatsApp Button (Standard bottom-right) - Hidden on extreme small heights/browsers if we want, but visible and nice */}
      <a
        href="https://wa.me/254114347008?text=Hi%20Ab%20I%20saw%20your%20site%20and%20want%20to%20chat%20about%20building%20a%20website%21"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed z-40 bottom-24 right-5 sm:bottom-6 sm:right-6 p-4 rounded-full bg-[#25D366] text-white shadow-[0_4px_18px_rgba(37,211,102,0.45)] hover:bg-[#20ba56] hover:scale-105 active:scale-95 transition-all flex items-center justify-center group ${
          showButton ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
        }`}
        aria-label="WhatsApp Chat Link"
      >
        <i className="fa-brands fa-whatsapp text-2xl lg:text-3xl"></i>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out font-mono text-xs font-bold whitespace-nowrap pl-0 group-hover:pl-2">
          WhatsApp Me
        </span>
        {/* Active Ping helper indicator */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300"></span>
        </span>
      </a>

      {/* Sticky Mobile Bottom Bar: visible under md breakpoints */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-45 bg-[#070b13]/95 backdrop-blur-md border-t border-slate-900 grid grid-cols-3 filter drop-shadow-[0_-5px_15px_rgba(0,0,0,0.4)]">
        
        {/* Link 1: WhatsApp */}
        <a
          href="https://wa.me/254114347008?text=Hi%20Ab%20I%27m%20visiting%20your%20site%20on%20mobile%20and%20want%20to%20discuss%20a%20landing%20page%21"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2.5 hover:bg-slate-900/40 text-emerald-400 border-r border-slate-900/60 font-mono text-[11px]"
        >
          <i className="fa-brands fa-whatsapp text-lg mb-0.5"></i>
          <span>💬 WhatsApp</span>
        </a>

        {/* Link 2: Contact Form */}
        <button
          onClick={() => scrollToSection("contact")}
          className="flex flex-col items-center justify-center py-2.5 hover:bg-slate-900/40 text-cyan-400 border-r border-slate-900/60 font-mono text-[11px] cursor-pointer"
        >
          <Send size={15} className="mb-0.5" />
          <span>📩 Contact</span>
        </button>

        {/* Link 3: Work Portfolio */}
        <button
          onClick={() => scrollToSection("portfolio")}
          className="flex flex-col items-center justify-center py-2.5 hover:bg-slate-900/40 text-slate-300 font-mono text-[11px] cursor-pointer"
        >
          <Briefcase size={15} className="mb-0.5" />
          <span>💼 Work</span>
        </button>

      </div>
    </>
  );
}
