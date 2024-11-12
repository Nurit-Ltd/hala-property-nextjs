import download from "../assets/property-details/download-app-pro.svg";
import exportIcon from "../assets/property-details/export-app-pro.svg";
import property2 from "../assets/property-details/property2.jpeg";
import property3 from "../assets/property-details/property3.jpeg";
import property1 from "../assets/property-details/propertyOne.jpeg";

export const propertyImageSliderData =[
  {
    image: property1,
    alt: "property1",
    buttons: [
      { icon: download, label: "Download" },
      { icon: exportIcon, label: "Request Floor Plan" },
    ],
  },
  {
    image: property2,
    alt: "property2",
    buttons: [
      { icon: download, label: "Download" },
      { icon: exportIcon, label: "Request Floor Plan" },
    ],
  },
  {
    image: property3,
    alt: "property3",
    buttons: [
      { icon: download, label: "Download" },
      { icon: exportIcon, label: "Request Floor Plan" },
    ],
  },
]

