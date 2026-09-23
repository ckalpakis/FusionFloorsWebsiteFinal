import { NextRequest, NextResponse } from "next/server";
import { seoRedirect } from "@/lib/urls";

export function middleware(request: NextRequest) {
  // Avoid changing methods or payloads for forms, webhooks and API calls.
  if (request.method !== "GET" && request.method !== "HEAD") return NextResponse.next();
  const destination = seoRedirect(
    new URL(request.url),
    request.headers.get("host") ?? request.nextUrl.host,
    (request.headers.get("x-forwarded-proto") ?? request.nextUrl.protocol).replace(/:$/, ""),
  );
  return destination ? NextResponse.redirect(destination, 301) : NextResponse.next();
}

export const config = {
  matcher: ["/((?!api(?:/|$)|_next(?:/|$)|images(?:/|$)|videos(?:/|$)|favicon.ico).*)"],
};
