"use client";

import Image from "next/image";
import Link from "next/link";
import { poppins } from "../landingPage/Two";
import ModalProjectsBottom from "./ModalProjectsBottom";
import { IModalProjectBottomProps } from "@/types";

const ModalProjects = ({
  directory,
  numberOfImages,
}: IModalProjectBottomProps) => {
  const handleBack = () => {
    history.back();
  };

  return (
    <div
      style={{ fontFamily: poppins.style.fontFamily }}
      className="max-h-screen min-h-screen w-screen max-w-[2000px] mx-auto fixed z-50 top-0 left-0 right-0 flex-1 text-primary pb-24 px-[60px] -md:px-4 overflow-y-scroll overflow-x-hidden modalGallery"
    >
      <div className="w-full flex justify-between items-center mb-6 sticky top-16 backdrop-blur-lg p-3 my-16 rounded-md">
        <button
          onClick={handleBack}
          className="flex items-center justify-center w-fit gap-3 text-[40px] -md:text-lg font-bold"
        >
          <Image
            alt="back"
            src="/arrow-left.svg"
            height={32}
            width={32}
            className="-md:h-[27px] -md:w-[23px]"
          />
          <p>Gallery</p>
        </button>

        <Link href="/">
          <Image
            alt="Sustainobles"
            src="/icon-primary.svg"
            height={73}
            width={68.74}
            className="-md:hidden"
          />
        </Link>
      </div>

      <ModalProjectsBottom
        directory={directory}
        numberOfImages={numberOfImages}
      />
    </div>
  );
};

export default ModalProjects;
