import React from 'react';
import { Mail, AlertTriangle, ExternalLink } from 'lucide-react';

export const EmailClue: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-md border-2 border-slate-200 overflow-hidden flex flex-col">
      {/* Email Client Header Bar */}
      <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between text-xs sm:text-sm text-slate-600">
        <div className="flex items-center gap-2 font-bold">
          <Mail className="w-4 h-4 text-amber-500" />
          <span>صندوق البريد الإلكتروني (Inbox)</span>
        </div>
        <span className="text-rose-500 font-extrabold flex items-center gap-1">
          <AlertTriangle className="w-3.5 h-3.5" /> رسالة مشبوهة
        </span>
      </div>

      {/* Email Sender & Meta */}
      <div className="p-3 sm:p-4 bg-slate-50/70 border-b border-slate-200 text-xs sm:text-sm flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <span className="font-extrabold text-slate-800">من: <span className="font-mono text-rose-600 dir-ltr inline-block">offers@unknown-prizes-99.xyz</span></span>
          <span className="text-slate-400 text-xs">منذ 5 دقائق</span>
        </div>
        <div className="font-bold text-slate-700">
          الموضوع: <span className="text-amber-700">🎉 مبروك يا آدم! لقد فزت بهاتف مجاني!</span>
        </div>
      </div>

      {/* Visual Envelope Mockup (Matching Panel 3 in Storyboard) */}
      <div className="p-4 sm:p-6 flex flex-col items-center justify-center bg-gradient-to-b from-amber-50/50 to-orange-50/30 min-h-[170px]">
        <div className="relative w-56 sm:w-64 bg-amber-400 rounded-2xl border-4 border-amber-600 shadow-lg p-3 text-center flex flex-col items-center">
          {/* Top Envelope flap shape */}
          <div className="w-full bg-white rounded-xl p-3 border-2 border-amber-500 shadow-inner flex flex-col items-center gap-2">
            <div className="flex items-center justify-center gap-1.5 text-red-600 font-black text-lg bg-red-50 px-4 py-1 rounded-full border border-red-200">
              <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-black">!</span>
              <span>إعلان مغرٍ</span>
            </div>
            <p className="text-xs text-slate-600 font-bold">
              اضغط على الرابط بالأسفل لاستلام هديتك فوراً!
            </p>
          </div>

          {/* Link button */}
          <div className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm py-2 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow border-b-2 border-blue-900 cursor-pointer">
            <ExternalLink className="w-4 h-4" />
            <span className="underline tracking-wider font-mono">Link / اضغط هنا</span>
          </div>
        </div>

        <div className="mt-3 text-xs text-slate-500 font-semibold flex items-center gap-1">
          <span>⚠️ انتبه: عنوان المرسل غير معروف ويطلب الضغط على رابط مجهول!</span>
        </div>
      </div>
    </div>
  );
};
