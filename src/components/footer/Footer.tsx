import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="flex-col items-center  px-[100px] -md:px-16 -sm:px-10 py-3 pt-16 -sm:pt-10">
      <div className="flex -sm:flex-col gap-y-10 justify-between">
        <Link href="/" className="h-fit">
          <Image
            src="/logo.svg"
            alt="Sustainobles logo"
            width={196}
            height={46}
          />
        </Link>

        <div className="flex flex-col sm:items-center text-[#CCCCCC]">
          <p className="mb-5 font-semibold text-3xl underline underline-offset-4  text-[#F6FFDC]">
            Contact
          </p>

          <Link href="">Phone: 080 0000 0000 </Link>
          <Link href="">Email: sustainobles@sus.com</Link>
        </div>

        <div className="flex flex-col sm:items-center">
          <p className="mb-5 font-semibold text-3xl underline underline-offset-4  text-[#F6FFDC]">
            Socials
          </p>

          <div className="flex items-center gap-8">
            {SocialMediaLinks.map((link) => (
              <Link href="" key={link.src}>
                <Image
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

      <div className="flex justify-center mt-12 text-xl">
        <p>Sustainobles © {year}</p>
      </div>
    </footer>
  );
};

export default Footer;

const SocialMediaLinks = [
  {
    url: "",
    src: "/twitter.svg",
    alt: "Twitter",
    width: 32,
    height: 32,
  },
  {
    url: "",
    src: "/facebook.svg",
    alt: "Facebook",
    width: 32,
    height: 32,
  },
  {
    url: "",
    src: "/instagram.svg",
    alt: "Instagram",
    width: 35,
    height: 35,
  },
  {
    url: "",
    src: "/tiktok.svg",
    alt: "Tiktok",
    width: 32,
    height: 32,
  },
];
