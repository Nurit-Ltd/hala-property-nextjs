import bedHero from "../assets/home/bed-hero.svg";
import dollarHero from "../assets/home/dollar-hero.svg";

// Updated heroItems array with dynamic options
export const heroItems = [
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
