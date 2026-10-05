import type { ProjectVisual as Kind } from "@/content/site";

// איורי UI מסוגננים לכל פרויקט – עד שיהיו צילומי מסך/דמו. דקורטיביים בלבד (aria-hidden).
export function ProjectVisual({ kind, className = "" }: { kind: Kind; className?: string }) {
  return (
    <div aria-hidden="true" className={`relative overflow-hidden rounded-2xl border border-line bg-[#070d22] ${className}`}>
      <div className="absolute -top-16 -left-10 size-48 rounded-full bg-violet/30 blur-3xl" />
      <div className="absolute -bottom-16 -right-10 size-48 rounded-full bg-cyan/20 blur-3xl" />
      {/* מסגרת חלון */}
      <div className="relative flex items-center gap-1.5 border-b border-line/80 px-3 py-2" dir="ltr">
        <span className="size-2.5 rounded-full bg-[#ff5f57]/80" />
        <span className="size-2.5 rounded-full bg-[#febc2e]/80" />
        <span className="size-2.5 rounded-full bg-[#28c840]/80" />
        <span className="mx-auto h-4 w-1/2 rounded-full bg-line/70" />
      </div>
      <div className="relative p-4 sm:p-5">{views[kind]}</div>
    </div>
  );
}

const Bar = ({ w, c = "bg-line" }: { w: string; c?: string }) => <div className={`h-2 rounded-full ${c}`} style={{ width: w }} />;

const views: Record<Kind, React.ReactNode> = {
  agent: (
    <div className="space-y-3 text-[11px]">
      <div className="mr-auto w-3/4 rounded-2xl rounded-tl-sm bg-surface-2 p-3 text-muted">מה מצב הנזילות של חברות התעופה המובילות ברבעון האחרון?</div>
      <div className="ml-auto w-5/6 rounded-2xl rounded-tr-sm border border-cyan/30 bg-cyan/10 p-3">
        <div className="mb-2 flex items-center gap-1.5 font-bold text-cyan"><span className="size-1.5 rounded-full bg-cyan" />Aviation Agent</div>
        <div className="space-y-1.5"><Bar w="95%" c="bg-ink/25" /><Bar w="80%" c="bg-ink/25" /><Bar w="60%" c="bg-ink/25" /></div>
        <div className="mt-3 flex h-14 items-end gap-1.5" dir="ltr">
          {[40, 65, 50, 80, 70, 95].map((h, i) => <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-sky/40 to-cyan" style={{ height: `${h}%` }} />)}
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-full border border-line bg-surface p-1.5 pr-3 text-muted">
        <span className="flex-1">שאלו את הסוכן...</span><span className="bg-gradient-brand size-6 rounded-full" />
      </div>
    </div>
  ),
  landing: (
    <div className="space-y-4">
      <div className="flex items-center justify-between"><div className="h-3 w-16 rounded bg-cyan/60" /><div className="flex gap-2"><Bar w="28px" /><Bar w="28px" /><Bar w="28px" /></div></div>
      <div className="grid grid-cols-5 items-center gap-4 py-2">
        <div className="col-span-3 space-y-2.5">
          <div className="h-4 w-11/12 rounded bg-ink/70" /><div className="h-4 w-3/4 rounded bg-ink/70" />
          <Bar w="90%" /><Bar w="70%" />
          <div className="bg-gradient-brand mt-2 h-6 w-24 rounded-full" />
        </div>
        <div className="col-span-2 grid aspect-square place-items-center rounded-2xl border border-line bg-gradient-to-br from-violet/30 to-cyan/20">
          <div className="size-1/2 rounded-full border-4 border-cyan/60" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => <div key={i} className="space-y-1.5 rounded-xl border border-line bg-surface/70 p-2.5"><div className="size-4 rounded bg-sky/60" /><Bar w="80%" /><Bar w="55%" /></div>)}
      </div>
    </div>
  ),
  kanban: (
    <div className="grid grid-cols-3 gap-2.5 text-[10px]">
      {[["נשלחו", 3], ["ראיון", 2], ["הצעה", 1]].map(([t, n], col) => (
        <div key={col} className="space-y-2 rounded-xl bg-surface/70 p-2">
          <div className="font-bold text-muted">{t}</div>
          {Array.from({ length: n as number }).map((_, i) => (
            <div key={i} className={`space-y-1.5 rounded-lg border p-2 ${col === 1 && i === 0 ? "border-cyan/50 bg-cyan/10" : "border-line bg-bg"}`}>
              <Bar w="85%" c="bg-ink/40" /><Bar w="55%" />
              {col === 1 && i === 0 && <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-cyan/20 px-1.5 py-0.5 font-bold text-cyan">✦ AI התאים קו״ח</div>}
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
  dashboard: (
    <div className="space-y-3">
      <div className="grid grid-cols-3 gap-2">
        {["text-cyan", "text-sky", "text-violet"].map((c, i) => (
          <div key={i} className="rounded-xl border border-line bg-surface/70 p-2.5"><Bar w="50%" /><div className={`mt-2 h-4 w-3/4 rounded ${c} bg-current opacity-70`} /></div>
        ))}
      </div>
      <div className="grid grid-cols-5 gap-2">
        <div className="col-span-3 flex h-28 items-end gap-1 rounded-xl border border-line bg-surface/70 p-2.5" dir="ltr">
          {[30, 55, 45, 70, 60, 85, 75, 95, 80, 90].map((h, i) => <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-violet/50 to-sky" style={{ height: `${h}%` }} />)}
        </div>
        <div className="col-span-2 grid grid-cols-6 content-center gap-1 rounded-xl border border-line bg-surface/70 p-2.5">
          {Array.from({ length: 36 }).map((_, i) => <span key={i} className={`aspect-square rounded-full ${i % 7 === 0 ? "bg-cyan" : i % 5 === 0 ? "bg-violet/70" : "bg-line"}`} />)}
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-xl border border-cyan/30 bg-cyan/10 p-2 text-[10px] font-bold text-cyan">
        <span className="size-1.5 animate-pulse rounded-full bg-cyan" /> מנוע אוטומציות פעיל · עיבוד בזמן אמת
      </div>
    </div>
  ),
};
