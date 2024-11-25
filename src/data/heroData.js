import bedHero from "../assets/home/bed-hero.svg";
import dollarHero from "../assets/home/dollar-hero.svg";

// Updated heroItems array with dynamic options
export const heroItems = [
  {
    icon: bedHero,
    title: "Bedrooms",
    description: "Select bedrooms",
    type: "buttonGroup",
    options: ["Any", "1", "2", "3", "4", "5", "6+"],
  },
  {
    icon: dollarHero,
    title: "Price",
    description: "Set your budget",
    type: "rangeSlider",
    range: { min: 500000, max: 8500000 },
  },
];
