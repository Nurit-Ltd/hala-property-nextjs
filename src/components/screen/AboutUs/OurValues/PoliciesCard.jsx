import Image from "next/image";
import efficiency from "../../../../assets/about-us/efficiency.svg";
import Innovation from "../../../../assets/about-us/innovation.svg";
import privacy from "../../../../assets/about-us/privacy.svg";
import professionalism from "../../../../assets/about-us/professionalism.svg";
import reliability from "../../../../assets/about-us/reliability.svg";
import transparency from "../../../../assets/about-us/transparency.svg";

const PoliciesCard = () => {
  const PoliciesData = [
    {
      icon: Innovation,
      title: "Innovation",
      des: "Innovation drives everything we do. We embrace cutting-edge technology to deliver smarter, faster, and more efficient solutions for our customers",
    },
    {
      icon: professionalism,
      title: "Professionalism",
      des: "Expert service with a commitment to integrity, quality, and reliability in every detail",
    },
    {
      icon: efficiency,
      title: "Efficiency",
      des: "Maximizing productivity with minimal effort, delivering fast and effective solutions for all your needs",
    },
    {
      icon: transparency,
      title: "Transparency",
      des: "Clear and open communication at every step, ensuring you have all the information you need for confident decisions",
    },
    {
      icon: reliability,
      title: "Reliability",
      des: "Count on us for accurate listings and trusted service, ensuring a seamless property experience every time",
    },
    {
      icon: privacy,
      title: "Privacy",
      des: "We protect your data and ensure it's used only to improve your experience. Your privacy is our priority",
    },
  ];
  return (
    <div className="mt-16 grid grid-cols-3 gap-y-8 gap-x-12">
      {PoliciesData.map((item, index) => {
        return (
          <div key={index} className="flex items-start gap-4">
            <Image src={item.icon} alt="Innovation" />
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-darkBlue">{item.title}</h3>
              <h4 className="text-grey700">{item.des}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PoliciesCard;
