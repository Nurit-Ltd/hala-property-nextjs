import Button52 from "@/components/shared/Button/Button52";
import Image from "next/image";
import phone from "../../../../assets/golden-visa/call-form.svg";
import email from "../../../../assets/golden-visa/email-form.svg";
import user from "../../../../assets/golden-visa/user-form.svg";

const FormPart = () => {
  return (
    <div className="space-y-6 md:space-y-8">
      <form className="space-y-3">
        <div className="w-full h-12 md:h-[52px] px-4 py-3 md:py-[14px] rounded-lg border border-grey400 bg-white flex items-center gap-[14px]">
          <Image src={user} alt="user" />
          <input
            type="text"
            placeholder="Full Name"
            className="w-full h-full outline-none font-medium text-darkBlue placeholder:text-grey600"
          />
        </div>
        <div className="w-full h-12 md:h-[52px] px-4 py-3 md:py-[14px]  rounded-lg border border-grey400 bg-white flex items-center gap-[14px]">
          <Image src={email} alt="email" />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full h-full outline-none font-medium text-darkBlue placeholder:text-grey600"
          />
        </div>
        <div className="w-full h-12 md:h-[52px] px-4 py-3 md:py-[14px]  rounded-lg border border-grey400 bg-white flex items-center gap-[14px]">
          <Image src={phone} alt="phone" />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full h-full outline-none font-medium text-darkBlue placeholder:text-grey600"
          />
        </div>
        <textarea placeholder="Message" className="w-full h-[112px] md:h-[152px] px-4 py-3 md:py-[14px]  rounded-lg border border-grey400 bg-white resize-none placeholder:text-grey600 outline-none"></textarea>
      </form>
      <Button52 buttonTittle="Submit" />
    </div>
  );
};

export default FormPart;
