import Image from "next/image";
import Link from "next/link";
import locationICon from "../../../assets/home/location-icon.svg";
import logo from "../../../assets/home/logo-main.svg";
import emailICon from "../../../assets/home/mail-icon.svg";
import dollarIcon from "../../../assets/home/usd-icon.svg";
import worldMap from "../../../assets/home/world-icon.svg";

const Footer = () => {
  return (
    <footer className="bg-darkBlue text-white">
      <section>
        <div className="container_fluid">
          <div className="pt-25 pb-20">
            <div className="grid grid-cols-7 gap-4">
              <div className=" col-span-2 space-y-4">
                <div className="flex items-center gap-2">
                  <Image src={logo} alt="mainLogo" />
                  <h4 className="text-[28px] tracking-[-2%] font-semibold text-white">
                    Hala Property
                  </h4>
                </div>
                <div className="flex items-center gap-3">
                  <Image src={locationICon} alt="locationICon" />
                  <h5 className="text-sm max-w-[217px]">
                    Dubai Creek Harbour Dubai, United Arab Emirates
                  </h5>
                </div>
                <div className="flex items-center gap-3">
                  <Image src={emailICon} alt="emailICon" />
                  <h5 className="text-sm">info@halaproperty.com</h5>
                </div>
              </div>
              <div className="col-span-1 space-y-4">
                <h4 className="text-sm font-bold">Menu</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href={"#"} className="text-sm">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"} className="text-sm">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"} className="text-sm">
                      Buy
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"} className="text-sm">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-1 space-y-4">
                <h4 className="text-sm font-bold">Resources</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href={"#"} className="text-sm">
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"} className="text-sm">
                      Newsletter
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"} className="text-sm">
                      Terms & conditions
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"} className="text-sm">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-span-1 space-y-4">
                <h4 className="text-sm font-bold">Follow us</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href={"#"} className="text-sm">
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"} className="text-sm">
                      X
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"} className="text-sm">
                      LinkedIn
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"} className="text-sm">
                      Tiktok
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-2 space-y-4">
                <h4 className="text-sm font-bold">Stay up to date</h4>
                <h4 className="text-sm">
                  Sign up for our newsletter and stay ahead of the game with all
                  the latest insights, news and updates!Yalla, what are you
                  waiting for?
                </h4>
                <div className="space-y-2.5">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full h-11 px-5 py-2.5 rounded-md bg-grey100 outline-none placeholder:text-grey600 text-black"
                  />
                  <button
                    type="submit"
                    className="w-full h-[42px] py-1.5 px-8 bg-primary text-white rounded-md footer-subscription flex items-center justify-center text-sm font-semibold"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="border-t border-white/[10%]">
          <div className="container_fluid">
            <div className="py-[30px] flex items-center justify-between">
              <h4 className="text-sm font-medium text-white">
                © 2024 Hala Property, Inc. All Rights Reserved.
              </h4>
              <div className="flex items-center gap-3">
                <button className="h-9 bg-white border-[0.5px] border-grey50 footer-language rounded-[3px] px-3 py-1.5 flex items-center gap-2">
                  <Image src={worldMap} alt="worldMap" />
                  <h4 className="font-bold text-darkBlue">English</h4>
                </button>
                <button className="h-9 bg-white border-[0.5px] rounded-[3px] border-grey50 footer-language px-3 py-1.5 flex items-center gap-2">
                  <Image src={dollarIcon} alt="dollarIcon" />
                  <h4 className="font-bold text-darkBlue">USD</h4>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
