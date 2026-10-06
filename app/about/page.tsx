import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/content/site";
import { Icon, type AnyIcon } from "@/components/Icon";
import { CtaBand, SectionHead } from "@/components/ui";

export const metadata: Metadata = {
  title: "אודות – רחל אפודי, מתכנתת Full Stack",
  description: "נעים להכיר, אני רחל אפודי – מתכנתת Full Stack ומייסדת Code Fix. אתרים, אוטומציות, סוכני AI ומערכות בסקייל גבוה, עם גישה עסקית ויחס אישי.",
  alternates: { canonical: "/about" },
};

const expertise: { icon: AnyIcon; title: string; text: string }[] = [
  { icon: "layers", title: "פיתוח Full Stack", text: "מהשרת ומסד הנתונים ועד ממשק המשתמש – פיתוח מקצה לקצה." },
  { icon: "bot", title: "בינה מלאכותית", text: "סוכני AI, מאגרי ידע ושילוב מודלי שפה בתוך תהליכים עסקיים." },
  { icon: "bolt", title: "אוטומציות", text: "חיבור מערכות ואוטומציה של תהליכים שגוזלים זמן." },
  { icon: "gauge", title: "ביצועים ו-Scale", text: "מערכות שמעבדות כמויות גדולות של נתונים בזמן אמת." },
  { icon: "sparkle", title: "אתרים וחנויות", text: "אתרים מהירים, מעוצבים ומותאמים למובייל ול-SEO." },
  { icon: "bulb", title: "פתרון בעיות", text: "לקחת בעיה עסקית עמומה ולהפוך אותה לפתרון ברור." },
];

const values: { title: string; text: string }[] = [
  { title: "קודם מבינה, אחר כך כותבת קוד", text: "כל פרויקט מתחיל בשאלה מה העסק באמת צריך. לפעמים הפתרון הנכון קטן ופשוט יותר ממה שחשבתם – ואני אגיד את זה." },
  { title: "שקיפות מלאה", text: "הצעה ברורה, לוחות זמנים מוגדרים ועדכונים שוטפים. תמיד תדעו איפה הפרויקט עומד." },
  { title: "קוד שנשאר טוב", text: "קוד נקי, מתועד ובנוי להתרחב – כדי שהמערכת תגדל יחד עם העסק ולא תהפוך לנטל." },
  { title: "זמינות ויחס אישי", text: "אתם עובדים ישירות מולי, מהשיחה הראשונה ועד אחרי ההשקה." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-6 md:pb-8">
        <div className="grid-bg absolute inset-0 -z-10" />
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 md:grid-cols-[1fr_20rem]">
          <div>
            <p dir="ltr" className="text-right font-mono text-sm text-cyan/80">{"<about />"}</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">נעים להכיר, <span className="text-gradient">אני רחל</span></h1>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/85">
              <p>אני מתכנתת Full Stack עם 5 שנות ניסיון בפיתוח, ו-Code Fix הוא המקום שבו אני פוגשת עסקים עם בעיה – ויוצאת איתם עם פתרון.</p>
              <p>אני מאמינה שטכנולוגיה טובה היא כזו שלא צריך לחשוב עליה: האתר מביא פניות, התהליכים רצים לבד, והמערכת פשוט עובדת. בין אם מדובר באתר תדמית לעסק קטן, בסוכן AI שעונה לאנליסטים פיננסיים או בפלטפורמה שמעבדת אלפי רכיבים בזמן אמת – הגישה זהה: להבין לעומק, ולבנות נכון.</p>
            </div>
            <a href={site.github} target="_blank" rel="noopener" className="btn btn-ghost mt-8"><Icon name="github" className="size-5" /> הקוד שלי ב-GitHub</a>
          </div>
          <div className="float relative mx-auto hidden w-full md:block">
            <div className="absolute inset-0 rounded-full bg-violet/30 blur-3xl" />
            <Image src="/logo.png" alt="הלוגו של Code Fix" width={400} height={400} className="relative rounded-full" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6 md:py-8">
        <SectionHead tag="expertise" title={<>תחומי <span className="text-gradient">התמחות</span></>} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((e) => (
            <div key={e.title} className="card reveal p-6">
              <span className="grid size-12 place-items-center rounded-xl bg-surface-2 text-cyan"><Icon name={e.icon} /></span>
              <h3 className="mt-4 text-lg font-bold">{e.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{e.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-6 md:pt-8">
        <SectionHead tag="approach" title={<>הגישה <span className="text-gradient">שלי</span></>} />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="reveal flex gap-4 rounded-2xl border border-line/70 bg-surface/40 p-6">
              <Icon name="check" className="mt-1 size-6 shrink-0 text-cyan" />
              <div><h3 className="text-lg font-bold">{v.title}</h3><p className="mt-2 leading-relaxed text-muted">{v.text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
