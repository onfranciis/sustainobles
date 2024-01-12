import { StaticImageData } from "next/image";
import { CSSProperties } from "react";

export interface IDonateCardBottomProp {
  selection: string;
  amount: string;
  name: string;
  phoneNumber: string;
  item: string;
  setAmount: (data: string) => void;
  setName: (data: string) => void;
  setPhoneNumber: (data: string) => void;
  setItem: (data: string) => void;
}

export interface IProjectCardProp {
  Data: {
    id?: string;
    title: string;
    body: string;
    image: string;
    url: string;
    type: "One" | "Two";
  };
}

export interface IModalProjectBottomProps {
  numberOfImages: number;
  directory: string;
}

export interface IGridPlugin {
  [value: string]: CSSProperties;
}

export interface IImageOverlay {
  img: StaticImageData;
  title: string;
  body: string;
  link: {
    disabled: boolean;
    text: string;
    address: string;
  };
}