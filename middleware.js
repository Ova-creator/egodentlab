// middleware.js
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/admin/:path*"], // protect only the Studio
};

export function middleware(req) {
  const auth = req.headers.get("authorization");
  const user = process.env.ADMIN_USER;
  const pass = process.env.ADMIN_PASS;

  // No credentials? Ask for them.
  if (!auth) {
    return new NextResponse("Auth required", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="EgoDent Admin"' },
    });
  }

  // Parse "Basic base64(user:pass)"
  const [scheme, encoded] = auth.split(" ");
  if (scheme !== "Basic" || !encoded) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  // atob is available in Edge runtime
  const [u, p] = atob(encoded).split(":");

  // Wrong credentials
  if (u !== user || p !== pass) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  // OK → continue
  return NextResponse.next();
}
