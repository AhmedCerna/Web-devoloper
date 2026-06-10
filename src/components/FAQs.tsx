import { useState } from "react";
import { FAQS } from "../data";
import { ChevronDown, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FAQs() {
  const [openId, setOpenId] = useState<string | null>("payment"); // Open payment by default since it lists 0 upfront mockup

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 relative bg-[#0b0f19] border-t border-slate-900">
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-cyan-500/3 blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase">// RESOLVING OBJECTIONS</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3 tracking-tight">
            Frequently Solved Objections
          </h2>
          <p className="text-sm text-slate-400 mt-4 leading-relaxed font-sans max-w-lg mx-auto">
            Everything you need to know about the Nairobi freelance layout process, payments, and 
            future management independence.
          </p>
        </div>

        {/* FAQs Accordion Blocks */}
        <div className="flex flex-col gap-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-lg border transition-all duration-200 ${
                  isOpen ? "border-[#1e2e4e] bg-[#0c1221]" : "border-slate-950 bg-[#090d16]/70"
                }`}
              >
                {/* Header click bar */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer group"
                >
                  <span className="font-display font-bold text-sm sm:text-base text-gray-200 group-hover:text-white transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-slate-400 transition-transform duration-300 shrink-0 ml-4 ${
                      isOpen ? "rotate-180 text-cyan-400" : ""
                    }`}
                  />
                </button>

                {/* Animated Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-400 leading-relaxed font-sans border-t border-slate-900/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* FAQ Micro-CTA */}
        <div className="mt-12 text-center">
          <p className="inline-flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-slate-400 bg-slate-950/40 px-5 py-2.5 rounded-full border border-slate-900">
            <MessageSquare size={13} className="text-cyan-400" />
            <span>Have a technical question not listed above, like hosting security, SSL, or domain transfer?</span>
            <a
              href="https://wa.me/254114347008?text=Hi%20Ab%20I%20have%20a%20question%20about%20hosting%20and%20domain%20setups..."
              className="text-cyan-400 hover:underline inline-flex items-center gap-1 cursor-pointer font-bold h-fit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ask on WhatsApp <i className="fa-brands fa-whatsapp text-emerald-400"></i>
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
