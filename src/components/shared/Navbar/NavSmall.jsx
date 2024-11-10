import Image from "next/image";
import Link from "next/link";
import aiIcon from "../../../assets/home/aiIcon.svg";
import logoIconSm from "../../../assets/home/logoIconSm.svg";
import menubar from "../../../assets/home/menubar.svg";

const NavSmall = () => {
  return (
    <div className="lg:hidden">
      <div className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ease-in-out bg-darkBlue w-full h-[60px] flex items-center border-b border-black/[8%]">
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
               <Image src={aiIcon} alt="aiICon" />
               </button>
               <button>
               <Image src={menubar} alt="menubar" />
               </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavSmall;
