// import Image from "next/image";
// import heroImage from "../../../../assets/home/hero-banner.png";

const Hero = () => {
  return (
    <section className="bg-[url('/hero-banner.png')] w-full h-[900px] bg-no-repeat bg-cover flex items-center justify-center">
      <div className="container_fluid">
          <div className="flex items-center justify-center">
            <div className="max-w-[903px] mx-auto space-y-3">
              <h1 className="text-[72px] font-Merriweather font-bold leading-[93px] text-white text-center">The Future of Real Estate</h1>
              <h3 className="max-w-[749px] mx-auto text-2xl leading-9 text-center text-white">Experience a smarter, faster way to find your perfect property. Discover luxurious homes and investment opportunities tailored to your lifestyle, all at your fingertips.</h3>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Hero;