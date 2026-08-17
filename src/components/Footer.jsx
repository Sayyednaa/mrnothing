import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { BRAND, CONTACT_CONFIG } from '../data/constants';
import { categories } from '../data/categories';

export default function Footer() {
  return (
    <footer className="bg-[#031C44] text-white pt-16 pb-12 border-t border-[#B28A43]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src={BRAND.logoPath} 
                alt={BRAND.logoAlt}
                className="h-10 w-auto object-contain rounded bg-white/10 p-1"
              />
              <div>
                <span className="font-display font-bold text-2xl tracking-tight text-white">
                  MR.NOTHING
                </span>
                <span className="block text-[10px] font-extrabold tracking-widest text-[#D2B36B] uppercase">
                  {BRAND.tagline}
                </span>
              </div>
            </Link>
            
            <p className="text-sm text-gray-300 leading-relaxed max-w-md font-light">
              {BRAND.description} Engineered for focused individuals who move with intention.
            </p>

            <div className="flex items-center space-x-4 pt-2 text-xs text-gray-400">
              <div className="flex items-center space-x-1.5">
                <MapPin className="w-4 h-4 text-[#B28A43]" />
                <span>{CONTACT_CONFIG.location}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Mail className="w-4 h-4 text-[#B28A43]" />
                <span>{CONTACT_CONFIG.email}</span>
              </div>
            </div>
          </div>

          {/* Categories Col */}
          <div>
            <h4 className="font-display text-sm font-bold tracking-wider text-[#D2B36B] uppercase mb-4">
              Categories
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link 
                    to={`/category/${cat.slug}`}
                    className="hover:text-white transition-colors hover:underline"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/shop" className="text-[#D2B36B] hover:text-white transition-colors flex items-center space-x-1 font-medium">
                  <span>View All Shop</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation / Showcase Col */}
          <div>
            <h4 className="font-display text-sm font-bold tracking-wider text-[#D2B36B] uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Shop Catalogue</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Mr.Nothing</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Legal & Compliance Col */}
          <div>
            <h4 className="font-display text-sm font-bold tracking-wider text-[#D2B36B] uppercase mb-4">
              Legal & Policies
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy (Draft)</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service (Draft)</Link></li>
            </ul>

            <div className="mt-6 p-3 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-center space-x-1.5 text-xs text-[#D2B36B] font-semibold mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Showcase Disclaimer</span>
              </div>
              <p className="text-[11px] text-gray-400 leading-tight">
                {BRAND.disclaimer}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {BRAND.copyrightYear} {BRAND.name}. All rights reserved.</p>
          
          <div className="flex items-center space-x-6 text-gray-400">
            <span className="hover:text-white cursor-pointer transition-colors">Instagram</span>
            <span className="hover:text-white cursor-pointer transition-colors">Twitter / X</span>
            <span className="hover:text-white cursor-pointer transition-colors">LinkedIn</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
