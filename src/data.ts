export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge?: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tech: string[];
  image: string;
  stats: string;
  link?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  delivery: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const SERVICES: Service[] = [
  {
    id: "landing-page",
    title: "High-Converting Landing Pages",
    description: "Designed specifically to turn visitors into paying customers. Perfect for ads, product launches, or service campaigns in Kenya.",
    icon: "target",
    badge: "Popular",
    features: [
      "Custom UI Design & Copywriting",
      "Safaricom 4G Speed-Optimized",
      "Mobile-First Responsive Layout",
      "Contact Form & WhatsApp Integration",
      "Free Analytics Setup"
    ]
  },
  {
    id: "business-website",
    title: "Complete Business Website",
    description: "A full-scale, professional web presence to separate your brand from the competition and capture leads passively.",
    icon: "globe",
    features: [
      "Up to 5 Pages (Home, About, Services, Work, Contact)",
      "Interactive Project Viewers / Catalog",
      "SEO-Ready Architecture & Keyword Setup",
      "Easy Content Manager (Wix, WordPress, or Custom)",
      "Premium Design System"
    ]
  },
  {
    id: "site-optimization",
    title: "Performance Boost & Site Fixes",
    description: "Is your current site slow, buggy, or failing on mobile? I can audit, redesign, and rebuild it for maximum speed.",
    icon: "zap",
    features: [
      "PageSpeed Score Increase (to 90+)",
      "Broken Layout & Responsive Bug Fixes",
      "Checkout Flow Simplification",
      "WhatsApp & Direct Booking Setup",
      "Full Codebase Cleanup"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Kilimani Luxe Rentals",
    description: "A high-end real estate portal optimized for mobile search. Features fast, lightweight image loaders and direct-to-WhatsApp booking.",
    category: "Real Estate",
    tech: ["React", "Tailwind CSS", "Direct-to-WhatsApp"],
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80",
    stats: "🚀 120+ monthly direct WhatsApp leads booked",
    link: "#"
  },
  {
    id: "2",
    title: "Zuri Organics E-Commerce",
    description: "A lightning-fast health & beauty store optimized to load instantly even on standard 3G/4G connections across Kenya.",
    category: "E-Commerce",
    tech: ["Shopify", "Tailwind CSS", "Instant Search"],
    image: "https://images.unsplash.com/photo-1608248597481-496100c8c836?auto=format&fit=crop&w=600&q=80",
    stats: "⚡ 1.2s loading speed, 4.2% purchase conversion rate",
    link: "#"
  },
  {
    id: "3",
    title: "Nairobi Tech Hub",
    description: "High-impact tech consulting landing page. Clean modern minimalist typography paired with interactive bento card features.",
    category: "Startup / Tech",
    tech: ["Next.js", "Motion CSS", "Framer"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
    stats: "📈 Over 250% increase in lead submissions within month 1",
    link: "#"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Rapid Landing Page",
    price: "KSh 15,000",
    delivery: "48-Hour Delivery Guaranteed",
    description: "Perfect for startups, independent agents, or single-service campaigns seeking immediate online leads.",
    features: [
      "1 Single-View Conversion Page",
      "Stately Typography & Icons (Lucide/FontAwesome)",
      "Instant WhatsApp floating button setup",
      "Mobile-optimized (loads on slow data)",
      "Contact and Lead Capture Form",
      "Free 1-Hour Training Loom walkthrough"
    ]
  },
  {
    id: "growth",
    name: "Business Growth Package",
    price: "KSh 35,000",
    delivery: "4 Days Delivery",
    isPopular: true,
    description: "A complete professional presence for growing companies that need credibility, authority, and organic traffic.",
    features: [
      "Up to 5 Fully Loaded Pages",
      "Interactive Portfolio/Services Showcase",
      "Advanced Local SEO & GMB consultation",
      "Custom animations (motion framework)",
      "High-speed CDN hosting setup",
      "Social proof & google review widget styling",
      "1 Month of dedicated technical support"
    ]
  },
  {
    id: "ecommerce",
    name: "E-Commerce Launcher",
    price: "KSh 55,000",
    delivery: "7 Days Delivery",
    description: "A complete, inventory-ready store equipped with frictionless shopping flows and direct checkout capabilities.",
    features: [
      "Up to 30 custom inventory products",
      "Integrated Payment Link solutions",
      "Lipa Na M-Pesa direct trigger options",
      "Automatic customer purchase alerts on WhatsApp",
      "Advanced Analytics & Purchase Funnel tracking",
      "Speed score audited for quick mobile usage",
      "Lifetime support & video management training"
    ]
  }
];

export const FAQS: FAQ[] = [
  {
    id: "pricing",
    question: "How do you deliver a website in 48 hours?",
    answer: "No time wasting, no endless bureaucracy. I use a carefully developed visual asset kit, state-of-the-art styling systems (Tailwind v4), and focused client consultation. If any delays happen on my end, you get Ksh 5,000 off your final bill."
  },
  {
    id: "payment",
    question: "Do I have to pay upfront before seeing any work?",
    answer: "Absolutely not! I believe in removing objection entirely. I will build an interactive, live visual mock of your homepage first. If you don't love the layout and structure, you pay/sign absolutely nothing. Zero risk for you."
  },
  {
    id: "m-pesa",
    question: "Is M-Pesa integrated directly into these applications?",
    answer: "Yes, I integrate seamless payment triggers (e.g., direct Lipa na M-Pesa prompts or custom payment provider buttons like Pesapal, DPO, or simple checkout links) to make payment extremely easy for your Kenyan customers."
  },
  {
    id: "speed",
    question: "Why do you emphasize 'Safaricom 4G Speed Optimization'?",
    answer: "In Kenya, over 80% of your visitors are on mobile, and many face fluctuating connection speeds or limited bundle sizes. If your site takes 5 seconds to load, they will press back. I optimize images, compress script execution paths, and implement caching so your site loads in under 1.5 seconds."
  }
];
