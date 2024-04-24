"use client"

import React, { useEffect, useRef } from 'react';
import { IoCarSportOutline } from "react-icons/io5";
import { motion, useAnimation, useInView } from "framer-motion"
import { FaHandshake } from 'react-icons/fa';
import { PiHandCoinsBold } from "react-icons/pi";


interface ServiceItemProps {
    icon: JSX.Element;
    title: string;
    description: string;
    index: number
}

const ServiceItem: React.FC<ServiceItemProps> = ({ index, icon, title, description }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView])

    return (

        <motion.div ref={ref}
            variants={{
                hidden: { opacity: 0, y: 105 },
                visible: { opacity: 1, y: 0 }
            }}
            initial='hidden'
            animate={mainControls}
            transition={{ duration: 0.5 * index, delay: 0.05 }}
            className="flex flex-col items-center gap-3 p-5 bg-gray-100 dark:bg-[#1B1B1F] rounded-3xl shadow">
            <span>{icon}</span>
            <h2 className="text-lg text-center leading-6 font-bold text-dark-grey-900">{title}</h2>
            <p className="text-base font-light leading-5 text-dark-grey-600 text-center">{description}</p>
        </motion.div>
    );
};

export const Services = () => {
    const ServicesData = [
        { icon: <IoCarSportOutline size={38} className='text-red-500' />, title: 'Location courte durée', description: 'Nous vous proposons une large gamme de voitures permettant  de répondre à votre besoin que vous soyez particulier ou professionnel.' },
        { icon: <FaHandshake size={38} className='text-red-500' />, title: 'Location longue durée', description: "Fort de nos expériences avec de nombreuses entreprises, nous saurons adapter notre service en fonction de votre problématique et restons à l'écoute de vos besoins durant toute la période de location." },
        { icon: <PiHandCoinsBold size={38} className='text-red-500' />, title: 'Prestation sur mesure', description: "Livraison à l'aéroport, déplacement en ville, service avec chauffeur... Nous nous ferons un plaisir de vous proposer nos services adaptés à vos besoins en vous garantissant une qualité de service  irréprochable à un prix raisonnable." },
        // { icon: <MdAssuredWorkload size={38} className='text-red-500' />, title: 'Assurance tous risques', description: "Présentez-vous à l'agence avec votre pièce d'identité et votre réservation, et partez au volant de votre voiture !" }
    ];

    return (
        <div className="flex flex-col items-center sm:mt-4 mx-auto ">
            <h1 className="bg-slate-200 dark:bg-slate-800 w-auto px-3 py-1 text-sm font-semibold rounded-lg text-center text-cn bg-background bg-opacity-60 hover:bg-opacity-40">Nos services</h1>
            <div className="w-full mt-14">
                <div className="px-3 md:container flex flex-col items-center gap-16 mx-auto">
                    <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                        {ServicesData.map((service, index) => (
                            <ServiceItem index={index} key={index} {...service} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
