import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="flex-col items-center py-3 pt-16 max-sm:pt-10 bg-primary-gradient pb-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-10 xl:px-20 flex flex-wrap justify-between gap-10">
        <div className="sm:max-w-[288px] mx-auto flex flex-col items-center">
          <Link href="/" className="h-fit">
            <Image
              src="/logo.svg"
              alt="Sustainobles logo"
              className=" max-lg:w-[280px]"
              width={360}
              height={85}
            />
          </Link>

          <p
            className="mt-[20px] tracking-wide text-2xl lg:text-3xl font-semibold
          word-break"
          >
            Empowering Futures, One Child at a Time.
          </p>

          <p className="max-[850px]:hidden mt-[32px]">Sustainobles © {year}</p>
        </div>

        <div className="max-w-[456px] space-y-3 mx-auto">
          <p className="text-white text-lg sm:text-xl lg:text-2xl">
            Join Us in Creating Lasting Change for Children in Need.
          </p>

          <form action="" className="space-y-3 flex flex-col items-center">
            <div className="flex gap-3 w-full">
              <input
                className="h-[52px] w-full px-3 py-4 outline-none rounded-lg text-black font-semibold"
                type="text"
                placeholder="First Name"
              />

              <input
                className="h-[52px] w-full px-3 py-4 outline-none rounded-lg text-black font-semibold"
                type="text"
                placeholder="Last Name"
              />
            </div>

            <input
              className="h-[52px] w-full px-3 py-4 outline-none rounded-lg text-black font-semibold"
              type="tel"
              placeholder="Phone Number"
            />

            <input
              className="h-[52px] w-full px-3 py-4 outline-none rounded-lg text-black font-semibold"
              type="email"
              placeholder="Email Address"
            />

            <button
              className="py-[6px] px-[31px] mx-auto bg-white text-transparent font-semibold rounded-lg"
              type="submit"
            >
              <span className="bg-primary-gradient bg-clip-text">Submit</span>
            </button>
          </form>
        </div>

        <div className="space-y-10 text-white mx-auto">
          <div className="space-y-3">
            <p className="font-semibold text-2xl lg:text-3xl">Contact us</p>

            <div className="space-y-1">
              <Link href="tel:+2348110493649" className="block font-light">
                <span className="">Phone</span>: +234 811 049 3649{" "}
              </Link>
              <Link
                href="mailto:sustainobles@gmail.com"
                className="block font-light"
              >
                <span className="">Email</span>: sustainobles@gmail.com
              </Link>
            </div>
          </div>

          <div className="w-full space-y-3">
            <p className="font-semibold text-2xl lg:text-3xl">
              Let&apos;s Connect
            </p>

            <div className="flex items-center gap-8">
              {SocialMediaLinks.map((link) => (
                <Link href={link.url} key={link.src} target="_blank">
                  <Image
                    className="w-[25px] h-[25px] "
                    src={link.src}
                    alt={link.alt}
                    width={link.width}
                    height={link.height}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="mt-10 w-full text-center min-[850px]:hidden">
        Sustainobles © {year}
      </p>
    </footer>
  );
};

export default Footer;

const SocialMediaLinks = [
  {
    url: "https://twitter.com/Sustainobles",
    src: "/twitter.svg",
    alt: "Twitter",
    width: 28,
    height: 28,
  },
  {
    url: "https://www.facebook.com/profile.php?id=100076252804609",
    src: "/facebook.svg",
    alt: "Facebook",
    width: 32,
    height: 32,
  },
  {
    url: "https://www.instagram.com/sustainobles",
    src: "/instagram.svg",
    alt: "Instagram",
    width: 35,
    height: 35,
  },
  {
    url: "https://www.tiktok.com/@sustainobles",
    src: "/tiktok.svg",
    alt: "Tiktok",
    width: 32,
    height: 32,
  },
];
