import Navbar from "@/presentation/Navbar";
import "@/styles/globals.css";
import { authPages } from "@/utils/apiPath";
import { ACCESS_TOKEN } from "@/utils/constant";
import { getLocalStorageItem } from "@/utils/localStorage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [userRole, setUserRole] = useState("");
  const accessToken = getLocalStorageItem(ACCESS_TOKEN);

  useEffect(() => {
    const role = accessToken?.role;
    setUserRole(role);
  }, [accessToken]);

  const shouldShowNavbar = !authPages.includes(router.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar role={userRole} />}
      <Component {...pageProps} />
    </>
  );
}
