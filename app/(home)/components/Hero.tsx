import FadeIn from "@/app/Base/FadeIn";
import FadeInUp from "@/app/Base/FadeInUp";
import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg"></div>
      <div className="auto__container">
        <div className="hero__inner">
          <div className="hero__inner-content">
            <div className="hero__inner-icon">
              <img src="/images/icons/padlock.svg" alt="" />
            </div>
            <h1>
              Seamless <span>Captcha</span> <b>Solutions,</b> Anytime, Anywhere
            </h1>
            <p>
              Unlock the Full Potential of Websites and Apps with Our
              Cutting-Edge Service
            </p>
            <div className="hero__inner-buttons">
              <a href="#" className="button primary">
                Our solution
              </a>
              <a href="#" className="button secondary">
                Our solution
              </a>
            </div>
          </div>
          <FadeInUp delay={0.2} className="hero__inner-image">
            <img className="front" src="/images/captcha.png" alt="" />
            <img src="/images/captcha-bg.png" alt="" />
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
