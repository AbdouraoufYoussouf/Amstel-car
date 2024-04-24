"use client"

import { Button, buttonVariants } from "@/components/ui/button";
import { societyData } from "@/src/constantes/societyData";
import clsx from "clsx";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { GoDiamond } from "react-icons/go";


const FooterLinks = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "Notre flotte",
        link: "/parc",
    },
    {
        title: "Contact",
        link: "/contact",
    },
    {
        title: "Conditions génerales",
        link: "/#cdg",
    },
];
const Footer = () => {
    return (
        <div className="bg-card mt-14 rounded-t-xl shadow-[inset_0px_13px_5px_0px_#00000024]">
            <section className="sm:container">
                <div className="grid lg:grid-cols-4 py-5">
                    {/* company Details */}
                    <div className="py-8 px-4 col-span-2">
                        <h1 className="sm:text-3xL text-red-600 text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                            AMSTEL CAR
                        </h1>
                        <p className="text-sm">
                            {societyData.desc}
                        </p>
                        <br />
                        <div className="flex items-center gap-3">
                            <MapPin className="text-red-600 " />
                            <p className="text-sm">{societyData.adress}</p>
                        </div>
                    </div>
                    {/* Links */}
                    <div className=" grid sm:grid-cols-1 col-span-2 md:grid-cols-2 md:pl-5 ">
                        <div className="py-8 px-4 ">
                            <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                                Liens importants
                            </h1>
                            <ul className={`flex flex-col gap-3`}>
                                {FooterLinks.map((link, index) => (
                                    <li key={index} className="flex cursor-pointer hover:translate-x-1 duration-300 hover:text-blue-700 space-x-1 ">
                                        <GoDiamond size={18} />
                                        <span className="text-sm">{link.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="py-8 px-4">
                            <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                                Contacts
                            </h1>
                            <div className="flex flex-col gap-2">
                                <a href={`tel:${societyData.phone}`} className="px-2 flex items-center gap-2">
                                    <Phone className="text-gray-700 dark:text-gray-200" />
                                    <p className="text-sm">{societyData.phone}</p>
                                </a>
                                <a href={`mailto:${societyData.email}`} className="px-2 flex items-center gap-2">
                                    <Mail className="text-gray-700 dark:text-gray-200" />
                                    <p className="text-sm">{societyData.email}</p>
                                </a>
                                {/* Social Handles */}
                                <div className="flex items-center gap-3 mt-6 w-auto h-auto">
                                    <a href={societyData.instaUrl} target="_blank">
                                        <Image src="/assets/socials/instagram.png" alt="instagram" width={35} height={35} />
                                    </a>
                                    <a href={societyData.facebookUrl} target='_blank' className="px-2 w-auto h-auto">
                                        <Image src="/assets/socials/facebook.png" alt="instagram" width={30} height={30} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="flex items-center text-center gap-1 flex-wrap px-4 text-sm justify-center">
                    <p>Copyright  © 2024 - 2025 | {societyData.name}. tous droits réservés. </p>
                    <p>Développé par :<Link style={{ color: '#007BFF' }} target="_blank" href={'https://aytechlabo.vercel.app/'} className={clsx(buttonVariants({ variant: 'link' }))}>AYTECHLABO</Link></p>
                </div>
            </section>

        </div>
    );
};

export default Footer;
