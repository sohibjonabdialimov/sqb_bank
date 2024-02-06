import React from "react";
import menu from "../../assets/images/menu.svg";
import logo1 from "../../assets/images/logo1.svg";
import h_search from "../../assets/images/h_search.svg";
import h_eye from "../../assets/images/h_eye.svg";
import h_right from "../../assets/images/h_right.svg";
import location from "../../assets/images/location.svg";
import phone from "../../assets/images/phone.svg";
import green from "../../assets/images/green.svg";
import joyda from "../../assets/images/joyda.svg";
import "./header.css";

const Header = () => {
  return (
    <div className="bg-white">
      <div className="border-b-[1px] border-b-[#E5EBF0]">
        <header className="flex items-center justify-between w-[1152px] mx-auto py-[13px]">
          <nav className="flex items-center gap-8">
            <div className="flex gap-4 items-center">
              <img className="w-8 h-8" src={menu} alt="" />
              <img className="h-[34px]" src={logo1} alt="" />
            </div>
            <div className="">
              <ul className="flex items-center gap-6">
                <li>
                  <a
                    className="font-medium text-sm leading-5 text-navbar_color"
                    href="#"
                  >
                    О банке
                  </a>
                </li>
                <li>
                  <a
                    className="font-medium text-sm leading-5 text-navbar_color"
                    href="#"
                  >
                    Акционерам и инвесторам
                  </a>
                </li>
                <li>
                  <a
                    className="font-medium text-sm leading-5 text-navbar_color"
                    href="#"
                  >
                    Антикоррупция
                  </a>
                </li>
                <li>
                  <a
                    className="font-medium text-sm leading-5 text-navbar_color"
                    href="#"
                  >
                    Продажа имуществ
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <nav className="flex items-center gap-2">
            <button className="w-[30px] h-[30px] bg-[#EFF2F6] flex items-center justify-center rounded">
              <img className="w-5 h-5" src={h_search} alt="" />
            </button>
            <button className="w-[30px] h-[30px] bg-[#EFF2F6] flex items-center justify-center rounded">
              <img className="w-5 h-5" src={h_eye} alt="" />
            </button>
            <button className="w-[30px] h-[30px] bg-[#EFF2F6] flex items-center justify-center rounded">
              <p className="text-sm font-semibold leading-5 text-center text-[#1D3448]">
                RU
              </p>
            </button>
            <button className="flex items-center gap-2 w-[148px] h-[30px] bg-[#EFF2F6] justify-center rounded text-sm leading-5 text-center text-[#1D3448] font-medium">
              Онлайн-банк
              <img className="w-5 h-5" src={h_right} alt="" />
            </button>
          </nav>
        </header>
      </div>
      <div className="w-[1152px] mx-auto flex justify-between items-center">
        <ul className="flex gap-6 items-center">
          <li className="p-[13px] pl-0">
            <a className="text-base text-[#0A1E3266]" href="#">Физическим лицам</a>
          </li>
          <li className="p-[13px] border-b-[2px] border-b-[#003D64]">
            <a className="text-base text-[#0A1E32]" href="#">Малому бизнесу</a>
          </li>
          <li className="p-[13px]">
            <a className="text-base text-[#0A1E3266]" href="#">Корпоративным клиентам</a>
          </li>
        </ul>
        <ul className="flex gap-6 items-center">
          <li className="flex items-center gap-2">
            <img src={phone} alt="" />
            <p className="font-medium text-sm text-[#1D3448]">1180</p>
          </li>
          <li className="flex items-center gap-2">
            <img src={location} alt="" />
            <p className="font-medium text-sm text-[#1D3448]">Офисы и банкоматы</p>
          </li>
          <li>
            <img className="h-[24px]" src={green} alt="" />
          </li>
          <li>
            <button className="w-[26px] h-[26px] flex items-center justify-center bg-[#0064FF] rounded-md">
              <img className="w-[14.73px] h-[13.87px]" src={joyda} alt="" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
