"use client"
import React, { useEffect, useRef } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { GiSteeringWheel, GiRollingSuitcase } from "react-icons/gi";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { LuFuel } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import Image from 'next/image';
import { Button, buttonVariants } from './ui/button';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { CarTypes } from '@/src/types/CarsTypes';
import { useScroll, motion, useAnimation, useInView } from 'framer-motion';
import Link from 'next/link';

interface CarProps {
    car: CarTypes;
    index: number
}

export const CarsCard: React.FC<CarProps> = ({ car, index }) => {
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
            animate={slideControls}
            transition={
                { duration: .6, ease: "easeOut" }
            }

            className=" flex min-w-[280px] max-h-[390px] sm:max-w-[330px] max-w-full flex-col justify-between items-center gap-3 p-3  bg-card rounded-lg shadow-[inset_-12px_-8px_40px_#46464620]">
            <div className='bg-red.500 w-full flex justify-between items-start'>
                <div className=''>
                    <h2 className='font-bold leading-5 '>{car.brand}</h2>
                    <h3 className='font-medium text-sm leading-5 '>{car.model}</h3>

                </div>
                <span className='text-center px-2 py-1 rounded-md border '>{car.price}dh/jour</span>
            </div>
            <div>
                <Image width={150} height={150} className='w-auto h-auto' src={car.imageUrl} alt={car.brand} />
            </div>
            <div className='w-full flex flex-col gap-4'>
                <div className='grid grid-cols-4 gap-3 items-center w-full justify-center' >
                    <div className='flex items-center justify-center  flex-col'>
                        <GiSteeringWheel size={22} />
                        <span className='text-[12px] text-ellipsis text-center w-full font-extralight'>{car.navigation}</span>
                    </div>
                    <div className='flex items-center flex-col'>
                        <MdAirlineSeatReclineNormal size={22} />
                        <span className='text-[12px] text-ellipsis text-center font-extralight'>{car.seat} places</span>
                    </div>
                    <div className='flex items-center flex-col'>
                        <GiRollingSuitcase size={22} />
                        <span className='text-[12px] text-ellipsis text-center font-extralight'>{car.bag} valises</span>
                    </div>
                    <div className='flex items-center flex-col'>
                        <LuFuel size={22} />
                        <span className='text-[12px] text-ellipsis text-center font-extralight'>{car.fuelType}</span>
                    </div>
                </div>

                <div className='flex gap-2 w-full'>
                    <Link href={`/parc/${car.slug}`} className='flex gap-2 w-full'>
                        <Button size={'sm'} className="flex-1 bg-blue-600 text-white hover:bg-blue-900  text-[14px] items-center flex hover:gap-3 transition-all ">
                            Réserver maitenant <FaArrowRightLong className='ml-2 ' size={15} />
                        </Button>
                    </Link>
                    {
                        car.availability ? (

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className='text-green-500 border p-1.5 rounded-md '>
                                            <GoDotFill size={20} />
                                        </div>                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Disponible</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        ) : (
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className='text-red-500 border p-1.5 rounded-md '>
                                            <GoDotFill size={20} />
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p> Disponible dans 3 jours</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                        )
                    }
                </div>
            </div>
        </motion.div>
    )
}
