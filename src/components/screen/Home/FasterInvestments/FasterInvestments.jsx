"use client";
import Image from "next/image";
import CountUp from "react-countup";
import bgLight from "../../../../assets/home/bg-light.svg";
import clockIcon from "../../../../assets/home/clock-faster.svg";
import Investment from "../../../../assets/home/currency-faster.svg";
import clientIcon from "../../../../assets/home/user-faster.svg";

const FasterInvestments = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 w-full h-full -z-0 pointer-events-none">
        <Image src={bgLight} alt="bgLight" layout="fill" objectFit="cover" />
      </div>
      <div className="pt-4 md:pt-15 z-10">
        <div className="bg-darkBlue">
          <div className="container_fluid">
            <div className="pt-5 pb-5 md:pt-15 md:pb-25">
              <div className="max-w-[202px] md:max-w-[450px] lg:max-w-[610px] mx-auto">
                <h2 className="title-text text-center text-primary75">
                  Harnessing AI for Smarter,
                  <span className="text-white"> Faster Investments</span>
                </h2>
              </div>
              <div className="mt-4 md:mt-15 flex items-center justify-center ">
                <div className="w-[103px] md:w-[260px] flex flex-col items-center gap-[5px] md:gap-5">
                  <Image
                    src={clockIcon}
                    alt="clockIcon"
                    className="w-5 h-5 md:w-20 md:h-20"
                  />
                  <div className="flex flex-col items-center space-y-[.43px] md:space-y-[2px]">
                    <h2 className="title-text text-white">
                      <CountUp end={10000} />+
                    </h2>
                    <h4 className="text-[10px] md:text-lg font-medium text-white text-center">
                      Hours saved
                    </h4>
                  </div>
                </div>
                <div className="mx-2 md:mx-10 lg:mx-15 w-[1px] md:w-[2px] h-[63px] md:h-[196px] bg-white/[20%] md:bg-white/[10%]"></div>
                <div className="w-[103px] md:w-[260px] flex flex-col items-center gap-[5px] md:gap-5">
                  <Image
                    src={clientIcon}
                    alt="clientIcon"
                    className="w-5 h-5 md:w-20 md:h-20"
                  />
                  <div className="flex flex-col items-center space-y-[.43px] md:space-y-[2px]">
                    <h2 className="title-text text-white">
                      <CountUp end={250} />+
                    </h2>
                    <h4 className="text-[10px] md:text-lg font-medium text-white text-center">
                      Happy Investors
                    </h4>
                  </div>
                </div>
                <div className="mx-2 md:mx-10 lg:mx-15 w-[1px] md:w-[2px] h-[63px] md:h-[196px] bg-white/[20%] md:bg-white/[10%]"></div>

                <div className="w-[103px] md:w-[260px] flex flex-col items-center gap-[5px] md:gap-5">
                  <Image
                    src={Investment}
                    alt="Investment"
                    className="w-5 h-5 md:w-20 md:h-20"
                  />
                  <div className="flex flex-col items-center space-y-[.43px] md:space-y-[2px]">
                    <h2 className="title-text text-white">
                      <CountUp end={100} />+
                    </h2>
                    <h4 className="text-[10px] md:text-lg tracking-[-0.5px] md:tracking-normal font-medium text-white text-center whitespace-nowrap">
                      Investment Data Sources
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default FasterInvestments;
