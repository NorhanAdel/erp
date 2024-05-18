import React from "react";
import "./Login.css";
import logo from "../../assests/photo_2024-05-07_22-59-12.jpg";
import IMG from "../../assests/photo_2024-05-07_21-14-05.jpg";
export const Login = () => {
  return (
    <div className="login_page">
      <h1 className="logo" dir="ltr">
        Powered by 
      </h1>
      <img src={IMG} className="login_bg" />
      <div className="login_form">
        <h1 className="form_title">تسجيل الدخول</h1>
        <input type="text" placeholder="ادخل رقم الهاتف" />
        <input type="password" placeholder="ادخل الرقم السرى" />
        <button className="login_btn">تسجيل الدخول</button>
      </div>
    </div>
  );
};
