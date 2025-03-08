import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/Auth"

type Role = keyof typeof roleBasedPrivateRoutes;

export const authRoutes = ["/login", "/register"]

const roleBasedPrivateRoutes = {
    user: [/^\/user/, /^\/checkout/],
    admin: [/^\/admin/, /^\/user/, /^\/checkout/],
};

export const middleware = async (request: NextRequest) => {
    console.log("Hello world!")
    const { pathname } = request.nextUrl
    const userInfo = await getCurrentUser();
    // {
    //     identifier: 'bokhari@gmail.com',
    //     role: 'user',
    //     iat: 1741415070,
    //     exp: 1742019870
    //   }

    if (!userInfo) {
        if (authRoutes.includes(pathname)) {
            return NextResponse.next()
        } else {
            return NextResponse.redirect(
                new URL(`http://localhost:3000/login?redirectPath=${pathname}`, request.url)
            )
        }
    }

    if (userInfo?.role && roleBasedPrivateRoutes[userInfo?.role as Role]) {
        const routes = roleBasedPrivateRoutes[userInfo?.role as Role];
        if (routes.some((route) => pathname.match(route))) {
            return NextResponse.next();
        }

        return NextResponse.redirect(new URL("/", request.url));
    }


}

export const config = {
    matcher: [
        "/user/:page",
        "/checkout"
    ]
}