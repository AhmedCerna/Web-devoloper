export default function Footer() {
  const currentYear = 2025; // Set exactly as specified in the prompt: © 2025 Ab

  const scrollByName = (id: string) => {
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
    <footer className="bg-[#05070c] border-t border-slate-950 pt-16 pb-24 md:pb-12 text-slate-400 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Upper Column Footer layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-slate-900/40">
          
          {/* Column 1 - Brand description */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <button
              onClick={() => scrollByName("hero")}
              className="flex items-center gap-1.5 focus:outline-none group self-start cursor-pointer text-left"
            >
              <div className="bg-cyan-500/10 text-cyan-400 font-mono text-xl font-bold px-3 py-1 rounded-md border border-cyan-500/20 group-hover:border-cyan-500/30 transition-colors">
                &lt;Ab /&gt;
              </div>
              <span className="font-display font-bold text-lg text-white tracking-tight">
                Freelance Web Developer
              </span>
            </button>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mt-2">
              High-converting landing pages, commercial storefronts, and performance audits 
              engineered specifically to increase engagement. Optimized for local Safaricom speeds.
            </p>
          </div>

          <div className="md:col-span-1 hidden md:block" />

          {/* Column 2 - Links */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="font-display font-medium text-xs text-white uppercase tracking-wider font-semibold">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2 text-xs">
              <li>
                <button onClick={() => scrollByName("services")} className="hover:text-cyan-400 transition-colors cursor-pointer text-left py-0.5">
                  About Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollByName("portfolio")} className="hover:text-cyan-400 transition-colors cursor-pointer text-left py-0.5">
                  Selected Work
                </button>
              </li>
              <li>
                <button onClick={() => scrollByName("process")} className="hover:text-cyan-400 transition-colors cursor-pointer text-left py-0.5">
                  Strategy (Demo)
                </button>
              </li>
              <li>
                <button onClick={() => scrollByName("pricing")} className="hover:text-cyan-400 transition-colors cursor-pointer text-left py-0.5">
                  Resolute Pricing
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="font-display font-medium text-xs text-white uppercase tracking-wider font-semibold">
              Services
            </h4>
            <ul className="flex flex-col gap-2 text-xs">
              <li>
                <button onClick={() => scrollByName("services")} className="hover:text-cyan-400 transition-colors cursor-pointer text-left py-0.5">
                  Landing Pages
                </button>
              </li>
              <li>
                <button onClick={() => scrollByName("services")} className="hover:text-cyan-400 transition-colors cursor-pointer text-left py-0.5">
                  Corporate Sites
                </button>
              </li>
              <li>
                <button onClick={() => scrollByName("services")} className="hover:text-cyan-400 transition-colors cursor-pointer text-left py-0.5">
                  Performance Auditing
                </button>
              </li>
              <li>
                <button onClick={() => scrollByName("services")} className="hover:text-cyan-400 transition-colors cursor-pointer text-left py-0.5">
                  WhatsApp Integrations
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4 - Direct Contact info details */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="font-display font-medium text-xs text-white uppercase tracking-wider font-semibold">
              Contact
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li>
                <a href="mailto:arwobashir@gmail.com" className="hover:text-cyan-400 transition-colors">
                  arwobashir@gmail.com
                </a>
              </li>
              <li className="text-slate-500">
                HQ: Nairobi, Kenya
              </li>
              
              {/* Social links rows */}
              <li className="pt-2 flex items-center gap-3.5">
                <a
                  href="https://github.com/Bashir-A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 text-base transition-colors"
                  aria-label="GitHub Account"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://linkedin.com/in/bashir-a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 text-base transition-colors"
                  aria-label="LinkedIn Account"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href="https://instagram.com/bashir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 text-base transition-colors"
                  aria-label="Instagram Account"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://wa.me/254114347008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-[#25D366] text-base transition-colors"
                  aria-label="WhatsApp Account"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower row & copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <div className="text-center sm:text-left">
            © {currentYear} Ab | Freelance Web Developer | Nairobi, Kenya
          </div>
          
          {/* Easter Egg required text */}
          <div className="text-cyan-500/50 hover:text-cyan-400 transition-colors select-none text-center sm:text-right">
            // this site was built by Ab — yours can be next.
          </div>
        </div>

      </div>
    </footer>
  );
}
