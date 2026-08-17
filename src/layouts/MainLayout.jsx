import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ShowcaseModal } from '../components/ShowcaseModal';

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-surface-offwhite text-text-primary">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ShowcaseModal />
    </div>
  );
};
