import React from 'react';

// Friendly Detective Character Illustration (Bust)
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
    <circle cx="110" cy="165" r="4" fill="#3D2614" />
    <circle cx="110" cy="185" r="4" fill="#3D2614" />

    {/* Detective Face */}
    <circle cx="100" cy="85" r="38" fill="#FDD6BA" />
    <path d="M66 75 C60 55 80 50 100 50 C120 50 140 55 134 75 C130 65 115 60 100 60 C85 60 70 65 66 75 Z" fill="#4A2E1B" />
    <path d="M62 85 C58 95 62 105 65 110 C62 100 64 90 62 85 Z" fill="#4A2E1B" />
    <path d="M138 85 C142 95 138 105 135 110 C138 100 136 90 138 85 Z" fill="#4A2E1B" />

    {/* Eyes */}
    <circle cx="86" cy="88" r="6" fill="#2C1810" />
    <circle cx="88" cy="86" r="2" fill="#FFFFFF" />
    <circle cx="114" cy="88" r="6" fill="#2C1810" />
    <circle cx="116" cy="86" r="2" fill="#FFFFFF" />

    {/* Cheeks */}
    <ellipse cx="76" cy="98" rx="5" ry="3" fill="#F87171" opacity="0.6" />
    <ellipse cx="124" cy="98" rx="5" ry="3" fill="#F87171" opacity="0.6" />

    {/* Smile */}
    <path d="M92 104 Q100 112 108 104" stroke="#854D0E" strokeWidth="3" strokeLinecap="round" />

    {/* Fedora Hat */}
    <ellipse cx="100" cy="55" rx="58" ry="12" fill="#784E29" />
    <path d="M68 55 C68 25 78 22 100 20 C122 22 132 25 132 55 Z" fill="#9A6B43" />
    <path d="M69 52 C75 48 125 48 131 52 L132 56 C125 52 75 52 68 56 Z" fill="#3D2614" />
    <path d="M90 22 Q100 26 110 22" stroke="#633C1B" strokeWidth="3" strokeLinecap="round" />

    {/* Magnifying Glass */}
    <g transform="translate(130, 80) rotate(15)">
      <circle cx="10" cy="45" r="9" fill="#FDD6BA" />
      <rect x="7" y="52" width="6" height="24" rx="2" fill="#78350F" />
      <circle cx="10" cy="25" r="22" stroke="#475569" strokeWidth="5" fill="#E0F2FE" fillOpacity="0.4" />
      <circle cx="10" cy="25" r="18" stroke="#38BDF8" strokeWidth="2" fill="none" />
      <path d="M0 16 Q8 10 18 14" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
    </g>
  </svg>
);

