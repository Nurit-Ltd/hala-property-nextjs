import Image from "next/image";
import callProperty from "../../../../../assets/property-details/call-property.svg";
import emailPro from "../../../../../assets/property-details/email-property.svg";
import userIcon from "../../../../../assets/property-details/user-property.svg";

const ContactForm = () => {
  return (
    <div className="mt-6">
      <form action="#" className="space-y-6">
        <div className="space-y-3">
          <div className="w-ful h-[52px] px-4 py-[14px] rounded-lg bg-grey100 border border-grey300 flex items-center gap-[14px]">
            <Image src={userIcon} alt="userIcon" />
            <input
              type="text"
              className="w-full h-full text-grey700 bg-transparent outline-none placeholder:text-grey600"
              placeholder="Full Name"
            />
          </div>
          <div className="w-ful h-[52px] px-4 py-[14px] rounded-lg bg-grey100 border border-grey300 flex items-center gap-[14px]">
            <Image src={emailPro} alt="emailPro" />
            <input
              type="email"
              className="w-full h-full text-grey700 bg-transparent outline-none placeholder:text-grey600"
              placeholder="Email Address"
            />
          </div>
          <div className="w-ful h-[52px] px-4 py-[14px] rounded-lg bg-grey100 border border-grey300 flex items-center gap-[14px]">
            <Image src={callProperty} alt="callProperty" />
            <input
              type="text"
              className="w-full h-full text-grey700 bg-transparent outline-none placeholder:text-grey600"
              placeholder="Phone Number"
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            className="w-full h-[125px] px-4 py-[14px] rounded-lg bg-grey100 border border-grey300 outline-none resize-none"
          ></textarea>
        </div>
        <div>notify me</div>
        <button className="w-full h-12 px-6 py-3 bg-primary bg-opacity-50">submite</button>
      </form>
    </div>
  );
};

export default ContactForm;
