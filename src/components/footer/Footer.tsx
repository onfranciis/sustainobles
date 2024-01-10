import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="flex-col items-center px-16 -md:px-10 -sm:px-8 py-3 pt-16 -sm:pt-10">
      <div className="grid sm:grid-cols-3 gap-10">
        <div className="sm:max-w-[200px] flex-shrink-0">
          <Link href="/" className="h-fit">
            <Image
              src="/logo.svg"
              alt="Sustainobles logo"
              width={196}
              height={46}
            />
          </Link>

          <p className="mt-3 tracking-wide font-light">Empowering Futures, One Child at a Time. Join Us in Creating Lasting Change for Children in Need.</p>          
        </div>

        <div className="flex flex-col flex-shrink-0 text-[#CCCCCC]">
          <p className="mb-5 -sm:mb-1 font-semibold text-3xl -md:text-2xl text-[#F6FFDC]">
            Contact
          </p>

          <Link href="" className="font-light"><span className="font-bold">Phone</span>: 080 0000 0000 </Link>
          <Link href="mailto:sustainobles@sus.com" className="font-light"><span className="font-bold">Email</span>: sustainobles@sus.com</Link>
        </div>

        <div className="w-full flex flex-col">
          <p className="mb-5 -md:mb-3 font-semibold text-3xl -md:text-2xl text-[#F6FFDC]">
            Socials
          </p>

          <div className="flex items-center gap-8">
            {SocialMediaLinks.map((link) => (
              <Link href="" key={link.src}>
                <Image
                  className="-md:w-[25px] -md:h-[25px] "
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

      <div className="flex justify-center mt-12 text-lg -sm:text-base">
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
    width: 28,
    height: 28,
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
