"use client";

import Image from "next/image";
import { memo, useState } from "react";

interface IDonateCardTopProp {
  selection: string;
  setSelection: (data: string) => void;
}

const DonateCardTop = ({
  selection = options[0]?.name,
  setSelection,
}: IDonateCardTopProp) => {
  return (
    <div className="w-fit">
      <div
        className={`mx-auto border-2 border-primary bg-secondary w-fit rounded-[20px] overflow-hidden flex justify-between gap-1`}
      >
        {options.map((option) => (
          <button
            key={option.name}
            className={`text-[32px] -lg:text-2xl -md:text-lg -sm:text-base font-semibold ${
              selection === option.name ? "text-secondary" : "text-primary"
            } py-[8px] px-[62px] -lg:px-12 -md:px-10 -sm:px-7 ${
              selection === option.name ? "bg-primary" : "bg-secondary"
            } rounded-[20px] ${
              selection === "Money" ? "sm:rounded-l-none" : "sm:rounded-r-none"
            }`}
            onClick={() => setSelection(option.name)}
          >
            {option.name}
          </button>
        ))}
      </div>

      {selection === "Material" ? (
        <p className="font-medium text-xl -lg:text-base -md:text-sm -sm:text-xs inline-flex justify-end gap-2 my-[15px] w-full">
          <Image
            alt=""
            width={25}
            height={25}
            src="/landing-donate-left.svg"
            className="mt-[-5px]"
          />
          Click here to donate money
        </p>
      ) : (
        <p className="font-medium text-xl -lg:text-base -md:text-sm -sm:text-xs inline-flex gap-2 my-[15px] w-full">
          Click here to donate materials
          <Image
            alt=""
            width={25}
            height={25}
            src="/landing-donate-right.svg"
            className="mt-[-5px]"
          />
        </p>
      )}
    </div>
  );
};

const options = [
  {
    name: "Money",
  },
  {
    name: "Material",
  },
];

export default memo(DonateCardTop);
