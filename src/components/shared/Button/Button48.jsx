import { FaArrowRightLong } from "react-icons/fa6";

const Button48 = ({buttonTitle}) => {
  return (
    <button className="h-[48px] rounded-md px-8 py-[14px] text-white bg-primary flex items-center justify-center font-bold gap-2 button-52-box">
      {buttonTitle}
      <FaArrowRightLong className="text-xl" />
    </button>
  );
};

export default Button48;
