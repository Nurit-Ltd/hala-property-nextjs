import PropertyFullDetails from '@/components/screen/PropertyDetails/PropertyFullDetails/PropertyFullDetails';
import PhotoSlider from '@/components/screen/PropertyDetails/PropertyPhotos/PhotoSlider';
import SimilarProperties from '@/components/screen/PropertyDetails/SimilarProperties/SimilarProperties';


const PropertyDetailsPage = () => {
  return (
    <>
      <PhotoSlider />
      <PropertyFullDetails />
      <SimilarProperties />
    </>
  );
};

export default PropertyDetailsPage;