import React from 'react';
import { Share2, Globe, Lock, Users, Sparkles, Image as ImageIcon } from 'lucide-react';
import { AdamAvatar } from '../common/Avatars';

export const SocialPostClue: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-md border-2 border-slate-200 overflow-hidden flex flex-col">
      {/* Social App Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2.5 text-white flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Share2 className="w-4 h-4" />
          <span className="font-extrabold text-sm">مشاركة منشور جديد (Social Post)</span>
        </div>
        <span className="text-xs bg-white/20 px-2.5 py-0.5 rounded-full font-bold">
          إعدادات الخصوصية
        </span>
      </div>

      {/* Post Composer Canvas (Matching Panel 7 in Storyboard) */}
      <div className="p-4 sm:p-5 bg-gradient-to-b from-indigo-50/40 to-slate-50 flex flex-col gap-3">
        {/* User Info & Privacy Dropdown Simulation */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-sky-100 border-2 border-indigo-400">
              <AdamAvatar size={40} />
            </div>
            <div>
              <div className="font-extrabold text-slate-800 text-sm">آدم</div>
              <div className="flex items-center gap-1 text-xs text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded-md font-bold mt-0.5">
                <Globe className="w-3 h-3" />
                <span>الخصوصية الحالية: عام (يراها الجميع) ⚠️</span>
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-500 font-semibold hidden sm:block">
            جاهز للنشر 📸
          </div>
        </div>

        {/* Photo Preview Container */}
        <div className="relative w-full bg-slate-900 rounded-xl overflow-hidden border-2 border-indigo-200 aspect-[16/9] max-h-48 flex items-center justify-center">
          {/* Decorative background representing garden/room */}
          <div className="absolute inset-0 bg-gradient-to-b from-sky-400 to-emerald-400 opacity-80"></div>
          
          {/* Cartoon Adam selfie simulation */}
          <div className="relative z-10 flex flex-col items-center">
            <AdamAvatar size={110} />
            <div className="bg-black/50 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-full mt-1 flex items-center gap-1">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>صورة عائلية مع تفاصيل المنزل</span>
            </div>
          </div>
        </div>

        {/* Privacy Selector Notice */}
        <div className="bg-amber-50 border border-amber-300 rounded-xl p-2.5 text-xs text-amber-900 font-bold flex items-center gap-2">
          <Lock className="w-4 h-4 text-amber-600 shrink-0" />
          <span>تنبيه الخصوصية: الصور المنشورة للعامة قد تبقى على الإنترنت للأبد وتصل إلى أشخاص غرباء!</span>
        </div>
      </div>
    </div>
  );
};

