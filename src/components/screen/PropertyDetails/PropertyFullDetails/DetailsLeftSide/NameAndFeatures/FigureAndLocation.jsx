import { propertyItems } from "@/data/propertyItems";
import Image from "next/image";


const FigureAndLocation = () => {
  
  return (
    <div className="flex items-center gap-6">
      {propertyItems.map((item, index) => {
        return (
          <div key={index} className="flex items-start gap-3">
            <div className="w-[30px] h-[30px] bg-grey100 rounded-full flex items-center justify-center">
            <Image src={item.icon} alt={item.label} />
            </div>
            <div className="space-y-[2px]">
              <h4 className="font-semibold text-grey700">{item.value}</h4>
              <h5 className="text-sm text-grey600">{item.label}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FigureAndLocation;
