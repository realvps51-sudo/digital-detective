import React from 'react';
import { Send, Plus, UserX } from 'lucide-react';
import { AdamAvatar } from '../common/Avatars';

export const ChatClue: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-md border-2 border-slate-200 overflow-hidden flex flex-col">
      {/* Chat Window Top Bar */}
      <div className="bg-sky-600 px-4 py-2.5 flex items-center justify-between text-white">
        <div className="flex items-center gap-2">
          {/* Mac-style Window dots */}
          <div className="flex items-center gap-1.5 ml-2">
            <span className="w-3 h-3 rounded-full bg-red-400"></span>
            <span className="w-3 h-3 rounded-full bg-amber-300"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
          </div>
          <span className="font-extrabold text-sm tracking-wide">محادثة فورية (Chat)</span>
        </div>
        <span className="text-xs bg-sky-700/80 px-2.5 py-1 rounded-full font-bold">مستخدم مجهول 👤</span>
      </div>

      {/* Messages Canvas */}
      <div className="p-4 sm:p-5 bg-gradient-to-b from-sky-50/50 to-slate-50 min-h-[190px] flex flex-col justify-center gap-3">
        {/* Incoming message from stranger */}
        <div className="flex items-start gap-2.5 self-start max-w-[85%]">
          <div className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center text-white shrink-0 shadow">
            <UserX className="w-5 h-5 text-amber-300" />
          </div>
          <div className="bg-white p-3 rounded-2xl rounded-tr-none shadow-sm border border-slate-200 text-slate-800">
            <div className="text-xs text-rose-500 font-extrabold mb-0.5">شخص غريب مجهول</div>
            <p className="font-extrabold text-sm sm:text-base">
              مرحباً يا بطل! ما اسمك الكامل، وعنوان بيتك، ورقم هاتفك لنلعب معاً؟
            </p>
          </div>
        </div>

        {/* Adam's response - hesitant */}
        <div className="flex items-end gap-2.5 self-end max-w-[80%] flex-row-reverse">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-sky-100 border border-sky-300 shrink-0">
            <AdamAvatar size={40} />
          </div>
          <div className="bg-sky-500 text-white p-3 rounded-2xl rounded-tl-none shadow-sm font-bold text-sm sm:text-base">
            <span>آدم: لحظة واحدة.. هل يجب أن أشارك هذه المعلومات الشخصية؟ 🤔</span>
          </div>
        </div>
      </div>

      {/* Chat Input Footer */}
      <div className="p-2.5 bg-slate-100 border-t border-slate-200 flex items-center gap-2">
        <button className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200 transition-colors">
          <Plus className="w-5 h-5" />
        </button>
        <div className="flex-1 bg-white px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-400 font-medium">
          اكتب ردك هنا...
        </div>
        <button className="p-2 bg-sky-600 text-white rounded-xl hover:bg-sky-500 transition-colors">
          <Send className="w-4 h-4 -scale-x-100" />
        </button>
      </div>
    </div>
  );
};
