import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div>
      <div className="waveWrapper waveAnimation">
        <div className="waveWrapperInner bgTop">
          <div
            className="wave waveTop"
            style={{
              backgroundImage:
                "url('http://front-end-noobs.com/jecko/img/wave-top.png')"
            }}
          ></div>
        </div>
        <div className="waveWrapperInner bgMiddle">
          <div
            className="wave waveMiddle"
            style={{
              backgroundImage:
                "url('http://front-end-noobs.com/jecko/img/wave-mid.png')"
            }}
          ></div>
        </div>
        <div className="waveWrapperInner bgBottom">
          <div
            className="wave waveBottom"
            style={{
              backgroundImage:
                "url('http://front-end-noobs.com/jecko/img/wave-bot.png')"
            }}
          ></div>
        </div>
      </div>
      <div className="titleHeader-box">
        <h1 className="titleHeader-absolute">
          PUG PUG
        </h1>
      </div>
      <div className="titleHeader-box">
        <h1 className="titleHeader">
          Мы подберем для вашего питомцы идеальную пару с которой ему не будет
          скучно.
        </h1>
      </div>
      <div className="button-box">
          <div >
            <Link to="/login" className="navlink navlink-left" exact>
                <p className="ButtonNav button-box-item navlink-left">войти</p>
            </Link>
          </div>
          <Link to="/" className="navlink" exact>
            <p className="ButtonNav button-box-item">регистрация</p>
          </Link>
        </div>
    </div>
  );
};
export default LandingPage;
