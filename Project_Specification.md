# Project Specification: تطبيق "المحقق الرقمي" (Digital Detective Web App)

## 1. نبذة عن المشروع والهدف
تطوير تطبيق ويب تعليمي تفاعلي من صفحة واحدة (Gamified Single Page Application) موجّه للطلاب، يهدف إلى التوعية بالأمن السيبراني والسلامة الرقمية من خلال محاكاة 5 قضايا جنائية رقمية يتعرض لها بطل القصة "آدم"، ويقوم الطالب بدور "المحقق الرقمي" لحلها وجمع الأدلة واحتساب النقاط وصولاً لإصدار شهادة تكريمية قابلة للتحميل.

---

## 2. المكدس التقني (Tech Stack)
* **Framework:** React 18+ (Vite) مع TypeScript.
* **Styling:** Tailwind CSS (مع دعم كامل لـ `dir="rtl"` وخط `Cairo` أو `Readex Pro`).
* **Icons:** `lucide-react`.
* **Animations:** `framer-motion` (لتأثيرات الانتقال، فتح القفل، وظهور النوافذ المنبثقة).
* **Audio:** Web Audio API أو مكتبة `howler` لتشغيل مؤثرات صوتية تفاعلية (Correct, Wrong, Unlock, Click) مع زر كتم/تشغيل عام.
* **Certificate Export:** HTML5 `<canvas>` أو مكتبة `html2canvas` لتصدير الشهادة كصورة `PNG` عالية الدقة.
* **Deployment Target:** Vercel (Client-Side Static Deployment).

---

## 3. الهيكل البرمجي المقترح (Project Architecture)

```text
src/
├── assets/
│   ├── avatars/         # صور شخصيات: المحقق الصغير، الروبوت، آدم
│   └── sounds/          # ملفات المؤثرات الصوتية الخفيفة
├── components/
│   ├── common/
│   │   ├── Header.tsx           # شريط النقاط، زر الصوت، زر العودة
│   │   ├── AudioPlayer.tsx      # مشغل المؤثرات الصوتية
│   │   ├── FeedbackModal.tsx    # نافذة التغذية الراجعة بعد الإجابة
│   │   └── CertificateModal.tsx # معاينة الشهادة وتوليدها كصورة
│   ├── clues/
│   │   ├── EmailClue.tsx        # محاكاة بريد إلكتروني تفاعلي (القضية 1)
│   │   ├── ChatClue.tsx         # محاكاة نافذة شات ومحادثة ماسنجر (القضية 2)
│   │   ├── PhoneSMSClue.tsx     # محاكاة هاتف ذكي ورسالة SMS (القضية 3)
│   │   ├── WarningAlertClue.tsx # محاكاة نافذة نظام تشغيل لتحميل ملف (القضية 4)
│   │   └── SocialPostClue.tsx   # محاكاة منشور تواصل اجتماعي (القضية 5)
│   └── screens/
│       ├── StartScreen.tsx      # شاشة البداية
│       ├── CaseSelectScreen.tsx # شاشة اختيار القضايا (مغلقة/مفتوحة)
│       ├── CaseScreen.tsx       # شاشة تفاصيل القضية والسؤال
│       └── EndScreen.tsx        # شاشة الاحتفال، النتيجة، وتوليد الشهادة
├── data/
│   └── casesData.ts     # نصوص الأدلة، الأسئلة، الخيارات، والتغذية الراجعة
├── hooks/
│   ├── useGameState.ts  # إدارة النقاط، القضايا المفتوحة، والمحاولات
│   └── useSoundEffects.ts
├── types/
│   └── game.ts
└── App.tsx