import bedHero from "../assets/home/bed-hero.svg";
import dollarHero from "../assets/home/dollar-hero.svg";
import locationIcon from "../assets/home/location-hero.svg";

// Updated heroItems array with dynamic options
export const heroItems = [
  {
    icon: locationIcon,
    title: "Location",
    description: "Choose your area",
    options: [
      "Dubai",
      "Abu Dhabi",
      "Sharjah",
      "Ajman",
      "Umm Al Quwain",
      "Ras Al Khaimah",
    ],
  },
  {
    icon: bedHero,
    title: "Beds",
    description: "Select bedrooms",
    options: ["1 Bed", "2 Beds", "3 Beds", "4 Beds", "5+ Beds"],
  },
  {
    icon: dollarHero,
    title: "Price",
    description: "Set your budget",
    options: [
      "$500 - $1,000",
      "$1,000 - $5,000",
      "$5,000 - $10,000",
      "$10,000+",
    ],
  },
];
