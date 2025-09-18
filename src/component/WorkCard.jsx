import React from "react";
import ButtonTwo from "./ButtonTwo";

const WorkCard = ({ src, heading, paragraph }) => {
  return (
    <div className="p-[48px] rounded-[20px] flex flex-col items-center  bg-[#fff] hover:bg-[#6B62C5] transition duration-700 ease-in-out group ">
      <img src={src} alt="WorkIcon" />
      <h4 className="font-openSans font-bold text-[30px]  group-hover:text-[#FAFAFE] text-primary pt-[32px] pb-[16px] transition duration-700 ease-in-out">
        {heading}
      </h4>
      <p className="font-openSans font-normal text-[18px]/[30px] group-hover:text-[#FAFAFE] text-primary transition duration-700 ease-in-out w-[245px]   ">
        {paragraph}
      </p>
      <div className="pt-[23px]">
        <ButtonTwo
          className={
            "group-hover:after:bg-[#ffffff52] transition duration-700 ease-in-out group-hover:text-[#FAFAFE]  "
          }
        />
      </div>
    </div>
  );
};

export default WorkCard;
