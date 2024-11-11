import PropertyFullDetails from "@/components/screen/PropertyDetails/PropertyFullDetails/PropertyFullDetails";
import PhotoSlider from "@/components/screen/PropertyDetails/PropertyPhotos/PhotoSlider";
import SimilarProperties from "@/components/screen/PropertyDetails/SimilarProperties/SimilarProperties";

const PropertyDetailsPage = () => {
  return (
    <div className="bg-white">
      <PhotoSlider />
      <PropertyFullDetails />
      <SimilarProperties />
    </div>
  );
};

export default PropertyDetailsPage;
