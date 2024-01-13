import { IProjectCardProp } from "@/types";
import ProjectsCard from "./ProjectsCard";

const OngoingProjects = () => {
  return (
    <main className="min-h-screen bg-tertiary flex flex-col gap-[60px] py-20">
      {DATA.map((card) => (
        <ProjectsCard key={card.title} Data={card} />
      ))}
    </main>
  );
};

export default OngoingProjects;

const DATA: IProjectCardProp["Data"][] = [
  {
    title: "Collection of Bottles",
    id: "collection-of-bottles",
    body: "At Sustainobles, we harness the power of collective action and sustainability to create positive change for underprivileged children. By recycling donated bottles, we break the cycle of poverty, funding education fees and essential needs. Your contribution not only supports education but also promotes a cleaner, greener planet. Join us in this transformative journey – every bottle you donate becomes a symbol of hope, paving the way for brighter tomorrows.",
    image: "/projects/ongoing-projects4.png",
    url: "/projects/gallery/collection-of-bottles",
    type: "One",
  },
  {
    title: "Charity Football Tournament",
    id: "charity-football-tournament",
    body: "We launched a football club which serves as community engagement initiatives. Participation in sport represents an opportunity for the rural child to develop their skills, competence and social network. Teaching them teamwork, fair play and goal setting. The aim is targeted at keeping young boys away from the street and raise money for children living in marginalized rural communities through football tournaments between influencers, communities, celebrities.",
    image: "/projects/ongoing-projects3.png",
    url: "/projects/gallery/charity-football-tournament",
    type: "Two",
  },
  {
    title: "Book Reading Club",
    id: "book-reading-club",
    body: "We decided to start a book club to help children improve their reading skills and vocabulary. the first book we read was ‘Who cares” which addressed societal ills and the characters in the Book. The Book “ Who cares ” Is a drama written by Barrister Yekini focused on fraud and scams amongst the Nigerian youth and that’s the major reason it was selected as it is perfect for everything happening in todays society. We started with 16 kids on the first day and subsequently our numbers increased.  It is said that “The more that you read, the more things you will know and the more that you learn, the more places you'll go”.",
    image: "/projects/ongoing-projects2.png",
    url: "/projects/gallery/book-reading-club",
    type: "One",
  },
  {
    title: "Monthly Essay Competition",
    id: "monthly-essay-competition",
    body: "We decided to start a the monthly essay competition, to help sharpen the children’s mind. After reading, we decided to test their vocabulary, mode of writing, grammar and spelling amongst others. It gives kids a chance to compete and learn from the competition. The topic for the Junior Secondary School: “Challenges and Opportunities for Education in Nigeria: How do some factors such as poverty, conflict, and gender affect the quality of education for many in Nigeria? What are some possible solutions to this? And for Senior Secondary School “The impact of the internet (or social media): Discuss the positive and negative effects of technology/social media on young people's lives. Reflect on how it has changed the ways you learn, communicate, and spend your time.",
    image: "/projects/ongoing-projects1.png",
    url: "/projects/gallery/monthly-essay-competition",
    type: "Two",
  },
];
