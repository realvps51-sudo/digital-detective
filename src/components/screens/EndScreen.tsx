import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { RotateCcw, Trophy, CheckCircle, Sparkles, UserCheck, Volume2, VolumeX, Eye, Edit3 } from 'lucide-react';
import { DetectiveAvatar, AdamAvatar, RobotAvatar } from '../common/Avatars';

interface EndScreenProps {
  score: number;
  maxScore: number;
  studentName: string;
  isSoundMuted: boolean;
  onToggleSound: () => void;
  onStudentNameChange: (name: string) => void;
  onResetGame: () => void;
  onAudioClick?: () => void;
  onPlayFanfare?: () => void;
}

export const EndScreen: React.FC<EndScreenProps> = ({
  score,
  maxScore,
  studentName,
  isSoundMuted,
  onToggleSound,
  onStudentNameChange,
  onResetGame,
  onAudioClick,
  onPlayFanfare,
}) => {
  // State to switch from Name Input Card to the Certificate Screen
  const [showCertificate, setShowCertificate] = useState(false);

  // Trigger celebration confetti on mount
  useEffect(() => {
    onPlayFanfare?.();

    const duration = 2.5 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#F59E0B', '#3B82F6', '#10B981', '#EC4899'],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#F59E0B', '#3B82F6', '#10B981', '#EC4899'],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, [onPlayFanfare]);

  const handleShowCertificate = () => {
    onAudioClick?.();
    setShowCertificate(true);
    // Fire celebratory confetti when certificate is revealed
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleBackToEdit = () => {
    onAudioClick?.();
    setShowCertificate(false);
  };

  const formattedDate = new Date().toLocaleDateString('ar-EG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="relative w-full min-h-screen h-screen overflow-hidden bg-[#1E293B] select-none flex flex-col justify-between font-cairo">
      {/* ================= BACKGROUND: CELEBRATION VAULT ================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#182332] via-[#202E40] to-[#121A24]"></div>
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_2rem]"></div>
        <div className="absolute bottom-0 w-full h-[12%] bg-gradient-to-t from-[#0F172A] to-[#1E293B] border-t-4 border-[#334155]"></div>

        {/* Circular Vault Outline */}
        <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[380px] sm:w-[500px] h-[380px] sm:h-[500px] opacity-40 rounded-full border-[16px] border-[#29394D] flex items-center justify-center">
          <div className="w-[75%] h-[75%] rounded-full border-4 border-dashed border-[#475569]"></div>
        </div>
      </div>

      {/* ================= TOP BAR ================= */}
      <div className="relative z-20 w-full px-4 sm:px-8 py-2.5 sm:py-3 flex items-center justify-between">
        <div className="bg-white/95 border-3 border-slate-800 text-slate-900 px-4 py-1 rounded-2xl shadow-lg font-black text-sm sm:text-base">
          Score: {score}
        </div>

        <div className="flex items-center gap-2 bg-[#0F172A]/80 backdrop-blur-md px-4 py-1 rounded-2xl border-2 border-slate-700 text-amber-300 font-black text-xs sm:text-sm shadow">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>شاشة النهاية: كشف الحقيقة والتقييم!</span>
        </div>

        <button
          onClick={() => {
            onAudioClick?.();
            onToggleSound();
          }}
          className={`p-2 rounded-2xl border-2 shadow-lg active:scale-95 transition-all cursor-pointer flex items-center justify-center ${
            isSoundMuted
              ? 'bg-[#0F172A]/80 border-rose-500/50 text-rose-400'
              : 'bg-[#0F172A]/80 border-slate-700 text-amber-300 hover:text-white'
          }`}
          title={isSoundMuted ? 'تشغيل الصوت' : 'كتم الصوت'}
        >
          {isSoundMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>

      {/* ================= MAIN CONTENT AREA ================= */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-3 sm:px-6 max-w-5xl mx-auto w-full my-auto">
        <AnimatePresence mode="wait">
          {!showCertificate ? (
            /* ================= VIEW 1: NAME INPUT & COMPLETION CARD ================= */
            <motion.div
              key="input-card"
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: -15 }}
              transition={{ duration: 0.35 }}
              className="w-full flex flex-col items-center"
            >
              {/* Golden Card Container */}
              <div className="w-full max-w-md sm:max-w-xl bg-[#FEF3C7] rounded-3xl border-4 sm:border-6 border-[#3D2411] shadow-2xl p-4 sm:p-6 text-slate-900 flex flex-col items-center text-center gap-2.5">
                <div className="w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-md">
                  <Trophy className="w-7 h-7 text-yellow-200" />
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-amber-950">
                  شهادة المحقق الرقمي البطل 🛡️
                </h2>

                <div className="bg-amber-100 px-4 py-1 rounded-xl border-2 border-amber-400 font-black text-base sm:text-lg text-amber-900">
                  مجموع النقاط: {score} / {maxScore}
                </div>

                <p className="text-xs sm:text-sm font-extrabold text-emerald-800 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>أداء ممتاز! لقد ساعدت آدم على حماية بياناته بنجاح!</span>
                </p>

                {/* Student Name Input */}
                <div className="w-full bg-white p-2.5 sm:p-3 rounded-2xl border-2 border-amber-400 shadow-inner flex flex-col gap-1 text-right">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                    <UserCheck className="w-3.5 h-3.5 text-amber-600" />
                    <span>اكتب اسمك ليظهر على الشهادة المعتمدة:</span>
                  </label>
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => onStudentNameChange(e.target.value)}
                    placeholder="اكتب اسم الطالب/ـة هنا..."
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl font-black text-slate-900 text-base focus:outline-none focus:ring-2 focus:ring-amber-500"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleShowCertificate();
                    }}
                  />
                </div>

                {/* Button: "عرض الشهادة" (No download!) */}
                <button
                  onClick={handleShowCertificate}
                  className="w-full py-3 px-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-lg sm:text-xl rounded-2xl border-3 border-emerald-950 shadow-[0_4px_0_#064E3B] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer mt-1"
                >
                  <Eye className="w-5 h-5" />
                  <span>عرض الشهادة 🎓</span>
                </button>
              </div>

              {/* Characters Row Below */}
              <div className="flex items-end justify-center gap-5 sm:gap-8 mt-4">
                <div className="flex flex-col items-center">
                  <DetectiveAvatar size={80} />
                  <span className="text-[11px] font-bold text-amber-300">المحقق</span>
                </div>
                <div className="flex flex-col items-center">
                  <AdamAvatar size={80} isWaving={true} />
                  <span className="text-[11px] font-bold text-sky-300">آدم يشكرك!</span>
                </div>
                <div className="flex flex-col items-center hidden sm:flex">
                  <RobotAvatar size={70} />
                  <span className="text-[11px] font-bold text-slate-300">الروبوت</span>
                </div>
              </div>
            </motion.div>
          ) : (
            /* ================= VIEW 2: FULLSCREEN CERTIFICATE (MATCHING ATTACHED IMAGE) ================= */
            <motion.div
              key="certificate-view"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full flex flex-col items-center"
            >
              {/* The Certificate Plaque (Pixel-perfect match to media_1793874281650_ac20b727.jpg) */}
              <div className="w-full max-w-4xl bg-[#FFFDF7] rounded-3xl p-5 sm:p-8 md:p-10 border-4 sm:border-8 border-[#D97706] shadow-[0_25px_60px_rgba(0,0,0,0.85)] relative flex flex-col items-center text-center select-none overflow-hidden">
                {/* Thin Inner Golden Border */}
                <div className="absolute inset-2 sm:inset-3 border-2 border-[#FDE68A] rounded-2xl pointer-events-none"></div>

                {/* Decorative Corner Accents (Matching image) */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t-4 border-l-4 border-[#B45309]"></div>
                <div className="absolute top-3 right-3 w-6 h-6 border-t-4 border-r-4 border-[#B45309]"></div>
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b-4 border-l-4 border-[#B45309]"></div>
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-4 border-r-4 border-[#B45309]"></div>

                {/* Top Certificate Icons: 🏆 🛡️ 🕵️‍♂️ */}
                <div className="text-3xl sm:text-4xl mb-1 tracking-widest drop-shadow-sm">
                  🏆 🛡️ 🕵️‍♂️
                </div>

                {/* Certificate Main Title */}
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-wide mt-1">
                  شهادة تميـّز: المحقق الرقمي البطل
                </h1>

                {/* Decorative Amber Title Underline */}
                <div className="w-48 sm:w-80 h-1 sm:h-1.5 bg-[#F59E0B] rounded-full my-2 sm:my-3"></div>

                {/* Intro Line */}
                <p className="text-slate-600 font-bold text-sm sm:text-lg md:text-xl mb-1 sm:mb-2">
                  تَشْهَدُ منصة "المحقق الرقمي" للسلامة والأمن السيبراني بأن البطل:
                </p>

                {/* Student Name in Royal Blue (Prominent & Centered) */}
                <div className="my-1 sm:my-2">
                  <span className="text-3xl sm:text-5xl md:text-6xl font-black text-[#1D4ED8] tracking-wide inline-block drop-shadow-xs">
                    {studentName.trim() || 'المحقق البطل'}
                  </span>
                  {/* Name underline */}
                  <div className="w-36 sm:w-64 h-1 bg-[#93C5FD] rounded-full mx-auto mt-1 sm:mt-2"></div>
                </div>

                {/* Achievement Paragraph */}
                <div className="text-slate-700 font-extrabold text-xs sm:text-base md:text-lg max-w-2xl leading-relaxed my-2 sm:my-3 px-2">
                  <p>قد اجتاز بنجاح كافة اختبارات حماية البيانات والتصدي للمخاطر الرقمية،</p>
                  <p>وساعد صديقه "آدم" في كشف الرسائل المجهولة، الروابط المشبوهة، والملفات الخطيرة،</p>
                  <p className="text-amber-800 font-black mt-1">
                    واستحق عن جدارة لقب: محقق سيبراني خبير وموثوق 🌟
                  </p>
                </div>

                {/* Score Pill Box (Matching screenshot: "مجموع النقاط: 50 / 50") */}
                <div className="bg-[#FEF3C7] px-6 sm:px-10 py-1.5 sm:py-2.5 rounded-2xl border-2 sm:border-3 border-[#D97706] shadow-sm my-2">
                  <span className="text-amber-950 font-black text-base sm:text-2xl">
                    مجموع النقاط: {score} / {maxScore}
                  </span>
                </div>

                {/* Footer Section: Stamp on Left, Date on Right */}
                <div className="w-full flex items-end justify-between px-2 sm:px-6 pt-3 sm:pt-4 border-t border-amber-200/60 mt-1 sm:mt-2">
                  {/* Golden Circular Seal on the Left (Matching Image) */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#D97706] border-3 sm:border-4 border-[#B45309] shadow-md flex flex-col items-center justify-center text-center text-[#78350F] p-1 ring-4 ring-[#FEF3C7]">
                    <span className="text-[10px] sm:text-xs font-black leading-tight">ختم الأمان</span>
                    <span className="text-[10px] sm:text-xs font-black leading-tight">الرقمي ✓</span>
                  </div>

                  {/* Date & Platform on the Right */}
                  <div className="text-right text-slate-500 font-bold text-[11px] sm:text-sm">
                    <div>تاريخ الإصدار: {formattedDate}</div>
                    <div className="text-slate-600 font-black mt-0.5">منصة المحقق الرقمي التعليمية</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons Below the Certificate: Replay & Edit Name */}
              <div className="flex items-center gap-3 sm:gap-5 mt-4 sm:mt-5">
                <button
                  onClick={() => {
                    onAudioClick?.();
                    onResetGame();
                  }}
                  className="px-8 sm:px-12 py-3 bg-[#F6BE3C] hover:bg-[#FBBF24] text-[#261306] font-black text-lg sm:text-xl rounded-2xl sm:rounded-3xl border-4 border-[#261306] shadow-[0_5px_0_#261306] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-5 h-5 text-[#261306]" />
                  <span>إعادة اللعب والتحقيق 🔄</span>
                </button>

                <button
                  onClick={handleBackToEdit}
                  className="px-5 sm:px-7 py-3 bg-white/90 hover:bg-white text-slate-800 font-black text-sm sm:text-base rounded-2xl sm:rounded-3xl border-3 border-slate-700 shadow-md active:translate-y-1 transition-all flex items-center gap-1.5 cursor-pointer"
                  title="تعديل الاسم"
                >
                  <Edit3 className="w-4 h-4 text-amber-700" />
                  <span>تعديل الاسم</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ================= BOTTOM FOOTER (Only shown on input view) ================= */}
      {!showCertificate && (
        <div className="relative z-20 w-full px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => {
              onAudioClick?.();
              onResetGame();
            }}
            className="px-6 py-2 bg-[#FDE68A] hover:bg-[#FCD34D] text-[#3D2411] font-black text-sm sm:text-base rounded-2xl border-3 border-[#3D2411] shadow-[0_3px_0_#3D2411] active:translate-y-1 active:shadow-none transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4 text-[#3D2411]" />
            <span>إعادة اللعب 🔄</span>
          </button>
          <div className="w-12 h-12 invisible"></div>
        </div>
      )}
    </div>
  );
};
