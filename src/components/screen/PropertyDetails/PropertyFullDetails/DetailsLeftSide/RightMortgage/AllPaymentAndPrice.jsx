"use client";
import { useState } from "react";
import DownPaymentRanger from "./DownPaymentRanger";
import LoanPeriodRanger from "./LoanPeriodRanger";
import PurchasePriceRanger from "./PurchasePriceRanger";

const AllPaymentAndPrice = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="space-y-4 md:space-y-5">
      {/* Purchase price*/}
      <div className="space-y-2 md:space-y-3">
        <h4 className="text-xs md:text-base font-semibold text-grey700">Purchase price</h4>
        <PurchasePriceRanger />
      </div>
      {/* Residency status */}
      <div className="space-y-2 md:space-y-3">
        <h4 className="text-xs md:text-base font-semibold text-grey700">Residency status</h4>
        <div className="flex">
          <button
            onClick={() => handleTabClick(0)}
            className={`flex-1 h-[34px] md:h-12 text-xs md:text-base flex items-center justify-center py-2 md:py-3 rounded-bl-md rounded-tl-md md:rounded-bl-lg md:rounded-tl-lg ${
              activeTab === 0
                ? "text-primary font-medium bg-primary50 border border-primary"
                : "text-grey700 font-normal bg-white border-grey400 border"
            }`}
          >
            UAE national
          </button>
          <button
            onClick={() => handleTabClick(1)}
            className={`flex-1 h-[34px] md:h-12 text-xs md:text-base flex items-center justify-center py-2 md:py-3 ${
              activeTab === 1
                ? "text-primary font-medium bg-primary50 border border-primary"
                : "text-grey700 font-normal bg-white border-grey400 border"
            }`}
          >
            UAE resident
          </button>
          <button
            onClick={() => handleTabClick(2)}
            className={`flex-1 h-[34px] md:h-12 text-xs md:text-base flex items-center justify-center py-2 md:py-3 rounded-br-md rounded-tr-md   md:rounded-br-lg md:rounded-tr-lg  ${
              activeTab === 2
                ? "text-primary font-medium bg-primary50 border border-primary"
                : "text-grey700 font-normal bg-white border-grey400 border"
            }`}
          >
            Non-resident
          </button>
        </div>
      </div>
      {/* Down payment */}
      <div className="space-y-2 md:space-y-3">
        <h4 className="text-xs md:text-base font-semibold text-grey700">Down payment</h4>
        <DownPaymentRanger />
      </div>
      {/* Loan period */}
      <div className="space-y-2 md:space-y-3">
        <h4 className="text-xs md:text-base font-semibold text-grey700">Loan period</h4>
        <LoanPeriodRanger />
      </div>
    </div>
  );
};

export default AllPaymentAndPrice;
