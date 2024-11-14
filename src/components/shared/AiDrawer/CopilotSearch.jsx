import React from "react";
import { IoMdClose } from "react-icons/io";
import copilotIcon from "@/assets/copilot.png";
import Image from "next/image";
import { PiPaperPlaneRight } from "react-icons/pi";

const QA = [
  {
    question: "Do you able to find best properties in UAE?",
    answer: "I can definitely help guide you! Whether you're looking for luxurious apartments in Dubai or cozy villas in Abu Dhabi, this sites should have you covered. What type of property are you thinking about?",
  },
  {
    question: "I’ve been considering the Brookfield and Maple Grove areas. I’ve heard they’re family-friendly and have good schools.",
    answer: "Yes, both are excellent choices. Brookfield has a slightly higher average home price but offers larger lot sizes, while Maple Grove is known for its parks and proximity to shopping centers.",
  },
  {
    question: "Ive been considering the Brookfield and Maple Grove areas. I’ve heard they’re family-friendly and have good schools.",
    answer: "Yes, both are excellent choices. Brookfield has a slightly higher average home price but offers larger lot sizes, while Maple Grove is known for its parks and proximity to shopping centers.",
  },
];

const Suggestions = ["Show more properties", "Latest properties"];

const CopilotSearch = ({ setOpen }) => {
  return (
    <div className="w-full  ">
      {/* height h-screen minus 96px */}
      <div className="flex w-full relative items-center py-4 px-6 justify-between gap-2  shadow pb-4 border-b border-[#CBD5E0]">
        <div className="flex items-center justify-center  gap-3 ">
          <Image src={copilotIcon} alt="copilot" className="w-[32px]" />
          <h5 className="font-bold text-darkBlue text-lg">Search with Copilot</h5>
        </div>
        <IoMdClose onClick={() => setOpen(false)} className="cursor-pointer" />
      </div>
      {/* Copilot Icon */}
      <div className="max-h-[calc(100vh-380px)] overflow-y-scroll ">
        <div className="w-full  max-w-[352px] h-[177px] mx-auto mt-[18px] mb-[42px] flex flex-col items-center ">
          <Image src={copilotIcon} alt="copilot" className="w-[72px]" />
          <h5 className="font-bold h-[25px] mt-4 text-darkBlue text-lg">Your Copilot AI Assistant</h5>
          <p className="text-center mt-1 text-[#687588] text-sm">It&apos;s the AI-powered companion that keeps you organized and efficient, so you can focus on what matters most</p>
        </div>
        {/* Question and Answer */}
        <div className="">
          {/* <div className="h-[44px] rounded-lg w-[304px] ml-auto bg-[#0954E5] text-sm shadow-sm py-3 px-2 text-white">Do you able to find best properties in UAE?</div>
        <div className="  rounded-lg mt-4 w-[304px] mr-auto bg-[#E6EEFC] text-sm shadow-sm py-3 px-2 text-[#04074E]">I can definitely help guide you! Whether you're looking for luxurious apartments in Dubai or cozy villas in Abu Dhabi, this sites should have you covered. What type of property are you thinking about?</div> */}
          {QA.map((qa) => (
            <div key={qa.question} className="flex flex-col mt-4">
              <div className="  rounded-lg w-[304px] ml-auto bg-[#0954E5] text-sm shadow-sm py-3 px-2 text-white">{qa.question}</div>
              <div className="  rounded-lg mt-4 w-[304px] mr-auto bg-[#E6EEFC] text-sm shadow-sm py-3 px-2 text-[#04074E]">{qa.answer}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Suggestions */}
      <div className="mt-[50px] mb-[28px] flex justify-center items-center gap-2">
        {/* <div className="border inline-block border-[#687588] px-4 py-2 rounded-[100px]">Show more properties</div> */}
        {Suggestions.map((suggestion) => (
          <div key={suggestion} className="border inline-block border-[#687588] px-4 py-2 rounded-[100px]">
            {suggestion}
          </div>
        ))}
      </div>
      <div className="pb-[32px]">
        <div className="h-[48px]  max-w-[352px]  mx-auto py-[10px]  px-[16px] border border-[#CBD5E0] rounded-lg flex justify-between items-center w-full">
          <input type="text" className=" w-full border-none focus:outline-none placeholder:text-sm placeholder:text-[#687588] " placeholder="Ask me anything..." />

          <button className="flex items-center  ">
            <PiPaperPlaneRight className="text-[#0954E5] text-[20px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CopilotSearch;