// Full Body Detective Character (Matching Start & End Screens in Storyboard)
export const FullBodyDetective: React.FC<{ withCat?: boolean; size?: number }> = ({ withCat = false, size = 260 }) => (
  <svg
    width={size}
    height={(size * 320) / 220}
    viewBox="0 0 220 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
  >
    {/* Legs & Shoes */}
    <rect x="75" y="240" width="24" height="50" rx="6" fill="#3E2718" />
    <rect x="115" y="240" width="24" height="50" rx="6" fill="#3E2718" />
    <ellipse cx="85" cy="294" rx="18" ry="8" fill="#1C1008" />
    <ellipse cx="129" cy="294" rx="18" ry="8" fill="#1C1008" />

    {/* Trench Coat */}
    <path
      d="M55 140 C55 110 75 100 107 100 C139 100 159 110 159 140 L166 250 C166 255 160 260 155 260 L59 260 C54 260 48 255 48 250 Z"
      fill="#8C5832"
      stroke="#2A180D"
      strokeWidth="4"
    />
    <path d="M88 102 L107 155 L126 102 Z" fill="#6A4020" stroke="#2A180D" strokeWidth="3" />
    <path d="M107 155 L107 260" stroke="#2A180D" strokeWidth="4" />
    <circle cx="94" cy="175" r="4.5" fill="#2A180D" />
    <circle cx="120" cy="175" r="4.5" fill="#2A180D" />
    <circle cx="94" cy="205" r="4.5" fill="#2A180D" />
    <circle cx="120" cy="205" r="4.5" fill="#2A180D" />
    <circle cx="94" cy="235" r="4.5" fill="#2A180D" />
    <circle cx="120" cy="235" r="4.5" fill="#2A180D" />

    {/* Right Arm holding Notebook */}
    <g>
      <path d="M55 130 C45 155 50 185 75 195" stroke="#8C5832" strokeWidth="22" strokeLinecap="round" />
      <path d="M55 130 C45 155 50 185 75 195" stroke="#2A180D" strokeWidth="4" fill="none" />
      <circle cx="85" cy="195" r="10" fill="#FDD6BA" stroke="#2A180D" strokeWidth="3" />
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
      <rect x="82" y="170" width="5" height="38" fill="#B45309" transform="rotate(-10 72 170)" />
    </g>

    {/* Left Arm holding Magnifying Glass */}
    <g>
      <path d="M155 130 C175 150 180 160 168 185" stroke="#8C5832" strokeWidth="22" strokeLinecap="round" />
      <path d="M155 130 C175 150 180 160 168 185" stroke="#2A180D" strokeWidth="4" fill="none" />
      <circle cx="165" cy="170" r="11" fill="#FDD6BA" stroke="#2A180D" strokeWidth="3" />
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
      <circle cx="182" cy="132" r="28" stroke="#334155" strokeWidth="7" fill="#BAE6FD" fillOpacity="0.5" />
      <circle cx="182" cy="132" r="28" stroke="#0F172A" strokeWidth="4" fill="none" />
      <circle cx="182" cy="132" r="23" stroke="#38BDF8" strokeWidth="2" fill="none" />
      <path d="M168 122 Q178 114 192 118" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
    </g>

    {/* Head */}
    <circle cx="107" cy="80" r="35" fill="#FDD6BA" stroke="#2A180D" strokeWidth="4" />
    <path
      d="M72 75 C65 52 85 45 107 45 C129 45 149 52 142 75 C138 65 125 58 107 58 C89 58 76 65 72 75 Z"
      fill="#451A03"
      stroke="#2A180D"
      strokeWidth="3"
    />
    <path d="M68 85 C62 95 66 108 72 112" stroke="#451A03" strokeWidth="6" strokeLinecap="round" />
    <path d="M146 85 C152 95 148 108 142 112" stroke="#451A03" strokeWidth="6" strokeLinecap="round" />
    <circle cx="94" cy="82" r="6" fill="#1C1008" />
    <circle cx="96" cy="80" r="2" fill="#FFFFFF" />
    <circle cx="120" cy="82" r="6" fill="#1C1008" />
    <circle cx="122" cy="80" r="2" fill="#FFFFFF" />
    <ellipse cx="85" cy="92" rx="5" ry="3.5" fill="#F87171" opacity="0.65" />
    <ellipse cx="129" cy="92" rx="5" ry="3.5" fill="#F87171" opacity="0.65" />
    <path d="M100 96 Q107 106 114 96" stroke="#5A2E17" strokeWidth="3.5" strokeLinecap="round" />

    {/* Hat */}
    <ellipse cx="107" cy="52" rx="60" ry="12" fill="#6A4020" stroke="#2A180D" strokeWidth="4" />
    <path d="M75 52 C75 22 86 18 107 16 C128 18 139 22 139 52 Z" fill="#8C5832" stroke="#2A180D" strokeWidth="4" />
    <path d="M75 48 C85 44 129 44 139 48 L139 53 C129 49 85 49 75 53 Z" fill="#2A180D" />
    <path d="M96 18 Q107 24 118 18" stroke="#451A03" strokeWidth="3.5" strokeLinecap="round" />

    {/* Optional Cute Cat beside Detective (matching storyboard panel 8) */}
    {withCat && (
      <g transform="translate(145, 230)">
        {/* Cat Body */}
        <ellipse cx="30" cy="55" rx="18" ry="24" fill="#5C4033" stroke="#2A180D" strokeWidth="3" />
        {/* Cat Head */}
        <circle cx="28" cy="28" r="16" fill="#5C4033" stroke="#2A180D" strokeWidth="3" />
        {/* Cat Ears */}
        <path d="M15 20 L20 6 L28 16 Z" fill="#5C4033" stroke="#2A180D" strokeWidth="2.5" />
        <path d="M30 16 L38 6 L42 20 Z" fill="#5C4033" stroke="#2A180D" strokeWidth="2.5" />
        {/* Cat Eyes */}
        <ellipse cx="22" cy="27" rx="3" ry="4" fill="#FBBF24" />
        <circle cx="22" cy="27" r="1.5" fill="#1C1008" />
        <ellipse cx="34" cy="27" rx="3" ry="4" fill="#FBBF24" />
        <circle cx="34" cy="27" r="1.5" fill="#1C1008" />
        {/* Cat Nose */}
        <polygon points="28,32 26,35 30,35" fill="#F87171" />
        {/* Tail */}
        <path d="M44 65 Q58 55 52 40" stroke="#5C4033" strokeWidth="6" strokeLinecap="round" />
      </g>
    )}
  </svg>
);

