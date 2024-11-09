import Image from "next/image";
import shapesText from "../../../../assets/home/shapes.svg";

const ElevateProperty = () => {
  return (
    <section className="bg-secBg">
      <div className="container_fluid">
        <div className="pt-25 pb-20 grid grid-cols-2 items-center">
          <div className="max-w-[548px] space-y-4">
            <div>
              <div className="relative">
                <h2 className="section-header-title text-darkBlue">
                  Elevate your
                </h2>
                <div className="absolute right-[40%] top-[-15px]">
                  <Image src={shapesText} alt="shapesText" />
                </div>
              </div>
              <h2 className="section-header-title text-primary">
                Property Experiences
              </h2>
            </div>
            <div>
              <h4 className="text-lg text-grey700">
                &quot;Elevate your property experiences with cutting-edge
                technology and personalized services that bring luxury,
                efficiency, and ease to your space. From seamless automation to
                tailored management solutions, we redefine how you interact with
                your property, ensuring every moment is optimized for comfort
                and convenience.&quot;
              </h4>
            </div>
          </div>
          <div className="">
            <div className="bg-[url('/elevateProperty-pic.jpeg')] relative w-[485px] h-[580px] bg-cover rounded-2xl">
              <div
                className="absolute top-0 left-0 right-0 opacity-90 w-[485px] h-[580px] rounded-2xl"
                style={{
                  background:
                    "linear-gradient(0deg, #000000 3.31%, rgba(0, 0, 0, 0) 100%)",
                }}
              ></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                <h4 className="text-[32px] font-bold text-white">Claydon House</h4>
                <h5 className="text-sm text-white/[90%]">Experience refined urban living with stunning views of Downtown Dubai and Ras Al Khor Wildlife Sanctuary coupled with exceptional amenities.</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElevateProperty;
