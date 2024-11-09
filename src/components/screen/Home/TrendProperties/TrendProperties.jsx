import ProductCard from "@/components/shared/ProductCard/ProductCard";
import { cardData } from "@/data/productCardData";
import { FaAngleRight } from "react-icons/fa6";

const TrendProperties = () => {
  return (
    <section>
      <div className="container_fluid">
        <div className="pt-20 pb-18">
          <div className="flex flex-col items-center justify-center space-y-[6px] md:space-y-2">
            <h2 className="text-xl md:text-[48px] md:leading-[67px] font-bold text-darkBlue text-center">
              Trending <span className="text-primary">Properties</span>
            </h2>
            <h4 className="max-w-[784px] mx-auto text-sm md:text-lg text-grey700 text-center">
              Discover the most sought-after properties in real-time, powered by
              AI to bring you top picks based on current market demand and
              trends.
            </h4>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {cardData.map((card) => (
              <ProductCard key={card.id} card={card} />
            ))}
          </div>
          <div className="mt-12 flex items-center justify-center">
             <button className="w-[144px] h-12 rounded-[40px] border border-darkBlue flex items-center justify-center gap-1 bg-transparent font-bold text-base text-darkBlue hover:bg-darkBlue hover:text-white duration-200">
                 View More
                 <FaAngleRight />
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendProperties;
