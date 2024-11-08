import Image from "next/image";
import productPic from "../../../../assets/home/luxury-pic-1.svg";

const LuxuryProperties = () => {
  return (
    <section className="bg-secBg">
      <div className="mt-[-60px] max-w-[1424px] mx-auto pt-12 pb-[60px] px-[72px] bg-white rounded-3xl luxury-properties">
        <h2 className="text-[48px] font-bold text-darkBlue text-center">
          Luxury Properties{" "}
          <span className="text-primary">You&apos;ll Love</span>
        </h2>
        <div className="mt-10 grid grid-cols-3 gap-6">
          <div className="rounded-2xl border border-grayBorder">
             <Image src={productPic} alt="productPic1" className="rounded-tl-2xl rounded-tr-2xl" />
             <div className="pt-4 pb-5 px-5">
                <div className="flex items-center justify-between">
                  <div className="space-y-[1px]">
                     <h5 className="text-xs text-grey600">Starting Price</h5>
                     <h5 className="text-sm font-bold text-grey700">AED 1.6 MN</h5>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryProperties;
