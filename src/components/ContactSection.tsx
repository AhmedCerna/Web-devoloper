import React, { useState } from "react";
import { Send, Phone, MapPin, Mail, Clock, CheckCircle2, MessageSquare } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    needs: "New Website",
    budget: "Under 9K",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Your Name is required.";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required.";
    } else {
      // Basic Kenya phone check or length
      const cleanPhone = formData.phone.replace(/\s+/g, "");
      if (cleanPhone.length < 8) {
        newErrors.phone = "Kindly enter a valid phone number.";
      }
    }
    
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate sending with a short delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Clean form on success
      setFormData({
        name: "",
        businessName: "",
        phone: "",
        email: "",
        needs: "New Website",
        budget: "Under 9K",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative bg-[#080c14] border-t border-slate-900 overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/10 left-1/10 w-80 h-80 rounded-full bg-cyan-500/3 blur-3xl z-0"></div>
      <div className="absolute bottom-1/10 right-1/10 w-96 h-96 rounded-full bg-emerald-500/3 blur-3xl z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-left mb-16">
          <span className="font-mono text-cyan-400 text-sm tracking-widest uppercase">// LET'S BUILD SOMETHING</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3 tracking-tight">
            Initiate Your Conversion Machine
          </h2>
          <p className="text-sm text-slate-400 mt-3 max-w-xl leading-relaxed">
            Fill out the form below to receive your free interactive web prototype demo within 24 hours. 
            Zero upfront risk, zero commitments.
          </p>
        </div>

        {/* Form + Contacts Panel Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left panel = Contact Form */}
          <div className="lg:col-span-7 bg-slate-900/50 border border-slate-800 rounded-xl p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.3)] flex flex-col justify-between">
            {isSuccess ? (
              <div className="py-12 px-6 text-center flex flex-col items-center justify-center my-auto">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 animate-bounce">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-display font-bold text-white text-xl sm:text-2xl mt-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-4 leading-relaxed max-w-sm">
                  Thank you for reaching out! Ab has received your briefing details. 
                  Expect a demo setup, custom plan, or direct text back on WhatsApp within <span className="text-cyan-400 underline font-mono">1 Hour</span>.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 px-6 py-2.5 bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 font-mono rounded-lg transition-all hover:bg-slate-800 cursor-pointer"
                >
                  // SEND ANOTHER BRIEF
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Single Row: Name & Business */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Your Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex justify-between">
                      <span>Your Name *</span>
                      {errors.name && <span className="text-red-400 lowercase italic normal-case font-sans font-normal">{errors.name}</span>}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`bg-slate-950 border rounded p-2 text-sm text-white focus:border-cyan-400 outline-none transition-colors ${
                        errors.name ? "border-red-500/50" : "border-slate-700"
                      }`}
                    />
                  </div>

                  {/* Business Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="businessName" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="bg-slate-950 border border-slate-700 rounded p-2 text-sm text-white focus:border-cyan-400 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Single Row: Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone Number */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex justify-between">
                      <span>Phone Number *</span>
                      {errors.phone && <span className="text-red-400 lowercase italic font-sans font-normal">{errors.phone}</span>}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+254 7..."
                      className={`bg-slate-950 border rounded p-2 text-sm text-white focus:border-cyan-400 outline-none transition-colors ${
                        errors.phone ? "border-red-500/50" : "border-slate-700"
                      }`}
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex justify-between">
                      <span>Email</span>
                      {errors.email && <span className="text-red-400 lowercase italic font-sans font-normal">{errors.email}</span>}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`bg-slate-950 border rounded p-2 text-sm text-white focus:border-cyan-400 outline-none transition-colors ${
                        errors.email ? "border-red-500/50" : "border-slate-700"
                      }`}
                    />
                  </div>
                </div>

                {/* Single Row: Dropdowns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* What do you need */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="needs" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      What do you need?
                    </label>
                    <select
                      id="needs"
                      name="needs"
                      value={formData.needs}
                      onChange={handleChange}
                      className="bg-slate-950 border border-slate-700 rounded p-2 text-sm text-white focus:border-cyan-400 outline-none appearance-none cursor-pointer"
                      style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>")`, backgroundPosition: 'right 12px center', backgroundRepeat: 'no-repeat' }}
                    >
                      <option value="New Website">New Website</option>
                      <option value="Landing Page">Landing Page</option>
                      <option value="Fix My Site">Fix My Site</option>
                      <option value="Not Sure">Not Sure</option>
                    </select>
                  </div>

                  {/* Budget Dropdown */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="budget" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Budget range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="bg-slate-950 border border-slate-700 rounded p-2 text-sm text-white focus:border-cyan-400 outline-none appearance-none cursor-pointer"
                      style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>")`, backgroundPosition: 'right 12px center', backgroundRepeat: 'no-repeat' }}
                    >
                      <option value="Under 9K">Under 9K</option>
                      <option value="10K–20K">10K–20K</option>
                      <option value="20K–30K">20K–30K</option>
                      <option value="30K+">30K+</option>
                    </select>
                  </div>
                </div>

                {/* Tell me about your business */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Tell me about your business
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Describe your project goals..."
                    className="bg-slate-950 border border-slate-700 rounded p-2 text-sm text-white focus:border-cyan-400 outline-none resize-none leading-relaxed"
                  />
                </div>

                {/* Full-width Cyan Send button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3.5 rounded uppercase tracking-widest transition-colors mt-2 text-xs flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_16px_rgba(6,182,212,0.25)] hover:shadow-[0_6px_22px_rgba(6,182,212,0.4)] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                      Processing Brief...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={14} />
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

          {/* Right panel = Direct contact options */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Preferred directly card */}
            <div className="bg-slate-900/30 p-6 rounded-xl border border-dashed border-slate-700 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Prefer to talk directly?</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-5">
                  Skip the brief form and land directly inside Ab's inbox. We can schedule a video, audio, or 
                  rapid voice note chat right away.
                </p>

                {/* Large WhatsApp CTA */}
                <a
                  href="https://wa.me/254114347008?text=Hi%20Ab%20I%27m%20visiting%20from%20your%20portfolio%20and%20want%20to%20review%20a%20project%21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-6 rounded-lg transition-all mb-4 cursor-pointer"
                >
                  <i className="fa-brands fa-whatsapp text-2xl"></i>
                  Chat on WhatsApp
                </a>
              </div>

              {/* Response time note */}
              <p className="text-xs text-emerald-400 flex items-center gap-2 font-mono">
                <span className="animate-pulse text-lg">⚡</span> I typically reply within 1 hour
              </p>
            </div>

            {/* Direct details grid */}
            <div className="grid grid-cols-2 gap-4 px-2 py-4 border border-slate-800/60 bg-[#0F172A]/40 rounded-xl">
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter">Email</p>
                  <a href="mailto:arwobashir@gmail.com" className="text-slate-200 text-sm hover:text-cyan-400 transition-colors break-all">
                    arwobashir@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter">Location</p>
                  <p className="text-slate-200 text-sm">Nairobi, Kenya</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter">Availability</p>
                  <p className="text-slate-200 text-sm">Mon–Sat, 8am–9pm</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter">Status</p>
                  <p className="text-emerald-400 text-sm flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span> Available for work
                  </p>
                </div>
              </div>
            </div>

            {/* Citation box from template */}
            <div className="bg-cyan-500/10 border border-cyan-500/20 p-4 rounded-lg">
              <p className="text-xs italic text-cyan-300">"Success is the result of preparation, hard work, and learning from failure."</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
