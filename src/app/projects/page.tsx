'use client';

import { DATA } from "@/lib/projects";
import ProjectCard from "@/components/landingPage/ProjectCard";

export default function Projects() {
  return (
    <main className="min-h-screen max-w-[1440px] mx-auto pt-8 pb-16 px-4 md:px-6 lg:px-10 xl:px-20 text-[#1e1e1e] font-normal">
      <section className="mb-10 max-md:-mx-4 max-lg:-mx-6 max-xl:-mx-10 overflow-hidden">
        <h2 className="px-4 md:px-6 lg:px-10 mb-4 text-center text-[28px] md:text-[32px] font-semibold">Projects</h2>
        <div className="w-full max-md:px-4 max-lg:px-6 max-xl:px-10 grid gap-3 grid-flow-col grid-rows-2 overflow-x-scroll">
          {DATA.map((item, index) => {
            return (
              <ProjectCard key={index} title={item.title} body={item.body} image={item.image} url={item.url} />
            );
          })}
        </div>
      </section>
      <section className="max-md:-mx-4 max-lg:-mx-6 max-xl:-mx-10 overflow-hidden">
        <h2 className="px-4 md:px-6 lg:px-10 mb-4 text-center text-[28px] md:text-[32px] font-semibold">
          Projects/Events done to raise money
        </h2>
        <div className="w-full max-md:px-4 max-lg:px-6 max-xl:px-10 grid gap-3 grid-flow-col grid-rows-2 overflow-x-scroll">
          {DATA.map((item, index) => {
            return (
              <ProjectCard key={index} title={item.title} body={item.body} image={item.image} url={item.url} />
            );
          })}
        </div>
      </section>
    </main>
  );
}
