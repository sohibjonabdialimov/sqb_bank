import React from "react";
import d_1 from "../../assets/images/d_1.svg";
import d_2 from "../../assets/images/d_2.svg";
import d_3 from "../../assets/images/d_3.svg";
import d_4 from "../../assets/images/d_4.svg";
import d_5 from "../../assets/images/d_5.svg";
import d_6 from "../../assets/images/d_6.svg";
import d_7 from "../../assets/images/d_7.svg";
import "./business.css";

const Business = () => {
  return (
    <div className="bg-white py-[70px]">
      <div className="w-[1152px] mx-auto">
        <h2 className="text-4xl font-medium text-[#0A1E32] mb-6">Для малого бизнеса</h2>
        <div className="business_grid_wrap">
          <div className="one">
            <img className="w-[100%]" src={d_1} alt="" />
            <div className="business_content_wrap business_absolute">
              <h3>АВТОКРЕДИТ</h3>
              <p>
                На покупку новых электрокаров и всех типов легковых автомобилей
              </p>
            </div>
          </div>
          <div className="two">
            <img src={d_2} alt="" />
            <div className="business_content_wrap business_absolute">
              <h3>Депозиты</h3>
              <p>Увеличивайте свой капитал и получайте максимальные доходы</p>
            </div>
          </div>
          <div className="three">
            <img className="mb-[88px]" src={d_3} alt="" />
            <div className="business_content_wrap">
              <h3>Green banking</h3>
              <p>Поддержка социально и экологически ориентированных проектов</p>
            </div>
            <img className="absolute bottom-0 w-[240px] mx-auto" src={d_6} alt="" />
          </div>
          <div className="four">
            <img src={d_4} alt="" />
            <div className="business_content_wrap business_absolute">
              <h3>Финансирование</h3>
              <p>
                Выгодные условия для расширения и увеличения мощностей вашего
                бизнеса
              </p>
            </div>
          </div>
          <div className="five">
            <img src={d_5} alt="" />
            <div className="business_content_wrap business_absolute">
              <h3>Пакеты обслуживания</h3>
              <p>Операции в национальной и иностранной валюте</p>
            </div>
          </div>
          <div className="six">
            <img src={d_7} alt="" />
            <div className="business_content_wrap business_absolute">
              <h3>Кредитные линии</h3>
              <p>Возможность получить финансирование от крупнейших банков</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
