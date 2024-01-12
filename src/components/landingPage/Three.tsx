import { IProjectCardProp } from "@/types";
import ProjectCard from "./ProjectCard";
import { poppins } from "./Two";

const Three = () => {
  return (
    <div className="bg-tertiary pb-[22px] px-16 -md:px-12 -sm:px-8 -xs:px-5">
      <p
        className={`${poppins.className} text-[64px] -lg:text-[52px] -md:text-[40px] -sm:text-4xl font-bold text-[#1E1E1E] mb-6`}
      >
        Completed Projects
      </p>

      <div className="flex overflow-x-auto gap-10 -md:gap-3 pb-2 sm:px-7 md:px-[50px]">
        {DATA.map((card) => (
          <ProjectCard Data={card} key={card.title} />
        ))}
      </div>
    </div>
  );
};

export default Three;

const DATA: IProjectCardProp["Data"][] = [
  {
    title: "Community Clean Up",
    body: "Cleaned 5 Streets",
    image: "/projects-card/image1.png",
    url: "/projects/completed",
    type: "One",
  },
  {
    title: "Borehole in Makoko",
    body: "A Borehole, 2 Canoes and 1 Generator Donated",
    image: "/projects-card/image2.png",
    url: "/projects/completed",
    type: "Two",
  },
  {
    title: "Pad a Girl Child",
    body: "300 Sanitary Pads Distributed",
    image: "/projects-card/image3.png",
    url: "/projects/completed",
    type: "One",
  },
  {
    title: "Back To School Project",
    body: "N392,800 was Raised to pay 76 School fees",
    image: "/projects-card/image4.png",
    url: "/projects/completed",
    type: "One",
  },
  {
    title: "Summer Coaching",
    body: "Coached over 20 Students",
    image: "/projects-card/image5.png",
    url: "/projects/completed",
    type: "One",
  },
  {
    title: "Orphanage Outreach",
    body: "Donated Bags of Rice and Indomie",
    image: "/projects-card/image6.png",
    url: "/projects/completed",
    type: "One",
  },
];
