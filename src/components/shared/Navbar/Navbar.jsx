"use client";
import { useAiContext } from "@/contexts/AiContext";
import { navItems } from "@/data/navItems";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import heartIcon from "../../../assets/home/heart.svg";
import logo from "../../../assets/home/logo-main.svg";
import starIcon from "../../../assets/home/starIcon.svg";

const Navbar = () => {
  const [currentPath, setCurrentPath] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  const { isAiOpen, setIsAiOpen } = useAiContext();

  const handleAiClick = () => {
    setIsAiOpen(!isAiOpen);
    router.push("/buy");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const handleClick = (path) => {
    setCurrentPath(path);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Check if the current path matches any dropdown item
  const isDropdownActive = ["/about-us", "/contact-us", "/blog"].includes(currentPath);

  return (
    <nav className="hidden lg:block bg-darkBlue navbar-box-shadow max-w-[1920px] mx-auto">
      <div className="container_fluid">
        <div className="w-full h-24 flex items-center">
          <div className="w-full h-12 flex items-center justify-between">
            {/* Logo section */}
            <Link href={"/"} className="flex items-center gap-1 xl:gap-2.5">
              <Image src={logo} alt="mainLogo" className="w-8 h-8 xl:w-11 xl:h-11" />
              <h4 className="text-xl xl:text-[28px] font-Lexend tracking-[-4%] font-medium text-white">Hala Property</h4>
            </Link>

            {/* menu list */}
            <ul className="flex items-center gap-1.5">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link href={item.path} onClick={() => handleClick(item.path)} className={`px-1 xl:px-3 py-1 xl:py-1.5 ${currentPath === item.path ? "text-white border-b-[1.5px] border-white font-bold" : "text-grey500 font-semibold hover:text-white duration-200"}`}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <div ref={dropdownRef} className="relative inline-block text-left">
                <button onClick={toggleDropdown} className={`inline-flex items-center gap-1.5 px-3 py-1.5 duration-300 ${isDropdownActive ? "text-white border-b-[1.5px] border-white font-bold" : "text-grey500 font-semibold"}`}>
                  More <IoIosArrowDown className={`transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`} />
                </button>

                <div className={`absolute right-0 mt-2 w-[138px] bg-white border border-grey300 p-2 rounded-lg transition-all duration-300 transform ${isOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}>
                  <div className="space-y-2">
                    <Link href="/about-us" passHref onClick={() => handleClick("/about-us")} className={`block px-3 py-1.5 font-medium rounded duration-300 ${currentPath === "/about-us" ? "bg-primary50 text-grey900" : "text-grey600 hover:bg-primary50 hover:text-grey900"}`}>
                      About Us
                    </Link>
                    <Link href="/contact-us" passHref onClick={() => handleClick("/contact-us")} className={`block px-3 py-2 font-medium rounded duration-300 ${currentPath === "/contact-us" ? "bg-primary50 text-grey900" : "text-grey600 hover:bg-primary50 hover:text-grey900"}`}>
                      Contact Us
                    </Link>
                    <Link href="/blog" passHref onClick={() => handleClick("/blog")} className={`block px-3 py-2 font-medium rounded duration-300 ${currentPath === "/blog" ? "bg-primary50 text-grey900" : "text-grey600 hover:bg-primary50 hover:text-grey900"}`}>
                      Blog
                    </Link>
                  </div>
                </div>
              </div>
            </ul>

            {/* Right-side buttons */}
            <div className="flex items-center gap-6">
              <Link href={"#"} className="w-10 h-10 rounded-full hover:bg-white/[20%] bg-white/[10%] backdrop-blur-[9px] flex items-center justify-center relative">
                <Image src={heartIcon} alt="heartIcon" />
                <div className="absolute top-[-4px] right-[-4px] w-4 h-4 rounded-full bg-baseRed flex items-center justify-center">
                  <span className="font-medium text-[10px] text-white">2</span>
                </div>
              </Link>
              <div className="flex items-center gap-2 xl:gap-4">
                <button onClick={handleAiClick} className="cursor-pointer px-2 xl:px-5 py-2 h-12 rounded-lg border border-white/[30%] nav-ai-button-box flex items-center justify-center gap-1 xl:gap-2 text-xs xl:text-base text-white font-medium duration-500">
                  <Image src={starIcon} alt="starIcon" />
                  Find Property with AI
                </button>
                <Link href={"/auth"} className="h-12 px-3 xl:px-8 py-2 bg-gradient-to-r from-[#0E5DF4] to-[#004BDC] border border-black/[8%] text-xs xl:text-base rounded-lg flex items-center justify-center text-white font-semibold hover:from-[#0E5DF4CC] hover:to-[#004BDCCC] transition-all duration-300 ease-in-out">
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
