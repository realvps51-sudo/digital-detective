# دليل النشر والتشغيل على منصة Vercel (Deployment Guide)

يوضح هذا الدليل الخطوات التفصيلية لإطلاق تطبيق "المحقق الرقمي" على منصة **Vercel** مجاناً مع إعداد النطاق وشهادة الأمان والتأكد من توافق مسارات التطبيق.

---

## الطريقة الأولى: النشر المباشر عبر مستودع GitHub (موصى بها)

### 1. تجهيز الكود ورفعه على GitHub
تأكد من إنشاء مستودع جديد ورفع التغييرات:
```bash
git init
git add .
git commit -m "feat: initial commit - Digital Detective Game"
git branch -M main
git remote add origin https://github.com/your-username/digital-detective.git
git push -u origin main
```

### 2. الربط مع Vercel
1. توجّه إلى [لوحة تحكم Vercel](https://vercel.com/dashboard) وسجّل الدخول بحساب GitHub.
2. اضغط على زر **"Add New..."** ثم اختر **"Project"**.
3. اختر مستودع `digital-detective` واضغط **"Import"**.
4. تحقق من إعدادات المشروع (Project Settings):
   * **Framework Preset:** `Vite` (سيتم التعرف عليه تلقائياً).
   * **Root Directory:** `./`
   * **Build Command:** `npm run build`
   * **Output Directory:** `dist`
5. اضغط على **"Deploy"**.
6. في غضون ثوانٍ معدودة، ستظهر لك شاشة الاحتفال مع رابط الموقع المنشور (مثال: `https://digital-detective.vercel.app`).

---

## الطريقة الثانية: النشر عبر سطر الأوامر (Vercel CLI)

إذا كنت تفضل النشر السريع دون الارتباط بـ GitHub:

1. ثبّت أداة Vercel عالمياً:
   ```bash
   npm install -g vercel
   ```
2. سجّل الدخول:
   ```bash
   vercel login
   ```
3. انشر من داخل مجلد المشروع:
   ```bash
   vercel
   ```
4. للنشر للإنتاج (Production):
   ```bash
   vercel --prod
   ```

---

## 3. إعداد ملف إعادة التوجيه للـ SPA (`vercel.json`)

لمنع ظهور خطأ `404 Not Found` عند تحديث أي صفحة داخلية أو توجيه، تأكد من وجود ملف `vercel.json` في المجلد الرئيسي للمشروع بالمحتوى التالي:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

---

## 4. قائمة التحقق قبل النشر النهائي (Pre-Deployment Checklist)

- [ ] التأكد من تمرير الأمر `npm run build` محلياً دون أي أخطاء في الـ TypeScript.
- [ ] التأكد من وجود ملفات الصوت داخل مجلد `public/sounds/` لتعمل الروابط النسبية على السيرفر.
- [ ] التأكد من تعيين الترميز والاتجاه في ملف `index.html`:
  ```html
  <html lang="ar" dir="rtl">
  ```
- [ ] اختبار خاصية تنزيل الشهادة على شاشات الهواتف والكمبيوتر للتأكد من حفظ الصورة بشكل سليم.
- [ ] التحقق من عمل علامة القفل (HTTPS) تلقائياً على رابط Vercel الممنوح.