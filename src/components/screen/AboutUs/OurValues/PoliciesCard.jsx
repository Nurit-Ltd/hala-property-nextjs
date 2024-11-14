import { PoliciesData } from "@/data/policiesData";
import Image from "next/image";

const PoliciesCard = () => {
  return (
    <div className="mt-16 grid grid-cols-3 gap-y-8 gap-x-12">
      {PoliciesData.map((item, index) => {
        return (
          <div key={index} className="flex items-start gap-4">
            <Image src={item.icon} alt="Innovation" />
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-darkBlue">{item.title}</h3>
              <h4 className="text-grey700">{item.des}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PoliciesCard;
