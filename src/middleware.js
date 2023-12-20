import { NextResponse } from "next/server";
import { getAuthToken } from "./utils/auth";

const authPages = ["/signin", "/signup", "/"];

export const middleware = (request) => {
  const authToken = getAuthToken();
  console.log("authToken", authToken);

  const loggedInUserNotAccessPaths = authPages.includes(
    request.nextUrl.pathname
  );

  if (loggedInUserNotAccessPaths) {
    console.log("yes path");

    if (authToken) {
      console.log("authToken");
      return NextResponse.redirect(new URL("/home", request.url));
    } else {
      console.log("no authToken");
    }
  } else {
    console.log("not path");
    if (!authToken) {
      console.log("empty authToken");
      return NextResponse.redirect(new URL("/signin", request.url));
    }
  }
};

export const config = {
  matcher: ["/", "/signin", "/signup", "/home/:path*", "/about/:path*"],
};
