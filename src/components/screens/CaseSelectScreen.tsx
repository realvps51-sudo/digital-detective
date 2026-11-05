import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Volume2, VolumeX, Award, CheckCircle2 } from 'lucide-react';
import { CASES_DATA } from '../../data/casesData';

interface CaseSelectScreenProps {
  unlockedCaseIds: number[];
  completedCaseIds: number[];
  score: number;
  maxScore: number;
  isSoundMuted: boolean;
  onToggleSound: () => void;
  onSelectCase: (caseId: number) => void;
  onBack: () => void;
  onAudioClick?: () => void;
}

export const CaseSelectScreen: React.FC<CaseSelectScreenProps> = ({
  unlockedCaseIds,
  completedCaseIds,
  score,
  maxScore,
  isSoundMuted,
  onToggleSound,
  onSelectCase,
  onBack,
  onAudioClick,
}) => {
  return (
    <div className="relative w-full min-h-screen h-screen overflow-hidden bg-[#1E293B] select-none flex flex-col justify-between font-cairo">
      {/* ================= BACKGROUND: DETECTIVE OFFICE WALL ================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Wall Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#182332] via-[#202E40] to-[#121A24]"></div>

        {/* Stone / Brick Texture Grid Lines */}
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_2rem]"></div>

        {/* Floor Line */}
        <div className="absolute bottom-0 w-full h-[12%] bg-gradient-to-t from-[#0F172A] to-[#1E293B] border-t-4 border-[#334155]"></div>
      </div>

      {/* ================= TOP BAR: SCORE & SOUND CONTROLS ================= */}
      <div className="relative z-20 w-full px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between">
        {/* Score Pill */}
        <div className="flex items-center gap-2 bg-[#0F172A]/80 backdrop-blur-md text-white px-4 py-2 rounded-2xl border-2 border-slate-700 shadow-lg font-black text-sm sm:text-base">
          <Award className="w-5 h-5 text-amber-400" />
          <span className="text-slate-300">النقاط:</span>
          <span className="text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded-lg border border-amber-500/30">
            {score} / {maxScore}
          </span>
        </div>

        {/* Sound Toggle */}
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
          title={isSoundMuted ? 'تشغيل المؤثرات الصوتية' : 'كتم الصوت'}
        >
          {isSoundMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>

      {/* ================= CENTER: WOODEN BULLETIN BOARD ================= */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-3 sm:px-6 py-2 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative w-full max-w-3xl sm:max-w-4xl bg-[#9E6B38] rounded-2xl sm:rounded-3xl border-8 sm:border-[14px] border-[#5C3A1E] shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-4 sm:p-7 flex flex-col items-center"
        >
          {/* Inner Board Grain Texture */}
          <div className="absolute inset-0 bg-[#A6723D] opacity-90 rounded-lg sm:rounded-2xl pointer-events-none">
            {/* Subtle horizontal wood planks */}
            <div className="w-full h-full opacity-20 bg-[linear-gradient(to_bottom,transparent_0%,transparent_95%,#3D2411_100%)] bg-[size:100%_4.5rem]"></div>
          </div>

          {/* Hanging Title Plaque: "قضايا التحقيق" (Matching Image with Screws) */}
          <div className="relative -top-7 sm:-top-10 z-20">
            <div className="bg-[#FBF5E5] px-8 sm:px-14 py-2 sm:py-3 rounded-xl sm:rounded-2xl border-4 border-[#3D2411] shadow-lg flex items-center justify-between gap-4 relative">
              {/* Left Screw */}
              <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#523218] border border-[#261306] flex items-center justify-center">
                <div className="w-2 h-0.5 bg-[#261306]"></div>
              </div>

              {/* Title Text */}
              <h1 className="text-xl sm:text-3xl font-black text-[#261306] tracking-wide px-2">
                قضايا التحقيق
              </h1>

              {/* Right Screw */}
              <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#523218] border border-[#261306] flex items-center justify-center">
                <div className="w-2 h-0.5 bg-[#261306]"></div>
              </div>
            </div>
          </div>

          {/* Folders Layout (3 on Top Row, 2 on Bottom Row - Pixel Perfect match to screenshot) */}
          <div className="relative z-10 w-full flex flex-col items-center gap-4 sm:gap-6 -mt-2 sm:-mt-4">
            {/* Row 1: Folders 1, 2, 3 */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-2xl">
              {CASES_DATA.slice(0, 3).map((c) => {
                const isUnlocked = unlockedCaseIds.includes(c.id);
                const isCompleted = completedCaseIds.includes(c.id);

                return (
                  <ManilaFolder
                    key={c.id}
                    caseNumber={c.id}
                    isUnlocked={isUnlocked}
                    isCompleted={isCompleted}
                    onClick={() => {
                      if (isUnlocked) {
                        onAudioClick?.();
                        onSelectCase(c.id);
                      }
                    }}
                  />
                );
              })}
            </div>

            {/* Row 2: Folders 4, 5 */}
            <div className="grid grid-cols-2 gap-4 sm:gap-8 w-2/3 max-w-md">
              {CASES_DATA.slice(3, 5).map((c) => {
                const isUnlocked = unlockedCaseIds.includes(c.id);
                const isCompleted = completedCaseIds.includes(c.id);

                return (
                  <ManilaFolder
                    key={c.id}
                    caseNumber={c.id}
                    isUnlocked={isUnlocked}
                    isCompleted={isCompleted}
                    onClick={() => {
                      if (isUnlocked) {
                        onAudioClick?.();
                        onSelectCase(c.id);
                      }
                    }}
                  />
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ================= BOTTOM BAR: BACK BUTTON (Matching Image) ================= */}
      <div className="relative z-20 w-full px-6 py-4 flex items-center justify-between">
        {/* Back Button "رجوع" on the bottom-left */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            onAudioClick?.();
            onBack();
          }}
          className="px-7 sm:px-10 py-2.5 sm:py-3 bg-[#FDE68A] hover:bg-[#FCD34D] text-[#3D2411] font-black text-lg sm:text-xl rounded-2xl border-4 border-[#3D2411] shadow-[0_4px_0_#3D2411] active:translate-y-1 active:shadow-none transition-all flex items-center gap-2 cursor-pointer"
        >
          <ArrowRight className="w-5 h-5 text-[#3D2411]" />
          <span>رجوع</span>
        </motion.button>

        {/* Balance spacer */}
        <div className="w-12 h-12 invisible"></div>
      </div>
    </div>
  );
};

// ================= PIXEL-PERFECT MANILA FOLDER COMPONENT =================
interface ManilaFolderProps {
  caseNumber: number;
  isUnlocked: boolean;
  isCompleted: boolean;
  onClick: () => void;
}

const ManilaFolder: React.FC<ManilaFolderProps> = ({
  caseNumber,
  isUnlocked,
  isCompleted,
  onClick,
}) => {
  return (
    <motion.div
      whileHover={isUnlocked ? { scale: 1.06, y: -4 } : {}}
      whileTap={isUnlocked ? { scale: 0.95 } : {}}
      onClick={onClick}
      className={`relative select-none transition-all flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl sm:rounded-3xl border-3 sm:border-4 border-[#3D2411] aspect-[4/3.8] shadow-lg ${
        isUnlocked
          ? 'bg-[#FEE4A6] cursor-pointer hover:bg-[#FDE094]'
          : 'bg-[#EBD297] opacity-85 cursor-not-allowed'
      } ${
        isUnlocked && !isCompleted
          ? 'ring-4 ring-[#38BDF8] ring-offset-2 ring-offset-transparent'
          : ''
      }`}
    >
      {/* Folder Tab on the Right with 3 dots (Identical to Storyboard) */}
      <div className="absolute -top-3.5 right-3 sm:right-5 w-8 sm:w-10 h-4 bg-[#FEE4A6] border-t-3 sm:border-t-4 border-x-3 sm:border-x-4 border-[#3D2411] rounded-t-lg flex items-center justify-center gap-0.5">
        <span className="w-1 h-1 rounded-full bg-[#3D2411]"></span>
        <span className="w-1 h-1 rounded-full bg-[#3D2411]"></span>
        <span className="w-1 h-1 rounded-full bg-[#3D2411]"></span>
      </div>

      {/* Case Number */}
      <span className="font-black text-2xl sm:text-4xl text-[#261306] mb-1">
        {caseNumber}
      </span>

      {/* Padlock Illustration (Matching Cyan unlocked or Orange locked) */}
      <div className="mt-0.5">
        {isCompleted ? (
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-emerald-100 border-3 border-emerald-600 flex items-center justify-center text-emerald-700 shadow-sm">
            <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
        ) : isUnlocked ? (
          /* Unlocked Cyan Padlock */
          <svg
            width="38"
            height="46"
            viewBox="0 0 38 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sm:scale-110 drop-shadow"
          >
            {/* Open Shackle */}
            <path
              d="M13 18 V10 C13 5 16 2 21 2 C26 2 29 5 29 10 V14"
              stroke="#3D2411"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Padlock Body */}
            <rect
              x="3"
              y="18"
              width="32"
              height="26"
              rx="6"
              fill="#38BDF8"
              stroke="#3D2411"
              strokeWidth="4"
            />
            {/* Keyhole */}
            <circle cx="19" cy="29" r="2.5" fill="#3D2411" />
            <path d="M19 29 L19 35" stroke="#3D2411" strokeWidth="3" strokeLinecap="round" />
          </svg>
        ) : (
          /* Locked Orange Padlock */
          <svg
            width="38"
            height="46"
            viewBox="0 0 38 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sm:scale-110 drop-shadow"
          >
            {/* Closed Shackle */}
            <path
              d="M11 18 V10 C11 5 15 2 19 2 C23 2 27 5 27 10 V18"
              stroke="#3D2411"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Padlock Body */}
            <rect
              x="3"
              y="18"
              width="32"
              height="26"
              rx="6"
              fill="#F59E0B"
              stroke="#3D2411"
              strokeWidth="4"
            />
            {/* Keyhole */}
            <circle cx="19" cy="29" r="2.5" fill="#3D2411" />
            <path d="M19 29 L19 35" stroke="#3D2411" strokeWidth="3" strokeLinecap="round" />
          </svg>
        )}
      </div>
    </motion.div>
  );
};
