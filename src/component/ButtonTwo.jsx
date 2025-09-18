import React from "react";

const ButtonTwo = ({ className }) => {
  return (
    <div
      className={` rounded-[41px] py-[8px] px-[15px] relative overflow-hidden  z-1 `}
    >
      <a
        href="#"
        className={`after:absolute after:content-[''] after:h-full after:w-[26%] after:top-0 after:right-0 after:bg-[#19bf006b] after:z-[-1]  font-openSans font-bold text-[18px]/[24px] text-primary  after:transition-all after:duration-700 ease-in-out hover:after:w-full  ${className} `}
      >
        Read more
      </a>
    </div>
  );
};

export default ButtonTwo;
