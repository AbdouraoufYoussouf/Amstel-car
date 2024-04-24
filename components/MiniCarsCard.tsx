"use client"
import React, { useEffect, useRef } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { GiSteeringWheel, GiRollingSuitcase } from "react-icons/gi";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { LuFuel } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import Image from 'next/image';
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip"
import { CarTypes } from '@/src/types/CarsTypes';
import { useScroll, motion, useAnimation, useInView } from 'framer-motion';
import Link from 'next/link';

interface CarProps {
    car: CarTypes;
    index: number;
}

export const MiniCarsCard: React.FC<CarProps> = ({ car, index }) => {
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

            className=" grid grid-rows-2 max-h-[350px] max-w-[260px] w-full flex-col justify-between  gap-7 p-3  bg-card rounded-lg shadow-[inset_-12px_-8px_40px_#46464620]">

            {/* <Link href={`/parc/${car.slug}`} className='flex w-full justify-center'> */}
                <div className='flex gap-2 justify-center w-auto h-auto '>
                    <Image className='rounded-lg' width={230} height={200} src={car.imageUrl} alt={car.brand} />
                </div>
            {/* </Link> */}
            <div className='w-full flex flex-col justify-between gap-4'>
                <div className='w-full flex justify-between items-start gap-7'>
                    <div className=''>
                        <h2 className='font-bold leading-5 '>{car.brand}</h2>
                        <h3 className='font-medium text-sm leading-5 '>{car.model}</h3>
                    </div>
                    <span className='text-center px-2 py-1 text-red-500 rounded-md border '>{car.price}dh/jour</span>
                </div>
                <div className='flex flex-wrap gap-3 items-center w-full justify-center' >
                    <div className='flex items-center justify-center  flex-col'>
                        <GiSteeringWheel size={18} />
                        <span className='text-[10px] text-ellipsis text-center w-full font-extralight'>{car.transmission}</span>
                    </div>
                    <div className='flex items-center flex-col'>
                        <MdAirlineSeatReclineNormal size={18} />
                        <span className='text-[10px] text-ellipsis text-center font-extralight'>{car.seat} places</span>
                    </div>
                    <div className='flex items-center flex-col'>
                        <GiRollingSuitcase size={18} />
                        <span className='text-[10px] text-ellipsis text-center font-extralight'>{car.bag} valises</span>
                    </div>
                    <div className='flex items-center flex-col'>
                        <LuFuel size={18} />
                        <span className='text-[10px] text-ellipsis text-center font-extralight'>{car.fuelType}</span>
                    </div>
                </div>

                <div className='flex gap-2 w-full'>
                    <Link href={`/parc/${car.slug}`} className='flex gap-2 w-full'>
                        <Button size={'sm'} className="flex-1 bg-blue-600 text-white hover:bg-teal-900  text-[14px] items-center flex hover:gap-3 transition-all ">
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
                                        </div>
                                    </TooltipTrigger>
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
