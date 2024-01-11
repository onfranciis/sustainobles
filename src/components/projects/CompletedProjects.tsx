import { IProjectCardProp } from "@/types";
import ProjectsCard from "./ProjectsCard";

const CompletedProjects = () => {
  return (
    <main className="min-h-screen bg-tertiary flex flex-col gap-[60px] py-20 -sm:pt-10">
      {DATA.map((card) => (
        <ProjectsCard key={card.title} Data={card} />
      ))}
    </main>
  );
};

export default CompletedProjects;

const DATA: IProjectCardProp["Data"][] = [
  {
    title: "Community Clean Up",
    body: "We decided to clean up the area and give back to the community, we had 160 volunteers and we shared ourselves into different groups. We gathered 67 disposable bags and 14 bagco sack, areas covered: Alhaji Hassana, Nurudeen, Coker, Savage and Orile. Areas covered: Alhaji Hassana, Nurudeen, Coker, Savage and Orile. Duration of the environmental exercise: 14hours 15minuites. We cleared the gutters and cleaned the streets during our exercise.",
    image: "/projects/completed-projects6.png",
    url: "/projects/gallery/community-clean-up",
    type: "One",
  },
  {
    title: "Borehole in Makoko",
    body: "We decided to build a borehole in Makoko for them to have clean and drinkable water as it is essential for our health. We also bought Two Canoes and both are functional and is being used to carry the students from Makoko down to areas like third mainland bridge and neighboring communities. And bring them back the next day. Sort of like a school bus. We also bought a generator for them to use to pump water when there is no light.",
    image: "/projects/completed-projects5.png",
    url: "/projects/gallery/borehole-in-makoko",
    type: "Two",
  },
  {
    title: "Pad a Girl Child",
    body: "Sustainobles' \"Pad a Girl Child\" project aligns with SDG 3, emphasizing good health and well-being. Addressing menstrual hygiene challenges, the initiative combats school absenteeism among girls. Collaboration with MBGN '22 ensured the distribution of over 300 sanitary pads, promoting inclusivity and gender equality in line with SDG 11. Seminars for children aged 10-15 emphasized the importance of hard work, and over 20 food boxes were distributed, contributing to overall community well-being. Together, we're advancing education, gender equality, and inclusive urban development.",
    image: "/projects/completed-projects4.png",
    url: "/projects/gallery/pad-a-girl-child",
    type: "One",
  },
  {
    title: "Back to School Project",
    body: "Our program provides essential resources to overcome barriers to education, offering items like books, school footwear, socks, bags, whiteboards, and lunch boxes. Focused on reducing dropout rates and improving learning outcomes, we aim to create an inclusive and equitable educational environment. During our back-to-school initiative, we raised 392,800 Naira, enabling us to distribute over 500 sandals, socks, bags, lunch boxes, and stationery items to children in Lokoja, Enugu Ezike, and Orile. While not all children received bags as planned, we ensured that each child received essential stationery items. Additionally, we utilized funds to pay the school fees of 76 children using plastic. Your support has made a meaningful impact on the education journey of these students.",
    image: "/projects/completed-projects3.png",
    url: "/projects/gallery/back-to-school-project",
    type: "Two",
  },
  {
    title: "Summer Coaching",
    body: "We kicked off with academic classes and the Skill acquisition followed,  we gave our best to make sure the kids have a sense of direction and are prepared for the upcoming school session. At the end of the summer lessons, the children acquired  skills asides lessons. We had Volunteer teachers that have been coming through, we also got book donations that were used for the lesson.  ",
    image: "/projects/completed-projects2.png",
    url: "/projects/gallery/summer-coaching",
    type: "One",
  },
  {
    title: "Orphanage Outreach",
    body: "We took to sharing foodstuffs and provisions to the Mpaniwu Orphanage home on the 30th of December 2023. The country's economy is dwindling, we understand that caring for a large family will be hard, also in the spirit of the festivities going on. So we did our bit and enjoyed every second of providing for the orphanage home.",
    image: "/projects/completed-projects1.png",
    url: "/projects/gallery/orphanage-outreach",
    type: "Two",
  },
];
