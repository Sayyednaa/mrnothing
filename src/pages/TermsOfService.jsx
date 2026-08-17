import React from 'react';
import { ShieldAlert, FileCode, CheckCircle, AlertTriangle } from 'lucide-react';
import { BRAND, CONTACT_CONFIG } from '../data/constants';

export default function TermsOfService() {
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
            This document is a showcase terms of service template provided strictly for demonstration purposes for the <strong>{BRAND.name}</strong> digital storefront. Adapt with legal counsel prior to commercial use.
          </p>
        </div>
      </div>

      {/* 2. Title & Header */}
      <div className="border-b border-gray-200 pb-6 space-y-2">
        <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#B28A43] uppercase tracking-wider">
          <FileCode className="w-4 h-4" />
          <span>Legal Document &bull; Effective Date: January 1, 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black font-heading text-[#031C44]">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-600">
          Rules governing the use and display of the {BRAND.name} showcase platform.
        </p>
      </div>

      {/* 3. Terms Sections */}
      <div className="space-y-8 text-sm sm:text-base leading-relaxed text-gray-700">
        
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#031C44] font-heading border-l-4 border-[#B28A43] pl-3">
            1. Purpose of the Website
          </h2>
          <p>
            The {BRAND.name} website is an online portfolio and product showcase created to present brand design concepts, technical specifications, and lifestyle apparel aesthetics. Accessing or using this site signifies your agreement to these terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#031C44] font-heading border-l-4 border-[#B28A43] pl-3">
            2. No Purchasing or E-Commerce Functionality
          </h2>
          <p>
            You explicitly acknowledge that:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600">
            <li>No binding commercial transactions or sales agreements occur through this website.</li>
            <li>Buttons such as "Pre-Order", "Buy Now", or "Showcase Only" serve solely as user experience demonstrations or waitlist notifications.</li>
            <li>No payment credentials or financial authorizations will be requested or accepted.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#031C44] font-heading border-l-4 border-[#B28A43] pl-3">
            3. Intellectual Property Rights
          </h2>
          <p>
            All logos, brand names ("Mr.Nothing", "Ultimate Action"), imagery, copy, and layout components on this site are protected intellectual property. You may not reproduce, redistribute, or monetize brand assets without prior written consent.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#031C44] font-heading border-l-4 border-[#B28A43] pl-3">
            4. Disclaimer & Limitation of Liability
          </h2>
          <p>
            This website and all showcase content are provided on an "as is" and "as available" basis. Product specifications and prices displayed are subject to change prior to commercial release.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#031C44] font-heading border-l-4 border-[#B28A43] pl-3">
            5. Governing Law & Inquiries
          </h2>
          <p>
            These terms are governed in accordance with applicable laws in {CONTACT_CONFIG.location}. For questions regarding these terms, contact <code className="font-mono text-xs bg-gray-100 p-1 rounded">{CONTACT_CONFIG.email}</code>.
          </p>
        </section>

      </div>

    </div>
  );
}
