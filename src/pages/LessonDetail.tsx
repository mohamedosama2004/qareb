import React from 'react';
import { motion } from 'motion/react';
import { Play, Maximize, Settings, FileText, Download, Music, ChevronLeft, UserPlus, Eye, Clock, Share2, Plus } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const LessonDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-24"
      dir="rtl"
    >
      {/* Video Player Section */}
      <section className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1591608971362-f08b2a75731a?auto=format&fit=crop&q=80&w=1000" 
          alt="Video Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl relative"
          >
             <Play fill="currentColor" size={32} className="mr-1" />
             <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-black animate-pulse"></div>
          </motion.button>
        </div>
        
        {/* Controls Overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
           <div className="flex items-center gap-3">
             <button className="text-white hover:text-accent transition-colors"><Maximize size={18} /></button>
             <button className="text-white hover:text-accent transition-colors"><Settings size={18} /></button>
           </div>
           <div className="bg-red-500 text-white font-bold text-[10px] px-2 py-0.5 rounded flex items-center gap-1">
             <div className="w-1 h-1 bg-white rounded-full animate-ping"></div>
             مباشر الآن
           </div>
        </div>
        <div className="absolute top-4 right-4 font-bold text-white text-md">شرح كتاب رياض الصالحين</div>
      </section>

      {/* Meta Info */}
      <section className="p-6 bg-white border-b border-gray-50">
        <div className="flex items-center justify-between text-[11px] text-gray-400 font-bold mb-4">
           <span className="flex items-center gap-1 tracking-tighter uppercase"><Clock size={12} /> ١٥ رجب ١٤٤٥</span>
           <span className="flex items-center gap-1 tracking-tighter uppercase"><Eye size={12} /> ١,٢٤٠ مشاهدة</span>
        </div>
        
        <h1 className="text-2xl font-bold text-primary mb-4 leading-normal">
          الدرس الخامس: باب الصبر وباب اليقين من كتاب رياض الصالحين
        </h1>
        
        <p className="text-gray-500 text-sm leading-8 mb-8 text-justify">
          يتناول هذا الدرس شرحاً مفصلاً لواحد من أهم أبواب كتاب رياض الصالحين للإمام النووي، وهو باب الصبر. يتم التركيز في هذه الحلقة على أنواع الصبر الثلاثة: الصبر على طاعة الله، والصبر عن معصية الله، والصبر على أقدار الله المؤلمة، مع الاستشهاد بالآيات القرآنية والأحاديث النبوية الصحيحة التي ترسخ هذا المفهوم في قلب المؤمن.
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['الرياض_الصالحين', 'علوم_الحديث', 'الإمام_النووي', 'تزكية_النفوس'].map((tag, i) => (
             <span key={i} className={`text-[10px] font-bold px-4 py-2 rounded-full border ${i < 2 ? 'bg-primary/5 border-primary/20 text-primary' : 'bg-gray-50 border-gray-100 text-gray-400'}`}>
               #{tag}
             </span>
          ))}
        </div>

        {/* Lecturer Card */}
        <div className="p-5 rounded-3xl border border-gray-100 bg-gray-50/50">
           <h3 className="text-xs text-gray-400 font-bold mb-4 border-b border-gray-100 pb-2">عن المحاضر</h3>
           <div className="flex items-center gap-4 mb-5">
              <img src="https://i.pravatar.cc/100?u=sheikh" className="w-16 h-16 rounded-full border-2 border-white shadow-md" alt="" />
              <div>
                 <h4 className="font-bold text-primary">د. محمد بن عبداللـه</h4>
                 <p className="text-[10px] text-gray-500 mt-0.5">أستاذ الفقه والحديث</p>
              </div>
           </div>
           <p className="text-[11px] text-gray-400 leading-relaxed mb-6">
             متخصص في شرح كتب السنة النبوية وله العديد من المؤلفات في التربية الإسلامية وتزكية النفوس.
           </p>
           <button className="w-full bg-primary text-white font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2 hover:bg-black transition-all shadow-lg shadow-primary/10">
              <UserPlus size={18} /> متابعة الشيخ
           </button>
        </div>
      </section>

      {/* Materials Section */}
      <section className="p-6 overflow-hidden">
         <h3 className="text-sm font-bold text-gray-800 mb-4 border-r-4 border-primary pr-3 flex items-center justify-between">
           تحميل المواد
         </h3>
         <div className="space-y-3">
            <div className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center justify-between hover:shadow-md transition-all cursor-pointer group">
               <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-50 rounded-xl text-red-500"><FileText size={20} /></div>
                  <span className="text-[11px] font-bold text-gray-700">متن رياض الصالحين (PDF)</span>
               </div>
               <Download size={18} className="text-gray-300 group-hover:text-primary transition-colors" />
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center justify-between hover:shadow-md transition-all cursor-pointer group">
               <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-xl text-blue-500"><Music size={20} /></div>
                  <span className="text-[11px] font-bold text-gray-700">تسجيل صوتي (MP3)</span>
               </div>
               <Download size={18} className="text-gray-300 group-hover:text-primary transition-colors" />
            </div>
         </div>
      </section>

      {/* Related Lessons */}
      <section className="px-6 mt-6">
         <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              دروس مرتبطة
            </h3>
            <button className="text-primary text-[10px] font-bold flex items-center gap-1">عرض الكل <ChevronLeft size={14} /></button>
         </div>
         
         <div className="grid grid-cols-1 gap-6">
            {[
              { title: 'الدرس الرابع: باب الإخلاص', desc: 'شرح مفصل لمعاني الإخلاص وإحضار النية في جميع الأعمال.', duration: '٤٥ دقيقة', image: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=400' },
              { title: 'الدرس الثالث: باب التوبة', desc: 'الوقوف على شروط التوبة الصادقة ومعاني الرجوع إلى الله.', duration: '٥٢ دقيقة', image: 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&q=80&w=400' }
            ].map((lesson, i) => (
              <div key={i} className="flex bg-white rounded-3xl overflow-hidden border border-gray-50 flex-col shadow-sm">
                 <div className="aspect-[21/9] overflow-hidden">
                    <img src={lesson.image} className="w-full h-full object-cover" alt="" />
                 </div>
                 <div className="p-4">
                    <h4 className="font-bold text-gray-900 mb-1 text-sm">{lesson.title}</h4>
                    <p className="text-[10px] text-gray-400 line-clamp-2 leading-relaxed mb-4">{lesson.desc}</p>
                    <div className="flex items-center justify-between text-[9px] text-primary/60 font-bold border-t border-gray-50 pt-3">
                       <span className="flex items-center gap-1 tracking-tight"><Clock size={10} /> {lesson.duration}</span>
                       <span className="flex items-center gap-1 tracking-tight uppercase"><Eye size={10} /> ٨٩٠ مشاهدة</span>
                    </div>
                 </div>
              </div>
            ))}
         </div>
      </section>

      <div className="mt-20 py-12 px-6 border-t border-gray-100 text-center">
          <div className="bg-primary/5 p-8 rounded-[3rem]">
             <div className="flex items-center justify-center gap-2 mb-4">
               <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white text-xl font-bold">ق</div>
               <span className="text-primary font-bold text-2xl">قريب</span>
             </div>
             <p className="text-gray-400 text-xs mb-8">© ٢٠٢٤ منصة قريب التعليمية. جميع الحقوق محفوظة.</p>
             <div className="flex justify-center gap-6 text-[11px] font-bold text-gray-500">
               <span>سياسة الخصوصية</span>
               <span>اتصل بنا</span>
             </div>
          </div>
      </div>
    </motion.div>
  );
};

export default LessonDetail;
