import React from 'react';
import { Volume2, VolumeX, ArrowRight, Award, RotateCcw } from 'lucide-react';
import { ScreenType } from '../../types/game';

interface HeaderProps {
  currentScreen: ScreenType;
  score: number;
  maxScore: number;
  isSoundMuted: boolean;
  onToggleSound: () => void;
  onGoBack?: () => void;
  onResetGame?: () => void;
  onAudioClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  score,
  maxScore,
  isSoundMuted,
  onToggleSound,
  onGoBack,
  onResetGame,
  onAudioClick,
}) => {
  return (
    <header className="w-full max-w-5xl mx-auto px-4 py-3 flex items-center justify-between z-20">
      {/* Right / Start Side: Back Button or Title */}
      <div className="flex items-center gap-2">
        {currentScreen !== 'START' && onGoBack && (
          <button
            onClick={() => {
              onAudioClick?.();
              onGoBack();
            }}
            className="flex items-center gap-1.5 px-3 py-2 bg-white/90 hover:bg-white text-slate-700 font-bold rounded-xl border border-slate-200 shadow-sm active:scale-95 transition-all text-sm sm:text-base cursor-pointer"
            title="الرجوع"
          >
            <ArrowRight className="w-4 h-4 text-amber-600" />
            <span>رجوع</span>
          </button>
        )}

        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-amber-50 rounded-xl border border-amber-200">
          <span className="text-xl">🕵️‍♂️</span>
          <span className="font-extrabold text-amber-900 text-sm tracking-wide">المحقق الرقمي</span>
        </div>
      </div>

      {/* Center Side: Score Badge */}
      <div className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-2xl shadow-md border-b-2 border-amber-700 font-extrabold text-sm sm:text-base">
        <Award className="w-5 h-5 text-amber-100" />
        <span className="tracking-wide">النقاط:</span>
        <span className="bg-white/20 px-2 py-0.5 rounded-lg font-black">{score} / {maxScore}</span>
      </div>

      {/* Left Side: Audio Toggle & Reset Option */}
      <div className="flex items-center gap-2">
        {onResetGame && currentScreen !== 'START' && (
          <button
            onClick={() => {
              if (window.confirm('هل تريد إعادة التحقيق من البداية وتصفير النقاط؟')) {
                onResetGame();
              }
            }}
            className="p-2 bg-white/80 hover:bg-white text-slate-500 hover:text-red-600 rounded-xl border border-slate-200 shadow-sm active:scale-95 transition-all cursor-pointer"
            title="إعادة اللعب من البداية"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        )}

        <button
          onClick={() => {
            onAudioClick?.();
            onToggleSound();
          }}
          className={`p-2.5 rounded-xl border shadow-sm active:scale-95 transition-all cursor-pointer flex items-center justify-center ${
            isSoundMuted
              ? 'bg-rose-50 border-rose-200 text-rose-600'
              : 'bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100'
          }`}
          title={isSoundMuted ? 'تشغيل المؤثرات الصوتية' : 'كتم الصوت'}
        >
          {isSoundMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>
    </header>
  );
};
