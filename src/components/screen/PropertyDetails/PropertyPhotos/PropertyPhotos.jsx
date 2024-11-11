import Image from "next/image";


const PropertyPhotos = ({propertyImage}) => {
  return (
    <div className="space-y-2">
    <div className="grid grid-cols-8 gap-2">
      {/* Large Image */}
      <div className="col-span-5">
        <Image
          src={propertyImage.largeImage.src}
          alt={propertyImage.largeImage.alt}
          className="w-full h-[288px] xl:h-[490px] rounded-lg"
        />
      </div>

      {/* Small Images */}
      <div className="col-span-3 space-y-2">
        {propertyImage.smallImages.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-full h-[140px] xl:h-[241px] rounded-lg"
          />
        ))}
      </div>
    </div>
  </div>
  );
};

export default PropertyPhotos;
