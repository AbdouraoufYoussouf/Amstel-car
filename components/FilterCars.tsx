"use client"

import { CarTypes } from '@/src/types/CarsTypes';
import React, { useState } from 'react'
import { Checkbox } from './ui/checkbox';
import { GoDotFill } from 'react-icons/go';
import { motion } from 'framer-motion';


interface FilterProps {
    data: CarTypes[];
    setData?: React.Dispatch<React.SetStateAction<CarTypes[]>>;
}
export const FilterCars = ({ data, setData }: FilterProps) => {

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
        
        className='hidden lg:flex sticky top-[4.5rem] col-span-1 border rounded-lg bg-card p-3 h-auto flex-col w-full gap-4'>

            <h2 className='text-center font-bold bg-background p-1 rounded-md'>Filitrer les voitures</h2>
            {/* Disponibilité now */}
            <form className="space-y-6">
                <div className="space-y-2">
                    <label htmlFor="marque" className='font-medium text-base'>Disponibilités :</label>
                    
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

            </form>
            {/* Marque */}
            <form className="space-y-6">
                <div className="space-y-2">
                    <label htmlFor="marque" className='font-medium text-base'>Marques :</label>
                    {
                        data.map((item, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    {item.brand}
                                </label>
                            </div>
                        ))
                    }
                </div>

            </form>

            {/* Prix */}
            <form className="space-y-6">
                <div className="space-y-2">
                    <label htmlFor="marque" className='font-medium text-base'>Prix / jour :</label>
                    {
                        prixData.map((item, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    {item.label}
                                </label>
                            </div>
                        ))
                    }
                </div>

            </form>
        </motion.div>
    )
}
