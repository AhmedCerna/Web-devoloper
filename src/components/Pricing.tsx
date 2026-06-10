import { CheckCircle2, ChevronRight, HelpCircle, Flame } from "lucide-react";
import { PRICING_PLANS } from "../data";

export default function Pricing() {
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
    <section id="pricing" className="py-20 sm:py-28 bg-[#080c14] border-t border-slate-950 relative overflow-hidden">
      {/* Visual neon light elements */}
      <div className="absolute top-1/2 left-2/3 w-80 h-80 rounded-full bg-cyan-500/2 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase">// FIXED RESOLUTE RATES</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3 tracking-tight">
            Transparent Pricing. Ready in Hours.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed font-sans">
            No hidden support subscriptions, no host markups. Choose the tier that matches your scope. 
            All plans are audited for top mobile speeds.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`p-8 rounded-xl border flex flex-col justify-between transition-all duration-300 relative group ${
                plan.isPopular
                  ? "border-cyan-500 bg-[#0e1626]/95 hover:bg-[#10192b] shadow-[0_10px_40px_rgba(6,182,212,0.1)] scale-103 z-10"
                  : "border-slate-900 bg-[#0b0f19]/40 hover:border-slate-800 hover:bg-[#0c1221]"
              }`}
            >
              {/* Highlight ribbon or tags */}
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-cyan-500 to-teal-500 text-black font-extrabold text-[10px] font-mono rounded-full uppercase tracking-widest flex items-center gap-1.5 shadow-md">
                  <Flame size={10} className="animate-pulse" />
                  Most Requested In Nairobi
                </div>
              )}

              <div>
                {/* Header */}
                <div className="mb-6">
                  <h3 className="font-display font-black text-white text-lg uppercase tracking-wider">
                    {plan.name}
                  </h3>
                  
                  {/* Price */}
                  <div className="flex items-baseline gap-1 mt-4">
                    <span className="text-3xl sm:text-4xl font-extrabold font-display text-white">
                      {plan.price}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">/ fixed</span>
                  </div>

                  {/* 48-Hour highlight! */}
                  <div className={`mt-4 px-3 py-1.5 rounded text-xs font-mono inline-flex items-center gap-2 ${
                    plan.id === "starter"
                      ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-bold"
                      : "bg-slate-950 text-slate-400 border border-slate-900"
                  }`}>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                    {plan.delivery}
                  </div>

                  <p className="text-xs text-slate-400 mt-5 leading-relaxed font-sans">
                    {plan.description}
                  </p>
                </div>

                <div className="w-full h-[1px] bg-slate-900 my-6"></div>

                {/* Features List */}
                <ul className="flex flex-col gap-3.5 mb-8">
                  {plan.features.map((feat, index) => (
                    <li key={index} className="flex gap-2.5 items-start text-xs text-slate-300">
                      <CheckCircle2 size={13} className="text-cyan-400 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={scrollToContact}
                className={`w-full py-4 rounded-lg font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  plan.isPopular
                    ? "bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_4px_15px_rgba(6,182,212,0.3)] hover:shadow-[0_6px_22px_rgba(6,182,212,0.4)]"
                    : "bg-slate-950 hover:bg-slate-900 border border-[#1e2e4e]/40 hover:border-cyan-500/40 text-cyan-400"
                }`}
              >
                Inquire For This Package
                <ChevronRight size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* Micro-CTA */}
        <div className="mt-12 text-center">
          <p className="inline-flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-slate-400 bg-slate-950/40 px-5 py-2.5 rounded-full border border-slate-900">
            <HelpCircle size={14} className="text-cyan-400" />
            <span>Need a custom enterprise portal or sophisticated API backends with Cloud SQL databases?</span>
            <a
              href="https://wa.me/254114347008?text=Hi%20Ab%20I%20have%20custom%20requirements%20that%20go%20beyond%20your%20standard%20pricing%20packages."
              className="text-cyan-400 hover:underline inline-flex items-center gap-1 cursor-pointer font-bold h-fit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Custom Quote <i className="fa-brands fa-whatsapp text-emerald-400"></i>
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
