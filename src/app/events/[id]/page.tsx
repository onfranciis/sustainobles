"use client";

import Button from "@/components/ui/button";
import { Events } from "@/lib/events";
import Image, { StaticImageData } from "next/image";
import { notFound, useParams } from "next/navigation";
import calendarIcon from "../../../assets/calendar-icon.png";
import locationIcon from "../../../assets/location-icon.png";
import timeIcon from "../../../assets/time-icon.png";

export interface IEventPageProps {
  bannerImage: StaticImageData;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  googleMapUrl?: string;
  ticketUrl?: string;
}

const Project = () => {
  const { id } = useParams();
  const props = Events[id.toString()];

  if (!props) {
    notFound();
  }

  const detailIcons = [
    {
      icon: calendarIcon,
      text: props?.date,
    },
    {
      icon: timeIcon,
      text: props?.time,
    },
    {
      icon: locationIcon,
      text: props?.location,
    },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-12 text-xl text-[#1e1e1e]">
      <div className="relative w-full aspect-[1240/600] mb-12 bg-gray-300">
        <Image fill src={props?.bannerImage} alt="" />
      </div>

      <h1 className="mb-6 text-[30px] md:text-[40px] leading-tight font-semibold">
        {props?.title}
      </h1>

      <div className="flex justify-between flex-wrap mb-10 gap-x-12 gap-y-5">
        <div className="flex items-center gap-x-12 gap-y-5 flex-wrap">
          {detailIcons.map((icon, index) => {
            return (
              <div key={index} className="flex items-center gap-2">
                <Image className="w-[45px] h-[45px]" src={icon.icon} alt="" />
                <p className="">{icon.text}</p>
              </div>
            );
          })}
        </div>

        <Button className="">Buy Tickets</Button>
      </div>

      <div className="mb-10 space-y-3.5">
        <h2 className="text-[32px] font-semibold">Event Description</h2>

        <p>{props?.description}</p>
        <ul>
          <li>When:</li>
          <li>Event Starts:</li>
          <li>Where:</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-6 text-[40px] font-semibold">Location</h2>

        <div className="relative w-full aspect-[1240/600] mb-12 bg-gray-300">
          <iframe
            src={props?.googleMapUrl}
            width="100%"
            height="100%"
            style={{
              border: 0,
              display: props?.googleMapUrl ? "block" : "none",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Project;
