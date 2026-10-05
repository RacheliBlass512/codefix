import type { Metadata, Viewport } from "next";
import { Heebo, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import { site } from "@/content/site";
import "./globals.css";

const heebo = Heebo({ subsets: ["hebrew", "latin"], variable: "--font-heebo", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono-jb", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Code Fix | בניית אתרים, אוטומציות וסוכני AI – רחל אפודי", template: "%s | Code Fix" },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.owner }],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "he_IL", siteName: site.name, url: "/" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#050a1a" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  image: `${site.url}/logo.png`,
  description: site.description,
  telephone: site.phoneIntl,
  email: site.email,
  areaServed: "IL",
  founder: { "@type": "Person", name: site.owner, alternateName: site.ownerHe, jobTitle: "Full Stack Developer" },
  sameAs: [site.github],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${mono.variable}`}>
      <body className="min-h-dvh font-sans antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:right-3 focus:z-50 focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2">דילוג לתוכן</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ChatWidget />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
