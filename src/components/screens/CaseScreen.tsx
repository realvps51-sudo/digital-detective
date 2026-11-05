import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GameCase, QuestionOption } from '../../types/game';
import { EmailClue } from '../clues/EmailClue';
import { ChatClue } from '../clues/ChatClue';
import { PhoneSMSClue } from '../clues/PhoneSMSClue';
import { WarningAlertClue } from '../clues/WarningAlertClue';
import { SocialPostClue } from '../clues/SocialPostClue';
import { FeedbackModal } from '../common/FeedbackModal';
import { ArrowRight, Volume2, VolumeX } from 'lucide-react';

interface CaseScreenProps {
  currentCase: GameCase;
  isLastCase: boolean;
  score: number;
  isSoundMuted: boolean;
  onToggleSound: () => void;
  onCaseSolved: (caseId: number) => void;
  onNextCase: () => void;
  onBack: () => void;
  onAudioClick?: () => void;
  onPlayCorrect?: () => void;
  onPlayWrong?: () => void;
}

export const CaseScreen: React.FC<CaseScreenProps> = ({
  currentCase,
  isLastCase,
  score,
  isSoundMuted,
  onToggleSound,
  onCaseSolved,
  onNextCase,
  onBack,
  onAudioClick,
  onPlayCorrect,
  onPlayWrong,
}) => {
  const [selectedOption, setSelectedOption] = useState<QuestionOption | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Render matching clue mockup based on clueType
  const renderClue = () => {
    switch (currentCase.clueType) {
      case 'email':
        return <EmailClue />;
      case 'chat':
        return <ChatClue />;
      case 'sms':
        return <PhoneSMSClue />;
      case 'download':
        return <WarningAlertClue />;
      case 'social':
        return <SocialPostClue />;
      default:
        return null;
    }
  };

  const handleSelectOption = (option: QuestionOption) => {
    setSelectedOption(option);
    setIsModalOpen(true);

    if (option.isCorrect) {
      onPlayCorrect?.();
      onCaseSolved(currentCase.id);
    } else {
      onPlayWrong?.();
    }
  };

  const handleRetry = () => {
    setIsModalOpen(false);
    setSelectedOption(null);
  };

  const handleNext = () => {
    setIsModalOpen(false);
    setSelectedOption(null);
    onNextCase();
  };

  return (
    <div className="relative w-full min-h-screen h-screen overflow-hidden bg-[#1E293B] select-none flex flex-col justify-between font-cairo">
      {/* ================= BACKGROUND: DETECTIVE VAULT SCENE ================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#182332] via-[#202E40] to-[#121A24]"></div>
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_2rem]"></div>
        <div className="absolute bottom-0 w-full h-[12%] bg-gradient-to-t from-[#0F172A] to-[#1E293B] border-t-4 border-[#334155]"></div>

        {/* Circular Vault Outline in Background */}
        <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[380px] sm:w-[500px] h-[380px] sm:h-[500px] opacity-40 rounded-full border-[16px] border-[#29394D] flex items-center justify-center">
          <div className="w-[75%] h-[75%] rounded-full border-4 border-dashed border-[#475569]"></div>
        </div>
      </div>

      {/* ================= TOP BAR (Matching Panel 3 Screenshot) ================= */}
      <div className="relative z-20 w-full px-4 sm:px-8 py-3 flex items-center justify-between">
        {/* Top-Left: "Score: X" badge (Identical to Storyboard) */}
        <div className="bg-white/95 border-3 border-slate-800 text-slate-900 px-4 py-1.5 rounded-2xl shadow-lg font-black text-base sm:text-lg tracking-wide">
          Score: {score}
        </div>

        {/* Top-Center: Case Title */}
        <div className="bg-[#0F172A]/80 backdrop-blur-md px-5 py-1.5 rounded-2xl border-2 border-slate-700 text-white font-black text-sm sm:text-lg shadow">
          {currentCase.title}: <span className="text-amber-400">{currentCase.subtitle}</span>
        </div>

        {/* Top-Right: Sound toggle */}
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

      {/* ================= CENTER STAGE: CLUE + QUESTION (Matching Panel 3) ================= */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 max-w-2xl mx-auto w-full gap-3 sm:gap-4 my-auto">
        {/* 1. Clue Card in Upper Section */}
        <motion.div
          key={`clue-${currentCase.id}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full flex justify-center"
        >
          {renderClue()}
        </motion.div>

        {/* 2. Question Card in Lower Section (Matching Storyboard White/Cream Box) */}
        <motion.div
          key={`question-${currentCase.id}`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="w-full bg-[#FFFDF8] rounded-3xl border-4 border-[#3D2411] shadow-2xl p-4 sm:p-5 flex flex-col gap-3.5"
        >
          {/* Question Text */}
          <h2 className="text-base sm:text-xl font-black text-slate-900 text-center leading-relaxed">
            {currentCase.question.text}
          </h2>

          {/* Neutral Option Buttons - NONE ARE PRE-HIGHLIGHTED */}
          <div className="flex flex-col gap-2.5">
            {currentCase.question.options.map((option) => (
              <button
                key={option.id}
                onClick={() => {
                  onAudioClick?.();
                  handleSelectOption(option);
                }}
                className="w-full text-right p-3 sm:p-4 rounded-2xl font-black text-sm sm:text-base border-3 border-[#3D2411] bg-[#F1F5F9] hover:bg-[#E2E8F0] active:bg-[#CBD5E1] text-slate-900 shadow-md active:translate-y-0.5 transition-all flex items-center justify-between cursor-pointer"
              >
                <span className="flex-1">{option.text}</span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="relative z-20 w-full px-6 py-3.5 flex items-center justify-between">
        {/* Back Button "رجوع" to return to case board */}
        <button
          onClick={() => {
            onAudioClick?.();
            onBack();
          }}
          className="px-6 sm:px-8 py-2 sm:py-2.5 bg-[#FDE68A] hover:bg-[#FCD34D] text-[#3D2411] font-black text-base sm:text-lg rounded-2xl border-3 border-[#3D2411] shadow-[0_3px_0_#3D2411] active:translate-y-1 active:shadow-none transition-all flex items-center gap-1.5 cursor-pointer"
        >
          <ArrowRight className="w-5 h-5 text-[#3D2411]" />
          <span>رجوع للقضايا</span>
        </button>

        {/* Empty placeholder to keep balance, no scene number in corner */}
        <div className="w-12 h-12 invisible"></div>
      </div>

      {/* Pedagogical Feedback Modal */}
      <FeedbackModal
        isOpen={isModalOpen}
        isCorrect={selectedOption?.isCorrect ?? false}
        feedbackText={currentCase.question.feedback}
        isLastCase={isLastCase}
        onNext={handleNext}
        onRetry={handleRetry}
        onAudioClick={onAudioClick}
      />
    </div>
  );
};
