// app/admin/[[...index]]/page.js
import dynamic from "next/dynamic";

export const dynamic = "force-static"; // ok for Studio hosting

// Load the client-only Studio with no SSR to avoid client-boundary export issues
const StudioClient = dynamic(() => import("./StudioClient"), { ssr: false });

export default function AdminPage() {
  return <StudioClient />;
}
