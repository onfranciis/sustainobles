import { IProjectCardProp } from "@/types";
import ProjectCard from "./ProjectCard";
import { poppins } from "./Two";

const Five = () => {
  return (
    <div className="bg-white pb-[22px] px-16 -md:px-12 -sm:px-8 -xs:px-5">
      <p
        className={`${poppins.className} text-[64px] -lg:text-[52px] -md:text-[40px] -sm:text-4xl font-bold text-[#1E1E1E] mb-6`}
      >
        Ongoing Projects
      </p>
      <div className="flex overflow-x-auto gap-10 pb-2 px-[5px] -md:px-[50px]">
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
    body: "At Sustainobles, we harness the power of collective action and sustainability to create positive change for underprivileged children. By recycling donated bottles, we break the cycle of poverty, funding education fees and essential needs. Your contribution not only supports education but also promotes a cleaner, greener planet. Join us in this transformative journey – every bottle you donate becomes a symbol of hope, paving the way for brighter tomorrows.",
    image: "/projects/ongoing-projects4.png",
    url: "/projects/ongoing",
    type: "One",
  },
  {
    title: "Charity Football Tournament",
    body: "We launched a football club which serves as community engagement initiatives. Participation in sport represents an opportunity for the rural child to develop their skills, competence and social network. Teaching them teamwork, fair play and goal setting. The aim is targeted at keeping young boys away from the street and raise money for children living in marginalized rural communities through football tournaments between influencers, communities, celebrities.",
    image: "/projects/ongoing-projects3.png",
    url: "/projects/ongoing",
    type: "Two",
  },
  {
    title: "Book Reading Club",
    body: "We decided to start a book club to help children improve their reading skills and vocabulary. the first book we read was ‘Who cares” which addressed societal ills and the characters in the Book. The Book “ Who cares ” Is a drama written by Barrister Yekini focused on fraud and scams amongst the Nigerian youth and that’s the major reason it was selected as it is perfect for everything happening in todays society. We started with 16 kids on the first day and subsequently our numbers increased.  It is said that “The more that you read, the more things you will know and the more that you learn, the more places you'll go”.",
    image: "/projects/ongoing-projects2.png",
    url: "/projects/ongoing",
    type: "One",
  },
];
