import { featureData } from "@/data/featureData";
import Image from "next/image";


const FeaturesOfProperty = () => {
  return (
    <div>
      <h3 className="property-text-title">Features</h3>
      <div className="mt-[7px] md:mt-4">
        {featureData.map((category, index) => (
          <div
            key={index}
            className={`space-y-2 md:space-y-3 py-2 md:py-4 ${index < featureData.length - 1 ? 'border-b border-grey300' : ''} ${index < featureData.length - 1 ? 'pb-4' : ''}`}
          >
            <h4 className="text-sm md:text-base font-bold text-grey700">{category.category}</h4>
            <div className="flex items-center flex-wrap gap-x-[10px] gap-y-2 md:flex-none md:grid md:grid-cols-4 md:gap-x-6 md:gap-y-3">
              {category.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center gap-[6px] md:gap-2">
                  <Image src={feature.image} alt={feature.label} className="w-4 h-6 md:w-6 md:h-6" />
                  <h5 className="text-sm md:text-base font-medium text-grey700">{feature.label}</h5>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesOfProperty;
