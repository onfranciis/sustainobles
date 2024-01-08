import ProjectCard from "./ProjectCard";
import { poppins } from "./Two";

const Three = () => {
  return (
    <div className="bg-white pb-[22px] px-16 -md:px-12 -sm:px-8 -xs:px-5">
      <p
        className={`${poppins.className} text-[64px] -lg:text-[52px] -md:text-[40px] font-bold text-[#1E1E1E] mb-6`}
      >
        Completed Projects
      </p>
      <div className="flex overflow-x-auto gap-10 pb-2 px-[5px] -md:px-[50px]">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Three;
