"use client";

import Image from "next/image";
import { memo, useState } from "react";

interface IDonateCardTopProp {
  selection: string;
  setSelection: (option: string) => void;
}

const DonateCardTop = ({
  selection = options[0],
  setSelection,
}: IDonateCardTopProp) => {
  return (
    <div className={`mx-auto border border-[#701E00] bg-[#595959] rounded-lg overflow-hidden flex justify-between`}>
      {options.map((option) => (
        <button
          key={option}
          className={`h-10 md:h-[50px] w-full text-base md:text-2xl font-semibold text-white rounded-lg ${
            selection === option && "bg-primary-gradient"
          } ${
            selection === "Money" ? "sm:rounded-l-none" : "sm:rounded-r-none"
          }`}
          onClick={() => setSelection(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

const options = ["Money", "Material"]

export default memo(DonateCardTop);
