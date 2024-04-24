"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { Checkbox } from '../ui/checkbox'

export const Extras = () => {
  const [isAddDriver, setIsAddDriver] = useState(false);
  const [siegeBebeCount, setSiegeBebeCount] = useState(0);
  const [rechausseurCount, setRechausseurCount] = useState(0);
  const [siegeVoitureCount, setSiegeVoitureCount] = useState(0);

  console.log(isAddDriver)
  return (
    <div className='sm:p-4 sm:border rounded-md'>
      <h2 className="text-xl text-center font-semibold text-gray-800 dark:text-gray-50">Extras</h2>
      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 sm:gap-2 lg:grid-cols-1 gap-y-2 gap-x-1">

        <li className='flex justify-between  gap-1 items-center border rounded-md p-1'>
          <div className=' col-span-3 flex items-center gap-1'>
            <div className=' w-auto h-auto col-span-2 '>
              <Image src="/assets/extras/conducteur.png" width={60} height={60} alt='avec chauffeur' />
            </div>
            <div className=' col-span-4 items-center '>
              <span className='font-normal text-sm text-gray-900 dark:text-white'>Avec Chauffeur</span><br />
              <p className='text-sm leading-2 text-gray-700 dark:text-gray-400'>coût d’environ 800dhs</p>
            </div>
          </div>
          <div className='flex col-span-1  items-center gap-1 justify-end'>
            <Checkbox checked={isAddDriver} onChange={()=>setIsAddDriver(!isAddDriver)} className='h-7 w-7 border mr-1' />
          </div>
        </li>

        <li className='grid grid-cols-4  gap-1 items-center border rounded-md p-1'>
          <div className=' col-span-3 flex items-center gap-1'>

            <div className=' w-auto h-auto'>
              <Image src="/assets/extras/siegebebe.png" width={50} height={50} alt='avec chauffeur' />
            </div>
            <div className=' '>
              <span className='font-normal text-sm  text-gray-900 dark:text-white'>Siège bébé 6 mois à 2 ans</span><br />
              <p className='text-sm leading-2 text-gray-700 dark:text-gray-400'>coût d’environ 200dhs</p>
            </div>
          </div>
          <div className='flex col-span-1  items-center gap-1 justify-end mr-1'>
            <Button variant={'outline'} className='px-2 border-primary' size={'sm'}><FaMinus /></Button>
           {siegeBebeCount}
            <Button variant={'outline'} className='px-2 border-primary' size={'sm'}><FaPlus /></Button>
          </div>
        </li>
       
        <li className='grid grid-cols-4  gap-1 items-center border rounded-md p-1'>
          <div className=' col-span-3 flex items-center gap-1'>

            <div className=' w-auto h-auto'>
              <Image src="/assets/extras/rechausseur.png" width={50} height={50} alt='avec chauffeur' />
            </div>
            <div className=' px-1'>
              <p className=' font-normal inline-block leading-4 text-sm  text-gray-900 dark:text-white'>Rehausseur enfant 3 à 10 ans</p><br />
              <p className='text-sm leading-2 text-gray-700 dark:text-gray-400'>coût d’environ 200dhs</p>
            </div>
          </div>
          <div className='flex col-span-1  items-center gap-1 justify-end mr-1'>
            <Button variant={'outline'} className='px-2 border-primary' size={'sm'}><FaMinus /></Button>
            {rechausseurCount}
            <Button variant={'outline'} className='px-2 border-primary' size={'sm'}><FaPlus /></Button>
          </div>
        </li>
       
        <li className='grid grid-cols-4  gap-1 items-center border rounded-md p-1'>
          <div className=' col-span-3 flex items-center gap-1'>

            <div className=' w-auto h-auto'>
              <Image src="/assets/extras/siegevoiture.png" width={50} height={50} alt='avec chauffeur' />
            </div>
            <div className=' px-1'>
              <p className=' font-normal inline-block leading-4 text-sm  text-gray-900 dark:text-white'>Siège de voiture</p><br />
              <p className='text-sm leading-2 text-gray-700 dark:text-gray-400'>coût d’environ 200dhs</p>
            </div>
          </div>
          <div className='flex col-span-1  items-center gap-1 justify-end mr-1'>
            <Button variant={'outline'} className='px-2 border-primary' size={'sm'}><FaMinus /></Button>
           {siegeVoitureCount}
            <Button variant={'outline'} className='px-2 border-primary' size={'sm'}><FaPlus /></Button>
          </div>
        </li>

      </div>
    </div>
  )
}
