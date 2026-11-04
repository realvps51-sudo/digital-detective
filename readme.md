# 🕵️‍♂️ لعبة المحقق الرقمي (Digital Detective)

تطبيق ويب تفاعلي تعليمي بأسلوب التلعيب (Gamified Web Application) مخصص للأطفال والطلاب لتعليم مبادئ الأمن السيبراني والسلامة الرقمية. يخوض الطالب تجربة محقق رقمي يساعد صديقه "آدم" في حل 5 قضايا إلكترونية مختلفة واكتشاف التهديدات السيبرانية وصولاً إلى الحصول على شهادة تكريمية معتمدة.

---

## 🌟 أبرز المميزات

* **نظام تقدم خطي تفاعلي (Progression System):** فتح القضايا بالتدريج عند حل القضية السابقة بنجاح.
* **محاكاة بصرية للأدلة (Interactive Clue Mockups):** محاكاة تفاعلية للبريد الإلكتروني، نوافذ المحادثة الفورية، رسائل SMS، وتحذيرات النظام بدون الاعتماد على صور خارجية ثقيلة.
* **تغذية راجعة فورية (Instant Pedagogical Feedback):** شروحات تعليمية ممتعة ومعززة عند كل خطوة.
* **إصدار وطباعة الشهادة:** توليد شهادة تفاعلية مخصصة باسم الطالب وحفظها كملف صورة عالي الدقة `PNG`.
* **مؤثرات صوتية وحركية:** تفاعل صوتي للأزرار، الفتح، والاحتفال، مع رسوم متحركة سلسة ودعم كامل لاتجاه الواجهة العربي (RTL).
* **حفظ التقدم محلياً (Auto-save):** حفظ القضايا المفتوحة والنقاط داخل المتصفح عبر `localStorage`.

---

## 🛠️ المكدس التقني (Tech Stack)

| المجال | التقنية المستخدمة |
| :--- | :--- |
| **بيئة العمل الأساسية** | [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **أداة البناء (Bundler)** | [Vite](https://vitejs.dev/) |
| **التنسيق والتصميم** | [Tailwind CSS](https://tailwindcss.com/) (RTL Support) |
| **الحركات والمؤثرات** | [Framer Motion](https://www.framer.com/motion/) |
| **الأيقونات** | [Lucide React](https://lucide.dev/) |
| **المؤثرات الصوتية** | [Howler.js](https://howlerjs.com/) أو Web Audio API |
| **تصدير الشهادة** | HTML5 `<canvas>` / `html2canvas` |
| **الاستضافة والنشر** | [Vercel](https://vercel.com/) |

---

## 📁 هيكلية المشروع (Project Structure)

```text
├── public/
│   ├── sounds/               # الملفات الصوتية للمؤثرات
│   └── fonts/                # الخطوط العربية (Cairo / Readex Pro)
├── src/
│   ├── assets/               # الرسوم والشعارات
│   ├── components/
│   │   ├── clues/            # مكونات محاكاة الأدلة الخمسة
│   │   ├── common/           # عناصر الواجهة المشتركة (أزرار، نوافذ، بطاقات)
│   │   └── screens/          # الشاشات الرئيسية (البداية، القضايا، الحل، النهاية)
│   ├── data/
│   │   └── casesData.ts      # بيانات القضايا، الأسئلة، والتغذية الراجعة
│   ├── hooks/
│   │   ├── useGameState.ts   # منطق إدارة اللعبة والتقدم
│   │   └── useAudio.ts       # منطق تشغيل الصوت والتحكم به
│   ├── types/
│   │   └── game.ts           # تعريف الأنواع والواجهات (TypeScript Interfaces)
│   ├── utils/
│   │   └── certificate.ts    # دالة رسم وتنزيل الشهادة عبر Canvas
│   ├── App.tsx               # المكون الجذري وإدارة الشاشات
│   ├── main.tsx
│   └── index.css
├── docs/                     # أدلة التوثيق الإضافية
├── package.json
└── tailwind.config.js
```

---

## 🚀 البدء والتشغيل المحلي (Quick Start)

### المتطلبات الأساسية
* تثبيت **Node.js** (الإصدار 18 أو أحدث).
* مدير الحزم **npm** أو **pnpm** أو **yarn**.

### خطوات التثبيت

1. **استنساخ المستودع (Clone the Repository):**
   ```bash
   git clone https://github.com/your-username/digital-detective.git
   cd digital-detective
   ```

2. **تثبيت الاعتماديات (Install Dependencies):**
   ```bash
   npm install
   ```

3. **تشغيل الخادم المحلي للتطوير (Start Dev Server):**
   ```bash
   npm run dev
   ```
   افتح المتصفح على الرابط: `http://localhost:5173`

4. **بناء النسخة الإنتاجية (Production Build):**
   ```bash
   npm run build
   ```

---

## 📄 التوثيق الإضافي

* [المواصفات المعمارية والتقنية (Architecture)](./docs/ARCHITECTURE.md)
* [مواصفات المحتوى والسيناريو الكامل (Content Specs)](./docs/CONTENT_SPEC.md)
* [دليل النشر على منصة Vercel (Deployment Guide)](./docs/DEPLOYMENT.md)

---

## 📜 الترخيص (License)
هذا المشروع مرخص تحت رخصة **MIT**. يمكنك استخدامه وتطويره للأغراض التعليمية بحرية.