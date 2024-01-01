"use client";

import Image from "next/image";
import Link from "next/link";
import hamburger from "../../assets/hamburger.svg"
import cancel from "../../assets/cancel.svg"
import minLogo from "../../assets/min-logo.svg"
import { useState } from "react";

const NavBar = () => {
  const [isMenu, setIsMenu] = useState(false); 

  return (
    <nav className="fixed z-50 top-0 flex items-center justify-between w-full px-[40px] -md:px-[30px] -sm:px-5 py-3 bg-primary">
      {isMenu &&
        <div className="w-full py-8 flex gap-14 flex-col items-center absolute top-[72px] left-0 bg-primary bg-opacity-[99%] text-2xl font-bold leading-tight">
          <Link href="/" onClick={() => setIsMenu(false)} className="">
            <p>Home</p>
          </Link>

          <Link href="/about" onClick={() => setIsMenu(false)} className="">
            <p>About us</p>
          </Link>

          <Link href="/projects" onClick={() => setIsMenu(false)} className="flex items-center gap-1">
            <p>Projects</p>
            <Image src="/arrow-down.svg" alt="" width={20} height={20} />
          </Link>

          <Link href="" onClick={() => setIsMenu(false)} className="">
            <p>Gallery</p>
          </Link>

          <Link href="" onClick={() => setIsMenu(false)} className="">
            <p>Blog</p>
          </Link>
        </div>      
      }

      <Link href="/">
        <Image
          className="-sm:hidden"
          src="/logo.svg"
          alt="Sustainobles logo"
          width={196}
          height={46}
        />
        <Image
          className="sm:hidden block"
          src={minLogo.src}
          alt="Sustainobles logo"
          width={38}
          height={36}
        />
      </Link>

      <div className="flex items-center justify-center">
        <div className="-xl:hidden mr-24 flex items-center justify-center gap-5">
          <Link href="/" className="btn ">
            <p>Home</p>
          </Link>

          <Link href="/about" className="btn ">
            <p>About us</p>
          </Link>

          <Link href="/projects" className="btn flex items-center gap-1">
            <p>Projects</p>
            <Image src="/arrow-down.svg" alt="" width={20} height={20} />
          </Link>

          <Link href="" className="btn ">
            <p>Gallery</p>
          </Link>

          <Link href="" className="btn ">
            <p>Blog</p>
          </Link>
        </div>
        <button 
          onClick={() => setIsMenu(!isMenu)}
          className="mr-12 -xs:mr-6 -xl:block hidden"
        >
          {!isMenu ? 
            <Image
              src={hamburger.src}
              alt="hamburger icon"
              width={35}
              height={35}
            />
          :
            <Image
              src={cancel.src}
              alt="cancel icon"
              width={28}
              height={28}
            />
          }
        </button>

        <Link href="" className="btn bg-secondary font-semibold">
          <p className="text-primary px-7">Donate</p>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
