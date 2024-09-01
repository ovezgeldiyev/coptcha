import React, { useRef } from "react";

export default function Pricing() {
  const pricingCard = useRef<any>(null);
  const pricingCard2 = useRef<any>(null);
  const pricingCard3 = useRef<any>(null);
  const handleMouseMove = (e: any, elm: any) => {
    const rect = elm?.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    elm?.style.setProperty("--mouse-x", `${x}px`);
    elm?.style.setProperty("--mouse-y", `${y}px`);
  };
  return (
    <section className="pricing">
      <div className="auto__container">
        <div className="pricing__inner">
          <div className="pricing__inner-title">
            <h2>
              Our <span> Pricing</span>
            </h2>
          </div>
          <div className="pricing__inner-row">
            <div
              className="pricingCard"
              ref={pricingCard}
              onPointerMove={(e) => handleMouseMove(e, pricingCard?.current)}
            >
              <div className="pricingCard__star">
                <img src="/images/icons/star.svg" alt="" />
              </div>
              <h4>
                <span>Cheapest</span> prices <br /> on the Market !
              </h4>
              <div className="pricingCard__price">
                <h3>0.002$</h3>
                <h6>Per captcha solved</h6>
              </div>
              <div className="pricingCard__foot">
                <p>What are you waiting for ?</p>
                <a href="#" className="button primary">
                  Subscribe now
                </a>
              </div>
            </div>
            <div className="pricing__inner-col">
              <div
                className="pricingContent"
                ref={pricingCard2}
                onPointerMove={(e) => handleMouseMove(e, pricingCard2?.current)}
              >
                <h5>Our Payment Service Provider</h5>
                <p className="sm">
                  We are working with a renowned payment service provider in
                  order to bring you the <span>best customer experience</span>{" "}
                  possible and ensure that all your <span>crypto payments</span>{" "}
                  toward our service are made easy, <span>secured</span> and
                  straight forward !
                </p>
                <div className="pricingContent__logo">
                  <img src="/images/logos/sellix.png" alt="" />
                </div>
              </div>
              <div
                className="pricingContent"
                ref={pricingCard3}
                onPointerMove={(e) => handleMouseMove(e, pricingCard3?.current)}
              >
                <h5>Payment Methods We Support</h5>
                <div className="pricingContent__row">
                  <div className="pricingContent__item">
                    <img src="/images/cryptos/1.png" alt="" />
                  </div>
                  <div className="pricingContent__item">
                    <img src="/images/cryptos/2.png" alt="" />
                  </div>
                  <div className="pricingContent__item">
                    <img src="/images/cryptos/3.png" alt="" />
                  </div>
                  <div className="pricingContent__item">
                    <img src="/images/cryptos/4.png" alt="" />
                  </div>
                  <div className="pricingContent__item">
                    <img src="/images/cryptos/5.png" alt="" />
                  </div>
                  <div className="pricingContent__item">
                    <img src="/images/cryptos/6.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
