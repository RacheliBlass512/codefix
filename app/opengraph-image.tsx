import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Code Fix – Rachel Efodi, Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// ponytail: English text because the default next/og font does not support Hebrew
export default async function OgImage() {
  const logo = `data:image/png;base64,${(await readFile(join(process.cwd(), "public/logo.png"))).toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", gap: 70, padding: 90, background: "radial-gradient(circle at 80% 10%, #2a2470 0%, #050a1a 55%)", color: "#e6ecff" }}>
        <img src={logo} width={340} height={340} style={{ borderRadius: 999 }} alt="" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 800, display: "flex" }}>
            Code&nbsp;<span style={{ color: "#2ee6e6" }}>Fix</span>
          </div>
          <div style={{ fontSize: 40, marginTop: 12, color: "#94a3c7" }}>Rachel Efodi · Full Stack Developer</div>
          <div style={{ fontSize: 30, marginTop: 36, color: "#3aa8f5" }}>Websites · Automations · AI Agents</div>
        </div>
      </div>
    ),
    size,
  );
}
