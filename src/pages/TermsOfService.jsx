import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Page Header */}
      <div className="border-b border-gray-200 dark:border-navy-muted pb-8">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 bg-navy-deep/5 dark:bg-white/10 text-navy-deep dark:text-gold-accent text-xs font-extrabold uppercase tracking-widest rounded-full mb-3">
          Legal Terms Template
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-navy-dark dark:text-white">
          Terms of Service (Draft)
        </h1>
        <p className="text-xs text-text-secondary dark:text-gray-400 mt-2">
          Effective Date: August 17, 2026 | Last Updated: August 17, 2026
        </p>
      </div>

      {/* Mandatory Legal Review Banner Notice */}
      <div className="p-4 sm:p-5 bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-300 dark:border-amber-700/60 rounded-2xl flex items-start gap-4 text-amber-900 dark:text-amber-200 shadow-sm">
        <ShieldAlert className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-1 text-xs sm:text-sm">
          <strong className="block text-amber-950 dark:text-amber-100 font-bold uppercase tracking-wider">
            Important Notice for Visitors & Administrators
          </strong>
          <p className="leading-relaxed">
            {SITE_CONFIG.legalReviewNotice}
          </p>
        </div>
      </div>

      {/* Structured Legal Terms Content */}
      <div className="prose prose-slate max-w-none text-sm text-gray-700 dark:text-gray-300 space-y-8 leading-relaxed">
        <section className="bg-white dark:bg-navy-dark p-6 rounded-2xl border border-gray-200 dark:border-navy-muted shadow-sm">
          <h2 className="text-lg font-bold text-navy-dark dark:text-white mb-3">1. Website Purpose & Showcase Mode</h2>
          <p>
            This website operates strictly as a static product showcase for the <strong>Mr.Nothing</strong> brand. All product cards, specifications, pricing samples in INR ({SITE_CONFIG.currencySymbol}), and action buttons are designed for visual presentation, layout testing, and feature discovery.
          </p>
        </section>

        <section className="bg-white dark:bg-navy-dark p-6 rounded-2xl border border-gray-200 dark:border-navy-muted shadow-sm">
          <h2 className="text-lg font-bold text-navy-dark dark:text-white mb-3">2. No Purchasing or Commercial Contracts</h2>
          <p>
            No binding purchase contracts, monetary payments, shipping commitments, or product sales are executed through this site. Buttons labeled "Coming Soon" or "Showcase Only" express design concepts only.
          </p>
        </section>

        <section className="bg-white dark:bg-navy-dark p-6 rounded-2xl border border-gray-200 dark:border-navy-muted shadow-sm">
          <h2 className="text-lg font-bold text-navy-dark dark:text-white mb-3">3. Product Information & Sample Pricing</h2>
          <p>
            Product images, descriptions, specifications, and sample prices displayed on this website are illustrative and subject to modification or removal without prior notice.
          </p>
        </section>

        <section className="bg-white dark:bg-navy-dark p-6 rounded-2xl border border-gray-200 dark:border-navy-muted shadow-sm">
          <h2 className="text-lg font-bold text-navy-dark dark:text-white mb-3">4. Intellectual Property</h2>
          <p>
            All brand trademarks, logos (including the Mr.Nothing logo), graphics, visual design systems, and software content belong to their respective owners and are protected by applicable intellectual property rights.
          </p>
        </section>

        <section className="bg-white dark:bg-navy-dark p-6 rounded-2xl border border-gray-200 dark:border-navy-muted shadow-sm">
          <h2 className="text-lg font-bold text-navy-dark dark:text-white mb-3">5. Acceptable Use</h2>
          <p>
            You agree to use this site for lawful purposes only and refrain from any actions that compromise security, interfere with site performance, or attempt unauthorized modifications to client-side assets.
          </p>
        </section>

        <section className="bg-white dark:bg-navy-dark p-6 rounded-2xl border border-gray-200 dark:border-navy-muted shadow-sm">
          <h2 className="text-lg font-bold text-navy-dark dark:text-white mb-3">6. Third-Party Links</h2>
          <p>
            Links to external social media platforms or royalty-free resource providers are provided for convenience. We do not control or assume responsibility for external third-party content.
          </p>
        </section>

        <section className="bg-white dark:bg-navy-dark p-6 rounded-2xl border border-gray-200 dark:border-navy-muted shadow-sm">
          <h2 className="text-lg font-bold text-navy-dark dark:text-white mb-3">7. Disclaimer of Warranties</h2>
          <p>
            This showcase platform is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, whether express or implied.
          </p>
        </section>

        <section className="bg-white dark:bg-navy-dark p-6 rounded-2xl border border-gray-200 dark:border-navy-muted shadow-sm">
          <h2 className="text-lg font-bold text-navy-dark dark:text-white mb-3">8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, Mr.Nothing shall not be liable for any indirect, incidental, or consequential damages resulting from your use of this showcase site.
          </p>
        </section>

        <section className="bg-white dark:bg-navy-dark p-6 rounded-2xl border border-gray-200 dark:border-navy-muted shadow-sm">
          <h2 className="text-lg font-bold text-navy-dark dark:text-white mb-3">9. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.
          </p>
        </section>

        <section className="bg-white dark:bg-navy-dark p-6 rounded-2xl border border-gray-200 dark:border-navy-muted shadow-sm">
          <h2 className="text-lg font-bold text-navy-dark dark:text-white mb-3">10. Contact Information</h2>
          <p>
            If you have questions regarding these draft Terms of Service, please reach out via email at: <strong>{SITE_CONFIG.contact.email}</strong>.
          </p>
        </section>
      </div>
    </div>
  );
};
