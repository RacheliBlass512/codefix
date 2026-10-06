# Code Fix – Business Website

Next.js 16 (App Router) + Tailwind 4, deployed on Vercel. Spec: `docs/`.

## Running locally
```bash
npm install
cp .env.example .env.local   # then fill in the keys
npm run dev
```

## Editing content
All content lives in `content/site.ts`: services, projects, contact details, work process.
The pages, sitemap and chat are built from it, so you only change it in one place.

**Project demo link:** add `demoUrl: "https://..."` to a project and a "View demo" button appears automatically.

## Deploying to Vercel
1. Push to GitHub and import it in Vercel (Next.js is detected automatically).
2. Set the Environment Variables:
   | Variable | What it is |
   |---|---|
   | `OPENAI_API_KEY` | OpenAI key for the chat |
   | `RESEND_API_KEY` | Resend key for the contact form |
   | `CONTACT_FROM` | (optional) sender address, once a domain is verified in Resend |
3. **Resend:** without a verified domain, Resend only sends to the address you signed up with, so sign up with `rachelib1231@gmail.com`. Once a domain is connected, verify it in Resend and update `CONTACT_FROM`.
4. Domain: in Vercel, add `www.code-fix.co.il` as the primary domain and `code-fix.co.il` with a redirect (308) to it. The site URL is set in `content/site.ts`. Then submit `/sitemap.xml` in Google Search Console.

## Structure
- `app/` – pages, `api/chat` (OpenAI, streaming), `api/contact` (Resend), sitemap, robots, OG image
- `components/` – Header, Footer, ChatWidget, ContactForm, ProjectVisual (UI illustrations for projects)
- `lib/` – chat system prompt, rate limiting
