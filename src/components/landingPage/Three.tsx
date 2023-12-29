import ProjectCard from "./ProjectCard";
import { poppins } from "./Two";

const Three = () => {
  return (
    <div className="bg-white pb-[22px]">
      <p
        className={`${poppins.className} px-[100px] text-[64px] font-bold text-[#1E1E1E] mb-6`}
      >
        Completed Projects
      </p>
      <div className="flex overflow-x-auto gap-10 pb-2 px-[100px] ">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Three;
