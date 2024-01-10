"use client";

import Image from "next/image";
import Link from "next/link";
import hamburger from "../../assets/hamburger.svg";
import cancel from "../../assets/cancel.svg";
import minLogo from "../../assets/min-logo.svg";
import { useState } from "react";

const NavBar = () => {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <nav className="sticky z-50 -top-0 flex items-center justify-between w-full px-[60px] -lg:px-10 -md:px-[30px] -sm:px-5 py-3 bg-primary max-w-[2000px] ">
      {isMenu && (
        <div className="w-full py-8 hidden gap-14 flex-col items-center absolute top-[72px] left-0 bg-primary bg-opacity-[99%] text-2xl font-bold leading-tight -xl:flex">
          <Link href="/" onClick={() => setIsMenu(false)} className="">
            <p>Home</p>
          </Link>

          <Link href="/about" onClick={() => setIsMenu(false)} className="">
            <p>About us</p>
          </Link>

          <Link
            href="/projects"
            onClick={() => setIsMenu(false)}
            className="flex items-center gap-1"
          >
            <p>Projects</p>
          </Link>
        </div>
      )}

      <Link href="/">
        <Image
          className="-sm:w-28"
          src="/logo.svg"
          alt="Sustainobles logo"
          width={196}
          height={46}
        />
        {/* <Image
          className="sm:hidden block"
          src={minLogo.src}
          alt="Sustainobles logo"
          width={38}
          height={36}
        /> */}
      </Link>

      <div className="-xl:hidden mr-24 flex items-center justify-center gap-5">
        <Link href="/" className="btn ">
          <p>Home</p>
        </Link>

        <Link href="/about" className="btn ">
          <p>About us</p>
        </Link>

        <Link href="/projects" className="btn">
          <p>Projects</p>
        </Link>
      </div>


      <div className="flex justify-center items-center -xl:flex-1 -xl:justify-end">
        <Link
          href="https://paystack.com/pay/sustainobles" 
          className="btn -sm:text-xs px-10 -sm:px-5 -sm:py-2.5 bg-secondary font-semibold"
          target="_blank"
         >
          <p className="text-primary">Donate</p>
        </Link>
      </div>

      <button
        onClick={() => setIsMenu(!isMenu)}
        className="ml-7 -xl:block hidden"
      >
        {!isMenu ? (
          <Image
            className="-sm:w-7"
            src={hamburger.src}
            alt="hamburger icon"
            width={35}
            height={35}
          />
        ) : (
          <Image
            className="-sm:w-5 ml-[7px]"
            src={cancel.src}
            alt="cancel icon"
            width={28}
            height={28}
          />
        )}
      </button>
    </nav>
  );
};

export default NavBar;
