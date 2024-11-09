import ElevateProperty from "@/components/screen/Home/ElevateProperty/ElevateProperty";
import FasterInvestments from "@/components/screen/Home/FasterInvestments/FasterInvestments";
import Hero from "@/components/screen/Home/Hero/Hero";
import LuxuryProperties from "@/components/screen/Home/LuxuryProperties/LuxuryProperties";
import TrendProperties from "@/components/screen/Home/TrendProperties/TrendProperties";

export default function Home() {
  return (
    <>
      <Hero />
      <LuxuryProperties />
      <FasterInvestments />
      <TrendProperties />
      <ElevateProperty />
    </>
  );
}
