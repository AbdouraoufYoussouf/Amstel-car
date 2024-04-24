"use client"

import { TestimonialsData } from '@/src/constantes/TestimonialsData';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';


export const Testimonials = () => {
    const refCard = useRef(null);
    const isInViewCard = useInView(refCard, { once: true });
    const refText = useRef(null);
    const isInViewText = useInView(refText, { once: true });
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInViewCard || isInViewText) {
            mainControls.start("visible");
            slideControls.start("visible")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInViewCard, isInViewText])
    return (
        <section id="testimonies" className="py-20">
            <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
                <motion.div
                    ref={refText}
                    variants={{
                        hidden: { opacity: 0, y: -105 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial='hidden'
                    animate={slideControls}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mb-12 space-y-5 md:mb-16 text-center">
                        <div className="bg-slate-200 dark:bg-slate-800 inline-block px-3 py-1 text-sm font-semibold rounded-lg text-center text-cn bg-background bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
                            Mots des autres
                        </div>
                        <h1 className="mb-5 text-3xl font-semibold text-center md:text-5xl">
                            Il n&apos;y a pas que nous.
                        </h1>
                        <p className="text-lg leading-5 text-center md:text-2xl">
                            Voici ce que les autres ont à dire de nous.
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {TestimonialsData.map((item, index) => (
                        <motion.div ref={refCard}
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 105 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            initial='hidden'
                            animate={mainControls}
                            transition={{ duration: 0.8 * index }}
                            className="relative group"
                        >
                            <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-400 to-pink-300 blur duration-400 group-hover:opacity-80 group-hover:duration-200"></div>
                            <div className="relative p-6 space-y-6 leading-none rounded-lg dark:bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4">
                                    <Image width={200} height={200} src={item.imageUrl} className="w-12 h-12 bg-center bg-cover border rounded-full" alt={item.name} />
                                    <div>
                                        <h3 className="text-lg font-semibold ">{item.name}</h3>
                                        <p className="dark:text-gray-500 text-md">{item.title}</p>
                                    </div>
                                </div>
                                <p className="leading-normal dark:text-gray-300 text-md">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
