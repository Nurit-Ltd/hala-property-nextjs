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

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAiContext } from "@/contexts/AiContext";
import { useRouter } from "next/navigation";
import { TbCurrencyDirham } from "react-icons/tb";

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
      <div className="fixed top-0 left-0 right-0 z-[50] bg-darkBlue w-full h-[60px] flex items-center border-b border-black/[8%]">
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
        <div className="flex flex-col min-h-[calc(100vh-210px)]">
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
          <div id="middle-side" className="h-[250px] flex-grow overflow-y-auto px-4 pb-5">
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
          <div className=" px-4 flex justify-center gap-4 lg:gap-8 mt-6 ">
            <div className="language flex flex-col items-center w-full">
              <div className=" h-[30px] flex items-center justify-center px-4 py-2 rounded-md border w-full   text-grey600  ">
                <Select defaultValue="english">
                  <SelectTrigger icon={true} className="w-full text-sm p-0 h-auto border-0 bg-transparent ring-0 focus:ring-0 outline-none shadow-none rounded-none text-grey600 flex  items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                      <path
                        d="M10.0003 18.3332C5.39795 18.3332 1.66699 14.6022 1.66699 9.99984C1.66699 5.39746 5.39795 1.6665 10.0003 1.6665C14.6027 1.6665 18.3337 5.39746 18.3337 9.99984C18.3337 14.6022 14.6027 18.3332 10.0003 18.3332ZM8.09201 16.3893C7.28985 14.6881 6.79809 12.8117 6.68975 10.8332H3.38523C3.71533 13.4803 5.59732 15.6454 8.09201 16.3893ZM8.35924 10.8332C8.48457 12.8655 9.06516 14.7746 10.0003 16.4598C10.9355 14.7746 11.5161 12.8655 11.6414 10.8332H8.35924ZM16.6154 10.8332H13.3109C13.2026 12.8117 12.7108 14.6881 11.9087 16.3893C14.4033 15.6454 16.2853 13.4803 16.6154 10.8332ZM3.38523 9.1665H6.68975C6.79809 7.18798 7.28985 5.31156 8.09201 3.6103C5.59732 4.35428 3.71533 6.51942 3.38523 9.1665ZM8.35924 9.1665H11.6414C11.5161 7.13419 10.9355 5.22504 10.0003 3.53983C9.06516 5.22504 8.48457 7.13419 8.35924 9.1665ZM11.9087 3.6103C12.7108 5.31156 13.2026 7.18798 13.3109 9.1665H16.6154C16.2853 6.51942 14.4033 4.35428 11.9087 3.6103Z"
                        fill="#687588"
                      />
                    </svg>

                    <SelectValue placeholder="Selected Language" />
                    <FiChevronDown className="text-base" />
                  </SelectTrigger>
                  <SelectContent className="text-xs">
                    <SelectItem value="arabic">Arabic</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="currency flex flex-col items-center w-full">
              <div className=" h-[30px] flex items-center justify-center px-2 lg:px-4 py-2 rounded-md border  w-full  text-grey600  ">
                <Select defaultValue="usa">
                  <SelectTrigger icon={true} className="w-full lg:min-w-[140px] text-sm p-0 h-auto border-0 bg-transparent ring-0 focus:ring-0 outline-none shadow-none rounded-none text-grey600 flex  items-center gap-3">
                    <SelectValue placeholder="Select Currency" />
                    <FiChevronDown className="text-base" />
                  </SelectTrigger>
                  <SelectContent className="text-xs">
                    <SelectItem value="uae">
                      <div className="flex gap-2">
                        <TbCurrencyDirham />
                        UAE
                      </div>
                    </SelectItem>
                    <SelectItem value="usa">
                      <div className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width={21} height={20} viewBox="0 0 21 20" fill="none">
                          <path
                            d="M10.5042 18.3356C5.90187 18.3356 2.1709 14.6047 2.1709 10.0022C2.1709 5.3999 5.90187 1.66895 10.5042 1.66895C15.1066 1.66895 18.8376 5.3999 18.8376 10.0022C18.8376 14.6047 15.1066 18.3356 10.5042 18.3356ZM10.5042 16.6689C14.1862 16.6689 17.1709 13.6842 17.1709 10.0022C17.1709 6.32038 14.1862 3.33561 10.5042 3.33561C6.82233 3.33561 3.83757 6.32038 3.83757 10.0022C3.83757 13.6842 6.82233 16.6689 10.5042 16.6689ZM7.58757 11.6689H12.1709C12.401 11.6689 12.5876 11.4824 12.5876 11.2522C12.5876 11.0222 12.401 10.8356 12.1709 10.8356H8.83758C7.68697 10.8356 6.75423 9.9029 6.75423 8.75224C6.75423 7.60168 7.68697 6.66894 8.83758 6.66894H9.67092V5.00228H11.3376V6.66894H13.4209V8.33557H8.83758C8.60745 8.33557 8.4209 8.52215 8.4209 8.75224C8.4209 8.9824 8.60745 9.1689 8.83758 9.1689H12.1709C13.3215 9.1689 14.2542 10.1017 14.2542 11.2522C14.2542 12.4029 13.3215 13.3356 12.1709 13.3356H11.3376V15.0022H9.67092V13.3356H7.58757V11.6689Z"
                            fill="#687588"
                          />
                        </svg>
                        USA
                      </div>
                    </SelectItem>
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
