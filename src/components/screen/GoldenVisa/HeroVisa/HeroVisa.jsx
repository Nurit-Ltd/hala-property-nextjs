import Button52 from "@/components/shared/Button/Button52";
import Image from "next/image";
import map from "../../../../../public/golden-visa/visa-hero-map.svg";
import leftLine from "../../../../assets/golden-visa/left-line.svg";
import line from "../../../../assets/golden-visa/line-text.svg";
import rightLine from "../../../../assets/golden-visa/right-line.svg";

const HeroVisa = () => {
  return (
    <section className="mt-15 lg:mt-24 pt-6 md:pt-0 bg-[url('/golden-visa/visa-hero-bg.png')] w-full h-[380px] md:h-[640px] bg-cover relative">
      <div className="container_fluid relative w-full h-[352px] md:h-[609px] flex items-center justify-center z-20">
        <div className="max-w-[443px] md:max-w-[640px] lg:max-w-[940px] mx-auto flex flex-col items-center justify-center  space-y-6 md:space-y-10 relative z-20">
          <div className="space-y-4">
            <div className="space-y-2 md:space-y-4">
              <h1 className="text-xl md:text-[38px] lg:text-[60px] md:leading-[48px] lg:leading-[78px] font-Merriweather text-darkBlue font-bold text-center">
                Secure Your{" "}
                <span className="text-primary relative">
                  UAE Golden Visa
                  <div className="absolute bottom-0 left-0">
                    <Image src={line} alt="line" />
                  </div>
                </span>{" "}
                Through Property Investment
              </h1>
              <h3 className="text-base md:text-2xl font-medium md:font-bold text-grey700 text-center">
                Unlock long-term residency by investing in prime UAE real estate
              </h3>
            </div>
            <h4 className="max-w-[716px] mx-auto text-sm md:text-lg text-grey700 text-center">
              With just AED 2 million in property investment, you can secure a
              10-year UAE Golden Visa—your gateway to a brighter future. Enjoy
              exclusive benefits for you and your family, with a hassle-free,
              fully guided process.
            </h4>
          </div>
          <Button52 buttonTittle="Get Started Today" />
        </div>

        <div className="absolute top-0 left-0 right-0">
          <Image src={map} alt="map" className="opacity-5" />
        </div>
      </div>
      <div className="absolute left-0 lg:left-[85px] top-[230px] md:top-[140px]">
        <Image
          src={leftLine}
          alt="leftLine"
          className="w-[81px] h-[104px] md:w-[222px] md:h-[287px]"
        />
      </div>
      <div className="absolute right-0 lg:right-[70px] top-[90px] md:top-[130px]">
        <Image
          src={rightLine}
          alt="rightLine"
          className="w-[54px] h-[66px] md:w-[248px] md:h-[303px]"
        />
      </div>
    </section>
  );
};

export default HeroVisa;
