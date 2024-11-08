"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../../../assets/home/logo-main.svg";

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

  // Define the navigation items
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Buy", path: "/buy" },
    { label: "Golden Visa", path: "/golden-visa" },
    { label: "Map View", path: "/map-view" },
  ];

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
    <nav className="bg-darkBlue">
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
                        : "text-grey500 font-semibold"
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
                  className={`absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-300 transform ${
                    isOpen
                      ? "opacity-100 scale-100 visible"
                      : "opacity-0 scale-95 invisible"
                  }`}
                >
                  <div className="py-1">
                    <Link
                      href="/about-us"
                      passHref
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/contact-us"
                      passHref
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Contact Us
                    </Link>
                    <Link
                      href="/blog"
                      passHref
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Blog
                    </Link>
                  </div>
                </div>
              </div>
            </ul>

            {/* Right-side buttons */}
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 text-white">Love</button>
              <button className="px-3 py-1 text-white">Find Al</button>
              <button className="px-3 py-1 text-white">Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
