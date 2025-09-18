import React from "react";
import PlanCard from "./PlanCard";

import EmogiOne from "../assets/planicon1.png";
import EmogiTwo from "../assets/planicon2.png";
import EmogiThree from "../assets/planicon3.png";

const Plan = () => {
  return (
    <section className="bg-[#F9F9FB] py-[60px]">
      <div className="max-w-[1320px] mx-auto ">
        <h2 className="font-openSans font-bold text-[48px] text-primary pb-[64px] text-center">
          Choose The Right Plan
        </h2>
        <div className="grid grid-cols-3 gap-x-[30px]">
          <div>
            <PlanCard
              heading={"Basic"}
              src={EmogiOne}
              currency={"160"}
              paragraph={
                " Responsive Design Dynamic ElementsService Pages Custom Design & Features"
              }
            />
          </div>
          <div>
            <PlanCard
              heading={"Professional"}
              src={EmogiTwo}
              currency={"240"}
              paragraph={
                " Responsive Design Dynamic ElementsService Pages Custom Design & Features"
              }
            />
          </div>
          <div>
            <PlanCard
              heading={"Exclusive"}
              src={EmogiThree}
              currency={"325"}
              paragraph={
                " Responsive Design Dynamic ElementsService Pages Custom Design & Features"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
