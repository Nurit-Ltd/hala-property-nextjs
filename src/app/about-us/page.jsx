import AboutHero from "@/components/screen/AboutUs/AboutHero/AboutHero";
import OurFounder from "@/components/screen/AboutUs/OurFounder/OurFounder";
import OurValues from "@/components/screen/AboutUs/OurValues/OurValues";
import OurVision from "@/components/screen/AboutUs/OurVision/OurVision";
import OurPartner from "@/components/screen/Home/OurPartner/OurPartner";

const AboutUsPage = () => {
  return (
    <>
      <AboutHero />
      <OurVision />
      <OurValues />
      <OurFounder />
      <OurPartner />
    </>
  );
};

export default AboutUsPage;
