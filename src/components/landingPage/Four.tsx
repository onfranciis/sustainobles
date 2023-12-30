import { poppins } from "./Two";
import DonateCard from "./donateCard/DonateCard";

const Four = () => {
  return (
    <div className="px-[100px] py-5 bg-white pb-9">
      <div className="flex items-center justify-center gap-11 p-8  bg-[url('/landing-four.png')] bg-no-repeat bg-center bg-cover rounded-[20px] ">
        <div className=" max-w-[497px]">
          <p className="font-extrabold text-6xl mb-8">Donate Now</p>

          <p className={`${poppins.className} font-medium text-[40px]`}>
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
