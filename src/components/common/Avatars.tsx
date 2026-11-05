import React from 'react';

// Friendly Detective Character Illustration
export const DetectiveAvatar: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 160 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    className={`drop-shadow-lg ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Detective Trench Coat */}
    <path d="M50 170 C50 135 70 120 100 120 C130 120 150 135 150 170 L155 200 L45 200 Z" fill="#9A6B43" />
    <path d="M85 120 L100 150 L115 120 Z" fill="#784E29" />
    <path d="M96 150 L104 150 L104 200 L96 200 Z" fill="#5A3A1E" />
    {/* Buttons */}
    <circle cx="110" cy="165" r="4" fill="#3D2614" />
    <circle cx="110" cy="185" r="4" fill="#3D2614" />

    {/* Detective Face */}
    <circle cx="100" cy="85" r="38" fill="#FDD6BA" />
    {/* Hair strands */}
    <path d="M66 75 C60 55 80 50 100 50 C120 50 140 55 134 75 C130 65 115 60 100 60 C85 60 70 65 66 75 Z" fill="#4A2E1B" />
    <path d="M62 85 C58 95 62 105 65 110 C62 100 64 90 62 85 Z" fill="#4A2E1B" />
    <path d="M138 85 C142 95 138 105 135 110 C138 100 136 90 138 85 Z" fill="#4A2E1B" />

    {/* Eyes */}
    <circle cx="86" cy="88" r="6" fill="#2C1810" />
    <circle cx="88" cy="86" r="2" fill="#FFFFFF" />
    <circle cx="114" cy="88" r="6" fill="#2C1810" />
    <circle cx="116" cy="86" r="2" fill="#FFFFFF" />

    {/* Rosy Cheeks */}
    <ellipse cx="76" cy="98" rx="5" ry="3" fill="#F87171" opacity="0.6" />
    <ellipse cx="124" cy="98" rx="5" ry="3" fill="#F87171" opacity="0.6" />

    {/* Smile */}
    <path d="M92 104 Q100 112 108 104" stroke="#854D0E" strokeWidth="3" strokeLinecap="round" />

    {/* Detective Fedora Hat */}
    <ellipse cx="100" cy="55" rx="58" ry="12" fill="#784E29" />
    <path d="M68 55 C68 25 78 22 100 20 C122 22 132 25 132 55 Z" fill="#9A6B43" />
    {/* Hat Band */}
    <path d="M69 52 C75 48 125 48 131 52 L132 56 C125 52 75 52 68 56 Z" fill="#3D2614" />
    {/* Hat top indent */}
    <path d="M90 22 Q100 26 110 22" stroke="#633C1B" strokeWidth="3" strokeLinecap="round" />

    {/* Magnifying Glass held in hand */}
    <g transform="translate(130, 80) rotate(15)">
      {/* Hand */}
      <circle cx="10" cy="45" r="9" fill="#FDD6BA" />
      {/* Handle */}
      <rect x="7" y="52" width="6" height="24" rx="2" fill="#78350F" />
      {/* Rim */}
      <circle cx="10" cy="25" r="22" stroke="#475569" strokeWidth="5" fill="#E0F2FE" fillOpacity="0.4" />
      <circle cx="10" cy="25" r="18" stroke="#38BDF8" strokeWidth="2" fill="none" />
      {/* Glass shine */}
      <path d="M0 16 Q8 10 18 14" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
    </g>
  </svg>
);

// Friendly Assistant Robot
export const RobotAvatar: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 150 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    className={`drop-shadow-lg ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Antenna */}
    <line x1="100" y1="42" x2="100" y2="18" stroke="#64748B" strokeWidth="5" strokeLinecap="round" />
    <circle cx="100" cy="14" r="8" fill="#38BDF8" className="animate-pulse" />

    {/* Ears */}
    <rect x="42" y="65" width="10" height="20" rx="3" fill="#64748B" />
    <rect x="148" y="65" width="10" height="20" rx="3" fill="#64748B" />

    {/* Robot Head Body */}
    <rect x="48" y="38" width="104" height="74" rx="22" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="4" />
    
    {/* Screen Face */}
    <rect x="58" y="48" width="84" height="54" rx="14" fill="#0F172A" />

    {/* Cyan Glowing Eyes */}
    <rect x="72" y="62" width="16" height="20" rx="6" fill="#38BDF8" />
    <rect x="112" y="62" width="16" height="20" rx="6" fill="#38BDF8" />

    {/* Friendly Digital Smile */}
    <path d="M88 88 Q100 94 112 88" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" fill="none" />

    {/* Robot Neck */}
    <rect x="90" y="112" width="20" height="12" rx="2" fill="#64748B" />

    {/* Robot Body */}
    <rect x="62" y="124" width="76" height="58" rx="16" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="3" />
    
    {/* Chest Light / Badge */}
    <circle cx="100" cy="150" r="14" fill="#0284C7" />
    <path d="M96 150 L99 153 L105 147" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

    {/* Arms */}
    <rect x="42" y="132" width="14" height="38" rx="7" fill="#94A3B8" />
    <rect x="144" y="132" width="14" height="38" rx="7" fill="#94A3B8" />
  </svg>
);

