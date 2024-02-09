import { poppins } from "./Two";
import img from "../../../public/events/charity-match.png";
import Image from "next/image";

const Six = () => {
  const events = [
    {
      title: "Charity Match",
      image: "/projects-card/image7.png",
      url: "",
    },
  ];
  return (
    <div className="bg-tertiary pb-[22px] pt-4 px-16 -md:px-12 -sm:px-4 -xs:px-3">
      <p
        className={`${poppins.className} text-[64px] -lg:text-[52px] -md:text-[40px] -sm:text-4xl font-bold text-[#1E1E1E] mb-6`}
      >
        Upcoming Events
      </p>
      <div className="flex w-full overflow-x-auto gap-10 -md:gap-3 pb-2 sm:pl-7 md:pl-[50px]">
        <div className="flex flex-shrink-0 gap-10 -md:gap-3 w-max">
          {events.map((event) => {
            return (
              <Image
                className=" lg:w-[400px] flex-shrink-0"
                src={"/events/charity-match.png"}
                alt=""
                width={335}
                height={335}
                key={event.title}
              />
            );
          })}
        </div>
        <div className="relative flex-shrink-0 rounded-[20px] overflow-hidden">
          <div
            className="w-[335px] lg:w-[400px] h-[335px] lg:h-[400px] flex justify-center items-center blur-xl"
            style={{ backgroundImage: `url("/events/charity-match.png")` }}
          />
          <p className="w-max text-black text-xl font-bold uppercase px-3 py-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-secondary">
            Coming Soon
          </p>
        </div>
        <div className="relative flex-shrink-0 rounded-[20px] overflow-hidden">
          <div
            className="w-[335px] lg:w-[400px] h-[335px] lg:h-[400px] flex justify-center items-center blur-xl"
            style={{ backgroundImage: `url("/events/charity-match.png")` }}
          />
          <p className="w-max text-black text-xl font-bold uppercase px-3 py-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-secondary">
            Coming Soon
          </p>
        </div>
      </div>
    </div>
  );
};

export default Six;
