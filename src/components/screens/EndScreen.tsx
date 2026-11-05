import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Download, RotateCcw, Volume2, VolumeX, UserCheck } from 'lucide-react';
import { FullBodyDetective, FullBodyAdamWaving, CertificateMedal } from '../common/Avatars';
import { downloadCertificateAsPNG } from '../../utils/certificate';

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
  const [isDownloading, setIsDownloading] = useState(false);

  // Trigger celebration effects on mount
  useEffect(() => {
    onPlayFanfare?.();

    // Fire festive colorful confetti
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

  const handleDownloadCertificate = async () => {
    onAudioClick?.();
    setIsDownloading(true);
    try {
      await downloadCertificateAsPNG({
        studentName: studentName || 'المحقق البطل',
        score,
        maxScore,
      });
    } catch (err) {
      console.error('Error downloading certificate:', err);
      alert('حدث خطأ أثناء تنزيل الشهادة، يرجى المحاولة مرة أخرى.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="relative w-full min-h-screen h-screen overflow-hidden bg-[#1E293B] select-none flex flex-col justify-between font-cairo">
      {/* ================= BACKGROUND: CELEBRATION VAULT SCENE ================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#182332] via-[#202E40] to-[#121A24]"></div>
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_2rem]"></div>
        <div className="absolute bottom-0 w-full h-[12%] bg-gradient-to-t from-[#0F172A] to-[#1E293B] border-t-4 border-[#334155]"></div>

        {/* Circular Vault Outline in Center Background (Matching Storyboard Panel 8) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] sm:w-[580px] h-[420px] sm:h-[580px] opacity-40 rounded-full border-[20px] border-[#29394D] flex items-center justify-center">
          <div className="w-[78%] h-[78%] rounded-full border-4 border-dashed border-[#475569]"></div>
        </div>
      </div>

      {/* ================= TOP HEADER (Matching Panel 8: "شاشة النهاية: كشف الحقيقة!") ================= */}
      <div className="relative z-20 w-full px-4 sm:px-8 py-3 flex items-center justify-between">
        {/* Placeholder to balance sound button */}
        <div className="w-10 h-10"></div>

        {/* Big White Title (Pixel-perfect match to Storyboard Panel 8) */}
        <h1 className="text-2xl sm:text-4xl font-black text-white text-center tracking-wide drop-shadow-md">
          شاشة النهاية: كشف الحقيقة!
        </h1>

        {/* Sound toggle button */}
        <button
          onClick={() => {
            onAudioClick?.();
            onToggleSound();
          }}
          className={`p-2.5 rounded-2xl border-2 shadow-lg active:scale-95 transition-all cursor-pointer flex items-center justify-center ${
            isSoundMuted
              ? 'bg-[#0F172A]/80 border-rose-500/50 text-rose-400'
              : 'bg-[#0F172A]/80 border-slate-700 text-amber-300 hover:text-white'
          }`}
          title={isSoundMuted ? 'تشغيل الصوت' : 'كتم الصوت'}
        >
          {isSoundMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>

      {/* ================= CENTER STAGE: DETECTIVE + CERTIFICATE + ADAM (Matching Panel 8) ================= */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-2 sm:px-6 max-w-6xl mx-auto w-full my-auto">
        <div className="w-full flex items-center justify-between sm:justify-center gap-2 sm:gap-6">
          {/* 1. Left Character: Detective with Magnifying Glass & Cat */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="shrink-0 hidden md:flex flex-col items-center"
          >
            <FullBodyDetective withCat={true} size={190} />
          </motion.div>

          {/* 2. Center: Ornate Landscape Certificate Plaque (Matching Storyboard Panel 8) */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45 }}
            className="w-full max-w-md sm:max-w-xl bg-[#F6BE3C] rounded-2xl sm:rounded-3xl p-3 sm:p-4 border-4 sm:border-6 border-[#3D2411] shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative flex flex-col items-center"
          >
            {/* Inner Parchment with Curved Ornate Border */}
            <div className="w-full bg-[#FFFDF7] rounded-xl sm:rounded-2xl border-3 border-[#3D2411] p-4 sm:p-6 flex flex-col items-center text-center relative overflow-hidden">
              {/* Ornate Gold Inner Inset Frame with Curved Corners */}
              <div className="absolute inset-2 sm:inset-3 border-2 border-[#D97706] rounded-xl pointer-events-none">
                {/* Curved Corner Flourishes */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#92400E]"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#92400E]"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#92400E]"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#92400E]"></div>
              </div>

              {/* Certificate Main Title (Matching Image) */}
              <h2 className="text-xl sm:text-3xl font-black text-[#1E293B] tracking-wide mb-1 sm:mb-2 z-10">
                شهادة المحقق الرقمي البطل
              </h2>

              {/* Score Line (Matching: "مجموع النقاط: 50/50") */}
              <div className="text-lg sm:text-2xl font-black text-[#1E293B] mb-1 sm:mb-2 z-10">
                مجموع النقاط: <span className="font-mono">{score}/{maxScore}</span>
              </div>

              {/* Praise Sentence (Matching: "أداء ممتاز! لقد حميت آدم!") */}
              <p className="text-base sm:text-xl font-extrabold text-[#1E293B] mb-2 sm:mb-3 z-10">
                أداء ممتاز! لقد حميت آدم!
              </p>

              {/* Student Name Input Field (Integrated seamlessly into the certificate) */}
              <div className="w-full max-w-xs sm:max-w-sm z-10 mb-2">
                <div className="flex items-center gap-1.5 bg-amber-50/80 px-3 py-1.5 rounded-xl border border-amber-300">
                  <UserCheck className="w-4 h-4 text-amber-700 shrink-0" />
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => onStudentNameChange(e.target.value)}
                    placeholder="اكتب اسم البطل هنا للشهادة..."
                    className="w-full bg-transparent font-black text-xs sm:text-sm text-slate-800 focus:outline-none placeholder:text-slate-400 text-center"
                  />
                </div>
              </div>

              {/* Golden Medal with Red Ribbons in Bottom Center (Identical to Storyboard) */}
              <div className="relative z-10 flex items-center justify-center gap-3 sm:gap-6 mt-1 w-full">
                {/* Decorative left line */}
                <div className="flex-1 h-0.5 bg-[#D97706]/50 max-w-[80px]"></div>

                {/* Scalloped Gold Medal & Ribbon */}
                <CertificateMedal size={48} />

                {/* Decorative right line */}
                <div className="flex-1 h-0.5 bg-[#D97706]/50 max-w-[80px]"></div>
              </div>
            </div>
          </motion.div>

          {/* 3. Right Character: Full Body Adam Waving Happily */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="shrink-0 hidden md:flex flex-col items-center"
          >
            <FullBodyAdamWaving size={190} />
          </motion.div>
        </div>
      </div>

      {/* ================= BOTTOM ACTION BAR: REPLAY & DOWNLOAD BUTTONS ================= */}
      <div className="relative z-20 w-full px-6 py-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
        {/* Play Again Button "إعادة اللعب" (Matching Storyboard Panel 8 Yellow Button) */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            onAudioClick?.();
            onResetGame();
          }}
          className="px-8 sm:px-12 py-3 bg-[#F6BE3C] hover:bg-[#FBBF24] text-[#261306] font-black text-xl sm:text-2xl rounded-2xl sm:rounded-3xl border-4 border-[#261306] shadow-[0_5px_0_#261306] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <RotateCcw className="w-5 h-5 text-[#261306]" />
          <span>إعادة اللعب</span>
        </motion.button>

        {/* Download Certificate PNG Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDownloadCertificate}
          disabled={isDownloading}
          className="px-6 sm:px-10 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-lg sm:text-xl rounded-2xl sm:rounded-3xl border-4 border-emerald-950 shadow-[0_5px_0_#064E3B] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          <Download className="w-5 h-5" />
          <span>{isDownloading ? 'جارٍ التحضير...' : 'تحميل الشهادة (PNG)'}</span>
        </motion.button>
      </div>
    </div>
  );
};
