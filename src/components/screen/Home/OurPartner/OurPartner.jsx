import Image from "next/image";
import companyLogo1 from "../../../../assets/home/company-1.svg";
import companyLogo2 from "../../../../assets/home/company-2.svg";
import companyLogo3 from "../../../../assets/home/company-3.svg";
import companyLogo4 from "../../../../assets/home/company-4.svg";
import companyLogo5 from "../../../../assets/home/company-5.svg";

const OurPartner = () => {
  return (
    <section className="bg-white">
      <div className="container_fluid">
        <div className="py-15">
          <div className="space-y-2">
            <h2 className="section-header-title text-darkBlue text-center">Our <span className="text-primary">Partner</span></h2>
            <h4 className="max-w-[1076px] mx-auto text-lg text-center text-grey700">We collaborate with industry leaders and innovators to bring the best solutions to our customers. Our trusted partners help us enhance our services, ensuring quality, reliability, and mutual success. Together, we achieve more.</h4>
          </div>
          <div className="mt-15 flex items-center justify-between">
             <Image src={companyLogo1} alt="companyLogo1" />
             <Image src={companyLogo2} alt="companyLogo2" />
             <Image src={companyLogo3} alt="companyLogo3" />
             <Image src={companyLogo4} alt="companyLogo4" />
             <Image src={companyLogo5} alt="companyLogo5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartner;
