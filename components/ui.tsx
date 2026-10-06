import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icon";

export function Logo({ size = 40 }: { size?: number }) {
  return (
    <Image src="/logo.png" alt="הלוגו של Code Fix – מפתח בין סוגרי קוד" width={size} height={size} className="rounded-full" priority />
  );
}

export function SectionHead({ tag, title, text, as: H = "h2", center = true }: {
  tag: string; title: React.ReactNode; text?: string; as?: "h1" | "h2"; center?: boolean;
}) {
  return (
    <div className={`reveal max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p dir="ltr" className={`font-mono text-sm text-cyan/80 ${center ? "" : "text-right"}`}>{`<${tag} />`}</p>
      <H className={`mt-3 font-extrabold tracking-tight ${H === "h1" ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"}`}>{title}</H>
      {text && <p className="mt-4 text-lg leading-relaxed text-muted">{text}</p>}
    </div>
  );
}

export function PageHero({ tag, title, text }: { tag: string; title: React.ReactNode; text: string }) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16">
      <div className="grid-bg absolute inset-0 -z-10" />
      <div className="glow-pulse absolute -top-40 left-1/2 -z-10 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-violet/25 blur-3xl" />
      <div className="mx-auto max-w-6xl px-4">
        <SectionHead as="h1" tag={tag} title={title} text={text} />
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="px-4 py-24">
      <div className="card reveal relative mx-auto max-w-5xl overflow-hidden px-6 py-14 text-center sm:px-14">
        <div className="absolute -top-24 left-1/2 h-48 w-[30rem] -translate-x-1/2 rounded-full bg-sky/25 blur-3xl" />
        <p dir="ltr" className="font-mono text-sm text-cyan/80">{"fix(business): let's talk"}</p>
        <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
          יש לכם בעיה? <span className="text-gradient">יש לי את המפתח.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
          ספרו לי מה העסק שלכם צריך – ואחזור אליכם עם רעיון, כיוון והצעה. שיחת ההיכרות בלי התחייבות.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="btn btn-primary">בואו נדבר <Icon name="arrow" className="size-5" /></Link>
        </div>
      </div>
    </section>
  );
}
