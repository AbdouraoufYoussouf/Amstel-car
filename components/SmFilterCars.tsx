"use client"

import { CarTypes } from '@/src/types/CarsTypes';
import React, { Fragment, useState } from 'react'
import { Checkbox } from './ui/checkbox';
import { GoDotFill } from 'react-icons/go';
import { motion } from 'framer-motion';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface SmFilterProps {
    data: CarTypes[];
    setData?: React.Dispatch<React.SetStateAction<CarTypes[]>>;
}
export const SmFilterCars = ({ data, setData }: SmFilterProps) => {

    const prixData = [
        { min: 0, max: 300, label: "Moins de 300dh" },
        { min: 300, max: 500, label: "300dh à 500dh" },
        { min: 500, max: 1000, label: "500dh à 1000dh" },
        { min: 1000, max: 1500, label: "1000dh à 1500dh" },
        { min: 1500, max: 2000, label: "1500dh à 2000dh" },
        { min: 2000, max: 3000, label: "2000dh à 3000dh" },
        { min: 3000, max: 100000000, label: "Plus 3000dh" }
    ];

    //trier les donné par prix
    const [lastSort, setLastSort] = useState("");
    // const sortByPrice = () => {
    //     let newSort;
    //     if (lastSort === "asc") {
    //         newSort = "desc";
    //         setData([...data].sort((a, b) => b.price - a.price));
    //     } else {
    //         newSort = "asc";
    //         setData([...data].sort((a, b) => a.price - b.price));
    //     }
    //     setLastSort(newSort);
    // };
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className='lg:hidden flex col-span-1 border rounded-lg bg-card p-3 h-auto flex-col w-full gap-2'>
            <h2 className='text-center font-bold bg-background p-1 rounded-md'>Filitrer les voitures</h2>
            {/* Disponibilité now */}
            {/* <form className="space-y-6 flex w-full">
                <div className="space-y-2 flex items-center gap-3 justify-between sm:justify-normal  w-full">
                    <label htmlFor="marque" className=' font-medium sr-only text-base'>Disponibilités :</label>

                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <div className='text-green-500 '>
                            <GoDotFill size={20} />
                        </div>
                        <label
                            htmlFor="terms"
                            className="text-sm font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Disponible
                        </label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <div className='text-red-500 '>
                            <GoDotFill size={20} />
                        </div>
                        <label
                            htmlFor="terms"
                            className="text-sm font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Non Disponible
                        </label>
                    </div>

                </div>

            </form> */}

            {/* Filtrage par marque et prix */}
            <div className='flex justify-between items-center gap-4'>
                {/* Marque */}
                <form className=" space-y-6 w-full">
                    <div className="space-y-2 w-full">
                        <Select >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select marque" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup >
                                    {/* <SelectLabel>Fruits</SelectLabel> */}
                                    {
                                        data.map((item, index) => (
                                            <Fragment key={index}>
                                                <SelectItem value={item.brand}>{item.brand}</SelectItem>
                                            </Fragment>
                                        ))
                                    }
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                </form>

                {/* Prix */}
                <form className="space-y-6 w-full">
                    <div className="space-y-2">
                        <Select >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Prix" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup >
                                    {/* <SelectLabel>Fruits</SelectLabel> */}
                                    {
                                        prixData.map((item, index) => (
                                            <Fragment key={index}>
                                                <SelectItem value={item.label}>{item.label}</SelectItem>
                                            </Fragment>
                                        ))
                                    }
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                </form>
            </div>

        </motion.div>
    )
}
