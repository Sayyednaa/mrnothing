import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Shield, Zap, Award, Clock, Mail, CheckCircle, Compass } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';
import { SectionHeading } from '../components/SectionHeading';
import { CategoryCard } from '../components/CategoryCard';
import { ProductCard } from '../components/ProductCard';
import { useToast } from '../context/ToastContext';

export const Home = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { addToast } = useToast();

  const featuredProducts = PRODUCTS.filter((p) => p.featured).slice(0, 8);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      addToast("Thanks — you're on the showcase list.", "success");
    }
  };

  return (
    <div className="space-y-20 pb-20">
      {/* A. HERO SECTION */}
      <section className="relative overflow-hidden bg-navy-dark text-white pt-12 pb-24 md:pt-20 md:pb-32 bg-angular-motif border-b border-navy-muted">
        {/* Subtle decorative glow overlays */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-navy-light/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-gold-accent/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content (7 cols) */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-gold-accent/30 text-gold-soft text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-4 h-4 text-gold-accent" />
                Product Showcase Platform
              </div>

              <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight leading-none text-white">
                Make Every <br />
                <span className="text-gold-gradient">Move Count.</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Explore a curated world of clothing, electronics, home essentials, and everyday upgrades built for people who act.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/shop"
                  className="w-full sm:w-auto px-8 py-4 bg-gold-accent hover:bg-gold-dark text-navy-dark font-extrabold text-base rounded-xl transition-all shadow-gold-glow flex items-center justify-center gap-3 border border-gold-light/40"
                >
                  Explore Collection
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="w-full sm:w-auto px-8 py-4 bg-navy-deep/80 hover:bg-navy-deep text-white font-bold text-base rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2"
                >
                  Discover Mr.Nothing
                </Link>
              </div>

              <div className="pt-6 flex items-center justify-center lg:justify-start gap-8 text-xs text-gray-400 font-semibold uppercase tracking-wider">
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-gold-accent" /> Quality First
                </span>
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-gold-accent" /> Action Ready
                </span>
                <span className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-gold-accent" /> Showcase Mode
                </span>
              </div>
            </div>

            {/* Right Hero Visual Feature (5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden border-2 border-gold-accent/40 shadow-navy-glow bg-gradient-to-br from-navy-deep to-navy-dark p-8 flex flex-col justify-between group">
                <div className="flex justify-between items-start">
                  <img
                    src={SITE_CONFIG.logoPath}
                    alt={SITE_CONFIG.logoAlt}
                    className="h-14 w-auto rounded border border-gold-accent/30 bg-navy-dark p-1"
                  />
                  <span className="px-3 py-1 bg-gold-accent/20 text-gold-soft text-xs font-bold rounded-full border border-gold-accent/40 uppercase">
                    Ultimate Action
                  </span>
                </div>

                <div className="space-y-3 z-10">
                  <div className="text-3xl font-black font-display text-white tracking-tight">
                    Mr.Nothing
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Designed around purpose, utility, and refined aesthetics. Discover products built for intentional living. Support: {SITE_CONFIG.contact.email}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gold-soft font-semibold">
                  <span>Curated Catalogue 2026</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B. CATEGORY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Curated Domains"
          title="Explore By Category"
          subtitle="Discover specialized essentials across four core categories engineered for modern living."
          action={
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-sm font-bold text-navy-deep dark:text-gold-accent hover:underline transition-colors"
            >
              View all products
              <ArrowRight className="w-4 h-4" />
            </Link>
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      {/* C. FEATURED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Selected Hardware"
          title="Featured Showcase Items"
          subtitle="Explore highlighted products built for everyday performance and minimal visual clutter."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 px-8 py-4 bg-navy-deep dark:bg-gold-accent hover:bg-navy-dark dark:hover:bg-gold-dark text-white dark:text-navy-dark text-sm font-bold rounded-xl shadow-lg transition-all border border-gold-accent/30"
          >
            Explore Full Collection (16 Products)
            <ArrowRight className="w-4 h-4 text-gold-accent dark:text-navy-dark" />
          </Link>
        </div>
      </section>

      {/* D. BRAND STATEMENT SECTION */}
      <section className="bg-navy-dark text-white py-20 bg-angular-motif border-y border-gold-accent/20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <span className="inline-block px-4 py-1 bg-gold-accent/10 border border-gold-accent/30 text-gold-soft text-xs font-extrabold uppercase tracking-widest rounded-full">
            Brand Manifesto
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
            “Nothing ordinary. <span className="text-gold-gradient">Everything intentional.</span>”
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal max-w-2xl mx-auto">
            Mr.Nothing is a curated lifestyle platform focused on useful, expressive, and action-ready products. We strip away standard fluff to bring you gear that performs when you make your move.
          </p>
          <div className="pt-4">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-gold-soft border border-gold-accent/40 rounded-xl text-sm font-bold transition-all"
            >
              Read Our Full Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* E. TRUST / VALUE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-8 bg-white dark:bg-navy-dark rounded-2xl border border-gray-100 dark:border-navy-muted shadow-sm space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-navy-deep/5 dark:bg-white/10 text-navy-deep dark:text-gold-accent rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-gold-accent" />
            </div>
            <h3 className="font-display font-bold text-lg text-navy-dark dark:text-white">Curated for everyday action</h3>
            <p className="text-xs text-text-secondary dark:text-gray-300 leading-relaxed">
              Every item is selected specifically to enhance daily motion, utility, and modern lifestyles.
            </p>
          </div>

          <div className="p-8 bg-white dark:bg-navy-dark rounded-2xl border border-gray-100 dark:border-navy-muted shadow-sm space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-navy-deep/5 dark:bg-white/10 text-navy-deep dark:text-gold-accent rounded-xl flex items-center justify-center">
              <Compass className="w-6 h-6 text-gold-accent" />
            </div>
            <h3 className="font-display font-bold text-lg text-navy-dark dark:text-white">Designed around utility</h3>
            <p className="text-xs text-text-secondary dark:text-gray-300 leading-relaxed">
              Clean form meets practical engineering without unnecessary weight or decorative distraction.
            </p>
          </div>

          <div className="p-8 bg-white dark:bg-navy-dark rounded-2xl border border-gray-100 dark:border-navy-muted shadow-sm space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-navy-deep/5 dark:bg-white/10 text-navy-deep dark:text-gold-accent rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-gold-accent" />
            </div>
            <h3 className="font-display font-bold text-lg text-navy-dark dark:text-white">Quality-first selection</h3>
            <p className="text-xs text-text-secondary dark:text-gray-300 leading-relaxed">
              High-grade materials, durable textiles, and precision mechanics built for longevity.
            </p>
          </div>

          <div className="p-8 bg-white dark:bg-navy-dark rounded-2xl border border-gray-100 dark:border-navy-muted shadow-sm space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-navy-deep/5 dark:bg-white/10 text-navy-deep dark:text-gold-accent rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-gold-accent" />
            </div>
            <h3 className="font-display font-bold text-lg text-navy-dark dark:text-white">Showcase now, shop soon</h3>
            <p className="text-xs text-text-secondary dark:text-gray-300 leading-relaxed">
              Interactive product preview for discovery. Full ordering experience launching in upcoming release.
            </p>
          </div>
        </div>
      </section>

      {/* F. NEWSLETTER-STYLE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-navy-deep to-navy-dark text-white rounded-3xl p-8 sm:p-14 border border-gold-accent/30 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="w-12 h-12 bg-gold-accent/20 rounded-2xl flex items-center justify-center mx-auto text-gold-soft border border-gold-accent/30">
              <Mail className="w-6 h-6" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
              Stay in the action.
            </h2>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Be the first to know when new showcase collections drop and when full ordering features go live. Direct email: {SITE_CONFIG.contact.email}
            </p>

            {subscribed ? (
              <div className="p-4 bg-white/10 border border-gold-accent/40 rounded-2xl text-gold-soft text-sm font-semibold flex items-center justify-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold-accent" />
                Thanks — you’re on the showcase list.
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl text-sm text-white placeholder-gray-400 focus:outline-none focus:border-gold-accent"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-gold-accent hover:bg-gold-dark text-navy-dark font-bold text-sm rounded-xl transition-all shadow-md shrink-0"
                >
                  Notify Me
                </button>
              </form>
            )}

            <p className="text-xs text-gray-400 italic">
              * Note: This demo form does not send emails yet. Contact support at {SITE_CONFIG.contact.email}.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
