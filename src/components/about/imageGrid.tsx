import React from "react";
import Image, { StaticImageData } from "next/image";

interface ImageGridProps {
  imgOne: StaticImageData;
  imgTwo: StaticImageData;
  imgThree: StaticImageData;
  imgFour: StaticImageData;
}

const ImageGrid: React.FC<ImageGridProps> = ({ imgOne, imgTwo, imgThree, imgFour }) => {
  return (
    <div className="w-max mx-auto flex-shrink-0 grid gap-2 grid-cols-2">
      <div className="flex flex-col gap-2">
        <Image
          className="h-[392px] -md:h-[294px] -sm:h-[208px] w-[295px] -md:w-[221px] -sm:w-[165px] object-cover rounded-[32px] -sm:rounded-2xl"
          src={imgOne}
          height={500}
          width={500}
          alt=""
        />
        <Image
          className="h-[352px] -md:h-[264px] -sm:h-[186px] w-[295px] -md:w-[221px] -sm:w-[169px] object-cover rounded-[32px] -sm:rounded-2xl"
          src={imgTwo}
          height={500}
          width={500}
          alt=""
        />
      </div>

      <div className="flex flex-col justify-end relative">
        <div className="w-max h-max p-2 pr-0 bg-[#F6FFDC] absolute z-10 bottom-[400px] -md:bottom-[300px] -sm:bottom-[215px] right-0 rounded-[32px] -sm:rounded-[18px]">
          <Image
            className="h-[276px] -md:h-[207px] -sm:h-[147px] w-[390px] -md:w-[293px] -sm:w-[223px] object-cover rounded-[32px] -sm:rounded-2xl"
            src={imgThree}
            height={500}
            width={500}
            alt=""
          />
        </div>
        <Image
          className="h-[400px] -md:h-[300px] -sm:h-[213px] w-[295px] -md:w-[221px] -sm:w-[169px] object-cover rounded-[32px] -sm:rounded-2xl"
          src={imgFour}
          height={500}
          width={500}
          alt=""
        />
      </div>
    </div>
  )
}

export default ImageGrid