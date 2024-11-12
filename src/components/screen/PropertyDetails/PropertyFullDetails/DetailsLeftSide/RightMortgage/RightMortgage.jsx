import AllPaymentAndPrice from "./AllPaymentAndPrice";

const RightMortgage = () => {
  return (
    <div className="mt-6 md:mt-12">
      <h3 className="property-text-title">Get the right mortgage for you</h3>
      <div className="mt-2.5 md:mt-6 p-3 md:p-6 border border-grey400 rounded-lg">
        <div className="md:grid md:grid-cols-5 md:gap-8">
          <div className="col-span-3">
            <AllPaymentAndPrice />
          </div>
          <div className="mt-[13px] md:mt-0 col-span-2 h-fit p-3 md:p-6 rounded-lg bg-primary/[5%] border border-primary/[75%] mortgage-payment-box">
            <h4 className="text-xs md:text-lg font-semibold text-grey700">
              Estimate your monthly mortgage payment
            </h4>
            <div className="w-full h-[1px] bg-grey400 my-2 md:my-4"></div>
            <div className="flex md:justify-between gap-[13px] md:gap-0">
              <div className="space-y-1 md:space-y-[6px]">
                <h4 className="text-xs md:text-base font-medium text-grey700">Monthly payment</h4>
                <h3 className="text-sm md:text-xl font-bold text-primary">AED 32,675</h3>
              </div>
              <div className="space-y-1 md:space-y-[6px]">
                <h4 className="text-xs md:text-base font-medium text-grey700">Interest rate</h4>
                <h3 className="text-sm md:text-xl font-bold text-primary">3.79%</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightMortgage;
