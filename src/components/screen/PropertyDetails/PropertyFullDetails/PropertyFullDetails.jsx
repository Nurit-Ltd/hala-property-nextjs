import DetailsLeftSide from "./DetailsLeftSide/DetailsLeftSide";
import DetailsRightSide from "./DetailsRightSide/DetailsRightSide";

const PropertyFullDetails = () => {
  return (
    <section className="mt-4 md:mt-10">
      <div className="container_fluid">
        <div className="grid xl:grid-cols-12 md:gap-8">
          <div className="xl:col-span-8">
            <DetailsLeftSide />
          </div>
          <div className="xl:col-span-4 hidden md:block">
            <DetailsRightSide />
          </div>
        </div>
        <div className="my-8 w-full h-[1px] bg-grey400"></div>
      </div>
    </section>
  );
};

export default PropertyFullDetails;
