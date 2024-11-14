import Image from "next/image";
import shapes from "../../../../assets/about-us/shapes.svg";
import VisionGallery from "./VisionGallery";

const OurVision = () => {
  return (
    <section className="bg-darkBlue">
      <div className="container_fluid">
        <div className="py-8 md:py-15 lg:grid lg:grid-cols-2 items-center gap-0 lg:gap-5 xl:gap-0">
          <div className="max-w-max lg:max-w-[600px] space-y-4 text-white">
            <h2 className="section-header-title text-center lg:text-start">Our Visio<span className="relative">
            n
            <span className="absolute top-[-10px] right-[-30px] xl:right-[-40px]">
            <Image src={shapes} alt="shapes" className="w-7 h-7 xl:w-11 xl:h-11" />
            </span>
            </span>
            
            </h2>
            <div className="space-y-2 lg:space-y-4">
              <h4 className="text-sm text-center lg:text-start">
                Navigating the ever-changing real estate market can be a
                daunting task, especially if you are a first-time property buyer
                or investor. We understand the struggles of obtaining the right
                data and identifying relevant and reliable sources. That is why
                we are inspired to make your lives easier, so you don&apos;t
                have to go through what we have been through. We make an
                unwavering commitment to bring you the best projects on the
                market from the most renowned developers who have a record of
                successfully delivering high-quality properties.
              </h4>
              <h4 className="text-sm text-center lg:text-start">
                Our vision is clear: make the process of buying, selling, or
                renting property easy, efficient, and seamless for everyone. Our
                long-term strategy is anchored on leveraging the latest
                technologies and data to arm individuals, families, and
                investors with the required information to make informed
                decisions. Stay tuned for more updates. We are committed to
                solving the challenges of the real estate market and empowering
                our partners to make the best decisions for their future. Join
                us on this journey of innovation and progress. Cheers to
                disruption!
              </h4>
            </div>
          </div>
          <div>
            <VisionGallery />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
