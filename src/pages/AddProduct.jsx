import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, CheckCircle2, Image as ImageIcon, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { SectionHeading } from '../components/SectionHeading';
import { useToast } from '../context/ToastContext';

export const AddProduct = () => {
  const navigate = useNavigate();
  const { addToast } = useToast();

  const [form, setForm] = useState({
    name: '',
    category: 'clothing',
    price: '',
    originalPrice: '',
    image: '',
    shortDescription: '',
    description: '',
    badge: 'New Arrival',
    features: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.price && form.shortDescription) {
      addToast(`Product "${form.name}" added to showcase inventory!`, 'success');
      setTimeout(() => {
        navigate('/admin');
      }, 800);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div>
        <Link
          to="/admin"
          className="inline-flex items-center gap-2 text-xs font-bold text-navy-deep dark:text-gold-soft hover:underline mb-4 uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Admin Dashboard
        </Link>
        <SectionHeading
          badge="Inventory Creation"
          title="Add New Showcase Product"
          subtitle="Publish a new product entry to the Mr.Nothing showcase catalogue."
        />
      </div>

      <div className="bg-white dark:bg-navy-dark p-8 sm:p-10 rounded-3xl border border-gray-200 dark:border-navy-muted shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="prod-name" className="block text-xs font-bold uppercase tracking-wider text-navy-dark dark:text-white mb-2">
                Product Title *
              </label>
              <input
                type="text"
                id="prod-name"
                name="name"
                required
                placeholder="e.g. Action Tactical Hoodie"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-surface-offwhite dark:bg-navy-surface border border-gray-200 dark:border-navy-muted rounded-xl text-sm text-navy-dark dark:text-white placeholder-gray-400 focus:outline-none focus:border-navy-deep dark:focus:border-gold-accent"
              />
            </div>

            <div>
              <label htmlFor="prod-category" className="block text-xs font-bold uppercase tracking-wider text-navy-dark dark:text-white mb-2">
                Category *
              </label>
              <select
                id="prod-category"
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-surface-offwhite dark:bg-navy-surface border border-gray-200 dark:border-navy-muted rounded-xl text-sm text-navy-dark dark:text-white focus:outline-none focus:border-navy-deep dark:focus:border-gold-accent cursor-pointer"
              >
                {CATEGORIES.map((c) => (
                  <option key={c.slug} value={c.slug}>{c.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label htmlFor="prod-price" className="block text-xs font-bold uppercase tracking-wider text-navy-dark dark:text-white mb-2">
                Sample Price (₹) *
              </label>
              <input
                type="number"
                id="prod-price"
                name="price"
                required
                placeholder="e.g. 2999"
                value={form.price}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-surface-offwhite dark:bg-navy-surface border border-gray-200 dark:border-navy-muted rounded-xl text-sm text-navy-dark dark:text-white placeholder-gray-400 focus:outline-none focus:border-navy-deep dark:focus:border-gold-accent"
              />
            </div>

            <div>
              <label htmlFor="prod-origprice" className="block text-xs font-bold uppercase tracking-wider text-navy-dark dark:text-white mb-2">
                Original Price (₹)
              </label>
              <input
                type="number"
                id="prod-origprice"
                name="originalPrice"
                placeholder="e.g. 3499"
                value={form.originalPrice}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-surface-offwhite dark:bg-navy-surface border border-gray-200 dark:border-navy-muted rounded-xl text-sm text-navy-dark dark:text-white placeholder-gray-400 focus:outline-none focus:border-navy-deep dark:focus:border-gold-accent"
              />
            </div>

            <div>
              <label htmlFor="prod-badge" className="block text-xs font-bold uppercase tracking-wider text-navy-dark dark:text-white mb-2">
                Badge Label
              </label>
              <input
                type="text"
                id="prod-badge"
                name="badge"
                placeholder="e.g. Flagship, Best Seller"
                value={form.badge}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-surface-offwhite dark:bg-navy-surface border border-gray-200 dark:border-navy-muted rounded-xl text-sm text-navy-dark dark:text-white placeholder-gray-400 focus:outline-none focus:border-navy-deep dark:focus:border-gold-accent"
              />
            </div>
          </div>

          <div>
            <label htmlFor="prod-image" className="block text-xs font-bold uppercase tracking-wider text-navy-dark dark:text-white mb-2">
              Image URL
            </label>
            <div className="flex gap-3">
              <input
                type="url"
                id="prod-image"
                name="image"
                placeholder="https://images.unsplash.com/photo-..."
                value={form.image}
                onChange={handleChange}
                className="flex-1 px-4 py-3 bg-surface-offwhite dark:bg-navy-surface border border-gray-200 dark:border-navy-muted rounded-xl text-sm text-navy-dark dark:text-white placeholder-gray-400 focus:outline-none focus:border-navy-deep dark:focus:border-gold-accent"
              />
            </div>
          </div>

          <div>
            <label htmlFor="prod-shortdesc" className="block text-xs font-bold uppercase tracking-wider text-navy-dark dark:text-white mb-2">
              Short Summary *
            </label>
            <input
              type="text"
              id="prod-shortdesc"
              name="shortDescription"
              required
              placeholder="Brief 1-sentence product summary"
              value={form.shortDescription}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-surface-offwhite dark:bg-navy-surface border border-gray-200 dark:border-navy-muted rounded-xl text-sm text-navy-dark dark:text-white placeholder-gray-400 focus:outline-none focus:border-navy-deep dark:focus:border-gold-accent"
            />
          </div>

          <div>
            <label htmlFor="prod-desc" className="block text-xs font-bold uppercase tracking-wider text-navy-dark dark:text-white mb-2">
              Full Description
            </label>
            <textarea
              id="prod-desc"
              name="description"
              rows={4}
              placeholder="Detailed product story and engineering specifications..."
              value={form.description}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-surface-offwhite dark:bg-navy-surface border border-gray-200 dark:border-navy-muted rounded-xl text-sm text-navy-dark dark:text-white placeholder-gray-400 focus:outline-none focus:border-navy-deep dark:focus:border-gold-accent"
            />
          </div>

          <div className="pt-4 flex items-center justify-end gap-4">
            <Link
              to="/admin"
              className="px-6 py-3 bg-surface-offwhite dark:bg-navy-surface hover:bg-gray-200 dark:hover:bg-navy-muted text-navy-dark dark:text-white text-xs font-bold rounded-xl transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-8 py-3 bg-navy-deep dark:bg-gold-accent hover:bg-navy-dark dark:hover:bg-gold-dark text-white dark:text-navy-dark text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Publish Product to Showcase
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
