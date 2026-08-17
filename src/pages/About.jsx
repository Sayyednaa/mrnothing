import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Eye, Sliders, Rocket, Mail } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { SectionHeading } from '../components/SectionHeading';

export const About = () => {
  return (
    <div className="space-y-20 pb-20">
      {/* Editorial Header */}
      <section className="bg-navy-dark text-white py-20 bg-angular-motif border-b border-navy-muted relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <img
            src={SITE_CONFIG.logoPath}
            alt={SITE_CONFIG.logoAlt}
            className="h-20 w-auto mx-auto rounded border border-gold-accent/40 bg-navy-dark p-1.5 shadow-2xl"
          />

          <span className="inline-block px-4 py-1 bg-gold-accent/20 border border-gold-accent/40 text-gold-soft text-xs font-extrabold uppercase tracking-widest rounded-full">
            Brand Identity
          </span>

          <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white">
            Built for the <span className="text-gold-gradient">next move.</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 font-normal leading-relaxed max-w-3xl mx-auto">
            Mr.Nothing is a modern lifestyle brand built around a simple idea: useful products should also feel intentional. We curate clothing, electronics, home and kitchen essentials, and everyday upgrades for people who value function, expression, and forward motion.
          </p>
        </div>
      </section>

      {/* Main Philosophy & Brand Core */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-navy-deep dark:text-gold-accent bg-navy-deep/5 dark:bg-white/10 px-3 py-1 rounded-md">
              Our Philosophy
            </span>
            <h2 className="text-3xl font-bold font-display text-navy-dark dark:text-white">
              Intentionality Over Fluff
            </h2>
            <p className="text-sm text-text-secondary dark:text-gray-300 leading-relaxed">
              Modern life is saturated with noise, disposable gear, and overly complicated features. At Mr.Nothing, we believe that true utility comes from purposeful restraint.
            </p>
            <p className="text-sm text-text-secondary dark:text-gray-300 leading-relaxed">
              Every garment, device, and daily accessory in our collection is evaluated based on whether it solves a real friction point in your daily rhythm while maintaining a sharp, confident visual footprint.
            </p>
          </div>

          <div className="p-8 bg-white dark:bg-navy-dark rounded-3xl border border-gray-200/80 dark:border-navy-muted shadow-lg space-y-4">
            <h3 className="text-xl font-bold font-display text-navy-dark dark:text-white">
              What “Ultimate Action” Means
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              “Ultimate Action” is our commitment to momentum. It represents gear built for people who don't just plan, but execute—whether that's stepping into a boardroom, packing for a weekend trip, or setting up an efficient workspace.
            </p>
            <div className="pt-2 border-t border-gray-100 dark:border-navy-muted flex items-center gap-3 text-xs font-bold text-navy-deep dark:text-gold-soft">
              <Zap className="w-4 h-4 text-gold-accent" />
              Action-ready gear without unnecessary compromise
            </div>
          </div>
        </div>

        {/* 3-Step Visual Timeline */}
        <div className="pt-8">
          <SectionHeading
            badge="The Process"
            title="How We Work"
            subtitle="Our three-step methodology ensures every showcase product meets our baseline for purpose and design."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {/* Step 1 */}
            <div className="bg-white dark:bg-navy-dark p-8 rounded-2xl border border-gray-200 dark:border-navy-muted shadow-sm relative space-y-4 text-center">
              <div className="w-14 h-14 bg-navy-deep dark:bg-gold-accent text-gold-accent dark:text-navy-dark rounded-2xl flex items-center justify-center font-bold text-xl mx-auto shadow-md">
                <Eye className="w-7 h-7" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold-dark dark:text-gold-soft">
                01. Observe
              </span>
              <h4 className="text-xl font-bold font-display text-navy-dark dark:text-white">Study Daily Motion</h4>
              <p className="text-xs text-text-secondary dark:text-gray-300 leading-relaxed">
                We analyze everyday routines to pinpoint friction in carry gear, apparel durability, acoustic quality, and home organization.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white dark:bg-navy-dark p-8 rounded-2xl border border-gray-200 dark:border-navy-muted shadow-sm relative space-y-4 text-center">
              <div className="w-14 h-14 bg-navy-deep dark:bg-gold-accent text-gold-accent dark:text-navy-dark rounded-2xl flex items-center justify-center font-bold text-xl mx-auto shadow-md">
                <Sliders className="w-7 h-7" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold-dark dark:text-gold-soft">
                02. Curate
              </span>
              <h4 className="text-xl font-bold font-display text-navy-dark dark:text-white">Select Purposeful Designs</h4>
              <p className="text-xs text-text-secondary dark:text-gray-300 leading-relaxed">
                We eliminate redundant options and curate only products that meet strict functional and aesthetic benchmarks.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white dark:bg-navy-dark p-8 rounded-2xl border border-gray-200 dark:border-navy-muted shadow-sm relative space-y-4 text-center">
              <div className="w-14 h-14 bg-navy-deep dark:bg-gold-accent text-gold-accent dark:text-navy-dark rounded-2xl flex items-center justify-center font-bold text-xl mx-auto shadow-md">
                <Rocket className="w-7 h-7" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold-dark dark:text-gold-soft">
                03. Move
              </span>
              <h4 className="text-xl font-bold font-display text-navy-dark dark:text-white">Deploy For Action</h4>
              <p className="text-xs text-text-secondary dark:text-gray-300 leading-relaxed">
                Presenting intuitive, high-performance essentials ready to support your daily objectives and forward motion.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          <div className="p-6 bg-surface-offwhite dark:bg-navy-surface rounded-2xl border border-gray-200 dark:border-navy-muted space-y-3">
            <h3 className="font-bold text-navy-dark dark:text-white text-lg font-display">What We Curate</h3>
            <p className="text-xs text-text-secondary dark:text-gray-300 leading-relaxed">
              From weather-resistant overshirts and heavy GSM utility tees to active noise-cancelling acoustics, precision pour-over carafes, and magnetic power banks.
            </p>
          </div>

          <div className="p-6 bg-surface-offwhite dark:bg-navy-surface rounded-2xl border border-gray-200 dark:border-navy-muted space-y-3">
            <h3 className="font-bold text-navy-dark dark:text-white text-lg font-display">Our Future</h3>
            <p className="text-xs text-text-secondary dark:text-gray-300 leading-relaxed">
              Currently operating as a digital showcase platform. As our product line matures, we are laying the infrastructure for direct community engagement and full release. Contact: {SITE_CONFIG.contact.email}
            </p>
          </div>

          <div className="p-6 bg-surface-offwhite dark:bg-navy-surface rounded-2xl border border-gray-200 dark:border-navy-muted space-y-3">
            <h3 className="font-bold text-navy-dark dark:text-white text-lg font-display">Why Mr.Nothing</h3>
            <p className="text-xs text-text-secondary dark:text-gray-300 leading-relaxed">
              Because "Nothing" signifies zero pretense, zero distraction, and absolute focus on what truly matters in daily life.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-10 bg-navy-dark text-white rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 border border-gold-accent/30 shadow-xl">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold font-display">Ready to explore the catalogue?</h3>
            <p className="text-xs text-gray-300">Discover all 16 sample products in our showcase storefront. Support: {SITE_CONFIG.contact.email}</p>
          </div>
          <Link
            to="/shop"
            className="px-8 py-3.5 bg-gold-accent hover:bg-gold-dark text-navy-dark font-extrabold rounded-xl text-sm transition-all shadow-md shrink-0 flex items-center gap-2"
          >
            Explore Collection
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
