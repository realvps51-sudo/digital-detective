import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Unlock, CheckCircle2, ArrowRight } from 'lucide-react';
import { CASES_DATA } from '../../data/casesData';

interface CaseSelectScreenProps {
  unlockedCaseIds: number[];
  completedCaseIds: number[];
  onSelectCase: (caseId: number) => void;
  onBack: () => void;
  onAudioClick?: () => void;
}

export const CaseSelectScreen: React.FC<CaseSelectScreenProps> = ({
  unlockedCaseIds,
  completedCaseIds,
  onSelectCase,
  onBack,
  onAudioClick,
}) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 w-full max-w-4xl mx-auto">
      {/* Wooden Detective Corkboard (Matching Panel 2 in Storyboard) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full bg-[#BA8C54] rounded-3xl p-6 sm:p-8 shadow-2xl border-8 border-[#7C4D25] relative overflow-hidden flex flex-col items-center"
      >
        {/* Corkboard texture / pinboard styling */}
        <div className="absolute inset-0 bg-[radial-gradient(#854D0E_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none"></div>

        {/* Board Title Hanging Plaque */}
        <div className="relative mb-8 z-10">
          <div className="bg-[#FEF3C7] px-8 py-2.5 rounded-2xl border-4 border-[#92400E] shadow-md text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-[#78350F] tracking-wide">
              قضايا التحقيق 📁
            </h2>
          </div>
          {/* Decorative pin pins */}
          <div className="absolute -top-3 left-3 w-4 h-4 rounded-full bg-red-600 shadow-sm border border-red-800"></div>
          <div className="absolute -top-3 right-3 w-4 h-4 rounded-full bg-red-600 shadow-sm border border-red-800"></div>
        </div>

        {/* 5 Case Folders Grid (Layout: 3 on top, 2 on bottom) */}
        <div className="w-full max-w-2xl flex flex-col items-center gap-6 z-10">
          {/* Row 1: Cases 1, 2, 3 */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 w-full">
            {CASES_DATA.slice(0, 3).map((c) => {
              const isUnlocked = unlockedCaseIds.includes(c.id);
              const isCompleted = completedCaseIds.includes(c.id);

              return (
                <CaseFolderCard
                  key={c.id}
                  caseNumber={c.id}
                  title={c.subtitle}
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

          {/* Row 2: Cases 4, 5 */}
          <div className="grid grid-cols-2 gap-4 sm:gap-8 w-2/3 max-w-md">
            {CASES_DATA.slice(3, 5).map((c) => {
              const isUnlocked = unlockedCaseIds.includes(c.id);
              const isCompleted = completedCaseIds.includes(c.id);

              return (
                <CaseFolderCard
                  key={c.id}
                  caseNumber={c.id}
                  title={c.subtitle}
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

        {/* Bottom Bar: Back Button */}
        <div className="w-full flex justify-start mt-8 z-10">
          <button
            onClick={() => {
              onAudioClick?.();
              onBack();
            }}
            className="px-6 py-2.5 bg-[#FEF3C7] hover:bg-[#FDE68A] text-[#78350F] font-black text-base rounded-2xl border-2 border-[#92400E] shadow-tactile-wood active:translate-y-1 transition-all flex items-center gap-2 cursor-pointer"
          >
            <ArrowRight className="w-5 h-5 text-[#92400E]" />
            <span>رجوع</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

// Subcomponent for each Case Folder Card
interface CaseFolderCardProps {
  caseNumber: number;
  title: string;
  isUnlocked: boolean;
  isCompleted: boolean;
  onClick: () => void;
}

const CaseFolderCard: React.FC<CaseFolderCardProps> = ({
  caseNumber,
  title,
  isUnlocked,
  isCompleted,
  onClick,
}) => {
  return (
    <motion.div
      whileHover={isUnlocked ? { scale: 1.05, y: -4 } : {}}
      whileTap={isUnlocked ? { scale: 0.95 } : {}}
      onClick={onClick}
      className={`relative rounded-2xl p-3 sm:p-4 border-4 flex flex-col items-center justify-between text-center select-none shadow-lg transition-all ${
        isUnlocked
          ? 'bg-[#FDFBF7] border-amber-600 cursor-pointer shadow-tactile-wood hover:border-amber-700'
          : 'bg-[#E2D5C3]/80 border-[#9E8A73] opacity-75 cursor-not-allowed'
      }`}
    >
      {/* Folder Tab Shape */}
      <div
        className={`absolute -top-3 right-4 px-3 py-0.5 rounded-t-lg text-xs font-black border-t-2 border-x-2 ${
          isUnlocked
            ? 'bg-[#FDFBF7] border-amber-600 text-amber-900'
            : 'bg-[#E2D5C3] border-[#9E8A73] text-stone-500'
        }`}
      >
        ملف {caseNumber}
      </div>

      {/* Case Number Badge */}
      <div className="mt-1 font-black text-2xl sm:text-3xl text-amber-950">
        {caseNumber}
      </div>

      {/* Title */}
      <div className="my-1.5 font-bold text-xs sm:text-sm text-slate-800 line-clamp-1">
        {title}
      </div>

      {/* Status Icon Indicator (Matching padlock style in Storyboard) */}
      <div className="mt-1">
        {isCompleted ? (
          <div className="w-9 h-9 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center text-emerald-600 shadow-sm">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        ) : isUnlocked ? (
          <div className="w-9 h-9 rounded-full bg-sky-100 border-2 border-sky-500 flex items-center justify-center text-sky-600 shadow-sm animate-pulse">
            <Unlock className="w-5 h-5" />
          </div>
        ) : (
          <div className="w-9 h-9 rounded-full bg-amber-100 border-2 border-amber-500 flex items-center justify-center text-amber-700 shadow-sm">
            <Lock className="w-5 h-5" />
          </div>
        )}
      </div>
    </motion.div>
  );
};

