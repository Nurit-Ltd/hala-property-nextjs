import QuestionTabs from "./QuestionTabs";

const FreqAskQuestions = () => {
  return (
    <section>
      <div className="container_fluid">
           <div className="pt-8 pb-10 md:pt-25 md:pb-25">
              <div className="max-w-[1080px] mx-auto">
                 <h2 className="section-header-title text-center text-darkBlue">Frequently Asked <span className="text-primary">Questions</span></h2>
                 <QuestionTabs />
              </div>
           </div>
      </div>
    </section>
  );
};

export default FreqAskQuestions;