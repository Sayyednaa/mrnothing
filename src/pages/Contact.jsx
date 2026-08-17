import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, MessageSquare, Instagram, Twitter, Linkedin, Github } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { SectionHeading } from '../components/SectionHeading';
import { useToast } from '../context/ToastContext';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const { addToast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      addToast('Thank you — your inquiry has been recorded locally.', 'success');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <SectionHeading
        badge="Get In Touch"
        title="Contact & Enquiries"
        subtitle="Have feedback or partnership questions about our showcase platform? Send us a message below."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Contact Details (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-navy-dark text-white p-8 rounded-3xl space-y-6 border border-navy-muted shadow-xl bg-angular-motif">
            <div className="flex items-center gap-3 border-b border-navy-muted pb-4">
              <img
                src={SITE_CONFIG.logoPath}
                alt={SITE_CONFIG.logoAlt}
                className="h-10 w-auto rounded border border-gold-accent/40"
              />
              <div>
                <h3 className="font-display font-bold text-lg">Mr.Nothing</h3>
                <p className="text-xs text-gold-accent uppercase font-bold tracking-widest">
                  {SITE_CONFIG.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed">
              We welcome product discovery feedback, brand inquiries, and collaboration ideas for future releases.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-navy-deep rounded-xl border border-navy-muted text-gold-accent shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
                    Support & Enquiries
                  </span>
                  <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-sm font-semibold text-white hover:text-gold-soft transition-colors">
                    {SITE_CONFIG.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-navy-deep rounded-xl border border-navy-muted text-gold-accent shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
                    Location
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {SITE_CONFIG.contact.location}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-navy-deep rounded-xl border border-navy-muted text-gold-accent shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
                    Business Partnerships
                  </span>
                  <a href={`mailto:${SITE_CONFIG.contact.businessInquiryEmail}`} className="text-sm font-semibold text-white hover:text-gold-soft transition-colors">
                    {SITE_CONFIG.contact.businessInquiryEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-navy-muted">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-accent block mb-3">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-navy-deep hover:bg-gold-accent hover:text-navy-dark rounded-xl transition-all border border-navy-muted text-white"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={SITE_CONFIG.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-navy-deep hover:bg-gold-accent hover:text-navy-dark rounded-xl transition-all border border-navy-muted text-white"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={SITE_CONFIG.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-navy-deep hover:bg-gold-accent hover:text-navy-dark rounded-xl transition-all border border-navy-muted text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={SITE_CONFIG.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-navy-deep hover:bg-gold-accent hover:text-navy-dark rounded-xl transition-all border border-navy-muted text-white"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Business Inquiry CTA Box */}
          <div className="p-6 bg-white dark:bg-navy-dark rounded-2xl border border-gray-200 dark:border-navy-muted shadow-sm space-y-3">
            <h4 className="font-bold text-navy-dark dark:text-white text-base">Looking for custom showcase partnerships?</h4>
            <p className="text-xs text-text-secondary dark:text-gray-300 leading-relaxed">
              If you represent a retail brand or manufacturer looking to present product lines, reach out directly at {SITE_CONFIG.contact.businessInquiryEmail}.
            </p>
          </div>
        </div>

        {/* Right Column: Contact Form (7 cols) */}
        <div className="lg:col-span-7 bg-white dark:bg-navy-dark p-8 sm:p-10 rounded-3xl border border-gray-200/80 dark:border-navy-muted shadow-md">
          <h3 className="text-2xl font-bold font-display text-navy-dark dark:text-white mb-2">Send Message</h3>

          {/* Form Notice */}
          <div className="p-4 bg-surface-offwhite dark:bg-navy-surface border border-gray-200 dark:border-navy-muted rounded-xl mb-6 flex items-start gap-3 text-xs text-gray-600 dark:text-gray-300">
            <AlertCircle className="w-4 h-4 text-navy-deep dark:text-gold-accent shrink-0 mt-0.5" />
            <span>
              <strong>Note:</strong> This contact form is part of a static showcase website. Messages are verified on the frontend and confirmed locally without transmitting to a remote server. Direct support email: <a href={`mailto:${SITE_CONFIG.contact.email}`} className="underline text-gold-accent">{SITE_CONFIG.contact.email}</a>.
            </span>
          </div>

          {submitted ? (
            <div className="p-8 bg-navy-deep/5 dark:bg-white/10 border border-navy-deep/20 dark:border-white/20 rounded-2xl text-center space-y-4">
              <div className="w-12 h-12 bg-navy-deep text-gold-accent rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-navy-dark dark:text-white">Message Received!</h4>
              <p className="text-sm text-text-secondary dark:text-gray-300 max-w-md mx-auto leading-relaxed">
                Thank you for testing our showcase contact form. Your message has been processed successfully in local demo state.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                className="px-6 py-2.5 bg-navy-deep text-white text-xs font-bold rounded-xl hover:bg-navy-dark transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-navy-dark dark:text-white mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface-offwhite dark:bg-navy-surface border border-gray-200 dark:border-navy-muted rounded-xl text-sm text-navy-dark dark:text-white placeholder-gray-400 focus:outline-none focus:border-navy-deep dark:focus:border-gold-accent focus:ring-2 focus:ring-navy-deep/10"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-navy-dark dark:text-white mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface-offwhite dark:bg-navy-surface border border-gray-200 dark:border-navy-muted rounded-xl text-sm text-navy-dark dark:text-white placeholder-gray-400 focus:outline-none focus:border-navy-deep dark:focus:border-gold-accent focus:ring-2 focus:ring-navy-deep/10"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-navy-dark dark:text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Inquiry subject..."
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface-offwhite dark:bg-navy-surface border border-gray-200 dark:border-navy-muted rounded-xl text-sm text-navy-dark dark:text-white placeholder-gray-400 focus:outline-none focus:border-navy-deep dark:focus:border-gold-accent focus:ring-2 focus:ring-navy-deep/10"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-navy-dark dark:text-white mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface-offwhite dark:bg-navy-surface border border-gray-200 dark:border-navy-muted rounded-xl text-sm text-navy-dark dark:text-white placeholder-gray-400 focus:outline-none focus:border-navy-deep dark:focus:border-gold-accent focus:ring-2 focus:ring-navy-deep/10"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-navy-deep dark:bg-gold-accent hover:bg-navy-dark dark:hover:bg-gold-dark text-white dark:text-navy-dark font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 border border-gold-accent/30"
              >
                <Send className="w-4 h-4 text-gold-accent dark:text-navy-dark" />
                Submit Message (Local Demo)
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
