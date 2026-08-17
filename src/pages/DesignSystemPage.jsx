import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  ShoppingBag, 
  Heart, 
  Eye, 
  SlidersHorizontal,
  Compass,
  Zap,
  ArrowRight,
  Info
} from 'lucide-react';
import { COLORS, BRAND } from '../data/constants';
import ShowcaseNoticeModal from '../components/ShowcaseNoticeModal';
import SectionHeading from '../components/SectionHeading';

export default function DesignSystemPage() {
  const [copiedHex, setCopiedHex] = useState('');
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const copyToClipboard = (hex) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(hex);
      setCopiedHex(hex);
      setTimeout(() => setCopiedHex(''), 2500);
    }
  };

  const palette = [
    { name: 'Deep Navy', hex: '#062B67', usage: 'Primary Header & Branding Background', textDark: false },
    { name: 'Dark Navy', hex: '#031C44', usage: 'Hero Sections, Buttons & Footers', textDark: false },
    { name: 'Accent Gold', hex: '#B28A43', usage: 'Primary CTA Highlights & Accents', textDark: false },
    { name: 'Soft Gold', hex: '#D2B36B', usage: 'Taglines, Badges & Subtitles', textDark: true },
    { name: 'White', hex: '#FFFFFF', usage: 'Card Backgrounds & Pure Contrast', textDark: true },
    { name: 'Off-White', hex: '#F7F8FA', usage: 'Global App Canvas Background', textDark: true },
    { name: 'Dark Text', hex: '#111827', usage: 'Primary Paragraphs & Titles', textDark: false },
    { name: 'Muted Text', hex: '#64748B', usage: 'Subtitles & Micro Copy', textDark: false },
    { name: 'Border Gray', hex: '#E5E7EB', usage: 'Card Separators & Component Borders', textDark: true }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* 1. Header Banner */}
      <div className="bg-[#031C44] rounded-3xl p-8 sm:p-12 text-white border border-[#B28A43]/40 shadow-2xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#B28A43]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full text-xs text-[#D2B36B] font-semibold border border-white/10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>STITCH SCREEN #7 &bull; BRAND GUIDE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white">
            Mr.Nothing Design System
          </h1>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Architectural tokens, color palette swatches, typography hierarchies, component specs, and UI patterns for the Mr.Nothing storefront ecosystem.
          </p>
        </div>
      </div>

      {copiedHex && (
        <div className="fixed bottom-6 right-6 bg-[#031C44] text-white text-xs px-4 py-3 rounded-xl shadow-2xl border border-[#B28A43]/50 flex items-center space-x-2 z-50 animate-in fade-in">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>Copied color hex <strong>{copiedHex}</strong> to clipboard!</span>
        </div>
      )}

      {/* 2. Color Palette Swatches */}
      <section className="space-y-6">
        <SectionHeading 
          badge="Color Hierarchy"
          title="Brand Color Palette"
          subtitle="Click any color swatch to copy its exact HEX code."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {palette.map((color) => (
            <div 
              key={color.hex}
              onClick={() => copyToClipboard(color.hex)}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group"
            >
              <div 
                className="h-28 w-full p-4 flex items-end justify-between relative transition-transform group-hover:scale-105"
                style={{ backgroundColor: color.hex }}
              >
                <span className={`text-xs font-mono font-bold px-2 py-1 rounded backdrop-blur-md ${color.textDark ? 'bg-black/10 text-gray-900' : 'bg-white/20 text-white'}`}>
                  {color.hex}
                </span>
                <Copy className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${color.textDark ? 'text-gray-900' : 'text-white'}`} />
              </div>
              <div className="p-4 space-y-1">
                <h4 className="font-bold text-[#031C44] font-heading text-base">
                  {color.name}
                </h4>
                <p className="text-xs text-gray-500">
                  {color.usage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Typography Specimen */}
      <section className="space-y-6">
        <SectionHeading 
          badge="Typography Systems"
          title="Font Hierarchies & Scale"
          subtitle="Built using clean sans-serif typography with high contrast uppercase mono details."
        />

        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 space-y-8 shadow-sm">
          
          <div className="border-b border-gray-100 pb-6 space-y-2">
            <span className="text-xs font-mono text-gray-400">Heading 1 &bull; font-black font-heading</span>
            <h1 className="text-4xl sm:text-5xl font-black text-[#031C44]">
              Make Every Move Count.
            </h1>
          </div>

          <div className="border-b border-gray-100 pb-6 space-y-2">
            <span className="text-xs font-mono text-gray-400">Heading 2 &bull; font-extrabold font-heading</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#031C44]">
              "Nothing ordinary. Everything intentional."
            </h2>
          </div>

          <div className="border-b border-gray-100 pb-6 space-y-2">
            <span className="text-xs font-mono text-gray-400">Heading 3 &bull; font-bold</span>
            <h3 className="text-xl font-bold text-[#031C44]">
              Wireless Ergonomic Audio System
            </h3>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-gray-400">Body & Monospace Details</span>
            <p className="text-sm text-gray-700 leading-relaxed max-w-2xl">
              Engineered from heavy 340gsm organic twill. Features concealed tech storage pockets, reinforced seams, and matte metallic snap closures.
            </p>
            <div className="pt-2 flex gap-3 font-mono text-xs text-[#B28A43]">
              <span>[SHOWCASE_MODE]</span>
              <span>[SPECS_VERIFIED]</span>
              <span>[2026_COLLECTION]</span>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Buttons & Interactive Controls */}
      <section className="space-y-6">
        <SectionHeading 
          badge="Interactive UI"
          title="Button Specs & CTA Variants"
        />

        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Primary Gold CTA */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-gray-400">Primary Accent CTA</span>
            <button className="w-full bg-[#B28A43] hover:bg-[#D2B36B] text-white hover:text-[#031C44] py-3.5 px-6 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center space-x-2">
              <ShoppingBag className="w-4 h-4" />
              <span>Primary Gold CTA</span>
            </button>
          </div>

          {/* Secondary Navy CTA */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-gray-400">Secondary Dark Navy</span>
            <button className="w-full bg-[#031C44] hover:bg-[#062B67] text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center space-x-2 border border-[#B28A43]/40">
              <Sparkles className="w-4 h-4 text-[#D2B36B]" />
              <span>Secondary Navy CTA</span>
            </button>
          </div>

          {/* Glass / Outline CTA */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-gray-400">Outline / Glass Button</span>
            <button className="w-full bg-gray-100 hover:bg-gray-200 text-[#031C44] py-3.5 px-6 rounded-xl font-bold text-sm transition-all border border-gray-300">
              <span>Outline Action</span>
            </button>
          </div>

        </div>
      </section>

      {/* 5. Glassmorphism Panels & Modal Preview */}
      <section className="space-y-6">
        <SectionHeading 
          badge="Overlay Mechanics"
          title="Glassmorphism & Modal Preview"
        />

        <div className="bg-[#031C44] rounded-3xl p-8 sm:p-12 text-white border border-[#B28A43]/40 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold font-heading text-white">
              Test Showcase Notice Modal
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              Click the button on the right to trigger the interactive non-commercial showcase modal.
            </p>
          </div>

          <button
            onClick={() => setDemoModalOpen(true)}
            className="bg-[#B28A43] hover:bg-[#D2B36B] text-white hover:text-[#031C44] px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-xl shrink-0"
          >
            Trigger Modal Preview
          </button>
        </div>

        <ShowcaseNoticeModal
          isOpen={demoModalOpen}
          onClose={() => setDemoModalOpen(false)}
          itemName="Wireless Earbuds Pro"
        />
      </section>

    </div>
  );
}
