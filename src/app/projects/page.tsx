import Image from "next/image";
import happy from "../../assets/happy.png";
import imgOne from "../../../public/about-one.png";
import imgTwo from "../../../public/about-two.png";
import ImageOverlay from "@/components/projects/ImageOverlay";

export default function Home() {
  return (
    <main className="min-h-screen py-14 px-14 -md:px-10 -sm:px-4 bg-[#F6FFDC] text-white">
      <ImageOverlay
        img={imgOne}
        title="Completed Projects"
        body="Since our inception, Sustainobles have engaged in and completed many sustainable projects and we can pride ourselves and also take pride in our sponsors and volunteers as growing..."
        link={{
          disabled: false,
          text: "See More",
          address: "/projects/completed",
        }}
      />

      <ImageOverlay
        img={imgTwo}
        title="Ongoing Projects"
        body="Sustainobles is actively involved in and progressing through various ongoing sustainable projects. We take pride in our current initiatives and extend our gratitude to sponsors and volunteers who contribute to the success of these projects as they unfold and develop."
        link={{
          disabled: false,
          text: "See More",
          address: "/projects/ongoing",
        }}
      />

      <ImageOverlay
        img={happy}
        title="Upcoming Projects"
        body="Since our inception, Sustainobles have engaged in and completed many sustainable projects and we can pride ourselves and also take pride in our sponsors and volunteers as growing..."
        link={{
          disabled: true,
          text: "See More",
          address: "",
        }}
      />
    </main>
  );
}
