"use client";

import Image from "next/image";

import lock from "../../../../../../assets/property-details/lock-closed.svg";
import EstimatedChart from "./EstimatedChart";
import { useAiContext } from "@/contexts/AiContext";

const EstimatedHistory = () => {
  const { setSignInPopUpShow } = useAiContext();
  return (
    <div className="mt-4 p-2.5 md:p-6 bg-white border border-grey400 rounded-lg">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1.5 md:gap-0">
        <h4 className="text-sm md:text-lg font-bold text-grey700">Estimated history</h4>
        <div className="flex items-center gap-1.5 md:gap-2">
          <button className="h-[25px] md:h-[32px] px-2 md:px-3 py-1 md:py-1.5 rounded-[2.5px] md:rounded-md flex items-center justify-center border border-grey400 text-xs md:text-sm font-semibold text-grey600">3 years</button>
          <button className="h-[25px] md:h-[32px] px-2 md:px-3 py-1 md:py-1.5 rounded-[2.5px] md:rounded-md flex items-center justify-center border border-primary text-xs md:text-sm font-semibold text-primary">5 years</button>
          <div className="h-[25px] md:h-[32px] px-2 md:px-3 py-1 md:py-1.5 rounded-[2.5px] md:rounded-md flex items-center justify-center border border-grey400 bg-primary/[5%] text-primary gap-1.5 md:gap-2">
            <Image src={lock} alt="lock" />
            <h4 className="text-xs md:text-sm font-semibold text-grey600">Unlock more data</h4>
            <button onClick={() => setSignInPopUpShow(true)} className="text-xs md:text-sm font-semibold text-primary underline">
              Sign in
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] my-2.5 md:my-4 bg-grey300"></div>
      <div>
        <EstimatedChart />
      </div>
    </div>
  );
};

export default EstimatedHistory;
