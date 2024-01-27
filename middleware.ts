import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: ["/", "/signin", "/signup", "/terms", "/privacy", ""],
  afterAuth(auth, req) {
    //? Handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({
        returnBackUrl: req.url,
      });
    }

    //? Allow authenticated users to access protected routes
    if (auth.userId && !auth.isPublicRoute) {
      return NextResponse.next();
    }

    //? Allow users visiting public routes to access them
    return NextResponse.next();
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
