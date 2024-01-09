import Image from "next/image";
import happy from "../../assets/happy.png";
import schlOne from "../../assets/school-one.png";
import schlTwo from "../../assets/school-two.png";
import { poppins } from "@/components/landingPage/Two";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen py-14 px-14 bg-[#F6FFDC] text-white">
      <div
        style={{ backgroundImage: `url("/about-one.png")` }}
        className="min-h-[400px] mb-12 p-6 pb-20 relative bg-cover bg-center rounded-2xl bg-fixed"
      >
        <h2 className="mb-4 text-[64px] -lg:text-[52px] -md:text-[40px] font-bold uppercase">
          Completed Projects
        </h2>
        <p
          className={`text-[36px] -lg:text-4xl -md:text-2xl leading-normal opacity-80 ${poppins.className}`}
        >
          Since our inception, Sustainobles have engaged in and completed many
          sustainable projects and we can pride ourselves and also take pride in
          our sponsors and volunteers as growing...
        </p>
        <Link
          href="/projects/completed"
          className="py-3 px-12 absolute bottom-6 right-6 rounded-xl bg-[#8AB440] text-[#1D401D]"
        >
          See More
        </Link>
      </div>

      <div
        style={{ backgroundImage: `url("about-two.png")` }}
        className="min-h-[400px] mb-12 p-6 pb-20 relative bg-cover bg-center rounded-2xl bg-fixed"
      >
        <h2 className="mb-4 text-[64px] -lg:text-[52px] -md:text-[40px] font-bold uppercase">
          Ongoing Projects
        </h2>
        <p
          className={`text-[36px] -lg:text-4xl -md:text-2xl leading-normal opacity-80 ${poppins.className}`}
        >
          Since our inception, Sustainobles have engaged in and completed many
          sustainable projects and we can pride ourselves and also take pride in
          our sponsors and volunteers as growing...
        </p>
        <Link
          href="/projects/ongoing"
          className="py-3 px-12 absolute bottom-6 right-6 rounded-xl bg-[#8AB440] text-[#1D401D]"
        >
          See More
        </Link>
      </div>

      <div
        style={{ backgroundImage: `url(${happy.src})` }}
        className="min-h-[400px] p-6 pb-20 relative bg-cover bg-center rounded-2xl bg-fixed"
      >
        <h2 className="mb-4 text-[64px] -lg:text-[52px] -md:text-[40px] font-bold uppercase">
          Upcoming Projects
        </h2>
        <p className="text-[36px] -lg:text-4xl -md:text-2xl leading-normal"></p>
        <Link
          href=""
          className="py-3 px-12 absolute bottom-6 right-6 rounded-xl bg-[#8AB440] text-[#1D401D]"
        >
          See More
        </Link>
      </div>
    </main>
  );
}
