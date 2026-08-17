import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, 
  Layers, 
  Heart, 
  ShieldCheck, 
  PlusCircle, 
  Search, 
  Trash2, 
  Eye, 
  Star, 
  SlidersHorizontal,
  Sparkles,
  Check,
  X
} from 'lucide-react';
import { products as initialProducts } from '../data/products';
import { categories } from '../data/categories';
import { formatPrice } from '../data/constants';

export default function AdminDashboard() {
  const [productList, setProductList] = useState(() => {
    try {
      const custom = JSON.parse(localStorage.getItem('mr_nothing_custom_products') || '[]');
      return [...initialProducts, ...custom];
    } catch {
      return initialProducts;
    }
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Toggle Featured Status locally
  const toggleFeatured = (id) => {
    setProductList(prev => prev.map(p => p.id === id ? { ...p, featured: !p.featured } : p));
  };

  // Delete product locally
  const handleDeleteProduct = (id) => {
    if (window.confirm("Are you sure you want to remove this showcase product entry?")) {
      setProductList(prev => prev.filter(p => p.id !== id));
    }
  };

  // Filtered product table list
  const filteredProducts = useMemo(() => {
    return productList.filter(p => {
      const matchesSearch = searchTerm === '' || 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === 'all' || p.categorySlug === categoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [productList, searchTerm, categoryFilter]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      
      {/* Dashboard Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#031C44] rounded-3xl p-8 text-white border border-[#B28A43]/30 shadow-2xl relative overflow-hidden">
        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full text-xs text-[#D2B36B] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>STITCH SCREEN #4 &bull; CONTROL PORTAL</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black font-heading text-white">
            Admin Dashboard
          </h1>

          <p className="text-xs sm:text-sm text-gray-300">
            Manage product showcase inventory, feature status, and system metrics.
          </p>
        </div>

        <div className="relative z-10 shrink-0">
          <Link
            to="/add-product"
            className="inline-flex items-center space-x-2 bg-[#B28A43] hover:bg-[#D2B36B] text-white hover:text-[#031C44] px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg border border-white/20"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Add Showcase Item</span>
          </Link>
        </div>
      </div>

      {/* Metric Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Metric 1: Total Items */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider text-gray-500 font-bold block">
              Total Showcase Items
            </span>
            <span className="text-3xl font-black text-[#031C44] font-mono mt-1 block">
              {productList.length}
            </span>
            <span className="text-[10px] text-emerald-600 font-semibold block mt-1">
              Active in Storefront
            </span>
          </div>
          <div className="w-12 h-12 bg-[#062B67]/10 text-[#062B67] rounded-xl flex items-center justify-center border border-[#B28A43]/20">
            <Package className="w-6 h-6 text-[#B28A43]" />
          </div>
        </div>

        {/* Metric 2: Active Categories */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider text-gray-500 font-bold block">
              Active Categories
            </span>
            <span className="text-3xl font-black text-[#031C44] font-mono mt-1 block">
              {categories.length}
            </span>
            <span className="text-[10px] text-gray-500 font-semibold block mt-1">
              Clothing, Tech, Home, Upgrades
            </span>
          </div>
          <div className="w-12 h-12 bg-[#062B67]/10 text-[#062B67] rounded-xl flex items-center justify-center border border-[#B28A43]/20">
            <Layers className="w-6 h-6 text-[#B28A43]" />
          </div>
        </div>

        {/* Metric 3: Wishlist Activity */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider text-gray-500 font-bold block">
              Wishlist Views
            </span>
            <span className="text-3xl font-black text-[#031C44] font-mono mt-1 block">
              1,420
            </span>
            <span className="text-[10px] text-[#B28A43] font-semibold block mt-1">
              +18% from showcase traffic
            </span>
          </div>
          <div className="w-12 h-12 bg-[#062B67]/10 text-[#062B67] rounded-xl flex items-center justify-center border border-[#B28A43]/20">
            <Heart className="w-6 h-6 text-rose-500" />
          </div>
        </div>

        {/* Metric 4: System Mode Status */}
        <div className="bg-[#031C44] text-white rounded-2xl border border-[#B28A43]/40 p-6 shadow-md flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#D2B36B] font-bold block">
              System Mode
            </span>
            <span className="text-lg font-bold font-heading text-white mt-1 block">
              Showcase Active
            </span>
            <span className="text-[10px] text-emerald-400 font-mono block mt-1 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Non-Commercial Operations
            </span>
          </div>
          <div className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center border border-white/20">
            <ShieldCheck className="w-6 h-6 text-[#D2B36B]" />
          </div>
        </div>

      </div>

      {/* Product Management Section */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden space-y-4">
        
        {/* Table Filters Header */}
        <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by title or category..."
              className="w-full bg-gray-50 border border-gray-300 rounded-xl pl-10 pr-4 py-2 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#062B67]"
            />
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <label className="text-xs font-bold text-gray-500 uppercase">Category Filter:</label>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="bg-gray-50 border border-gray-300 rounded-xl px-3 py-2 text-xs font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#062B67]"
            >
              <option value="all">All Categories</option>
              {categories.map(c => (
                <option key={c.id} value={c.slug}>{c.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-[11px] font-bold uppercase tracking-wider text-gray-500 border-b border-gray-200">
                <th className="py-3.5 px-6">Product Item</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">Showcase Price (INR)</th>
                <th className="py-3.5 px-4">Badge</th>
                <th className="py-3.5 px-4">Featured</th>
                <th className="py-3.5 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
              {filteredProducts.map((prod) => (
                <tr key={prod.id} className="hover:bg-gray-50/80 transition-colors">
                  
                  {/* Thumbnail & Title */}
                  <td className="py-3.5 px-6">
                    <div className="flex items-center space-x-3">
                      <img 
                        src={prod.image} 
                        alt={prod.name}
                        className="w-10 h-10 object-cover rounded-lg border border-gray-200 bg-gray-100 shrink-0"
                      />
                      <div>
                        <span className="font-bold text-[#031C44] block line-clamp-1">
                          {prod.name}
                        </span>
                        <span className="text-[10px] text-gray-400 font-mono">
                          ID: {prod.id}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="py-3.5 px-4 font-medium text-gray-700">
                    {prod.category}
                  </td>

                  {/* Price in INR */}
                  <td className="py-3.5 px-4 font-mono font-bold text-[#031C44]">
                    {formatPrice(prod.price)}
                  </td>

                  {/* Badge */}
                  <td className="py-3.5 px-4">
                    <span className="bg-[#031C44] text-white text-[10px] font-bold px-2 py-0.5 rounded border border-[#B28A43]/40">
                      {prod.badge || 'Showcase'}
                    </span>
                  </td>

                  {/* Featured Status Toggle */}
                  <td className="py-3.5 px-4">
                    <button
                      onClick={() => toggleFeatured(prod.id)}
                      className={`p-1.5 rounded-lg border transition-all flex items-center space-x-1 text-xs font-semibold ${
                        prod.featured 
                          ? 'bg-amber-50 text-amber-800 border-amber-300' 
                          : 'bg-gray-100 text-gray-400 border-gray-200'
                      }`}
                    >
                      <Star className={`w-3.5 h-3.5 ${prod.featured ? 'fill-current text-amber-500' : ''}`} />
                      <span>{prod.featured ? 'Featured' : 'Standard'}</span>
                    </button>
                  </td>

                  {/* Action Buttons */}
                  <td className="py-3.5 px-6 text-right space-x-2">
                    <Link
                      to={`/product/${prod.slug}`}
                      className="inline-flex items-center p-2 text-gray-600 hover:text-[#062B67] hover:bg-gray-100 rounded-lg transition-colors"
                      title="View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </Link>

                    <button
                      onClick={() => handleDeleteProduct(prod.id)}
                      className="p-2 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                      title="Delete Product"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
}
