import React, { useState } from 'react';
import { X, Sparkles, ShieldCheck, Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import { BRAND } from '../data/constants';

export default function ShowcaseNoticeModal({ isOpen, onClose, itemName = '' }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        // Reset after 3 sec
      }, 3000);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#031C44] border border-[#B28A43]/40 rounded-2xl max-w-lg w-full p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden">
        
        {/* Background Decorative Element */}
        <div className="absolute -right-16 -top-16 w-40 h-40 bg-[#B28A43]/10 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Visual */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2.5 bg-[#062B67] border border-[#B28A43]/40 rounded-xl">
            <Sparkles className="w-6 h-6 text-[#D2B36B]" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-[#D2B36B] font-semibold">
              Showcase Platform Notice
            </div>
            <h3 className="text-xl font-bold text-white font-heading">
              {itemName ? `Pre-order Preview: ${itemName}` : 'Product Discovery Showcase'}
            </h3>
          </div>
        </div>

        {/* Modal Description Body */}
        <div className="space-y-4 text-sm text-gray-200 leading-relaxed py-2">
          <p>
            Welcome to the official <strong className="text-white">Mr.Nothing</strong> product showcase. This digital storefront is strictly designed to present our upcoming premium gear, technical clothing, and lifestyle upgrades.
          </p>

          <div className="bg-[#062B67]/70 border border-[#B28A43]/30 p-4 rounded-xl space-y-2">
            <div className="flex items-center space-x-2 text-[#D2B36B] font-medium text-xs">
              <ShieldCheck className="w-4 h-4 shrink-0 text-[#B28A43]" />
              <span>Showcase Policy Disclaimer</span>
            </div>
            <p className="text-xs text-gray-300">
              {BRAND.disclaimer} Payment checkout and commercial transactions are temporarily disabled during this showcase phase.
            </p>
          </div>
        </div>

        {/* Newsletter / Notification Form */}
        <div className="mt-6 pt-4 border-t border-white/10">
          {submitted ? (
            <div className="bg-emerald-950/60 border border-emerald-500/40 p-4 rounded-xl flex items-center space-x-3 text-emerald-200">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <div className="text-xs">
                <span className="font-semibold text-white block">You're on the priority notification list!</span>
                We'll notify you as soon as official drop dates are finalized.
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <label className="block text-xs text-gray-300 font-medium">
                Want early launch access when checkout goes live?
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#062B67] border border-white/20 rounded-lg pl-9 pr-3 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#B28A43]"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#B28A43] hover:bg-[#D2B36B] text-white hover:text-[#031C44] px-4 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-1 shrink-0"
                >
                  <span>Notify Me</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Footer Actions */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleClose}
            className="w-full sm:w-auto px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Continue Browsing
          </button>
        </div>

      </div>
    </div>
  );
}
