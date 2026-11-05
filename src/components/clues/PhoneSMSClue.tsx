import React from 'react';
import { Smartphone, Lock, Unlock, MessageSquare, AlertCircle } from 'lucide-react';

export const PhoneSMSClue: React.FC = () => {
  return (
    <div className="w-full flex justify-center py-1">
      {/* Smartphone Outer Shell */}
      <div className="w-full max-w-xs sm:max-w-sm bg-slate-800 rounded-[2.5rem] p-3 shadow-xl border-4 border-slate-700">
        {/* Smartphone Screen */}
        <div className="bg-slate-50 rounded-[2rem] overflow-hidden flex flex-col min-h-[200px] border border-slate-300">
          {/* Top Notch & Status Bar */}
          <div className="bg-slate-200 px-4 py-1.5 flex items-center justify-between text-[11px] font-bold text-slate-600">
            <span>09:41</span>
            {/* Phone speaker notch */}
            <div className="w-16 h-3 bg-slate-700 rounded-full"></div>
            <div className="flex items-center gap-1">
              <span>5G</span>
              <div className="w-4 h-2.5 bg-slate-500 rounded-sm"></div>
            </div>
          </div>

          {/* SMS App Header */}
          <div className="bg-white px-3 py-2 border-b border-slate-200 flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-xs">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-black text-slate-800">رسالة قصيرة SMS</div>
                <div className="text-[10px] text-slate-400 font-mono">+966 5X XXX XXXX</div>
              </div>
            </div>
            <span className="text-[10px] bg-rose-100 text-rose-700 font-bold px-2 py-0.5 rounded-full">
              رابط مشبوه
            </span>
          </div>

          {/* Incoming SMS Bubble */}
          <div className="p-3 sm:p-4 flex-1 flex flex-col justify-center">
            <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-3 shadow-sm text-slate-800">
              <div className="flex items-center gap-1.5 text-xs text-amber-800 font-black mb-1">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                <span>إشعار عاجل!</span>
              </div>
              <p className="text-xs sm:text-sm font-bold leading-relaxed mb-2">
                تهانينا يا آدم! تم اختيار رقمك لجائزة كبرى، اضغط على الرابط التالي للدخول:
              </p>
              
              {/* Suspicious URL Display */}
              <div className="bg-white p-2 rounded-xl border border-rose-300 flex items-center justify-between font-mono text-xs sm:text-sm">
                <span className="text-rose-600 font-bold tracking-tight dir-ltr">
                  http://win-gift-prizes.xyz
                </span>
                <span className="flex items-center gap-1 text-[11px] text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md font-sans font-bold">
                  <Unlock className="w-3.5 h-3.5" /> غير آمن
                </span>
              </div>
            </div>

            {/* Educational Lock Hint */}
            <div className="mt-2.5 bg-emerald-50 border border-emerald-200 rounded-xl p-2 flex items-center gap-2 text-[11px] text-emerald-800 font-bold">
              <Lock className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>المواقع الآمنة تبدأ دائماً بـ <span className="font-mono text-emerald-700 font-black">https://</span> وتظهر علامة القفل 🔒</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