// Adam Character (the boy being helped)
export const AdamAvatar: React.FC<{ className?: string; size?: number; isWaving?: boolean }> = ({
  className = '',
  size = 150,
  isWaving = false,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    className={`drop-shadow-lg ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Adam's Body & Shirt */}
    <path d="M55 165 C55 135 75 125 100 125 C125 125 145 135 145 165 L150 200 L50 200 Z" fill="#0284C7" />
    {/* Collar */}
    <path d="M85 125 Q100 138 115 125" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" fill="#FDD6BA" />

    {/* Adam's Head */}
    <circle cx="100" cy="85" r="38" fill="#FDD6BA" />

    {/* Spiky Boy Hair */}
    <path
      d="M62 82 C58 55 75 42 100 42 C125 42 142 55 138 82 C142 70 135 50 125 45 C115 40 105 45 100 42 C95 40 85 40 75 45 C65 52 60 70 62 82 Z"
      fill="#451A03"
    />
    <path d="M90 40 L96 30 L104 40 L112 32 L118 42" stroke="#451A03" strokeWidth="4" strokeLinejoin="round" />

    {/* Big Expressive Eyes */}
    <circle cx="86" cy="85" r="7" fill="#1E293B" />
    <circle cx="88" cy="83" r="2.5" fill="#FFFFFF" />
    <circle cx="114" cy="85" r="7" fill="#1E293B" />
    <circle cx="116" cy="83" r="2.5" fill="#FFFFFF" />

    {/* Eyebrows */}
    <path d="M80 75 Q86 72 92 75" stroke="#451A03" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M108 75 Q114 72 120 75" stroke="#451A03" strokeWidth="2.5" strokeLinecap="round" />

    {/* Cheeks */}
    <circle cx="76" cy="95" r="5" fill="#FDA4AF" opacity="0.7" />
    <circle cx="124" cy="95" r="5" fill="#FDA4AF" opacity="0.7" />

    {/* Big Cheerful Smile */}
    <path d="M90 98 Q100 112 110 98" stroke="#B45309" strokeWidth="3.5" strokeLinecap="round" fill="#FEF2F2" />

    {/* Waving Arm (Optional for End Screen) */}
    {isWaving ? (
      <g transform="translate(140, 110) rotate(-25)">
        <path d="M0 25 C15 15 30 0 35 -15" stroke="#0284C7" strokeWidth="16" strokeLinecap="round" />
        <circle cx="35" cy="-16" r="10" fill="#FDD6BA" />
        {/* Fingers */}
        <circle cx="38" cy="-22" r="3" fill="#FDD6BA" />
        <circle cx="42" cy="-18" r="3" fill="#FDD6BA" />
      </g>
    ) : null}
  </svg>
);

