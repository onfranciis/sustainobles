import Image from "next/image";
import happy from "../../assets/happy.png";
import schlOne from "../../assets/school-one.png";
import imgOne from "../../../public/about-us-grid/image1.png"
import imgTwo from "../../../public/about-us-grid/image2.png"
import imgThree from "../../../public/about-us-grid/image3.png"
import imgFour from "../../../public/about-us-grid/image4.png"
import imgFive from "../../../public/about-us-grid/image5.png"
import imgSix from "../../../public/about-us-grid/image6.png"
import imgSeven from "../../../public/about-us-grid/image7.png"
import imgEight from "../../../public/about-us-grid/image8.png"
import { poppins } from "@/components/landingPage/Two";
import ImageGrid from "@/components/about/imageGrid";

export default function Home() {
  return (
    <main className="min-h-screen text-2xl -lg:text-xl -md:text-lg -sm:text-base text-[#1e1e1e]">
      <div className="py-32 -lg:py-20 -sm:py-5 px-14 -md:px-10 -sm:px-4 bg-[#8AB440] flex justify-center items-center">
        <h1 className="text-5xl -lg:text-4xl -sm:text-xl font-bold text-center uppercase">
          About Sustainobles
        </h1>
      </div>

      <div className="h-20 -sm:h-[60px] px-14 -lg:px-8 -sm:px-2  bg-[#1D401D] text-white text-center -sm:text-xs flex justify-center items-center gap-12 -sm:gap-4">
        <a href="#us">Who we are</a>
        <a href="#started">Why we started</a>
        <a href="#purpose">Our purpose</a>
      </div>

      <div
        id="us"
        className="py-14 -sm:py-8 px-14 -md:px-10 -sm:px-4 bg-[#F6FFDC] flex -xl:flex-col-reverse items-center gap-20 -lg:gap-16 -sm:gap-10"
      >
        <div>
          <h2 className="mb-8 -md:mb-5 -sm:mb-2 text-5xl -md:text-4xl -sm:text-[32px] -xl:text-center font-bold uppercase">
            Who We Are
          </h2>
          <p>
            We at Sustainobles are a dedicated force for positive change.
            We&apos;re all about making a real difference. By focusing on
            sustainable actions and taking initiatives on acts like recycling
            etc., we transform lives by funding education, helping to pay
            children&apos;s school fees, providing stationery items, and using
            football as a catalyst for holistic development in indigent and
            rural children.
          </p>
        </div>

        <ImageGrid imgOne={imgTwo} imgTwo={imgSeven} imgThree={imgSix} imgFour={imgOne}/>
      </div>

      <div className={`px-14 -md:px-10 -sm:px-4 py-11 text-white ${poppins.className}`}>
        <h2 className="-sm:hidden mb-4 text-4xl -md:text-4xl -sm:text-2xl text-center font-bold uppercase">
          Vision & Mission
        </h2>
        <div className="flex -sm:flex-col -sm:text-sm">
          <div>
            <h3 className="sm:hidden mb-3 text-2xl text-center font-bold tracking-wide">Vision</h3>
            <p>
              &quot;We envision a world where Sustainobles plays a pivotal role in
              transforming the lives of children in rural and slum areas,
              providing them with education, clean water, and creating sustainable
              communities that serve as beacons of hope and progress.&quot;
            </p>            
          </div>

          <div className="sm:w-1 -sm:h-0.5 sm:mx-6 -sm:my-6 bg-[#8AB440]"></div>

          <div>
            <h3 className="sm:hidden mb-3 text-2xl text-center font-bold tracking-wide">Mission</h3>
            <p>
              &quot;We are on a mission to empower children in rural and
              underserved communities, particularly those in slum areas, by
              focusing on quality education, clean water, and sustainable
              community development aligned with the United Nations&apos;
              Sustainable Development Goals.&quot;
            </p>            
          </div>

        </div>
      </div>

      <div
        id="started"
        className="py-12 -sm:pb-5 px-14 -md:px-10 -sm:px-4 bg-[#F6FFDC] flex -xl:flex-col-reverse items-center gap-20 -lg:gap-16 -sm:gap-10"
      >
        <div>
          <h2 className="mb-8 -md:mb-4 -sm:mb-2 text-5xl -md:text-4xl -sm:text-[32px] -xl:text-center font-bold uppercase">
            Why We Started
          </h2>
          <p>
            Sustainobles was initiated with a profound mission to bridge
            educational gaps in rural areas. Focused on sustainable practices
            like recycling, we started to generate funds to provide school fees,
            stationary items, and leverage football and a book club as
            extra-curricular activities for the rural child.
          </p>
        </div>

        <ImageGrid imgOne={imgFive} imgTwo={imgThree} imgThree={imgEight} imgFour={imgFour}/>
      </div>

      <div id="purpose" className="pt-8 pb-[70px] px-14 -md:px-10 -sm:px-4 bg-[#F6FFDC]">
        <div
          style={{ backgroundImage: `url("/landing-two-a.png")` }}
          className="col-span-2 p-8 -sm:p-5 pr-[73px] pb-12 bg-cover text-white rounded-2xl bg-center"
        >
          <p className="mb-4 -sm:mb-3 text-[64px] -lg:text-[52px] -md:text-[40px] -sm:text-[26px] font-bold">
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
    </main>
  );
}
