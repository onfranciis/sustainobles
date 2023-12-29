import { poppins } from "./Two";

const ProjectCard = () => {
  return (
    <div
      className={`${poppins.className} min-w-[896px] h-[536px] flex flex-col justify-between bg-[url('/landing-three.png')] bg-no-repeat bg-center bg-cover p-8 rounded-[20px]`}
    >
      <p className="text-[64px] font-bold max-w-[491px] leading-[66px]">
        Book Reading Club
      </p>

      <div className="flex justify-between items-center">
        <p className="text-3xl font-bold max-w-[163px]">N500,000 Raised</p>

        <button className="btn bg-secondary text-primary text-base font-semibold px-14 rounded-[20px]">
          See more
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
