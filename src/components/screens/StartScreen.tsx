import React from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Maximize2 } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
  onAudioClick?: () => void;
  isSoundMuted?: boolean;
  onToggleSound?: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({
  onStart,
  onAudioClick,
  isSoundMuted = false,
  onToggleSound,
}) => {
  // Optional browser fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  return (
    <div className="relative w-full min-h-screen h-screen overflow-hidden bg-[#1E293B] select-none flex flex-col justify-between font-cairo">
      {/* ================= BACKGROUND SCENE (Vault & Detective Office) ================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Wall & Ambient Shadow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#182332] via-[#202E40] to-[#121A24]"></div>

        {/* Stone / Brick Texture Lines */}
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_2rem]"></div>

        {/* Floor */}
        <div className="absolute bottom-0 w-full h-[18%] bg-gradient-to-t from-[#0F172A] to-[#1E293B] border-t-4 border-[#334155]"></div>

        {/* Wooden Detective Desk & Chair on the Left */}
        <div className="absolute left-[3%] bottom-[12%] hidden sm:block opacity-90">
          {/* Chair back */}
          <div className="absolute -left-3 -top-12 w-12 h-20 bg-[#6E2B2B] rounded-t-xl border-4 border-[#451818] shadow-md"></div>
          {/* Desk Top */}
          <div className="w-40 sm:w-56 h-8 bg-[#8B5A2B] rounded-md border-b-4 border-[#5C3A1E] shadow-xl relative">
            <div className="absolute top-1 left-4 w-12 h-3 bg-[#A06D3B] rounded-xs"></div>
            {/* Drawer */}
            <div className="absolute -bottom-14 left-2 w-16 h-14 bg-[#6D4321] border-2 border-[#4A2D16] rounded-xs flex flex-col items-center justify-around py-1">
              <div className="w-6 h-1.5 bg-[#4A2D16] rounded-full"></div>
              <div className="w-6 h-1.5 bg-[#4A2D16] rounded-full"></div>
            </div>
            {/* Desk Legs */}
            <div className="absolute -bottom-16 right-3 w-3 h-16 bg-[#5C3A1E]"></div>
            <div className="absolute -bottom-16 left-20 w-3 h-16 bg-[#5C3A1E]"></div>
          </div>
        </div>

        {/* Massive Bank Vault Door in the Center / Right */}
        <div className="absolute right-[5%] sm:right-[15%] md:right-[20%] top-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] md:w-[560px] h-[340px] sm:h-[480px] md:h-[560px] opacity-80 flex items-center justify-center">
          {/* Outer Vault Rim with Bolted Rivets */}
          <div className="w-full h-full rounded-full border-[14px] sm:border-[20px] border-[#29394D] bg-[#182433] shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] relative flex items-center justify-center">
            {/* Rivets around rim */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
              <div
                key={deg}
                className="absolute w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#475569] border border-[#1E293B] shadow-inner"
                style={{
                  transform: `rotate(${deg}deg) translate(0, -${155}px)`,
                }}
              />
            ))}

            {/* Inner Vault Door Circle */}
            <div className="w-[80%] h-[80%] rounded-full border-8 border-[#334155] bg-gradient-to-tr from-[#16212E] to-[#26374A] flex items-center justify-center relative shadow-2xl">
              {/* Concentric rings */}
              <div className="w-[65%] h-[65%] rounded-full border-4 border-dashed border-[#475569] flex items-center justify-center">
                {/* Vault Door Wheel / Handle */}
                <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#334155] border-4 border-[#64748B] flex items-center justify-center relative shadow-lg">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1E293B] border-2 border-[#94A3B8]"></div>
                  {/* Wheel Spokes */}
                  <div className="absolute w-full h-2.5 bg-[#475569]"></div>
                  <div className="absolute h-full w-2.5 bg-[#475569]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= TOP CONTROLS & LOGO ================= */}
      <div className="relative z-20 w-full p-4 sm:p-6 flex items-center justify-between">
        <div className="flex items-center gap-2 bg-[#0F172A]/70 backdrop-blur-md px-4 py-2 rounded-2xl border-2 border-slate-700 text-white shadow-lg">
          <span className="text-xl">🕵️‍♂️</span>
          <span className="font-extrabold text-sm sm:text-base tracking-wide text-amber-300">
            المحقق الرقمي - شاشة البداية
          </span>
        </div>

        {/* Fullscreen helper button */}
        <button
          onClick={toggleFullscreen}
          className="p-2.5 bg-[#0F172A]/70 hover:bg-[#0F172A] text-slate-300 hover:text-white rounded-2xl border-2 border-slate-700 shadow-md active:scale-95 transition-all cursor-pointer"
          title="ملء الشاشة"
        >
          <Maximize2 className="w-5 h-5" />
        </button>
      </div>

      {/* ================= MAIN CHARACTER STAGE & SPEECH BUBBLE ================= */}
      <div className="relative z-10 flex-1 flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-8 px-4 max-w-6xl mx-auto w-full">
        {/* Full Characters Illustration (Detective + Robot) matching storyboard */}
        <div className="flex items-end justify-center gap-2 sm:gap-6 shrink-0 mt-4 md:mt-0">
          {/* Full-Body Detective */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <FullBodyDetective />
          </motion.div>

          {/* Full-Body Robot Assistant */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col items-center"
          >
            <FullBodyRobot />
          </motion.div>
        </div>

        {/* Comic Dialogue Speech Bubble (Matching Panel 1) */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="relative bg-white text-slate-900 p-5 sm:p-7 rounded-[2.5rem] shadow-2xl border-4 border-slate-900 max-w-md sm:max-w-lg text-center md:text-right"
        >
          {/* Bubble Pointer (Tail) pointing towards characters */}
          <div className="hidden md:block absolute top-1/2 -right-5 -translate-y-1/2 w-0 h-0 border-y-[12px] border-y-transparent border-l-[20px] border-l-slate-900">
            <div className="absolute -top-[9px] -left-[20px] w-0 h-0 border-y-[9px] border-y-transparent border-l-[16px] border-l-white"></div>
          </div>

          <h2 className="text-xl sm:text-2xl font-black leading-relaxed text-slate-900">
            مرحباً أيها المحقق! تلقينا بلاغاً من آدم، هل أنت جاهز للتحقيق في الجرائم الرقمية؟
          </h2>

          <div className="mt-3 flex items-center justify-center md:justify-start gap-2 text-xs sm:text-sm font-extrabold text-sky-800 bg-sky-50 px-3 py-1.5 rounded-xl border border-sky-200">
            <span>🛡️ ساعد صديقنا آدم في جمع الأدلة وحماية بياناته</span>
          </div>
        </motion.div>
      </div>

      {/* ================= BOTTOM ACTION BAR ================= */}
      <div className="relative z-20 w-full px-6 py-4 flex items-center justify-between">
        {/* Bottom Left: Settings Gear & Audio Toggle */}
        <div className="flex items-center gap-2">
          {onToggleSound && (
            <button
              onClick={() => {
                onAudioClick?.();
                onToggleSound();
              }}
              className="w-12 h-12 rounded-full bg-gradient-to-b from-[#B45309] to-[#78350F] hover:from-[#D97706] hover:to-[#92400E] border-3 border-[#FDE68A] shadow-tactile-wood text-white flex items-center justify-center active:scale-95 transition-all cursor-pointer"
              title={isSoundMuted ? 'تشغيل الصوت' : 'كتم الصوت'}
            >
              {isSoundMuted ? <VolumeX className="w-5 h-5 text-red-300" /> : <Volume2 className="w-5 h-5 text-amber-200" />}
            </button>
          )}
        </div>

        {/* Center: Primary Play Button "ابدأ التحقيق" (Matching Cyan Pill Button in Panel 1) */}
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => {
            onAudioClick?.();
            onStart();
          }}
          className="px-8 sm:px-14 py-3.5 sm:py-4 bg-[#7DD3FC] hover:bg-[#38BDF8] text-slate-950 font-black text-2xl sm:text-3xl rounded-2xl sm:rounded-3xl shadow-[0_6px_0_#0369A1] border-4 border-slate-950 active:translate-y-1.5 active:shadow-[0_1px_0_#0369A1] transition-all cursor-pointer flex items-center justify-center tracking-wide"
        >
          ابدأ التحقيق
        </motion.button>

        {/* Empty placeholder to keep the center button perfectly balanced */}
        <div className="w-12 h-12 invisible"></div>
      </div>
    </div>
  );
};

