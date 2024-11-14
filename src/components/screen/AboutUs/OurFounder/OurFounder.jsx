import Image from "next/image";
import foundShapes from "../../../../assets/about-us/foundShapes.svg";
import founder from "../../../../assets/about-us/founder.png";
import AboutFounder from "./AboutFounder";

const OurFounder = () => {
  return (
    <section className="bg-white">
      <div className="container_fluid">
        <div className="py-25">
          <h2 className="section-header-title text-darkBlue text-center">
            Meet Our{" "}
            <span className="relative text-primary">
              Founder
              <span className="absolute top-[-10px] right-[-30px] xl:right-[-40px]">
                <Image
                  src={foundShapes}
                  alt="foundShapes"
                  className="w-7 h-7 xl:w-11 xl:h-11"
                />
              </span>
            </span>
          </h2>
          <div className="mt-15 grid grid-cols-6">
            <div className="col-span-2">
              <Image src={founder} alt="founder" className="rounded-lg" />
            </div>
            <div className="col-span-4 pl-[72px]">
              <AboutFounder />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFounder;
