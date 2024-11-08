import Image from "next/image";
import heroImage from "../../../../assets/home/hero-banner.png";

const Hero = () => {
  return (
    <div>
      <Image src={heroImage} alt="heroImage" />
    </div>
  );
};

export default Hero;