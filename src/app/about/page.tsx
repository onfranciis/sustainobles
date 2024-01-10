import Image from "next/image";
import happy from "../../assets/happy.png";
import schlOne from "../../assets/school-one.png";
import { poppins } from "@/components/landingPage/Two";

export default function Home() {
  return (
    <main className="min-h-screen text-2xl -md:text-xl text-[#1e1e1e]">
      <div className="h-64 -sm:h-52 px-14 bg-[#8AB440] flex justify-center items-center">
        <h1 className="text-5xl -sm:text-4xl font-bold text-center uppercase">
          About Sustainobles
        </h1>
      </div>

      <div className="h-20 px-14 bg-[#1D401D] text-white text-center flex justify-center items-center gap-12">
        <a href="#us">Who we are</a>
        <a href="#started">Why we started</a>
        <a href="#purpose">Our purpose</a>
      </div>

      <div
        id="us"
        className="py-14 px-14 bg-[#F6FFDC] flex -xl:flex-col items-center gap-20"
      >
        <div>
          <h2 className="mb-8 -md:mb-5 text-5xl -md:text-4xl -xl:text-center font-bold uppercase">
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

        <div className="w-max mx-auto flex-shrink-0 grid gap-4 grid-cols-2">
          <div className="flex flex-col gap-2">
            <Image
              className="h-[392px] -md:h-[294px] -sm:h-[255px] w-[295px] -md:w-[221px] -sm:w-[192px] object-cover rounded-[32px]"
              src="/about-us-grid/image2.png"
              alt=""
              height={500}
              width={500}
            />
            <Image
              className="h-[352px] -md:h-[264px] -sm:h-[229px] w-[295px] -md:w-[221px] -sm:w-[192px] object-cover rounded-[32px]"
              src="/about-us-grid/image7.png"
              alt=""
              height={500}
              width={500}
            />
          </div>

          <div className="flex flex-col justify-end relative">
            <div className="w-max h-max p-2 pr-0 bg-[#F6FFDC] absolute z-10 bottom-[400px] -md:bottom-[300px] -sm:bottom-[260px] right-0 border-9.5 rounded-[32px]">
              <Image
                className="h-[276px] -md:h-[207px] -sm:h-[179px] w-[390px] -md:w-[293px] -sm:w-[254px] object-cover rounded-[32px]"
                src="/about-us-grid/image6.png"
                alt=""
                height={500}
                width={500}
              />
            </div>
            <Image
              className="h-[400px] -md:h-[300px] -sm:h-[260px] w-[295px] -md:w-[221px] -sm:w-[192px] object-cover rounded-[32px]"
              src="/about-us-grid/image1.png"
              alt=""
              height={500}
              width={500}
            />
          </div>
        </div>
      </div>

      <div className={`px-14 py-11 text-white  ${poppins.className}`}>
        <h2 className="mb-4 text-4xl -md:text-4xl text-center font-bold uppercase">
          Vision & Mission
        </h2>
        <div className="flex -sm:flex-col text-2xl ">
          <p>
            &quot;We envision a world where Sustainobles plays a pivotal role in
            transforming the lives of children in rural and slum areas,
            providing them with education, clean water, and creating sustainable
            communities that serve as beacons of hope and progress.&quot;
          </p>
          <div className="sm:w-1 -sm:h-0.5 sm:mx-6 -sm:my-6 bg-[#8AB440]"></div>
          <p>
            &quot;We are on a mission to empower children in rural and
            underserved communities, particularly those in slum areas, by
            focusing on quality education, clean water, and sustainable
            community development aligned with the United Nations&apos;
            Sustainable Development Goals.&quot;
          </p>
        </div>
      </div>

      <div
        id="started"
        className="py-12 px-14 bg-[#F6FFDC] flex -xl:flex-col items-center gap-20"
      >
        <div>
          <h2 className="mb-8 -md:mb-5 text-5xl -md:text-4xl -xl:text-center font-bold uppercase">
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

        <div className="w-max mx-auto flex-shrink-0 grid gap-4 grid-cols-2">
          <div className="flex flex-col gap-2">
            <Image
              className="h-[392px] -md:h-[294px] -sm:h-[255px] w-[295px] -md:w-[221px] -sm:w-[192px] object-cover rounded-[32px]"
              src="/about-us-grid/image5.png"
              alt=""
              height={500}
              width={500}
            />
            <Image
              className="h-[352px] -md:h-[264px] -sm:h-[229px] w-[295px] -md:w-[221px] -sm:w-[192px] object-cover rounded-[32px]"
              src="/about-us-grid/image3.png"
              alt=""
              height={500}
              width={500}
            />
          </div>

          <div className="flex flex-col justify-end relative">
            <div className="w-max h-max p-2 pr-0 bg-[#F6FFDC] absolute z-10 bottom-[400px] -md:bottom-[300px] -sm:bottom-[260px] right-0 border-9.5 rounded-[32px]">
              <Image
                className="h-[276px] -md:h-[207px] -sm:h-[179px] w-[390px] -md:w-[293px] -sm:w-[254px] object-cover rounded-[32px]"
                src="/about-us-grid/image8.png"
                alt=""
                height={500}
                width={500}
              />
            </div>
            <Image
              className="h-[400px] -md:h-[300px] -sm:h-[260px] w-[295px] -md:w-[221px] -sm:w-[192px] object-cover rounded-[32px]"
              src="/about-us-grid/image4.png"
              alt=""
              height={500}
              width={500}
            />
          </div>
        </div>
      </div>

      <div id="purpose" className="pt-8 pb-[70px] px-14 bg-[#F6FFDC]">
        <div
          style={{ backgroundImage: `url("/landing-two-a.png")` }}
          className="col-span-2 pt-3 pb-10 px-8 bg-cover text-white rounded-2xl bg-fixed bg-center"
        >
          <h2 className="mb-4 text-[64px] -md:text-5xl leading-normal font-bold">
            Our Purpose
          </h2>
          <p className="text-[40px] -lg:text-4xl -md:text-2xl leading-normal opacity-80">
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
