import React from "react";
import Social from "./Social";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="auto__container">
        <div className="footer__inner">
          <div className="footer__inner-row">
            <div className="footer__inner-main">
              <div className="footer__inner-logo">
                <img src="/images/logo.png" alt="" />
              </div>
              <p className="sm">Copyrights © 2020 - 2023 All rights reserved</p>
            </div>
            <Social />
            <div className="footer__inner-terms">
              <h5>Legal</h5>
              <a href="#">Terms of Service</a>
            </div>
          </div>
          <div className="footer__inner-copy">
            <p className="sm">Copyrights © 2020 - 2023 All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
