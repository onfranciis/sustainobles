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
      className={`flex justify-center gap-8 text-blackText py-2 px-[100px] items-center -lg:flex-col-reverse ${
        Two && "flex-row-reverse"
      }`}
    >
      <div className="flex flex-col gap-6 w-1/2 -lg:w-full">
        <h5 className="text-5xl font-bold">{title}</h5>
        <p className="text-2xl">{body}</p>
      </div>

      <div
        style={{ backgroundImage: `url(${image})` }}
        className="min-h-[598px] w-1/2 -lg:w-full bg-no-repeat bg-center bg-cover flex justify-center items-end rounded-xl p-8"
      >
        <Link href={url} className="btn bg-secondary text-primary h-fit">
          View Gallery
        </Link>
      </div>
    </div>
  );
};

export default ProjectsCard;
