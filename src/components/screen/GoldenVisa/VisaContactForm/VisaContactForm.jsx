import Image from "next/image";
import shapesText from "../../../../assets/home/shapes.svg";
import FormPart from "./FormPart";

const VisaContactForm = () => {
  return (
    <section>
      <div className="container_fluid">
        <div className="pt-8 md:pt-30 pb-12 md:pb-20 grid md:grid-cols-2 gap-6 lg:gap-20">
          <div className="max-w-[280px] mx-auto md:mx-0 md:max-w-[469px]">
            <h2 className="section-header-title text-darkBlue text-center xl:text-start">
              We’d Love to{" "}
              <span className="relative">
                Hear{" "}
                <div className="hidden xl:block absolute right-[-20px] md:right-[-18px] xl:right-[-45px] top-[-5px] md:top-[-2px] xl:top-[-15px]">
                  <Image
                    src={shapesText}
                    alt="shapesText"
                    className="w-5 h-5 xl:w-[45px] xl:h-[45px]"
                  />
                </div>
              </span>
              From{" "}
              <span className="relative">
                {" "}
                 You
                <div className="xl:hidden absolute right-[-20px] md:right-[-18px] xl:right-[-45px] top-[-5px] md:top-[-2px] xl:top-[-15px]">
                  <Image
                    src={shapesText}
                    alt="shapesText"
                    className="w-5 h-5 xl:w-[45px] xl:h-[45px]"
                  />
                </div>
              </span>{" "}
              -<span className="text-primary"> Get in Touch!</span>
            </h2>
          </div>
          <div>
            <FormPart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaContactForm;
