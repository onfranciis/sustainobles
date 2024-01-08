import { poppins } from "./Two";
import DonateCard from "./donateCard/DonateCard";

const Four = () => {
  return (
    <div
      className="px-16 -md:px-12 -sm:px-8 -xs:px-5 py-5 bg-white pb-9"
      id="Donate"
    >
      <div className="flex -xl:flex-col items-center justify-center gap-11 p-8 py-20  bg-[url('/landing-five.png')] bg-no-repeat bg-center bg-cover bg-fixed rounded-[20px] ">
        <div className=" max-w-[497px]">
          <p className="mb-8 text-[64px] -lg:text-[52px] -md:text-[40px] font-bold">
            Donate Now
          </p>

          <p
            className={`${poppins.className} text-[40px] -lg:text-4xl -md:text-2xl leading-normal opacity-80`}
          >
            There are 20 Million children out of school in Nigeria, help us keep
            them in school.
          </p>
        </div>

        <DonateCard />
      </div>
    </div>
  );
};

export default Four;