// Full Body Adam Waving Happily (Matching Storyboard Panel 8 Right Side)
export const FullBodyAdamWaving: React.FC<{ size?: number }> = ({ size = 260 }) => (
  <svg
    width={size}
    height={(size * 320) / 220}
    viewBox="0 0 220 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
  >
    {/* Legs & Shoes */}
    <rect x="75" y="235" width="22" height="52" rx="5" fill="#2563EB" stroke="#1E293B" strokeWidth="3" />
    <rect x="110" y="235" width="22" height="52" rx="5" fill="#2563EB" stroke="#1E293B" strokeWidth="3" />
    <ellipse cx="84" cy="292" rx="18" ry="9" fill="#334155" stroke="#0F172A" strokeWidth="3" />
    <ellipse cx="123" cy="292" rx="18" ry="9" fill="#334155" stroke="#0F172A" strokeWidth="3" />

    {/* Coral / Red Shirt (Matching Storyboard Panel 8) */}
    <path
      d="M60 145 C60 120 78 110 105 110 C132 110 150 120 150 145 L154 240 C154 245 148 248 142 248 L68 248 C62 248 56 245 56 240 Z"
      fill="#E65A4B"
      stroke="#1E293B"
      strokeWidth="4"
    />
    <path d="M92 110 Q105 124 118 110" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" fill="#FDD6BA" />

    {/* Right Hand Down (Viewer's Right) */}
    <g>
      <path d="M148 135 C162 160 165 190 156 215" stroke="#E65A4B" strokeWidth="20" strokeLinecap="round" />
      <path d="M148 135 C162 160 165 190 156 215" stroke="#1E293B" strokeWidth="3.5" fill="none" />
      <circle cx="152" cy="222" r="10" fill="#FDD6BA" stroke="#1E293B" strokeWidth="3" />
    </g>

    {/* Left Arm Raised & Waving towards Certificate (Viewer's Left) */}
    <g>
      <path d="M62 135 C40 120 28 105 20 85" stroke="#E65A4B" strokeWidth="20" strokeLinecap="round" />
      <path d="M62 135 C40 120 28 105 20 85" stroke="#1E293B" strokeWidth="3.5" fill="none" />
      {/* Hand with Open Waving Palm */}
      <circle cx="14" cy="74" r="12" fill="#FDD6BA" stroke="#1E293B" strokeWidth="3" />
      <circle cx="8" cy="62" r="4" fill="#FDD6BA" stroke="#1E293B" strokeWidth="2.5" />
      <circle cx="14" cy="58" r="4" fill="#FDD6BA" stroke="#1E293B" strokeWidth="2.5" />
      <circle cx="21" cy="60" r="4" fill="#FDD6BA" stroke="#1E293B" strokeWidth="2.5" />
      <circle cx="27" cy="66" r="4" fill="#FDD6BA" stroke="#1E293B" strokeWidth="2.5" />
    </g>

    {/* Head */}
    <circle cx="105" cy="78" r="38" fill="#FDD6BA" stroke="#1E293B" strokeWidth="4" />

    {/* Spiky Boy Hair */}
    <path
      d="M68 74 C62 45 80 30 108 30 C135 30 154 45 146 74 C150 62 142 42 130 36 C120 30 110 35 105 32 C95 28 85 30 76 36 C68 44 65 60 68 74 Z"
      fill="#451A03"
      stroke="#1E293B"
      strokeWidth="3.5"
    />
    <path d="M96 30 L102 18 L112 28 L122 19 L128 32" stroke="#451A03" strokeWidth="4" strokeLinejoin="round" />

    {/* Eyes Happy / Smiling (Curved Arches of Joy) */}
    <path d="M90 76 Q98 68 106 76" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" fill="none" />
    <path d="M120 76 Q128 68 136 76" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" fill="none" />

    {/* Eyebrows */}
    <path d="M88 64 Q97 58 106 64" stroke="#451A03" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M120 64 Q129 58 138 64" stroke="#451A03" strokeWidth="3.5" strokeLinecap="round" />

    {/* Rosy Cheeks */}
    <ellipse cx="86" cy="88" rx="6" ry="4" fill="#FDA4AF" opacity="0.8" />
    <ellipse cx="138" cy="88" rx="6" ry="4" fill="#FDA4AF" opacity="0.8" />

    {/* Big Joyful Open Mouth Smile */}
    <path d="M96 90 Q112 115 128 90 Z" fill="#991B1B" stroke="#1E293B" strokeWidth="3.5" strokeLinejoin="round" />
    {/* White Teeth */}
    <path d="M100 90 Q112 98 124 90" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2" />
  </svg>
);

