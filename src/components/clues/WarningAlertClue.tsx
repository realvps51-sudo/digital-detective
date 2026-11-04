import React from 'react';
import { Monitor, AlertTriangle, Download, FolderX, ShieldAlert } from 'lucide-react';

export const WarningAlertClue: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Desktop Computer Monitor Mockup (Matching Panel 6 in Storyboard) */}
      <div className="w-full max-w-lg bg-slate-800 rounded-2xl p-2.5 sm:p-3 shadow-xl border-4 border-slate-700">
        {/* Monitor Screen Frame */}
        <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700">
          {/* Browser Window Bar */}
          <div className="bg-slate-800 px-3 py-1.5 flex items-center justify-between border-b border-slate-700">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            </div>
            <div className="bg-slate-700/80 px-4 py-0.5 rounded-md text-[11px] font-mono text-rose-300 font-bold dir-ltr flex items-center gap-1">
              <ShieldAlert className="w-3 h-3 text-rose-400" />
              <span>http://free-games-crack.xyz/download.exe</span>
            </div>
          </div>

          {/* Screen Content */}
          <div className="p-4 sm:p-6 bg-gradient-to-b from-slate-100 to-slate-200 flex flex-col items-center justify-center min-h-[170px] relative">
            {/* Pop-up modal inside computer */}
            <div className="w-full max-w-sm bg-white rounded-xl shadow-lg border-2 border-amber-400 p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2 text-rose-600 font-black text-base sm:text-lg">
                <AlertTriangle className="w-6 h-6 animate-bounce" />
                <span>تحميل مجاني للعبة!</span>
              </div>

              <p className="text-xs text-slate-600 font-bold mb-3">
                ملف تشغيل مجهول: <span className="font-mono text-slate-900 font-black">GameInstaller_Free.exe</span>
              </p>

              {/* Fake Download Progress Bar / Button */}
              <div className="bg-emerald-50 hover:bg-emerald-100 border-2 border-emerald-500 text-emerald-800 font-black py-2 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow cursor-pointer">
                <Download className="w-4 h-4 text-emerald-600" />
                <span>بدء التحميل الفوري (150 MB)</span>
              </div>
            </div>

            {/* Folder Warning Tag on the side (like panel 6 storyboard) */}
            <div className="mt-3 flex items-center gap-2 bg-rose-50 border border-rose-300 px-3 py-1.5 rounded-lg text-xs font-bold text-rose-700">
              <FolderX className="w-4 h-4 text-rose-600" />
              <span>تحذير نظام الحماية: الملف من مصدر مجهول وقد يحتوي على برامج ضارة أو فيروسات!</span>
            </div>
          </div>
        </div>

        {/* Monitor Stand Base */}
        <div className="flex flex-col items-center mt-1">
          <div className="w-12 h-3 bg-slate-700"></div>
          <div className="w-28 h-2 bg-slate-600 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