// ================= FULL BODY DETECTIVE SVG COMPONENT =================
const FullBodyDetective: React.FC = () => (
  <svg
    width="220"
    height="320"
    viewBox="0 0 220 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
  >
    {/* Legs & Shoes */}
    <rect x="75" y="240" width="24" height="50" rx="6" fill="#3E2718" />
    <rect x="115" y="240" width="24" height="50" rx="6" fill="#3E2718" />
    {/* Shoes */}
    <ellipse cx="85" cy="294" rx="18" ry="8" fill="#1C1008" />
    <ellipse cx="129" cy="294" rx="18" ry="8" fill="#1C1008" />

    {/* Detective Trench Coat Body */}
    <path
      d="M55 140 C55 110 75 100 107 100 C139 100 159 110 159 140 L166 250 C166 255 160 260 155 260 L59 260 C54 260 48 255 48 250 Z"
      fill="#8C5832"
      stroke="#2A180D"
      strokeWidth="4"
    />
    {/* Coat Lapels */}
    <path d="M88 102 L107 155 L126 102 Z" fill="#6A4020" stroke="#2A180D" strokeWidth="3" />
    <path d="M107 155 L107 260" stroke="#2A180D" strokeWidth="4" />
    {/* Double Breasted Buttons */}
    <circle cx="94" cy="175" r="4.5" fill="#2A180D" />
    <circle cx="120" cy="175" r="4.5" fill="#2A180D" />
    <circle cx="94" cy="205" r="4.5" fill="#2A180D" />
    <circle cx="120" cy="205" r="4.5" fill="#2A180D" />
    <circle cx="94" cy="235" r="4.5" fill="#2A180D" />
    <circle cx="120" cy="235" r="4.5" fill="#2A180D" />

    {/* Right Arm holding Notebook close to chest */}
    <g>
      <path d="M55 130 C45 155 50 185 75 195" stroke="#8C5832" strokeWidth="22" strokeLinecap="round" />
      <path d="M55 130 C45 155 50 185 75 195" stroke="#2A180D" strokeWidth="4" fill="none" />
      {/* Hand */}
      <circle cx="85" cy="195" r="10" fill="#FDD6BA" stroke="#2A180D" strokeWidth="3" />
      {/* Detective Notebook */}
      <rect
        x="72"
        y="170"
        width="26"
        height="38"
        rx="3"
        fill="#5A2E17"
        stroke="#2A180D"
        strokeWidth="3"
        transform="rotate(-10 72 170)"
      />
      {/* Notebook Strap / Bookmark */}
      <rect
        x="82"
        y="170"
        width="5"
        height="38"
        fill="#B45309"
        transform="rotate(-10 72 170)"
      />
    </g>

    {/* Left Arm holding Magnifying Glass up */}
    <g>
      <path d="M155 130 C175 150 180 160 168 185" stroke="#8C5832" strokeWidth="22" strokeLinecap="round" />
      <path d="M155 130 C175 150 180 160 168 185" stroke="#2A180D" strokeWidth="4" fill="none" />
      {/* Hand */}
      <circle cx="165" cy="170" r="11" fill="#FDD6BA" stroke="#2A180D" strokeWidth="3" />
      {/* Magnifying Glass Handle */}
      <rect
        x="162"
        y="155"
        width="7"
        height="32"
        rx="3.5"
        fill="#4A2810"
        stroke="#1E0F07"
        strokeWidth="3"
        transform="rotate(25 162 155)"
      />
      {/* Magnifying Glass Rim */}
      <circle
        cx="182"
        cy="132"
        r="28"
        stroke="#334155"
        strokeWidth="7"
        fill="#BAE6FD"
        fillOpacity="0.5"
      />
      <circle cx="182" cy="132" r="28" stroke="#0F172A" strokeWidth="4" fill="none" />
      <circle cx="182" cy="132" r="23" stroke="#38BDF8" strokeWidth="2" fill="none" />
      {/* Glass Light Reflection */}
      <path d="M168 122 Q178 114 192 118" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
    </g>

    {/* Head */}
    <circle cx="107" cy="80" r="35" fill="#FDD6BA" stroke="#2A180D" strokeWidth="4" />
    {/* Hair curls */}
    <path
      d="M72 75 C65 52 85 45 107 45 C129 45 149 52 142 75 C138 65 125 58 107 58 C89 58 76 65 72 75 Z"
      fill="#451A03"
      stroke="#2A180D"
      strokeWidth="3"
    />
    <path d="M68 85 C62 95 66 108 72 112" stroke="#451A03" strokeWidth="6" strokeLinecap="round" />
    <path d="M146 85 C152 95 148 108 142 112" stroke="#451A03" strokeWidth="6" strokeLinecap="round" />

    {/* Eyes */}
    <circle cx="94" cy="82" r="6" fill="#1C1008" />
    <circle cx="96" cy="80" r="2" fill="#FFFFFF" />
    <circle cx="120" cy="82" r="6" fill="#1C1008" />
    <circle cx="122" cy="80" r="2" fill="#FFFFFF" />

    {/* Cheeks */}
    <ellipse cx="85" cy="92" rx="5" ry="3.5" fill="#F87171" opacity="0.65" />
    <ellipse cx="129" cy="92" rx="5" ry="3.5" fill="#F87171" opacity="0.65" />

    {/* Friendly Confident Smile */}
    <path d="M100 96 Q107 106 114 96" stroke="#5A2E17" strokeWidth="3.5" strokeLinecap="round" />

    {/* Fedora Hat */}
    <ellipse cx="107" cy="52" rx="60" ry="12" fill="#6A4020" stroke="#2A180D" strokeWidth="4" />
    <path
      d="M75 52 C75 22 86 18 107 16 C128 18 139 22 139 52 Z"
      fill="#8C5832"
      stroke="#2A180D"
      strokeWidth="4"
    />
    {/* Hat Band */}
    <path
      d="M75 48 C85 44 129 44 139 48 L139 53 C129 49 85 49 75 53 Z"
      fill="#2A180D"
    />
    {/* Hat Top Indent */}
    <path d="M96 18 Q107 24 118 18" stroke="#451A03" strokeWidth="3.5" strokeLinecap="round" />
  </svg>
);

