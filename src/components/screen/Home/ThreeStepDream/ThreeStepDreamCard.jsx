import ProductCard from "@/components/shared/ProductCard/ProductCard";
import { threeStepsProduct } from "@/data/ThreeStepsData";

const ThreeStepDreamCard = ({ step }) => {
  return (
    <div>
      <div className="px-[14px] pt-[23px] pb-[14px] lg:px-5 lg:pt-8 lg:pb-5 border border-[#EEEFF1] bg-white three-steps-card rounded-2xl space-y-6 lg:space-y-8">
        <div className="space-y-4 lg:space-y-6">
          <div className="w-11 h-11 lg:w-[60px] lg:h-[60px] rounded-full bg-white border-[2px] border-gradient-to-r from-black/[15%] to-black/[10%] flex items-center justify-center">
            <h4 className="text-[24px] lg:text-[32px] font-bold bg-gradient-to-b from-[#0954e4] to-[rgba(9,84,228,0.4)] bg-clip-text text-transparent">
              {step.id}
            </h4>
          </div>
          <div className="space-y-[5px] lg:space-y-2">
            <h3 className="text-xl lg:text-[32px] lg:leading-[48px] font-bold text-darkBlue">
              {step.title}
            </h3>
            <h5 className="h-9 lg:h-12 text-xs lg:text-base font-medium text-[#525D74]">{step.description}</h5>
          </div>
        </div>
        <div className="px-1 pt-1 pb-1 lg:px-2.5 lg:pt-2.5 lg:pb-4 rounded-[10px] bg-white three-steps-pro-card">
          {threeStepsProduct
            .slice(step.productIndex, step.productIndex + 1)
            .map((card) => (
              <ProductCard key={card.id} card={card} />
            ))}
          <button className="w-full h-[26px] lg:h-9 rounded lg:rounded-md flex items-center justify-center bg-primary text-white buy-home-submit text-[10px] lg:text-sm font-semibold">
            {step.buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThreeStepDreamCard;
