"use client";
import { useBelowViewportWidth } from "@/src/hooks/UseMediaQuery";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    const taille = useBelowViewportWidth(560);

    return (
        <>
            <Link href="/" >
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={ 60}
                    height={60}
                    className="w-auto h-auto"
                    priority
                />
            </Link>
        </>
    );
};

export default Logo;