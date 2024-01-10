import { IProjectCardProp } from "@/types";
import ProjectCard from "./ProjectCard";
import { poppins } from "./Two";

const Three = () => {
  return (
    <div className="bg-white pb-[22px] px-16 -md:px-12 -sm:px-8 -xs:px-5">
      <p
        className={`${poppins.className} text-[64px] -lg:text-[52px] -md:text-[40px] -sm:text-4xl font-bold text-[#1E1E1E] mb-6`}
      >
        Completed Projects
      </p>
      
      <div className="flex overflow-x-auto gap-10 pb-2 sm:px-7 md:px-[50px]">
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
    body: "We decided to clean up the area and give back to the community, we had 160 volunteers and we shared ourselves into different groups. We gathered 67 disposable bags and 14 bagco sack, areas covered: Alhaji Hassana, Nurudeen, Coker, Savage and Orile. Areas covered: Alhaji Hassana, Nurudeen, Coker, Savage and Orile. Duration of the environmental exercise: 14hours 15minuites. We cleared the gutters and cleaned the streets during our exercise.",
    image: "/projects/completed-projects6.png",
    url: "/projects/completed",
    type: "One",
  },
  {
    title: "Borehole in Makoko",
    body: "We decided to build a borehole in Makoko for them to have clean and drinkable water as it is essential for our health. We also bought Two Canoes and both are functional and is being used to carry the students from Makoko down to areas like third mainland bridge and neighboring communities. And bring them back the next day. Sort of like a school bus. We also bought a generator for them to use to pump water when there is no light.",
    image: "/projects/completed-projects5.png",
    url: "/projects/completed",
    type: "Two",
  },
  {
    title: "Pad a Girl Child",
    body: "Sustainobles' \"Pad a Girl Child\" project aligns with SDG 3, emphasizing good health and well-being. Addressing menstrual hygiene challenges, the initiative combats school absenteeism among girls. Collaboration with MBGN '22 ensured the distribution of over 300 sanitary pads, promoting inclusivity and gender equality in line with SDG 11. Seminars for children aged 10-15 emphasized the importance of hard work, and over 20 food boxes were distributed, contributing to overall community well-being. Together, we're advancing education, gender equality, and inclusive urban development.",
    image: "/projects/completed-projects4.png",
    url: "/projects/completed",
    type: "One",
  },
];