// Golden Medal / Seal with Red Ribbons (Matching Certificate Stamp in Panel 8)
export const CertificateMedal: React.FC<{ size?: number }> = ({ size = 64 }) => (
  <svg
    width={size}
    height={(size * 72) / 60}
    viewBox="0 0 60 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-md"
  >
    {/* Red Ribbon Tails */}
    <path d="M22 40 L12 68 L24 60 L32 68 L28 42 Z" fill="#DC2626" stroke="#7F1D1D" strokeWidth="2" />
    <path d="M38 40 L48 68 L36 60 L28 68 L32 42 Z" fill="#B91C1C" stroke="#7F1D1D" strokeWidth="2" />

    {/* Scalloped Gold Medal Outer Circle */}
    <circle cx="30" cy="30" r="22" fill="#F59E0B" stroke="#B45309" strokeWidth="3" />
    {/* Inner decorative star circle */}
    <circle cx="30" cy="30" r="16" fill="#FCD34D" stroke="#D97706" strokeWidth="2" strokeDasharray="3 3" />
    {/* Center Star / Checkmark */}
    <circle cx="30" cy="30" r="10" fill="#FEF3C7" />
    <path
      d="M26 30 L29 33 L35 27"
      stroke="#92400E"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Robot Avatar (Bust)
export const RobotAvatar: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 150 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    className={`drop-shadow-lg ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="100" y1="42" x2="100" y2="18" stroke="#64748B" strokeWidth="5" strokeLinecap="round" />
    <circle cx="100" cy="14" r="8" fill="#38BDF8" className="animate-pulse" />
    <rect x="42" y="65" width="10" height="20" rx="3" fill="#64748B" />
    <rect x="148" y="65" width="10" height="20" rx="3" fill="#64748B" />
    <rect x="48" y="38" width="104" height="74" rx="22" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="4" />
    <rect x="58" y="48" width="84" height="54" rx="14" fill="#0F172A" />
    <rect x="72" y="62" width="16" height="20" rx="6" fill="#38BDF8" />
    <rect x="112" y="62" width="16" height="20" rx="6" fill="#38BDF8" />
    <path d="M88 88 Q100 94 112 88" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" fill="none" />
    <rect x="90" y="112" width="20" height="12" rx="2" fill="#64748B" />
    <rect x="62" y="124" width="76" height="58" rx="16" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="3" />
    <circle cx="100" cy="150" r="14" fill="#0284C7" />
    <path d="M96 150 L99 153 L105 147" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="42" y="132" width="14" height="38" rx="7" fill="#94A3B8" />
    <rect x="144" y="132" width="14" height="38" rx="7" fill="#94A3B8" />
  </svg>
);

// Adam Avatar (Bust)
export const AdamAvatar: React.FC<{ className?: string; size?: number; isWaving?: boolean }> = ({
  className = '',
  size = 150,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    className={`drop-shadow-lg ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M55 165 C55 135 75 125 100 125 C125 125 145 135 145 165 L150 200 L50 200 Z" fill="#0284C7" />
    <path d="M85 125 Q100 138 115 125" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" fill="#FDD6BA" />
    <circle cx="100" cy="85" r="38" fill="#FDD6BA" />
    <path
      d="M62 82 C58 55 75 42 100 42 C125 42 142 55 138 82 C142 70 135 50 125 45 C115 40 105 45 100 42 C95 40 85 40 75 45 C65 52 60 70 62 82 Z"
      fill="#451A03"
    />
    <path d="M90 40 L96 30 L104 40 L112 32 L118 42" stroke="#451A03" strokeWidth="4" strokeLinejoin="round" />
    <circle cx="86" cy="85" r="7" fill="#1E293B" />
    <circle cx="88" cy="83" r="2.5" fill="#FFFFFF" />
    <circle cx="114" cy="85" r="7" fill="#1E293B" />
    <circle cx="116" cy="83" r="2.5" fill="#FFFFFF" />
    <path d="M80 75 Q86 72 92 75" stroke="#451A03" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M108 75 Q114 72 120 75" stroke="#451A03" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="76" cy="95" r="5" fill="#FDA4AF" opacity="0.7" />
    <circle cx="124" cy="95" r="5" fill="#FDA4AF" opacity="0.7" />
    <path d="M90 98 Q100 112 110 98" stroke="#B45309" strokeWidth="3.5" strokeLinecap="round" fill="#FEF2F2" />
  </svg>
);
