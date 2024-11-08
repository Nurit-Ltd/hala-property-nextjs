"use client";
import { navItems } from "@/data/navItems";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import heartIcon from "../../../assets/home/heart.svg";
import logo from "../../../assets/home/logo-main.svg";
import starIcon from "../../../assets/home/starIcon.svg";

const Navbar = () => {
  const [currentPath, setCurrentPath] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Set the current path on initial load
      setCurrentPath(window.location.pathname);
    }
  }, []);

 

  const handleClick = (path) => {
    setCurrentPath(path);
  };

  // for dropdown

  const toggleDropdown = () => setIsOpen(!isOpen);

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

  return (
    <nav className="bg-darkBlue hidden lg:block">
      <div className="container_fluid">
        <div className="w-full h-24 flex items-center">
          <div className="w-full h-12 flex items-center justify-between">
            {/* Logo section */}
            <div className="flex items-center gap-2.5">
              <Image src={logo} alt="mainLogo" />
              <h4 className="text-[28px] font-Lexend tracking-[-4%] font-medium text-white">
                Hala Property
              </h4>
            </div>

            {/* menu list */}
            <ul className="flex items-center gap-1.5">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    onClick={() => handleClick(item.path)}
                    className={`px-3 py-1.5 ${
                      currentPath === item.path
                        ? "text-white border-b-[1.5px] border-white font-bold"
                        : "text-grey500 font-semibold hover:text-white duration-200"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <div
                ref={dropdownRef}
                className="relative inline-block text-left"
              >
                <button
                  onClick={toggleDropdown}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 ${
                    isOpen
                      ? "text-white border-b-[1.5px] border-white font-bold duration-200"
                      : "text-grey500 font-semibold"
                  }`}
                >
                  More <IoIosArrowDown />
                </button>

                <div
                  className={`absolute right-0 mt-2 w-[138px] bg-white border border-grey300 p-2 rounded-lg transition-all duration-300 transform ${
                    isOpen
                      ? "opacity-100 scale-100 visible"
                      : "opacity-0 scale-95 invisible"
                  }`}
                >
                  <div className="space-y-2">
                    <Link
                      href="/about-us"
                      passHref
                      className="block px-3 py-1.5 font-medium text-grey600 hover:bg-primary50 hover:text-grey900 duration-300 rounded"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/contact-us"
                      passHref
                      className="block px-4 py-2 font-medium text-grey600 hover:bg-primary50 hover:text-grey900 duration-300 rounded"
                    >
                      Contact Us
                    </Link>
                    <Link
                      href="/blog"
                      passHref
                      className="block px-4 py-2 font-medium text-grey600 hover:bg-primary50 hover:text-grey900 duration-300 rounded"
                    >
                      Blog
                    </Link>
                  </div>
                </div>
              </div>
            </ul>

            {/* Right-side buttons */}
            <div className="flex items-center gap-6">
              <Link
                href={"#"}
                className="w-10 h-10 rounded-full bg-white/[10%] backdrop-blur-[9px] flex items-center justify-center relative"
              >
                <Image src={heartIcon} alt="heartIcon" />
                <div className="absolute top-[-4px] right-[-4px] w-4 h-4 rounded-full bg-baseRed flex items-center justify-center">
                  <span className="font-medium text-[10px] text-white">2</span>
                </div>
              </Link>
              <div className="flex items-center gap-4">
                <Link
                  href={"#"}
                  className="px-5 py-2 h-12 rounded-lg border border-white/[30%] nav-ai-button-box flex items-center justify-center gap-2 text-white font-medium"
                >
                  <Image src={starIcon} alt="starIcon" />
                  Find Property with AI
                </Link>
                <Link
                  href={"#"}
                  className="h-12 px-8 py-2 bg-gradient-to-r from-[#0E5DF4] to-[#004BDC] border border-black/[8%] rounded-lg flex items-center justify-center text-white font-semibold "
                >
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
