"use client"

import React, { useEffect, useRef } from 'react'
import { CarsCard } from '@/components/CarsCard';
import { carsData } from '@/src/constantes/CarsData';
import { useAnimation, useInView, motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import { MiniCarsCard } from '@/components/MiniCarsCard';

export const ParcAuto = () => {
    const refText = useRef(null);
    const isInViewText = useInView(refText, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInViewText) {
            mainControls.start("visible");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInViewText])
    return (
        <div className=" flex flex-col mx-auto mt-7">
            <div className="w-full px-3 md:container flex flex-col gap-12">
                <motion.div
                    ref={refText}
                    variants={{
                        hidden: { opacity: 0, y: -105 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial='hidden'
                    animate={mainControls}
                    transition={{ duration: 0.8 }}
                    className='flex flex-col items-center justify-start w-full'>
                    <p
                        className=" inline-block bg-slate-200 dark:bg-slate-800 px-3 py-1 my-10 text-center text-sm font-semibold  rounded-lg  text-cn bg-background bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
                        Nos top modeles
                    </p>
                    <h1 className='text-4xl font-bold dark:text-gray-300 text-gray-900 my-2'>Modeles populaires</h1>
                    {/* <p className=' font-light leading-5 dark:text-gray-200 text-gray-700 lg:w-[70%]'>Chez AMSTEL CAR, nous sommes fiers de vous proposer une flotte de véhicules récents et bien entretenus pour répondre à tous vos besoins. Que vous soyez à la recherche d&apos;une citadine pour vos déplacements quotidiens, d&apos;un break pour vos vacances en famille ou d&apos;un utilitaire pour vos besoins professionnels, nous avons le véhicule qu&apos;il vous faut.</p> */}
                </motion.div>
                <div id='parc' className="grid   grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 self-center">
                    {
                        carsData.slice(0, 6).map((car, index) =>
                            <MiniCarsCard key={index} index={index} car={car} />
                        )
                    }
                </div>

                <div className='flex justify-center'>
                    <Link href={'/parc'} className='bg-accent py-2 px-4 rounded-lg flex items-center hover:gap-2 transition-all'>
                        Voir tous les voitures <FaArrowRightLong className='ml-2 ' size={15} />
                    </Link>
                </div>
            </div>
        </div>
    )
}
