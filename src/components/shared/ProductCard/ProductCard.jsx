import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import bedCardIcon from "../../../assets/home/bed-card-icon.svg";
import downScales from "../../../assets/home/downScales.svg";
import shower from "../../../assets/home/shower-icon.svg";
import upScales from "../../../assets/home/upScales.svg";
import verifiedIcon from "../../../assets/home/verifiedIcon.svg";

const ProductCard = ({ card }) => {
  return (
    <div className="rounded-2xl border border-grayBorder">
      <div className="relative">
        <Image
          src={card.image}
          alt={`cardProduct${card.id}`}
          className="w-full h-[190px] md:h-[256px] rounded-tl-2xl rounded-tr-2xl"
        />
        <div className="absolute top-[15px] left-[15px] flex items-center gap-[10px]">
          <div className="rounded-md border-[.5px] bg-black/[25%] border-white/[20%] w-20 h-7 flex items-center justify-center backdrop-blur-card-custom text-sm font-semibold text-white">
            {card.label}
          </div>
          <div className="rounded-md border-[.5px] bg-black/[25%] border-white/[20%] w-[75px] h-7 flex items-center justify-center gap-[6px] backdrop-blur-card-custom text-sm font-semibold text-white">
            <div
              className={`w-[22px] h-5 rounded flex items-center justify-center ${
                card.isPercentageUp ? "bg-success" : "bg-errorRedLight"
              } py-[2px] px-1`}
            >
              {/* Replace `upScales` and `downScales` icons as per the direction */}
              <Image
                src={card.isPercentageUp ? upScales : downScales}
                alt="scaleIcon"
              />
            </div>
            {card.percentageChange}%
          </div>
        </div>
        <div className="absolute top-[15px] right-[15px]">
          <button
            className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-card-custom border-[0.5px] border-white/[20%] ${
              card.isFavorited ? "bg-errorDark" : "bg-black/[40%]"
            }`}
          >
            {card.isFavorited ? (
              <AiFillHeart size={20} className="text-white" />
            ) : (
              <AiOutlineHeart size={20} className="text-white" />
            )}
          </button>
        </div>
        {card.isVerified && (
          <div className="absolute bottom-[15px] right-[15px] w-[88px] h-7 rounded-md bg-primary flex items-center justify-center gap-1">
            <Image src={verifiedIcon} alt="verifiedIcon" />
            <h5 className="text-sm font-semibold text-white">Verified</h5>
          </div>
        )}
      </div>
      <div className="pt-4 pb-5 px-5">
        <div className="flex items-center justify-between">
          <div className="space-y-[1px]">
            <h5 className="text-xs text-grey600">Starting Price</h5>
            <h5 className="text-sm font-bold text-grey700">
              {card.startingPrice}
            </h5>
          </div>
          <div className="w-[1px] h-8 bg-grey300"></div>
          <div className="space-y-[1px]">
            <h5 className="text-xs text-grey600 text-center">Handover</h5>
            <h5 className="text-sm font-semibold text-grey600">
              {card.handoverDate}
            </h5>
          </div>
          <div className="w-[1px] h-8 bg-grey300"></div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-[6px]">
              <Image src={bedCardIcon} alt="bedCardIcon" />
              <h4 className="font-medium text-grey600">{card.beds}</h4>
            </div>
            <div className="flex items-center gap-[6px]">
              <Image src={shower} alt="showerIcon" />
              <h4 className="font-medium text-grey600">{card.baths}</h4>
            </div>
          </div>
        </div>
        <div className="mt-1 mb-2 w-full h-[1px] bg-grey300"></div>
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-grey900">{card.location}</h3>
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
            {card.description}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;