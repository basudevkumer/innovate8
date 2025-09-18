import React from "react";

const ChooseCard = ({ paragraph, src }) => {
  return (
    <div className="py-[30px] px-[28px] flex gap-x-[37px] items-center w-full bg-[#fff] relative hover:top-[-5px] hover:shadow-xl transition duration-300 ease-in-out">
      <img src={src} alt="ChooseIcons" />
      <p className="font-openSans font-normal text-[18px]/[30px] text-secondary w-[319px]">
        {paragraph}
      </p>
    </div>
  );
};

export default ChooseCard;
