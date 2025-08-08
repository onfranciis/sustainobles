import { IProjectCardProp } from "@/types";
import Button from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
const ProjectCard = ({
  title,
  body,
  image,
  url,
}: IProjectCardProp) => {
  const router = useRouter();
  
  return (
    <div className="relative w-[300px] md:w-[400px] h-[200px] md:h-[250px] rounded-lg overflow-hidden">
      <Image
        fill
        src={image}
        alt=""
        className="object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full px-3.5 py-2.5 flex flex-col justify-between text-white bg-black bg-opacity-45">
        <p className="text-xl md:text-2xl">{title}</p>
        <div className="flex justify-between items-center">
          <div className="text-sm md:text-lg font-light leading-tight">
            <p>4 Professional</p>
            <p>200 kids present</p>
          </div>
          <Button className="max-md:text-[13px] px-2.5 py-1" onClick={() => router.push(url)}>
            See more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
