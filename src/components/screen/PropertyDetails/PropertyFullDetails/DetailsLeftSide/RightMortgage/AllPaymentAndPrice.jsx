"use client";
import { useState } from "react";
import DownPaymentRanger from "./DownPaymentRanger";
import PurchasePriceRanger from "./PurchasePriceRanger";

const AllPaymentAndPrice = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="space-y-5">
      {/* Purchase price*/}
      <div className="space-y-3">
        <h4 className="font-semibold text-grey700">Purchase price</h4>
        <PurchasePriceRanger />
      </div>
      {/* Residency status */}
      <div className="space-y-3">
        <h4 className="font-semibold text-grey700">Residency status</h4>
        <div className="flex">
          <button
            onClick={() => handleTabClick(0)}
            className={`flex-1 h-12 flex items-center justify-center py-3 rounded-bl-lg rounded-tl-lg ${
              activeTab === 0
                ? "text-primary font-medium bg-primary50 border border-primary"
                : "text-grey700 font-normal bg-white border-grey400 border"
            }`}
          >
            UAE national
          </button>
          <button
            onClick={() => handleTabClick(1)}
            className={`flex-1 h-12 flex items-center justify-center py-3 ${
              activeTab === 1
                ? "text-primary font-medium bg-primary50 border border-primary"
                : "text-grey700 font-normal bg-white border-grey400 border"
            }`}
          >
            UAE resident
          </button>
          <button
            onClick={() => handleTabClick(2)}
            className={`flex-1 h-12 flex items-center justify-center py-3 rounded-br-lg rounded-tr-lg  ${
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
      <div className="space-y-3">
        <h4 className="font-semibold text-grey700">Down payment</h4>
        <DownPaymentRanger />
      </div>
      {/* Loan period */}
      <div className="space-y-3">
        <h4 className="font-semibold text-grey700">Loan period</h4>
        <div className="space-y-2">
          <input
            placeholder="20"
            type="text"
            className="h-12 w-full px-4 py-3 border border-grey400 rounded-lg bg-logBg flex items-center font-medium text-grey700 placeholder:text-grey700 outline-none"
          />

          <div>
            {/* RANGER HERE */}
            <div className="flex items-center justify-between">
              <p className="text-xs text-grey600">1 year</p>
              <p className="text-xs text-grey600">30 year</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPaymentAndPrice;
