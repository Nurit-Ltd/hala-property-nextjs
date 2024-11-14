import Image from "next/image";
import visionBig from "../../../../assets/about-us/vision-big.png";
import visionSm1 from "../../../../assets/about-us/vision-sm-1.png";
import visionSm2 from "../../../../assets/about-us/vision-sm-2.png";

const VisionGallery = () => {
  return (
    <div className="mt-6 md:mt-10 lg:mt-0 grid grid-cols-2 items-center gap-5">
      <div className="">
        <Image src={visionBig} alt="visionBig" className="" />
      </div>
      <div className="flex flex-col gap-5">
      <Image src={visionSm1} alt="visionSm1" />
      <Image src={visionSm2} alt="visionSm2" />
      </div>
    </div>
  );
};

export default VisionGallery;