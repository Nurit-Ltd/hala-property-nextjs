import BuyHero from "@/components/screen/Buy/BuyHero";
import SearchFilter from "@/components/screen/Buy/SearchFilter";

const BuyPage = () => {
  return (
    <>
      <BuyHero />
      <section className="container_fluid">
        <SearchFilter />
      </section>
    </>
  );
};

export default BuyPage;
