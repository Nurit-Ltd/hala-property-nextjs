import { estimatedCard } from "@/data/estimatedCard";
import Image from "next/image";

const MarketCard = () => {
  
  return (
    <div className="mt-6">
      <div className="grid grid-cols-3 gap-4">
        {estimatedCard.map((items) => {
          return (
            <div
              key={items.id}
              className="p-5 rounded-lg bg-[#0954E50A]/[4%] border border-primary/[75%] space-y-2"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-[5px] border border-primary50 bg-white flex items-center justify-center">
                  <Image src={items.icon} alt={items.title} />
                </div>
                <h4 className="font-medium text-grey700">{items.title}</h4>
              </div>
              <h3 className="text-lg font-bold text-darkBlue">{items.rate}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MarketCard;
