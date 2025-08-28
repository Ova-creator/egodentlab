// ...alte importuri
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";   // <- corect în App Router

// ✅ UN SINGUR import
import { SpeedInsights } from "@vercel/speed-insights/next";
import SiteOnly from "../components/SiteOnly";

// FAB-uri
import WhatsAppButton from "../components/WhatsAppButton";
import CallButton from "../components/CallButton";

// ...restul layout-ului

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-dvh flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Container>{children}</Container>
        </main>
        <Footer />

        {/* FAB-uri */}
        <WhatsAppButton phone="+447311172297" />
        <CallButton phone="+442033016323" />

        {/* ✅ Speed Insights doar pe site (nu pe /admin) */}
        <SiteOnly>
          <SpeedInsights />
        </SiteOnly>
      </body>
    </html>
  );
}
