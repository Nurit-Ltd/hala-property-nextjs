import Image from "next/image";
import bedHero from "../../../../assets/home/bed-hero.svg";
import dollarHero from "../../../../assets/home/dollar-hero.svg";
import searchIcon from "../../../../assets/home/hero-search-icon.svg";
import locationIcon from "../../../../assets/home/location-hero.svg";

const Hero = () => {
  return (
    <section className="bg-[url('/hero-banner.png')] w-full h-[900px] bg-no-repeat bg-cover flex items-center justify-center">
      <div className="container_fluid">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="max-w-[903px] mx-auto space-y-3">
            <h1 className="text-[72px] font-Merriweather font-bold leading-[93px] text-white text-center">
              The Future of Real Estate
            </h1>
            <h3 className="max-w-[749px] mx-auto text-2xl leading-9 text-center text-white">
              Experience a smarter, faster way to find your perfect property.
              Discover luxurious homes and investment opportunities tailored to
              your lifestyle, all at your fingertips.
            </h3>
          </div>
          <div className=" h-[98px] pr-6 bg-white border-[.5px] border-[#F4F4F4] hero-info-box rounded-full flex items-center justify-between gap-12">
            <div className="flex items-center">
              <div className="px-6 flex items-center gap-3">
                <Image src={locationIcon} alt="locationIcon-hero" />
                <div>
                  <h4 className="text-lg leading-[25px] font-bold text-darkBlue">
                    Location
                  </h4>
                  <h5 className="text-sm text-grey600 leading-[19px]">
                    Choose your area
                  </h5>
                </div>
              </div>
              <div className="w-[1px] h-8 mx-5 bg-grayLine"></div>
              <button className="px-6 flex items-center gap-3">
                <Image src={bedHero} alt="bedHero-hero" />
                <div className="flex flex-col items-start">
                  <h4 className="text-lg leading-[25px] font-bold text-darkBlue">
                    Beds
                  </h4>
                  <h5 className="text-sm text-grey600 leading-[19px]">
                    Select bedrooms
                  </h5>
                </div>
              </button>
              <div className="w-[1px] h-8 mx-5 bg-grayLine"></div>
              <button className="px-6 flex items-center gap-3">
                <Image src={dollarHero} alt="d-hero" />
                <div className="flex flex-col items-start">
                  <h4 className="text-lg leading-[25px] font-bold text-darkBlue">
                    Price
                  </h4>
                  <h5 className="text-sm text-grey600 leading-[19px]">
                    Set your budget
                  </h5>
                </div>
              </button>
            </div>
            <button className="w-16 h-16 rounded-full bg-primary hero-search-box flex items-center justify-center">
              <Image src={searchIcon} alt="searchIcon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
