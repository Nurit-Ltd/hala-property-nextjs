import EstimatedMarket from './EstimatedMarket/EstimatedMarket';
import ExploreTheArea from './ExploreTheArea/ExploreTheArea';
import NameAndFeatures from './NameAndFeatures/NameAndFeatures';
import RightMortgage from './RightMortgage/RightMortgage';

const DetailsLeftSide = () => {
  return (
    <>
      <NameAndFeatures />
      <ExploreTheArea />
      <RightMortgage />
      <EstimatedMarket />
    </>
  );
};

export default DetailsLeftSide;