import type { NextConfig } from "next";

// Move the Next dev indicator right so it does not cover the chat button (dev only)
// The projects list was merged into /services; project detail pages stay at /projects/[slug]
const config: NextConfig = {
  devIndicators: { position: "bottom-right" },
  redirects: async () => [{ source: "/projects", destination: "/services", permanent: true }],
};
export default config;
