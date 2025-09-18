import React from "react";

const PlanCard = ({ heading, src, currency, paragraph, imageClassName }) => {
  return (
    <div className=" py-[50px]   flex flex-col items-center rounded-[20px] bg-[#fff] hover:bg-[#6B62C5] drop-shadow-xl relative top-0 hover:-translate-y-[10px]  transition-all duration-500 ease-in-out group ">
      <h3 className="font-openSans font-bold text-[30px]/[36px] text-primary pb-[26px] group-hover:text-[#FAFAFE]  transition-all duration-500 ease-in-out ">
        {heading}
      </h3>
      <div className="w-full bg-[#ECEDF0] flex justify-center group-hover:bg-[#ffffff34]  transition-all duration-500 ease-in-out py-[10px] ">
        <img
          src={src}
          alt="plan card imgage"
          className={`h-[135px] ${imageClassName}`}
        />
      </div>
      <h2 className=" pt-[20px] font-nunito font-extrabold text-[48px]/[50px] text-third flex items-start gap-x-[5px] ">
        <span className="font-medium text-[24px]/[25px] ">$</span>
        {currency}
      </h2>
      <p className="font-nunito font-extrabold text-[18px]/[32px] text-secondary w-[227px] text-center pt-[14px] group-hover:text-[#FAFAFE]  transition-all duration-500 ease-in-out">
        {paragraph}
      </p>
    </div>
  );
};

export default PlanCard;
