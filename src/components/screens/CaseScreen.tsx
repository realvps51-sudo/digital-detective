import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GameCase, QuestionOption } from '../../types/game';
import { EmailClue } from '../clues/EmailClue';
import { ChatClue } from '../clues/ChatClue';
import { PhoneSMSClue } from '../clues/PhoneSMSClue';
import { WarningAlertClue } from '../clues/WarningAlertClue';
import { SocialPostClue } from '../clues/SocialPostClue';
import { FeedbackModal } from '../common/FeedbackModal';
import { HelpCircle } from 'lucide-react';

interface CaseScreenProps {
  currentCase: GameCase;
  isLastCase: boolean;
  onCaseSolved: (caseId: number) => void;
  onNextCase: () => void;
  onAudioClick?: () => void;
  onPlayCorrect?: () => void;
  onPlayWrong?: () => void;
}

export const CaseScreen: React.FC<CaseScreenProps> = ({
  currentCase,
  isLastCase,
  onCaseSolved,
  onNextCase,
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
    <div className="flex-1 flex flex-col items-center justify-start p-3 sm:p-5 w-full max-w-4xl mx-auto">
      {/* Case Title Bar (Matching Storyboard Panels 3-7 Top Title) */}
      <div className="w-full text-center mb-3">
        <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-wide">
          {currentCase.title}: <span className="text-amber-600">{currentCase.subtitle}</span>
        </h2>
      </div>

      {/* Main Content Layout: Clue on top, Question on bottom */}
      <motion.div
        key={currentCase.id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="w-full flex flex-col gap-4"
      >
        {/* 1. Clue Card Container */}
        <div className="w-full flex justify-center">
          {renderClue()}
        </div>

        {/* 2. Question & Options Card (Matching Panels 3-7 Bottom Box) */}
        <div className="w-full bg-white rounded-3xl p-4 sm:p-6 shadow-xl border-4 border-amber-300 flex flex-col gap-4">
          {/* Question Text Box */}
          <div className="bg-amber-50/80 rounded-2xl p-3 sm:p-4 border border-amber-200 flex items-start gap-2.5">
            <div className="p-1.5 bg-amber-500 text-white rounded-xl shrink-0 mt-0.5">
              <HelpCircle className="w-5 h-5" />
            </div>
            <p className="font-black text-base sm:text-xl text-slate-800 leading-relaxed">
              {currentCase.question.text}
            </p>
          </div>

          {/* Option Buttons (A & B) */}
          <div className="flex flex-col gap-3">
            {currentCase.question.options.map((option, idx) => {
              // Alternate stylish colors matching storyboard (A: Blue/Slate, B: Amber/Orange)
              const isOptionA = idx === 0;

              return (
                <button
                  key={option.id}
                  onClick={() => {
                    onAudioClick?.();
                    handleSelectOption(option);
                  }}
                  className={`w-full text-right p-3.5 sm:p-4 rounded-2xl font-extrabold text-sm sm:text-lg border-2 border-b-4 active:border-b-2 active:translate-y-0.5 transition-all shadow-md flex items-center justify-between cursor-pointer ${
                    isOptionA
                      ? 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-300 active:bg-slate-200'
                      : 'bg-amber-400 hover:bg-amber-300 text-amber-950 border-amber-600 active:bg-amber-500'
                  }`}
                >
                  <span className="flex-1">{option.text}</span>
                  <span
                    className={`mr-3 w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm shrink-0 border ${
                      isOptionA
                        ? 'bg-white text-slate-700 border-slate-300'
                        : 'bg-amber-500 text-white border-amber-700'
                    }`}
                  >
                    {isOptionA ? 'أ' : 'ب'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Instant Pedagogical Feedback Modal */}
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
