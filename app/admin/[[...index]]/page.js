// app/admin/[[...index]]/page.js
import NextDynamic from "next/dynamic";

// Important: păstrăm acest export EXACT cu numele "dynamic"
export const dynamic = "force-static";

// Încărcăm Studio doar pe client ca să evităm eroarea cu "export *" în client boundary
const StudioClient = NextDynamic(() => import("./StudioClient"), { ssr: false });

export default function AdminPage() {
  return <StudioClient />;
}
