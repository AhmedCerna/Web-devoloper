import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, MoveRight } from "lucide-react";

export default function Hero() {
  const words = [
    "High-Converting Websites",
    "48-Hour Landing Pages",
    "Performance Optimization",
    "Pixel-Perfect UI Designs"
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const handleType = () => {
      const fullWord = words[wordIndex];
      if (!isDeleting) {
        setCurrentText(fullWord.slice(0, currentText.length + 1));
        setTypingSpeed(75);
        
        if (currentText === fullWord) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2500);
          return;
        }
      } else {
        setCurrentText(fullWord.slice(0, currentText.length - 1));
        setTypingSpeed(40);
        
        if (currentText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
      }
      
      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, typingSpeed]);

  const scrollToContact = () => {
    const contact = document.getElementById("contact");
    if (contact) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contact.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen pt-28 sm:pt-36 flex flex-col justify-center items-center px-4 sm:px-6 overflow-hidden bg-radial from-[#101726] via-[#0b0f19] to-[#080b12]"
    >
      {/* Background visual graphics */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-cyan-500/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs mb-6 sm:mb-8 shadow-[0_0_15px_rgba(6,182,212,0.05)] cursor-default"
        >
          <Sparkles size={12} className="animate-pulse" />
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Open for projects in Nairobi (or Remote)</span>
        </motion.div>

        {/* Subheader prefix */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-cyan-400 font-mono text-[13px] sm:text-[15px] uppercase tracking-widest mb-3"
        >
          // FREELANCE WEB DEVELOPMENT WITH SPEED & STRATEGY
        </motion.p>

        {/* Main Typed Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-display text-[32px] sm:text-[54px] lg:text-[68px] leading-[1.1] font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-100 to-slate-400 tracking-tight"
        >
          I Build{" "}
          <span className="text-cyan-400 block sm:inline relative">
            <span className="text-glow-cyan">{currentText}</span>
            <span className="ml-1 inline-block w-1 h-8 sm:h-12 bg-cyan-400 animate-blink">|</span>
          </span>
        </motion.h1>

        {/* Short punchy paragraph optimized for Nairobi market */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-sans"
        >
          No bloated agency fees. No infinite delays. I craft stunning, modern portfolios, 
          e-commerce storefronts, and landing pages built to convert.{" "}
          <strong className="text-white underline decoration-cyan-500 decoration-2">
            See your interactive homepage demo before you pay a single shilling.
          </strong>
        </motion.p>

        {/* Two CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-[0_4px_25px_rgba(6,182,212,0.35)] hover:shadow-[0_6px_30px_rgba(6,182,212,0.5)] transform hover:-translate-y-0.5"
          >
            Start My Free Demo
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="https://wa.me/254114347008?text=Hi%20Ab%20I%20saw%20your%20portfolio%20and%20I%20would%20love%20to%20discuss%20a%20website%20project%21"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-emerald-500/10 hover:bg-emerald-500/25 border border-emerald-500/30 hover:border-emerald-500/50 text-emerald-400 font-semibold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* Quick Micro-Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12 sm:mt-16 flex flex-wrap justify-center items-center gap-y-3 gap-x-8 text-xs text-slate-400 font-mono"
        >
          <div className="flex items-center gap-2">
            <span className="text-cyan-400">✓</span> 48-Hour Delivery Option
          </div>
          <div className="hidden sm:block w-[1px] h-3 bg-slate-800" />
          <div className="flex items-center gap-2">
            <span className="text-cyan-400">✓</span> Live Auditable Wireframe Demo
          </div>
          <div className="hidden sm:block w-[1px] h-3 bg-slate-800" />
          <div className="flex items-center gap-2">
            <span className="text-cyan-400">✓</span> Zero Upfront Commitments
          </div>
        </motion.div>
      </div>

      {/* Elegant Down Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[10px] text-slate-500 font-mono tracking-widest uppercase">
        <span>Scroll to see the magic</span>
        <MoveRight size={12} className="rotate-90 animate-bounce text-cyan-400" />
      </div>
    </section>
  );
}
