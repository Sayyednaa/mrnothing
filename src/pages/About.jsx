import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  Sparkles, 
  Target, 
  Compass, 
  Layers, 
  Zap, 
  Eye, 
  Sliders, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { BRAND } from '../data/constants';
import SectionHeading from '../components/SectionHeading';

export default function About() {
  const steps = [
    {
      step: "01",
      icon: Eye,
      title: "Observe",
      desc: "We analyze daily routines and identify unnecessary complexity, bulky equipment, and design inefficiencies across clothing, tech, and everyday tools."
    },
    {
      step: "02",
      icon: Sliders,
      title: "Curate",
      desc: "We distill products down to essential functional form using premium materials—organic heavy cottons, anodized aluminum, matte steel, and technical ripstops."
    },
    {
      step: "03",
      icon: Zap,
      title: "Move",
      desc: "We deliver products engineered for immediate physical execution and seamless transition between workplace, studio, and outdoor movement."
    }
  ];

  const whyMrNothing = [
    {
      title: "Minimalist Aesthetic, Maximalist Function",
      desc: "No flashy logos or needless embellishments. Just clean lines and deliberate utility."
    },
    {
      title: "Built to Last the Journey",
      desc: "Tested for high durability, water-resistance, anti-twist weaves, and tactile precision."
    },
    {
      title: "Zero Friction Experience",
      desc: "Designed to help you focus on execution rather than managing gear."
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* 1. Hero Header */}
      <section className="bg-gradient-to-b from-[#031C44] via-[#062B67] to-[#031C44] text-white py-16 sm:py-24 border-b border-[#B28A43]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#B28A43_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-semibold text-[#D2B36B] border border-white/10">
            <Sparkles className="w-4 h-4 text-[#B28A43]" />
            <span>BRAND PHILOSOPHY & STORY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-heading text-white tracking-tight leading-tight">
            Built for the next move.
          </h1>

          <p className="text-base sm:text-xl text-gray-200 leading-relaxed font-light">
            Mr.Nothing exists to eliminate friction from daily life. We create high-utility clothing, electronics, home essentials, and everyday gear for people who act.
          </p>
        </div>
      </section>

      {/* 2. Core Philosophy & Brand Logo Feature Visual */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Logo Visual Container */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-md w-full">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#B28A43] via-[#D2B36B] to-[#062B67] opacity-30 blur-xl group-hover:opacity-60 transition duration-1000" />
              
              <div className="relative bg-[#031C44] rounded-2xl border border-[#B28A43]/40 p-8 sm:p-10 text-center space-y-6 shadow-2xl">
                <div className="w-44 h-44 mx-auto bg-[#062B67] rounded-2xl border-2 border-[#B28A43]/50 p-3 shadow-2xl flex items-center justify-center">
                  <img 
                    src={BRAND.logoPath} 
                    alt={BRAND.logoAlt} 
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-black text-white font-heading tracking-wider">
                    MR.NOTHING
                  </h3>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#D2B36B] block mt-1">
                    {BRAND.tagline}
                  </span>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs text-gray-300 font-mono">
                  ORIGIN: INDIA &bull; EST. 2026
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#B28A43] font-bold">
              The Genesis of Mr.Nothing
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#031C44] font-heading leading-tight">
              What does "Ultimate Action" mean?
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                In a market overcrowded with transient trends and disposable goods, <strong className="text-[#031C44]">Mr.Nothing</strong> represents a quiet rebellion toward intentionality. We believe that true sophistication lies in stripping away non-essentials until only uncompromising utility remains.
              </p>
              <p>
                "Ultimate Action" is our driving mantra. It means designing products that don't distract or require maintenance, but instead empower you to execute your work, your training, and your lifestyle with focus.
              </p>
              <p>
                Whether it's a 340 GSM heavy twill overshirt engineered for urban weather or a high-precision audio setup, every item in our showcase is built around real-world performance.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <div className="bg-gray-100 border border-gray-200 p-4 rounded-xl text-xs font-medium text-gray-800 space-y-1">
                <span className="font-bold text-[#062B67] block">Zero Superfluous Detail</span>
                <p className="text-gray-600">Every seam, pocket, and button serves a precise function.</p>
              </div>
              <div className="bg-gray-100 border border-gray-200 p-4 rounded-xl text-xs font-medium text-gray-800 space-y-1">
                <span className="font-bold text-[#062B67] block">Uncompromising Durability</span>
                <p className="text-gray-600">Built using industrial-grade materials for daily wear.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Three-Step Visual Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          badge="Design Methodology"
          title="The 3-Step Creation Process"
          subtitle="How every product transitions from initial problem statement to finished showcase item."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all space-y-4 relative overflow-hidden flex flex-col justify-between"
              >
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 bg-[#031C44] text-[#D2B36B] rounded-xl flex items-center justify-center border border-[#B28A43]/40">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-3xl font-black text-gray-200">
                    {s.step}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#031C44] font-heading">
                    {s.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mt-2">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Why Mr.Nothing Section */}
      <section className="bg-white py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            badge="Brand Promise"
            title="Why Choose Mr.Nothing"
            subtitle="Built from the ground up for modern creators, athletes, and professionals."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyMrNothing.map((item, idx) => (
              <div key={idx} className="space-y-2 p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <div className="flex items-center space-x-2 text-[#062B67] font-bold">
                  <CheckCircle2 className="w-5 h-5 text-[#B28A43]" />
                  <span className="text-base font-heading">{item.title}</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed pl-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#031C44] rounded-3xl p-8 sm:p-12 text-white border border-[#B28A43]/40 shadow-2xl space-y-6">
          <h2 className="text-3xl font-bold font-heading text-white">
            Ready to explore our showcase collection?
          </h2>
          <p className="text-sm text-gray-300 max-w-xl mx-auto">
            Discover our curated catalogue of clothing, audio gear, home essentials, and daily accessories.
          </p>
          <div>
            <RouterLink
              to="/shop"
              className="inline-flex items-center space-x-2 bg-[#B28A43] hover:bg-[#D2B36B] text-white hover:text-[#031C44] px-8 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg"
            >
              <span>View The Collection</span>
              <ArrowRight className="w-4 h-4" />
            </RouterLink>
          </div>
        </div>
      </section>

    </div>
  );
}
