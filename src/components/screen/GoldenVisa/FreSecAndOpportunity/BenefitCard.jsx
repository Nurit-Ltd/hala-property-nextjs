import { benefits } from "@/data/benefitCardData";
const BenefitCard = () => {
  return (
    <div className="mt-6 md:mt-15 grid grid-cols-1  md:grid-cols-3 gap-5 justify-items-center">
      {/* First three cards */}

      {benefits.slice(0, 3).map((benefit, index) => (
        <div
          key={index}
          className="w-full px-6 py-6 lg:py-8 rounded-lg lg:rounded-2xl border border-grey400 bg-white/[4%] lg:bg-white space-y-3 text-center lg:our-client-card-box freedom-visa cursor-default"
        >
          <h3 className="text-lg lg:text-2xl font-bold text-darkBlue">
            {benefit.title}
          </h3>
          <h4 className="text-base lg:text-lg text-grey600">
            {benefit.description}
          </h4>
        </div>
      ))}

      {/* Last two cards */}
      <div className="w-full md:col-span-3 md:flex justify-center md:space-x-5 space-y-4 md:space-y-0">
        {benefits.slice(3).map((benefit, index) => (
          <div
            key={index}
            className="w-full md:max-w-[34%] px-6 py-6 lg:py-8 rounded-lg lg:rounded-2xl border border-grey400 bg-white/[4%] lg:bg-white space-y-3 text-center lg:our-client-card-box freedom-visa cursor-default"
          >
            <h3 className="text-lg lg:text-2xl font-bold text-darkBlue">
              {benefit.title}
            </h3>
            <h4 className="text-base lg:text-lg text-grey600">
              {benefit.description}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitCard;
