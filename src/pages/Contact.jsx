import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Briefcase, 
  Sparkles, 
  MessageSquare,
  Building
} from 'lucide-react';
import { CONTACT_CONFIG, BRAND } from '../data/constants';
import SectionHeading from '../components/SectionHeading';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address format';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message content is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* 1. Header Banner */}
      <div className="bg-[#031C44] rounded-3xl p-8 sm:p-12 text-white border border-[#B28A43]/30 shadow-2xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-80 bg-[#B28A43]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-2xl space-y-4 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full text-xs text-[#D2B36B] font-semibold border border-white/10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white">
            Connect with Mr.Nothing
          </h1>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Have questions regarding showcase products, press inquiries, or collaboration opportunities? Send us a message below.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* 2. Contact Info & Config Details (Left Column) */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 space-y-6 shadow-sm">
            <h3 className="text-xl font-bold text-[#031C44] font-heading flex items-center space-x-2">
              <Building className="w-5 h-5 text-[#B28A43]" />
              <span>Contact Information</span>
            </h3>

            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex items-start space-x-3.5 p-3 rounded-xl bg-gray-50 border border-gray-100">
                <Mail className="w-5 h-5 text-[#062B67] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-gray-500 font-semibold uppercase block">Official Email</span>
                  <span className="font-mono text-sm font-bold text-[#031C44]">{CONTACT_CONFIG.email}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-3 rounded-xl bg-gray-50 border border-gray-100">
                <MapPin className="w-5 h-5 text-[#062B67] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-gray-500 font-semibold uppercase block">Location</span>
                  <span className="font-semibold text-sm text-[#031C44]">{CONTACT_CONFIG.location}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-3 rounded-xl bg-gray-50 border border-gray-100">
                <Clock className="w-5 h-5 text-[#062B67] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-gray-500 font-semibold uppercase block">Support Desk Hours</span>
                  <span className="text-xs font-medium text-gray-700">{CONTACT_CONFIG.supportHours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Business Inquiry Card */}
          <div className="bg-[#031C44] rounded-2xl border border-[#B28A43]/40 p-6 sm:p-8 text-white space-y-4 shadow-xl">
            <div className="flex items-center space-x-2 text-[#D2B36B] font-bold text-xs uppercase tracking-wider">
              <Briefcase className="w-4 h-4 text-[#B28A43]" />
              <span>Commercial & Press Inquiries</span>
            </div>

            <h4 className="text-lg font-bold font-heading">
              Wholesale, B2B & Media Partnerships
            </h4>

            <p className="text-xs text-gray-300 leading-relaxed">
              We welcome partnership proposals from retailers, media outlets, and design collaborators. Please submit inquiries via the contact form or directly to our email with [BUSINESS] in the subject header.
            </p>

            <div className="pt-2 text-xs font-mono text-[#D2B36B] border-t border-white/10">
              RESPONSE TIME: WITHIN 24-48 BUSINESS HOURS
            </div>
          </div>

        </div>

        {/* 3. Interactive Contact Form (Right Column) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-200 p-6 sm:p-10 shadow-sm space-y-6">
          <div className="border-b border-gray-100 pb-4">
            <h3 className="text-xl font-bold text-[#031C44] font-heading flex items-center space-x-2">
              <MessageSquare className="w-5 h-5 text-[#B28A43]" />
              <span>Send Us a Message</span>
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Fill out the form below and our team will get back to you promptly.
            </p>
          </div>

          {submitted && (
            <div className="bg-emerald-50 border border-emerald-300 p-4 rounded-xl flex items-center space-x-3 text-emerald-800 animate-in fade-in duration-300">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-emerald-900 block text-sm">Message Sent Successfully!</span>
                Thanks for reaching out. We will get back to you as soon as possible.
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Name Input */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Your Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full bg-gray-50 border rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:bg-white transition-all ${
                  errors.name ? 'border-rose-500 ring-1 ring-rose-500' : 'border-gray-300 focus:ring-2 focus:ring-[#062B67]'
                }`}
              />
              {errors.name && <span className="text-xs text-rose-500 mt-1 block">{errors.name}</span>}
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Your Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full bg-gray-50 border rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:bg-white transition-all ${
                  errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-gray-300 focus:ring-2 focus:ring-[#062B67]'
                }`}
              />
              {errors.email && <span className="text-xs text-rose-500 mt-1 block">{errors.email}</span>}
            </div>

            {/* Subject Input */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Subject <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Product Inquiry / General Feedback"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className={`w-full bg-gray-50 border rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:bg-white transition-all ${
                  errors.subject ? 'border-rose-500 ring-1 ring-rose-500' : 'border-gray-300 focus:ring-2 focus:ring-[#062B67]'
                }`}
              />
              {errors.subject && <span className="text-xs text-rose-500 mt-1 block">{errors.subject}</span>}
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Message <span className="text-rose-500">*</span>
              </label>
              <textarea
                rows={5}
                placeholder="Write your message details here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`w-full bg-gray-50 border rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:bg-white transition-all ${
                  errors.message ? 'border-rose-500 ring-1 ring-rose-500' : 'border-gray-300 focus:ring-2 focus:ring-[#062B67]'
                }`}
              />
              {errors.message && <span className="text-xs text-rose-500 mt-1 block">{errors.message}</span>}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#031C44] hover:bg-[#062B67] text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-xl transition-all flex items-center justify-center space-x-2 border border-[#B28A43]/30"
              >
                <Send className="w-4 h-4 text-[#D2B36B]" />
                <span>Transmit Message</span>
              </button>
            </div>

          </form>
        </div>

      </div>

    </div>
  );
}
