import Image from "next/image";
import download from "../../../../assets/property-details/download-app-pro.svg";
import exportIcon from "../../../../assets/property-details/export-app-pro.svg";

const PropertyPhotos = ({ propertyImage }) => {
  const absoluteData = [
    { icon: download, label: "Download" },
    { icon: exportIcon, label: "Request Floor Plan" },
  ];
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-8 gap-2">
        {/* Large Image */}
        <div className="col-span-5 relative">
          <div className="relative overflow-hidden rounded-lg">
            <Image src={propertyImage.largeImage.src} alt={propertyImage.largeImage.alt} className="w-full h-[288px] xl:h-[490px] transition-all duration-300 transform hover:scale-105" />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
          </div>
          <div className="absolute left-4 bottom-4 flex items-center gap-2 z-20">
            {absoluteData.map((button, btnIndex) => (
              <button key={btnIndex} className="h-[38px] px-3 py-2 rounded-md bg-black/[25%] hover:bg-darkBlue border border-white/[60%] hover:border-white/[90%] flex items-center transition-all justify-center gap-1 font-semibold text-white   app-button-box-pro">
                <Image src={button.icon} alt={button.label} className="w-5 h-5 " />
                {button.label}
              </button>
            ))}
          </div>
        </div>

        {/* Small Images */}
        <div className="col-span-3 space-y-2">
          {propertyImage.smallImages.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg">
              <Image src={image.src} alt={image.alt} className="w-full h-[140px] xl:h-[241px] transition-all duration-300 transform hover:scale-105" />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyPhotos;
