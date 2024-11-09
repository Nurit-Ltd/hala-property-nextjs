import { testimonials } from "@/data/ourClientData";
import Image from "next/image";
import star from "../../../../assets/home/star.svg";
import worldMap from "../../../../assets/home/worldMap.svg";

const OurClients = () => {
  return (
    <section className="pt-20">
      <div className="bg-darkBlue py-20 relative">
        <h2 className="section-header-title text-white text-center relative z-30">
          What Our Clients Are Saying
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-5 relative z-30">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-2xl p-6 bg-white border border-grey300 our-client-card-box"
            >
              <h4 className="text-lg text-grey800">{testimonial.text}</h4>
              <div className="w-full h-[1px] my-6 bg-grey400"></div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[13px]">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-[#050C28]">
                      {testimonial.name}
                    </h4>
                    <h5 className="text-sm text-grayTextAd">
                      {testimonial.position}
                    </h5>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Image key={index} src={star} alt="star" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <Image src={worldMap} alt="worldMap" />
        </div>
      </div>
    </section>
  );
};

export default OurClients;
