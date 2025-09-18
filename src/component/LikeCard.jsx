import React from "react";
import ButtonTwo from "./ButtonTwo";

const LikeCard = ({ src, paragraphOne, paragraphTwo, heading }) => {
  return (
    <div className="grid grid-cols-2 gap-x-[10px items-center ]">
      <div>
        <img
          src={src}
          alt=""
          className="w-[379px] h-[220px] object-cover bg-center rounded-[18px]"
        />
      </div>
      <div>
        <div className="flex gap-x-[35px]">
          <p className="font-openSans font-bold text-[16px]/[22px] text-third ">
            News 
          </p>
          <p className="font-openSans font-medium text-[16px]/[22px] text-secondary  ">
            <span className="pr-[10px]">By </span>  {paragraphOne}
          </p>
          <p className="font-openSans font-medium text-[16px]/[22px] text-secondary ">
            <span className="pr-[10px]">Post</span>  {paragraphTwo}
          </p>
        </div>
        <h5 className="font-openSans font-bold text-[30px]/[55px] text-primary py-[16px]">
          {heading}
        </h5>
        <div className="w-fit">
          <ButtonTwo />
        </div>
      </div>
    </div>
  );
};

export default LikeCard;
