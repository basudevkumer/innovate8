import React from "react";
import Button from "./Button";

import BannarImage from "../assets/bannar.png";
import NatureOne from "../assets/nature1.jpg";
import NatureTwo from "../assets/nature2.webp";
import NatureThree from "../assets/nature3.jpg";
import NatureFour from "../assets/nature4.jpg";

const Bannar = () => {
  return (
    <>
      <section
        className="pt-[146px] pb-[240px] !bg-cover !bg-center"
        style={{ background: `url(${BannarImage})` }}
      >
        <div className="max-w-[1320px] mx-auto ">
          <div className="text-center">
            <h1 className="font-openSans font-bold text-[84px]/[100px] text-[#FAFAFE] w-[1050px]    mx-auto">
              YOU’RE UNIQUE.YOUR WEBSITE SHOULD BE TOO
            </h1>
            <h6 className="font-openSans font-normal text-[24px] text-[#E6E5F3] py-[22px]  w-[715px] mx-auto">
              A beautiful website passionately crafted for your small business.
              Our Digital Agency development has changed the way brands and
              businesses use technology for growing business.{" "}
            </h6>
          </div>
          <div className="flex justify-center gap-x-[28px] ">
            <div>
              {" "}
              <Button
                buttonName={"Get Free Quoto"}
                className={
                  " bg-transparent hover:bg-third transition duration-300 ease-in-out "
                }
              />
            </div>
            <div>
              <Button
                buttonName={"Learn More"}
                className={
                  " bg-transparent hover:bg-third transition duration-300 ease-in-out "
                }
              />
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-[1320px] mx-auto ">
        <div className="flex justify-center gap-x-[30px] relative top-[-50px] z-[-1]">
          <div className="">
            <img
              src={NatureOne}
              alt="natureImage"
              className="rounded-[20px] bg-center object-cover  w-[270px] h-[350px]"
            />
          </div>
          <div className="">
            <img
              src={NatureTwo}
              alt="natureImage"
              className="rounded-[20px] bg-center object-cover  w-[200px] h-[496px]"
            />
          </div>
          <div className="">
            <img
              src={NatureFour}
              alt="natureImage"
              className="rounded-[20px] bg-center object-cover  w-[340px] h-[326px]"
            />
          </div>
          <div className="">
            <img
              src={NatureThree}
              alt="natureImage"
              className="rounded-[20px] bg-center object-cover  w-[270px] h-[482px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Bannar;
