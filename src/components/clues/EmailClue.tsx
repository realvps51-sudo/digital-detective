import React from 'react';

export const EmailClue: React.FC = () => {
  return (
    <div className="w-full max-w-sm sm:max-w-md bg-[#CFE8F7] rounded-3xl border-4 border-[#1E293B] shadow-2xl p-4 sm:p-6 flex flex-col items-center justify-center select-none">
      {/* Outer Envelope Container (Pixel-perfect match to Storyboard Panel 3) */}
      <div className="relative w-48 sm:w-60 h-36 sm:h-44 flex items-center justify-center">
        {/* White Letter Card extending upwards */}
        <div className="absolute top-0 w-36 sm:w-44 h-24 sm:h-28 bg-white rounded-t-xl border-3 border-[#1E293B] shadow-sm flex flex-col items-center justify-start pt-2 z-10">
          <span className="text-red-600 font-black text-2xl sm:text-3xl tracking-wide">
            إعلان
          </span>
          <div className="w-20 sm:w-24 h-1.5 bg-slate-200 rounded-full mt-2"></div>
          <div className="w-14 sm:w-16 h-1.5 bg-slate-200 rounded-full mt-1.5"></div>
        </div>

        {/* Circular Red Exclamation Warning Badge (Overlapping Top-Right) */}
        <div className="absolute -top-3 right-1 sm:right-3 z-30 w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-[#E63946] border-3 sm:border-4 border-[#1E293B] flex items-center justify-center shadow-md">
          <span className="text-white font-black text-2xl sm:text-3xl">!</span>
        </div>

        {/* Yellow Envelope Back Flap */}
        <div className="absolute bottom-0 w-full h-28 sm:h-34 bg-[#F5A623] rounded-2xl border-4 border-[#1E293B] z-20 overflow-hidden shadow-lg flex flex-col justify-end items-center pb-2">
          {/* Envelope fold diagonal lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 240 140"
            preserveAspectRatio="none"
          >
            {/* Left triangle fold */}
            <path d="M0 0 L120 70 L0 140 Z" fill="#E09612" stroke="#1E293B" strokeWidth="3" />
            {/* Right triangle fold */}
            <path d="M240 0 L120 70 L240 140 Z" fill="#E09612" stroke="#1E293B" strokeWidth="3" />
            {/* Bottom triangle fold */}
            <path d="M0 140 L120 65 L240 140 Z" fill="#F5A623" stroke="#1E293B" strokeWidth="4" />
          </svg>

          {/* Underlined "Link" button (Matching image) */}
          <div className="relative z-30 bg-white/90 hover:bg-white px-5 py-1 rounded-lg border-2 border-[#1E293B] shadow-xs cursor-pointer active:scale-95 transition-all">
            <span className="text-[#0E7490] font-black text-lg sm:text-xl underline font-mono tracking-wider">
              Link
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
