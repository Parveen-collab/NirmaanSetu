import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("accessToken")?.value;
  const role = request.cookies.get("role")?.value?.toUpperCase();
  const isAuthenticated = Boolean(token);
  const isGuest = role === "GUEST";

  // Point 3 Action routes if navigated directly:
  // "when a user click on find works, hire skilled workers, sell construction materials then first if role is guest redirect it to Registartion page second if role is Employee, Employer, Supplier, Admin, Super_Admin then redirect it to Login Page."
  const guardedActionRoutes = [
    "/find-work",
    "/find-works",
    "/hire-skilled-workers",
    "/hire-workers",
    "/sell-construction-materials",
    "/sell-materials",
  ];

  if (guardedActionRoutes.some((route) => pathname.startsWith(route))) {
    if (isAuthenticated && isGuest) {
      return NextResponse.redirect(new URL("/register", request.url));
    }
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Protected Dashboard & Wallet routes
  if (pathname.startsWith("/dashboard") || pathname.startsWith("/wallet")) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    if (isGuest) {
      return NextResponse.redirect(new URL("/register", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/wallet/:path*",
    "/find-work",
    "/find-works",
    "/hire-skilled-workers",
    "/hire-workers",
    "/sell-construction-materials",
    "/sell-materials",
  ],
};
