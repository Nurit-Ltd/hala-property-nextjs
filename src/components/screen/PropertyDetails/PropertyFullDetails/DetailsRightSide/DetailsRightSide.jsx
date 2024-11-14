import ContactForm from "./ContactForm";
import UserInfoAndContact from "./UserInfoAndContact";

const DetailsRightSide = () => {
  return (
    <div className="max-w-[620px] xl:max-w-max mx-auto xl:mx-0">
      <div className="px-6 pt-[30px] pb-6 border border-grey400 rounded-lg bg-white right-side-box-property">
      <UserInfoAndContact />
      <div className="w-full h-[1px] my-6 bg-grey400"></div>
      <div>
        <h4 className="text-grey600">
          Interested in this property? Leave us a message and our property
          consultants will get back you
        </h4>
      </div>
      <ContactForm />
    </div>
    </div>
  );
};

export default DetailsRightSide;
