import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full bg-primary-gradient">
      <div
        className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 flex max-md:flex-col max-md:pb-5 gap-9
        pt-10"
      >
        <p className="text-[40px] lg:text-[56px] xl:text-[60px] font-bold max-sm:leading-tight leading-snug">
          Together with Sustainobles, Every Child Thrives
        </p>

        <div className="relative md:w-[55%] h-full flex-shrink-0 aspect-[694/400] ">
          <Image className="" fill src={"/homepage-hero.png"} alt="" />
        </div>
      </div>
    </div>
  );
}
