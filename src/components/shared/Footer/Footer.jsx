import Image from "next/image";
import Link from "next/link";
import locationICon from "../../../assets/home/location-icon.svg";
import logo from "../../../assets/home/logo-main.svg";
import emailICon from "../../../assets/home/mail-icon.svg";
const Footer = () => {
  return (
    <footer className="bg-darkBlue text-white">
      <section>
        <div className="container_fluid">
          <div className="pt-25 pb-20 flex items-start justify-between gap-5">
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
                <h4 className="text-sm max-w-[335px]">Sign up for our newsletter and stay ahead of the game with all the latest insights, news and updates!Yalla, what are you waiting for?</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
