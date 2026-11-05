import React from 'react';

export const SocialPostClue: React.FC = () => {
  return (
    <div className="w-full max-w-lg sm:max-w-xl flex items-center justify-center gap-4 sm:gap-8 select-none py-1">
      {/* 1. Adam Sitting on the Armchair Holding Smartphone (Matching Panel 7 Left) */}
      <div className="relative shrink-0 flex items-end">
        <svg
          width="190"
          height="190"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-xl sm:scale-105"
        >
          {/* Orange Armchair Back */}
          <path
            d="M30 185 C25 140 25 90 40 75 C48 65 65 65 70 85 L70 185 Z"
            fill="#E66A23"
            stroke="#261306"
            strokeWidth="4"
          />

          {/* Adam Body & Blue Shirt */}
          <path
            d="M55 185 C55 130 75 115 105 115 C135 115 150 130 150 185 Z"
            fill="#0284C7"
            stroke="#1E293B"
            strokeWidth="4"
          />
          {/* White Shirt Collar */}
          <path
            d="M90 115 Q105 125 120 115"
            stroke="#FFFFFF"
            strokeWidth="4"
            strokeLinecap="round"
            fill="#FDD6BA"
          />

          {/* Adam's Head */}
          <circle cx="110" cy="75" r="34" fill="#FDD6BA" stroke="#261306" strokeWidth="4" />

          {/* Spiky Boy Hair */}
          <path
            d="M75 72 C70 45 88 32 112 32 C135 32 152 45 146 72 C150 60 142 42 130 38 C120 32 112 38 108 34 C100 32 90 32 82 38 C75 44 72 60 75 72 Z"
            fill="#451A03"
            stroke="#261306"
            strokeWidth="3.5"
          />
          {/* Hair spikes on top */}
          <path d="M100 32 L106 20 L115 30 L124 22 L130 34" stroke="#451A03" strokeWidth="4" strokeLinejoin="round" />

          {/* Eyes */}
          <circle cx="102" cy="74" r="6" fill="#1E293B" />
          <circle cx="104" cy="72" r="2" fill="#FFFFFF" />
          <circle cx="126" cy="74" r="6" fill="#1E293B" />
          <circle cx="128" cy="72" r="2" fill="#FFFFFF" />

          {/* Eyebrows */}
          <path d="M96 65 Q102 62 108 65" stroke="#451A03" strokeWidth="3" strokeLinecap="round" />
          <path d="M122 65 Q128 62 134 65" stroke="#451A03" strokeWidth="3" strokeLinecap="round" />

          {/* Rosy Cheeks */}
          <ellipse cx="94" cy="83" rx="5" ry="3.5" fill="#FDA4AF" opacity="0.8" />
          <ellipse cx="136" cy="83" rx="5" ry="3.5" fill="#FDA4AF" opacity="0.8" />

          {/* Happy Smile */}
          <path d="M106 85 Q115 95 124 85" stroke="#B45309" strokeWidth="3.5" strokeLinecap="round" fill="#FFF5F5" />

          {/* Left Arm & Hand Holding Smartphone */}
          <g>
            {/* Arm */}
            <path d="M135 130 C145 145 145 160 135 175" stroke="#0284C7" strokeWidth="18" strokeLinecap="round" />
            <path d="M135 130 C145 145 145 160 135 175" stroke="#1E293B" strokeWidth="4" fill="none" />
            {/* Hand */}
            <circle cx="140" cy="165" r="10" fill="#FDD6BA" stroke="#1E293B" strokeWidth="3" />
            {/* Smartphone in Hand */}
            <rect
              x="134"
              y="135"
              width="24"
              height="44"
              rx="6"
              fill="#334155"
              stroke="#0F172A"
              strokeWidth="3.5"
              transform="rotate(12 134 135)"
            />
            {/* Phone Screen */}
            <rect
              x="137"
              y="139"
              width="18"
              height="34"
              rx="3"
              fill="#7DD3FC"
              transform="rotate(12 134 135)"
            />
          </g>

          {/* Right Arm & Finger Tapping the Smartphone Screen */}
          <g>
            <path d="M78 135 C88 150 105 160 125 158" stroke="#0284C7" strokeWidth="16" strokeLinecap="round" />
            <path d="M78 135 C88 150 105 160 125 158" stroke="#1E293B" strokeWidth="3.5" fill="none" />
            {/* Hand with pointing finger */}
            <circle cx="123" cy="158" r="7" fill="#FDD6BA" stroke="#1E293B" strokeWidth="2.5" />
            <path d="M125 158 L136 156" stroke="#FDD6BA" strokeWidth="5" strokeLinecap="round" />
            <path d="M125 158 L136 156" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" fill="none" />
          </g>
        </svg>
      </div>

      {/* 2. Framed Selfie Photo Card (Matching Panel 7 Right) */}
      <div className="relative shrink-0 flex flex-col items-center">
        {/* White Photo Frame with Dark Outer Border */}
        <div className="bg-white p-2.5 sm:p-3 rounded-2xl border-4 border-[#1E293B] shadow-2xl w-44 sm:w-52 h-34 sm:h-40 flex items-center justify-center overflow-hidden">
          {/* Inside Photo Canvas (Adam Selfie Outdoor Scenery) */}
          <div className="w-full h-full rounded-xl overflow-hidden relative border-2 border-slate-300 flex items-end justify-center bg-gradient-to-b from-[#7CD5F5] via-[#A6E5FA] to-[#BFEAA3]">
            {/* Decorative Background: Landscape & Mountains */}
            <div className="absolute top-2 right-2 w-10 h-4 bg-white/70 rounded-full"></div>
            <div className="absolute top-4 left-3 w-8 h-3 bg-white/70 rounded-full"></div>
            <div className="absolute bottom-4 left-0 w-16 h-12 bg-[#86D364] rounded-t-full opacity-80"></div>
            <div className="absolute bottom-3 right-0 w-20 h-14 bg-[#5CB838] rounded-t-full opacity-80"></div>

            {/* Selfie Adam in the Photo (Smaller illustration holding up phone) */}
            <div className="relative z-10 -bottom-1">
              <svg width="110" height="110" viewBox="0 0 120 120" fill="none">
                {/* Adam Shirt */}
                <path d="M25 120 C25 85 45 78 60 78 C75 78 95 85 95 120 Z" fill="#0284C7" stroke="#1E293B" strokeWidth="3" />
                {/* Adam Head */}
                <circle cx="60" cy="52" r="22" fill="#FDD6BA" stroke="#1E293B" strokeWidth="3" />
                {/* Hair */}
                <path d="M40 50 C36 32 48 24 62 24 C78 24 86 32 82 50 C86 42 76 30 62 28 C50 28 44 40 40 50 Z" fill="#451A03" />
                {/* Face details */}
                <circle cx="53" cy="52" r="3.5" fill="#1E293B" />
                <circle cx="67" cy="52" r="3.5" fill="#1E293B" />
                <path d="M57 60 Q60 65 65 60" stroke="#B45309" strokeWidth="2.5" strokeLinecap="round" />
                {/* Arm holding up selfie phone */}
                <path d="M78 88 C88 80 92 68 88 56" stroke="#0284C7" strokeWidth="11" strokeLinecap="round" />
                <path d="M78 88 C88 80 92 68 88 56" stroke="#1E293B" strokeWidth="2.5" fill="none" />
                <rect x="83" y="44" width="12" height="22" rx="3" fill="#334155" stroke="#0F172A" strokeWidth="2" />
                <rect x="85" y="46" width="8" height="18" rx="1.5" fill="#38BDF8" />
              </svg>
            </div>
          </div>
        </div>

        {/* Small Caption below photo */}
        <span className="text-[11px] font-extrabold text-amber-300 mt-1.5 bg-[#0F172A]/70 px-2.5 py-0.5 rounded-full border border-slate-700">
          صورة شخصية مع تفاصيل الموقع 📍
        </span>
      </div>
    </div>
  );
};
