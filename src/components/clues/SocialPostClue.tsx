import React from 'react';
import { Lock, Globe, Camera } from 'lucide-react';
import { AdamAvatar } from '../common/Avatars';

export const SocialPostClue: React.FC = () => {
  return (
    <div className="w-full max-w-sm sm:max-w-md bg-white rounded-3xl border-4 border-[#1E293B] shadow-2xl overflow-hidden flex flex-col select-none">
      {/* Social App Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2 text-white flex items-center justify-between font-black text-sm">
        <span>نشر صورة جديدة</span>
        <Camera className="w-4 h-4" />
      </div>

      {/* Post Canvas (Matching Panel 7) */}
      <div className="p-3 sm:p-4 bg-gradient-to-b from-indigo-50/50 to-slate-100 flex flex-col gap-2.5">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full overflow-hidden bg-sky-100 border-2 border-indigo-400">
            <AdamAvatar size={36} />
          </div>
          <div>
            <div className="font-black text-slate-900 text-xs sm:text-sm">آدم</div>
            <div className="flex items-center gap-1 text-[11px] text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded-md font-bold mt-0.5">
              <Globe className="w-3 h-3" />
              <span>الخصوصية: عام (يراها أي شخص) ⚠️</span>
            </div>
          </div>
        </div>

        {/* Photo Box */}
        <div className="relative w-full bg-slate-900 rounded-xl overflow-hidden border-2 border-slate-700 aspect-[16/8] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-sky-400 to-emerald-400 opacity-70"></div>
          <div className="relative z-10 flex flex-col items-center">
            <AdamAvatar size={75} />
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-300 rounded-xl p-2 text-[11px] text-amber-900 font-bold flex items-center gap-1.5">
          <Lock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
          <span>الصور العائلية قد تصل للغرباء إذا لم تراجع إعدادات الخصوصية!</span>
        </div>
      </div>
    </div>
  );
};
