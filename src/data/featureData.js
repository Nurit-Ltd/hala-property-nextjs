import airConditioning from "../assets/property-details/air-conditioning.svg";
import balcony from "../assets/property-details/balcony.svg";
import bar from "../assets/property-details/bar.svg";
import elevator from "../assets/property-details/elevator.svg";
import feaLandSco from "../assets/property-details/fea-landsco.svg";
import fireplace from "../assets/property-details/fireplace.svg";
import garage from "../assets/property-details/garage.svg";
import garden from "../assets/property-details/garden.svg";
import gasStove from "../assets/property-details/gas-stove.svg";
import laundryRoom from "../assets/property-details/laundry-room.svg";
import propertyHome from "../assets/property-details/prope-home.svg";
import terrace from "../assets/property-details/terrace.svg";

export const featureData = [
  {
    category: "Lot",
    features: [
      { image: propertyHome, label: "Renovated" },
      { image: feaLandSco, label: "Mountain View" },
    ],
  },
  {
    category: "Indoor",
    features: [
      { image: elevator, label: "Elevator" },
      { image: airConditioning, label: "Air Conditioning" },
      { image: bar, label: "Bar" },
      { image: laundryRoom, label: "Laundry Room" },
      { image: fireplace, label: "Fireplace" },
      { image: gasStove, label: "Gas Stovetop" },
    ],
  },
  {
    category: "Outdoor",
    features: [
      { image: terrace, label: "Terrace" },
      { image: garage, label: "Garage" },
      { image: garden, label: "Garden" },
      { image: balcony, label: "Balcony" },
    ],
  },
];