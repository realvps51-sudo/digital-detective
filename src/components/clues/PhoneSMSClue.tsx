import React from 'react';
import { User, Send, Wifi, Battery, Signal } from 'lucide-react';

export const PhoneSMSClue: React.FC = () => {
  return (
    <div className="w-full max-w-[270px] sm:max-w-[310px] flex justify-center select-none">
      {/* Smartphone Outer Casing (Matching Panel 5 in Storyboard) */}
      <div className="w-full bg-[#1E293B] rounded-[2.5rem] p-3 sm:p-3.5 border-4 border-[#0F172A] shadow-[0_20px_50px_rgba(0,0,0,0.7)] flex flex-col items-center">
        {/* Top Speaker & Front Camera Lens */}
        <div className="w-full flex items-center justify-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-[#334155]"></div>
          <div className="w-12 h-1.5 bg-[#334155] rounded-full"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#0F172A] border border-[#334155]"></div>
        </div>

        {/* Smartphone Screen Viewport */}
        <div className="w-full bg-[#ECEEF2] rounded-[1.8rem] overflow-hidden border-2 border-slate-700 flex flex-col justify-between h-[230px] sm:h-[260px] relative shadow-inner">
          {/* 1. Phone Top Status Bar */}
          <div className="w-full px-4 pt-1.5 pb-1 flex items-center justify-between text-[10px] font-bold text-slate-700">
            <span>10:24</span>
            <div className="flex items-center gap-1.5">
              <Signal className="w-3 h-3 text-slate-700" />
              <Wifi className="w-3 h-3 text-slate-700" />
              <Battery className="w-3.5 h-3.5 text-slate-700" />
            </div>
          </div>

          {/* 2. SMS Contact Header (Avatar Circle like image) */}
          <div className="flex flex-col items-center pt-1 pb-2 border-b border-slate-300 bg-white/60">
            <div className="w-9 h-9 rounded-full bg-slate-400 text-white flex items-center justify-center shadow-xs">
              <User className="w-5 h-5 text-slate-100" />
            </div>
            <span className="text-[11px] font-black text-slate-800 mt-0.5">
              رسالة نصية SMS
            </span>
            <span className="text-[9px] font-mono text-slate-500 dir-ltr">
              +966 5X XXX XXXX (مجهول)
            </span>
          </div>

          {/* 3. SMS Message Bubble in Center (Matching Storyboard Panel 5) */}
          <div className="flex-1 px-3 py-2 flex flex-col justify-center">
            <div className="relative bg-white rounded-2xl rounded-tr-xs p-3 border-2 border-slate-300 shadow-sm flex flex-col items-center text-center">
              {/* Little Speech Bubble Tail */}
              <div className="absolute -top-1.5 right-2 w-3 h-3 bg-white border-t-2 border-r-2 border-slate-300 rotate-45"></div>

              {/* Message Header Prompt */}
              <p className="text-xs sm:text-sm font-extrabold text-slate-800 leading-snug mb-1.5">
                وصلتك رسالة جديدة: اضغط على الرابط التالي للدخول فوراً!
              </p>

              {/* Blue Underlined Suspicious Link Pill (Identical to joprx.txb in image) */}
              <div className="w-full bg-[#E0F2FE] hover:bg-[#BAE6FD] py-1.5 px-3 rounded-xl border border-[#7DD3FC] shadow-xs cursor-pointer transition-colors">
                <span className="text-[#0284C7] font-black text-xs sm:text-sm underline font-mono tracking-wide dir-ltr block">
                  http://joprx.txb
                </span>
              </div>

              {/* Timestamp */}
              <div className="w-full flex justify-end mt-1.5 text-[9px] font-bold text-slate-400">
                10:24 ص
              </div>
            </div>
          </div>

          {/* 4. Bottom SMS Input Bar Simulation */}
          <div className="w-full px-3 py-1.5 bg-white border-t border-slate-300 flex items-center justify-between gap-1.5">
            <div className="flex-1 bg-slate-100 h-6 rounded-full px-2.5 flex items-center text-[10px] text-slate-400 font-medium">
              رسالة نصية...
            </div>
            <div className="w-6 h-6 rounded-full bg-sky-500 text-white flex items-center justify-center">
              <Send className="w-3 h-3 -scale-x-100" />
            </div>
          </div>
        </div>

        {/* Bottom Phone Chin Bar */}
        <div className="w-20 h-1 bg-slate-600 rounded-full mt-2"></div>
      </div>
    </div>
  );
};
