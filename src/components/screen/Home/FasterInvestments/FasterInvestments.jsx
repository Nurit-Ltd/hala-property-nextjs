"use client";
import Image from "next/image";
import CountUp from "react-countup";
import clockIcon from "../../../../assets/home/clock-faster.svg";
import Investment from "../../../../assets/home/currency-faster.svg";
import clientIcon from "../../../../assets/home/user-faster.svg";

const FasterInvestments = () => {
 
  return (
    <section className="bg-darkBlue">
      <div className="container_fluid">
        <div className="pt-15 pb-25">
          <div className="max-w-[610px] mx-auto">
            <h2 className="title-text text-center text-primary75">
              Harnessing AI for Smarter,
              <span className="text-white"> Faster Investments</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-15 flex items-center justify-center">
            <div className="flex flex-col items-center gap-[5px] md:gap-5">
              <Image
                src={clockIcon}
                alt="clockIcon"
                className="w-5 h-5 md:w-20 md:h-20"
              />
              <div className="px-2 md:px-9 flex flex-col items-center space-y-[.43px] md:space-y-[2px]">
                <h2 className="title-text text-white">
                  <CountUp end={10000} />+
                </h2>
                <h4 className="text-[10px] md:text-lg font-medium text-white text-center">
                  Hours saved
                </h4>
              </div>
            </div>
            <div className="mx-2 md:mx-15 w-[1px] md:w-[2px] h-[63px] md:h-[196px] bg-white/[20%] md:bg-white/[10%]"></div>
            <div className="flex flex-col items-center gap-[5px] md:gap-5">
              <Image
                src={clientIcon}
                alt="clientIcon"
                className="w-5 h-5 md:w-20 md:h-20"
              />
              <div className="px-2 md:px-9 flex flex-col items-center space-y-[.43px] md:space-y-[2px]">
                <h2 className="title-text text-white">
                  <CountUp end={250} />+
                </h2>
                <h4 className="text-[10px] md:text-lg font-medium text-white text-center">
                  Happy Investors
                </h4>
              </div>
            </div>
            <div className="mx-2 md:mx-15 w-[1px] md:w-[2px] h-[63px] md:h-[196px] bg-white/[20%] md:bg-white/[10%]"></div>

            <div className="flex flex-col items-center gap-[5px] md:gap-5">
              <Image
                src={Investment}
                alt="Investment"
                className="w-5 h-5 md:w-20 md:h-20"
              />
              <div className="px-2 md:px-9 flex flex-col items-center space-y-[.43px] md:space-y-[2px]">
                <h2 className="title-text text-white">
                  <CountUp end={100} />+
                </h2>
                <h4 className="text-[10px] md:text-lg tracking-[-0.5px] md:tracking-normal font-medium text-white text-center">
                  Investment Data Sources
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FasterInvestments;
