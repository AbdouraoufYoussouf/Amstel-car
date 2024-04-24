"use client"

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { IoCarSportSharp } from 'react-icons/io5';
import {  MdOutlineMonetizationOn } from 'react-icons/md';
import { useAnimation, useInView, motion } from 'framer-motion';
import { FaHistory } from 'react-icons/fa';
import { BiSupport } from "react-icons/bi";
import { societyData } from '@/src/constantes/societyData';


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
        <section className='md:container rounded-t-lg sm:p-3 p-2 min-h-[500px] flex items-center flex-col bg-card'>

            <h1 className="my-20 bg-slate-200 dark:bg-slate-800 w-auto px-3 py-1 text-sm font-semibold rounded-lg text-center text-cn bg-background bg-opacity-60 hover:bg-opacity-40">Qui sommes nous et pourquoi nous choisir?</h1>
            <div className='grid overflow-hidden grid-cols-1 gap-6 lg:grid-cols-2  h-full  '>
                <div className='flex relative flex-col h-full items-center justify-between'>
                    <div className='flex  justify-between gap-4'>

                        <motion.div
                            ref={refImage}
                            variants={{
                                hidden: { opacity: 0, x: -105 },
                                visible: { opacity: 1, x: 0 }
                            }}
                            initial='hidden'
                            animate={slideControls}
                            transition={{ duration: 1 }}
                            className='w-auto h-auto flex absolute left-0 sm:left-3 top-8 border p-3 rounded-md bg-background  items-center justify-center'>
                            <Image src={'/assets/rangered.png'} alt='abaout'
                                width={100} height={100} />
                        </motion.div>

                        <motion.div
                            ref={refImage}
                            variants={{
                                hidden: { opacity: 0, y: -105 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            initial='hidden'
                            animate={slideControls}
                            transition={{ duration: 1 }}
                            className='w-auto h-auto flex border p-3 mb-12 rounded-md bg-background items-center justify-center'>
                            <Image src={'/assets/rangered.png'} alt='abaout'
                                width={100} height={100} />
                        </motion.div>

                        <motion.div
                            ref={refImage}
                            variants={{
                                hidden: { opacity: 0, x: 105 },
                                visible: { opacity: 1, x: 0 }
                            }}
                            initial='hidden'
                            animate={slideControls}
                            transition={{ duration: 1 }}
                            className='w-auto h-auto flex absolute top-8 right-0 sm:right-3 border p-3 rounded-md bg-background items-center justify-center'>
                            <Image src={'/assets/rangered.png'} alt='abaout'
                                width={100} height={100} />
                        </motion.div>

                    </div>
                    <motion.div
                        ref={refImage}
                        variants={{
                            hidden: { opacity: 0, y: -105 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial='hidden'
                        animate={slideControls}
                        transition={{ duration: 1 }}
                        className='w-auto h-auto flex mb-12 lg:mb-0 items-center justify-center'>
                        <Image src={'/assets/rangered.png'} alt='abaout'
                            width={500} height={400} />
                    </motion.div>
                </div>

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
                    <h1 className="text-center sm:leading-normal leading-7 text-2xl sm:text-3xl lg:text-4xl mb-6 font-extrabold">Amstel Car, Votre partenaire de <strong className='text-blue-600'>confiance</strong> pour la location de <strong className='text-blue-600'>voitures</strong></h1>
                    <div className='pb-8 flex flex-col gap-4 '>
                        
                        <div className='flex sm:gap-4 gap-1 items-start'>
                            <div className='border sm:p-3 p-2 rounded-md hover:bg-background'>
                                <FaHistory className='text-red-500 sm:text-[30px] text-[25px]' />
                            </div>
                            <div>
                                <h2 className='font-semibold'>Histoire</h2>
                                <p>{societyData.history}</p>
                            </div>
                        </div>
                        <div className='flex sm:gap-4 gap-1 items-start'>
                            <div className='border sm:p-3 p-2 rounded-md hover:bg-background'>
                                <IoCarSportSharp className='text-red-500 sm:text-[30px] text-[25px]' />
                            </div>
                            <div>
                                <h2 className='font-semibold'>Un large choix de véhicules</h2>
                                <p>Nous proposons une large gamme de voitures pour répondre à tous vos besoins, que vous voyagiez seul, en famille ou entre amis.</p>
                            </div>
                        </div>
                        <div className='flex sm:gap-4 gap-1 items-start'>
                            <div className='border sm:p-3 p-2 rounded-md hover:bg-background'>
                                <MdOutlineMonetizationOn className='text-red-500 sm:text-[30px] text-[25px]' />
                            </div>
                            <div>
                                <h2 className='font-semibold'>Des prix compétitifs</h2>
                                <p> Nous offrons des prix compétitifs et des promotions tout au long de l année.</p>
                            </div>
                        </div>
                        <div className='flex sm:gap-4 gap-1 items-start'>
                            <div className='border sm:p-3 p-2 rounded-md hover:bg-background'>
                                <BiSupport className='text-red-500 sm:text-[30px] text-[25px]' />
                            </div>
                            <div>
                                <h2 className='font-semibold'>Un service client de qualité</h2>
                                <p> Notre équipe est disponible 7j/7 pour répondre à vos questions et vous aider à choisir la voiture idéale pour votre voyage.</p>
                            </div>
                        </div>
                       
                    </div>

                </motion.div>
            </div>
        </section >
    )
}
