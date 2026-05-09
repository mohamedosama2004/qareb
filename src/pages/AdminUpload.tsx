import React from 'react';
import { motion } from 'motion/react';
import { LayoutDashboard, ChevronLeft, User, Calendar as CalendarIcon, Link2, Send, Info, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminUpload = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="pb-24 pt-6 px-5"
      dir="rtl"
    >
      <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold mb-4">
        <span>الإدارة</span>
        <ChevronLeft size={12} />
        <span className="text-primary">رفع درس جديد</span>
      </div>

      <h1 className="text-3xl font-extrabold text-primary mb-2">رفع درس جديد</h1>
      <p className="text-gray-400 text-sm leading-relaxed mb-10">
         أضف محتوى تعليمي جديد للمنصة ليتمكن الطلاب من الوصول إليه.
      </p>

      {/* Form Card */}
      <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 mb-8 space-y-8">
         <div className="space-y-2">
            <label className="text-[10px] font-bold text-primary mr-2">عنوان الدرس</label>
            <div className="relative group">
               <input 
                 type="text" 
                 placeholder="أدخل اسم الدرس هنا..." 
                 className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 outline-none focus:bg-white focus:ring-1 focus:ring-primary/20 transition-all text-sm font-medium"
               />
            </div>
         </div>

         <div className="space-y-2">
            <label className="text-[10px] font-bold text-primary mr-2">اسم المحاضر</label>
            <div className="relative">
               <input 
                 type="text" 
                 placeholder="الشيخ / د." 
                 className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 outline-none focus:bg-white focus:ring-1 focus:ring-primary/20 transition-all text-sm font-medium pr-12"
               />
               <User className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-300" size={18} />
            </div>
         </div>

         <div className="space-y-2">
            <label className="text-[10px] font-bold text-primary mr-2">التاريخ</label>
            <div className="relative">
               <input 
                 type="date" 
                 className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 outline-none focus:bg-white focus:ring-1 focus:ring-primary/20 transition-all text-sm font-medium pr-12 text-gray-400"
               />
               <CalendarIcon className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-300" size={18} />
            </div>
         </div>

         <div className="space-y-2">
            <label className="text-[10px] font-bold text-primary mr-2">رابط الفيديو</label>
            <div className="relative">
               <input 
                 type="text" 
                 placeholder="https://youtube.com/..." 
                 className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 outline-none focus:bg-white focus:ring-1 focus:ring-primary/20 transition-all text-sm font-medium pr-12 text-left"
               />
               <Link2 className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-300" size={18} />
            </div>
         </div>

         <button className="w-full bg-primary text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
            <Send size={20} /> حفظ ونشر الدرس
         </button>
      </div>

      {/* Helper Card */}
      <div className="bg-accent/10 border border-accent/20 rounded-[2rem] p-6 mb-10 overflow-hidden relative">
         <div className="absolute top-0 right-0 p-4 opacity-10"><Info size={80} /></div>
         <div className="flex items-center gap-2 mb-4 text-primary font-bold text-sm">
            <Info size={18} /> إرشادات الرفع
         </div>
         <ul className="space-y-4 text-[11px] text-gray-600 font-medium">
            <li className="flex gap-3">
               <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
               تأكد من صحة رابط الفيديو قبل الحفظ لضمان ظهوره للطلاب.
            </li>
            <li className="flex gap-3">
               <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
               استخدم عناوين واضحة تعبر عن محتوى الدرس بدقة.
            </li>
            <li className="flex gap-3">
               <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
               سيتم إرسال تنبيه لكافة المشتركين فور نشر الدرس.
            </li>
         </ul>
      </div>

      <div className="relative rounded-[2rem] overflow-hidden aspect-video border border-gray-100 group">
         <img src="https://images.unsplash.com/photo-1591608971362-f08b2a75731a?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="" />
         <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center">
            <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30 text-white font-bold text-lg">
               بيئة تعليمية هادئة
            </div>
         </div>
      </div>
      
      <div className="mt-16 text-center py-10">
          <div className="font-bold text-primary mb-2 text-xl tracking-widest">قريب</div>
          <div className="flex items-center justify-center gap-6 text-[10px] font-extrabold text-gray-400">
             <span>سياسة الخصوصية</span>
             <span>اتصل بنا</span>
             <span>الأحكام والشروط</span>
          </div>
          <p className="text-[10px] text-gray-300 mt-8 font-medium italic">© ٢٠٢٤ منصة قريب التعليمية. جميع الحقوق محفوظة.</p>
      </div>
    </motion.div>
  );
};

export default AdminUpload;
