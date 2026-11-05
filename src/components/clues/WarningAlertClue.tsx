import React from 'react';

export const WarningAlertClue: React.FC = () => {
  return (
    <div className="w-full max-w-md sm:max-w-lg flex items-end justify-center gap-3 sm:gap-5 select-none py-1">
      {/* 1. Dangerous Folder on the Left (Matching Panel 6 in Storyboard) */}
      <div className="relative w-16 sm:w-20 h-18 sm:h-22 bg-[#3B5B66] rounded-xl sm:rounded-2xl border-3 sm:border-4 border-[#1E293B] shadow-xl flex items-center justify-center shrink-0 mb-3">
        {/* Folder Top Tab */}
        <div className="absolute -top-3 left-2 w-7 sm:w-9 h-3.5 bg-[#3B5B66] border-t-3 sm:border-t-4 border-x-3 sm:border-x-4 border-[#1E293B] rounded-t-md"></div>

        {/* Red Warning Triangle Badge with exclamation mark */}
        <div className="relative z-10 flex items-center justify-center">
          <svg
            width="38"
            height="34"
            viewBox="0 0 40 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sm:scale-115 drop-shadow"
          >
            <path
              d="M20 3 L37 32 C38 34 37 36 34 36 L6 36 C3 36 2 34 3 32 L20 3 Z"
              fill="#EF4444"
              stroke="#1E293B"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
            {/* Exclamation point */}
            <circle cx="20" cy="29" r="2" fill="#FFFFFF" />
            <path d="M20 13 L20 23" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* 2. Desktop Computer Monitor (Matching Panel 6) */}
      <div className="flex flex-col items-center">
        {/* Monitor Outer Frame */}
        <div className="w-64 sm:w-80 bg-[#1E293B] rounded-2xl p-2.5 sm:p-3 shadow-2xl border-4 border-[#0F172A] relative">
          {/* Light Cyan Monitor Screen */}
          <div className="w-full bg-[#9AC7D9] rounded-xl overflow-hidden border-2 border-slate-700 h-[155px] sm:h-[175px] relative flex flex-col justify-between p-2 shadow-inner">
            {/* Desktop Top Bar Dots */}
            <div className="flex items-center gap-1.5 pl-1 pt-0.5">
              <span className="w-2 h-2 rounded-full bg-red-400 border border-slate-700"></span>
              <span className="w-2 h-2 rounded-full bg-yellow-400 border border-slate-700"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 border border-slate-700"></span>
            </div>

            {/* Centered Download Popup Dialog Box (Matching Storyboard) */}
            <div className="self-center w-[92%] bg-[#FFFDF8] rounded-xl border-3 border-[#1E293B] shadow-xl overflow-hidden my-auto">
              {/* Red / Coral Dialog Header Bar */}
              <div className="bg-[#E65A4B] px-3 py-1 border-b-2 border-[#1E293B] flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/80"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/80"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/80"></span>
                </div>
                <div className="w-4"></div>
              </div>

              {/* Dialog Content */}
              <div className="p-2 sm:p-3 flex flex-col items-center gap-2">
                {/* Title */}
                <span className="font-black text-slate-900 text-xs sm:text-sm tracking-wide">
                  تحميل مجاني للعبة!
                </span>

                {/* Download Progress Bar Container */}
                <div className="w-full flex items-center gap-1.5 relative">
                  <div className="flex-1 bg-slate-200 h-5 sm:h-6 rounded-full border-2 border-[#1E293B] overflow-hidden p-0.5 flex items-center shadow-inner">
                    {/* Green Download Progress Fill (~65% completed with stripes) */}
                    <div className="h-full w-[65%] bg-gradient-to-r from-emerald-500 to-green-500 rounded-full relative overflow-hidden flex items-center justify-end pr-1">
                      <div className="w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_6px,rgba(255,255,255,0.3)_6px,rgba(255,255,255,0.3)_12px)] animate-pulse"></div>
                    </div>
                  </div>

                  {/* Cancel / Download Action Button */}
                  <div className="w-10 sm:w-12 h-5 sm:h-6 bg-[#FED7AA] border-2 border-[#1E293B] rounded-lg shadow-xs flex items-center justify-center">
                    <span className="text-[9px] font-black text-slate-800">تحميل</span>
                  </div>

                  {/* Red/Orange Mouse Cursor Arrow (Clicking the Button like image) */}
                  <div className="absolute -bottom-2.5 right-0.5 z-20 pointer-events-none">
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="drop-shadow-md"
                    >
                      <path
                        d="M3 2 L3 20 L8 15 L13 22 L16 20 L11 13 L18 13 Z"
                        fill="#E15B50"
                        stroke="#1E293B"
                        strokeWidth="2.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Screen Margin Spacer */}
            <div className="h-0.5"></div>
          </div>
        </div>

        {/* Monitor Neck Stand & Base */}
        <div className="w-10 h-3 bg-[#1E293B] border-x-3 border-[#0F172A]"></div>
        <div className="w-24 h-2.5 bg-[#1E293B] rounded-t-md border-t-3 border-x-3 border-[#0F172A] shadow-md"></div>

        {/* Desktop Mouse on the desk */}
        <div className="relative w-full flex justify-end pr-3 -mt-1.5">
          <div className="w-4 h-6 bg-[#334155] rounded-full border border-slate-700 shadow-xs"></div>
        </div>
      </div>
    </div>
  );
};
