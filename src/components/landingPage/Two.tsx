import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "600", "500", "400", "300", "200"],
  display: "swap",
  adjustFontFallback: false,
});

const Two = () => {
  return (
    <div className={poppins.className}>
      <div className="relative px-16 -md:px-12 -sm:px-8 -xs:px-5">
        <div className="bg-[url('/landing-two-a.png')] bg-no-repeat bg-center bg-cover bg-fixed mt-[150px] -sm:mt-[60px] mb-[-200px] -sm:mb-[-150px] p-8 -sm:p-5 pr-[73px] pb-12 rounded-2xl -sm:rounded-[10px] left-0 right-0 ml-auto mr-auto">
          <p className="mb-4 text-[64px] -lg:text-[52px] -md:text-[40px] -sm:text-[26px] font-bold">
            Our Purpose
          </p>

          <p className="text-4xl -md:text-2xl -sm:text-sm leading-normal tracking-wider opacity-80">
            Empowering Children in disadvantaged areas by championing recycling
            initiatives, organizing book clubs and using the earning to fund
            their education. Also, harnessing and leveraging the power of
            football to positively impact and transform their lives.
          </p>
        </div>
      </div>
      <div className="bg-tertiary min-h-[300px] -sm:min-h-[200px]"></div>
    </div>
  );
};

export default Two;
