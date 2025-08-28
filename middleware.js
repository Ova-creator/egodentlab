// middleware.js
import { NextResponse } from "next/server"

export function middleware(req) {
  if (process.env.NODE_ENV !== "production") return NextResponse.next()

  const res = NextResponse.next()
  res.headers.set(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com https://*.sanity.io",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://cdn.sanity.io https://images.sanitycdn.com",
      "connect-src 'self' https://*.sanity.io",
      "font-src 'self' data:",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self' mailto:",
    ].join("; ")
  )
  return res
}
