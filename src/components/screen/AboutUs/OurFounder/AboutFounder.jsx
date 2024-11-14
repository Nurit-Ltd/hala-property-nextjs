import Image from "next/image";
import Link from "next/link";
import fb from "../../../../assets/about-us/fb.svg";
import linked from "../../../../assets/about-us/linked.svg";
import twi from "../../../../assets/about-us/twi.svg";

const AboutFounder = () => {
  return (
    <div className="space-y-4 lg:space-y-6">
      <div className="space-y-[2px]">
        <h3 className="text-xl lg:text-[32px] lg:leading-[48px] font-bold text-darkBlue">
          Sarah Mitchell
        </h3>
        <h4 className="text-sm lg:text-lg font-medium text-grey600">
          Founder & CEO, Hala Property
        </h4>
      </div>
      <div className="space-y-8">
        <h5 className="text-sm lg:text-lg  text-grey700">
          Sarah Mitchell has over 15+ years of experience in the real estate
          industry, specializing in residential, commercial, and luxury
          properties. She started her career as a real estate agent, quickly
          becoming known for her exceptional negotiation skills and deep
          understanding of the local market. Sarah’s passion for property
          development and investment strategies led her to establish Mitchell
          Realty Group, where she has successfully led numerous high-profile
          projects, including residential communities, mixed-use developments,
          and commercial complexes.
        </h5>
        <div className="flex items-center gap-4">
          <Link
            href={"#"}
            className="w-8 h-8 rounded-full bg-darkBlue flex items-center justify-center"
          >
            <Image src={linked} alt="linked" />
          </Link>
          <Link
            href={"#"}
            className="w-8 h-8 rounded-full bg-darkBlue flex items-center justify-center"
          >
            <Image src={twi} alt="twi" />
          </Link>
          <Link
            href={"#"}
            className="w-8 h-8 rounded-full bg-darkBlue flex items-end justify-center"
          >
            <Image src={fb} alt="fb" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutFounder;
