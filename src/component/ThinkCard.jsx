import React from "react";
import { IoIosStar } from "react-icons/io";

const ThinkCard = ({ src, paragraphOne, paragraphTwo, heading }) => {
  return (
    <div className="bg-[#FFFFFF] py-[70px] rounded-[20px] drop-shadow-xl  mt-[80px] mb-[30px] mx-[30px]   flex flex-col items-center relative ">
      <img
        src={src}
        alt="thinkcard images"
        className="w-[147px] h-[147px] rounded-[50%] drop-shadow-lg absolute top-[-76px] 
        left-1/2 -translate-x-1/2  bg-center object-cover"
      />
      <div className="flex  gap-x-[7px] pt-[45px] ">
        <IoIosStar className="text-[25px] text-[#FF7628]" />
        <IoIosStar className="text-[25px] text-[#FF7628]" />
        <IoIosStar className="text-[25px] text-[#FF7628]" />
        <IoIosStar className="text-[25px] text-[#FF7628]" />
        <IoIosStar className="text-[25px] text-[#FF7628]" />
      </div>
      <p className="w-[705px] mx-auto font-openSans font-medium text-[24px]/[40px] text-secondary text-center pt-[33px] pb-[48px]">
        {paragraphOne}
      </p>
      <div className="text-center">
        <h6 className="font-openSans font-bold text-[25px]/[40px] text-primary">
          {heading}
        </h6>
        <p className="font-openSans font-medium text-[16px]/[24px] text-secondary pt-1 ">
          {paragraphTwo}
        </p>
      </div>
    </div>
  );
};

export default ThinkCard;
