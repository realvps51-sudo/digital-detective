import React from 'react';
import { Unlock } from 'lucide-react';

export const PhoneSMSClue: React.FC = () => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm flex justify-center select-none">
      {/* Smartphone Outer Shell (Matching Panel 5) */}
      <div className="w-full bg-[#1E293B] rounded-[2.5rem] p-3 border-4 border-[#0F172A] shadow-2xl">
        {/* Smartphone Screen */}
        <div className="bg-[#CFE8F7] rounded-[2rem] overflow-hidden border-2 border-slate-700 flex flex-col min-h-[170px] sm:min-h-[190px]">
          {/* Top Speaker notch */}
          <div className="bg-[#1E293B] h-4 flex items-center justify-center">
            <div className="w-12 h-1.5 bg-slate-500 rounded-full"></div>
          </div>

          {/* Screen Content: SMS Message */}
          <div className="p-3 sm:p-4 flex-1 flex flex-col items-center justify-center">
            {/* SMS Bubble */}
            <div className="w-full bg-white rounded-2xl p-3 border-3 border-[#1E293B] shadow-md text-center flex flex-col items-center gap-1.5">
              <span className="text-xs sm:text-sm font-black text-slate-800">
                رسالة SMS جديدة:
              </span>
              <p className="text-xs font-bold text-slate-600">
                مبروك! اضغط هنا لاستلام هديتك فوراً:
              </p>
              {/* Suspicious Link without HTTPS/lock */}
              <div className="bg-rose-50 px-3 py-1 rounded-xl border border-rose-300 flex items-center gap-1.5 text-xs font-mono font-bold text-rose-600 dir-ltr">
                <Unlock className="w-3.5 h-3.5 shrink-0" />
                <span>http://win-gift.xyz</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
