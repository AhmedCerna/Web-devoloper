import { PROJECTS } from "../data";
import { Link, ExternalLink, HelpCircle } from "lucide-react";

export default function Portfolio() {
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
    <section id="portfolio" className="py-20 sm:py-28 relative bg-[#080c14] border-t border-slate-950">
      <div className="absolute top-1/3 left-1/10 w-96 h-96 rounded-full bg-cyan-500/3 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase">// LATEST DEPLOYS</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3 tracking-tight">
              Selected Work & Conversion Proof
            </h2>
            <p className="text-sm text-slate-400 mt-3 max-w-xl leading-relaxed">
              Real code, real results. None of these use slow page builders. They are designed 
              with premium typography, custom responsive styling, and fast database loads.
            </p>
          </div>
          
          <button
            onClick={scrollToContact}
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 font-semibold text-xs rounded-lg transition-all font-mono shrink-0 cursor-pointer text-center md:text-left self-start md:self-auto"
          >
            // INQUIRE ABOUT CUSTOM WORK
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl border border-slate-900/80 bg-[#0b0f19]/40 hover:border-slate-800 hover:bg-[#0c1221]/90 overflow-hidden transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Showcase */}
                <div className="relative overflow-hidden aspect-video bg-[#0b0f19]">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="object-cover w-full h-full group-hover:scale-103 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-3 left-3 bg-[#0a0f1d]/90 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-cyan-400 border border-cyan-500/10">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display font-bold text-white text-base sm:text-lg group-hover:text-cyan-400 transition-colors flex items-center justify-between">
                    {project.title}
                    {project.link && (
                      <ExternalLink size={14} className="text-slate-500 group-hover:text-cyan-400 transition-colors shrink-0 ml-2" />
                    )}
                  </h3>
                  
                  <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tech.map((t, index) => (
                      <span
                        key={index}
                        className="px-2 py-0.5 rounded bg-slate-950 font-mono text-[9px] text-slate-300 border border-slate-900"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="mx-6 mb-6 p-3 rounded bg-emerald-500/5 border border-emerald-500/10 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                <span>{project.stats}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Micro-CTA */}
        <div className="mt-12 text-center">
          <p className="inline-flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-slate-400 bg-slate-950/40 px-5 py-2.5 rounded-full border border-slate-900">
            <HelpCircle size={14} className="text-cyan-400" />
            <span>Looking for a specific industry or bespoke layout? I have custom live samples.</span>
            <a
              href="https://wa.me/254114347008?text=Hi%20Ab%20I%20would%20like%20to%20see%20more%20portfolio%20examples%20specific%20to%20my%20industry."
              className="text-cyan-400 hover:underline inline-flex items-center gap-1 cursor-pointer font-bold h-fit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Request Live Samples <i className="fa-brands fa-whatsapp text-emerald-400"></i>
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
