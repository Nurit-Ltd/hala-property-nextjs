"use client";
import { navItems } from "@/data/navItems";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import aiIcon from "../../../assets/home/aiIcon.svg";
import closeIcon from "../../../assets/home/closeIcon.svg";
import heartMenu from "../../../assets/home/heart-sm-menu.svg";
import logoIconSm from "../../../assets/home/logoIconSm.svg";
import menubar from "../../../assets/home/menubar.svg";
import signInIcon from "../../../assets/home/signInIcon.svg";
import aiSp from "../../../assets/home/sparkles-ai.svg";
import whatsApp from "../../../assets/home/whatsApp.svg";

import { useAiContext } from "@/contexts/AiContext";
import { useRouter } from "next/navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import locationIcon from "@/assets/home/location-hero.svg";
import usd from "@/assets/nav/Flag_of_the_United_States.svg";
import uae from "@/assets/nav/Flag_of_the_United_Arab_Emirates.svg";

const NavSmall = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const { isAiOpen, setIsAiOpen } = useAiContext();

  const handleAiClick = () => {
    setIsAiOpen(!isAiOpen);
    // navigate to "/buy"
    router.push("/buy"); // Navigate to the "/buy" route
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <div className="lg:hidden">
      <div className="fixed top-0 left-0 right-0 z-30 bg-darkBlue w-full h-[60px] flex items-center border-b border-black/[8%]">
        <div className="w-full container_fluid">
          <nav className="w-full flex items-center justify-between">
            <Link href={"/"} className="flex items-center gap-[10px]">
              <div className="w-6 h-6 rounded bg-logBg logo-icon-shadow flex items-center justify-center">
                <Image src={logoIconSm} alt="logoIconSm" />
              </div>
              <h4 className="text-lg font-bold text-white">Hala Property</h4>
            </Link>
            <div className="flex items-center gap-4">
              <button onClick={handleAiClick}>
                <Image src={aiIcon} alt="aiIcon" />
              </button>
              <button onClick={toggleMenu}>
                <Image src={menubar} alt="menubar" />
              </button>
            </div>
          </nav>
        </div>
      </div>

      {isMenuOpen && <div onClick={toggleMenu} className="fixed top-0 left-0 right-0 h-[60px] bg-black opacity-50 z-40"></div>}

      {isMenuOpen && <div onClick={toggleMenu} className="fixed top-[60px] inset-x-0 bottom-0 bg-black opacity-50 z-50"></div>}

      <div className={`fixed top-[60px] right-0 z-50 h-full w-[70%] bg-white shadow-lg transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col min-h-[calc(100vh-160px)]">
          {/* Top section */}
          <div id="top-side" className="px-4 pt-4 pb-5 flex items-center justify-between">
            <h4 className="text-darkBlue font-bold">Welcome</h4>
            <button onClick={toggleMenu}>
              <Image src={closeIcon} alt="closeIcon" />
            </button>
          </div>
          <div className="px-4">
            <Link onClick={toggleMenu} href="/auth" className="w-full h-[38px] bg-primary rounded-lg flex items-center justify-center gap-2">
              <Image src={signInIcon} alt="signInIcon" />
              <h4 className="font-semibold text-white">Sign in</h4>
            </Link>
          </div>

          {/* Middle section with scroll */}
          <div id="middle-side" className="h-[240px] flex-grow overflow-y-auto px-4 pb-5">
            <div className="w-full h-[1px] bg-grey300 my-4"></div>
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link onClick={toggleMenu} href={`${item.path}`} className="font-semibold text-grey600">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="w-full h-[1px] bg-grey300 my-4"></div>
            <Link onClick={toggleMenu} href={"#"} className="py-2 flex items-center gap-4">
              <Image src={heartMenu} alt="heartMenu" />
              <h4 className="font-semibold text-grey600">Favorites</h4>
            </Link>
            <div className="w-full h-[1px] bg-grey300 my-4"></div>
            <div className="pb-4 w-full">
              <button onClick={toggleDropdown} className="flex items-center justify-between w-full font-semibold text-grey600">
                <span>More</span>
                {isOpen ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              {/* Dropdown Items */}
              {isOpen && (
                <div className="mt-4 px-4">
                  <ul className="space-y-3">
                    <li>
                      <Link onClick={toggleMenu} href="/about-us" className="font-semibold text-grey600">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link onClick={toggleMenu} href="/blog" className="font-semibold text-grey600">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link onClick={toggleMenu} href="/contact-us" className="font-semibold text-grey600">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          {/* Bottom section */}
          <div id="bottom-side" className="px-4 py-5 flex flex-col gap-2">
            <Link onClick={toggleMenu} href="#" className="w-full h-[38px] border border-[#03A841] bg-transparent rounded-lg flex items-center justify-center gap-2 font-semibold text-[#03A841]">
              <Image src={whatsApp} alt="whatsApp" />
              WhatsApp
            </Link>
            <button onClick={handleAiClick} className="w-full h-[38px] nav-ai-button-box rounded-lg border border-white/[30%] flex items-center justify-center gap-2">
              <Image src={aiSp} alt="aiSp" />
              <h4 className="font-semibold text-white">Find Property with AI</h4>
            </button>
          </div>
          <div className=" px-4 flex justify-center gap-4 lg:gap-8 mt-10 ">
            <div className="country flex flex-col items-center">
              <h3 className="font-semibold text-base mb-2 text-grey600">Country</h3>
              <div className=" max-w-[150px] h-[30px] flex items-center justify-center px-2 lg:px-4 py-2 rounded-md border    text-grey600  ">
                <Select defaultValue="uae">
                  <SelectTrigger icon={true} className="w-full lg:min-w-[140px] text-sm p-0 h-auto border-0 bg-transparent ring-0 focus:ring-0 outline-none shadow-none rounded-none text-grey600 flex  items-center gap-3">
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent className="text-xs">
                    <SelectItem value="uae">
                      <div className="flex gap-2">
                        <Image src={uae} alt="country" className=" w-7  " />
                        UAE
                      </div>
                    </SelectItem>
                    <SelectItem value="usa">
                      <div className="flex gap-2">
                        <Image src={usd} alt="country" className=" w-7  " />
                        USA
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="language flex flex-col items-center">
              <h3 className="font-semibold text-base mb-2 text-grey600">Language</h3>
              <div className=" max-w-[150px] h-[30px] flex items-center justify-center px-4 py-2 rounded-md border    text-grey600  ">
                <Select defaultValue="english">
                  <SelectTrigger icon={true} className="w-full lg:min-w-[140px] text-sm p-0 h-auto border-0 bg-transparent ring-0 focus:ring-0 outline-none shadow-none rounded-none text-grey600 flex  items-center gap-3">
                    <SelectValue placeholder="Selected Language" />
                  </SelectTrigger>
                  <SelectContent className="text-xs">
                    <SelectItem value="arabic">Arabic</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavSmall;
