import { Abaout } from "@/src/features/home/Abaout";
import { Arguments } from "@/src/features/home/Arguments";
import { BrandAutoPlay } from "@/src/features/home/BrandAutoPlay";
import { Faq } from "@/src/features/home/Faq";
import { Hero } from "@/src/features/home/Hero";
import { ParcAuto } from "@/src/features/home/ParcAuto";
import { Services } from "@/src/features/home/Services";
import { Testimonials } from "@/src/features/home/Testimonials";

export default function Home() {
  return (
    <main className="mt-8 flex flex-col gap-32" >
      <Hero />
      <Services />
      <Abaout />
      <ParcAuto />
      <Arguments />
      <Testimonials />
      <BrandAutoPlay />
      <Faq />
    </main>
  );
}
