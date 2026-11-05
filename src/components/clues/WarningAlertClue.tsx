import React from 'react';
import { AlertTriangle, Download, FolderX } from 'lucide-react';

export const WarningAlertClue: React.FC = () => {
  return (
    <div className="w-full max-w-sm sm:max-w-md flex flex-col items-center select-none">
      {/* Desktop Computer Monitor Mockup (Matching Panel 6) */}
      <div className="w-full bg-[#1E293B] rounded-2xl p-2.5 sm:p-3 shadow-2xl border-4 border-[#0F172A]">
        {/* Monitor Screen Frame */}
        <div className="bg-[#CFE8F7] rounded-xl overflow-hidden border-2 border-slate-700 min-h-[140px] sm:min-h-[160px] flex flex-col justify-between p-3">
          {/* Browser Window Bar */}
          <div className="flex items-center gap-1.5 pb-2 border-b-2 border-slate-300">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          </div>

          {/* Alert Box in Center */}
          <div className="bg-white rounded-xl border-3 border-[#1E293B] p-2.5 sm:p-3 text-center shadow-md flex flex-col items-center gap-1.5 my-1">
            <div className="flex items-center gap-1.5 text-rose-600 font-black text-sm sm:text-base">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <span>تحميل مجاني للعبة!</span>
            </div>

            {/* Fake Download Bar */}
            <div className="w-full bg-emerald-50 border-2 border-emerald-500 rounded-lg py-1 px-3 flex items-center justify-center gap-1.5 text-emerald-800 font-extrabold text-xs">
              <Download className="w-4 h-4 text-emerald-600" />
              <span>Game_Setup_Free.exe</span>
            </div>
          </div>

          {/* Warning notice below */}
          <div className="flex items-center justify-center gap-1.5 text-[11px] font-extrabold text-rose-700 bg-rose-50 rounded-lg p-1 border border-rose-200">
            <FolderX className="w-4 h-4 shrink-0 text-rose-600" />
            <span>ملف مجهول قد يحتوي على فيروسات تضر جهازك!</span>
          </div>
        </div>

        {/* Monitor Stand Base */}
        <div className="flex flex-col items-center mt-1">
          <div className="w-10 h-2.5 bg-slate-700"></div>
          <div className="w-24 h-2 bg-slate-600 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
