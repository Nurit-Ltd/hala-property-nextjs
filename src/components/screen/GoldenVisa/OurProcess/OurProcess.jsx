import Image from "next/image";
import leftLine from "../../../../assets/golden-visa/left-line-process.svg";
import rightLine from "../../../../assets/golden-visa/right-line-process.svg";
import ProcessCard from "./ProcessCard";

const OurProcess = () => {
  return (
    <section className="relative">
      <div className="container_fluid">
        <div className="py-10 md:py-25">
          <div className="max-w-[1038px] mx-auto">
            <div className="space-y-2 md:space-y-5 max-w-[690px] mx-auto">
              <h4 className="section-header-sub-title text-center">
                Our Process
              </h4>
              <div className="space-y-2 md:space-y-4">
                <h2 className="section-header-title text-darkBlue text-center">
                  Fast, Efficient, and All Online
                </h2>
                <h4 className="text-base md:text-lg text-darkBlue text-center">
                  We streamline the entire process for you. Here’s how it works:
                </h4>
              </div>
            </div>
            <ProcessCard />
          </div>
        </div>
      </div>
      <div className="hidden 2xl:block absolute top-[222px] left-[72px]">
        <Image src={leftLine} alt="leftLine" />
      </div>
      <div className="hidden 2xl:block absolute top-[392px] right-[82px]">
        <Image src={rightLine} alt="rightLine" />
      </div>
    </section>
  );
};

export default OurProcess;
