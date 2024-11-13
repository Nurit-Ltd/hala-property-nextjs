import BuyHero from "@/components/screen/Buy/BuyHero";
import SearchFilter from "@/components/screen/Buy/SearchFilter";
import TabFilter from "@/components/screen/Buy/TabFilter";
import ProductCard from "@/components/shared/ProductCard/ProductCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cardData } from "@/data/productCardData";

const BuyPage = () => {
  return (
    <>
      <BuyHero />
      <section className="container_fluid pb-15 lg:pb-24">
        <SearchFilter />
        <TabFilter />

        <div className="space-y-6">
          <h2 className="section-header-title !text-2xl pt-8 lg:pt-0">
            {cardData.length * 3} Properties found
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {cardData.map((card) => (
              <ProductCard
                key={card.id}
                card={card}
              />
            ))}
            {cardData.map((card) => (
              <ProductCard
                key={card.id}
                card={card}
              />
            ))}
            {cardData.map((card) => (
              <ProductCard
                key={card.id}
                card={card}
              />
            ))}
          </div>
          <div className="hidden sm:block">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    isActive={true}
                    href="#"
                  >
                    1
                  </PaginationLink>
                </PaginationItem>{" "}
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>{" "}
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>{" "}
                <PaginationItem>
                  <PaginationLink href="#">4</PaginationLink>
                </PaginationItem>{" "}
                <PaginationItem>
                  <PaginationLink href="#">5</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </section>
    </>
  );
};

export default BuyPage;
