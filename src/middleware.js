import { NextResponse } from "next/server";
import { TOKEN_KEY } from "./utils/constant";
import { jwtDecode } from "jwt-decode";

const authPages = ["/signin", "/signup", "/"];

export const middleware = (request) => {
  let cookie = request.cookies.get(TOKEN_KEY);
  let authToken = cookie?.value;

  const isTokenExpired = () => {
    if (authToken) {
      const decodedToken = jwtDecode(authToken);
      const currentTime = Date.now() / 1000;
      return decodedToken.exp < currentTime;
    }
    return false;
  };

  const loggedInUserNotAccessPaths = authPages.includes(
    request.nextUrl.pathname
  );

  if (loggedInUserNotAccessPaths) {
    if (authToken && !isTokenExpired()) {
      return NextResponse.redirect(new URL("/server", request.url));
    }
  } else {
    if (!authToken || isTokenExpired()) {
      return NextResponse.redirect(new URL("/signin", request.url));
    }
  }
};

export const config = {
  matcher: [
    "/",
    "/signin",
    "/signup",
    "/server/:path*",
    "/client/:path*",
    "/static/:path*",
    "/isr/:path*",
  ],
};
