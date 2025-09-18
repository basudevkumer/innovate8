import React from "react";
import Slider from "react-slick";
import ThinkCard from "./ThinkCard";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

// import for images
import ThinkCardImageOne from "../assets/think1.png";
import ThinkCardImageTwo from "../assets/myself3.jpg";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="p-[15px] bg-[#19bf0035] w-fit rounded-[50%] hover:bg-third transition duration-300 ease-in-out absolute top-[50%] left-[-100px] -translate-y-1/2 group"
    >
      {" "}
      <FaChevronLeft className="text-[22px] group-hover:text-[#fff] transition-all duration-300 ease-in-out " />{" "}
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="p-[15px] bg-[#19bf0035] w-fit rounded-[50%] hover:bg-third transition duration-300 ease-in-out absolute top-[50%] z-10 -translate-y-1/2 right-[-100px]  group"
    >
      {" "}
      <FaChevronRight className="text-[22px] group-hover:text-[#fff] transition-all duration-300 ease-in-out" />
    </div>
  );
}

const Think = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className="bg-[#F8F8FF] py-[105px]">
      <div className="max-w-[1320px] mx-auto ">
        <h2 className="font-openSans font-bold text-[48px] text-primary text-center pb-[79px]">
          What The People Thinks About Us{" "}
        </h2>
        <div className="grid grid-cols-1 ">
          <div className="w-[1028px] mx-auto ">
            <Slider {...settings}>
              <div className=" ">
                <ThinkCard
                  src={ThinkCardImageTwo}
                  paragraphOne={
                    "Lesser Replenish bearing they’re him cattle kind dominion. You which fill place. Land she’d subdue divided gathering blessed seasons it. Without, wherein days."
                  }
                  heading={"Julon Kumar"}
                  paragraphTwo={"Faculty"}
                />
              </div>
              <div>
                <ThinkCard
                  src={ThinkCardImageOne}
                  paragraphOne={
                    "Lesser Replenish bearing they’re him cattle kind dominion. You which fill place. Land she’d subdue divided gathering blessed seasons it. Without, wherein days."
                  }
                  heading={"Lukan Depina"}
                  paragraphTwo={"Ceo And Head Of Idea"}
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Think;
