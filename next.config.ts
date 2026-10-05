import type { NextConfig } from "next";

// אינדיקטור הפיתוח של Next זז ימינה כדי לא להסתיר את כפתורי הצ'אט/וואטסאפ (פיתוח בלבד)
const config: NextConfig = { devIndicators: { position: "bottom-right" } };
export default config;
