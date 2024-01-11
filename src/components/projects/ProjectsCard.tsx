import { IProjectCardProp } from "@/types";
import { poppins } from "../landingPage/Two";
import Link from "next/link";

const ProjectsCard = ({
  Data: { title, body, image, type, url },
}: IProjectCardProp) => {
  const Two = type === "Two";

  return (
    <div
      style={{
        fontFamily: poppins.style.fontFamily,
      }}
      className={`flex justify-center gap-8 -sm:gap-3 -sm:bg-primary rounded-lg text-blackText -sm:text-white py-2 -sm:pt-0 -sm:pb-4 px-[100px] -md:px-16 -sm:px-0 mx-5 items-center -lg:flex-col-reverse ${
        Two && "flex-row-reverse"
      }`}
    >
      <div className="flex flex-col gap-6 -sm:gap-2 -sm:px-3 w-1/2 -lg:w-full">
        <h5 className="text-5xl -md:text-4xl -sm:text-[26px] font-bold">{title}</h5>
        <p className="text-2xl -md:text-xl -sm:text-base">{body}</p>
      </div>

      <div
        style={{ backgroundImage: `url(${image})` }}
        className="min-h-[250px] sm:min-h-[598px] w-1/2 -lg:w-full bg-no-repeat bg-center bg-cover flex justify-center items-end rounded-xl -sm:rounded-b-none p-8"
      >
        <Link href={url} className="btn bg-secondary text-primary h-fit">
          View Gallery
        </Link>
      </div>
    </div>
  );
};

export default ProjectsCard;
