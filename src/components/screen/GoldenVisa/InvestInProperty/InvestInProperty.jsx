import Image from "next/image";
import investPic from "../../../../assets/golden-visa/investPic.svg";

const InvestInProperty = () => {
  return (
    <section className="relative bg-white">
      <div className="container_fluid">
        <div className="py-25 grid grid-cols-12 items-center gap-12">
          <div className="col-span-5">
            <Image
              src={investPic}
              alt="investPic"
              className="w-full h-[466px] rounded-lg"
            />
          </div>
          <div className="col-span-7 space-y-5">
            <h4 className="section-header-sub-title">
              Your Path to a 10-Year UAE Residency
            </h4>
            <h2 className="section-header-title text-darkBlue">
              Invest in Property and Secure Your Golden Visa
            </h2>
            <div className="space-y-3 max-w-[712px]">
              <h4 className="text-lg text-grey700">
                Imagine waking up to year-round sunshine in a country
                that&apos;s both modern and inspiring. The UAE is centrally
                located between East and West, making it just a few hours away
                from many global cities. As one of the world’s most
                forward-thinking and aesthetically stunning nations, it offers
                endless possibilities. With a UAE Golden Visa, you can unlock
                the freedom to live, work, and thrive in this influential hub.
              </h4>
              <h4 className="text-lg text-grey700">
                With an investment in property worth AED 2 million or more,
                you'll be eligible for a 10-year renewable Golden Visa. Plus,
                with 50% of the service cost refundable, the process is even
                more accessible.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 bottom-0 left-[115px]">
        <div className="h-full w-[410px] bg-primary/[8%]"></div>
      </div>
    </section>
  );
};

export default InvestInProperty;
