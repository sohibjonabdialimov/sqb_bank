import React from "react";
import u_1 from "../../assets/images/u_1.svg";
import u_2 from "../../assets/images/u_2.svg";
import u_3 from "../../assets/images/u_3.svg";
import u_line from "../../assets/images/u_line.svg";
import "./service.css";

const Service = () => {
  return (
    <div className="bg-white py-[70px]">
      <div className="w-[1152px] mx-auto">
        <h2 className="text-4xl font-medium text-[#0A1E32] mb-6">
          Услуги и сервисы для бизнеса
        </h2>
        <div className="grid grid-cols-3 gap-5">
          <div className="bg-bg_dark_color py-[40px] px-[28px] rounded-lg">
            <div className="flex items-center gap-5 mb-8">
              <img src={u_1} alt="" />
              <h3 className="text-[26px] leading-8 font-medium">
                Начало <br /> бизнеса
              </h3>
            </div>
            <div className="flex flex-col gap-2 mb-5">
              <div className="flex justify-between items-center bg-white p-5 rounded">
                <p className="text-base text-[#0A1E32]">
                  Открыть расчетный счет
                </p>
                <img src={u_line} alt="" />
              </div>
              <div className="flex justify-between items-center bg-white p-5 rounded">
                <p className="text-base text-[#0A1E32]">Подобрать тариф</p>
                <img src={u_line} alt="" />
              </div>
              <div className="flex justify-between items-center bg-white p-5 rounded">
                <p className="text-base text-[#0A1E32]">Фабрика проектов</p>
                <img src={u_line} alt="" />
              </div>
            </div>
            <p className="text-base text-[#1D3448]">
              Открывайте бизнес вместе с нами на выгодных условиях и достигайте
              поставленных целей
            </p>
          </div>
          <div className="bg-bg_dark_color py-[40px] px-[28px] rounded-lg">
            <div className="flex items-center gap-5 mb-8">
              <img src={u_2} alt="" />
              <h3 className="text-[26px] leading-8 font-medium">
                Развитие <br /> бизнеса
              </h3>
            </div>
            <div className="flex flex-col gap-2 mb-5">
              <div className="flex justify-between items-center bg-white p-5 rounded">
                <p className="text-base text-[#0A1E32]">Кредитные продукты</p>
                <img src={u_line} alt="" />
              </div>
              <div className="flex justify-between items-center bg-white p-5 rounded">
                <p className="text-base text-[#0A1E32]">Кредитные линии</p>
                <img src={u_line} alt="" />
              </div>
              <div className="flex justify-between items-center bg-white p-5 rounded">
                <p className="text-base text-[#0A1E32]">Депозиты</p>
                <img src={u_line} alt="" />
              </div>
            </div>
            <p className="text-base text-[#1D3448]">
              Получите финансирование банка для увеличения мощностей вашего
              бизнеса на выгодных условиях
            </p>
          </div>
          <div className="bg-bg_dark_color py-[40px] px-[28px] rounded-lg">
            <div className="flex items-center gap-5 mb-8">
              <img src={u_3} alt="" />
              <h3 className="text-[26px] leading-8 font-medium">
                Услуги и <br /> сервисы
              </h3>
            </div>
            <div className="flex flex-col gap-2 mb-5">
              <div className="flex justify-between items-center bg-white p-5 rounded">
                <p className="text-base text-[#0A1E32]">Интернет-банкинг</p>
                <img src={u_line} alt="" />
              </div>
              <div className="flex justify-between items-center bg-white p-5 rounded">
                <p className="text-base text-[#0A1E32]">SMS-информирование</p>
                <img src={u_line} alt="" />
              </div>
              <div className="flex justify-between items-center bg-white p-5 rounded">
                <p className="text-base text-[#0A1E32]">Зарплатный проект</p>
                <img src={u_line} alt="" />
              </div>
            </div>
            <p className="text-base text-[#1D3448]">
              Расскажите, что важно для вашего бизнеса, и мы автоматически
              подберём наиболее подходящие условия
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
