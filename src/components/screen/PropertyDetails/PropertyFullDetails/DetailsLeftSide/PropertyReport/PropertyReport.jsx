"use client";
import AvPriceChart from "./AvPriceChart";
import PopularLocations from "./PopularLocations";
import { useAiContext } from "@/contexts/AiContext";

const PropertyReport = () => {
  const { setSignInPopUpShow } = useAiContext();
  return (
    <div className="mt-6 md:mt-12">
      <div className="space-y-[6px]">
        <h3 className="property-text-title">Hala Property report</h3>
        <h5 className="text-xs md:text-sm max-w-max md:max-w-[660px] text-grey600">The data displayed is based on average prices and sizes of all listings based on DLD Transaction data and Hala Property data models.</h5>
      </div>
      <div className="mt-4 space-y-3">
        <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-6">
          <div className="w-full lg:w-[42%] space-y-2 md:space-y-4">
            <h4 className="text-sm md:text-lg font-bold text-grey700">Average Price/Sqft</h4>
            <div className="px-[9px] md:px-4 pt-[14px] md:pt-6 pb-[9px] md:pb-4 rounded-lg border border-grey400">
              <AvPriceChart />
            </div>
          </div>
          <div className="w-full lg:w-[58%] space-y-2 md:space-y-4">
            <h4 className="text-sm md:text-lg font-bold text-grey700">Popular Locations</h4>
            <div className="px-4 pt-6 pb-4 rounded-lg border border-grey400">
              <PopularLocations />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 md:mt-3 h-[34px] md:h-11 md:px-3 md:py-2.5 rounded-md md:rounded-lg border border-grey300 bg-primary/[4%] flex items-center justify-center">
        <div className="flex items-center gap-[6px] text-xs md:text-base">
          <h4>Already have an Account?</h4>
          <button onClick={() => setSignInPopUpShow(true)} className="font-semibold text-primary underline">
            {" "}
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyReport;
