import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import bedCardIcon from "../../../../assets/home/bed-card-icon.svg";
import cardProduct2 from "../../../../assets/home/card-image-2.jpeg";
import cardProduct3 from "../../../../assets/home/card-image-3.jpeg";
import cardProduct1 from "../../../../assets/home/card-image.jpeg";
import downScales from "../../../../assets/home/downScales.svg";
import shower from "../../../../assets/home/shower-icon.svg";
import upScales from "../../../../assets/home/upScales.svg";
import verifiedIcon from "../../../../assets/home/verifiedIcon.svg";

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
          <div className="mt-12 grid grid-cols-3 gap-6">
            <div className="rounded-2xl border border-grayBorder">
              <div className=" relative">
                <Image
                  src={cardProduct1}
                  alt="cardProduct1"
                  className="w-full h-[256px] rounded-tl-2xl rounded-tr-2xl"
                />
                <div className="absolute top-[15px] left-[15px] flex items-center gap-[10px]">
                  <div className="rounded-md border-[.5px] bg-black/[25%] border-white/[20%] w-20 h-7 flex items-center justify-center backdrop-blur-card-custom text-sm font-semibold text-white">
                    Off-Plan
                  </div>
                  <div className="rounded-md border-[.5px] bg-black/[25%] border-white/[20%] w-[75px] h-7 flex items-center justify-center gap-[6px] backdrop-blur-card-custom text-sm font-semibold text-white">
                    <div className="w-[22px] h-5 rounded bg-success py-[2px] px-1">
                      <Image src={upScales} alt="upScales" />
                    </div>
                    60%
                  </div>
                </div>
                <div className="absolute top-[15px] right-[15px]">
                  <button className="w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-card-custom bg-black/[40%] border-[0.5px] border-white/[20%]">
                    <AiOutlineHeart size={20} className="text-white"/>
                  </button>
                </div>
                <div className="absolute bottom-[15px] right-[15px] w-[88px] h-7 rounded-md bg-primary flex items-center justify-center gap-1">
                   <Image src={verifiedIcon} alt="verifiedIcon" />
                   <h5 className="text-sm font-semibold text-white">Verified</h5>
                </div>
              </div>
              <div className="pt-4 pb-5 px-5">
                <div className="flex items-center justify-between">
                  <div className="space-y-[1px]">
                    <h5 className="text-xs text-grey600">Starting Price</h5>
                    <h5 className="text-sm font-bold text-grey700">
                      AED 1.6 MN
                    </h5>
                  </div>
                  <div className="w-[1px] h-8 bg-grey300"></div>
                  <div className="space-y-[1px]">
                    <h5 className="text-xs text-grey600 text-center">
                      Handover
                    </h5>
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
                    Downtown Dubai and Ras Al Khor Wildlife Sanctuary coupled
                    with exceptional amenities.
                  </h4>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-grayBorder">
              <div className="relative">
                <Image
                  src={cardProduct2}
                  alt="cardProduct2"
                  className="w-full h-[256px] rounded-tl-2xl rounded-tr-2xl"
                />
                <div className="absolute top-[15px] left-[15px] flex items-center gap-[10px]">
                  <div className="rounded-md border-[.5px] bg-black/[25%] border-white/[20%] w-20 h-7 flex items-center justify-center backdrop-blur-card-custom text-sm font-semibold text-white">
                    Off-Plan
                  </div>
                  <div className="rounded-md border-[.5px] bg-black/[25%] border-white/[20%] w-[75px] h-7 flex items-center justify-center gap-[6px] backdrop-blur-card-custom text-sm font-semibold text-white">
                    <div className="w-[22px] h-5 rounded bg-success py-[2px] px-1">
                      <Image src={downScales} alt="downScales" />
                    </div>
                    48%
                  </div>
                </div>
                <div className="absolute top-[15px] right-[15px]">
                  <button className="w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-card-custom bg-errorDark border-[0.5px] border-white/[20%]">
                    <AiFillHeart size={20} className="text-white"/>
                  </button>
                </div>
                <div className="absolute bottom-[15px] right-[15px] w-[88px] h-7 rounded-md bg-primary flex items-center justify-center gap-1">
                   <Image src={verifiedIcon} alt="verifiedIcon" />
                   <h5 className="text-sm font-semibold text-white">Verified</h5>
                </div>
              </div>
              <div className="pt-4 pb-5 px-5">
                <div className="flex items-center justify-between">
                  <div className="space-y-[1px]">
                    <h5 className="text-xs text-grey600">Starting Price</h5>
                    <h5 className="text-sm font-bold text-grey700">
                      AED 1.7 MN
                    </h5>
                  </div>
                  <div className="w-[1px] h-8 bg-grey300"></div>
                  <div className="space-y-[1px]">
                    <h5 className="text-xs text-grey600 text-center">
                      Handover
                    </h5>
                    <h5 className="text-sm font-semibold text-grey600">
                      Nov 2024
                    </h5>
                  </div>
                  <div className="w-[1px] h-8 bg-grey300"></div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-[6px]">
                      <Image src={bedCardIcon} alt="bedCardIcon1" />
                      <h4 className="font-medium text-grey600">5</h4>
                    </div>
                    <div className="flex items-center gap-[6px]">
                      <Image src={shower} alt="shower1" />
                      <h4 className="font-medium text-grey600">3</h4>
                    </div>
                  </div>
                </div>
                <div className="mt-1 mb-2 w-full h-[1px] bg-grey300"></div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-grey900">
                  Konopelski Street
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
                    Downtown Dubai and Ras Al Khor Wildlife Sanctuary coupled
                    with amenities.
                  </h4>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-grayBorder">
              <div className=" relative">
                <Image
                  src={cardProduct3}
                  alt="cardProduct3"
                  className="w-full h-[256px] rounded-tl-2xl rounded-tr-2xl"
                />
                <div className="absolute top-[15px] left-[15px] flex items-center gap-[10px]">
                  <div className="rounded-md border-[.5px] bg-black/[25%] border-white/[20%] w-20 h-7 flex items-center justify-center backdrop-blur-card-custom text-sm font-semibold text-white">
                    Off-Plan
                  </div>
                  <div className="rounded-md border-[.5px] bg-black/[25%] border-white/[20%] w-[75px] h-7 flex items-center justify-center gap-[6px] backdrop-blur-card-custom text-sm font-semibold text-white">
                    <div className="w-[22px] h-5 rounded bg-success py-[2px] px-1">
                      <Image src={upScales} alt="upScales" />
                    </div>
                    60%
                  </div>
                </div>
                <div className="absolute top-[15px] right-[15px]">
                  <button className="w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-card-custom bg-black/[40%] border-[0.5px] border-white/[20%]">
                    <AiOutlineHeart size={20} className="text-white"/>
                  </button>
                </div>
                <div className="absolute bottom-[15px] right-[15px] w-[88px] h-7 rounded-md bg-primary flex items-center justify-center gap-1">
                   <Image src={verifiedIcon} alt="verifiedIcon" />
                   <h5 className="text-sm font-semibold text-white">Verified</h5>
                </div>
              </div>
              <div className="pt-4 pb-5 px-5">
                <div className="flex items-center justify-between">
                  <div className="space-y-[1px]">
                    <h5 className="text-xs text-grey600">Starting Price</h5>
                    <h5 className="text-sm font-bold text-grey700">
                      AED 1.6 MN
                    </h5>
                  </div>
                  <div className="w-[1px] h-8 bg-grey300"></div>
                  <div className="space-y-[1px]">
                    <h5 className="text-xs text-grey600 text-center">
                      Handover
                    </h5>
                    <h5 className="text-sm font-semibold text-grey600">
                      Nov 2024
                    </h5>
                  </div>
                  <div className="w-[1px] h-8 bg-grey300"></div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-[6px]">
                      <Image src={bedCardIcon} alt="bedCardIcon1" />
                      <h4 className="font-medium text-grey600">7</h4>
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
                  Minerva Ridge
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
                    Downtown Dubai and Ras Al Khor Wildlife Sanctuary coupled
                    with exceptional.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendProperties;
