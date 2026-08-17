import React from 'react';
import { ShieldAlert, ShieldCheck, Lock, FileText } from 'lucide-react';
import { CONTACT_CONFIG, BRAND } from '../data/constants';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8 text-gray-800">
      
      {/* 1. Legal Review Disclaimer Banner */}
      <div className="bg-amber-500/10 border-2 border-[#B28A43] p-4 sm:p-6 rounded-2xl flex items-start space-x-4">
        <ShieldAlert className="w-6 h-6 text-[#B28A43] shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm space-y-1">
          <span className="font-extrabold uppercase tracking-wider text-[#031C44] block">
            DEMONSTRATION TEMPLATE — REQUIRES LEGAL REVIEW
          </span>
          <p className="text-gray-700 leading-relaxed">
            This document is a showcase privacy policy template created strictly for demonstration purposes for the <strong>{BRAND.name}</strong> storefront. Before deploying commercially, consult a qualified legal professional to adapt these terms to your jurisdiction.
          </p>
        </div>
      </div>

      {/* 2. Document Title & Header */}
      <div className="border-b border-gray-200 pb-6 space-y-2">
        <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#B28A43] uppercase tracking-wider">
          <FileText className="w-4 h-4" />
          <span>Legal Document &bull; Effective Date: January 1, 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black font-heading text-[#031C44]">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-600">
          How {BRAND.name} handles user interaction, local data storage, and showcase site operations.
        </p>
      </div>

      {/* 3. Privacy Content Sections */}
      <div className="space-y-8 text-sm sm:text-base leading-relaxed text-gray-700">
        
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#031C44] font-heading border-l-4 border-[#B28A43] pl-3">
            1. Overview & Showcase Notice
          </h2>
          <p>
            This website ({BRAND.name}) operates as a non-commercial, interactive product showcase designed to highlight product aesthetics, technical specifications, and brand philosophy. No commercial transactions, payment card processing, or financial operations take place on this platform.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#031C44] font-heading border-l-4 border-[#B28A43] pl-3">
            2. Data Collection Practices
          </h2>
          <p>
            We adhere to a strict data minimization protocol. Because this is a static showcase application:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600">
            <li>We do <strong>NOT</strong> collect credit card details, bank info, or billing addresses.</li>
            <li>We do <strong>NOT</strong> require account registration or passwords.</li>
            <li>Optional submission forms (such as newsletter or contact inquiry) collect only the provided name, email address, and message text solely for correspondence.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#031C44] font-heading border-l-4 border-[#B28A43] pl-3">
            3. Local Storage & Cookies
          </h2>
          <p>
            This website utilizes browser local storage (<code className="font-mono text-xs bg-gray-100 p-1 rounded">localStorage</code>) to save user preferences such as items added to your showcase Wishlist. This data remains entirely stored on your device and is not transmitted to external database servers.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#031C44] font-heading border-l-4 border-[#B28A43] pl-3">
            4. GitHub Pages & Hosting Infrastructure
          </h2>
          <p>
            This site is hosted on <strong>GitHub Pages</strong>. GitHub may collect technical server access logs including IP addresses, browser user-agent strings, and request timestamps for infrastructure security and bandwidth monitoring. For further details, please review the GitHub Privacy Statement.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#031C44] font-heading border-l-4 border-[#B28A43] pl-3">
            5. Contact Information
          </h2>
          <p>
            For questions regarding this showcase privacy statement, contact us at:
          </p>
          <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl font-mono text-xs text-[#031C44] space-y-1">
            <div>EMAIL: {CONTACT_CONFIG.email}</div>
            <div>LOCATION: {CONTACT_CONFIG.location}</div>
          </div>
        </section>

      </div>

    </div>
  );
}
