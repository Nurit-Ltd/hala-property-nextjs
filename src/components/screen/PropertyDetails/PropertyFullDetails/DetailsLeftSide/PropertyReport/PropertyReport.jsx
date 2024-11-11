import AvPriceChart from "./AvPriceChart";
import PopularLocations from "./PopularLocations";

const PropertyReport = () => {
  return (
    <div className="mt-12 space-y-4">
      <div className="space-y-[6px]">
        <h3 className="property-text-title">Hala Property report</h3>
        <h5 className="text-sm max-w-[660px] text-grey600">
          The data displayed is based on average prices and sizes of all
          listings based on DLD Transaction data and Hala Property data models.
        </h5>
      </div>
      <div className="space-y-3">
         <div className="w-full flex gap-6">
           <div className="w-[45%]">
              <AvPriceChart />
           </div>
           <div className="w-[55%]">
             <PopularLocations />  
           </div>
         </div>
      </div>
    </div>
  );
};

export default PropertyReport;
