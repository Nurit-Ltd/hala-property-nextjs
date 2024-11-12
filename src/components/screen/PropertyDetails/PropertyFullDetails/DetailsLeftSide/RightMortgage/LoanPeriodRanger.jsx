"use client";
import { useState } from "react";

const LoanPeriodRanger = () => {
  const [value, setValue] = useState(20);

  const min = 1;
  const max = 30;

  const handleSliderChange = (e) => {
    setValue(Number(e.target.value));
  };

  // Calculate the filled percentage for the slider background
  const calculateFilledPercentage = () => {
    return ((value - min) / (max - min)) * 100;
  };

  return (
    <div className="space-y-2">
      <input
        value={Number(value).toLocaleString()}
        onChange={(e) => setValue(Number(e.target.value.replace(/,/g, "")))}
        placeholder="20"
        type="text"
        className="h-[34px] md:h-12 w-full px-3 md:px-4 py-2 md:py-3 border border-grey400 rounded-md md:rounded-lg bg-logBg text-xs md:text-base flex items-center font-medium text-grey700 placeholder:text-grey700 outline-none"
      />

      <div className="space-y-[2px]">
        <input
          type="range"
          min={min}
          max={max}
          step="1"
          value={value}
          onChange={handleSliderChange}
          className="w-full h-[2px] rounded-lg appearance-none cursor-pointer slider-thumb"
          style={{
            background: `linear-gradient(to right, #0954E5 ${calculateFilledPercentage()}%, #E6EEFC ${calculateFilledPercentage()}%)`,
          }}
        />
        <div className="flex items-center justify-between">
          <p className="text-[10px] md:text-xs text-grey600">1 Year</p>
          <p className="text-[10px] md:text-xs text-grey600">30 Year</p>
        </div>
      </div>
    </div>
  );
};

export default LoanPeriodRanger;
