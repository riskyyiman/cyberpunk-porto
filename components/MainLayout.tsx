'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from '@/components/sidebar';
import MobileNav from '@/components/MobileNav';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
// Import ContactSection jika sudah dipisah

export default function MainLayout() {
  const [activeTab, setActiveTab] = useState('home');

  // Fungsi helper untuk merender konten berdasarkan state
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HeroSection onNavigate={setActiveTab} />;
      case 'about':
        return <AboutSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'contact':
        return <div className="p-10 text-center">Contact Section Content Here</div>;
      default:
        return <HeroSection onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-green-500/30">
      <MobileNav
        activeTab={''}
        setActiveTab={function (id: string): void {
          throw new Error('Function not implemented.');
        }}
      />

      {/* Sidebar Desktop */}
      <Sidebar className="hidden lg:flex" activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="lg:pl-72 min-h-screen relative overflow-hidden">
        {/* Background Grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none -z-10" />
        <div className="fixed top-0 left-0 right-0 h-32 bg-linear-to-b from-black to-transparent z-40 pointer-events-none lg:left-72" />

        <div className="p-6 md:p-12 max-w-6xl mx-auto pt-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
