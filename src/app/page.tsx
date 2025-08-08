"use client";

import DonateCard from "@/components/landingPage/donateCard/DonateCard";
import Image from "next/image";
import ProjectCard from "@/components/landingPage/ProjectCard";
import { DATA } from "@/lib/projects";

export default function Home() {
  return (
    <main className="min-h-screen font-normal pb-20">
      <div className="w-full bg-primary-gradient">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 flex max-md:flex-col m:items-center gap-9">
          <p className="text-[40px] lg:text-[56px] xl:text-[64px] font-bold max-sm:leading-tight leading-snug">Together with Sustainobles, Every Child Thrives</p>
          <div className="relative md:w-[55%] h-full flex-shrink-0 aspect-[694/400]"> 
            <Image
              className=""
              fill
              src={"/homepage-hero.png"}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="text-black max-w-[1440px] mx-auto px-4 md:px-6 lg:px-10 xl:px-20">
        <div className="mt-6">
          <h2 className="mb-2 md:mb-4 text-[28px] md:text-[32px] font-semibold text-center">Sustainoble’s work</h2>
          <p className="text-base sm:text-[20px] font-normal">At Sustainobles, we transform lives by funding education, providing school fees and stationery, and harnessing the power of football for holistic development. Our initiatives include recycling and book clubs, with proceeds going to support children in disadvantaged areas. We aim to empower children through sustainable actions, ensuring they have the resources and opportunities they need to thrive.</p>
        </div>
        <div className="mt-12 max-md:-mx-4 max-lg:-mx-6 max-xl:-mx-10 overflow-hidden">
          <h2 className="mb-2 md:mb-4 text-[28px] md:text-[32px] font-semibold text-center">Projects</h2>
          <div className="w-full max-md:px-4 max-lg:px-6 max-xl:px-10 grid gap-3 grid-flow-col grid-rows-2 overflow-x-scroll">
            {DATA.map((item, index) => {
              return (
                <ProjectCard key={index} title={item.title} body={item.body} image={item.image} url={item.url} />
              )}
            )}
          </div>
        </div>
        <div className="mt-12">
          <h2 className="mb-2 md:mb-4 text-[28px] md:text-[32px] font-semibold text-center">Donate</h2>
          <div className="flex max-lg:flex-col-reverse">
            <div className="relative lg:w-1/2 h-full aspect-[621/480] flex-shrink-0">
              <Image
                fill
                src={"/homepage-grid.png"}
                alt=""
              />
            </div>
            <div className="w-full p-4 md:px-[60px] md:py-10 bg-primary-gradient">
              <DonateCard />
            </div>
          </div>
        </div>
        <div className="mt-12 overflow-hidden">
          <h2 className="mb-4 text-[32px] font-semibold text-center">Projects/Events done to raise money</h2>
          <div className="w-full grid gap-3 grid-flow-col grid-rows-2 overflow-x-scroll">
            {DATA.map((item, index) => {
              return (
                <ProjectCard key={index} title={item.title} body={item.body} image={item.image} url={item.url} />
              )}
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
