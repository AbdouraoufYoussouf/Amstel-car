"use client"
import React, { useRef } from 'react'
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
import { useScroll, motion } from 'framer-motion';

interface CarProps {
    car: CarTypes;
}

export const CarsCard: React.FC<CarProps> = ({ car }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.50 1"],
    })

    return (
        <motion.div ref={ref}
            style={{
                scale: scrollYProgress,
                // transition: ".5s ease-in-out",
                opacity: scrollYProgress
            }}
            className=" flex min-w-[280px] max-h-[390px] sm:max-w-[330px] max-w-full flex-col justify-between items-center gap-3 p-3  bg-slate-100  dark:bg-[#1B1B1F] rounded-lg shadow">
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
                    <Button size={'sm'} className="flex-1 bg-blue-600 text-white hover:bg-blue-900  text-[14px] items-center flex hover:gap-3 transition-all ">
                        Réserver maitenant <FaArrowRightLong className='ml-2 ' size={15} />
                    </Button>
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
