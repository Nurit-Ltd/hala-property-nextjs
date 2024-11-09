import ProductCard from "@/components/shared/ProductCard/ProductCard";
import { stepsCard } from "@/data/threeStepsCardData";
import { threeStepsProduct } from "@/data/ThreeStepsData";

const ThreeStepDream = () => {
  return (
    <section className="bg-secBg">
      <div className="container_fluid">
        <div className="pt-15 pb-25">
          <h2 className="section-header-title text-darkBlue text-center">
            3 Step to Find Your <span className="text-primary">Dream Home</span>
          </h2>
          <div className="mt-12 grid grid-cols-3 gap-5">
            {stepsCard.map((step) => (
              <div
                key={step.id}
                className="px-5 pt-8 pb-5 border border-[#EEEFF1] bg-white three-steps-card rounded-2xl space-y-8"
              >
                <div className="space-y-6">
                  <div className="w-[60px] h-[60px] rounded-full bg-white border-[2px] border-gradient-to-r from-black/[15%] to-black/[10%] flex items-center justify-center">
                    <h4 className="text-[32px] font-bold bg-gradient-to-b from-[#0954e4] to-[rgba(9,84,228,0.4)] bg-clip-text text-transparent">
                      {step.id}
                    </h4>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-[32px] lg:leading-[48px] font-bold text-darkBlue">
                      {step.title}
                    </h3>
                    <h5 className="font-medium text-[#525D74]">
                      {step.description}
                    </h5>
                  </div>
                </div>
                <div className="px-2.5 pt-2.5 pb-4 rounded-[10px] bg-white three-steps-pro-card">
                  {threeStepsProduct.slice(step.productIndex, step.productIndex + 1).map((card) => (
                    <ProductCard key={card.id} card={card} />
                  ))}
                  <button className="w-full h-9 rounded-md flex items-center justify-center bg-primary text-white buy-home-submit text-sm font-semibold">
                    {step.buttonLabel}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeStepDream;
