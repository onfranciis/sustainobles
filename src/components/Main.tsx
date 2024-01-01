"use client";

import gsap from "gsap";
import splitType from "split-type";
import { useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const Main = () => {
  const comingRef = useRef<HTMLParagraphElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const twitterRef = useRef<HTMLAnchorElement>(null);
  const instagramRef = useRef<HTMLAnchorElement>(null);
  const tiktokRef = useRef<HTMLAnchorElement>(null);
  const facebookRef = useRef<HTMLAnchorElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (comingRef.current) {
      const st = new splitType(comingRef?.current);
      gsap.set(st.chars, {
        y: 100,
      });
      gsap.set(comingRef.current, {
        opacity: 1,
      });
      gsap.set(linksRef.current, {
        opacity: 1,
      });

      gsap.to(st.chars, {
        y: 0,
        stagger: 0.05,
      });
    }

    gsap.to(
      [
        twitterRef.current,
        instagramRef.current,
        tiktokRef.current,
        facebookRef.current,
      ],
      {
        scale: 1,
        opacity: 1,
        stagger: 0.1,
        delay: 0.8,
      }
    );
  }, []);

  return (
    <div className="Main">
      <div className=" comingParent">
        <p className="text-[10vw] coming" ref={comingRef}>
          Coming soon...
        </p>
      </div>

      <div className="links" ref={linksRef}>
        <Link href="https://x.com/sustainobles/" ref={twitterRef}>
          <Image alt="" src="/twitter.svg" height={25} width={25} />
        </Link>

        <Link href="" ref={instagramRef}>
          <Image alt="" src="/instagram.svg" height={25} width={25} />
        </Link>

        <Link href="" ref={tiktokRef}>
          <Image alt="" src="/tiktok.svg" height={25} width={25} />
        </Link>

        <Link href="" ref={facebookRef}>
          <Image alt="" src="/facebook.svg" height={25} width={25} />
        </Link>
      </div>
    </div>
  );
};

export default Main;
