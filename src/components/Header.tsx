import React from 'react';
import { Search, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-gray-50" dir="rtl">
      <div className="flex items-center gap-2">
        <div className="bg-primary-light p-2 rounded-xl">
           <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
             <div className="w-3 h-3 border-2 border-white rounded-sm rotate-45"></div>
           </div>
        </div>
        <span className="font-bold text-xl text-primary font-arabic">قريب</span>
      </div>
      <div className="flex items-center gap-3">
        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
          <Search size={24} />
        </button>
        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
