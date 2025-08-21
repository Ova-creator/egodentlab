// app/layout.js
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import WhatsAppButton from "../components/WhatsAppButton";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Domeniul devine dinamic (preview sau producție)
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://egodentlab.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "EgoDent Lab | Digital Dentistry, London",
    template: "%s | EgoDent Lab",
  },
  description:
    "Premium digital dental lab in London: CAD/CAM planning, implant and restorative workflows, and fast, predictable outcomes.",
  openGraph: {
    type: "website",
    url: "/", // devine absolut cu metadataBase
    title: "EgoDent Lab | Digital Dentistry, London",
    description:
      "Premium digital dental lab in London: CAD/CAM planning, implant and restorative workflows, and fast, predictable outcomes.",
    siteName: "EgoDent Lab",
    images: [
      { url: "/og.jpg", width: 1200, height: 630, alt: "EgoDent Lab — Digital Dentistry, London" },
    ],
  },
  alternates: { canonical: "/" },
  icons: { icon: "/logo.png" },
  // iOS fix (evită auto-link la tel/email/adresă care strică hydration)
  formatDetection: { telephone: false, address: false, email: false },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-3 focus:py-2 focus:rounded bg-white text-black"
        >
          Skip to content
        </a>

        <Navbar />

        <main id="main-content" role="main" className="py-16 md:py-20">
          <Container>{children}</Container>
        </main>

        <WhatsAppButton />
        <Footer />

        <SpeedInsights />
      </body>
    </html>
  );
}
