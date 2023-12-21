import { NextResponse } from "next/server";
import { TOKEN_KEY } from "./utils/constant";

const authPages = ["/signin", "/signup", "/"];

export const middleware = (request) => {
  let cookie = request.cookies.get(TOKEN_KEY);
  let authToken = cookie?.value;

  const loggedInUserNotAccessPaths = authPages.includes(
    request.nextUrl.pathname
  );

  if (loggedInUserNotAccessPaths) {
    if (authToken) {
      return NextResponse.redirect(new URL("/about", request.url));
    }
  } else {
    if (!authToken) {
      return NextResponse.redirect(new URL("/signin", request.url));
    }
  }
};

export const config = {
  matcher: [
    "/",
    "/signin",
    "/signup",
    "/home/:path*",
    "/about/:path*",
    "/contact/:path*",
  ],
};
