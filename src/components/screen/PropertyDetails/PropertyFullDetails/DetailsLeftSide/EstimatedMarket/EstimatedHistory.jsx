import Image from "next/image";
import Link from "next/link";
import lock from "../../../../../../assets/property-details/lock-closed.svg";
import EstimatedChart from "./EstimatedChart";

const EstimatedHistory = () => {
  return (
    <div className="mt-4 p-6 bg-white border border-grey400 rounded-lg">
      <div className="flex flex-col md:flex-row items-center md:justify-between">
        <h4 className="text-lg font-bold text-grey700">Estimated history</h4>
        <div className="flex items-center gap-2">
          <button className="h-[32px] px-3 py-1.5 rounded-md flex items-center justify-center border border-grey400 text-sm font-semibold text-grey600">
            3 years
          </button>
          <button className="h-[32px] px-3 py-1.5 rounded-md flex items-center justify-center border border-primary text-sm font-semibold text-primary">
            5 years
          </button>
          <div className="h-[32px] px-3 py-1.5 rounded-md flex items-center justify-center border border-grey400 bg-primary/[5%] text-primary gap-2">
            <Image src={lock} alt="lock" />
            <h4 className="text-sm font-semibold text-grey600">
              Unlock more data
            </h4>
            <Link
              href={"#"}
              className="text-sm font-semibold text-primary underline"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] my-4 border border-grey300"></div>
      <div>
        <EstimatedChart />
      </div>
    </div>
  );
};

export default EstimatedHistory;
