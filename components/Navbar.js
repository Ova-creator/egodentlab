"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Container from "./Container";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/digital-dentistry", label: "Digital Dentistry" },
  { href: "/implant-dentistry", label: "Implant Dentistry" },
  { href: "/workflow", label: "Workflow" },
  { href: "/additional-services", label: "Additional Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/upload-case", label: "Upload Case" },
  { href: "/contact-us", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 bg-black/30 backdrop-blur-md ring-1 ring-white/10">
      <Container>
        <div className="flex items-center justify-between min-h-[64px] md:min-h-[88px]">
          <Link href="/" className="flex items-center">
            {/* stable responsive logo: one for mobile, one for desktop */}
            <span className="block md:hidden">
              <Image src="/logo.png" alt="EgoDent Lab" width={48} height={48} priority />
            </span>
            <span className="hidden md:block">
              <Image src="/logo.png" alt="EgoDent Lab" width={120} height={120} priority />
            </span>
            <span className="ml-3 leading-tight">
              <span className="block font-semibold text-base md:text-xl">EgoDent Lab</span>
              <span className="block text-[10px] md:text-xs text-white/60 -mt-0.5">Digital dentistry</span>
            </span>
          </Link>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg px-3 py-2 ring-1 ring-white/10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className="text-sm">Menu</span>
          </button>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`transition ${isActive(item.href) ? "opacity-100" : "opacity-75"} hover:opacity-90`}
              >
                {item.label}
              </Link>
            ))}
            {/* CTA Lab-to-Lab */}
            <Link
              href="/lab-to-lab"
              className="ml-2 inline-flex items-center rounded-2xl bg-white text-black font-semibold px-4 py-2"
            >
              Lab-to-Lab
            </Link>
          </nav>
        </div>

        {/* mobile drawer */}
        {open && (
          <div className="md:hidden pb-3">
            <div className="card p-3 flex flex-col gap-1">
              {/* CTA first on mobile */}
              <Link
                href="/lab-to-lab"
                className="py-2 px-2 rounded bg-white text-black font-semibold mb-1"
                onClick={() => setOpen(false)}
              >
                Lab-to-Lab
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`py-2 px-2 rounded hover:bg-white/10 ${isActive(item.href) ? "bg-white/10" : ""}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
