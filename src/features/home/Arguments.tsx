"use client"

import React, { useEffect, useRef } from 'react';
import { IoCarSportOutline } from "react-icons/io5";
import { MdOutlinePhonelink, MdAssuredWorkload, MdPriceChange } from "react-icons/md";
import { motion, useAnimation, useInView } from "framer-motion"
import { FaLocationArrow } from 'react-icons/fa';
import { FaLocationPinLock } from 'react-icons/fa6';
import { CalendarCheck } from 'lucide-react';
import { GiCarKey } from 'react-icons/gi';

interface ArgumentItemProps {
  icon: JSX.Element;
  title: string;
  description: string;
  index: number
}

const ArgumentItem: React.FC<ArgumentItemProps> = ({ index, icon, title, description }) => {
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
      animate={mainControls}
      transition={{ duration: 0.5 * index, delay: 0.05 }}
      className="flex flex-col items-center gap-3 p-5 bg-gray-100 dark:bg-[#1B1B1F] rounded-3xl shadow">
      <span>{icon}</span>
      <h2 className="text-lg text-center leading-6 font-bold text-dark-grey-900">{title}</h2>
      <p className="text-base font-light leading-5 text-dark-grey-600 text-center">{description}</p>
    </motion.div>
  );
};

export const Arguments = () => {
  const argumentsData = [
    { icon: <IoCarSportOutline size={38} className='text-red-500' />, title: 'Choisissez votre véhicule', description: 'Parcourez notre large sélection de voitures, des citadines aux SUV en passant par les berlines et les voitures de luxe.' },
    { icon: <CalendarCheck size={38} className='text-red-500' />, title: 'Réservez en ligne', description: 'Sélectionnez vos dates de location, votre lieu de prise en charge et de restitution, et confirmez votre réservation en quelques minutes.' },
    { icon: <GiCarKey size={38} className='text-red-500' />, title: 'Récupérez votre voiture', description: "Présentez-vous à l'agence avec votre pièce d'identité et votre carte de crédit, et partez au volant de votre voiture !" },
    // { icon: <MdAssuredWorkload size={38} className='text-red-500' />, title: 'Assurance tous risques', description: "Présentez-vous à l'agence avec votre pièce d'identité et votre réservation, et partez au volant de votre voiture !" }
  ];

  return (
    <div className="flex flex-col items-center sm:mt-4 mx-auto ">
      <h1 className="bg-slate-200 dark:bg-slate-800 w-auto px-3 py-1 text-sm font-semibold rounded-lg text-center text-cn bg-background bg-opacity-60 hover:bg-opacity-40">Voici comment ça marche</h1>
      <div className="w-full mt-14">
        <div className="px-3 md:container flex flex-col items-center gap-16 mx-auto">
          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {argumentsData.map((argument, index) => (
              <ArgumentItem index={index} key={index} {...argument} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
