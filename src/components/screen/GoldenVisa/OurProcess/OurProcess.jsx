import ProcessCard from "./ProcessCard";

const OurProcess = () => {
  return (
    <section>
      <div className="container_fluid">
        <div className="py-10 md:py-25">
          <div className="max-w-[1038px] mx-auto">
            <div className="space-y-2 md:space-y-5 max-w-[690px] mx-auto">
              <h4 className="section-header-sub-title text-center">
                Our Process
              </h4>
              <div className="space-y-2 md:space-y-4">
                <h2 className="section-header-title text-darkBlue text-center">Fast, Efficient, and All Online</h2>
                <h4 className="text-base md:text-lg text-darkBlue text-center">We streamline the entire process for you. Here’s how it works:</h4>
              </div>
            </div>
            <ProcessCard />
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
