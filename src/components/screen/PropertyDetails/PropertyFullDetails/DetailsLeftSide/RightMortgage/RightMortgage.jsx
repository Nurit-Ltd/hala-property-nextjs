const RightMortgage = () => {
  return (
    <div className="relative mt-12">
      <h3 className="property-text-title">Get the right mortgage for you</h3>
      <div className="mt-6 p-6 border border-grey400 rounded-lg">
        <div className="grid grid-cols-5 gap-8">
          <div className=" col-span-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
            sequi aliquam facilis cum obcaecati quo qui, est earum rerum
            necessitatibus deserunt minima molestiae velit magnam tenetur
            delectus itaque nihil possimus?
          </div>
          <div className="col-span-2 p-6 rounded-lg bg-primary/[5%] border border-primary/[75%] mortgage-payment-box">
            <h4 className="text-lg font-semibold text-grey700">Estimate your monthly mortgage payment</h4>
            <div className="w-full h-[1px] bg-grey400 my-4"></div>
            <div className="flex justify-between">
                 <div className="space-y-[6px]">
                     <h4 className="font-medium text-grey700">Monthly payment</h4>
                     <h3 className="text-xl font-bold text-primary">AED 32,675</h3>
                 </div>
                 <div className="space-y-[6px]">
                     <h4 className="font-medium text-grey700">Interest rate</h4>
                     <h3 className="text-xl font-bold text-primary">3.79%</h3>
                 </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightMortgage;
