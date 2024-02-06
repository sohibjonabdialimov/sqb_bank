import React from "react";
import u_1 from "../../assets/images/u_1.svg";
import u_2 from "../../assets/images/u_2.svg";
import u_3 from "../../assets/images/u_3.svg";
import u_line from "../../assets/images/u_line.svg";
import "./financial.css";

const Financial = () => {
  return (
    <div className="bg-white py-[70px]">
      <div className="w-[1152px] mx-auto">
        <h2 className="text-4xl font-medium text-[#0A1E32] mb-6">
          Актуально сейчас
        </h2>
        <div className="grid grid-cols-2 gap-5">
          <div className="bg-bg_light_blue py-[40px] px-[28px] rounded-lg">
           
          </div>
          <div className="bg-bg_light_blue py-[40px] px-[28px] rounded-lg">
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financial;
