import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import WhatsAppButton from "../components/WhatsAppButton";
import { SpeedInsights } from "@vercel/speed-insights/next"; // ⬅️ LA ÎNCEPUT, cu celelalte importuri

export const metadata = {
  metadataBase: new URL("https://egodentlab.co.uk"),
  title: {
    default: "EgoDent Lab | Digital Dentistry, London",
    template: "%s | EgoDent Lab",
  },
  description:
    "Premium digital dental lab in London: CAD/CAM planning, implant and restorative workflows, and fast, predictable outcomes.",
  openGraph: {
    type: "website",
    url: "/",
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
  // Prevent iOS from auto-wrapping phone/email/address and breaking hydration.
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
		 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "EgoDent Lab",
      url: "https://egodentlab.co.uk",
      logo: "https://egodentlab.co.uk/logo.png",
      contactPoint: [{
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "lab@egodent.co.uk",
        telephone: "+44 203 301 6323",
        areaServed: "GB",
        availableLanguage: ["en"]
      }],
      sameAs: [] // le adăugăm când ai social-urile
    }),
  }}
/>
      </body>
    </html>
  );
}
