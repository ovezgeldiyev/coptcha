import React from "react";
import Form from "./Form";

export default function Intro() {
  return (
    <section className="intro">
      <div className="introSide">
        <div className="introSide__image">
          <img src="/images/login-image.png" />
        </div>
      </div>
      <div className="introMain">
        <Form />
      </div>
    </section>
  );
}
