import Button48 from "@/components/shared/Button/Button48";
import { stepCardData } from "@/data/stepCardData";

const ProcessCard = () => {
  return (
    <div className="mt-6 md:mt-15">
      <div className="grid grid-cols-1  md:grid-cols-3 gap-6 justify-items-center">
        {/* First three cards */}
        {stepCardData.slice(0, 3).map((benefit, index) => (
          <div
            key={index}
            className="w-full p-6 rounded-lg lg:rounded-2xl border border-primary/[4%] bg-primary/[5%] text-center"
          >
            <div className="w-[68px] bg-primary px-3 py-0.5 rounded-lg text-white text-sm font-semibold">
              {benefit.title}
            </div>
            <h4 className="text-base lg:text-lg text-grey700">
              {benefit.description}
            </h4>
          </div>
        ))}

        {/* Last two cards */}
        <div className="w-full md:col-span-3 md:flex justify-center md:space-x-5 space-y-4 md:space-y-0">
          {stepCardData.slice(3).map((benefit, index) => (
            <div
              key={index}
              className="w-full md:max-w-[33%] p-6 rounded-lg lg:rounded-2xl border border-primary/[4%] bg-primary/[5%] text-center"
            >
              <div className="w-[68px] bg-primary px-3 py-0.5 rounded-lg text-white text-sm font-semibold">
                {benefit.title}
              </div>
              <h4 className="text-base lg:text-lg text-grey600">
                {benefit.description}
              </h4>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 flex items-center justify-center">
        <Button48 />
      </div>
    </div>
  );
};

export default ProcessCard;
