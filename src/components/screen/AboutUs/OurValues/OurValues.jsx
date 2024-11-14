import PoliciesCard from "./PoliciesCard";

const OurValues = () => {
  return (
    <section>
      <div className="container_fluid">
        <div className="py-8 md:py-25">
          <div className="space-y-2">
            <h2 className="section-header-title text-darkBlue text-center">
              Our <span className="text-primary">Values</span>
            </h2>
            <h4 className="text-sm md:text-lg text-grey700 text-center">
              At Hala Property, our values are the cornerstone of our commitment
              to delivering excellence
            </h4>
          </div>
          <PoliciesCard />
        </div>
      </div>
    </section>
  );
};

export default OurValues;
