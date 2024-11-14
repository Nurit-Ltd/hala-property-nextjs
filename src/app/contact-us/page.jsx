"use client";
// CONTACT US PAGE
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import Image from "next/image";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { RiHeadphoneFill, RiPhoneFill, RiWhatsappFill } from "react-icons/ri";

import contactPage from "@/assets/blog/contact-page.jpg";

const ContactUs = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    alert("Your message has been sent!"); // Temporary alert to confirm submission
  };

  // const socialLinks = [
  //   { title: "facebook", icon: FaFacebookF, link: "#", hoverBg: "bg-blue-800", hoverText: "text-white" },
  //   { title: "twitter", icon: FaXTwitter, link: "#", hoverBg: "bg-black", hoverText: "text-white" },
  //   { title: "linkedin", icon: FaLinkedinIn, link: "#", hoverBg: "bg-[#0a66c2]", hoverText: "text-white" },
  //   { title: "Instagram", icon: FaInstagram, link: "#", hoverBg: "bg-[#e4405f]", hoverText: "text-white" },
  //   { title: "Youtube", icon: FaYoutube, link: "#", hoverBg: "bg-white", hoverText: "text-[#ff0000]" },
  // ];

  return (
    <div className="pt-[60px] lg:pt-24 font-Manrope bg-white">
      {/* Top Part */}
      <div className="relative h-[530px] xl:h-[650px]  bg-[#f7f5f2] xl:bg-white    ">
        {/* Heading */}
        <div className="  pt-10 xl:pt-[100px] flex flex-col items-center max-w-[1015px] mx-auto px-4 xl:px-0  gap-2  ">
          <h2 className="text-xl lg:text-3xl  xl:text-[60px]  font-bold  text-darkBlue  leading-tight h-[30px] lg:h-[45px] xl:h-[84px] flex items-center">
            Let&apos;s <span className="text-primary">Talk</span>
          </h2>
          <p className="text-sm xl:text-lg   text-center  text-gray-700">Whether you need help finding your perfect home or looking for the ideal investment property, contact us today. Our expert team of property consultants is dedicated to providing you with exceptional service and helping you find your dream home.</p>
        </div>

        {/* Contact Form */}
        <div className="absolute z-20 left-0 top-[240px] xl:top-1/2 w-full flex justify-center">
          <div className=" mx-[16px]   p-[20px] xl:p-[30px] w-full max-w-[1280px] xl:mx-auto bg-white border   formBoxShadow  border-[#CBD5E0] rounded-2xl  ">
            <form onSubmit={handleSubmit(onSubmit)} className="  ">
              <div className="   flex flex-col lg:flex-row justify-between gap-4 xl:gap-6">
                {/* Name */}
                <div className="w-full">
                  <label className="block text-[#0D152E] text-base font-semibold  mb-2">Your Name</label>
                  <input type="text" {...register("name", { required: "Name is required" })} className="appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-[#CBD5E0] h-[48px] xl:h-[52px] placeholder:text-[#687588] placeholder:text-sm" placeholder="Enter your first & last name" />
                  {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div className="w-full">
                  <label className="block text-[#0D152E] text-base font-semibold  mb-2">Your Email</label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: "Please enter a valid email address",
                      },
                    })}
                    className="appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-[#CBD5E0] h-[48px] xl:h-[52px] placeholder:text-[#687588] placeholder:text-sm"
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
                </div>
              </div>

              <div className="mt-4 xl:mt-6 flex flex-col lg:flex-row justify-between gap-4 xl:gap-6">
                {/* Phone */}
                <div className="w-full">
                  <label className="block text-[#0D152E] text-base font-semibold  mb-2">Phone</label>
                  <input type="tel" {...register("phone", { required: "Phone is required" })} className="appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-[#CBD5E0] h-[48px] xl:h-[52px] placeholder:text-[#687588] placeholder:text-sm" placeholder="Enter your pohone number " />
                  {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone.message}</p>}
                </div>

                {/* Subject */}
                <div className="w-full">
                  <label className="block text-[#0D152E] text-base font-semibold  mb-2">Subject</label>
                  <input
                    type="text"
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                    className="appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-[#CBD5E0] h-[48px] xl:h-[52px] placeholder:text-[#687588] placeholder:text-sm"
                    placeholder="Enter a subject line"
                  />
                  {errors.subject && <p className="text-red-500 text-xs italic">{errors.subject.message}</p>}
                </div>
              </div>

              {/* Message */}
              <div className="mt-4 xl:mt-6">
                <label className="block text-[#0D152E] text-base font-semibold  mb-2">Message</label>
                <textarea {...register("message", { required: "Message is required" })} className=" h-[148px] lg:h-[220px] appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-[#CBD5E0]  placeholder:text-[#687588] placeholder:text-sm" placeholder="Write your message" rows={4}></textarea>
                {errors.message && <p className="text-red-500 text-xs italic">{errors.message.message}</p>}
              </div>

              {/* Send Button */}
              <button type="submit" className=" mt-[36px] h-14 w-full py-3 px-4 bg-primary submitBtnShadow     hover:bg-blue-700 text-white font-bold rounded-lg focus:outline-none tracking-[2%] focus:shadow-outline  ">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Middle Part */}
      <div className="relative h-auto   min-h-[650px] bg-darkBlue   pt-[420px] xl:pt-[306px] xl:pb-[90px]">
        <div className=" p-[20px] xl:p-[30px] w-full max-w-[1280px] mx-auto   ">
          <div className="flex flex-col xl:flex-row   gap-8 items-center justify-center w-full">
            <div className="w-full max-w-[405px] h-[308px] rounded-2xl p-6 text-white border border-[#FFFFFF33]">
              <div className="w-[80px] h-[80px] rounded-lg bg-[#FFFFFF1A] flex justify-center items-center">
                <RiHeadphoneFill className="text-[40px] text-white" />
              </div>
              <h3 className="text-2xl mt-8 font-bold text-white">Help & support</h3>
              <p className=" text-base xl:text-lg mt-4 text-white">
                Email:{" "}
                <a className="text-[#3371E9] text-lg" href="mailto:info@halaproperty.com">
                  info@halaproperty.com
                </a>
              </p>
              <p className=" text-sm xl:text-base mt-2 text-[#CBD5E0]">For help with a current product or service or refer to FAQs and developer tools.</p>
            </div>
            {/* Call */}
            <div className="w-full max-w-[405px] h-[308px] rounded-2xl p-6 text-white border border-[#FFFFFF33]">
              <div className="w-[80px] h-[80px] rounded-lg bg-[#FFFFFF1A] flex justify-center items-center">
                <RiPhoneFill className="text-[40px] text-white" />
              </div>
              <h3 className="text-2xl mt-8 font-bold text-white">Call us</h3>
              <p className="text-base xl:text-lg mt-4">
                <a className="text-[#3371E9] text-base xl:text-lg" href="tel: + 971 362 2254">
                  + 971 362 2254
                </a>
              </p>
              <p className="text-base xl:text-lg ">
                <a className="text-[#3371E9] text-base xl:text-lg" href="tel: + 971 658 3879">
                  + 971 658 3879
                </a>
              </p>
              <p className="text-sm xl:text-base mt-2 text-[#CBD5E0]">Call us to speak to a member of our team.</p>
            </div>
            {/* Whatsapp */}
            <div className="w-full max-w-[405px] h-[308px] rounded-2xl p-6 text-white border border-[#FFFFFF33]">
              <div className="w-[80px] h-[80px] rounded-lg bg-[#FFFFFF1A] flex justify-center items-center">
                <RiWhatsappFill className="text-[40px] text-white" />
              </div>
              <h3 className="text-2xl mt-8 font-bold text-white">WhatsApp</h3>
              <p className="text-base xl:text-lg mt-4">
                <a className="text-[#3371E9] text-base xl:text-lg" href="tel: + 971 362 2254">
                  + 971 362 2254
                </a>
              </p>

              <p className="text-sm xl:text-base mt-2 text-[#CBD5E0]">
                Call us on WhatsApp. <br /> We are interested talk to you.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Part */}
      <div className="bg-[#f7f5f2] xl:bg-white  py-8 xl:py-[100px] px-[16px] xl:px-0">
        <div className="w-full max-w-[1280px] mx-auto ">
          <div className="flex flex-col xl:flex-row  xl:justify-between items-center gap-[40px] xl:items-stretch  ">
            <div className="w-full max-w-[600px]">
              <Image className=" rounded-2xl   h-full" src={contactPage} alt="contact us" />
            </div>
            <div className="w-full max-w-[640px]  flex flex-col justify-center   ">
              <p className=" mt-[6px] xl:mt-3 text-sm xl:text-lg      text-[#323B49]">
                If you have any questions or feedback, please don&apos;t hesitate to contact us. Our team is dedicated to providing you with the best service possible. You can reach us through email at{" "}
                <a className="text-[#0954E5]" href="mailto:info@halaproperty.com">
                  info@halaproperty.com
                </a>
                , or by filling out the contact form on our website. We look forward to hearing from you!
              </p>
              <div className="flex gap-4 mt-6 xl:mt-[60px]">
                <a alt="facebook" href="#" className={`w-[32px] h-[32px] rounded-full bg-darkBlue hover:bg-blue-800 hover:text-white transition flex items-center justify-center text-white`}>
                  <FaFacebookF className="text-base" />
                </a>
                <a alt="twitter" href="#" className={`w-[32px] h-[32px] rounded-full bg-darkBlue hover:bg-white hover:text-black hover:border hover:border-black transition flex items-center justify-center text-white`}>
                  <FaXTwitter className="text-base" />
                </a>
                <a alt="linkedin" href="#" className={`w-[32px] h-[32px] rounded-full bg-darkBlue hover:bg-[#0a66c2] hover:text-white transition flex items-center justify-center text-white`}>
                  <FaLinkedinIn className="text-base" />
                </a>
                <a alt="instagram" href="#" className={`w-[32px] h-[32px] rounded-full bg-darkBlue hover:bg-[#e4405f] hover:text-white transition flex items-center justify-center text-white`}>
                  <FaInstagram className="text-base" />
                </a>
                <a alt="youtube" href="#" className={`w-[32px] h-[32px] rounded-full bg-darkBlue hover:bg-white hover:text-[#ff0000] hover:border hover:border-[#ff0000]  transition flex items-center justify-center text-white`}>
                  <FaYoutube className="text-base" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
