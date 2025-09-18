import React from "react";
import LikeCard from "./LikeCard";

import NatureOne from "../assets/nature5.jpg";
import NatureTwo from "../assets/nature6.jpg";
import NatureThree from "../assets/nature7.jpg";

const Like = () => {
  return (
    <section className="py-[100px]">
      <div className="max-w-[1320px] mx-auto ">
        <h2 className="font-openSans font-bold text-[50px]/[65px] text-primary">
          You May Also Like{" "}
        </h2>
        <div className="pt-[64px] ">
          <div>
            <LikeCard
              src={NatureOne}
              heading={
                " Punto Pago Allows Quick And Secure Payments For Services In Panama"
              }
              paragraphOne={"Tomas Nikelson "}
              paragraphTwo={"5 Hours Ago"}
            />
          </div>
          <div className="py-[60px]">
            <LikeCard
              src={NatureTwo}
              heading={
                " Punto Pago Allows Quick And Secure Payments For Services In Panama"
              }
              paragraphOne={"Tomas Nikelson "}
              paragraphTwo={"5 Hours Ago"}
            />
          </div>
          <div>
            <LikeCard
              src={NatureThree}
              heading={
                " Punto Pago Allows Quick And Secure Payments For Services In Panama"
              }
              paragraphOne={"Tomas Nikelson "}
              paragraphTwo={"5 Hours Ago"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Like;
