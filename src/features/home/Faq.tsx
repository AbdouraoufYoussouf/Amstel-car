"use client"

import React, { useEffect, useRef } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqData } from '@/src/constantes/FaqData'
import { useAnimation, useInView, motion } from 'framer-motion';


export const Faq = () => {
  const refCard = useRef(null);
  const isInViewCard = useInView(refCard, { once: true });
  const refText = useRef(null);
  const isInViewText = useInView(refText, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInViewCard || isInViewText) {
      mainControls.start("visible");
      slideControls.start("visible")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInViewCard, isInViewText])
  return (
    <section className='sm:container p-4'>
      <motion.div
        ref={refText}
        variants={{
          hidden: { opacity: 0, y: -105 },
          visible: { opacity: 1, y: 0 }
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-12 space-y-5 md:mb-16 text-center">
          <div className="bg-slate-200 dark:bg-slate-800 inline-block px-3 py-1 text-sm font-semibold rounded-lg text-center text-cn bg-background bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
            Questions des autres
          </div>
          <h1 className="mb-5 text-xl font-semibold text-center md:text-2xl text-gray-800 dark:text-gray-200">
            Les questions  posées par nos clients sont notre priorité !
          </h1>
        </div>
      </motion.div>
      <div className=' grid grid-cols-1 gap-6 lg:grid-cols-2' >
        {
          faqData.map((item, index) => (
            <motion.div
              ref={refCard}
              variants={{
                hidden: { opacity: 0, y: 105 },
                visible: { opacity: 1, y: 0 }
              }}
              initial='hidden'
              animate={slideControls}
              transition={
                { duration: .6, ease: "easeOut" }
              }
              key={index}
            >

              <Accordion
                type="single" collapsible>
                <AccordionItem value={item.question} >
                  <AccordionTrigger className='text-md lg:text-lg  text-left'>{item.question}</AccordionTrigger>
                  {
                    item.reponses.map((res, indexi) => (
                      <AccordionContent className='text-gray-800 text-left dark:text-gray-300' key={indexi}>
                        {res}
                      </AccordionContent>
                    ))
                  }
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))
        }

      </div>
    </section>
  )
}
