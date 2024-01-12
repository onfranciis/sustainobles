import { IProjectCardProp } from "@/types";
import { poppins } from "./Two";
import Link from "next/link";

const ProjectCard = ({
  Data: { title, body, image, url },
}: IProjectCardProp) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={`${poppins.className} min-w-[750px] -md:min-w-[600px] -sm:min-w-[320px] h-[450px] -md:h-[360px] -sm:h-[200px] flex flex-col justify-between bg-[url('/landing-three.png')] bg-no-repeat bg-center bg-cover 
      p-8 -sm:p-4 rounded-[20px] -sm:rounded-[10px] overflow-hidden`}
    >
      <p
        style={{ textShadow: "1px 1px 2px black" }}
        className="text-[48px] -md:text-5xl -sm:text-2xl font-bold max-w-[491px] md:leading-[66px]"
      >
        {title}
      </p>

      <div className="flex justify-between items-center gap-2">
        <p className="text-2xl font-bold w-full max-w-[320px] -sm:text-sm  ">
          {body}
        </p>

        <Link
          href={url}
          className="btn bg-secondary text-primary text-base -sm:text-[10px] font-semibold px-[31.5px] -md:px-7 -sm:px-4 -sm:py-1 rounded-[20px] whitespace-nowrap"
        >
          See more
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
