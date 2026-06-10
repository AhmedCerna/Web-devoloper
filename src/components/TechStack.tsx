import { Zap, Shield, Smartphone, Award, Cpu } from "lucide-react";

export default function TechStack() {
  const techs = [
    { name: "React & Vite", desc: "Ultra-fast interactive web applications", icon: "fa-brands fa-react", color: "text-blue-400" },
    { name: "Tailwind CSS v4", desc: "Highly structured styling with zero unused CSS rules", icon: "fa-solid fa-wind", color: "text-cyan-400" },
    { name: "Next.js", desc: "SEO-optimized, production-ready server renders", icon: "fa-solid fa-code-branch", color: "text-white" },
    { name: "Shopify", desc: "Robust storefront configurations & checkouts", icon: "fa-brands fa-shopify", color: "text-emerald-400" },
    { name: "WordPress / Webflow", desc: "Easily update paragraphs, prices & media later", icon: "fa-brands fa-wordpress", color: "text-sky-500" },
    { name: "SEO Optimization", desc: "Ensures Google indexes your site in local Nairobi searches", icon: "fa-solid fa-magnifying-glass", color: "text-orange-400" }
  ];

  return (
    <section id="tech-stack" className="py-16 sm:py-20 border-y border-slate-900 bg-[#080c14] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* Left panel statement */}
          <div className="lg:col-span-1">
            <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase">// INFRASTRUCTURE FOCUS</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mt-2 leading-tight">
              Speed is a Feature: Optimized for Safaricom 4G.
            </h2>
            <p className="text-sm text-slate-400 mt-4 leading-relaxed">
              Nearly 85% of Kenyan users browse using mobile packages on 3G or 4G connections. 
              My setups are guaranteed to load in <span className="text-cyan-400 font-semibold underline">under 1.5 seconds</span>, 
              minimizing data bundle consumption and maximizing user engagement.
            </p>
            <div className="flex flex-col gap-3 mt-6">
              <div className="flex items-center gap-3 text-xs font-mono text-slate-300">
                <div className="p-1 rounded bg-[#0b0f19] border border-cyan-500/20 text-cyan-400">
                  <Zap size={14} />
                </div>
                95+ Mobile PageSpeed Performance
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-slate-300">
                <div className="p-1 rounded bg-[#0b0f19] border border-cyan-500/20 text-cyan-400">
                  <Smartphone size={14} />
                </div>
                Fully responsive touch targets (&gt;= 44px)
              </div>
            </div>
          </div>

          {/* Right panel list */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {techs.map((t, idx) => (
              <div 
                key={idx} 
                className="p-5 rounded-lg border border-slate-900/85 bg-[#0b0f19]/80 hover:border-slate-800 hover:bg-[#0c1221] transition-all flex gap-4 items-start group"
              >
                <div className="mt-1 p-2 rounded-md bg-[#0a0d16] border border-slate-800 text-lg flex items-center justify-center text-slate-400 group-hover:bg-cyan-500/10 group-hover:text-cyan-400 group-hover:border-cyan-500/20 transition-all w-10 h-10 shrink-0">
                  <i className={`${t.icon} ${t.color}`}></i>
                </div>
                <div>
                  <h3 className="font-sans font-bold text-sm text-white">{t.name}</h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
