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
      <div className="relative ">
        <div className="bg-[url('/landing-two.png')] bg-no-repeat bg-center bg-cover w-[calc(100%-200px)]  mt-[150px] mb-[-200px] p-8 pr-[73px] pb-12 rounded-2xl left-0 right-0 ml-auto mr-auto">
          <p className="mb-[18px] text-6xl font-bold">Our Purpose</p>

          <p className="font-medium text-[40px] opacity-80">
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
