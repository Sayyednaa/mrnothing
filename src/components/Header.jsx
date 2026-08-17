import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Heart, ShoppingBag, Menu, X, ArrowRight, ShieldAlert, Sun, Moon, Shield } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { useTheme } from '../context/ThemeContext';
import { useWishlist } from '../context/WishlistContext';
import { useShowcaseCart } from '../context/ShowcaseCartContext';
import { WishlistDrawer } from './WishlistDrawer';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlistOpen, setWishlistOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const { wishlistCount } = useWishlist();
  const { cartCount, triggerShowcaseModal } = useShowcaseCart();
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

  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Admin', path: '/admin' },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <>
      {/* Top Showcase Banner Notice */}
      <div className="bg-navy-dark text-white text-center py-2 px-4 text-xs font-medium border-b border-navy-muted flex items-center justify-center gap-2">
        <ShieldAlert className="w-3.5 h-3.5 text-gold-accent shrink-0" />
        <span>
          <strong className="text-gold-soft">ULTIMATE STOREFRONT:</strong> Product presentation & management portal. Contact: <a href={`mailto:${SITE_CONFIG.contact.email}`} className="underline hover:text-gold-soft">{SITE_CONFIG.contact.email}</a>
        </span>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled || !isHomePage
            ? 'bg-white/95 dark:bg-navy-dark/95 backdrop-blur-md shadow-sm border-b border-gray-200/80 dark:border-navy-muted text-navy-dark dark:text-white'
            : 'bg-navy-dark/90 backdrop-blur-md text-white border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left: Brand Logo */}
            <Link to="/" className="flex items-center gap-3 group" aria-label="Mr.Nothing homepage">
              <img
                src={SITE_CONFIG.logoPath}
                alt={SITE_CONFIG.logoAlt}
                className="h-10 w-auto rounded object-contain transition-transform group-hover:scale-105 border border-gold-accent/30"
              />
              <div className="hidden sm:flex flex-col">
                <span className={`font-display font-black text-xl tracking-tight leading-none ${
                  isScrolled || !isHomePage ? 'text-navy-dark dark:text-white' : 'text-white'
                }`}>
                  Mr.Nothing
                </span>
                <span className="text-[10px] font-bold tracking-widest text-gold-accent uppercase">
                  {SITE_CONFIG.tagline}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-semibold transition-colors duration-200 relative py-1 ${
                      isActive
                        ? 'text-gold-accent font-bold'
                        : isScrolled || !isHomePage
                        ? 'text-gray-700 dark:text-gray-200 hover:text-navy-deep dark:hover:text-gold-accent'
                        : 'text-gray-200 hover:text-white'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-accent rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-full transition-colors ${
                  isScrolled || !isHomePage
                    ? 'text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10'
                    : 'text-gray-200 hover:bg-white/10'
                }`}
                aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
                title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-gold-accent" />
                ) : (
                  <Moon className="w-5 h-5 text-navy-deep" />
                )}
              </button>

              {/* Search popup */}
              <div className="relative">
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className={`p-2.5 rounded-full transition-colors ${
                    isScrolled || !isHomePage
                      ? 'text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10'
                      : 'text-gray-200 hover:bg-white/10'
                  }`}
                  aria-label="Search items"
                >
                  <Search className="w-5 h-5" />
                </button>

                {searchOpen && (
                  <form
                    onSubmit={handleSearchSubmit}
                    className="absolute right-0 top-full mt-2 w-72 sm:w-80 bg-white dark:bg-navy-dark rounded-xl shadow-xl border border-gray-200 dark:border-navy-muted p-2 z-50 animate-fade-in"
                  >
                    <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-navy-surface rounded-lg">
                      <Search className="w-4 h-4 text-gray-400 shrink-0" />
                      <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-transparent text-sm text-gray-900 dark:text-white focus:outline-none placeholder-gray-400"
                        autoFocus
                      />
                      <button type="submit" className="text-xs font-bold text-navy-deep dark:text-gold-accent hover:underline">
                        Go
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Wishlist Button */}
              <button
                onClick={() => setWishlistOpen(true)}
                className={`relative p-2.5 rounded-full transition-colors ${
                  isScrolled || !isHomePage
                    ? 'text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10'
                    : 'text-gray-200 hover:bg-white/10'
                }`}
                aria-label="Open saved wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 w-5 h-5 bg-gold-accent text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Showcase Bag Button */}
              <button
                onClick={() => triggerShowcaseModal()}
                className={`relative p-2.5 rounded-full transition-colors ${
                  isScrolled || !isHomePage
                    ? 'text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10'
                    : 'text-gray-200 hover:bg-white/10'
                }`}
                aria-label="Showcase bag"
                title="Showcase Bag"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 w-5 h-5 bg-navy-deep text-gold-accent text-[11px] font-bold rounded-full flex items-center justify-center shadow border border-gold-accent/40">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Primary CTA */}
              <Link
                to="/shop"
                className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-navy-deep hover:bg-navy-dark text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg border border-gold-accent/30"
              >
                Explore Collection
                <ArrowRight className="w-4 h-4 text-gold-accent" />
              </Link>

              {/* Mobile menu hamburger toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden p-2 rounded-lg transition-colors ${
                  isScrolled || !isHomePage
                    ? 'text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10'
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label={mobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-navy-dark border-t border-navy-muted text-white px-6 py-6 space-y-4 animate-fade-in shadow-2xl">
            <div className="flex items-center justify-between border-b border-navy-muted pb-4">
              <div className="flex items-center gap-3">
                <img src={SITE_CONFIG.logoPath} alt={SITE_CONFIG.logoAlt} className="h-8 w-auto rounded" />
                <span className="font-display font-bold text-white text-lg">Mr.Nothing</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleTheme}
                  className="p-2 text-gray-300 hover:text-white rounded-lg bg-white/10"
                  aria-label="Toggle Theme"
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4 text-gold-accent" /> : <Moon className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-gray-400 hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <nav className="flex flex-col space-y-3 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                    location.pathname === link.path
                      ? 'bg-navy-deep text-gold-accent font-bold'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="pt-4 border-t border-navy-muted flex flex-col gap-3">
              <Link
                to="/shop"
                className="w-full py-3 bg-gold-accent hover:bg-gold-dark text-navy-dark font-bold text-center rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                Explore Collection
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Wishlist Drawer */}
      <WishlistDrawer isOpen={wishlistOpen} onClose={() => setWishlistOpen(false)} />
    </>
  );
};
