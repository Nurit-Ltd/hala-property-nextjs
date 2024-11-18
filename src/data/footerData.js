import locationIcon from "../assets/home/location-icon.svg";
import logo from "../assets/home/logo-main.svg";
import emailICon from "../assets/home/mail-icon.svg";
// import dollarIcon from "../assets/home/usd-icon.svg";
// import worldMapIcon from "../assets/home/world-icon.svg";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { TbWorld } from "react-icons/tb";
import { FaFacebookF, FaLinkedinIn, FaXTwitter, FaTiktok } from "react-icons/fa6";

export const footerData = {
  companyInfo: {
    name: "Hala Property",
    address: "Dubai Creek Harbour Dubai, United Arab Emirates",
    email: "info@halaproperty.com",
    logo: logo,
    locationIcon: locationIcon,
    emailIcon: emailICon,
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
    { label: "Facebook", icon: FaFacebookF, href: "#" },
    { label: "X", icon: FaXTwitter, href: "#" },
    { label: "LinkedIn", icon: FaLinkedinIn, href: "#" },
    { label: "Tiktok", icon: FaTiktok, href: "#" },
  ],
  languageOptions: [
    { label: "English", icon: TbWorld },
    { label: "USD", icon: HiOutlineCurrencyDollar },
  ],
  copyright: "© 2024 Hala Property, Inc. All Rights Reserved.",
};
