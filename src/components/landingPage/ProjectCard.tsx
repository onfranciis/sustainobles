import { poppins } from "./Two";

const ProjectCard = () => {
  return (
    <div
      className={`${poppins.className} min-w-[750px] -md:min-w-[600px] -sm:min-w-[320px] h-[450px] -md:h-[360px] -sm:h-[200px] flex flex-col justify-between bg-[url('/landing-three.png')] bg-no-repeat bg-center bg-cover bg-fixed p-8 -sm:p-4 rounded-[20px] -sm:rounded-[10px]`}
    >
      <p className="text-[48px] -md:text-5xl -sm:text-2xl font-bold max-w-[491px] md:leading-[66px]">
        Book Reading Club
      </p>

      <div className="flex justify-between items-center">
        <p className="text-2xl -sm:text-base font-bold max-w-[163px]">
          N500,000 Raised
        </p>

        <button className="btn bg-secondary text-primary text-base -sm:text-[10px] font-semibold px-[31.5px] -md:px-7 -sm:px-4 -sm:py-1 rounded-[20px]">
          See more
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
