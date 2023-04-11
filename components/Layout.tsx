import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./Header/Header";
import LoggedInHeader from "./Header/LoggedInHeader";

export default function Layout({ children }: { children: any }) {
    const router = useRouter();
    return (
        <>
            {
                router.asPath === "/recommendation" || router.asPath === "/cart" || router.asPath === "checkout" || router.asPath === "/account" ? <LoggedInHeader /> : <Header />
            }
            <>
                {children}
            </>
            {router.asPath !== "/recommendation" &&
                router.asPath !== "/cart" &&
                router.asPath !== "/signup" &&
                router.asPath !== "/questions" &&
                router.asPath !== "/login" &&
                <Footer />
            }
        </>
    )
}