import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Zap, 
  Award, 
  Clock, 
  Check, 
  Mail, 
  CheckCircle2, 
  Compass, 
  ShoppingBag,
  Sliders
} from 'lucide-react';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { BRAND } from '../data/constants';
import ProductGrid from '../components/ProductGrid';
import CategoryCard from '../components/CategoryCard';
import SectionHeading from '../components/SectionHeading';

export default function Home() {
  const { wishlist = [], toggleWishlist, triggerShowcaseModal } = useOutletContext() || {};
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribedToast, setSubscribedToast] = useState(false);

  // Filter 6-8 featured items for Home showcase grid
  const featuredProducts = products.filter(p => p.featured).slice(0, 8);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribedToast(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribedToast(false), 5000);
    }
  };

  const trustCards = [
    {
      icon: Zap,
      title: "Curated for Everyday Action",
      desc: "Every item in our collection is selected to remove friction from your daily workflow and active lifestyle."
    },
    {
      icon: Layers,
      title: "Designed Around Utility",
      desc: "Architectural lines, ergonomic materials, and tactical features engineered for practical everyday performance."
    },
    {
      icon: Award,
      title: "Quality-First Selection",
      desc: "Strict material standards, heavy-gauge fabrics, anodized alloys, and zero fluff."
    },
    {
      icon: Clock,
      title: "Showcase Now, Shop Soon",
      desc: "Explore details, bookmark items on your wishlist, and get notified when full commerce opens."
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#031C44] via-[#062B67] to-[#031C44] text-white pt-12 pb-24 lg:pt-20 lg:pb-32 border-b border-[#B28A43]/20">
        
        {/* Geometric Motif Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#B28A43_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        
        {/* Soft Glow Radial Orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#B28A43]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#062B67] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-white/10 border border-[#B28A43]/40 px-4 py-1.5 rounded-full text-xs font-semibold text-[#D2B36B] backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-[#B28A43]" />
                <span>OFFICIAL BRAND SHOWCASE — ULTIMATE ACTION</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight leading-tight">
                Make Every Move Count.
              </h1>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Explore a curated world of clothing, electronics, home essentials, and everyday upgrades built for people who act.
              </p>

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/shop"
                  className="w-full sm:w-auto px-8 py-4 bg-[#B28A43] hover:bg-[#D2B36B] text-white hover:text-[#031C44] rounded-xl font-bold text-sm shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/about"
                  className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-semibold text-sm backdrop-blur-md transition-all flex items-center justify-center space-x-2"
                >
                  <Compass className="w-4 h-4 text-[#D2B36B]" />
                  <span>Discover Mr.Nothing</span>
                </Link>
              </div>

              {/* Showcase Trust Pills */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-gray-300">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#D2B36B]" />
                  <span>Curated Catalogue</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#D2B36B]" />
                  <span>Full Tech Specs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#D2B36B]" />
                  <span>Showcase Platform</span>
                </div>
              </div>
            </div>

            {/* Hero Right Visual Element */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-md w-full">
                {/* Outer Glass Card Accent */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#B28A43] via-[#D2B36B] to-[#062B67] opacity-40 blur-lg group-hover:opacity-70 transition duration-1000" />
                
                <div className="relative rounded-2xl bg-[#031C44] border border-[#B28A43]/40 p-8 text-center space-y-6 shadow-2xl overflow-hidden">
                  <div className="w-32 h-32 mx-auto bg-[#062B67] rounded-2xl border-2 border-[#B28A43]/50 p-2 shadow-xl flex items-center justify-center transform group-hover:scale-105 transition-transform">
                    <img 
                      src={BRAND.logoPath} 
                      alt={BRAND.logoAlt} 
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>

                  <div>
                    <h3 className="text-2xl font-extrabold text-white font-heading tracking-wide">
                      MR.NOTHING
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-[#D2B36B] font-semibold mt-1">
                      {BRAND.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed italic border-t border-white/10 pt-4">
                    "Nothing ordinary. Everything intentional."
                  </p>

                  <div className="bg-[#062B67]/80 rounded-xl p-3 border border-[#B28A43]/30 text-xs text-gray-200 font-mono">
                    SHOWCASE ACTIVE &bull; 16 CURATED ESSENTIALS
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Category Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          badge="Curated Ecosystem"
          title="Browse by Category"
          subtitle="Explore our 4 core pillars designed for modern utility, physical action, and focused workflow."
          linkUrl="/shop"
          linkText="View All Collections"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* 3. Featured Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          badge="Featured Releases"
          title="Handpicked Everyday Upgrades"
          subtitle="Discover our most requested items across technical apparel, audio gear, and minimalist essentials."
          linkUrl="/shop"
          linkText="Explore Full Shop"
        />

        <ProductGrid 
          products={featuredProducts} 
          wishlist={wishlist}
          onToggleWishlist={toggleWishlist}
          onTriggerShowcaseModal={triggerShowcaseModal}
          columns="4"
        />
      </section>

      {/* 4. Brand Statement Banner */}
      <section className="bg-gradient-to-r from-[#031C44] via-[#062B67] to-[#031C44] text-white py-16 sm:py-20 border-y border-[#B28A43]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#B28A43_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <span className="text-xs uppercase tracking-widest text-[#D2B36B] font-bold">
            The Core Mantra
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading leading-tight tracking-tight text-white">
            "Nothing ordinary. Everything intentional."
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We build for individuals who refuse clutter and embrace decisive execution. Our products represent the bridge between uncompromising aesthetic minimal design and peak daily utility.
          </p>
          <div className="pt-2">
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 bg-[#B28A43] hover:bg-[#D2B36B] text-white hover:text-[#031C44] px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
            >
              <span>Read Our Philosophy</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Trust / Value Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          badge="Why Mr.Nothing"
          title="Engineered for Purposeful Living"
          subtitle="Four core commitments behind every item featured in our product ecosystem."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-[#062B67]/10 text-[#062B67] rounded-xl flex items-center justify-center mb-4 border border-[#B28A43]/20">
                    <Icon className="w-6 h-6 text-[#B28A43]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#031C44] font-heading">
                    {card.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mt-2">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. Newsletter Visual Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#031C44] rounded-3xl border border-[#B28A43]/40 p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#B28A43]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mx-auto text-center space-y-6 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full text-xs text-[#D2B36B] font-semibold">
              <Mail className="w-3.5 h-3.5" />
              <span>Priority Drop List</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
              Stay in the Action.
            </h2>

            <p className="text-sm text-gray-300 leading-relaxed">
              Be the first to know when new showcase drops launch or when commercial pre-orders open for your wishlisted items.
            </p>

            {subscribedToast ? (
              <div className="bg-emerald-950/80 border border-emerald-500/50 p-4 rounded-xl flex items-center justify-center space-x-3 text-emerald-200 animate-in fade-in duration-300">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                <span className="text-sm font-medium">Thanks — you're on the showcase list.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 bg-[#062B67] border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#B28A43]"
                />
                <button
                  type="submit"
                  className="bg-[#B28A43] hover:bg-[#D2B36B] text-white hover:text-[#031C44] px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md shrink-0"
                >
                  Notify Me
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
