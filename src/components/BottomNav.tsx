import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Compass, Calendar, Info, User } from 'lucide-react';

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-100 flex items-center justify-around py-3 px-2 z-50 rounded-t-2xl shadow-[0_-4px_10px_rgba(0,0,0,0.05)]" dir="rtl">
      <NavLink 
        to="/" 
        className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
      >
        <Home size={22} strokeWidth={isActive => isActive ? 2.5 : 2} />
        <span className="text-[10px] font-medium">الرئيسية</span>
      </NavLink>
      <NavLink 
        to="/discover" 
        className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
      >
        <Compass size={22} strokeWidth={isActive => isActive ? 2.5 : 2} />
        <span className="text-[10px] font-medium">الدروس</span>
      </NavLink>
      <NavLink 
        to="/schedule" 
        className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
      >
        <Calendar size={22} strokeWidth={isActive => isActive ? 2.5 : 2} />
        <span className="text-[10px] font-medium">الجدول</span>
      </NavLink>
      <NavLink 
        to="/about" 
        className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
      >
        <Info size={22} strokeWidth={isActive => isActive ? 2.5 : 2} />
        <span className="text-[10px] font-medium">عن المنصة</span>
      </NavLink>
    </nav>
  );
};

export default BottomNav;
