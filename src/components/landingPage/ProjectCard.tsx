import { poppins } from "./Two";

const ProjectCard = () => {
  return (
    <div
      className={`${poppins.className} min-w-[750px] -md:min-w-[600px] h-[450px] -md:h-[360px] flex flex-col justify-between bg-[url('/landing-three.png')] bg-no-repeat bg-center bg-cover bg-fixed p-8 rounded-[20px]`}
    >
      <p className="text-[48px] -md:text-5xl font-bold max-w-[491px] leading-[66px]">
        Book Reading Club
      </p>

      <div className="flex justify-between items-center">
        <p className="text-2xl -md:text-2xl font-bold max-w-[163px]">
          N500,000 Raised
        </p>

        <button className="btn bg-secondary text-primary text-base font-semibold px-[31.5px] -md:px-7 rounded-[20px]">
          See more
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
