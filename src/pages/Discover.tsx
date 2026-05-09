import React from 'react';
import { motion } from 'motion/react';
import { Search, SlidersHorizontal, ChevronRight, ChevronLeft, Clock, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Discover = () => {
  const navigate = useNavigate();
  const categories = ['الكل', 'تفسير القرآن', 'السيرة النبوية', 'الفقه الميسر', 'د. محمد العوضي', 'الشيخ صالح الفوزان'];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="pb-24 pt-4 px-4"
      dir="rtl"
    >
      <h1 className="text-4xl font-extrabold text-primary mb-2 text-center tracking-tight leading-tight">
        اكتشف العلم والإيمان
      </h1>
      <p className="text-gray-400 text-sm text-center mb-8 px-4">
        ابحث في مكتبة الدروس والمحاضرات التعليمية الموثوقة
      </p>

      {/* Search & Filter */}
      <div className="relative mb-6">
        <input 
          type="text" 
          placeholder="ابحث عن درس، شيخ، أو موضوع..." 
          className="w-full bg-white border border-gray-100 rounded-2xl py-4 pr-12 pl-12 text-sm shadow-sm focus:border-primary outline-none transition-all placeholder:text-gray-300"
        />
        <Search className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-300" size={20} />
        <SlidersHorizontal className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-300" size={20} />
      </div>

      {/* Categories Scroller */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-6 -mx-2 px-2">
        {categories.map((cat, i) => (
          <button 
            key={i} 
            className={`whitespace-nowrap px-6 py-2.5 rounded-full text-xs font-bold transition-all border ${
              i === 0 
                ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' 
                : 'bg-white text-gray-500 border-gray-100 hover:border-primary/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 gap-6 mt-4">
        {[
          { id: 1, title: 'مقاصد سورة البقرة في بناء المجتمع المسلم', lecturer: 'الشيخ د. عبد الله بن يوسف', date: '١٢ رجب ١٤٤٥ هـ', image: 'https://images.unsplash.com/photo-1591608971362-f08b2a75731a?auto=format&fit=crop&q=80&w=800', featured: true },
          { id: 2, title: 'آداب تلاوة القرآن الكريم', lecturer: 'الشيخ عمر الخالد', date: '١٠ رجب ١٤٤٥ هـ', image: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=400' },
          { id: 3, title: 'شرح الأربعين النووية - الدرس الأول', lecturer: 'د. إبراهيم العسيري', date: '٠٨ رجب ١٤٤٥ هـ', image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=400' },
          { id: 4, title: 'فقه العبادات في الشتاء', lecturer: 'الشيخ منصور الأحمد', date: '٠٥ رجب ١٤٤٥ هـ', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400' }
        ].map((item, idx) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => navigate(`/lesson/${item.id}`)}
            className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer"
          >
            <div className="relative aspect-video overflow-hidden">
              <img src={item.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              {item.featured && (
                <div className="absolute top-4 left-4 bg-accent text-primary text-[10px] font-bold px-2 py-0.5 rounded shadow-md">مميز</div>
              )}
            </div>
            <div className="p-5 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[10px] text-gray-400 font-medium">
                <Calendar size={12} />
                <span>{item.date}</span>
                <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                <span className="text-gray-300">تفسير سورة البقرة</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors leading-snug">
                {item.title}
              </h3>
              <div className="flex items-center gap-3 mt-2">
                <img src={`https://i.pravatar.cc/100?u=${item.id + 10}`} className="w-8 h-8 rounded-full border border-gray-100" alt="" />
                <span className="text-[11px] text-gray-500 font-bold">{item.lecturer}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center mt-10 gap-2 overflow-x-visible">
        <button className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-primary transition-colors">
          <ChevronRight size={20} />
        </button>
        <button className="w-10 h-10 rounded-xl bg-primary text-white font-bold text-sm shadow-lg shadow-primary/20">١</button>
        <button className="w-10 h-10 rounded-xl bg-white border border-gray-100 text-gray-400 font-bold text-sm">٢</button>
        <button className="w-10 h-10 rounded-xl bg-white border border-gray-100 text-gray-400 font-bold text-sm">٣</button>
        <button className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-primary transition-colors">
          <ChevronLeft size={20} />
        </button>
      </div>

      <div className="mt-16 text-center text-gray-400 py-10 border-t border-gray-50">
        <div className="flex items-center justify-center gap-2 mb-3">
           <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">ق</div>
           <span className="text-primary font-bold">قريب</span>
        </div>
        <p className="text-[10px]">&copy; ٢٠٢٤ قريب التعليمية. جميع الحقوق محفوظة</p>
        <div className="flex items-center justify-center gap-4 mt-4 text-[10px] font-bold">
          <span>سياسة الخصوصية</span>
          <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
          <span>اتصل بنا</span>
          <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
          <span>الأحكام والشروط</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Discover;
