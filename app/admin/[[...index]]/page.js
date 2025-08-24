// app/admin/[[...index]]/page.js
import { Studio } from "sanity";
import config from "../../../sanity/sanity.config";

export const dynamic = "force-static"; // ok pt Vercel
export default function AdminPage() {
  return <Studio config={config} />;
}
