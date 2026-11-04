import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Search, Sparkles } from 'lucide-react';
import { DetectiveAvatar, RobotAvatar } from '../common/Avatars';

interface StartScreenProps {
  onStart: () => void;
  onAudioClick?: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart, onAudioClick }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 w-full max-w-4xl mx-auto">
      {/* Main Detective Office Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-gradient-to-b from-[#2E3C48] to-[#1E293B] rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-[#475569] text-white flex flex-col items-center relative overflow-hidden"
      >
        {/* Decorative Bank Vault / Office background subtle circles */}
        <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
          <div className="w-[500px] h-[500px] rounded-full border-8 border-white"></div>
          <div className="w-[350px] h-[350px] rounded-full border-4 border-dashed border-white"></div>
        </div>

        {/* Top Badges */}
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3.5 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-full font-bold text-xs sm:text-sm flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>مغامرة الأمان السيبراني وحماية البيانات</span>
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-black text-center mb-6 tracking-wide drop-shadow-md">
          المحقق الرقمي 🕵️‍♂️
        </h1>

        {/* Character Stage & Dialogue Speech Bubble (Matching Panel 1) */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 my-4 z-10">
          {/* Characters Pair */}
          <div className="flex items-end justify-center gap-2 sm:gap-4 shrink-0">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            >
              <DetectiveAvatar size={160} />
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut', delay: 0.5 }}
            >
              <RobotAvatar size={135} />
            </motion.div>
          </div>

          {/* Dialogue Speech Bubble */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative bg-white text-slate-800 p-5 sm:p-6 rounded-3xl shadow-xl border-4 border-amber-400 max-w-md text-center md:text-right"
          >
            {/* Speech bubble pointer (triangle) */}
            <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 w-0 h-0 border-y-8 border-y-transparent border-l-16 border-l-white"></div>

            <p className="font-extrabold text-base sm:text-lg leading-relaxed text-slate-800">
              "مرحباً أيها المحقق! تلقينا بلاغاً عاجلاً من صديقنا <span className="text-sky-600 font-black">آدم</span>.. هل أنت جاهز للتحقيق في الجرائم الرقمية ومساعدته في حماية بياناته؟"
            </p>

            <div className="mt-3 flex items-center justify-center md:justify-start gap-1.5 text-xs font-bold text-amber-700 bg-amber-50 py-1 px-3 rounded-lg border border-amber-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>5 قضايا تنتظرك للحصول على وسام المحقق البطل!</span>
            </div>
          </motion.div>
        </div>

        {/* Start Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            onAudioClick?.();
            onStart();
          }}
          className="mt-6 px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-black text-xl sm:text-2xl rounded-2xl shadow-tactile-wood border-b-4 border-amber-700 transition-all flex items-center gap-3 cursor-pointer z-10"
        >
          <Search className="w-7 h-7" />
          <span>ابدأ التحقيق</span>
        </motion.button>
      </motion.div>
    </div>
  );
};
