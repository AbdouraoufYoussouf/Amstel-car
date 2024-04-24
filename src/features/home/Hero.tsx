"use client"

import React, { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"
import { IoCall } from "react-icons/io5";
import { societyData } from "@/src/constantes/societyData";



export const Hero = () => {

  useEffect(() => {
    AOS.refresh();
  });

  const scrollToAnchor = (anchorId: string) => {
    const anchorElement = document.getElementById(anchorId)
    if (anchorElement) {
      anchorElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className=" dark:text-white duration-300 mt-[3rem] pt-[4rem] md:mt-0">
      <div className="px-3 md:container  flex items-center justify-center min-h-[450px]  self-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center items-center gap-12 md:gap-4">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-1 md:order-2  max-w-full max-h-full"

          >
            <Image width={500} height={400}
              layout="responsive"
              // sizes="(max-width: 600px) 40vw, (max-width: 1200px) 50vw, 33vw"
              src={"/assets/rolswhit.png"}
              alt="ffffff"
              className="-z-10 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)] w-full"
            />
          </div>
          <div className="md:ml-5 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-5 order-2 md:order-1 w-full ">
            <h1
              data-aos="fade-up"
              data-aos-delay="400"
            className=" text-3xl leading-7 sm:text-[2rem] md:text-[2.3rem] lg:text-[2.7rem] font-extrabold text-gray-900 dark:text-gray-200 sm:leading-[2.8rem]"
            >
              <strong className="text-red-600">Louez</strong> votre voiture préférée en quelques étapes <strong className="text-red-600">Facile</strong>.
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 3, ease: "easeOut" }}
              className="w-full  text-sm sm:w-[90%]">
              Dites adieu aux longues files d&apos;attente et aux démarches administratives fastidieuses ! Avec Amstel car, vous pouvez louer la voiture de vos rêves en quelques clics seulement.
            </motion.p>
            <motion.div
              className="flex flex-col items-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 90 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 3, ease: "easeOut" }}>

              <Button 
                onClick={() => scrollToAnchor('parc')}
                className=" transition duration-400 bg-red-600 text-white hover:bg-red-900  "
              >
                Résever dès maitenant
              </Button> plus d&apos;infos
              <Button 
                onClick={() => scrollToAnchor('parc')}
                className=" transition duration-400 bg-blue-500 text-white hover:bg-blue-900  "
              >
               <IoCall size='20' /> {societyData.phone}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

    </div>
  );
};

