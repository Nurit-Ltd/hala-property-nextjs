import Image from "next/image";
import heroBanner from "../../../../assets/about-us/hero-banner.svg";


const AboutHero = () => {
  return (
    <section className="mt-15 lg:mt-24">
      <div className="container_fluid">
        <div className="pt-6 md:pt-20 pb-8 md:pb-30">
          <div className="max-w-[949px] mx-auto space-y-4">
            <h1 className="text-xl leading-[30px] md:text-3xl xl:text-[72px] xl:leading-[93px] font-Merriweather text-darkBlue text-center">
              About Us
            </h1>
            <h4 className="text-sm md:text-lg text-grey700 text-center">
              We are dedicated to helping you find the perfect property with
              ease. Our platform offers a wide range of real estate options
              tailored to your needs, whether you&apos;re buying, selling, or
              renting. With a commitment to transparency, trust, and customer
              satisfaction, we make property transactions seamless and
              stress-free.
            </h4>
          </div>
          <div className="mt-4 md:mt-15">
            <Image src={heroBanner} alt="heroBanner" className="rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
