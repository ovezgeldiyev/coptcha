import FadeInUp from "@/app/Base/FadeInUp";
import React from "react";

export default function Solver() {
  return (
    <section className="solver">
      <div className="auto__container">
        <div className="solver__inner">
          <FadeInUp delay={0.4} className="solver__inner-image">
            <img src="/images/solver.png" alt="" />
          </FadeInUp>
          <div className="solver__inner-content">
            <h3>
              Best <span>Captcha</span> Solver
            </h3>
            <p>
              We develop an affordable service that allows you to solve captchas
              easily and quickly. By connecting to our intuitive API, you can
              solve any captcha that you want, on the website of your choice,
              may it be Discord, Epic Games, etc. By subscribing to our product,
              you get access to a software that is updated every day and thus
              that is always usable and up-to-date for the new captcha
              technologies.
            </p>
            <a href="#" className="button primary">
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
