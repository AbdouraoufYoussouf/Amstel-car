"use client"

import { FilterCars } from '@/components/FilterCars'
import { MiniCarsCard } from '@/components/MiniCarsCard'
import { carsData } from '@/src/constantes/CarsData'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import { SmFilterCars } from '@/components/SmFilterCars'


const ParkingAuto = () => {


  const marques = Array.from(new Set(
    carsData.map(car => car.brand)
  ));


  return (
    <section className='  mt-14 w-full space-y-9'>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-auto h-auto flex justify-center bg-transparent shadow-[inset_-1px_-20px_12px_0px_#00000024]  rounded-lg rounded-t-none">
        <Image src={'/assets/parc.png'} width={1000} height={300} alt='banierre' />
      </motion.div>
      <div className='sm:container p-4 space-y-14 w-full'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className='flex flex-col items-center justify-center '>
          <h1 className="md:w-[70%] text-center scroll-m-20 text-2xl leading-6 font-extrabold tracking-tight lg:text-5xl">
            Évadez-vous vers <span className='text-blue-700'>l&apos;aventure</span> au volant de votre nouvelle <span className='text-blue-700'>voiture</span>.          </h1>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-5 lg:gap-4 items-start space-y-4'>
          <SmFilterCars data={carsData} />
          <FilterCars data={carsData} />
          <div className=" grid col-span-4 justify-center grid-cols-1 gap-4  sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 self-center">
            {
              carsData.map((car, index) =>
                <MiniCarsCard key={index} index={index} car={car} />
              )
            }
          </div>
        </div>
        {/* <Avantages/> */}
      </div>
    </section>
  )
}

export default ParkingAuto

const Avantages = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-700">Avantages</h2>
      <ul className="mt-4 space-y-4 text-base text-gray-500">
        <li>Parking gratuit pour les véhicules enregistrés.</li>
        <li>Le parking est accessible aux personnes à mobilité réduite.</li>
        <li>Un système de vérification des placards et des places de parkings pour vous assurer que votre voiture est bien </li>
      </ul>
    </div>
  )
}