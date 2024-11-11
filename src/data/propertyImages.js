import property2 from "../assets/property-details/property2.jpeg";
import property3 from "../assets/property-details/property3.jpeg";
import property4 from "../assets/property-details/property4.jpeg";
import property5 from "../assets/property-details/property5.jpeg";
import property6 from "../assets/property-details/property6.jpeg";
import property1 from "../assets/property-details/propertyOne.jpeg";

export const propertyImages = [
  {
    id: 1,
    largeImage: { src: property1, alt: "property1" },
    smallImages: [
      { src: property2, alt: "property2" },
      { src: property3, alt: "property3" },
    ],
  },
  {
    id: 2,
    largeImage: { src: property4, alt: "property4" },
    smallImages: [
      { src: property5, alt: "property5" },
      { src: property6, alt: "property6" },
    ],
  },
  {
    id: 3,
    largeImage: { src: property6, alt: "property6" },
    smallImages: [
      { src: property2, alt: "property2" },
      { src: property4, alt: "property4" },
    ],
  },
];