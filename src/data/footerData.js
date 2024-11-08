import locationIcon from "../assets/home/location-icon.svg";
import logo from "../assets/home/logo-main.svg";
import emailICon from "../assets/home/mail-icon.svg";
import dollarIcon from "../assets/home/usd-icon.svg";
import worldMapIcon from "../assets/home/world-icon.svg";

export const footerData = {
  companyInfo: {
    name: "Hala Property",
    address: "Dubai Creek Harbour Dubai, United Arab Emirates",
    email: "info@halaproperty.com",
    logo:logo,
    locationIcon:locationIcon,
    emailIcon:emailICon
  },
  menu: [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Buy", href: "#" },
    { label: "Contact", href: "#" },
  ],
  resources: [
    { label: "Support", href: "#" },
    { label: "Newsletter", href: "#" },
    { label: "Terms & conditions", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
  socialLinks: [
    { label: "Facebook", href: "#" },
    { label: "X", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Tiktok", href: "#" },
  ],
  languageOptions: [
    { label: "English", icon: worldMapIcon },
    { label: "USD", icon: dollarIcon },
  ],
  copyright: "© 2024 Hala Property, Inc. All Rights Reserved.",
};