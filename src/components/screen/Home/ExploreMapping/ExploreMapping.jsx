import Image from "next/image";
import Link from "next/link";
import rightArrow from "../../../../assets/home/arrow-narrow-right.svg";
import shapesText from "../../../../assets/home/shapes.svg";
const ExploreMapping = () => {
  return (
    <section className="bg-white">
      <div className="container_fluid">
        <div className="pt-8 pb-8 md:pt-25 md:pb-20 grid md:grid-cols-2 items-center">
          <div className="mt-8 md:mt-0 order-2 md:order-1">
            <iframe
              src="/map-fram.svg"
              className="w-full h-[215px] md:h-[492px]"
              title="Map"
            ></iframe>
          </div>
          <div className="pl-5 xl:pl-18 order-1 md:order-2">
            <div className="max-w-[603px] space-y-4">
              <div>
                <div>
                  <h2 className="section-header-title text-primary text-center md:text-start">
                    Explore Nearby{" "}
                    <span className="text-darkBlue relative">
                      with
                      <div className="absolute right-[-20px] md:right-[-18px] xl:right-[-45px] top-[-5px] md:top-[-2px] xl:top-[-15px]">
                        <Image
                          src={shapesText}
                          alt="shapesText"
                          className="w-5 h-5 xl:w-[45px] xl:h-[45px]"
                        />
                      </div>
                    </span>
                  </h2>
                </div>
                <h2 className="section-header-title text-primary text-center md:text-start">
                  Interactive Mapping
                </h2>
              </div>

              <h4 className="text-sm md:text-base xl:text-lg text-grey700 text-center md:text-start">
                Effortlessly discover properties around you with our intuitive,
                interactive map. Whether you&apos;re searching for homes,
                apartments, or commercial spaces, our map feature provides a
                real-time view of available listings, complete with essential
                details and neighborhood insights.
              </h4>
              <h4 className="text-sm md:text-base xl:text-lg text-grey700 text-center md:text-start">
                Zoom in to explore nearby amenities, transportation, schools,
                and more, helping you make informed decisions on the go. Dive
                deeper into each listing with just a tap and let our interactive
                map guide you to your next property
              </h4>
              </div>
              <div className="mt-6 xl:mt-8 flex items-center md:items-start justify-center md:justify-start">
                <Link
                  href={"#"}
                  className="w-[175px] h-[42px] md:w-[188px] md:h-12 rounded-md border-[.5px] bg-primary  flex items-center justify-center gap-2 button-shadow-explore text-white button-shadow-explore text-sm md:text-base font-semibold md:font-bold"
                >
                  Explore Now <Image src={rightArrow} alt="rightArrow" />{" "}
                </Link>
              </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreMapping;
