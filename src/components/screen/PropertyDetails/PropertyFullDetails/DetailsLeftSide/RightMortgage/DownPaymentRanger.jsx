"use client";
import { useState } from "react";

const DownPaymentRanger = () => {
  const [value, setValue] = useState(3420000);

  const min = 100000;
  const max = 15000000;

  const handleSliderChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  // Calculate the filled percentage for the slider background
  const calculateFilledPercentage = () => {
    return ((value - min) / (max - min)) * 100;
  };

  // Calculate the dynamic percentage based on the current slider value
  const calculateDynamicPercentage = () => {
    return (((value - min) / (max - min)) * 100).toFixed(2);
  };

  return (
    <div className="space-y-2">
      <div
        className="flex items-center justify-between h-[34px] md:h-12 w-full px-3 md:px-4 py-2 md:py-3 border border-grey400 rounded-md md:rounded-lg bg-logBg text-xs md:text-base"
      >
        <input
          value={Number(value).toLocaleString()}
          onChange={(e) => setValue(e.target.value.replace(/,/g, ""))}
          placeholder="8,132,000"
          type="text"
          className="w-[85%] h-full bg-transparent font-medium text-grey700 placeholder:text-grey700 outline-none"
        />
        <h4 className="text-primary">{calculateDynamicPercentage()}%</h4>
      </div>

      <div className="space-y-[2px]">
        <input
          type="range"
          min={min}
          max={max}
          step="1000"
          value={value}
          onChange={handleSliderChange}
          className="w-full h-[2px] rounded-lg appearance-none cursor-pointer slider-thumb"
          style={{
            background: `linear-gradient(to right, #0954E5 ${calculateFilledPercentage()}%, #E6EEFC ${calculateFilledPercentage()}%)`,
          }}
        />
        <div className="flex items-center justify-between">
          <p className="text-[10px] md:text-xs text-grey600">AED 1,00,000</p>
          <p className="text-[10px] md:text-xs text-grey600">AED 15,00,000</p>
        </div>
      </div>
    </div>
  );
};

export default DownPaymentRanger;
