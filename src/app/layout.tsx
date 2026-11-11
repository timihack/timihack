import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "TIMIHACK — Engineering what matters",
    template: "%s | TIMIHACK",
  },
  description:
    "Adeniran John is a backend and AI engineer building robust APIs, intelligent systems, and developer tools.",
  openGraph: {
    title: "TIMIHACK — Engineering what matters",
    description: "Backend engineering, AI systems and open-source software.",
    type: "website",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://timihack.vercel.app"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
