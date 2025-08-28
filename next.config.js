// next.config.js
const SITE_CSP = [
  "default-src 'self'",
  "script-src 'self' https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://cdn.sanity.io https://*.apicdn.sanity.io",
  "font-src 'self' data:",
  "connect-src 'self' https://*.apicdn.sanity.io https://vitals.vercel-insights.com",
  "frame-ancestors 'none'",
].join("; ");

const STUDIO_CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://accounts.sanity.io https://*.sanity.io",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://cdn.sanity.io https://*.sanity.io",
  "connect-src 'self' https://*.sanity.io https://*.apicdn.sanity.io",
  "frame-ancestors 'self'",
].join("; ");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "images.sanitycdn.com" },
    ],
  },
}

module.exports = nextConfig
