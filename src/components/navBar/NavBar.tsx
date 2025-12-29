"use client";

import Image from "next/image";
import Link from "next/link";
import hamburger from "../../assets/hamburger.svg";
import cancel from "../../assets/cancel.svg";
import { useState } from "react";

const NavBar = () => {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <div className="sticky -top-0 z-50 w-full bg-primary-gradient ">
      <nav
        className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-10 xl:px-20 py-3 flex items-center
      justify-between relative w-full"
      >
        {isMenu && (
          <div
            className="w-full absolute top-[100%] left-0 bg-primary-gradient flex flex-col
          items-center py-6 gap-6 min-[900px]:hidden drop-shadow-lg"
          >
            {NavLinks.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.url}
                  onClick={() => setIsMenu(false)}
                  className=""
                >
                  <p>{link.title}</p>
                </Link>
              );
            })}
          </div>
        )}

        <Link href="/">
          <Image
            className="w-40 max-sm:w-32"
            src="/logo.svg"
            alt="Sustainobles logo"
            width={196}
            height={46}
          />
        </Link>

        <div className="max-[900px]:hidden flex items-center justify-center gap-5">
          {NavLinks.map((link, index) => {
            return (
              <Link key={index} href={link.url} className="btn">
                <p>{link.title}</p>
              </Link>
            );
          })}
        </div>

        <div className="flex justify-center items-center -xl:flex-1 -xl:justify-end">
          <Link
            href="/#Donate"
            className="btn max-sm:rounded-lg max-sm:text-[10px] px-6 sm:px-10 py-2.5 bg-white font-semibold"
            scroll
          >
            <span className="bg-primary-gradient bg-clip-text text-transparent inline-block max-sm:text-sm">
              Donate
            </span>
          </Link>

          <button
            onClick={() => setIsMenu(!isMenu)}
            className="ml-7 min-[900px]:hidden"
          >
            {!isMenu ? (
              <Image
                className="w-6"
                src={hamburger.src}
                alt="hamburger icon"
                width={24}
                height={24}
              />
            ) : (
              <Image
                className="w-6"
                src={cancel.src}
                alt="cancel icon"
                width={24}
                height={24}
              />
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

const NavLinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About us",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Events",
    url: "/events",
  },
];
