import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  PlusCircle, 
  Sparkles, 
  CheckCircle2, 
  ArrowLeft, 
  Eye, 
  Layers, 
  Image as ImageIcon,
  Tag,
  DollarSign
} from 'lucide-react';
import { categories } from '../data/categories';
import ProductCard from '../components/ProductCard';

export default function AddProduct() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: 'Wireless Ergonomic Earbuds',
    category: 'Electronics',
    categorySlug: 'electronics',
    price: 15999,
    originalPrice: 18999,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Active noise-cancelling wireless earbuds with titanium dynamic drivers and matte charging case.',
    description: 'Precision engineered audio system crafted with high-density titanium drivers and zero latency Bluetooth 5.4 connectivity. Designed for uninterrupted deep work and active training.',
    badge: 'New Release',
    features: 'Titanium Dynamic Drivers\n40-Hour Total Battery Life\nIPX7 Sweat & Water Resistance\nActive Noise Cancellation (ANC)',
    specifications: 'Material: Anodized Alloy & Matte Silicone\nConnectivity: Bluetooth 5.4\nBattery: 8h Earbuds + 32h Case\nWeight: 48g total'
  });

  const [submittedToast, setSubmittedToast] = useState(false);

  const handleCategoryChange = (e) => {
    const selectedName = e.target.value;
    const catObj = categories.find(c => c.name === selectedName);
    setFormData({
      ...formData,
      category: selectedName,
      categorySlug: catObj ? catObj.slug : selectedName.toLowerCase().replace(/\s+/g, '-')
    });
  };

  // Construct preview product object
  const previewProduct = {
    id: `preview-${Date.now()}`,
    slug: formData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    name: formData.name || 'Untitled Showcase Product',
    category: formData.category,
    categorySlug: formData.categorySlug,
    price: Number(formData.price) || 0,
    originalPrice: Number(formData.originalPrice) || 0,
    image: formData.image || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    shortDescription: formData.shortDescription || 'Short description will appear here.',
    description: formData.description,
    badge: formData.badge,
    rating: 5.0,
    reviewCount: 1,
    isShowcaseOnly: true
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // Save locally into localStorage for dynamic testing
      const existing = JSON.parse(localStorage.getItem('mr_nothing_custom_products') || '[]');
      localStorage.setItem('mr_nothing_custom_products', JSON.stringify([...existing, previewProduct]));
    } catch (e) {
      console.error(e);
    }

    setSubmittedToast(true);
    setTimeout(() => {
      setSubmittedToast(false);
      navigate('/shop');
    }, 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <Link 
            to="/admin" 
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#062B67] hover:text-[#B28A43] transition-colors mb-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Admin Dashboard</span>
          </Link>
          <div className="flex items-center space-x-3">
            <h1 className="text-3xl sm:text-4xl font-black font-heading text-[#031C44]">
              Add Showcase Product
            </h1>
            <span className="bg-[#B28A43] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Stitch Screen #1
            </span>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            Create new showcase entries with live card preview updates.
          </p>
        </div>
      </div>

      {submittedToast && (
        <div className="bg-emerald-950 text-white p-4 rounded-xl border border-emerald-400 flex items-center space-x-3 shadow-xl animate-in fade-in">
          <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
          <div>
            <span className="font-bold block text-sm">Product Created Successfully!</span>
            <span className="text-xs text-gray-300">Added to showcase list. Redirecting to Shop...</span>
          </div>
        </div>
      )}

      {/* Main Grid: Form Left, Preview Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Form Panel (8 Columns) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm space-y-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Product Title */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Product Title <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Wireless Earbuds Pro"
                className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#062B67]"
              />
            </div>

            {/* Category & Badge Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Category <span className="text-rose-500">*</span>
                </label>
                <select
                  value={formData.category}
                  onChange={handleCategoryChange}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-3.5 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#062B67]"
                >
                  {categories.map((c) => (
                    <option key={c.id} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Badge Overlay Tag
                </label>
                <select
                  value={formData.badge}
                  onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-3.5 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#062B67]"
                >
                  <option value="New Release">New Release</option>
                  <option value="Bestseller">Bestseller</option>
                  <option value="Core Essential">Core Essential</option>
                  <option value="Limited Drop">Limited Drop</option>
                  <option value="Showcase Only">Showcase Only</option>
                </select>
              </div>
            </div>

            {/* Pricing Row in INR */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Showcase Price (₹ INR) <span className="text-rose-500">*</span>
                </label>
                <input
                  type="number"
                  required
                  min="1"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#062B67]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Original List Price (₹ INR)
                </label>
                <input
                  type="number"
                  min="0"
                  value={formData.originalPrice}
                  onChange={(e) => setFormData({ ...formData, originalPrice: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#062B67]"
                />
              </div>
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Product Image URL <span className="text-rose-500">*</span>
              </label>
              <input
                type="url"
                required
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                placeholder="https://images.unsplash.com/..."
                className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-[#062B67]"
              />
            </div>

            {/* Short Description */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Short Description <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.shortDescription}
                onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                placeholder="Brief single sentence overview for product card..."
                className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#062B67]"
              />
            </div>

            {/* Features (Multiline) */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Key Features (One per line)
              </label>
              <textarea
                rows={3}
                value={formData.features}
                onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#062B67]"
              />
            </div>

            {/* Form Actions */}
            <div className="pt-4 flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-[#031C44] hover:bg-[#062B67] text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-lg transition-all flex items-center justify-center space-x-2 border border-[#B28A43]/40"
              >
                <PlusCircle className="w-4 h-4 text-[#D2B36B]" />
                <span>Save Showcase Product</span>
              </button>
            </div>

          </form>
        </div>

        {/* Live Preview Panel (5 Columns) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#031C44] text-white p-4 rounded-2xl border border-[#B28A43]/40 flex items-center justify-between shadow-md">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#D2B36B]">
              <Eye className="w-4 h-4" />
              <span>LIVE CARD PREVIEW (INR)</span>
            </div>
            <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded font-mono">REAL-TIME</span>
          </div>

          <div className="max-w-sm mx-auto">
            <ProductCard
              product={previewProduct}
              isWishlisted={false}
              onToggleWishlist={() => {}}
              onTriggerShowcaseModal={() => {}}
            />
          </div>
        </div>

      </div>

    </div>
  );
}
