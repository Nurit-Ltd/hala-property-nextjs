"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
// import downScales from "../../../../assets/home/downScales.svg";
// import upScales from "../../../../assets/home/upScales.svg";
import upScalesWhite from "../../../../assets/home/up-scales-white.svg";

// import verifiedIcon from "../../../assets/home/verifiedIcon.svg";

const DreamProductCard = ({ card }) => {
  const [isFavorited, setIsFavorited] = useState(card.isFavorited);

  const handleFavoriteClick = () => {
    setIsFavorited((prev) => !prev);
  };
  return (
    <div className="px-2 pt-2 pb-2 lg:px-2.5 lg:pt-2.5 lg:pb-4 rounded-[10px] bg-white three-steps-pro-card">
      <div className="relative">
        <div className="relative overflow-hidden rounded-lg">
          <Link href={`/property-details/${card.id}`}>
            <Image
              src={card.image}
              alt={`cardProduct${card.id}`}
              className="w-full h-[147px] md:h-[198px] transition-all duration-300 transform hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
          </Link>
        </div>

        <div className="absolute top-[13px] left-[12px] flex items-center gap-[10px]">
          <div className="rounded-md border-[.5px] bg-black/[25%] hover:bg-black/[15%] border-white/[20%] w-[52px] md:w-[68px] h-[19px] md:h-[23px] flex items-center justify-center backdrop-blur-card-custom text-[8px] md:text-xs font-semibold text-white cursor-default">
            {card.label}
          </div>
          <div className="rounded-[3px] md:rounded-[5px] border-[.5px] bg-black/[25%] hover:bg-black/[15%] border-white/[20%] w-[49px] md:w-[64px] h-[19px] md:h-[23px]  flex items-center justify-center gap-[3.4px] backdrop-blur-card-custom text-[8px] md:text-xs  font-semibold text-white cursor-default">
            <Image
              src={upScalesWhite}
              alt="scaleIcon"
              className="w-[10px] h-[10px] md:w-[13px] md:h-[13px]"
            />
            {card.percentageChange}%
          </div>
        </div>
        <div className="absolute top-[13px] right-[12px]">
          <button
            onClick={handleFavoriteClick}
            className={`w-5 h-5 md:w-[27px] md:h-[27px] rounded-full flex items-center justify-center backdrop-blur-card-custom border-[0.5px] border-white/[20%] ${
              isFavorited ? "bg-errorDark" : "bg-black/[75%]"
            }`}
          >
            {isFavorited ? (
              <AiFillHeart className="text-white text-[15px] md:text-xl" />
            ) : (
              <AiOutlineHeart className="text-white text-[15px] md:text-xl" />
            )}
          </button>
        </div>
      </div>
      <div className="pt-4 px-1.5 space-y-3">
        <div className="py-2 md:py-3 px-3 md:px-4 bg-primary/[5%] border border-[#E6EEFC] rounded bg-opacity-50 space-y-[2px] md:space-y-1">
        <div className="h-[5px] md:h-2 w-[177px] md:w-[239px] bg-primary50 rounded-[1.7px]"></div>
        <div className="h-[5px] md:h-2 w-[68px] md:w-[92px] bg-primary50 rounded-[1.7px]"></div>
        </div>
        <div className="h-[5px] md:h-2 w-[165px] md:w-[222px] bg-primary50 rounded-[1.7px]"></div>
        <button className="w-full h-[26px] lg:h-9 rounded lg:rounded-md flex items-center justify-center bg-primary text-white buy-home-submit text-[10px] lg:text-sm font-semibold">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default DreamProductCard;
