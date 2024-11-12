import Image from "next/image";
import trendingDown from "../../../../../../assets/property-details/trending-down-table.svg";
import trendingUp from "../../../../../../assets/property-details/trending-up-table.svg";

const PopularLocations = () => {
  const locationsData = [
    { id: 1, name: "Horace Spur", price: "3,500", trend: "down", percentage: "-4.8" },
    { id: 2, name: "Karlie Neck", price: "2,100", trend: "up", percentage: "0.9" },
    { id: 3, name: "Langworth Ways", price: "1,430", trend: "down", percentage: "-0.2" },
    { id: 4, name: "Florencio Circles", price: "3,500", trend: "up", percentage: "0.6" },
    { id: 5, name: "Ramon Station", price: "7,200", trend: "up", percentage: "2.8" },
  ];

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-grey100">
              <th className="px-[7px] py-2 md:px-4 md:py-3 text-xs md:text-sm text-center text-grey600 font-semibold rounded-tl-md rounded-bl-md">
                No
              </th>
              <th className="px-[7px] py-2 md:px-4 md:py-3 text-xs md:text-sm text-center text-grey600 font-semibold whitespace-nowrap">
                Location
              </th>
              <th className="px-[7px] py-2 md:px-4 md:py-3 text-xs md:text-sm text-center text-grey600 font-semibold whitespace-nowrap">
                Avg. price/sqf
              </th>
              <th className="px-[7px] py-2 md:px-4 md:py-3 text-xs md:text-sm text-center text-grey600 rounded-tr-md rounded-br-md font-semibold whitespace-nowrap">
                VS Q3 2024
              </th>
            </tr>
          </thead>
          <tbody className="pt-1 md:pt-3">
            {locationsData.map((location, index) => (
              <tr key={location.id} className="border-b border-grey300">
                <td className="px-2 md:px-4 py-2 md:py-2.5 text-xs md:text-sm text-center font-medium text-grey700">
                  {index + 1}
                </td>
                <td className="px-2 md:px-4 py-2 md:py-2.5 text-xs md:text-sm whitespace-nowrap text-center font-medium text-grey700">
                  {location.name}
                </td>
                <td className="px-2 md:px-4 py-2 md:py-2.5 text-xs md:text-sm text-center font-medium text-grey700">
                  {location.price}
                </td>
                <td className="px-2 md:px-4 py-2 md:py-2.5 text-xs md:text-sm text-center font-medium text-grey700 flex items-center gap-[6px]">
                  <Image
                    src={location.trend === "down" ? trendingDown : trendingUp}
                    alt={location.trend === "down" ? "trendingDown" : "trendingUp"}
                  />{" "}
                  {location.percentage}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PopularLocations;