// ================= FULL BODY ROBOT SVG COMPONENT =================
const FullBodyRobot: React.FC = () => (
  <svg
    width="160"
    height="230"
    viewBox="0 0 160 230"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
  >
    {/* Antenna */}
    <line x1="80" y1="42" x2="80" y2="18" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
    <circle cx="80" cy="14" r="9" fill="#EF4444" stroke="#7F1D1D" strokeWidth="3" className="animate-pulse" />

    {/* Ear Joints */}
    <rect x="22" y="65" width="12" height="22" rx="4" fill="#64748B" stroke="#1E293B" strokeWidth="3" />
    <rect x="126" y="65" width="12" height="22" rx="4" fill="#64748B" stroke="#1E293B" strokeWidth="3" />

    {/* Robot Head Outer Shell */}
    <rect
      x="28"
      y="38"
      width="104"
      height="76"
      rx="24"
      fill="#E2E8F0"
      stroke="#1E293B"
      strokeWidth="4"
    />

    {/* Dark Glass Screen Face */}
    <rect
      x="38"
      y="48"
      width="84"
      height="56"
      rx="16"
      fill="#0F172A"
      stroke="#334155"
      strokeWidth="2"
    />

    {/* Glowing Cyan Eyes */}
    <rect x="52" y="62" width="16" height="22" rx="7" fill="#38BDF8" className="animate-pulse" />
    <rect x="92" y="62" width="16" height="22" rx="7" fill="#38BDF8" className="animate-pulse" />

    {/* Happy Digital Curve Smile */}
    <path
      d="M68 88 Q80 96 92 88"
      stroke="#38BDF8"
      strokeWidth="3.5"
      strokeLinecap="round"
      fill="none"
    />

    {/* Neck Joint */}
    <rect x="70" y="114" width="20" height="12" rx="3" fill="#64748B" stroke="#1E293B" strokeWidth="3" />

    {/* Robot Body Torso */}
    <rect
      x="42"
      y="126"
      width="76"
      height="62"
      rx="18"
      fill="#CBD5E1"
      stroke="#1E293B"
      strokeWidth="4"
    />

    {/* Chest Cyan Screen/Badge */}
    <rect
      x="56"
      y="138"
      width="48"
      height="30"
      rx="8"
      fill="#0284C7"
      stroke="#0369A1"
      strokeWidth="2"
    />
    <path d="M70 153 L77 160 L90 146" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />

    {/* Robot Arms */}
    <rect
      x="20"
      y="134"
      width="16"
      height="44"
      rx="8"
      fill="#94A3B8"
      stroke="#1E293B"
      strokeWidth="3"
    />
    <circle cx="28" cy="184" r="8" fill="#64748B" stroke="#1E293B" strokeWidth="3" />

    <rect
      x="124"
      y="134"
      width="16"
      height="44"
      rx="8"
      fill="#94A3B8"
      stroke="#1E293B"
      strokeWidth="3"
    />
    <circle cx="132" cy="184" r="8" fill="#64748B" stroke="#1E293B" strokeWidth="3" />

    {/* Robot Legs & Feet */}
    <rect x="54" y="188" width="16" height="24" rx="4" fill="#64748B" stroke="#1E293B" strokeWidth="3" />
    <rect x="90" y="188" width="16" height="24" rx="4" fill="#64748B" stroke="#1E293B" strokeWidth="3" />
    <ellipse cx="62" cy="216" rx="14" ry="7" fill="#E2E8F0" stroke="#1E293B" strokeWidth="3" />
    <ellipse cx="98" cy="216" rx="14" ry="7" fill="#E2E8F0" stroke="#1E293B" strokeWidth="3" />
  </svg>
);
