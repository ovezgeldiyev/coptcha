"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  const [isShown, setIsShown] = useState(false);
  const [sideActive, setSideActive] = useState(false);
  return (
    <div className="dash">
      <Sidebar sideActive={sideActive} setSideActive={setSideActive} />
      <div className="dashMain">
        <div className="dashMain__head">
          <h5>User Panel</h5>
          <div className="dashMain__logo">
            <img src="/images/logo.png" />
          </div>
          <div
            className={"burger " + (sideActive ? "active" : "")}
            onClick={() => setSideActive(true)}
          >
            <span></span>
          </div>
        </div>
        <div className="dashMain__body">
          <div className="dashMain__body-row">
            <div className="dashItem">
              <h6>Balance</h6>
              <div className="dashItem__price active">
                {" "}
                <b>$</b> 42,069
              </div>
              <div className="dashItem__foot big">
                <button type="button" className="button sm primary">
                  top up
                </button>
              </div>
            </div>
            <div className="dashItem">
              <h6>Max Threads</h6>
              <div className="dashItem__price">
                {" "}
                <b>$</b> 42,069
              </div>
            </div>
            <div className="dashItem">
              <h6>Balance</h6>
              <div className={"dashItem__key " + (isShown ? "" : "hidden")}>
                7B27BQ18 <span></span>
              </div>
              <div className="dashItem__foot">
                <button
                  type="button"
                  className="button sm primary"
                  onClick={() => setIsShown(!isShown)}
                >
                  Reveal
                </button>
                <button type="button" className="button sm purple">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
