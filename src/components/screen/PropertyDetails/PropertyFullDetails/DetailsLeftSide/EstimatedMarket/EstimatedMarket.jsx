"use client";

import { useState } from "react";
import EstimatedHistory from "./EstimatedHistory";
import MarketCard from "./MarketCard";

const EstimatedMarket = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="mt-6 md:mt-12">
      <div className="flex items-center justify-between">
        <h3 className="property-text-title">Estimated Market Value</h3>
        <div className="flex items-center gap-2 md:gap-3">
          <h5 className="text-[10px] md:text-base font-medium text-grey600">Price History</h5>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" checked={isChecked} onChange={handleToggle} />
            <div
              className={`relative w-11 h-6 bg-gray-200 rounded-full peer 
          peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
          peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 
          after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full 
          after:h-5 after:w-5 after:transition-all dark:border-gray-600 
          ${isChecked ? "peer-checked:bg-blue-600" : "bg-gray-200"}`}
            ></div>
          </label>
        </div>
      </div>
      <MarketCard />
      <EstimatedHistory />
    </div>
  );
};

export default EstimatedMarket;
