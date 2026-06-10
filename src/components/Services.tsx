import { Target, Globe, Zap, CheckCircle2, MessageSquare, HelpCircle } from "lucide-react";
import { SERVICES } from "../data";

export default function Services() {
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "target":
        return <Target className="text-cyan-400" size={24} />;
      case "globe":
        return <Globe className="text-cyan-400" size={24} />;
      case "zap":
        return <Zap className="text-cyan-400" size={24} />;
      default:
        return <Globe className="text-cyan-400" size={24} />;
    }
  };

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
    <section id="services" className="py-20 sm:py-28 relative bg-[#0b0f19]">
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-cyan-500/3 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase">// CAPABILITIES</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3 tracking-tight">
            Designed for Sales, Engineered for Speed.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-4 font-sans leading-relaxed">
            I don't just build pretty themes. I structure site flows to generate real leads, sales, 
            and phone calls. Click below to see what matches your stage of business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={`p-8 rounded-xl border flex flex-col justify-between relative group transition-all duration-300 ${
                service.badge
                  ? "border-cyan-500/25 bg-[#0e1626]/90 shadow-[0_4px_30px_rgba(6,182,212,0.06)] scale-102"
                  : "border-slate-900/90 bg-[#090d16]"
              } hover:border-[#1e2e4e] hover:bg-[#0c1221]`}
            >
              {service.badge && (
                <span className="absolute -top-3 right-6 px-3 py-1 bg-cyan-500 text-black font-semibold text-[11px] font-mono rounded-full uppercase tracking-wider shadow-lg">
                  {service.badge}
                </span>
              )}

              <div>
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-lg bg-[#0e1726] border border-slate-800 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  {getIcon(service.icon)}
                </div>

                <h3 className="font-display font-bold text-lg sm:text-xl text-white leading-snug">
                  {service.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-400 mt-4 leading-relaxed font-sans">
                  {service.description}
                </p>

                <div className="w-full h-[1px] bg-slate-900 my-6"></div>

                {/* Features List */}
                <ul className="flex flex-col gap-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start text-xs text-slate-300">
                      <CheckCircle2 size={14} className="text-cyan-400 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button inside card */}
              <button
                onClick={scrollToContact}
                className="mt-8 w-full py-3 bg-[#0d1525] hover:bg-cyan-500 hover:text-black border border-slate-800 hover:border-cyan-500 text-cyan-400 font-semibold text-xs rounded-md transition-all uppercase tracking-wider cursor-pointer"
              >
                Inquire About This Service
              </button>
            </div>
          ))}
        </div>

        {/* Mandatory Micro-CTA */}
        <div className="mt-12 text-center">
          <p className="inline-flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-slate-400 bg-slate-950/40 px-5 py-2.5 rounded-full border border-slate-900">
            <HelpCircle size={14} className="text-cyan-400" />
            <span>Unsure which package fits your current setup? We can define details together.</span>
            <a
              href="https://wa.me/254114347008?text=Hi%20Ab%20I%20need%20some%20advice%20on%20which%20web%20service%20fits%20my%20business."
              className="text-cyan-400 hover:underline inline-flex items-center gap-1 cursor-pointer font-bold h-fit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discuss on WhatsApp <i className="fa-brands fa-whatsapp text-emerald-400"></i>
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
