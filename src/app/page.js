import ElevateProperty from "@/components/screen/Home/ElevateProperty/ElevateProperty";
import ExploreMapping from "@/components/screen/Home/ExploreMapping/ExploreMapping";
import FasterInvestments from "@/components/screen/Home/FasterInvestments/FasterInvestments";
import FreqAskQuestions from "@/components/screen/Home/FreqAskQuestions/FreqAskQuestions";
import Hero from "@/components/screen/Home/Hero/Hero";
import LuxuryProperties from "@/components/screen/Home/LuxuryProperties/LuxuryProperties";
import OurClients from "@/components/screen/Home/OurClients/OurClients";
import OurPartner from "@/components/screen/Home/OurPartner/OurPartner";
import ThreeStepDream from "@/components/screen/Home/ThreeStepDream/ThreeStepDream";
import TrendProperties from "@/components/screen/Home/TrendProperties/TrendProperties";

export default function Home() {
  return (
    <>
      <Hero />
      <LuxuryProperties />
      <FasterInvestments />
      <TrendProperties />
      <ElevateProperty />
      <ExploreMapping />
      <ThreeStepDream />
      <OurPartner />
      <OurClients />
      <FreqAskQuestions />
      
    </>
  );
}
