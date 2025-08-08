import Image from "next/image";
import testImg from "../../../../assets/project-1.png";
import calendarIcon from "../../../../assets/calendar-icon.png";
import timeIcon from "../../../../assets/time-icon.png";
import locationIcon from "../../../../assets/location-icon.png";
import Button from "@/components/ui/button";

const Project = () => {
  const detailIcons = [
    {
      icon: calendarIcon,
      text: "Saturday, April 2025",
    },
    {
      icon: timeIcon,
      text: "11am",
    },
    {
      icon: locationIcon,
      text: "Campus Mini Stadium",
    },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-12 text-xl text-[#1e1e1e]">
      <div className="relative w-full aspect-[1240/600] mb-12 bg-gray-300">
        {/* <Image fill src={} alt="" /> */}
      </div>
      <h1 className="mb-6 text-[40px] leading-tight font-semibold">
        Sustainobles Charity Football Match: Influencers VS Celebrities, Female
        & Male, raise funds for out of school children
      </h1>
      <div className="flex items-center gap-12 mb-10">
        {detailIcons.map((icon, index) => {
          return (
            <div key={index} className="flex items-center gap-2 flex-shrink-0">
              <Image className="w-[45px] h-[45px]" src={icon.icon} alt="" />
              <p>{icon.text}</p>
            </div>
          );
        })}
        <Button className="ml-auto">Buy Tickets</Button>
      </div>
      <div className="mb-10 space-y-3.5">
        <h2 className="text-[32px] font-semibold">Event Description</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <ul>
          <li>When:</li>
          <li>Event Starts:</li>
          <li>Where:</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-6 text-[40px] font-semibold">Location</h2>
        <div className="relative w-full aspect-[1240/600] mb-12 bg-gray-300">
          {/* <Image fill src={} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Project;
