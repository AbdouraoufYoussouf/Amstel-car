import { BrandsData } from '@/src/constantes/BrandsData';
import Image from 'next/image';
import React from 'react'
import Marquee from "react-fast-marquee";

export const BrandAutoPlay = () => {

  return (
 
      <Marquee className='mb-8' 
      speed={100} gradient={false}
      >
        {
          BrandsData.map((brand, index) => (
            <Image className='h-auto w-auto mx-2 sm:mx-12 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]' key={index} src={brand.image} alt={brand.brand} width={100} height={100} />
          ))
        }
      </Marquee>
  )
}
