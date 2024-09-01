import React, { useState } from "react";
import Social from "./Social";
import Link from "next/link";

export default function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <header className="header">
      <div className="auto__container">
        <div className="header__inner">
          <a href="#" className="header__inner-logo">
            <img src="/images/logo.png" alt="" />
          </a>
          <nav className={"nav " + (menu ? "active" : "")}>
            <div className="nav__inner">
              <div className="nav__inner-buttons">
                <Link href="/auth" className="button sm primary">
                  Log in
                </Link>
                <Link href="/auth" className="button sm secondary">
                  Sign up
                </Link>
              </div>
              <Social />
            </div>
          </nav>
          <div
            className={"burger " + (menu ? "active" : "")}
            onClick={() => {
              setMenu(!menu);
            }}
          >
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
}
