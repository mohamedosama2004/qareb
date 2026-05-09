import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Play, Users, Clock, Share2, Download, FileText, Music, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex flex-col pb-24"
      dir="rtl"
    >
      {/* Hero Section */}
      <section className="relative w-full aspect-[4/3] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=1000" 
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-6 pb-10">
          <h1 className="text-3xl font-bold text-white mb-3 leading-tight">
            أهلاً بكم في <br /> منصة قريب التعليمية
          </h1>
          <p className="text-gray-200 text-sm mb-6 leading-relaxed max-w-[85%]">
            مساحة هادئة تهدف إلى تسهيل طلب العلم الشرعي وتوفير الدروس والمحاضرات لكل الأعمار بأسلوب حديث ومبسط.
          </p>
          <div className="flex gap-3">
            <button 
              onClick={() => navigate('/discover')}
              className="bg-black/90 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-black transition-colors"
            >
              ابدأ التعلم الآن
            </button>
            <button className="bg-white text-primary px-6 py-2.5 rounded-full font-bold text-sm border border-white/50 hover:bg-gray-100 transition-colors">
              تعرف علينا
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 -mt-6 relative z-10 grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
          <span className="text-2xl font-bold text-primary italic">١٢٠+</span>
          <span className="text-xs text-gray-400 font-medium mt-1">ساعة تعليمية</span>
        </div>
        <div className="bg-primary p-4 rounded-2xl shadow-sm flex flex-col items-center">
          <span className="text-2xl font-bold text-white italic">٥٠</span>
          <span className="text-xs text-gray-200 font-medium mt-1">محاضر معتمد</span>
        </div>
        <div className="bg-accent/20 p-4 rounded-2xl shadow-sm border border-accent/20 flex flex-col items-center">
          <span className="text-2xl font-bold text-primary italic">١٠٠٪</span>
          <span className="text-xs text-gray-500 font-medium mt-1">مجاني بالكامل</span>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
          <span className="text-2xl font-bold text-primary italic">٥٠٠٠+</span>
          <span className="text-xs text-gray-400 font-medium mt-1">طالب وطالبة</span>
        </div>
      </section>

      {/* Featured Lessons */}
      <section className="mt-8 px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-primary">الدروس المميزة</h2>
          <button onClick={() => navigate('/discover')} className="text-primary text-sm font-medium flex items-center gap-1">
             عرض الكل <ArrowLeft size={14} />
          </button>
        </div>
        
        <motion.div 
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/lesson/1')}
          className="relative rounded-3xl overflow-hidden shadow-lg aspect-video mb-4 group cursor-pointer"
        >
          <img 
            src="https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800" 
            alt="Thumbnail"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 bg-accent text-primary text-[10px] font-bold px-2 py-1 rounded-lg">مبتدئ</div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
            <h3 className="text-white font-bold text-lg mb-1">تجويد القرآن الكريم</h3>
            <p className="text-gray-300 text-xs mb-3">نصل لمخارج الحروف وأحكام الترتيل بطريقة تفاعلية مبسطة للأطفال والكبار.</p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <img src="https://i.pravatar.cc/100?u=1" className="w-6 h-6 rounded-full border border-white/20" alt="" />
                <span className="text-white text-[10px]">الشيخ عبدالله أحمد</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-white flex items-center gap-1">
                <Clock size={10} /> ١٢ درس
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Latest Lessons */}
      <section className="mt-8 px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-primary flex items-center gap-2">
             آخر الدروس المضافة
             <div className="w-1 h-1 bg-primary rounded-full"></div>
          </h2>
        </div>
        
        <div className="space-y-4">
          {[
            { id: 2, title: 'تفسير سورة الكهف - الدرس الثالث', category: 'تفسير', image: 'https://images.unsplash.com/photo-1597933941249-18368c651e84?auto=format&fit=crop&q=80&w=400' },
            { id: 3, title: 'مقدمة في علوم الحديث', category: 'حديث', image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=400' },
            { id: 4, title: 'الأخلاق في الإسلام', category: 'تربية', image: 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&q=80&w=400' }
          ].map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => navigate(`/lesson/${item.id}`)}
              className="bg-white p-3 rounded-2xl border border-gray-100 flex gap-4 cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                <img src={item.image} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-between py-1 flex-1">
                <div>
                  <span className="text-[10px] text-gray-400 font-medium">{item.category}</span>
                  <h4 className="text-sm font-bold text-gray-800 line-clamp-2 leading-tight mt-1">{item.title}</h4>
                </div>
                <div className="flex items-center justify-between text-[10px] text-gray-400 mt-2">
                   <div className="flex items-center gap-3">
                     <span className="flex items-center gap-1"><Users size={10} /> ٢٤٠</span>
                     <span className="flex items-center gap-1"><Share2 size={10} /> ١٨</span>
                   </div>
                   <ArrowLeft size={12} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Subscription Card */}
      <section className="mx-4 mt-10 mb-10 overflow-hidden rounded-[2.5rem]">
         <div className="bg-primary/95 p-8 relative overflow-hidden text-center">
            {/* Background pattern circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
            
            <h2 className="text-2xl font-bold text-white mb-2 relative z-10">اشترك ليصلك جديد الدروس</h2>
            <p className="text-gray-300 text-xs mb-8 leading-relaxed relative z-10 px-4">انضم إلى قائمتنا البريدية للحصول على إشعارات بآخر المحاضرات والندوات التعليمية المباشرة.</p>
            
            <div className="space-y-3 relative z-10">
              <input 
                type="email" 
                placeholder="البريد الإلكتروني" 
                className="w-full bg-white/10 border border-white/20 rounded-full py-4 px-6 text-white placeholder:text-gray-400 outline-none focus:bg-white/20 transition-all text-center"
              />
              <button className="w-full bg-accent text-primary font-bold py-4 rounded-full shadow-lg shadow-black/20 hover:bg-white transition-all">
                اشترك الآن
              </button>
            </div>
         </div>
      </section>
      
      {/* Admin Floating Button */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate('/admin-upload')}
        className="fixed bottom-28 left-6 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-xl z-40 border-4 border-white"
      >
        <Plus size={28} />
      </motion.button>
    </motion.div>
  );
};

export default Home;
