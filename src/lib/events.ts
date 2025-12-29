import { IEventPageProps } from "@/app/events/[id]/page";

import charityFootballMatchBanner from "@/assets/project-2.jpg";

export const Events: Record<string, IEventPageProps> = {
  "sustainobles-charity-football-match": {
    bannerImage: charityFootballMatchBanner,
    title:
      "Sustainobles Charity Football Match: Influencers VS Celebrities, Female & Male",
    date: "Saturday, April 2025",
    time: "11am",
    location: "Campus Mini Stadium",
    description:
      "Join us for an exciting charity football match where influencers take on celebrities in a thrilling showdown to raise funds for out-of-school children. Witness the clash of talents as both teams battle it out on the field for a noble cause. Your support will help us provide education and resources to children in need. Don't miss this opportunity to make a difference while enjoying an action-packed game!",
    googleMapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.554668158517!2d3.3947259999999995!3d6.4511712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b1736400001%3A0x525a13b104be3a1c!2sCampus%20Mini%20Stadium!5e0!3m2!1sen!2sng!4v1767037542742!5m2!1sen!2sng",
    ticketUrl: "https://www.sustainobles.com/donate",
  },
};
