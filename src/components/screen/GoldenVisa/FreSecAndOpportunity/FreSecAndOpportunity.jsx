import BenefitCard from "./BenefitCard";


const FreSecAndOpportunity = () => {
  return (
    <section>
      <div className="container_fluid">
        <div className="pt-8 pb-8 md:pt-25 md:pb-20">
          <div className="max-w-max md:max-w-[828px] mx-auto space-y-2 md:space-y-5">
            <h4 className="section-header-sub-title text-center">
              Why the UAE Golden Visa?
            </h4>
            <h2 className="section-header-title text-darkBlue text-center">
            Freedom, Security, and Opportunity
            </h2>
          </div>
          <BenefitCard />
        </div>
      </div>
    </section>
  );
};

export default FreSecAndOpportunity;
