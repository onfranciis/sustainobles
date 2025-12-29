import Image from "next/image";
import mascot from "../../assets/no-event.png";

export default function NoEvents() {
  return (
    <div className="w-full px-5 py-[120px] gap-4 text-black">
      <Image
        height={600}
        width={600}
        src={mascot}
        alt="No event mascot"
        className="w-full max-w-[600px] mx-auto"
      />

      <h2 className="text-[32px] font-semibold mb-4 mt-10">
        No Events at the Moment
      </h2>
      <p className="text-[20px]">
        We&apos;re working on something exciting! There are no events at the
        moment, but stay connected on our social media pages for upcoming
        opportunities to support Sustainobles. In the meantime, you can donate,
        volunteer, or spread the word to help make a difference!
      </p>
    </div>
  );
}
