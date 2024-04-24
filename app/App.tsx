
"use client"

import { ThemeProvider } from "@/src/theme/ThemeProvider";
import { Navbar } from "@/src/features/layout/Navbar";
import Footer from "@/src/features/layout/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App({ children, }: Readonly<{ children: React.ReactNode; }>) {

    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 800,
            easing: "ease-in-sine",
            delay: 100,
        });
        AOS.refresh();
    }, []);

    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="flex flex-col h-full">
                <Navbar />
                <div className=" w-full py-4">
                    {children}
                </div>
                <Footer />
            </div>
        </ThemeProvider>
    );
}
