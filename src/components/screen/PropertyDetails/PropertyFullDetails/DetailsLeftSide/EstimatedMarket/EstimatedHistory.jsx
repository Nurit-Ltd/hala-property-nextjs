import EstimatedChart from "./EstimatedChart";

const EstimatedHistory = () => {
  return (
    <div className="mt-4 p-6 bg-white border border-grey400 rounded-lg">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-bold text-grey700">Estimated history</h4>
        
      </div>
      <div>
          <EstimatedChart />
        </div>
    </div>
  );
};

export default EstimatedHistory;
