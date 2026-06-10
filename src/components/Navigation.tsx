import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-panel-accent py-3 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-1.5 focus:outline-none group cursor-pointer"
        >
          <div className="bg-cyan-500/10 text-cyan-400 font-mono text-xl font-bold px-3 py-1 rounded-md border border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors">
            &lt;Ab /&gt;
          </div>
          <span className="font-display font-bold text-lg hidden sm:inline-block text-white tracking-tight">
            Freelance Web Developer
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-7 text-[14px] font-medium text-gray-300">
            <li>
              <button
                onClick={() => scrollToSection("services")}
                className="hover:text-cyan-400 transition-colors cursor-pointer"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="hover:text-cyan-400 transition-colors cursor-pointer"
              >
                Work
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("process")}
                className="hover:text-cyan-400 transition-colors cursor-pointer"
              >
                Strategy
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("pricing")}
                className="hover:text-cyan-400 transition-colors cursor-pointer"
              >
                Pricing
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("faq")}
                className="hover:text-cyan-400 transition-colors cursor-pointer"
              >
                FAQ
              </button>
            </li>
          </ul>

          <div className="w-[1px] h-5 bg-slate-800"></div>

          {/* Availability Pill */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for Work
          </div>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-600 text-black font-semibold text-sm rounded-md transition-all flex items-center gap-2 group cursor-pointer shadow-[0_4px_14px_rgba(6,182,212,0.3)] hover:shadow-[0_6px_20px_rgba(6,182,212,0.4)]"
          >
            Let's Build <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-3">
          {/* Availability Badge for Mobile header */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[10px]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            Available
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-md focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed top-[60px] left-0 right-0 bottom-0 bg-[#0b0f19]/98 backdrop-blur-lg z-40 border-t border-slate-900 px-6 py-8 flex flex-col justify-between">
          <ul className="flex flex-col gap-6 text-[18px] font-display font-medium text-gray-100">
            <li>
              <button
                onClick={() => scrollToSection("services")}
                className="flex items-center justify-between w-full text-left"
              >
                <span>Services</span>
                <span className="text-cyan-400 text-sm font-mono">&lt;01&gt;</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="flex items-center justify-between w-full text-left"
              >
                <span>Work Showcase</span>
                <span className="text-cyan-400 text-sm font-mono">&lt;02&gt;</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("process")}
                className="flex items-center justify-between w-full text-left"
              >
                <span>Strategy & Process</span>
                <span className="text-cyan-400 text-sm font-mono">&lt;03&gt;</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("pricing")}
                className="flex items-center justify-between w-full text-left"
              >
                <span>Pricing Plans</span>
                <span className="text-cyan-400 text-sm font-mono">&lt;04&gt;</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("faq")}
                className="flex items-center justify-between w-full text-left"
              >
                <span>Frequently Asked FAQs</span>
                <span className="text-cyan-400 text-sm font-mono">&lt;05&gt;</span>
              </button>
            </li>
          </ul>

          <div className="flex flex-col gap-4 border-t border-slate-900 pt-6">
            <div className="flex items-center justify-between text-xs text-gray-400 font-mono">
              <span>Location</span>
              <span className="text-white">Nairobi, Kenya</span>
            </div>
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full py-3.5 bg-cyan-500 hover:bg-cyan-400 text-black text-center font-bold rounded-lg transition-all"
            >
              Get Started Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
