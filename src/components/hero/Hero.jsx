import React from "react";
import hero from "../../assets/images/home_img.svg";
import "./hero.css";

const Hero = () => {
  return (
    <div className="bg-bg_dark_color">
      <div className="w-[1152px] mx-auto">
        <div className="relative pt-[150px] pb-[180px]">
          <h1 className="text-[46px] text-[#0A1E32] font-semibold mb-1">
            Кредит “MIKRO”
          </h1>
          <p className="w-[300px] text-[22px] text-[#0A1E32CC] font-medium mb-5">
            Кредит на любые цели в эквиваленте до 500 000 $
          </p>
          <div className="flex gap-[10px]">
            <button className="border-transparent border-[1px] text-base bg-transparent px-[30px] py-[10px] rounded bg-gradient-linear text-white">
              Оформить
            </button>
            <button className="border-[#1D3448] border-[1px] text-base bg-transparent px-[30px] py-[10px] rounded">
              Подробнее
            </button>
          </div>
          <div className="absolute bottom-0 right-16">
            <img src={hero} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
