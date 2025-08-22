"use client";

import { Studio } from "sanity";
import config from "../../../sanity.config";

export default function AdminPage() {
  return (
    <div className="min-h-[70vh]">
      <Studio config={config} />
    </div>
  );
}
