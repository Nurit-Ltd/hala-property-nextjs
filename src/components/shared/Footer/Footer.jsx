import { footerData } from "@/data/footerData";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-darkBlue text-white">
      <section>
        <div className="container_fluid">
          <div className="pt-8 pb-8 lg:pt-25 lg:pb-20">
            <div className="grid grid-cols-2 lg:grid-cols-7 gap-6 lg:gap-4">
              {/* Company Info */}
              <div className="col-span-2 space-y-3 sm:space-y-4">
                <Link href={"/"} className="flex items-center gap-2">
                  <Image src={footerData.companyInfo.logo} alt="Main Logo" className="w-6 h-6 md:h-11 md:w-11" />
                  <h4 className="text-xl sm:text-[28px] tracking-[-2%] font-semibold text-white">{footerData.companyInfo.name}</h4>
                </Link>
                <div className="flex items-center gap-3">
                  <Image src={footerData.companyInfo.locationIcon} alt="Location Icon" />
                  <h5 className="text-sm max-w-[217px]">{footerData.companyInfo.address}</h5>
                </div>
                <div className="flex items-center gap-3">
                  <Link href={`mailto:${footerData.companyInfo.email}`} passHref className="flex items-center gap-3">
                    <Image src={footerData.companyInfo.emailIcon} alt="Email Icon" />
                    <h5 className="text-sm">{footerData.companyInfo.email}</h5>
                  </Link>
                </div>
              </div>

              {/* Menu */}
              <div className="col-span-1 space-y-4">
                <h4 className="text-sm font-bold">Menu</h4>
                <ul className="space-y-3">
                  {footerData.menu.map((item, index) => (
                    <li key={index}>
                      <Link href={item.href} className="text-sm hover:text-primary">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div className="col-span-1 space-y-4">
                <h4 className="text-sm font-bold">Resources</h4>
                <ul className="space-y-3">
                  {footerData.resources.map((item, index) => (
                    <li key={index}>
                      <Link href={item.href} className="text-sm hover:text-primary">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div className="col-span-2 lg:col-span-1 space-y-4">
                <h4 className="text-sm font-bold">Follow us</h4>
                <ul className="flex  items-center gap-3 flex-wrap ">
                  {footerData.socialLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} className="w-[32px] h-[32px] rounded-full bg-darkBlue hover:bg-white hover:text-black  border border-white hover:border-black transition flex items-center justify-center text-white">
                        <link.icon className="text-base" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="col-span-2 space-y-4">
                <h4 className="text-sm font-bold uppercase">Stay up to date</h4>
                <p className="text-sm">Sign up for our newsletter and stay ahead of the game with all the latest insights, news, and updates! Yalla, what are you waiting for?</p>
                <div className="flex flex-row lg:flex-col lg:space-y-2.5 gap-2 lg:gap-0">
                  <input type="email" placeholder="Your email" className="w-[70%] lg:w-full h-11 px-5 py-2.5 rounded-md bg-grey100 outline-none placeholder:text-grey600 text-black" />
                  <button type="submit" className="w-[30%] lg:w-full h-11 lg:h-[42px] py-1.5 px-8 bg-primary hover:bg-[#004BDCCC] text-white rounded-md flex items-center justify-center text-sm font-semibold">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Bottom Section */}
      <section>
        <div className="border-t border-white/[10%]">
          <div className="container_fluid">
            <div className="pt-5 lg:pt-[30px] pb-[30px] flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-0">
              <h4 className="text-sm font-medium text-white opacity-75">{footerData.copyright}</h4>
              <div className="flex items-center gap-3">
                {footerData.languageOptions.map((option, index) => (
                  <button key={index} className="h-9 bg-white hover:bg-primary border-[0.5px] border-grey50 hover:border-primary text-darkBlue hover:text-white rounded-[3px] duration-200 px-3 py-1.5 flex items-center gap-2">
                    {/* <Image src={option.icon} alt={`${option.label} Icon`} /> */}
                    <option.icon className="text-xl" />
                    <h4 className="font-bold">{option.label}</h4>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
