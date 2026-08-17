import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Instagram, Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { CATEGORIES } from '../data/categories';

export const Footer = () => {
  return (
    <footer className="bg-navy-dark text-white border-t border-navy-muted mt-auto">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Info (2 cols wide on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src={SITE_CONFIG.logoPath}
                alt={SITE_CONFIG.logoAlt}
                className="h-12 w-auto rounded border border-gold-accent/40"
              />
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl tracking-tight text-white">
                  Mr.Nothing
                </span>
                <span className="text-xs font-bold tracking-widest text-gold-accent uppercase">
                  {SITE_CONFIG.tagline}
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-300 max-w-sm leading-relaxed">
              A curated lifestyle platform focused on useful, expressive, and action-ready products built for people who move forward.
            </p>

            <div className="flex items-center gap-2 text-xs text-gold-soft pt-1">
              <Mail className="w-4 h-4 text-gold-accent" />
              <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:underline font-semibold">
                {SITE_CONFIG.contact.email}
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-navy-deep hover:bg-gold-accent hover:text-navy-dark rounded-xl transition-all border border-navy-muted"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-navy-deep hover:bg-gold-accent hover:text-navy-dark rounded-xl transition-all border border-navy-muted"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-navy-deep hover:bg-gold-accent hover:text-navy-dark rounded-xl transition-all border border-navy-muted"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-navy-deep hover:bg-gold-accent hover:text-navy-dark rounded-xl transition-all border border-navy-muted"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-accent mb-4 font-display">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-gold-soft transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-gold-soft transition-colors">Shop Collection</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold-soft transition-colors">About Mr.Nothing</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-soft transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Category Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-accent mb-4 font-display">
              Categories
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link to={`/category/${cat.slug}`} className="hover:text-gold-soft transition-colors flex items-center justify-between">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Policy Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-accent mb-4 font-display">
              Policies & Legal
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link to="/privacy-policy" className="hover:text-gold-soft transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-gold-soft transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-soft transition-colors">
                  Business Inquiry
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Copyright & Showcase Disclaimer */}
      <div className="bg-navy-dark/95 border-t border-navy-muted/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 Mr.Nothing. All rights reserved. Support: {SITE_CONFIG.contact.email}</p>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-navy-deep/80 rounded-lg border border-gold-accent/20 text-gold-soft">
            <ShieldCheck className="w-4 h-4 text-gold-accent shrink-0" />
            <span>This website is currently a product showcase. No purchases are processed.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
