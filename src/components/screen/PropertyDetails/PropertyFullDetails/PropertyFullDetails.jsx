import DetailsLeftSide from "./DetailsLeftSide/DetailsLeftSide";
import DetailsRightSide from "./DetailsRightSide/DetailsRightSide";

const PropertyFullDetails = () => {
  return (
    <section className="mt-10">
      <div className="container_fluid">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-8">
            <DetailsLeftSide />
          </div>
          <div className="col-span-4">
            <DetailsRightSide />
          </div>
        </div>
        <div className="my-8 w-full h-[1px] bg-grey400"></div>
      </div>
    </section>
  );
};

export default PropertyFullDetails;