import Image from "next/image";
import UserPro from "../../../../../assets/property-details/UserPro.svg";
import emailUser from "../../../../../assets/property-details/emailUser.svg";
import phoneIcon from "../../../../../assets/property-details/phone-icon.svg";
import whatsappUserInfo from "../../../../../assets/property-details/whatsapp-icon-userInfo.svg";

const UserInfoAndContact = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Image
          src={UserPro}
          alt="UserPro"
          className="w-[72px] h-[72px] rounded-full"
        />
        <div className="space-y-1">
          <h3 className="text-2xl font-bold text-darkBlue">
            Rogelio Powlowski
          </h3>
          <h5 className="text-grey600">
            Usually responds
            <span className="font-semibold"> within 5 minutes</span>
          </h5>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button className="h-12 px-4 py-3 rounded-lg bg-greenBase hover:bg-opacity-90 bg-opacity-100 flex items-center justify-center gap-2 font-bold text-white">
          <Image src={phoneIcon} alt="phoneIcon" />
          Call
        </button>
        <button className="h-12 px-4 py-3 rounded-lg bg-redBase hover:bg-opacity-90 bg-opacity-100 flex items-center justify-center gap-2 font-bold text-white">
          <Image src={emailUser} alt="emailUser" />
          E-mail
        </button>
        <button className="h-12  p-3 rounded-lg bg-lightGreenBase hover:bg-opacity-90 bg-opacity-100 flex items-center justify-center gap-2 font-bold text-white">
          <Image src={whatsappUserInfo} alt="whatsappUserInfo" />
          WhatsApp
        </button>
      </div>
    </div>
  );
};

export default UserInfoAndContact;
