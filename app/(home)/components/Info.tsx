import React, { useEffect, useRef } from "react";
import CountUp from "react-countup";
const infoItems = [
  {
    id: "1",
    title: "Trusted",
    number: 1000,
    additional: "+",
    desc: "Happy Customers",
  },
  {
    id: "2",
    title: "Efficient",
    number: 400000,
    desc: "Captcha solved every day",
  },
  {
    id: "3",
    title: "Fast",
    additional: "Sec",
    number: 13,
    desc: "In average to solve a Captcha",
  },
  {
    id: "4",
    title: "Stable",
    number: 400,
    desc: "Captcha solved every minute",
  },
];
export default function Info() {
  return (
    <section className="info">
      <div className="info__bg">
        <div className="info__bg-image">
          <img src="/images/cubes.png" alt="" />
        </div>
      </div>
      <div className="auto__container">
        <div className="info__inner">
          <div className="info__inner-title">
            <h2>Unveiling Our Unique Attributes</h2>
          </div>
          <div className="info__inner-row">
            {infoItems.map((item, index) => {
              return <InfoItem {...item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
const InfoItem = (props: any) => {
  return (
    <div className="infoItem">
      <div className="infoItem__title">
        <h6>{props.title}</h6>
      </div>
      <div className="infoItem__content">
        <h2>
          <CountUp
            className="infoItem__num"
            enableScrollSpy={true}
            start={0}
            end={props.number}
            duration={2.5}
            delay={1}
          />{" "}
          {props.additional}
        </h2>
        <p className="sm">{props.desc}</p>
      </div>
    </div>
  );
};
