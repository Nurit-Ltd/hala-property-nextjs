import { PoliciesData } from "@/data/policiesData";
import Image from "next/image";

const PoliciesCard = () => {
  return (
    <div className="mt-6 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 xl:gap-y-8 gap-x-4 xl:gap-x-12">
      {PoliciesData.map((item, index) => {
        return (
          <div key={index} className="flex items-start gap-3 md:gap-4">
            <Image src={item.icon} alt="Innovation" className="w-8 h-8 md:w-[50px] md:h-[50px]" />
            <div className="space-y-1">
              <h3 className="text-base md:text-xl font-bold text-darkBlue">{item.title}</h3>
              <h4 className="text-sm md:text-base text-grey700">{item.des}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PoliciesCard;
