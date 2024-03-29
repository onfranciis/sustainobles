import { IProjectCardProp } from "@/types";
import ProjectCard from "./ProjectCard";
import { poppins } from "./Two";

const Five = () => {
  return (
    <div className="bg-tertiary pb-[22px] px-16 -md:px-12 -sm:px-4 -xs:px-3">
      <p
        className={`${poppins.className} text-[64px] -lg:text-[52px] -md:text-[40px] -sm:text-4xl font-bold text-[#1E1E1E] mb-6`}
      >
        Ongoing Projects
      </p>
      <div className="flex overflow-x-auto gap-10 -md:gap-3 pb-2 sm:px-7 md:px-[50px]">
        {DATA.map((card) => (
          <ProjectCard Data={card} key={card.title} />
        ))}
      </div>
    </div>
  );
};

export default Five;

const DATA: IProjectCardProp["Data"][] = [
  {
    title: "Collection of Bottles",
    body: "Used bottles to pay for children school fees",
    image: "/projects-card/image7.png",
    url: "/projects/ongoing#collection-of-bottles",
    type: "One",
  },
  {
    title: "Charity Football Tournament",
    body: "Engaged Celebrities and Started a club",
    image: "/projects-card/image8.png",
    url: "/projects/ongoing#charity-football-tournament",
    type: "One",
  },
  {
    title: "Book Reading Club",
    body: "Enrolled 70 Students From 2 Schools",
    image: "/projects-card/image9.png",
    url: "/projects/ongoing#book-reading-club",
    type: "One",
  },
  {
    title: "Monthly Essay Competition",
    body: "Held 2 competitions",
    image: "/projects-card/image10.png",
    url: "/projects/ongoing#monthly-essay-competition",
    type: "One",
  },
];
