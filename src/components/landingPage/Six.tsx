import { poppins } from "./Two";
import img from "../../../public/events/charity-match.png"
import Image from "next/image";

const Six = () => {
  const events = [
    {
      title: "Charity Match",
      image: "/projects-card/image7.png",
      url: "",
    },
  ]
  return (
    <div className="bg-tertiary pb-[22px] pt-4 px-16 -md:px-12 -sm:px-8 -xs:px-5">
      <p
        className={`${poppins.className} text-[64px] -lg:text-[52px] -md:text-[40px] -sm:text-4xl font-bold text-[#1E1E1E] mb-6`}
      >
        Upcoming Events
      </p>
      <div className="flex w-full overflow-x-auto gap-10 -md:gap-3 pb-2 sm:pl-7 md:pl-[50px]">
        <div className="flex flex-shrink-0 gap-10 -md:gap-3 w-max">
          {events.map(event => {
            return(
              <Image
                className=" lg:w-[400px] flex-shrink-0"
                src={"/events/charity-match.png"}
                alt=""
                width={335}
                height={335}
                key={event.title}
              />
            )}
          )}
        </div>
        <div className="relative flex-shrink-0 rounded-[20px] overflow-hidden">
          <div 
            className="w-[335px] lg:w-[400px] h-[335px] lg:h-[400px] flex justify-center items-center blur-lg"
            style={{ backgroundImage: `url("/events/charity-match.png")`}}
          />     
          <p className="w-max text-black text-xl font-bold uppercase px-3 py-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-secondary">Coming Soon</p>   
        </div>
      </div>
    </div>
    // <div className="pb-24 px-16 -md:px-12 -sm:px-8 -xs:px-5 bg-tertiary flex justify-center w-full ">
    //   <div className="bg-[url('/landing-two.png')] bg-no-repeat bg-center bg-cover p-8 -md:p-4 pr-[73px] pb-12 rounded-2xl w-full">
    //     <p className="mb-28 -md:mb-24 -sm:mb-20 text-[64px] -lg:text-[52px] -md:text-[40px] font-bold">
    //       Events
    //     </p>

    //     <p className="-sm:mb-2 mb-3 text-[40px] -lg:text-4xl -md:text-2xl leading-normal opacity-80">
    //       Medical outreach
    //     </p>

    //     <p className="text-[40px] -lg:text-4xl -md:text-2xl leading-normal opacity-80">
    //       Football
    //     </p>
    //   </div>
    // </div>
  );
};

export default Six;
