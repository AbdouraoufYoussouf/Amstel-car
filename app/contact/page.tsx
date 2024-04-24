"use client"

import { buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { societyData } from '@/src/constantes/societyData';
import React from 'react'
import { FaBlenderPhone } from 'react-icons/fa';
import { HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { MdSupportAgent } from 'react-icons/md';


const Contact = () => {
  const contactData = [
    {
      icon: <MdSupportAgent size={26} />
      ,
      title: 'Support Client',
      email: societyData.email,
      phone: societyData.phone
    },
    {
      icon: <HiOutlineLocationMarker size={26} />,
      title: 'Address',
      address: societyData.adress
    },
    {
      icon: <FaBlenderPhone size={26} />,
      title: 'Ligne fixe',
      phone: societyData.fixe
    },
    {
      icon: <HiOutlinePhone size={26} />,
      title: 'Portable',
      phone: societyData.phone
    }
  ];
  return (

    <section className="sm:container p-4 mt-[8rem] flex flex-col">

      <div >
        <div className="mb-[8rem] space-y-5  text-center">
          <div className="bg-slate-200 dark:bg-slate-800 inline-block px-3 py-1 text-sm font-semibold rounded-lg text-center text-cn bg-background bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
            Vous avez des questions?
          </div>
          <h1 className="text-2xl font-semibold text-center md:text-3xl">
            Vous nous contactez par ici.
          </h1>
        </div>
        <p className="text-xl  leading-5 text-center md:text-2xl">
          Voici ce que les autres ont à dire de nous.
        </p>
      </div>

      <div  >
        <div
          className="block rounded-lg  p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border">
          <div className="grid grid-cols-1  lg:grid-cols-2">
            <div className="mb-12 col-span-2 md:col-span-1 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0  lg:px-6">
              <form className='flex flex-col gap-7'>
                <div className="grid w-full min-w-sm items-center gap-1.5">
                  <Label >Name</Label>
                  <Input type="text" id="name" placeholder="Name" />
                </div>
                <div className="grid w-full min-w-sm items-center gap-1.5">
                  <Label >Email Adress</Label>
                  <Input type="email" id="email" placeholder="Email" />
                </div>

                <div className="grid w-full min-w-sm items-center gap-1.5">
                  <Label >Message</Label>
                  <Textarea rows={4} id="message" placeholder="Message" />
                </div>

                <button type="button"
                  className="mb-6 w-full rounded bg-sky-500 text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal   lg:mb-0">
                  Envoyer
                </button>
              </form>
            </div>

            <div className="w-full shrink-0 grow-0 basis-auto mt-4">
              <div className="flex flex-col items-center">
                {
                  contactData.map((data, index) => (
                    <div key={index} className="mb-12 w-full  grow-0 basis-auto  md:px-3 lg:w-full lg:px-6 ">
                      <div className="flex items-start">
                        <div className="shrink-0">
                          <div className='border rounded-md p-4'>
                            {data.icon}
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className="font-bold">{data.title}</p>
                          {data.email && <p className="text-sm text-neutral-500">{data.email}</p>}
                          {data.phone && <p className="text-sm text-neutral-500">{data.phone}</p>}
                          {data.address && <p className="text-sm text-neutral-500">{data.address}</p>}
                        </div>
                      </div>
                    </div>
                  ))
                }

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact