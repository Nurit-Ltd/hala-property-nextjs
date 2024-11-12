import { estimatedCard } from "@/data/estimatedCard";
import Image from "next/image";

const MarketCard = () => {
  
  return (
    <div className="mt-2.5 md:mt-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
        {estimatedCard.map((items) => {
          return (
            <div
              key={items.id}
              className="p-2 md:p-5 rounded-md md:rounded-lg bg-[#0954E50A]/[4%] border border-primary/[75%] space-y-[6px] md:space-y-2"
            >
              <div className="flex items-center gap-[5px] md:gap-3">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-[5px] border border-primary50 bg-white flex items-center justify-center">
                  <Image src={items.icon} alt={items.title} className="w-[15px] h-[15px] md:w-5 md:h-5" />
                </div>
                <h4 className="text-xs md:text-base font-medium text-grey700">{items.title}</h4>
              </div>
              <h3 className="text-sm md:text-lg font-bold text-darkBlue">{items.rate}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MarketCard;
