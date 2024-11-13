import { benefits } from "@/data/benefitCardData";

const FreSecAndOpportunity = () => {
  return (
    <section>
      <div className="container_fluid">
        <div className="pt-25 pb-20">
          <div className="max-w-[828px] mx-auto space-y-5">
            <h4 className="section-header-sub-title text-center">
              Why the UAE Golden Visa?
            </h4>
            <h2 className="section-header-title text-darkBlue text-center">
              Freedom, Security, and Opportunity
            </h2>
          </div>
          <div className="mt-15 grid grid-cols-3 gap-5 justify-items-center">
            {/* First three cards */}
            {benefits.slice(0, 3).map((benefit, index) => (
              <div
                key={index}
                className="w-full px-6 py-8 rounded-2xl border border-grey400 bg-white space-y-3 text-center our-client-card-box"
              >
                <h3 className="text-2xl font-bold text-darkBlue">
                  {benefit.title}
                </h3>
                <h4 className="text-lg text-grey600">{benefit.description}</h4>
              </div>
            ))}

            {/* Last two cards */}
            <div className="w-full col-span-3 flex justify-center space-x-5">
              {benefits.slice(3).map((benefit, index) => (
                <div
                  key={index}
                  className="w-full max-w-[34%] px-6 py-8 rounded-2xl border border-grey400 bg-white space-y-3 text-center our-client-card-box"
                >
                  <h3 className="text-2xl font-bold text-darkBlue">
                    {benefit.title}
                  </h3>
                  <h4 className="text-lg text-grey600">
                    {benefit.description}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreSecAndOpportunity;
