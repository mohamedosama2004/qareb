import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';

// Pages
import Home from './pages/Home';
import Discover from './pages/Discover';
import Schedule from './pages/Schedule';
import LessonDetail from './pages/LessonDetail';
import AdminUpload from './pages/AdminUpload';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      {children}
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <div className="mobile-container no-scrollbar pb-20">
        <Header />
        <main className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar">
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/lesson/:id" element={<LessonDetail />} />
              <Route path="/admin-upload" element={<AdminUpload />} />
              <Route path="/about" element={<div className="p-10 text-center font-bold text-primary">قريباً...</div>} />
            </Routes>
          </PageTransition>
        </main>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}
