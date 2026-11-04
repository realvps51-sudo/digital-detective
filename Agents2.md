# AGENTS.md - Digital Detective (المحقق الرقمي)

## 1. Role & Identity
You are an expert Senior Frontend Engineer specializing in building robust, interactive, and child-friendly educational web applications using React, TypeScript, and Tailwind CSS.
Your objective is to implement the "المحقق الرقمي" (Digital Detective) gamified single-page application according to the specifications below with zero regressions and production-grade code.

---

## 2. Core Technical Rules & Constraints

### A. RTL & Language Integrity
* **Strict RTL Layout:** All screens must enforce right-to-left layout (`dir="rtl"`).
* **Font Family:** Primary font must be `Cairo` or `Readex Pro` with distinct weights (`font-medium`, `font-bold`, `font-extrabold`).
* **Technical Terms in Latin Script:** Never transliterate technical security terms into Arabic script (e.g., use `HTTPS` not `إتش تي تي بي إس`, use `Phishing` not `فيشينج`, use `URL`, `SMS`, `Spam`).

### B. Asset Handling & Clue Mockups
* **Zero External Broken Links:** DO NOT use unverified third-party image URLs for clues.
* **Component-Based Visual Mockups:** Build all 5 clue cards using pure Tailwind CSS and `lucide-react` icons to simulate realistic OS/software environments:
  1. *Email Clue:* Mock webmail inbox with header, fake sender (`alert@strange-domain.xyz`), and an action button.
  2. *Chat Clue:* Mock messaging interface showing chat bubbles between Adam and an unknown user asking for personal data.
  3. *Phone SMS Clue:* Mock mobile viewport with an incoming SMS containing a suspicious link.
  4. *Download Clue:* Mock browser modal with a warning icon and a "Free Game Download.exe" prompt.
  5. *Social Post Clue:* Mock social feed post compose window with visibility settings dropdown.

### C. State Machine & Progression Logic
* **Linear Level Unlocking:** Cases must be unlocked sequentially. Case 1 is unlocked by default; Case $N$ unlocks only when Case $N-1$ is correctly solved.
* **Score Accumulation:** Each correct case awards 10 points (totaling 50 points across 5 cases).
* **Local Persistence:** Keep track of `unlockedCases`, `score`, and `solvedCases` in `localStorage` so refreshing does not reset the user's progress.

### D. Certificate Generation (HTML5 Canvas)
* The completion certificate in the final screen must be rendered dynamically onto an HTML5 `<canvas>`.
* Ensure proper Arabic text rendering on the canvas context (handling text direction and alignment properly).
* Provide a clean high-resolution download via `canvas.toDataURL('image/png')` triggered by the "تحميل الشهادة" button.

---

## 3. Tech Stack Reference
* **Core:** React 18+ (Vite), TypeScript (strict mode enabled).
* **Styling:** Tailwind CSS, `@tailwindcss/forms` (optional).
* **Icons:** `lucide-react`.
* **Motion & Effects:** `framer-motion` for transitions, modals, and lock unlocks; `canvas-confetti` for the victory celebration.
* **Audio:** Web Audio API synth tones or simple HTML5 `Audio` elements with global mute toggle.

---

## 4. Project Directory Structure
Strictly follow this architecture when creating or editing files:

```text
src/
├── components/
│   ├── clues/          # Pure Tailwind/Lucide clue mockups (Email, Chat, SMS, etc.)
│   ├── common/         # Header, SoundToggle, ScoreBadge, Modals
│   └── screens/        # StartScreen, CaseSelectScreen, CaseScreen, EndScreen
├── data/
│   └── casesData.ts    # Single source of truth for all case questions and answers
├── hooks/
│   ├── useGameState.ts # Handles case unlocks, scores, active case, and persistence
│   └── useAudio.ts     # Sound effects logic
├── types/
│   └── game.ts         # TypeScript interfaces (GameCase, Question, ScreenState)
├── App.tsx             # Main screen router / switch based on state
└── main.tsx