import Image from "next/image";
import aboutOne from "../../assets/about-1.png";
import aboutTwo from "../../assets/about-2.png";
import moneyIcon from "../../assets/money-icon.png";
import hangerIcon from "../../assets/hanger-icon.png";
import bottleIcon from "../../assets/bottles-icon.png";
import timeIcon from "../../assets/time-icon.png";
import speakerIcon from "../../assets/speaker-icon.png";

export default function Home() {
  const helpIcons = [
    {
      icon: moneyIcon,
      text: "Monetary Donations",
    },
    {
      icon: hangerIcon,
      text: "Donate Clothes",
    },
    {
      icon: bottleIcon,
      text: "Donate Plastic Bottles",
    },
    {
      icon: timeIcon,
      text: "Volunteer Your Time",
    },
    {
      icon: speakerIcon,
      text: "Help Raise Awareness",
    },
  ];

  return (
    <main className="min-h-screen max-w-[1440px] mx-auto px-4 md:px-6 lg:px-10 xl:px-20 pt-10 text-base md:text-xl md:leading-[30px] text-[#1e1e1e]">
      <section className="relative">
        <h2 className="mb-5 text-3xl md:text-[32px] font-semibold text-center">
          Our Story
        </h2>

        <div className="gap-8 relative mb-10">
          <Image
            className="max-h-[910px] min-[450px]:w-1/2 min-[450px]:ml-5 mb-8 object-contain
            min-[450px]:float-right "
            src={aboutOne}
            alt="happy children"
          />

          <div className="space-y-3.5">
            <p>
              Sustainobles was founded by Oyiga Micheal in 2021 to address the
              twin challenges of educational inequality and environmental
              sustainability in rural areas. The idea for the organization
              emerged during his time as a geography teacher in the National
              Youth Service Corps (NYSC), where he witnessed firsthand the
              struggles rural children faced in accessing education. Inspired to
              make a difference, Oyiga developed a model where recycling plastic
              waste funds educational programs for underserved children
            </p>
            <p>
              The early days of Sustainobles began in Orile, Lagos, with a small
              grassroots initiative focused on raising community awareness about
              recycling and its potential to support education. One of the first
              projects was setting up recycling collection points, with funds
              from recycled plastics helping to provide children with school
              supplies. Additionally, Sustainobles launched a football club for
              over 80 children to foster discipline and engagement through
              sports.
            </p>
            <p>
              Since its inception, Sustainobles has grown to include summer
              coaching and apprenticeship programs, with over 64 children
              graduating. A major milestone has been the construction of a
              school, funded through charity football matches, which will serve
              as a central hub for educational and community activities.
              Sustainobles continues to collaborate with local leaders,
              recyclers, and schools to ensure that more children can access
              education while promoting environmental stewardship.
            </p>
            <p>
              Looking ahead, the organization plans to expand its educational
              initiatives and introduce vocational training programs.
              Sustainobles’ long-term vision is to create a sustainable model
              that can be replicated in other regions, ensuring that children
              have the opportunity to thrive academically while also addressing
              environmental challenges
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-5 text-3xl md:text-[32px] font-semibold text-center">
          Our Purpose
        </h2>

        <p>
          We at Sustainobles are dedicated to making a real difference in the
          lives of children in rural and slum areas. By focusing on sustainable
          initiatives like recycling and educational programs, we provide
          essential resources and support. Our efforts are aimed at fostering
          positive change and creating a brighter future for underserved
          communities.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-5 text-3xl md:text-[32px] font-semibold text-center">
          Our Vision & Mission
        </h2>

        <div className="flex max-md:flex-col max-md:gap-4">
          <p className="md:w-1/2 border-r max-md:border-r-0 border-r-black/20 md:pr-4">
            We envision a world where Sustainobles plays a pivotal role in
            transforming the lives of children in rural and slum areas. Our goal
            is to provide education, clean water, and sustainable communities,
            serving as beacons of hope and progress.
          </p>

          <hr className="md:hidden " />

          <p className="md:w-1/2 md:pl-4">
            Our mission is to empower children in rural and underserved
            communities by focusing on quality education, clean water, and
            sustainable community development. We are committed to aligning our
            efforts with the United Nations&apos; Sustainable Development Goals,
            ensuring a brighter future for all.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-5 text-3xl md:text-[32px] font-semibold text-center">
          Our Founder
        </h2>

        <div className="gap-8 relative">
          <Image
            className="min-[450px]:w-1/2 min-[450px]:mr-5 mb-8 object-contain float-left"
            src={aboutTwo}
            alt="Michael Oyiga"
          />

          <div className="space-y-2 tracking-normal">
            <p>
              Oyiga Micheal is the founder of Sustainobles, a charity dedicated
              to empowering rural children through sustainable education. His
              journey began during his National Youth Service Corps (NYSC) as a
              geography teacher, where he witnessed the challenges children in
              rural areas faced in accessing education. This experience,
              combined with his background in geography and environmental
              research, inspired him to create a solution that merged education
              with environmental sustainability.
            </p>

            <p>
              At Sustainobles, Oyiga oversees strategic planning, community
              engagement, and program oversight, ensuring that the
              organization&apos;s mission to address educational inequality and
              environmental challenges remains at the forefront. He is driven by
              the belief that education is a fundamental right and that
              sustainable practices can bring about lasting change.
            </p>

            <p>
              His vision for Sustainobles is to expand the organization’s reach,
              helping more children access education through innovative
              recycling initiatives, and to complete the school that will serve
              as a hub for educational and community activities. The legacy
              Oyiga hopes to leave is one of empowerment and sustainability,
              inspiring others to find creative ways to address social and
              environmental issues in their communities.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10 pt-10 clear-both">
        <h2 className="mb-5 text-3xl md:text-[32px] font-semibold text-center">
          How you can help
        </h2>

        <div>
          <p>
            Your support is vital to our mission at Sustainobles. By
            contributing in various ways, you can help us empower children in
            disadvantaged communities and provide them with the education and
            resources they need for a brighter future. Here are some meaningful
            ways you can make a difference:
          </p>

          <div
            className="mt-5 flex justify-center items-center gap-5 flex-wrap
          max-[460px]:flex-col max-[460px]:items-start"
          >
            {helpIcons.map((icon) => {
              return (
                <div
                  key={icon.text}
                  className="flex items-center gap-2 flex-shrink-0"
                >
                  <Image
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[50px] lg:h-[50px]"
                    src={icon.icon}
                    alt=""
                  />

                  <p>{icon.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
