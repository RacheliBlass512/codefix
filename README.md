# Code Fix – אתר תדמית

Next.js 16 (App Router) + Tailwind 4, לפריסה ב-Vercel. אפיון: `docs/`.

## הרצה מקומית
```bash
npm install
cp .env.example .env.local   # ולמלא מפתחות
npm run dev
```

## עריכת תוכן
כל התוכן נמצא ב-`content/site.ts`: שירותים, פרויקטים, פרטי קשר, תהליך עבודה.
העמודים, ה-sitemap והצ'אט נבנים ממנו – משנים במקום אחד.

**קישור לדמו של פרויקט:** להוסיף `demoUrl: "https://..."` לפרויקט – כפתור "לצפייה בדמו" יופיע אוטומטית.

## פריסה ל-Vercel
1. להעלות ל-GitHub ולייבא ב-Vercel (Next.js מזוהה אוטומטית).
2. להגדיר Environment Variables:
   | משתנה | מה זה |
   |---|---|
   | `OPENAI_API_KEY` | מפתח OpenAI לצ'אט |
   | `RESEND_API_KEY` | מפתח Resend לטופס יצירת קשר |
   | `CONTACT_FROM` | (לא חובה) כתובת השולח, אחרי אימות דומיין ב-Resend |
3. **Resend:** בלי דומיין מאומת, Resend שולח רק לכתובת שאיתה נרשמת – לכן יש להירשם עם `rachelib1231@gmail.com`. אחרי חיבור דומיין, לאמת אותו ב-Resend ולעדכן `CONTACT_FROM`.
4. דומיין: להוסיף ב-Vercel את `www.code-fix.co.il` כראשי ואת `code-fix.co.il` עם הפניה (308) אליו. כתובת האתר קבועה ב-`content/site.ts`. אחר כך להגיש את `/sitemap.xml` ב-Google Search Console.

## מבנה
- `app/` – עמודים, `api/chat` (OpenAI, streaming), `api/contact` (Resend), sitemap, robots, OG image
- `components/` – Header, Footer, ChatWidget, ContactForm, ProjectVisual (איורי UI לפרויקטים)
- `lib/` – system prompt לצ'אט, הגבלת קצב
