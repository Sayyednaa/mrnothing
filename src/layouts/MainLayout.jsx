import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ShowcaseNoticeModal from '../components/ShowcaseNoticeModal';

export default function MainLayout() {
  const { pathname } = useLocation();
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('mr_nothing_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalItemName, setModalItemName] = useState('');

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  // Persist wishlist
  useEffect(() => {
    try {
      localStorage.setItem('mr_nothing_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error('Failed to save wishlist:', e);
    }
  }, [wishlist]);

  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const triggerShowcaseModal = (itemName = '') => {
    setModalItemName(itemName);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8FA] text-[#111827]">
      <Header 
        wishlistCount={wishlist.length} 
        wishlistIds={wishlist}
        onToggleWishlist={toggleWishlist}
        onTriggerShowcaseModal={triggerShowcaseModal}
      />
      <main className="flex-grow">
        <Outlet context={{ 
          wishlist, 
          toggleWishlist, 
          triggerShowcaseModal 
        }} />
      </main>
      <Footer />
      
      <ShowcaseNoticeModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        itemName={modalItemName}
      />
    </div>
  );
}
