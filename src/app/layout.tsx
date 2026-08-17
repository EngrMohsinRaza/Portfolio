import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { MotionProvider } from "@/components/shared/MotionProvider";
import { siteConfig } from "@/data/site";
import "./globals.css";

/* ---------------------------------------------------------------------------
 * Self-hosted fonts (downloaded at build time — no external requests at runtime)
 * Playfair Display → elegant serif headings · Inter → clean body text
 * ------------------------------------------------------------------------- */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

/* ---------------------------------------------------------------------------
 * 🔍 SEO — edit your site-wide meta info in src/data/site.ts
 * ------------------------------------------------------------------------- */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    url: "/",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    siteName: `${siteConfig.name} Portfolio`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${siteConfig.name} — ${siteConfig.title}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  icons: { icon: "/icon.svg" },
};

/* Structured data (JSON-LD) — helps Google show a rich "person" result */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.title,
  description: siteConfig.description,
  url: siteConfig.siteUrl,
  email: `mailto:${siteConfig.contact.email}`,
  telephone: siteConfig.contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.contact.address,
    addressRegion: "Eastern Province",
    addressCountry: "SA",
  },
  sameAs: siteConfig.socials.map((s) => s.url),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} noise`}>
        {/* Accessibility: keyboard users can jump straight to the content */}
        <a href="#main" className="skip-link">
          Skip to content
        </a>

        {/* Respects users' "reduce motion" OS setting for all animations */}
        <MotionProvider>{children}</MotionProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
