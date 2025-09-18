import React from "react";
import Button from "./Button";
import WorkCard from "./WorkCard";

import WorkIconOne from "../assets/work1.png";
import WorkIconTwo from "../assets/work2.png";
import WorkIconThree from "../assets/work3.png";
import WorkIconFour from "../assets/work4.png";
import WorkIconFive from "../assets/work5.png";

const Work = () => {
  return (
    <section className="py-[100px] bg-[#F6F5FF]">
      <div className="max-w-[1320px] mx-auto ">
        <div className="grid grid-cols-3 gap-x-[30px] gap-y-[30px]">
          <div>
            <h3 className="font-openSans font-bold text-[48px] text-primary">
              Why Choose Us
            </h3>
            <p className="font-openSans font-normal text-[18px] text-secondary pt-[24px] pb-[56px] w-[385px]">
              We are now a team of strategists, engineers, designers, and
              marketers who both use and develop technology for a variety of
              client needs.
            </p>
            <Button buttonName={"Contact Us"} />
          </div>
          <div>
            <WorkCard
              src={WorkIconOne}
              heading={"web Design & Dev "}
              paragraph={
                "Social Media has changed the way we interact & do business while creating"
              }
            />
          </div>
          <div>
            <WorkCard
              src={WorkIconTwo}
              heading={"Software Dev "}
              paragraph={
                "Content Marketing is the other fold of online advertisement. If you are looking to build"
              }
            />
          </div>
          <div>
            <WorkCard
              src={WorkIconThree}
              heading={"Content Writing "}
              paragraph={
                "Social Media has changed the way we interact & do business while creating a new avenue."
              }
            />
          </div>
          <div>
            <WorkCard
              src={WorkIconFour}
              heading={"Digital Marketing "}
              paragraph={
                "Social Media has changed the way we interact & do business while creating a new avenue."
              }
            />
          </div>
          <div>
            <WorkCard
              src={WorkIconFive}
              heading={"Support & Training "}
              paragraph={
                "Content Marketing is the other fold of online advertisement. If you are looking to build"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
