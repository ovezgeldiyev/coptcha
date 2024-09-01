import PopUp from "@/app/Base/PopUp";
import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import ForgetPassword from "./ForgetPassword";
import { AnimatePresence } from "framer-motion";

export default function Form() {
  const [type, setType] = useState("login");
  const [modal, setModal] = useState(null);
  return (
    <>
      <div className="introForm__wrapper">
        <div className="introForm__logo">
          <img src="/images/logo.png" />
        </div>
        <div className="introForm">
          <div className="introForm__head">
            <button
              type="button"
              className={type === "login" ? "active" : ""}
              onClick={() => setType("login")}
            >
              Log in
            </button>
            <button
              type="button"
              className={type === "signup" ? "active" : ""}
              onClick={() => setType("signup")}
            >
              Sign up
            </button>
          </div>
          {type === "login" && <Login setModal={setModal} />}
          {type === "signup" && <Signup setModal={setModal} />}
        </div>
      </div>
      <AnimatePresence>
        {modal === "forgetPassword" && (
          <PopUp title="You forgot your password ? " setModal={setModal}>
            <ForgetPassword />
          </PopUp>
        )}{" "}
        {modal === "verifyAccount" && (
          <PopUp title="You forgot your password ? " setModal={setModal}>
            <ForgetPassword />
          </PopUp>
        )}
      </AnimatePresence>
    </>
  );
}
