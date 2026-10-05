import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-4 pt-44 pb-32 text-center">
      <p dir="ltr" className="text-gradient font-mono text-7xl font-bold">404</p>
      <h1 className="mt-6 text-3xl font-extrabold">את הדף הזה עוד לא תיקנו 🔑</h1>
      <p className="mt-3 text-muted">הדף שחיפשתם לא קיים. אולי תמצאו את מה שאתם צריכים כאן:</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn btn-primary">לדף הבית</Link>
        <Link href="/contact" className="btn btn-ghost">צור קשר</Link>
      </div>
    </section>
  );
}
