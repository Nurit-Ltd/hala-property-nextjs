import Image from "next/image";
import investPic from "../../../../assets/golden-visa/service-fees.svg";

const ServiceRefund = () => {
  return (
    <section className="relative bg-white">
      <div className="container_fluid relative z-20">
        <div className="py-6 md:py-25 grid md:grid-cols-12 items-center gap-6 xl:gap-12">
          <div className="order-2 md:order-1 md:col-span-7 space-y-4 xl:space-y-5">
            <h4 className="section-header-sub-title">
              Service Fees & Refund Policy
            </h4>
            <h2 className="section-header-title text-darkBlue">
              Transparent Costs and Refundable Options
            </h2>
            <div className="space-y-3 max-w-max md:max-w-[712px]">
              <h4 className="text-sm xl:text-lg text-grey700">
                Our Golden Visa service costs AED 10,000 for UAE residents and
                AED 12,000 for Non-Residents. The process is fully managed by
                our team, and 50% of the service fee is refundable if the visa
                is not secured. With our experienced team guiding you, your
                investment and visa process are in safe hands.
              </h4>
            </div>
          </div>
          <div className="order-1 md:order-2 md:col-span-5">
            <Image
              src={investPic}
              alt="investPic"
              className="w-full  xl:h-[466px] rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute top-0 bottom-0 right-0 xl:right-[115px] z-10">
        <div className="h-full w-[220px] xl:w-[410px] bg-primary/[8%]"></div>
      </div>
      <div className="md:hidden absolute top-0 left-0 right-0 z-10">
        <div className="w-full h-[150px] bg-primary/[8%]"></div>
      </div>
    </section>
  );
};

export default ServiceRefund;
