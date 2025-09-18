import React from "react";
import ChooseCard from "./ChooseCard";

import ChooseImage from "../assets/choose1.png";
import ChooseIcons from "../assets/chooseicon.png";
import Button from "./Button";

const Choose = () => {
  return (
    <section className="py-[105px] relative ">
      <img
        src={ChooseImage}
        alt="chooes images"
        className="absolute top-0 left-0 w-[300px] z-[-1]"
      />

      <div className="max-w-[1320px] mx-auto ">
        <div className="grid grid-cols-2 gap-x-[170px]">
          <div className="flex flex-col gap-y-[15px]">
            <div>
              <ChooseCard
                src={ChooseIcons}
                paragraph={
                  "We solve real-world problems through people and the web."
                }
              />
            </div>
            <div>
              <ChooseCard
                src={ChooseIcons}
                paragraph={
                  "We solve real-world problems through people and the web."
                }
              />
            </div>
            <div>
              <ChooseCard
                src={ChooseIcons}
                paragraph={
                  "We solve real-world problems through people and the web."
                }
              />
            </div>
            <div>
              <ChooseCard
                src={ChooseIcons}
                paragraph={
                  "We solve real-world problems through people and the web."
                }
              />
            </div>
          </div>
          <div>
            <h3 className="font-openSans font-bold text-[48px] text-primary">
              Why Choose Us
            </h3>
            <p className="font-openSans font-normal text-[18px] text-secondary pt-[24px] pb-[56px] w-[393px]">
              We are now a team of strategists, engineers, designers, and
              marketers who both use and develop technology for a variety of
              client needs.
            </p>
            <Button buttonName={"Contact Us"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
