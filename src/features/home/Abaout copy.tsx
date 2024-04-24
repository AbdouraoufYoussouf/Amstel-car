"use client"

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IoIosPeople, IoIosStar, IoIosStarHalf } from "react-icons/io";
import { IoCarSportOutline } from 'react-icons/io5';
import { FaCcVisa } from 'react-icons/fa6';
import { MdAssignmentAdd } from 'react-icons/md';
import { GiNightVision } from 'react-icons/gi';
import { useAnimation, useInView, motion } from 'framer-motion';


export const Abaout = () => {
    const refImage = useRef(null);
    const isInViewImage = useInView(refImage, { once: true });
    const refDesc = useRef(null);
    const isInViewDesc = useInView(refImage, { once: true });
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInViewImage || isInViewDesc) {
            mainControls.start("visible");
            slideControls.start("visible")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInViewImage, isInViewDesc])

    return (
        <section className='md:container p-3 min-h-[500px] flex items-center flex-col'>

            <h1 className="my-8 bg-slate-200 dark:bg-slate-800 w-auto px-3 py-1 text-sm font-semibold rounded-lg text-center text-cn bg-background bg-opacity-60 hover:bg-opacity-40">Qui sommes nous et pourquoi nous choisir?</h1>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-2  h-full  '>
                <motion.div
                    ref={refImage}
                    variants={{
                        hidden: { opacity: 0, y: -105 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial='hidden'
                    animate={slideControls}
                    transition={{ duration: 1 }}
                    className='flex  h-full items-center justify-center'>
                    <Image src={'/assets/rangered.png'} alt='abaout'
                        width={500} height={400} />
                </motion.div>
                <motion.div
                    ref={refDesc}
                    variants={{
                        hidden: { opacity: 0, y: 105 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial='hidden'
                    animate={slideControls}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-center text-3xl sm:text-3xl lg:text-4xl my-6 font-extrabold">Votre partenaire de <strong className='text-blue-600'>confiance</strong> pour la location de <strong className='text-blue-600'>voitures</strong></h1>

                    <Tabs defaultValue="histoire" className="w-full border p-2 rounded-md">
                        <TabsList className='w-full p-2 h-[50px] flex justify-between'>
                            <TabsTrigger className='flex-1 p-2' value="histoire">L&apos;histoire d&apos;AMSTEL CAR</TabsTrigger>
                            <TabsTrigger className='flex-1 p-2' value="mission">Notre mission et vision</TabsTrigger>
                        </TabsList>
                        <TabsContent value="histoire" className='flex gap-6 flex-col pt-2'>
                            <p className="Text">Créée en 2008 par Nabil, AMSTEL CAR est une entreprise familiale de location de voitures basée à Kenitra. Notre passion pour l&apos;automobile et notre engagement envers la satisfaction client nous ont permis de devenir l&apos;un des leaders du marché dans la région.</p>

                            <div className='flex flex-wrap gap-4 items-center justify-center'>
                                <div className='flex gap-1 items-center'>
                                    <span className='rounded-full border p-2'>
                                        <IoIosPeople size={25} />
                                    </span>
                                    <span className='text-sm'>+1000 clients</span>
                                </div>

                                <div className='flex gap-1 items-center '>
                                    <span className='rounded-full  border p-2'>
                                        4.5
                                    </span>
                                    <div className='flex '>
                                        <IoIosStar size={20} color='yellow' />
                                        <IoIosStar size={20} color='yellow' />
                                        <IoIosStar size={20} color='yellow' />
                                        <IoIosStar size={20} color='yellow' />
                                        <IoIosStarHalf size={20} color='yellow' />
                                    </div>
                                </div>

                                <div className='flex gap-1 items-center'>
                                    <span className='rounded-full border p-2'>
                                        <IoCarSportOutline size={20} />
                                    </span>
                                    <span className='text-sm'>+100 voitures</span>
                                </div>

                                <div className='flex gap-1 items-center'>
                                    <span className='rounded-full border p-2'>
                                        <FaCcVisa size={20} />
                                    </span>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="mission">
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                                <div className=' rounded-md p-2 flex gap-3 flex-col items-center'>
                                    <div className='flex items-center gap-1' >
                                        <MdAssignmentAdd className='text-blue-600' size={20} />
                                        <span className='text-center font-bold'>Mission</span>
                                    </div>
                                    <p className='text-center'>Offrir à nos clients une expérience de location de voiture simple, abordable et fiable, tout en surpassant leurs attentes en matière de service et de qualité.</p>
                                </div >
                                <div className=' rounded-md p-2 flex gap-3 flex-col items-center'>
                                    <div className='flex items-center gap-1' >
                                        <GiNightVision className='text-blue-600' size={20} />
                                        <span className='text-center font-bold' >Vision</span>
                                    </div>
                                    <p className='text-center'>Devenir le partenaire de location de voiture de confiance pour tous les voyageurs, en offrant une large gamme de véhicules et un service d&apos;excellence.</p>
                                </div >
                            </div >
                        </TabsContent>
                    </Tabs>
                </motion.div>
            </div>
        </section >
    )
}
