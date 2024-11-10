"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import aiIcon from "../../../assets/home/aiIcon.svg";
import closeIcon from "../../../assets/home/closeIcon.svg";
import logoIconSm from "../../../assets/home/logoIconSm.svg";
import menubar from "../../../assets/home/menubar.svg";
import signInIcon from "../../../assets/home/signInIcon.svg";
import aiSp from "../../../assets/home/sparkles-ai.svg";
import whatsApp from "../../../assets/home/whatsApp.svg";

const NavSmall = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              <button>
                <Image src={aiIcon} alt="aiIcon" />
              </button>
              <button onClick={toggleMenu}>
                <Image src={menubar} alt="menubar" />
              </button>
            </div>
          </nav>
        </div>
      </div>

      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed top-0 left-0 right-0 h-[60px] bg-black opacity-50 z-40"
        ></div>
      )}

      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed top-[60px] inset-x-0 bottom-0 bg-black opacity-50 z-40"
        ></div>
      )}

      <div
        className={`fixed top-[60px] right-0 z-50 h-full w-[70%] bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-4 pt-4 pb-5">
          <div id="top-side" className="flex items-center justify-between">
            <h4 className="text-darkBlue font-bold">Welcome</h4>
            <button onClick={toggleMenu}>
              <Image src={closeIcon} alt="closeIcon" />
            </button>
          </div>
          <div className="w-full h-[1px] bg-grey300 my-4"></div>
          <div id="middle-side" className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem ab
            perspiciatis illo recusandae nihil culpa atque animi porro in quia
            laboriosam totam temporibus, facilis, cupiditate optio, commodi
            similique fugiat sunt?
          </div>
          <div id="bottom-side" className="flex flex-col gap-2">
            <Link
              href={"#"}
              className="w-full h-[38px] bg-primary rounded-lg flex items-center justify-center gap-2"
            >
              <Image src={signInIcon} alt="signInIcon" />
              <h4 className="font-semibold text-white">Sign in</h4>
            </Link>
            <button className="w-full h-[38px] border border-[#03A841] bg-transparent rounded-lg flex items-center justify-center gap-2 font-semibold text-[#03A841]">
              <Image src={whatsApp} alt="whatsApp" />
              WhatsApp
            </button>
            <Link
              href={"#"}
              className="w-full h-[38px] bg-primary rounded-lg border border-white/[30%] nav-ai-button-box flex items-center justify-center gap-2"
            >
              <Image src={aiSp} alt="aiSp" />
              <h4 className="font-semibold text-white">
                Find Property with AI
              </h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavSmall;
