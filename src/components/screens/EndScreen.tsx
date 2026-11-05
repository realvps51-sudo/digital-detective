import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Download, RotateCcw, Trophy, CheckCircle, Sparkles, UserCheck, Volume2, VolumeX } from 'lucide-react';
import { DetectiveAvatar, AdamAvatar, RobotAvatar } from '../common/Avatars';
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
      <div className="relative z-20 w-full px-4 sm:px-8 py-3 flex items-center justify-between">
        <div className="bg-white/95 border-3 border-slate-800 text-slate-900 px-4 py-1.5 rounded-2xl shadow-lg font-black text-base sm:text-lg">
          Score: {score}
        </div>

        <div className="flex items-center gap-2 bg-[#0F172A]/80 backdrop-blur-md px-4 py-1.5 rounded-2xl border-2 border-slate-700 text-amber-300 font-black text-sm sm:text-base shadow">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>شاشة النهاية: كشف الحقيقة والتقييم!</span>
        </div>

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

      {/* ================= CENTER STAGE: CERTIFICATE BOARD + CHARACTERS ================= */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 max-w-4xl mx-auto w-full my-auto">
        {/* Certificate Golden Plaque (Matching Panel 8 in Storyboard) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md sm:max-w-xl bg-[#FEF3C7] rounded-3xl border-4 sm:border-6 border-[#3D2411] shadow-2xl p-4 sm:p-6 text-slate-900 flex flex-col items-center text-center gap-2.5"
        >
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
              className="w-full px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-xl font-bold text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Download Button */}
          <button
            onClick={handleDownloadCertificate}
            disabled={isDownloading}
            className="w-full py-2.5 sm:py-3 px-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-base sm:text-lg rounded-2xl border-3 border-emerald-900 shadow-[0_4px_0_#064E3B] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <Download className="w-5 h-5" />
            <span>{isDownloading ? 'جارٍ تحضير الشهادة...' : 'تحميل الشهادة (PNG)'}</span>
          </button>
        </motion.div>

        {/* Celebrating Characters Row Below (Detective, Adam, Robot) */}
        <div className="flex items-end justify-center gap-4 sm:gap-8 mt-4">
          <div className="flex flex-col items-center">
            <DetectiveAvatar size={90} />
            <span className="text-[11px] font-bold text-amber-300">المحقق</span>
          </div>
          <div className="flex flex-col items-center">
            <AdamAvatar size={90} isWaving={true} />
            <span className="text-[11px] font-bold text-sky-300">آدم يشكرك!</span>
          </div>
          <div className="flex flex-col items-center hidden sm:flex">
            <RobotAvatar size={80} />
            <span className="text-[11px] font-bold text-slate-300">الروبوت</span>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="relative z-20 w-full px-6 py-3.5 flex items-center justify-between">
        {/* Play Again Button on Bottom Left */}
        <button
          onClick={() => {
            onAudioClick?.();
            onResetGame();
          }}
          className="px-6 sm:px-8 py-2 sm:py-2.5 bg-[#FDE68A] hover:bg-[#FCD34D] text-[#3D2411] font-black text-base sm:text-lg rounded-2xl border-3 border-[#3D2411] shadow-[0_3px_0_#3D2411] active:translate-y-1 active:shadow-none transition-all flex items-center gap-1.5 cursor-pointer"
        >
          <RotateCcw className="w-5 h-5 text-[#3D2411]" />
          <span>إعادة اللعب 🔄</span>
        </button>

        <div className="w-12 h-12 invisible"></div>
      </div>
    </div>
  );
};
