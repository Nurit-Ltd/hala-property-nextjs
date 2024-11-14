import { Button } from "@/components/ui/button";
import { heroItems } from "@/data/heroData";
import Image from "next/image";
import searchIcon from "../../../../assets/home/hero-search-icon.svg";

const Hero = () => {
  return (
    <section className="mt-15 lg:mt-24 bg-[url('/hero-banner.png')] w-full h-[292px] lg:h-[900px] bg-no-repeat bg-cover flex items-center justify-center">
      <div className="container_fluid">
        <div className="flex flex-col items-center justify-center space-y-4 lg:space-y-8">
          <div className="max-w-[903px] mx-auto space-y-2 lg:space-y-3">
            <h1 className="text-2xl lg:text-[72px] lg:leading-[93px] font-Merriweather font-bold  text-white text-center">
              The Future of Real Estate
            </h1>
            <h3 className="max-w-max sm:max-w-[520px] lg:max-w-[749px] mx-auto text-sm leading-[18px] lg:text-2xl lg:leading-9 text-center text-white">
              Experience a smarter, faster way to find your perfect property.
              Discover luxurious homes and investment opportunities tailored to
              your lifestyle, all at your fingertips.
            </h3>
          </div>
          <div className="h-12 lg:h-[98px] pr-2.5 lg:pr-6 bg-white border-[.5px] border-[#F4F4F4] hero-info-box rounded-full flex items-center justify-between gap-5 lg:gap-12">
            <div className="flex items-center">
              {heroItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center"
                >
                  <button className="px-2.5 lg:px-6 flex items-center gap-[5px] lg:gap-3">
                    <Image
                      src={item.icon}
                      alt={`${item.title}-hero`}
                      className="w-4 h-4 lg:w-7 lg:h-7"
                    />
                    <div className="flex flex-col items-start">
                      <h4 className="text-sm leading-[19px] lg:text-lg lg:leading-[25px]   font-semibold lg:font-bold text-grey600 lg:text-darkBlue">
                        {item.title}
                      </h4>
                      <h5 className="hidden lg:block text-sm text-grey600 leading-[19px]">
                        {item.description}
                      </h5>
                    </div>
                  </button>
                  {index < heroItems.length - 1 && (
                    <div className="w-[1px] h-5 lg:h-8 mx-1.5 lg:mx-5 bg-grayLine"></div>
                  )}
                </div>
              ))}
            </div>
            <Button className="w-8 h-8 lg:w-16 lg:h-16 rounded-full bg-primary hero-search-box flex items-center justify-center">
              <Image
                src={searchIcon}
                alt="searchIcon"
                className="w-3 h-3 lg:w-7 lg:h-7"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
