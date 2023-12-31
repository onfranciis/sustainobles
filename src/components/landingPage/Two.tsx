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
        <div className="bg-[url('/landing-two.png')] bg-no-repeat bg-center bg-cover mt-[150px] mb-[-200px] p-8 pr-[73px] pb-12 rounded-2xl left-0 right-0 ml-auto mr-auto">
          <p className="mb-4 text-[64px] -lg:text-[52px] -md:text-[40px] font-bold">Our Purpose</p>

          <p className="text-[40px] -lg:text-4xl -md:text-2xl leading-normal opacity-80">
            Empowering Children in disadvantaged areas by championing recycling
            initiatives, organizing book clubs and using the earning to fund
            their education. Also, harnessing and leveraging the power of
            football to positively impact and transform their lives.
          </p>
        </div>
      </div>
      <div className="bg-white min-h-[300px]"></div>
    </div>
  );
};

export default Two;
