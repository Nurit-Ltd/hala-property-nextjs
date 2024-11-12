import ExploreTabs from "./ExploreTabs";

const ExploreTheArea = () => {
  return (
    <div className="relative mt-6 md:mt-12">
      <h3 className="property-text-title">Explore the Area</h3>
      <div className="mt-1.5 md:mt-4 space-y-[6px] md:space-y-2 border border-grey400 rounded-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509849!2d144.9537353155044!3d-37.81627974202153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f9a6c7%3A0x5045675218ce6e0!2z5Zub5piO44G_5Zu977yZ5Lit5aSu5p2R5paH5Lu2!5e0!3m2!1sen!2sjp!4v1612381447201!5m2!1sen!2sjp"
          width="100%"
          
          className="rounded-tl-lg rounded-tr-lg h-[161px] md:h-[367px]"
          style={{
            border: 0,
            top: 0,
            left: 0,
            zIndex: 10,
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <ExploreTabs />
      </div>
    </div>
  );
};

export default ExploreTheArea;
