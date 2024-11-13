import Image from "next/image";
import map from "../../../../../public/golden-visa/visa-hero-map.svg";
import line from "../../../../assets/golden-visa/line-text.svg";

const HeroVisa = () => {
  return (
    <section className="mt-15 lg:mt-24 bg-[url('/golden-visa/visa-hero-bg.png')] w-full h-[640px] bg-cover">
      <div className="container_fluid bg-[url('/golden-visa/visa-hero-bg.png')] relative w-full h-[609px] flex items-center justify-center">
        
          <div className="max-w-[940px] mx-auto flex flex-col items-center justify-center space-y-10">
              <div className="space-y-4">
                 <h1 className="text-[60px] leading-[78px] font-Merriweather text-darkBlue font-bold text-center">Secure Your <span className="text-primary relative">UAE Golden Visa
                   <div className="absolute bottom-0 left-0">
                     <Image src={line} alt="line" />
                   </div>
                  </span> Through Property Investment</h1>
              </div>
          </div>
        
        <div className="absolute top-0 left-0 right-0">
          <Image src={map} alt="map" className="opacity-5" />
        </div>
      </div>
    </section>
  );
};

export default HeroVisa;
