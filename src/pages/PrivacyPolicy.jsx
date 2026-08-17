import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Page Header */}
      <div className="border-b border-gray-200 dark:border-navy-muted pb-8">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 bg-navy-deep/5 dark:bg-white/10 text-navy-deep dark:text-gold-accent text-xs font-extrabold uppercase tracking-widest rounded-full mb-3">
          Legal Template
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-navy-dark dark:text-white">
          Privacy Policy (Draft)
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

      {/* Structured Legal Content */}
      <div className="prose prose-slate max-w-none text-sm text-gray-700 dark:text-gray-300 space-y-8 leading-relaxed">
        <section className="bg-white dark:bg-navy-dark p-6 rounded-2xl border border-gray-200 dark:border-navy-muted shadow-sm">
          <h2 className="text-lg font-bold text-navy-dark dark:text-white mb-3">1. Overview of Website Purpose</h2>
          <p>
            This website (<strong>Mr.Nothing — Ultimate Action</strong>) is currently hosted as a static product showcase for design presentation and discovery only. No commercial transactions, user account creation, payment processing, or live data collection services are currently operational.
          </p>
        </section>

        <section className="bg-white dark:bg-navy-dark p-6 rounded-2xl border border-gray-200 dark:border-navy-muted shadow-sm">
          <h2 className="text-lg font-bold text-navy-dark dark:text-white mb-3">2. Information Collected</h2>
          <p>
            Because this application runs as a static client-side web application without a active database server:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>Interactive Forms:</strong> Any information submitted through demo contact or newsletter forms is handled locally in browser state or temporary local storage for demonstration purposes only. It is not transmitted to external database servers.
            </li>
            <li>
              <strong>Local Storage:</strong> Browser local storage may be used to remember client preferences such as your saved Wishlist items or Theme (Dark/Light mode) settings.
            </li>
          </ul>
        </section>

        <section className="bg-white dark:bg-navy-dark p-6 rounded-2xl border border-gray-200 dark:border-navy-muted shadow-sm">
          <h2 className="text-lg font-bold text-navy-dark dark:text-white mb-3">3. How Information Is Used</h2>
          <p>
            Local data (such as wishlist states) is used solely within your browser session to power interactive showcase features. No personal information is sold, rented, or shared with third-party marketers.
          </p>
        </section>

        <section className="bg-white dark:bg-navy-dark p-6 rounded-2xl border border-gray-200 dark:border-navy-muted shadow-sm">
          <h2 className="text-lg font-bold text-navy-dark dark:text-white mb-3">4. Cookies & Analytics</h2>
          <p>
            The current static version of this site does not deploy tracking cookies or aggressive third-party advertising trackers. Standard web hosting logs may automatically record basic technical data (such as IP addresses and browser headers) strictly for hosting security and server diagnostic purposes.
          </p>
        </section>

        <section className="bg-white dark:bg-navy-dark p-6 rounded-2xl border border-gray-200 dark:border-navy-muted shadow-sm">
          <h2 className="text-lg font-bold text-navy-dark dark:text-white mb-3">5. Third-Party Hosting & Services</h2>
          <p>
            This site is hosted on public static infrastructure (e.g., GitHub Pages). Hosting provider network logs are subject to the respective infrastructure provider's global privacy policies.
          </p>
        </section>

        <section className="bg-white dark:bg-navy-dark p-6 rounded-2xl border border-gray-200 dark:border-navy-muted shadow-sm">
          <h2 className="text-lg font-bold text-navy-dark dark:text-white mb-3">6. Data Security</h2>
          <p>
            We implement standard web safety protocols. However, because no remote data storage is connected, sensitive payment or financial details are never collected or stored.
          </p>
        </section>

        <section className="bg-white dark:bg-navy-dark p-6 rounded-2xl border border-gray-200 dark:border-navy-muted shadow-sm">
          <h2 className="text-lg font-bold text-navy-dark dark:text-white mb-3">7. Children’s Privacy</h2>
          <p>
            Our website is directed toward a general audience and does not knowingly collect personal information from children under the age of 16.
          </p>
        </section>

        <section className="bg-white dark:bg-navy-dark p-6 rounded-2xl border border-gray-200 dark:border-navy-muted shadow-sm">
          <h2 className="text-lg font-bold text-navy-dark dark:text-white mb-3">8. Changes to This Policy</h2>
          <p>
            We reserve the right to update this template policy as new features or backend integrations are introduced in future releases.
          </p>
        </section>

        <section className="bg-white dark:bg-navy-dark p-6 rounded-2xl border border-gray-200 dark:border-navy-muted shadow-sm">
          <h2 className="text-lg font-bold text-navy-dark dark:text-white mb-3">9. Contact & Legal Entity Information</h2>
          <p>
            For questions regarding this draft policy or showcase operations, please contact:
          </p>
          <div className="mt-3 p-4 bg-surface-offwhite dark:bg-navy-surface rounded-xl border border-gray-200 dark:border-navy-muted text-xs space-y-1">
            <p><strong>Legal Business Name:</strong> Mr.Nothing Showcase India</p>
            <p><strong>Registered Address:</strong> [Registered Business Address, India]</p>
            <p><strong>Email:</strong> {SITE_CONFIG.contact.email}</p>
          </div>
        </section>
      </div>
    </div>
  );
};
