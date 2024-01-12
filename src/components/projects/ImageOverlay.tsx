import Link from "next/link";
import { poppins } from "@/components/landingPage/Two";
import { IImageOverlay } from "@/types";

const ImageOverlay = ({ img, title, body, link }: IImageOverlay) => {
  return (
    <div
      style={{ backgroundImage: `url(${img.src})` }}
      className="min-h-[400px] -sm:min-h-[280px] mb-12 p-6 -sm:p-4 pb-20 -sm:pb-20 relative rounded-2xl -sm:rounded-lg bg-cover bg-center"
    >
      <h2 className="mb-4 -sm:mb-2 text-[64px] -lg:text-[52px] -md:text-[40px] -sm:text-2xl font-bold uppercase">
        {title}
      </h2>
      <p className={`text-[36px] -lg:text-4xl -md:text-2xl -sm:text-base leading-normal opacity-80 ${poppins.className}`}>
        {body}
      </p>
      <Link
        href={link.address}
        aria-disabled={link.disabled}
        className={`${link.disabled ? "pointer-events-none  bg-[#526d26]" : " bg-[#8AB440]"} py-3 -sm:py-2.5 px-12 -sm:px-6 -sm:text-xs absolute bottom-6 -sm:bottom-4 right-6 -sm:right-4 rounded-xl -sm:rounded-lg text-[#1D401D]`}
      >
        {link?.text}
      </Link>
    </div>
  )
}

export default ImageOverlay