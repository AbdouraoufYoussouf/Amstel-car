"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { carsData } from '@/src/constantes/CarsData'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaAddressCard, FaCcMastercard, FaHeart, FaIdCardAlt, FaShareAlt, FaTachometerAlt } from 'react-icons/fa';
import { GiCarDoor, GiRollingSuitcase, GiSteeringWheel } from 'react-icons/gi';
import { IoCarSportOutline, IoSpeedometer } from 'react-icons/io5';
import { CgFileDocument } from "react-icons/cg";
import { LuFuel } from 'react-icons/lu';
import { SiGodotengine } from "react-icons/si";
import { MdAirlineSeatReclineNormal, MdLocalGasStation } from 'react-icons/md';
import { GoDotFill } from 'react-icons/go';
import { MyCalandarPicker } from '@/components/MyCalandarPicker';
import { formatDateTime } from '@/lib/utils';
import { ReservationForm } from '@/components/detailsCar/ReservationForm';
import { Extras } from '@/components/detailsCar/Extras';
import { Button } from '@/components/ui/button';
import Head from 'next/head';

export default function Page({ params }: { params: { slug: string } }) {
    const [index, setIndex] = useState(0);
    const car = carsData.find((car) => car.slug === params.slug)!; //! es un assertivo que

    const initialDays: Date[] = [];
    const [days, setDays] = React.useState<Date[]>(initialDays);

    const formattedDate = formatDateTime(days[0]);
    // console.log(formattedDate); // Output: 16 avril 2024 00:00
    // console.log('days:', days[0])
    //c'est pour que si le car change on reinitialise l'index à 0
    useEffect(() => {
        if (index > 0) {
            setIndex(0);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.slug]);
    return (
        <>
      <Head >
        <meta  />
      </Head>
        <section className=' mt-14 w-full space-y-9 sm:container p-4'>
            <div className='border shadow w-full py-2 px-3 rounded-md flex justify-between'>
                <div className=''>
                    <h1 className='text-lg sm:text-2xl font-bold'>{car.brand} , {car.model}</h1>
                    <p className=" text-md sm:text-xl font-semibold text-red-500">{car.price} Dh/jour </p>
                </div>
                <div className='flex items-center justify-center gap-x-3'>
                    <Button variant="outline" className='px-2'><FaHeart size={20} /></Button>
                    <Button variant="outline" className='px-2'><FaShareAlt size={20} /></Button>
                </div>
            </div>
            {/* Details voiture and extras*/}
            <div className=' grid grid-cols-1 lg:grid-cols-2 gap-4 items-start'>
                <div className='w-full  space-y-8'>

                    {/* slider images */}
                    <div className='space-y-4' >
                        <div className='  flex flex-col gap-2 justify-between  w-full '>
                            <div className=" h-auto w-auto flex justify-center  gap-4 rounded-lg ">
                                {car.images?.length > 0 &&
                                    <Image width={350} height={350} src={car.images[index]} alt='image' 
                                    className="rounded-lg" />
                                }
                            </div>

                            <div className="flex justify-center gap-1 overflow-x-auto scrol p-1">
                                {car.images?.map((img, i) => (
                                    <div key={i} className='w-auto h-auto'>
                                        <Image
                                            width={100} height={100}
                                            alt='image'
                                            src={img}
                                            className={`p-1 h-full cursor-pointer border rounded-lg ${i === index ? "bg-red-400" : ""}`}
                                            onMouseEnter={() => setIndex(i)}
                                        />
                                    </div>
                                ))}
                            </div>

                        </div>

                        {/* details of the car */}
                        <div className=''>
                            <Tabs defaultValue="specification" className="w-full border shadow p-4 rounded-md">
                                <TabsList className='w-full p-2 h-[50px] flex justify-between'>
                                    <TabsTrigger className='flex-1 p-2' value="specification">Spécifications</TabsTrigger>
                                    <TabsTrigger className='flex-1 p-2' value="features">Fonctionnalités</TabsTrigger>
                                </TabsList>
                                <TabsContent value="specification" className='flex gap-6 flex-col pt-2'>
                                    <p className="text-sm">{car.description}</p>

                                    <div className='flex flex-wrap gap-2'>
                                        <div className='border shadow flex flex-col flex-grow bg-card p-2 rounded-md  items-center gap-1' >
                                            <span className=''>Moteur</span>
                                            <div className='flex gap-1'>
                                                <SiGodotengine className='text-red-600' size={20} />
                                                <span className='text-center text-sm'>{car.moteur}</span>
                                            </div>
                                        </div>
                                        <div className='border shadow flex flex-col flex-grow bg-card p-2 rounded-md  items-center gap-1' >
                                            <span className=''>Accéleration</span>
                                            <div className='flex gap-1'>
                                                <IoSpeedometer className='text-red-600' size={20} />
                                                <span className='text-center text-sm'>{car.acceleration}</span>
                                            </div>
                                        </div>
                                        <div className='border shadow flex flex-col flex-grow bg-card p-2 rounded-md  items-center gap-1' >
                                            <span className=''>Consommation</span>
                                            <div className='flex gap-1'>
                                                <MdLocalGasStation className='text-red-600' size={20} />
                                                <span className='text-center text-sm'>{car.consommationCarburant}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex flex-wrap gap-4 items-center justify-center'>
                                        <div className='flex items-center justify-center  flex-col'>
                                            <GiSteeringWheel size={22} />
                                            <span className='text-[12px] text-ellipsis text-center w-full '>{car.navigation}</span>
                                        </div>
                                        <div className='flex items-center flex-col'>
                                            <MdAirlineSeatReclineNormal size={22} />
                                            <span className='text-[12px] text-ellipsis text-center '>{car.seat} places</span>
                                        </div>
                                        <div className='flex items-center flex-col'>
                                            <GiRollingSuitcase size={22} />
                                            <span className='text-[12px] text-ellipsis text-center '>{car.bag} valises</span>
                                        </div>
                                        <div className='flex items-center flex-col'>
                                            <LuFuel size={22} />
                                            <span className='text-[12px] text-ellipsis text-center '>{car.fuelType}</span>
                                        </div>
                                        <div className='flex items-center flex-col'>
                                            <GiCarDoor size={22} />
                                            <span className='text-[12px] text-ellipsis text-center '>{car.doors} portes</span>
                                        </div>
                                        <div className='flex items-center flex-col'>
                                            <FaTachometerAlt size={22} />
                                            <span className='text-[12px] text-ellipsis text-center '>{car.km} Km</span>
                                        </div>

                                    </div>

                                </TabsContent>

                                <TabsContent value="features">
                                    <div className='flex flex-wrap gap-2'>
                                        {
                                            car.features.map((feature, i) => (
                                                <div key={i} className='border shadow flex-grow bg-card p-2 rounded-md flex items-center gap-1' >
                                                    <IoCarSportOutline className='text-blue-600' size={20} />
                                                    <span className='text-center text-sm'>{feature}</span>
                                                </div>
                                            ))
                                        }

                                    </div >
                                </TabsContent>
                            </Tabs>
                        </div>

                        {/* Conditions et documents */}
                        <div className=' border shadow rounded-md  flex flex-col gap-3 p-2'>
                            <h2 className='font-semiBold text-lg text-center'>Conditions & documents</h2>
                            <div className='flex flex-wrap  justify-between gap-5'>
                                <ul className='space-y-1'>
                                    <li className='flex items-center '>
                                        <GoDotFill size={20} />
                                        <span className='text-sm'>Age minimum : 21 ans</span>
                                    </li>
                                    <li className='flex items-center '>
                                        <GoDotFill size={20} />
                                        <span className='text-sm'>Permis de conduire : valide</span>
                                    </li>
                                    <li className='flex items-center '>
                                        <GoDotFill size={20} />
                                        <span className='text-sm'>Carte de crédit : optionnel</span>
                                    </li>
                                    <li className='flex items-center '>
                                        <GoDotFill size={20} />
                                        <span className='text-sm'>Assurance : oui</span>
                                    </li>
                                </ul>

                                <ul className='space-y-1'>
                                    <li className='flex items-center gap-1.5'>
                                        <FaAddressCard size={16} />
                                        <span className='text-sm'>Permis de conduire </span>
                                    </li>
                                    <li className='flex items-center gap-1.5'>
                                        <FaIdCardAlt size={16} />
                                        <span className='text-sm'>Passport ou carte/identité/séjour </span>
                                    </li>
                                    <li className='flex items-center gap-1.5'>
                                        <FaCcMastercard size={16} />
                                        <span className='text-sm'>Carte de crédit </span>
                                    </li>
                                    <li className='flex items-center gap-1.5'>
                                        <CgFileDocument size={16} />
                                        <span className='text-sm'>Confirmation de réservation </span>
                                    </li>
                                </ul>


                            </div>
                        </div>
                    </div>
                    {/* Extras */}
                    <Extras />

                </div>
                {/* infos reservations */}
                <div className=' rounded-lg w-full flex flex-col gap-5'>

                    <div className=' flex flex-col gap-4 border w-full rounded-md sm:border-none shadow-none p-2 lg:pt-0 self-center justify-center items-center'>
                        <h3 className="text-center font-semibold text-lg my-2 lg:mt-0">Disponibilités de la voiture.</h3>
                        <MyCalandarPicker days={days} setDays={setDays} />
                    </div>

                    <ReservationForm />
                </div>
            </div>
        </section>
        </>
    )
}