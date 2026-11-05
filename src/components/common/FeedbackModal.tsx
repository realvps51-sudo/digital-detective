import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, ArrowLeft, RotateCcw, Trophy } from 'lucide-react';

interface FeedbackModalProps {
  isOpen: boolean;
  isCorrect: boolean;
  feedbackText: string;
  isLastCase: boolean;
  onNext: () => void;
  onRetry: () => void;
  onAudioClick?: () => void;
}

export const FeedbackModal: React.FC<FeedbackModalProps> = ({
  isOpen,
  isCorrect,
  feedbackText,
  isLastCase,
  onNext,
  onRetry,
  onAudioClick,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className={`w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl border-4 text-center ${
              isCorrect
                ? 'bg-gradient-to-b from-emerald-50 via-white to-emerald-50/40 border-emerald-500'
                : 'bg-gradient-to-b from-amber-50 via-white to-amber-50/40 border-amber-500'
            }`}
          >
            {/* Top Icon Badge */}
            <div className="flex justify-center mb-4">
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg ${
                  isCorrect
                    ? 'bg-emerald-500 text-white shadow-emerald-200 ring-8 ring-emerald-100'
                    : 'bg-amber-500 text-white shadow-amber-200 ring-8 ring-amber-100'
                }`}
              >
                {isCorrect ? (
                  <CheckCircle2 className="w-12 h-12" />
                ) : (
                  <AlertCircle className="w-12 h-12" />
                )}
              </div>
            </div>

            {/* Title */}
            <h3
              className={`text-2xl sm:text-3xl font-black mb-3 ${
                isCorrect ? 'text-emerald-800' : 'text-amber-800'
              }`}
            >
              {isCorrect ? 'إجابة صحيحة! أحسنت 🌟' : 'حاول مرة أخرى! 🤔'}
            </h3>

            {/* Points Gain Tag (Only if correct) */}
            {isCorrect && (
              <div className="inline-flex items-center gap-1.5 px-4 py-1 bg-emerald-100 text-emerald-800 font-extrabold rounded-full text-sm mb-4 border border-emerald-300">
                <span>+10 نقاط للأمان الرقمي</span>
              </div>
            )}

            {/* Explanation / Feedback Body */}
            <p className="text-slate-700 text-base sm:text-lg font-bold leading-relaxed mb-6 bg-white/80 p-4 rounded-2xl border border-slate-100 shadow-inner">
              {isCorrect ? feedbackText : 'إجابة غير صحيحة، فكر جيداً في المخاطر التي قد يتعرض لها آدم وكيف تحمي بياناته من الاختراق.'}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              {isCorrect ? (
                <button
                  onClick={() => {
                    onAudioClick?.();
                    onNext();
                  }}
                  className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-lg rounded-2xl shadow-tactile-green border-b-4 border-emerald-800 active:translate-y-1 active:border-b-0 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isLastCase ? (
                    <>
                      <Trophy className="w-6 h-6 text-yellow-300" />
                      <span>كشف الحقيقة واستلام الشهادة</span>
                    </>
                  ) : (
                    <>
                      <span>القضية التالية</span>
                      <ArrowLeft className="w-6 h-6" />
                    </>
                  )}
                </button>
              ) : (
                <button
                  onClick={() => {
                    onAudioClick?.();
                    onRetry();
                  }}
                  className="w-full sm:w-auto px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-white font-black text-lg rounded-2xl shadow-tactile-amber border-b-4 border-amber-700 active:translate-y-1 active:border-b-0 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-5 h-5" />
                  <span>إعادة المحاولة</span>
                </button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

