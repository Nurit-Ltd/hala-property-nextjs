
import CommonQuestions from "@/components/screen/GoldenVisa/CommonQuestions/CommonQuestions";
import FreSecAndOpportunity from "@/components/screen/GoldenVisa/FreSecAndOpportunity/FreSecAndOpportunity";
import HeroVisa from "@/components/screen/GoldenVisa/HeroVisa/HeroVisa";
import InvestInProperty from "@/components/screen/GoldenVisa/InvestInProperty/InvestInProperty";
import OurProcess from "@/components/screen/GoldenVisa/OurProcess/OurProcess";
import ServiceRefund from "@/components/screen/GoldenVisa/ServiceRefund/ServiceRefund";
import VisaContactForm from "@/components/screen/GoldenVisa/VisaContactForm/VisaContactForm";

const GoldenVisaPage = () => {
  return (
    <>
      <HeroVisa />
      <FreSecAndOpportunity />
      <InvestInProperty />
      <OurProcess />
      <ServiceRefund />
      <VisaContactForm />
      <CommonQuestions />
    </>
  );
};

export default GoldenVisaPage;
