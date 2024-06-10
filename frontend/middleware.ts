import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware((auth, request) => {
  const { userId } = auth();

  // Redirect to sign-in page if accessing protected route without authentication
  if (isProtectedRoute(request) && !userId) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  // Redirect to dashboard if authenticated and trying to access the home or sign-in page
  if (
    userId &&
    (request.nextUrl.pathname === "/" ||
      request.nextUrl.pathname === "/sign-in")
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Proceed to the requested page
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
