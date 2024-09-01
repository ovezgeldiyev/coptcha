import Social from "@/app/Base/Social";
import React from "react";

export default function VerifyAccount() {
  return (
    <>
      {" "}
      <div className="popup__inner-content">
        <p className="sm">
          We sent you an email! Please check your inbox and click on the link in
          the email to reset your credentials!
        </p>
        <p>
          Didn’t receive any? <span>Send a new one </span>
        </p>
      </div>
      <div className="popup__inner-foot">
        <p className="sm">
          Need any help? <br />
          Contact us on our social networks:
        </p>
        <Social />
      </div>
    </>
  );
}
