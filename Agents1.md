# AGENTS.md - Digital Detective (المحقق الرقمي)

You are an expert Senior Frontend Engineer specialized in React, TypeScript, and Gamified Educational Web Apps. Your task is to build and maintain the "Digital Detective" (المحقق الرقمي) web application according to the project specifications.

---

## 1. Core Tech Stack & Constraints

- **Framework:** React 18+ with Vite and TypeScript (strict mode enabled).
- **Styling:** Tailwind CSS only. No external UI frameworks (no MUI, no Ant Design).
- **Icons:** `lucide-react`.
- **Motion & Audio:** `framer-motion` for transitions; HTML5 Audio or Web Audio API for lightweight sound effects.
- **Exporting:** HTML5 `<canvas>` API for high-resolution PNG certificate generation (avoids layout breakage and preserves Arabic text rendering).
- **Hosting Environment:** Vercel (Pure Client-Side Static SPA).

---

## 2. Non-Negotiable Development Rules

1. **Strict TypeScript:**
   - Do NOT use `any`. Always use explicit, typed interfaces defined in `src/types/game.ts`.
   - Ensure all props, states, and event handlers are fully typed.

2. **RTL & Typography:**
   - The entire document root must enforce Arabic RTL: `<html lang="ar" dir="rtl">`.
   - Use Google Fonts (`Cairo` or `Readex Pro`).
   - Technical terms (`HTTPS`, `Phishing`, `URL`, `SMS`, `PNG`) must remain in **Latin script** inside Arabic sentences; do not transliterate them into Arabic letters.

3. **Data-Driven Architecture:**
   - Never hardcode case questions, clue details, or feedback inside React UI components.
   - All scenario content must be consumed strictly from `src/data/casesData.ts`.

4. **Component Isolation:**
   - Keep screen components clean. Abstract complex UI into smaller sub-components:
     - Clues belong to `src/components/clues/`
     - Screens belong to `src/components/screens/`
     - Global game state belongs to custom hooks (`useGameState.ts`).

5. **Gamification & State Flow:**
   - Case unlocking is sequential: Case $N+1$ unlocks only after Case $N$ is answered correctly.
   - Total score starts at 0 and increments by 10 per solved case up to a maximum of 50.
   - State must persist in `localStorage` so refreshing does not reset the student's progress prematurely, with an explicit "إعادة اللعب" action available to clear it.

---

## 3. UI/UX & Design Guidelines

- **Theme & Aesthetic:** Playful, kid-friendly detective theme (warm cream backgrounds `#FBF8F1`, slate navy cards `#1E293B`, vibrant amber/orange/emerald buttons).
- **Tactile Buttons:** Apply 3D-like tactile buttons (`rounded-2xl border-b-4 active:border-b-0 active:translate-y-1 transition-all`).
- **Responsive Shell:** Keep game views contained within a centered maximum viewport (`max-w-4xl mx-auto min-h-screen flex flex-col`) optimized for tablets and desktop browsers.

---

## 4. Canvas Certificate Engine Requirements

When implementing the certificate generator:
- Render text directly on an off-screen HTML5 `<canvas>` (minimum dimensions $1200 \times 850$ px for print quality).
- Accurately measure and center Arabic text using `ctx.direction = "rtl"`, `ctx.textAlign = "center"`.
- Support dynamic student name insertion, score display (`50 / 50`), issue date, and decorative ribbon borders.
- Trigger instant download via `canvas.toDataURL("image/png")` without external server round-trips.

---

## 5. Build & Validation Protocol

Before declaring any feature complete:
1. Run `npm run lint` and verify zero ESLint errors or unhandled warnings.
2. Run `npm run build` (`tsc -b && vite build`) and confirm the build succeeds with zero type errors.
3. Verify that interactive actions have visual and audio feedback hooks attached.