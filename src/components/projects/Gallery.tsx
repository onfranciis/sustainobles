"use client";

import { IModalProjectBottomProps } from "@/types";
import ModalProjectsBottom from "./ModalProjectsBottom";
import Image from "next/image";

const Gallery = ({ directory, numberOfImages }: IModalProjectBottomProps) => {
  const handleBack = () => {
    history.back();
  };

  return (
    <main className="bg-white px-[60px] py-[50px] min-h-screen -md:px-4">
      <div className="w-full flex justify-between items-center mb-6 sticky top-16 backdrop-blur-lg">
        <button
          onClick={handleBack}
          className="flex items-center justify-center w-fit gap-3 text-[40px] -md:text-lg text-primary font-bold"
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
      </div>

      <ModalProjectsBottom
        directory={directory}
        numberOfImages={numberOfImages}
      />
    </main>
  );
};

export default Gallery;
