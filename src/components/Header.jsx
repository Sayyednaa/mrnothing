import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Heart, ShoppingBag, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { BRAND } from '../data/constants';
import SearchBar from './SearchBar';

export default function Header({ 
  wishlistCount = 0, 
  onTriggerShowcaseModal 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [headerSearch, setHeaderSearch] = useState('');
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleHeaderSearchSubmit = (e) => {
    e.preventDefault();
    if (headerSearch.trim()) {
      navigate(`/shop?search=${encodeURIComponent(headerSearch.trim())}`);
      setIsSearchOpen(false);
    }
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200/80 py-3' 
        : 'bg-[#F7F8FA] border-b border-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-[#062B67] rounded-lg p-1">
            <img 
              src={BRAND.logoPath} 
              alt={BRAND.logoAlt}
              className="h-10 w-auto object-contain rounded transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl tracking-tight text-[#031C44] group-hover:text-[#062B67] transition-colors">
                MR.NOTHING
              </span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#B28A43]">
                {BRAND.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold transition-colors duration-200 ${
                    isActive 
                      ? 'text-[#062B67] border-b-2 border-[#B28A43] pb-1' 
                      : 'text-gray-600 hover:text-[#062B67]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Action Bar */}
          <div className="hidden lg:flex items-center space-x-5">
            {/* Search Icon Trigger */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-600 hover:text-[#062B67] hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Search items"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Icon */}
            <Link
              to="/shop"
              className="relative p-2 text-gray-600 hover:text-rose-600 hover:bg-rose-50 rounded-full transition-colors"
              aria-label="Wishlist items"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-rose-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Showcase Bag Button */}
            <button
              onClick={() => onTriggerShowcaseModal('Showcase Bag')}
              className="relative p-2 text-gray-600 hover:text-[#062B67] hover:bg-blue-50 rounded-full transition-colors"
              aria-label="Showcase Bag"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-[#B28A43] rounded-full animate-ping" />
            </button>

            {/* Primary CTA */}
            <Link
              to="/shop"
              className="py-2.5 px-5 bg-[#062B67] hover:bg-[#031C44] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center space-x-2"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D2B36B]" />
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-full"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-800 hover:bg-gray-100 rounded-xl transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Expandable Search Drawer */}
        {isSearchOpen && (
          <form onSubmit={handleHeaderSearchSubmit} className="mt-4 pt-3 border-t border-gray-200 animate-fadeIn">
            <SearchBar 
              searchQuery={headerSearch}
              setSearchQuery={setHeaderSearch}
              placeholder="Search products and press enter..."
            />
          </form>
        )}
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/50 backdrop-blur-sm animate-fadeIn" onClick={() => setIsMobileMenuOpen(false)}>
          <div 
            className="absolute top-0 right-0 w-4/5 max-w-sm h-full bg-white shadow-2xl p-6 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                <div className="flex items-center space-x-2">
                  <img src={BRAND.logoPath} alt={BRAND.logoAlt} className="h-8 w-auto" />
                  <span className="font-display font-bold text-lg text-[#031C44]">MR.NOTHING</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-500 hover:bg-gray-100 rounded-full"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 rounded-xl font-semibold text-sm transition-colors ${
                      location.pathname === link.path
                        ? 'bg-blue-50 text-[#062B67]'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 space-y-3">
              <Link
                to="/shop"
                className="w-full py-3 bg-[#062B67] text-white rounded-xl text-center font-bold text-xs uppercase tracking-wider block"
              >
                Explore Collection
              </Link>
              <p className="text-[11px] text-center text-gray-400">
                Product Showcase Platform
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
