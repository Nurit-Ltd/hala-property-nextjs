import { featureData } from "@/data/featureData";
import Image from "next/image";


const FeaturesOfProperty = () => {
  return (
    <div>
      <h3 className="property-text-title">Features</h3>
      <div className="mt-4">
        {featureData.map((category, index) => (
          <div
            key={index}
            className={`space-y-3 py-4 ${index < featureData.length - 1 ? 'border-b border-grey300' : ''} ${index < featureData.length - 1 ? 'pb-4' : ''}`}
          >
            <h4 className="font-bold text-grey700">{category.category}</h4>
            <div className="grid grid-cols-4 gap-x-6 gap-y-3">
              {category.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center gap-2">
                  <Image src={feature.image} alt={feature.label} />
                  <h5 className="font-medium text-grey700">{feature.label}</h5>
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
