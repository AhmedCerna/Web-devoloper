import { ShieldAlert, Zap, MonitorPlay, Sparkles, Check, ChevronRight } from "lucide-react";

export default function Process() {
  const steps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      time: "30-Min Zoom or WhatsApp Call",
      desc: "We analyze your audience, find out what brings you money (leads, direct WhatsApp bookings, or checkout orders), and map out a layout structure.",
      badge: "No-Cost Plan"
    },
    {
      step: "02",
      title: "The Live Interactive Demo",
      time: "Completed in 24 Hours",
      desc: "I build a live link demonstrating the visual theme, structure, and font pairings. You click through it on your phone. If you don't love it, we stop. You pay absolutely nothing.",
      badge: "ZERO RISK — NO COMMITMENT",
      highlight: true
    },
    {
      step: "03",
      title: "Polished Build & Copywriting",
      time: "24 to 48 Hours",
      desc: "Once you approve the layout, I draft compelling headlines, compress images for Safaricom internet optimization, set up payment links, and form validation triggers.",
      badge: "Fast Execution"
    },
    {
      step: "04",
      title: "Handover & Autonomy Training",
      time: "1 Hour Video Guide Included",
      desc: "I launch the site on your domain and train you or your team with a personalized video. You'll make text changes, update catalog photos, and track leads yourself.",
      badge: "No Monthly Maintenance fees"
    }
  ];

  return (
    <section id="process" className="py-20 sm:py-28 relative bg-[#0b0f19] border-t border-slate-900 overflow-hidden">
      
      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 left-[20%] w-[1px] bg-slate-950/20 hidden md:block" />
      <div className="absolute top-0 bottom-0 left-[80%] w-[1px] bg-slate-950/20 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase">// CLIENT PROTECTION GUARANTEE</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3 leading-tight tracking-tight">
            How I Remove Your Strategic Risk: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              Interactive Demo Before Payment
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed max-w-2xl font-sans">
            Have you been burned by slow, unresponsive developers who hide for weeks? 
            My development cycle is transparent, collaborative, and entirely centered on earning your trust first.
          </p>
        </div>

        {/* Process Steps List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((s, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl border transition-all duration-300 flex flex-col justify-between relative group ${
                s.highlight
                  ? "border-cyan-500/25 bg-[#0e1626]/90 shadow-[0_0_30px_rgba(6,182,212,0.06)]"
                  : "border-slate-950 bg-[#090d16]/60"
              } hover:border-[#1e2e4e]`}
            >
              <div>
                <div className="flex items-start justify-between">
                  <span className={`font-mono text-3xl font-extrabold ${s.highlight ? "text-cyan-400" : "text-slate-700"} group-hover:text-cyan-400 transition-colors`}>
                    {s.step}
                  </span>
                  <span className={`px-2.5 py-1 rounded text-[10px] font-mono tracking-wider ${
                    s.highlight ? "bg-cyan-500 text-black font-extrabold" : "bg-slate-950 text-slate-400 border border-slate-900"
                  }`}>
                    {s.badge}
                  </span>
                </div>

                <div className="mt-6">
                  <h3 className="font-display font-black text-white text-base sm:text-lg tracking-tight">
                    {s.title}
                  </h3>
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-cyan-400 mt-1">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span>{s.time}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 mt-4 leading-relaxed font-sans">
                    {s.desc}
                  </p>
                </div>
              </div>

              {s.highlight && (
                <div className="mt-6 pt-5 border-t border-slate-900 flex items-center justify-between text-[11px] font-mono text-emerald-400">
                  <div className="flex items-center gap-1.5">
                    <span className="p-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                      <Check size={10} />
                    </span>
                    See layout skeleton live on a temporary URL
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Strategic reassurance footer banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-gradient-to-r from-[#0d162a] to-[#080d1a] border border-cyan-500/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0 border border-cyan-500/20">
              <ShieldAlert size={24} />
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-sm sm:text-base tracking-tight">
                No Contract. No Obligation. 100% Satisfaction.
              </h4>
              <p className="text-xs text-slate-400 mt-1 max-w-xl leading-relaxed">
                If the homepage layout mockup doesn't showcase your business vision perfectly, 
                we part ways as friends. I only take on projects where I'm confident we will make you money.
              </p>
            </div>
          </div>
          
          <a
            href="https://wa.me/254114347008?text=Hi%20Ab%20I%20would%20like%20to%20request%20the%20free%20live%20interactive%20homepage%20demo%20for%20my%20business%21"
            className="w-full sm:w-auto px-6 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs uppercase tracking-wider rounded-lg transition-all text-center shrink-0 cursor-pointer shadow-[0_4px_14px_rgba(6,182,212,0.3)] hover:shadow-[0_6px_20px_rgba(6,182,212,0.4)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Claim My Free Demo (WhatsApp) <i className="fa-brands fa-whatsapp text-lg ml-1"></i>
          </a>
        </div>

      </div>
    </section>
  );
}
