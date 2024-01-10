import { poppins } from "./Two";
import DonateCard from "./donateCard/DonateCard";

const Four = () => {
  return (
    <div className="px-16 -md:px-12 -sm:px-8 -xs:px-5 py-5 bg-white pb-9">
      <div className="flex -xl:flex-col items-center justify-center gap-11 p-8  bg-[url('/landing-four.png')] bg-no-repeat bg-center bg-cover rounded-[20px] ">
        <div className=" max-w-[497px]">
          <p className="mb-8 text-[64px] -lg:text-[52px] -md:text-[40px] font-bold">Donate Now</p>

          <p className={`${poppins.className} text-[40px] -lg:text-4xl -md:text-2xl leading-normal`}>
            Help us <span className="text-secondary">reach </span>
            that Child. Help us <span className="text-secondary">empower</span>.
            Help us make
            <span className="text-secondary"> imapact</span>. Help us reach our{" "}
            <span className="text-secondary">Sustainobles </span>
            goals.
          </p>
        </div>

        <DonateCard />
      </div>
    </div>
  );
};

export default Four;
