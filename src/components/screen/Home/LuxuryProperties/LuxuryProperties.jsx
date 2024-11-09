import Image from "next/image";
import bedCardIcon from "../../../../assets/home/bed-card-icon.svg";
import productPic from "../../../../assets/home/luxury-pic-1.svg";
import productPic2 from "../../../../assets/home/productPic2.svg";
import productPic3 from "../../../../assets/home/productPic3.svg";
import shower from "../../../../assets/home/shower-icon.svg";

const LuxuryProperties = () => {
  return (
    <section className="bg-secBg">
      <div className=" max-w-[1424px] mx-auto pt-12 pb-[60px] px-[72px] bg-white rounded-3xl luxury-properties">
        <h2 className="text-[48px] font-bold text-darkBlue text-center">
          Luxury Properties{" "}
          <span className="text-primary">You&apos;ll Love</span>
        </h2>
        <div className="mt-10 grid grid-cols-3 gap-6">
          <div className="rounded-2xl border border-grayBorder">
            <Image
              src={productPic}
              alt="productPic1"
              className="rounded-tl-2xl rounded-tr-2xl"
            />
            <div className="pt-4 pb-5 px-5">
              <div className="flex items-center justify-between">
                <div className="space-y-[1px]">
                  <h5 className="text-xs text-grey600">Starting Price</h5>
                  <h5 className="text-sm font-bold text-grey700">AED 1.6 MN</h5>
                </div>
                <div className="w-[1px] h-8 bg-grey300"></div>
                <div className="space-y-[1px]">
                  <h5 className="text-xs text-grey600 text-center">Handover</h5>
                  <h5 className="text-sm font-semibold text-grey600">
                    Nov 2024
                  </h5>
                </div>
                <div className="w-[1px] h-8 bg-grey300"></div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-[6px]">
                    <Image src={bedCardIcon} alt="bedCardIcon1" />
                    <h4 className="font-medium text-grey600">6</h4>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <Image src={shower} alt="shower1" />
                    <h4 className="font-medium text-grey600">4</h4>
                  </div>
                </div>
              </div>
              <div className="mt-1 mb-2 w-full h-[1px] bg-grey300"></div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-grey900">
                  Aisha Harbors
                </h3>
                <h4
                  className="text-grey600 leading-6 overflow-hidden"
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxHeight: "48px",
                  }}
                >
                  Experience refined urban living with stunning views of
                  Downtown Dubai and Ras Al Khor Wildlife Sanctuary coupled with
                  exceptional amenities.
                </h4>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-grayBorder">
            <Image
              src={productPic2}
              alt="productPic1"
              className="rounded-tl-2xl rounded-tr-2xl"
            />
            <div className="pt-4 pb-5 px-5">
              <div className="flex items-center justify-between">
                <div className="space-y-[1px]">
                  <h5 className="text-xs text-grey600">Starting Price</h5>
                  <h5 className="text-sm font-bold text-grey700">AED 1.6 MN</h5>
                </div>
                <div className="w-[1px] h-8 bg-grey300"></div>
                <div className="space-y-[1px]">
                  <h5 className="text-xs text-grey600 text-center">Handover</h5>
                  <h5 className="text-sm font-semibold text-grey600">
                    Nov 2024
                  </h5>
                </div>
                <div className="w-[1px] h-8 bg-grey300"></div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-[6px]">
                    <Image src={bedCardIcon} alt="bedCardIcon1" />
                    <h4 className="font-medium text-grey600">6</h4>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <Image src={shower} alt="shower1" />
                    <h4 className="font-medium text-grey600">4</h4>
                  </div>
                </div>
              </div>
              <div className="mt-1 mb-2 w-full h-[1px] bg-grey300"></div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-grey900">
                  Aisha Harbors
                </h3>
                <h4
                  className="text-grey600 leading-6 overflow-hidden"
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxHeight: "48px",
                  }}
                >
                  Experience refined urban living with stunning views of
                  Downtown Dubai and Ras Al Khor Wildlife Sanctuary coupled with
                  exceptional amenities.
                </h4>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-grayBorder">
            <Image
              src={productPic3}
              alt="productPic1"
              className="rounded-tl-2xl rounded-tr-2xl"
            />
            <div className="pt-4 pb-5 px-5">
              <div className="flex items-center justify-between">
                <div className="space-y-[1px]">
                  <h5 className="text-xs text-grey600">Starting Price</h5>
                  <h5 className="text-sm font-bold text-grey700">AED 1.6 MN</h5>
                </div>
                <div className="w-[1px] h-8 bg-grey300"></div>
                <div className="space-y-[1px]">
                  <h5 className="text-xs text-grey600 text-center">Handover</h5>
                  <h5 className="text-sm font-semibold text-grey600">
                    Nov 2024
                  </h5>
                </div>
                <div className="w-[1px] h-8 bg-grey300"></div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-[6px]">
                    <Image src={bedCardIcon} alt="bedCardIcon1" />
                    <h4 className="font-medium text-grey600">6</h4>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <Image src={shower} alt="shower1" />
                    <h4 className="font-medium text-grey600">4</h4>
                  </div>
                </div>
              </div>
              <div className="mt-1 mb-2 w-full h-[1px] bg-grey300"></div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-grey900">
                  Aisha Harbors
                </h3>
                <h4
                  className="text-grey600 leading-6 overflow-hidden"
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxHeight: "48px",
                  }}
                >
                  Experience refined urban living with stunning views of
                  Downtown Dubai and Ras Al Khor Wildlife Sanctuary coupled with
                  exceptional amenities.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryProperties;
