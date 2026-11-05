import React from 'react';
import { Send, Plus, UserX } from 'lucide-react';
import { AdamAvatar } from '../common/Avatars';

export const ChatClue: React.FC = () => {
  return (
    <div className="w-full max-w-sm sm:max-w-md bg-white rounded-3xl border-4 border-[#1E293B] shadow-2xl overflow-hidden flex flex-col select-none">
      {/* Chat Window Top Bar (Matching Panel 4) */}
      <div className="bg-[#4A90E2] px-4 py-2 border-b-3 border-[#1E293B] flex items-center justify-between text-white">
        <div className="flex items-center gap-2">
          {/* Mac-style Window dots */}
          <div className="flex items-center gap-1.5 ml-1">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#1E293B]"></span>
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#1E293B]"></span>
            <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1E293B]"></span>
          </div>
        </div>
        <span className="font-black text-base tracking-wide">Chat</span>
        <div className="w-10"></div>
      </div>

      {/* Messages Canvas */}
      <div className="p-3 sm:p-4 bg-gradient-to-b from-sky-50 to-slate-100 min-h-[140px] sm:min-h-[160px] flex flex-col justify-center gap-3">
        {/* Stranger Message */}
        <div className="flex items-start gap-2 self-start max-w-[85%]">
          <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center shrink-0 border-2 border-[#1E293B]">
            <UserX className="w-4 h-4 text-amber-300" />
          </div>
          <div className="bg-white px-3.5 py-2 rounded-2xl rounded-tr-none border-2 border-[#1E293B] shadow-sm text-slate-900 font-extrabold text-sm sm:text-base">
            ما اسمك ورقم هاتفك؟
          </div>
        </div>

        {/* Adam's response - hesitant */}
        <div className="flex items-end gap-2 self-end max-w-[80%] flex-row-reverse">
          <div className="w-9 h-9 rounded-full overflow-hidden bg-sky-100 border-2 border-[#1E293B] shrink-0">
            <AdamAvatar size={36} />
          </div>
          <div className="bg-[#4A90E2] text-white px-3.5 py-2 rounded-2xl rounded-tl-none border-2 border-[#1E293B] shadow-sm font-extrabold text-sm sm:text-base">
            آدم... 🤔
          </div>
        </div>
      </div>

      {/* Bottom Message Input bar */}
      <div className="px-3 py-2 bg-slate-200 border-t-3 border-[#1E293B] flex items-center gap-2">
        <button className="text-slate-600 hover:text-slate-900 font-black text-lg">
          <Plus className="w-5 h-5" />
        </button>
        <div className="flex-1 bg-white h-7 rounded-xl border-2 border-[#1E293B]"></div>
        <button className="text-[#4A90E2] hover:text-[#357ABD]">
          <Send className="w-4 h-4 -scale-x-100" />
        </button>
      </div>
    </div>
  );
};
