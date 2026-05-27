import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const pathName = request.nextUrl.pathname;

    if (pathName.startsWith("/verify-email")) {
        return NextResponse.next();
    }
    const sessionToken = request.cookies.get('better-auth.session_token');

    if (!sessionToken && pathName.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
};

export const config = {
    matcher: ["/dashboard/:path*"]
}