// ponytail: in-memory counter per serverless instance - enough to curb spam on a brochure site.
// If real abuse shows up: move to Upstash Ratelimit / Vercel Firewall.
const hits = new Map<string, { count: number; reset: number }>();

export function rateLimit(req: Request, key: string, limit: number, windowMs: number) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "local";
  const id = `${key}:${ip}`;
  const now = Date.now();
  const h = hits.get(id);
  if (!h || h.reset < now) {
    if (hits.size > 5000) hits.clear();
    hits.set(id, { count: 1, reset: now + windowMs });
    return true;
  }
  return ++h.count <= limit;
}
