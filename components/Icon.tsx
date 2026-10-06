import type { IconName } from "@/content/site";

// Line icons (24x24), lucide-style - no external dependency
const paths: Record<IconName | "arrow" | "phone" | "mail" | "github" | "whatsapp" | "check" | "close" | "send" | "menu" | "external", string> = {
  bolt: "M13 2 4 14h7l-1 8 9-12h-7l1-8z",
  bot: "M12 8V4H8 M4 8h16v12H4z M2 14h2 M20 14h2 M9 13v2 M15 13v2",
  sparkle: "M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4z M19 3v4 M17 5h4 M5 17v4 M3 19h4",
  layers: "M12 2 2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5",
  cart: "M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L21 7H6 M9 21h.01 M18 21h.01",
  gauge: "M12 14l4-4 M3.3 19a10 10 0 1 1 17.4 0",
  bulb: "M9 18h6 M10 22h4 M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2z",
  chat: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  search: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z M21 21l-4.3-4.3",
  rocket: "M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1z M12 15l-3-3a22 22 0 0 1 2-4A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22 22 0 0 1-4 2z M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0 M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  code: "M16 18l6-6-6-6 M8 6l-6 6 6 6",
  users: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M22 21v-2a4 4 0 0 0-3-3.9 M16 3.1a4 4 0 0 1 0 7.8",
  building: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18z M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2 M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2 M10 6h4 M10 10h4 M10 14h4 M10 18h4",
  arrow: "M19 12H5 M12 19l-7-7 7-7",
  phone: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z",
  mail: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z M22 6l-10 7L2 6",
  github: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.1-1.3-.3-2.5-1-3.5.3-1.2.3-2.4 0-3.5 0 0-1 0-3 1.5-2.6-.5-5.4-.5-8 0C6 2 5 2 5 2c-.3 1.1-.3 2.3 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.4.5-.7 1-.8 1.6-.2.6-.3 1.3-.2 1.9v4 M9 18c-4.5 2-5-2-7-2",
  whatsapp: "M3 21l1.7-5A8.5 8.5 0 1 1 8 19.3z M9 10c0 3 2 5 5 5l1.5-1.5-2-1-1 .8c-.8-.3-1.5-1-1.8-1.8l.8-1-1-2L9 10z",
  check: "M20 6 9 17l-5-5",
  close: "M18 6 6 18 M6 6l12 12",
  send: "M22 2 11 13 M22 2l-7 20-4-9-9-4z",
  menu: "M4 6h16 M4 12h16 M4 18h16",
  external: "M15 3h6v6 M10 14 21 3 M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
};

export type AnyIcon = keyof typeof paths;

export function Icon({ name, className = "size-6" }: { name: AnyIcon; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}
