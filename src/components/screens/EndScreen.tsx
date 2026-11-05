import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Download, RotateCcw, Trophy, CheckCircle, Sparkles, UserCheck } from 'lucide-react';
import { DetectiveAvatar, AdamAvatar, RobotAvatar } from '../common/Avatars';
import { downloadCertificateAsPNG } from '../../utils/certificate';

interface EndScreenProps {
  score: number;
  maxScore: number;
  studentName: string;
  onStudentNameChange: (name: string) => void;
  onResetGame: () => void;
  onAudioClick?: () => void;
  onPlayFanfare?: () => void;
}

export const EndScreen: React.FC<EndScreenProps> = ({
  score,
  maxScore,
  studentName,
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
    <div className="flex-1 flex flex-col items-center justify-center p-3 sm:p-6 w-full max-w-4xl mx-auto">
      {/* Celebration Detective Office Container (Matching Panel 8 in Storyboard) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-gradient-to-b from-[#2E3C48] to-[#1E293B] rounded-3xl p-5 sm:p-8 shadow-2xl border-4 border-[#475569] text-white flex flex-col items-center relative overflow-hidden"
      >
        {/* Top Header Title */}
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <h1 className="text-2xl sm:text-4xl font-black text-center tracking-wide">
            شاشة النهاية: كشف الحقيقة! 🎉
          </h1>
          <Sparkles className="w-5 h-5 text-amber-400" />
        </div>

        <p className="text-amber-200 text-sm sm:text-base font-bold text-center mb-6">
          أحسنت أيها المحقق! لقد اكتشفت مخاطر الإنترنت وساعدت صديقنا آدم على حماية بياناته بنجاح!
        </p>

        {/* Certificate Display Board in the Center */}
        <div className="w-full max-w-lg bg-[#FEF3C7] rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-amber-500 text-slate-800 text-center flex flex-col items-center gap-3 relative">
          <div className="w-14 h-14 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-md">
            <Trophy className="w-8 h-8 text-yellow-200" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-amber-950">
            شهادة المحقق الرقمي البطل 🛡️
          </h2>

          <div className="bg-amber-100/80 px-4 py-1.5 rounded-2xl border border-amber-300 font-black text-lg text-amber-900">
            مجموع النقاط: {score} / {maxScore}
          </div>

          <p className="text-base sm:text-lg font-extrabold text-emerald-800 flex items-center gap-1.5">
            <CheckCircle className="w-5 h-5 text-emerald-600" />
            <span>أداء ممتاز! لقد حميت آدم من كافة المخاطر الرقمية!</span>
          </p>

          {/* Student Name Input */}
          <div className="w-full mt-2 bg-white p-3 rounded-2xl border-2 border-amber-300 shadow-inner flex flex-col gap-1.5 text-right">
            <label className="text-xs font-bold text-slate-600 flex items-center gap-1">
              <UserCheck className="w-4 h-4 text-amber-600" />
              <span>اكتب اسمك ليظهر على الشهادة المعتمدة:</span>
            </label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => onStudentNameChange(e.target.value)}
              placeholder="اكتب اسم الطالب/ـة هنا..."
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Download Certificate Button */}
          <button
            onClick={handleDownloadCertificate}
            disabled={isDownloading}
            className="w-full mt-2 py-3.5 px-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-lg rounded-2xl shadow-tactile-green border-b-4 border-emerald-800 active:translate-y-1 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <Download className="w-5 h-5" />
            <span>{isDownloading ? 'جارٍ تحضير الشهادة...' : 'تحميل الشهادة (PNG)'}</span>
          </button>
        </div>

        {/* Characters celebrating below (Detective, Adam, Robot) */}
        <div className="flex items-end justify-center gap-4 sm:gap-8 mt-6">
          <div className="flex flex-col items-center">
            <DetectiveAvatar size={110} />
            <span className="text-xs font-bold text-amber-300 mt-1">المحقق الخبير</span>
          </div>
          <div className="flex flex-col items-center">
            <AdamAvatar size={110} isWaving={true} />
            <span className="text-xs font-bold text-sky-300 mt-1">آدم يشكرك!</span>
          </div>
          <div className="flex flex-col items-center hidden sm:flex">
            <RobotAvatar size={95} />
            <span className="text-xs font-bold text-slate-300 mt-1">الروبوت المساعد</span>
          </div>
        </div>

        {/* Play Again Button */}
        <div className="mt-6">
          <button
            onClick={() => {
              onAudioClick?.();
              onResetGame();
            }}
            className="px-8 py-3 bg-amber-500 hover:bg-amber-400 text-amber-950 font-black text-lg rounded-2xl shadow-tactile-wood border-b-4 border-amber-700 active:translate-y-1 transition-all flex items-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-5 h-5 text-amber-900" />
            <span>إعادة اللعب والتحقيق من جديد 🔄</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

