import { poppins } from "./Two";
import DonateCard from "./donateCard/DonateCard";

const Four = () => {
  return (
    <div
      className="px-16 -md:px-12 -sm:px-4 w-full -xs:px-3 py-5 pb-9 -sm:mb- bg-tertiary relative"
      id="Donate"
    >
      <div className="flex -xl:flex-col items-center justify-center gap-11 p-8 py-20 -sm:pt-8 bg-[url('/landing-five.png')] bg-no-repeat bg-center bg-cover bg-fixed rounded-[20px] -sm:rounded-[10px]">
        <div className=" max-w-[497px]">
          <p className="mb-8 text-[64px] -lg:text-[52px] -md:text-[40px] -sm:text-2xl -sm:text-center font-bold">
            Donate Now
          </p>

          <p
            className={`${poppins.className} text-[40px] -lg:text-4xl -md:text-2xl -sm:text-xl -sm:text-center leading-normal opacity-80`}
          >
            There are 20 Million children out of school in Nigeria, help us keep
            them in school.
          </p>
        </div>

        <div className="-sm:hidden">
          <DonateCard />          
        </div>
      </div>

      <div className=" sm:hidden -mt-12 mx-auto flex justify-center">
        <DonateCard />          
      </div>
    </div>
  );
};

export default Four;
