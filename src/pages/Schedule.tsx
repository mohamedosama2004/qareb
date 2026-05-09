import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Bell, Calendar as CalendarIcon, ChevronRight, ChevronLeft, MapPin, Clock, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Schedule = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="flex flex-col pb-24"
      dir="rtl"
    >
      <header className="px-5 pt-8 bg-white mb-6">
        <h1 className="text-2xl font-bold text-primary mb-2">جدول المحاضرات والدروس</h1>
        <p className="text-gray-400 text-sm leading-relaxed max-w-[90%]">
          تابع مواعيد الدروس العلمية وحلقات التحفيظ الأسبوعية.
        </p>
      </header>

      {/* Week Selector */}
      <div className="bg-white px-5 border-b border-gray-50 pb-6 mb-6">
        <div className="flex items-center justify-between p-4 bg-gray-50/50 rounded-2xl border border-gray-100 mb-6">
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"><ChevronRight size={20} /></button>
          <div className="flex items-center gap-3">
             <CalendarIcon className="text-primary" size={20} />
             <div className="text-center">
               <div className="text-primary font-bold">أكتوبر</div>
               <div className="text-[10px] text-gray-400">٢٠٢٤</div>
             </div>
             <Info className="text-gray-300" size={16} />
             <div className="text-primary font-bold border-r border-gray-200 pr-3">التقويم الأسبوعي</div>
          </div>
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"><ChevronLeft size={20} /></button>
        </div>

        {/* Calendar Days */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar -mx-2 px-2 h-[350px]">
           {['السبت', 'الأحد', 'الاثنين'].map((day, ix) => (
             <div key={day} className="flex-shrink-0 w-[45%] h-full rounded-2xl border border-gray-100 bg-white flex flex-col">
                <div className="p-4 flex items-center justify-between border-b border-gray-50">
                   <h3 className="font-bold text-gray-800">{day}</h3>
                   <span className="text-gray-300 font-bold">{12 + ix}</span>
                </div>
                <div className="p-3 flex-1 flex flex-col gap-3">
                  {ix === 0 && (
                     <div className="bg-accent/20 border-l-4 border-accent p-3 rounded-xl">
                        <div className="text-[10px] font-bold text-primary mb-1">تفسير القرآن</div>
                        <div className="text-[10px] text-gray-500">٠٥:٣٠ م</div>
                     </div>
                  )}
                  {ix === 1 && (
                     <div className="bg-primary p-3 rounded-xl shadow-lg shadow-primary/20">
                        <div className="text-[10px] font-bold text-white mb-1">فقه العبادات</div>
                        <div className="text-[10px] text-gray-200">٠٧:٠٠ م</div>
                     </div>
                  )}
                </div>
             </div>
           ))}
        </div>
      </div>

      {/* Today's Lessons */}
      <section className="px-5">
        <div className="flex items-center justify-between mb-4">
           <h2 className="text-lg font-bold text-gray-800">دروس اليوم</h2>
           <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-[10px] font-bold border border-accent/20">الأحد، ١٣ أكتوبر</span>
        </div>

        <div className="space-y-4">
           {[
             { title: 'شرح كتاب التوحيد', lecturer: 'د. عبد الرحمن المنصور', time: '٠٥:٣٠ م - ٠٦:٣٠ م', location: 'القاعة الرئيسية', avatar: 'https://i.pravatar.cc/100?u=a' },
             { title: 'فقه العبادات (مباشر)', lecturer: 'الشيخ محمد العتيبي', time: 'الآن - ٠٨:٠٠ م', location: 'مستوى المبتدئين', accent: true, live: true, avatar: 'https://i.pravatar.cc/100?u=b' },
             { title: 'تحسين التلاوة', lecturer: 'القاريء خالد السعد', time: '٠٨:٣٠ م - ٠٩:٣٠ م', location: 'حلقة المسجد', avatar: 'https://i.pravatar.cc/100?u=c' }
           ].map((item, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: idx * 0.1 }}
               className={`p-4 rounded-3xl border ${item.accent ? 'border-primary ring-1 ring-primary/20 bg-primary/5' : 'border-gray-50 bg-white'}`}
             >
                <div className="flex gap-2 items-center mb-3">
                   <div className="relative">
                      <img src={item.avatar} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" alt="" />
                      {item.live && <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>}
                   </div>
                   <div className="flex-1">
                      <h4 className="text-sm font-bold text-gray-900">{item.title}</h4>
                      <p className="text-[10px] text-gray-400 font-medium">{item.lecturer}</p>
                   </div>
                   {item.accent && <div className="h-full w-1 bg-primary rounded-full absolute left-4 h-[70%] top-[15%]"></div>}
                </div>
                <div className="flex items-center gap-6 text-[10px] text-gray-500 pt-2 border-t border-gray-50">
                   <div className="flex items-center gap-1"><MapPin size={12} className="text-gray-300" /> {item.location}</div>
                   <div className="flex items-center gap-1"><Clock size={12} className="text-gray-300" /> {item.time}</div>
                </div>
             </motion.div>
           ))}
        </div>

        <button className="w-full bg-primary text-white py-4 rounded-3xl mt-8 flex items-center justify-center gap-2 font-bold shadow-xl shadow-primary/20">
           <Bell size={20} /> تفعيل التنبيهات للدروس
        </button>
      </section>

      {/* Important Announcement */}
      <section className="bg-primary/95 mx-5 mt-8 p-6 rounded-[2.5rem] relative overflow-hidden text-right">
          <div className="absolute -bottom-10 -left-10 opacity-10"><Bell size={120} /></div>
          <h3 className="text-white font-bold text-lg mb-2">إعلان هام</h3>
          <p className="text-gray-200 text-xs leading-relaxed mb-6">
            تم نقل درس "السيرة النبوية" ليوم الثلاثاء القادم إلى القاعة الكبرى بدلاً من مصلى النساء.
          </p>
          <button className="text-accent font-bold text-[10px] underline tracking-widest decoration-accent">عرض التفاصيل</button>
      </section>

      <div className="mt-16 bg-primary pt-12 pb-10 px-6 rounded-t-[3rem] text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
             <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white/50 border border-white/10">ق</div>
             <span className="text-white font-bold text-xl">منصة قريب التعليمية</span>
          </div>
          <p className="text-gray-400 text-[10px] mb-8 leading-relaxed max-w-[80%] mx-auto">
            بوابتك الرقمية للعلوم الشرعية والحلقات القرآن الكريم، تحت إشراف نخبة من المشايخ والعلماء.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-300 text-[11px] font-bold border-t border-white/5 pt-8">
             <span>عن المنصة</span>
             <span>الجدول</span>
             <span>الدروس</span>
             <span>الرئيسية</span>
          </div>
      </div>
    </motion.div>
  );
};

export default Schedule;
