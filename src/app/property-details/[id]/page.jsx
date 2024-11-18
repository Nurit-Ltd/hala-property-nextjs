"use client";
import PropertyFullDetails from "@/components/screen/PropertyDetails/PropertyFullDetails/PropertyFullDetails";
import PhotoSlider from "@/components/screen/PropertyDetails/PropertyPhotos/PhotoSlider";
import SimilarProperties from "@/components/screen/PropertyDetails/SimilarProperties/SimilarProperties";
import Image from "next/image";
import emailUser from "../../../assets/property-details/emailUser.svg";
import phoneIcon from "../../../assets/property-details/phone-icon.svg";
import whatsappUserInfo from "../../../assets/property-details/whatsapp-icon-userInfo.svg";

import AuthForm from "@/components/screen/auth/AuthForm";
import { IoMdClose } from "react-icons/io";
import { useAiContext } from "@/contexts/AiContext";

const PropertyDetailsPage = () => {
  const { signInPopUpShow, setSignInPopUpShow } = useAiContext();
  return (
    <div className="bg-white pb-8 md:pb-25 relative">
      <PhotoSlider />
      <PropertyFullDetails />
      <SimilarProperties />
      <div className="md:hidden fixed left-0 right-0 bottom-0 z-40  fixed-box-details px-4 pt-4 py-6  bg-white">
        <div className="grid grid-cols-3 gap-[6px]">
          <button className="h-[34px] px-4 py-2 rounded-md bg-greenBase flex items-center justify-center gap-[6px] font-bold text-xs text-white">
            <Image src={phoneIcon} alt="phoneIcon" className="w-4 h-4" />
            Call
          </button>
          <button className="h-[34px] px-4 py-2 rounded-md bg-redBase flex items-center justify-center gap-[6px] font-bold text-xs text-white">
            <Image src={emailUser} alt="emailUser" className="w-4 h-4" />
            E-mail
          </button>
          <button className="h-[34px] p-2 rounded-md bg-lightGreenBase flex items-center justify-center gap-[6px] font-bold text-xs text-white">
            <Image src={whatsappUserInfo} alt="whatsappUserInfo" className="w-4 h-4" />
            WhatsApp
          </button>
        </div>
      </div>
      {signInPopUpShow && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-40 py-[60px] lg:py-[80px]">
          <div
            onClick={(e) => {
              e.preventDefault();
              setSignInPopUpShow(false);
            }}
            className="absolute top-0 left-0 right-0 bottom-0 z-30 bg-black/50"
          ></div>
          <div className="relative z-40 mt-10 max-w-[596px] mx-auto ">
            <AuthForm />
            <div className=" absolute top-5 right-5 ">
              <IoMdClose onClick={() => setSignInPopUpShow(false)} className="cursor-pointer text-[32px] text-[#04074E]   hover:rotate-90 transition-all " />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetailsPage;
