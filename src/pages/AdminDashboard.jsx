import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, LayoutDashboard, Package, Eye, Heart, Layers, Edit, Trash2, ExternalLink, ShieldCheck, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { formatPrice } from '../config/site';
import { SectionHeading } from '../components/SectionHeading';
import { useToast } from '../context/ToastContext';

export const AdminDashboard = () => {
  const [productList, setProductList] = useState(PRODUCTS);
  const [searchTerm, setSearchTerm] = useState('');
  const { addToast } = useToast();

  const handleDelete = (id, name) => {
    setProductList((prev) => prev.filter((p) => p.id !== id));
    addToast(`Removed "${name}" from showcase inventory (Demo action)`, 'info');
  };

  const filtered = productList.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header & Quick Action */}
      <SectionHeading
        badge="Stitch Admin Portal"
        title="Storefront Dashboard"
        subtitle="Manage product listings, track showcase interactions, and configure catalogue entries."
        action={
          <Link
            to="/admin/add-product"
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy-deep dark:bg-gold-accent text-white dark:text-navy-dark text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all border border-gold-accent/30"
          >
            <Plus className="w-4 h-4" />
            Add New Product
          </Link>
        }
      />

      {/* Analytics KPI Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 bg-white dark:bg-navy-dark rounded-2xl border border-gray-200 dark:border-navy-muted shadow-sm space-y-2">
          <div className="flex items-center justify-between text-navy-deep dark:text-gold-accent">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Total Products</span>
            <Package className="w-5 h-5" />
          </div>
          <p className="text-3xl font-black font-display text-navy-dark dark:text-white">{productList.length}</p>
          <p className="text-[11px] text-gray-500 dark:text-gray-400">100% Showcase Ready</p>
        </div>

        <div className="p-6 bg-white dark:bg-navy-dark rounded-2xl border border-gray-200 dark:border-navy-muted shadow-sm space-y-2">
          <div className="flex items-center justify-between text-navy-deep dark:text-gold-accent">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Categories</span>
            <Layers className="w-5 h-5" />
          </div>
          <p className="text-3xl font-black font-display text-navy-dark dark:text-white">4</p>
          <p className="text-[11px] text-gray-500 dark:text-gray-400">Clothing, Tech, Home, Gear</p>
        </div>

        <div className="p-6 bg-white dark:bg-navy-dark rounded-2xl border border-gray-200 dark:border-navy-muted shadow-sm space-y-2">
          <div className="flex items-center justify-between text-navy-deep dark:text-gold-accent">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Showcase Impressions</span>
            <Eye className="w-5 h-5" />
          </div>
          <p className="text-3xl font-black font-display text-navy-dark dark:text-white">14,290</p>
          <p className="text-[11px] text-emerald-600 font-semibold">+18% this month</p>
        </div>

        <div className="p-6 bg-white dark:bg-navy-dark rounded-2xl border border-gray-200 dark:border-navy-muted shadow-sm space-y-2">
          <div className="flex items-center justify-between text-navy-deep dark:text-gold-accent">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Wishlist Saves</span>
            <Heart className="w-5 h-5" />
          </div>
          <p className="text-3xl font-black font-display text-navy-dark dark:text-white">1,840</p>
          <p className="text-[11px] text-gold-accent font-semibold">High User Intent</p>
        </div>
      </div>

      {/* Inventory Management Table */}
      <div className="bg-white dark:bg-navy-dark rounded-2xl border border-gray-200 dark:border-navy-muted shadow-md overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-navy-muted flex flex-col sm:flex-row items-center justify-between gap-4">
          <h3 className="text-xl font-bold font-display text-navy-dark dark:text-white">
            Catalogue Inventory ({filtered.length})
          </h3>
          <input
            type="text"
            placeholder="Search by name or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-72 px-4 py-2 bg-surface-offwhite dark:bg-navy-surface border border-gray-200 dark:border-navy-muted rounded-xl text-xs text-navy-dark dark:text-white focus:outline-none placeholder-gray-400"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-surface-offwhite dark:bg-navy-surface text-gray-500 dark:text-gray-300 font-bold uppercase tracking-wider border-b border-gray-200 dark:border-navy-muted">
              <tr>
                <th className="p-4">Product</th>
                <th className="p-4">Category</th>
                <th className="p-4">Sample Price</th>
                <th className="p-4">Badge</th>
                <th className="p-4">Rating</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-navy-muted text-gray-700 dark:text-gray-200">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-navy-surface/50 transition-colors">
                  <td className="p-4 flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-lg border border-gray-200 dark:border-navy-muted shrink-0"
                    />
                    <div>
                      <span className="font-bold text-navy-dark dark:text-white block">{item.name}</span>
                      <span className="text-[10px] text-gray-400">ID: {item.id}</span>
                    </div>
                  </td>
                  <td className="p-4 font-semibold text-navy-deep dark:text-gold-accent">{item.category}</td>
                  <td className="p-4 font-extrabold">{formatPrice(item.price)}</td>
                  <td className="p-4">
                    {item.badge ? (
                      <span className="px-2.5 py-1 bg-navy-deep/10 dark:bg-white/10 text-navy-deep dark:text-gold-soft font-bold rounded-md border border-navy-deep/20 text-[10px]">
                        {item.badge}
                      </span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="p-4 font-bold text-amber-500">★ {item.rating}</td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        to={`/product/${item.slug}`}
                        className="p-2 text-gray-400 hover:text-navy-deep dark:hover:text-gold-accent rounded-lg hover:bg-gray-100 dark:hover:bg-navy-surface"
                        title="Preview details"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => handleDelete(item.id, item.name)}
                        className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/30"
                        title="Delete product"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
