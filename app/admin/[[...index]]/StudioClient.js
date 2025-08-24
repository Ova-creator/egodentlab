"use client";

import { Studio } from "sanity";
import config from "../../../sanity.config"; // <-- asigură-te că acest fișier e la rădăcina repo-ului

export default function StudioClient() {
  return <Studio config={config} />;
}
