import Image from "next/image";
import Link from "next/link";
import rightArrow from "../../../../assets/home/arrow-narrow-right.svg";
import shapesText from "../../../../assets/home/shapes.svg";
const ExploreMapping = () => {
  return (
    <section className="bg-white">
      <div className="container_fluid">
        <div className="pt-25 pb-20 grid grid-cols-2 items-center">
          <div>
            <iframe
              src="/map-fram.svg"
              className="w-full h-[492px]"
              title="Map"
            ></iframe>
          </div>
          <div className="pl-5 xl:pl-18">
            <div className="max-w-[603px] space-y-4">
              <div>
                <div className="relative">
                  <h2 className="section-header-title text-primary">
                    Explore Nearby <span className="text-darkBlue">with</span>
                  </h2>
                  <div className="absolute right-[60px] top-[-15px]">
                    <Image src={shapesText} alt="shapesText" />
                  </div>
                </div>
                <h2 className="section-header-title text-primary">
                  Interactive Mapping
                </h2>
              </div>

              <h4 className="text-lg text-grey700">
                Effortlessly discover properties around you with our intuitive,
                interactive map. Whether you&apos;re searching for homes,
                apartments, or commercial spaces, our map feature provides a
                real-time view of available listings, complete with essential
                details and neighborhood insights.
              </h4>
              <h4 className="text-lg text-grey700">
                Zoom in to explore nearby amenities, transportation, schools,
                and more, helping you make informed decisions on the go. Dive
                deeper into each listing with just a tap and let our interactive
                map guide you to your next property
              </h4>
              <div>
              <Link href={"#"} className="w-[188px] h-12 rounded-md border-[.5px] bg-primary px-8 py-3 flex items-center justify-center gap-2 button-shadow-explore text-white button-shadow-explore">Explore Now <Image src={rightArrow} alt="rightArrow" /> </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreMapping;
