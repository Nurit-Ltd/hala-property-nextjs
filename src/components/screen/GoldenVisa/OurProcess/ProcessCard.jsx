import Button48 from "@/components/shared/Button/Button48";
import { stepCardData } from "@/data/stepCardData";

const ProcessCard = () => {
  return (
    <div className="mt-6 md:mt-15">
      <div className="grid grid-cols-1  md:grid-cols-3 gap-6 justify-items-center">
        {/* First three cards */}
        {stepCardData.slice(0, 3).map((step, index) => (
          <div
            key={index}
            className="w-full min-h-[126px] md:min-h-[153px] p-4 md:p-6 rounded-2xl border border-[#e5ecf8] bg-[#eaedf2] text-center relative flex items-center justify-center"
          >
            <h4 className="text-base lg:text-lg text-grey700">
              {step.description}
            </h4>
            <div className="absolute top-[-1px] left-1/2 transform -translate-x-1/2">
              <div className="w-[85px] h-[32px] bg-[#f7f5f2] border border-t-0 border-[#e5ecf8] flex items-center justify-center rounded-br-2xl rounded-bl-2xl relative">
                <div className="w-[68px] bg-primary px-3 py-0.5 rounded-lg text-white text-sm font-semibold relative z-20">
                  {step.title}
                </div>
                <div className="absolute top-[0.5px] left-[-20px] w-[20px] h-[20px] bg-[#eaedf2] rounded-tr-[16px] border-r-[1px] border-t-[1px] border-[#e5ecf8] z-10 tong">

                </div>
                <div className="absolute top-0 right-[-20px] w-[20px] h-[20px] bg-[#eaedf2] rounded-tl-[16px] border-l-[1px] border-t-[1px] border-[#e5ecf8] z-10 tong-two">

                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Last two cards */}
        <div className="w-full md:col-span-3 md:flex justify-center md:space-x-5 space-y-4 md:space-y-0">
          {stepCardData.slice(3).map((step, index) => (
            <div
              key={index}
              className="w-full min-h-[126px] md:min-h-[153px] md:max-w-[33%] p-4 md:p-6 rounded-2xl border border-primary/[4%] bg-[#eaedf2] text-center relative flex items-center justify-center"
            >
              
              <h4 className="text-base lg:text-lg text-grey700">
                {step.description}
              </h4>
              <div className="absolute top-[-1px] left-1/2 transform -translate-x-1/2">
              <div className="w-[85px] h-[32px] bg-[#f7f5f2] border border-t-0 border-[#e5ecf8] flex items-center justify-center rounded-br-2xl rounded-bl-2xl relative">
                <div className="w-[68px] bg-primary px-3 py-0.5 rounded-lg text-white text-sm font-semibold relative z-20">
                  {step.title}
                </div>
                <div className="absolute top-[0.5px] left-[-20px] w-[20px] h-[20px] bg-[#eaedf2] rounded-tr-[16px] border-r-[1px] border-t-[1px] border-[#e5ecf8] z-10 tong">

                </div>
                <div className="absolute top-0 right-[-20px] w-[20px] h-[20px] bg-[#eaedf2] rounded-tl-[16px] border-l-[1px] border-t-[1px] border-[#e5ecf8] z-10 tong-two">

                </div>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 md:mt-12 flex items-center justify-center">
        <Button48 buttonTitle="Book a Free Consultation" />
      </div>
    </div>
  );
};

export default ProcessCard;
