import type { NextConfig } from "next";

// Move the Next dev indicator right so it does not cover the chat/WhatsApp buttons (dev only)
const config: NextConfig = { devIndicators: { position: "bottom-right" } };
export default config;
