import React from "react";

import ImpactImageOne from "../assets/impact1.png";
import ImpactImageTwo from "../assets/impact2.png";
import ImpactImageTree from "../assets/impact3.png";
import ImpactBannar from "../assets/impactbannar.png";


const Impact = () => {
  return (
    <section className="py-[100px] relative overflow-hidden z-20">
        <div className="absolute bottom-0 right-0 z-[-1]  ">
          <img src={ImpactImageTree} alt="impactimagethree"  className="w-[300px] "/>
        </div>
      <div className="max-w-[1320px] mx-auto ">
        <div className="text-center">
          <h2 className="font-openSans font-bold text-[48px] text-primary">
            We create real impact
          </h2>
          <p
            className="font-openSans font-normal text-[18px]/[30px] text-secondary w-[558px] 
           pt-[30px] mx-auto"
          >
            We design, build and support websites and apps for clients
            worldwide. Create beautiful, eye-catching on-page messages without
            the need for a developer.
          </p>
        </div>
        <div className="pt-[75px] grid grid-cols-2 gap-x-[140px] items-center">
          <div className="flex flex-col gap-y-[40px]">
            <div className="flex items-start gap-x-[35px]">
              <img src={ImpactImageOne} alt="impactImages" />
              <div className=" ">
                <h3 className="font-openSans font-bold text-[30px]/[36px] text-primary">
                  Competitive analysis
                </h3>
                <p className="font-openSans font-normal text-[18px]/[30px] text-secondary w-[343px]  pt-[20px]">
                  With an all-new look and powerful features, Ekko is the best
                  way to ensure success for your business.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-x-[35px]">
              <img src={ImpactImageTwo} alt="impactImagesTwo" />
              <div className=" ">
                <h3 className="font-openSans font-bold text-[30px]/[36px] text-primary">
                  Competitive analysis
                </h3>
                <p className="font-openSans font-normal text-[18px]/[30px] text-secondary w-[343px]  pt-[20px]">
                  With an all-new look and powerful features, Ekko is the best
                  way to ensure success for your business.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={ImpactBannar} alt="impact-bannar-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
