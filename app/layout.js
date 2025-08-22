// app/layout.js
import "./globals.css";

// UI
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// FAB-uri
import WhatsAppButton from "../components/WhatsAppButton";
import CallButton from "../components/CallButton";

// Vercel Speed Insights (opțional, dar util)
import { SpeedInsights } from "@vercel/speed-insights/next";

// Cache implicit pentru toate paginile (evităm conflictul revalidate/force-cache)
export const revalidate = 3600;

export const metadata = {
  metadataBase: new URL("https://egodentlab.vercel.app"),
  title: {
    default: "EgoDent Lab | Digital dentistry",
    template: "%s | EgoDent Lab",
  },
  description:
    "London digital dental lab offering CAD/CAM restorations, implant workflows, appliances & provisionals. Fast, consistent results.",
  icons: { icon: "/logo.png" },
  openGraph: {
    title: "EgoDent Lab — Advanced Digital Solutions",
    description:
      "From planning to final delivery: predictable outcomes, clean margins, stable occlusion and natural finish.",
    url: "https://egodentlab.vercel.app",
    siteName: "EgoDent Lab",
    images: ["/og.jpg"], // folosește og.jpg din /public (dacă lipsește, pune unul acolo)
    type: "website",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-dvh h-full bg-black text-white antialiased">
        {/* Background global */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0"
        >
          <img
            src="/bg.jpg"
            alt=""
            className="h-full w-full object-cover opacity-60"
          />
          {/* Vignetting subtil */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
        </div>

        {/* Shell: coloană flex pentru footer lipit jos */}
        <div className="relative z-10 flex min-h-dvh flex-col">
          {/* Navbar */}
          <header className="sticky top-0 z-20 backdrop-blur-md/0">
            <Navbar />
          </header>

          {/* Conținut */}
          <main className="flex-1">
            <Container>{children}</Container>
          </main>

          {/* Footer mereu jos */}
          <footer className="mt-12">
            <Footer />
          </footer>
        </div>

        {/* FAB-uri globale (doar pe mobil pentru Call) */}
        <WhatsAppButton />
        <CallButton /> {/* md:hidden în componentă => apare doar pe mobil */}

        {/* Vercel Speed Insights */}
        <SpeedInsights />
      </body>
    </html>
  );
}
