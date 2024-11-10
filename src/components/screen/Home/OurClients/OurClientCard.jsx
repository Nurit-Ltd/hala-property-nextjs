import Image from "next/image";
import star from "../../../../assets/home/star.svg";

const OurClientCard = ({ testimonial }) => {
  return (
    <div className="p-[9px] md:p-6 rounded-md md:rounded-2xl bg-white border border-grey300 our-client-card-box relative z-30">
      <h4 className="h-[76px] md:h-[87px] text-xs md:text-lg text-grey800 overflow-hidden text-ellipsis whitespace-normal line-clamp-3">{testimonial.text}</h4>
      <div className="w-full h-[1px] my-[9px] md:my-6 bg-grey400"></div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[5px] md:gap-[13px]">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            className="rounded-full w-6 h-6 md:w-[56px] md:h-[56px]"
          />
          <div>
            <h4 className="text-xs md:text-lg font-bold text-[#050C28]">
              {testimonial.name}
            </h4>
            <h5 className="text-[10px] md:text-sm text-grayTextAd">{testimonial.position}</h5>
          </div>
        </div>
        <div className="flex items-center gap-[1.5px] md:gap-1">
          {[...Array(testimonial.rating)].map((_, index) => (
            <Image key={index} src={star} alt="star" className="w-4 h-4 md:w-6 md:h-6" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClientCard;
