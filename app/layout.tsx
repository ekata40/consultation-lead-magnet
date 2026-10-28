import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://unity.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Free AI Marketing Consultation | Unity",
  description:
    "Book a free one-to-one AI marketing consultation and get practical next steps tailored to your business.",
  openGraph: {
    title: "Get a Clear Marketing Plan | Unity",
    description:
      "Book a free AI marketing consultation and get practical next steps tailored to your business.",
    url: siteUrl,
    siteName: "Unity",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Marketing Consultation | Unity",
    description: "Get a practical marketing plan tailored to your business.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fbfaf8",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
