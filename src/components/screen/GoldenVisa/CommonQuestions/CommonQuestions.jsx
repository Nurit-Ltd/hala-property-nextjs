import Button48 from "@/components/shared/Button/Button48";
import Image from "next/image";
import line from "../../../../assets/golden-visa/line-text.svg";
import CommonQuestionTabs from "./CommonQuestionTabs";

const CommonQuestions = () => {
  return (
    <section className="bg-white">
      <div className="container_fluid">
        <div className="pt-10 md:pt-25 pb-12 md:pb-30">
          <div className="max-w-[1080px] mx-auto">
            <div className="space-y-3 md:space-y-6 text-center">
              <h4 className="section-header-sub-title">
                Frequently Asked Questions
              </h4>
              <h2 className="max-w-[706px] text-darkBlue mx-auto section-header-title">
                Common Questions About Your{" "}
                <span className="text-primary relative">
                  Golden Visa
                  <div className="absolute bottom-0 left-0">
                    <Image src={line} alt="line" />
                  </div>
                </span>
              </h2>
            </div>
            <CommonQuestionTabs />
            <div className="mt-8 md:mt-12 flex items-center justify-center">
               <Button48 buttonTitle="Speak to an Expert" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonQuestions;
