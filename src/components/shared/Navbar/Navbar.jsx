"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../../../assets/home/logo-main.svg";

const Navbar = () => {
  const [currentPath, setCurrentPath] = useState("");

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
    { label: "Map view", path: "/map-view" },
  ];

  const handleClick = (path) => {
    setCurrentPath(path);
  };

  return (
    <nav className="bg-darkBlue">
      <div className="container_fluid">
        <div className="w-full h-24 flex items-center">
          <div className="w-full h-12 flex items-center justify-between">
            {/* Logo section */}
            <div className="flex items-center gap-2.5">
              <Image src={logo} alt="mainLogo" />
              <h4>container_fluid</h4>
            </div>

           {/* menu list */}
            <ul className="flex items-center gap-1.5">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    onClick={() => handleClick(item.path)}
                    className={`px-3 py-1.5 font-semibold ${
                      currentPath === item.path
                        ? "text-white border-b-2 border-white"
                        : "text-grey500"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
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
