"use client";
import { faqData } from "@/data/faqData";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import downArrow from "../../../../assets/home/down-faq.svg";
import upArrow from "../../../../assets/home/up-faq.svg";

const QuestionTabs = () => {
  const [selected, setSelected] = useState(0);
  const contentRefs = useRef([]);

  const toggle = (i) => {
    setSelected((prev) => (prev === i ? null : i));
  };

  useEffect(() => {
    contentRefs.current.forEach((content, index) => {
      if (content) {
        if (selected === index) {
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          content.style.maxHeight = "0px";
        }
      }
    });
  }, [selected]);

  return (
    <div className="mt-4 md:mt-12">
      {faqData.map((item, i) => (
        <div
          key={i}
          className="border-b border-[#04074E1A]/[10%] mt-3 md:mt-4"
        >
          <div className="py-3 md:py-6 flex items-center justify-between gap-2">
            <div
              onClick={() => toggle(i)}
              className="w-full transition-colors cursor-pointer"
            >
              <h3 className="text-base md:text-2xl font-semibold md:font-bold text-darkBlue">
                {item.Question}
              </h3>
            </div>

            <div onClick={() => toggle(i)} className="pt-1 cursor-pointer">
              <div className="w-5 h-5 md:w-6 md:h-6 text-navy-black transition-transform">
                {selected === i ? (
                  <Image
                    src={upArrow}
                    alt="upArrow"
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                ) : (
                  <Image
                    src={downArrow}
                    alt="downArrow"
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                )}
              </div>
            </div>
          </div>

          <div
            ref={(el) => (contentRefs.current[i] = el)}
            className={`transition-all duration-700 ease-in-out overflow-hidden`}
            style={{ maxHeight: selected === i ? "500px" : "0px" }}
          >
            <div className="pb-3 md:pb-6 pr-4 md:pr-0 text-sm md:text-lg text-grey700 max-w-max md:max-w-[980px]">
              {item.Answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionTabs;
